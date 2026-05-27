/* ============================================
   Letter Wheel - Polished ring style
   ============================================ */

const Wheel = (() => {
  const canvas = document.getElementById('wheel-canvas');
  const ctx = canvas.getContext('2d');
  const previewBox = document.getElementById('preview-box');

  const DPR = window.devicePixelRatio || 1;
  const LOGICAL_SIZE = 220;
  canvas.width = LOGICAL_SIZE * DPR;
  canvas.height = LOGICAL_SIZE * DPR;
  canvas.style.width = LOGICAL_SIZE + 'px';
  canvas.style.height = LOGICAL_SIZE + 'px';
  ctx.scale(DPR, DPR);

  const CENTER = LOGICAL_SIZE / 2;
  const NODE_RADIUS = 88;
  const NODE_CIRCLE_R = 22;
  const NODE_HIT_RADIUS = 30;

  let letters = [];
  let lastLetters = [];
  let lastTargets = [];
  let nodes = [];
  let selectedIndices = [];
  let isDragging = false;
  let currentPointer = { x: 0, y: 0 };
  let onWordComplete = null;

  let previewIsError = false;

  // Pre-allocated particle pool for 60fps stutter-free trailing effects
  const PARTICLE_COUNT = 25;
  const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: 0, y: 0,
    vx: 0, vy: 0,
    size: 0,
    alpha: 0,
    active: false
  }));
  let animId = null;

  const COLORS = {
    guideRing: '#d8dee9',
    nodeBg: '#ffffff',
    nodeShadow: 'rgba(45, 58, 74, 0.12)',
    centerBg: '#4a9eff',
    centerText: '#ffffff',
    letterText: '#4a9eff',
    letterSelected: '#ffffff',
    nodeSelectedGlow: 'rgba(74, 158, 255, 0.35)',
    nodeSelected: '#4a9eff',
    line: 'rgba(74, 158, 255, 0.9)',
    lineGlow: 'rgba(74, 158, 255, 0.22)',
    lineError: 'rgba(255, 107, 107, 0.95)',
    lineErrorGlow: 'rgba(255, 107, 107, 0.22)',
    lineWidth: 4,
  };

  function setLetters(arr, targetWords = []) {
    let shuffled = arr.slice();
    const targets = targetWords.map(w => w.toUpperCase());

    // Helper to check if a shuffled array spells any target word when read clockwise (as a circular substring)
    const spellsAnyTarget = (array) => {
      const s = array.join('');
      const circular = s + s; // Double the string to handle circular wrap-around
      return targets.some(target => circular.includes(target) || [...circular].reverse().join('').includes(target));
    };

    let attempts = 0;
    do {
      // Fisher-Yates shuffle
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
      }
      attempts++;
    } while (spellsAnyTarget(shuffled) && attempts < 25 && shuffled.length > 2);

    letters = shuffled;
    lastLetters = arr.slice();
    lastTargets = targets.slice();
    _buildNodes();
    _render();
  }

  function reshuffle() {
    if (lastLetters.length === 0) return;
    clearInteraction();
    setLetters(lastLetters, lastTargets);
  }

  function setOnWordComplete(cb) {
    onWordComplete = cb;
  }

  function _buildNodes() {
    const count = letters.length;
    nodes = letters.map((letter, i) => {
      const angle = (2 * Math.PI * i) / count - Math.PI / 2;
      return {
        letter,
        angle,
        x: CENTER + NODE_RADIUS * Math.cos(angle),
        y: CENTER + NODE_RADIUS * Math.sin(angle),
      };
    });
  }

  function _drawGuideRing() {
    ctx.beginPath();
    ctx.arc(CENTER, CENTER, NODE_RADIUS, 0, Math.PI * 2);
    ctx.strokeStyle = COLORS.guideRing;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  function _drawNode(n, isSelected) {
    const r = isSelected ? NODE_CIRCLE_R + 2 : NODE_CIRCLE_R;

    ctx.beginPath();
    ctx.arc(n.x, n.y + 2, r, 0, Math.PI * 2);
    ctx.fillStyle = COLORS.nodeShadow;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
    ctx.fillStyle = isSelected ? COLORS.nodeSelected : COLORS.nodeBg;
    ctx.fill();

    if (!isSelected) {
      ctx.strokeStyle = '#eef1f7';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    ctx.fillStyle = isSelected ? COLORS.letterSelected : COLORS.letterText;
    ctx.font = `800 ${isSelected ? 22 : 20}px 'Nunito', 'Segoe UI', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(n.letter, n.x, n.y + 1);
  }

  function _lineColors() {
    if (previewIsError) {
      return { main: COLORS.lineError, glow: COLORS.lineErrorGlow };
    }
    return { main: COLORS.line, glow: COLORS.lineGlow };
  }

  function _drawLines() {
    if (selectedIndices.length < 2 && !isDragging) return;

    const { main, glow } = _lineColors();

    // Glow line
    if (selectedIndices.length > 1) {
      ctx.beginPath();
      ctx.strokeStyle = glow;
      ctx.lineWidth = COLORS.lineWidth + 6;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const first = nodes[selectedIndices[0]];
      ctx.moveTo(first.x, first.y);
      for (let i = 1; i < selectedIndices.length; i++) {
        const n = nodes[selectedIndices[i]];
        ctx.lineTo(n.x, n.y);
      }
      ctx.stroke();
    }

    // Main line
    if (selectedIndices.length > 1) {
      ctx.beginPath();
      ctx.strokeStyle = main;
      ctx.lineWidth = COLORS.lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const first = nodes[selectedIndices[0]];
      ctx.moveTo(first.x, first.y);
      for (let i = 1; i < selectedIndices.length; i++) {
        const n = nodes[selectedIndices[i]];
        ctx.lineTo(n.x, n.y);
      }
      ctx.stroke();
    }

    // Line from last selected to pointer
    if (isDragging && selectedIndices.length > 0) {
      const last = nodes[selectedIndices[selectedIndices.length - 1]];

      // Glow
      ctx.beginPath();
      ctx.strokeStyle = glow;
      ctx.lineWidth = COLORS.lineWidth + 6;
      ctx.lineCap = 'round';
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(currentPointer.x, currentPointer.y);
      ctx.stroke();

      // Main
      ctx.beginPath();
      ctx.strokeStyle = main;
      ctx.lineWidth = COLORS.lineWidth;
      ctx.lineCap = 'round';
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(currentPointer.x, currentPointer.y);
      ctx.stroke();
    }
  }

  function _updateThemeColors() {
    const app = document.getElementById('app');
    if (!app) return;
    const style = getComputedStyle(app);
    const primary = style.getPropertyValue('--primary').trim() || '#7b61ff';
    
    COLORS.nodeSelected = primary;
    COLORS.line = primary;
    
    // Helper to convert hex to rgba
    const hexToRgba = (hex, alpha) => {
      hex = hex.replace('#', '');
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    COLORS.nodeSelectedGlow = hexToRgba(primary, 0.3);
    COLORS.lineGlow = hexToRgba(primary, 0.25);
  }

  function _spawnParticles(x, y) {
    for (let count = 0; count < 2; count++) {
      const p = particles.find(item => !item.active);
      if (!p) break; // Pool full, recycle/skip

      const angle = Math.random() * Math.PI * 2;
      const speed = 0.4 + Math.random() * 1.2;

      p.x = x;
      p.y = y;
      p.vx = Math.cos(angle) * speed;
      p.vy = Math.sin(angle) * speed;
      p.size = 2.5 + Math.random() * 3.5;
      p.alpha = 1.0;
      p.active = true;
    }
  }

  function _updateAndDrawParticles() {
    let hasActive = false;
    particles.forEach(p => {
      if (!p.active) return;
      hasActive = true;

      // Update physics without allocating new memory
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.03; // Gentle gravity
      p.alpha -= 0.045; // Fade out
      p.size *= 0.96; // Shrink

      if (p.alpha <= 0 || p.size <= 0.1) {
        p.active = false;
        return;
      }

      // Draw particle (glowing neon core)
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
      ctx.shadowColor = COLORS.nodeSelected; // Theme matching glow
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.shadowBlur = 0; // Restore
    });
    return hasActive;
  }

  function _tick() {
    _render();
    const hasParticles = _updateAndDrawParticles();

    if (isDragging || hasParticles) {
      animId = requestAnimationFrame(_tick);
    } else {
      animId = null;
    }
  }

  function _startLoop() {
    if (!animId) {
      _tick();
    }
  }

  function _render() {
    _updateThemeColors();
    ctx.clearRect(0, 0, LOGICAL_SIZE, LOGICAL_SIZE);

    _drawGuideRing();
    _drawLines();

    nodes.forEach((n, i) => {
      _drawNode(n, selectedIndices.includes(i));
    });
  }

  function _getPointerPos(e) {
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches ? e.touches[0] : e;
    return {
      x: (touch.clientX - rect.left) * (LOGICAL_SIZE / rect.width),
      y: (touch.clientY - rect.top) * (LOGICAL_SIZE / rect.height),
    };
  }

  function _findNode(pos) {
    let closest = -1;
    let closestDist = Infinity;
    nodes.forEach((n, i) => {
      const dx = pos.x - n.x;
      const dy = pos.y - n.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < NODE_HIT_RADIUS && dist < closestDist) {
        closest = i;
        closestDist = dist;
      }
    });
    return closest;
  }

  function _onStart(e) {
    e.preventDefault();
    const pos = _getPointerPos(e);
    const idx = _findNode(pos);
    if (idx === -1) return;

    isDragging = true;
    selectedIndices = [idx];
    currentPointer = pos;
    _updatePreview();
    _spawnParticles(pos.x, pos.y);
    _startLoop();

    if (typeof AudioHaptic !== 'undefined') {
      AudioHaptic.playConnect(0);
    }
  }

  function _onMove(e) {
    e.preventDefault();
    if (!isDragging) return;

    const pos = _getPointerPos(e);
    currentPointer = pos;

    const idx = _findNode(pos);
    if (idx !== -1) {
      if (selectedIndices.length >= 2 && idx === selectedIndices[selectedIndices.length - 2]) {
        selectedIndices.pop();
        _updatePreview();
        if (typeof AudioHaptic !== 'undefined') {
          AudioHaptic.playConnect(selectedIndices.length - 1);
        }
      } else if (!selectedIndices.includes(idx)) {
        selectedIndices.push(idx);
        _updatePreview();
        if (typeof AudioHaptic !== 'undefined') {
          AudioHaptic.playConnect(selectedIndices.length - 1);
        }
      }
    }

    _spawnParticles(pos.x, pos.y);
    _startLoop();
  }

  function _onEnd(e) {
    e.preventDefault();
    if (!isDragging) return;
    isDragging = false;

    const word = selectedIndices.map(i => nodes[i].letter).join('');

    if (onWordComplete && word.length > 0) {
      onWordComplete(word);
    }

    selectedIndices = [];
    _hidePreview();
    _startLoop();
  }

  function _updatePreview() {
    const word = selectedIndices.map(i => nodes[i].letter).join('');
    previewBox.textContent = word;
    previewBox.classList.add('visible');
    previewBox.classList.remove('error');
  }

  function _hidePreview() {
    previewBox.classList.remove('visible');
    previewBox.classList.remove('error');
  }

  function showError() {
    previewIsError = true;
    previewBox.classList.add('error');
    _render();
    setTimeout(() => {
      previewIsError = false;
      _hidePreview();
    }, 500);
  }

  function showPreviewSuccess() {
    previewIsError = false;
    previewBox.style.color = '';
    setTimeout(() => {
      _hidePreview();
    }, 400);
  }

  function clearInteraction() {
    selectedIndices = [];
    isDragging = false;
    previewIsError = false;
    previewBox.textContent = '';
    _hidePreview();
    _render();
  }

  canvas.addEventListener('mousedown', _onStart);
  canvas.addEventListener('mousemove', _onMove);
  canvas.addEventListener('mouseup', _onEnd);
  canvas.addEventListener('mouseleave', _onEnd);
  canvas.addEventListener('touchstart', _onStart, { passive: false });
  canvas.addEventListener('touchmove', _onMove, { passive: false });
  canvas.addEventListener('touchend', _onEnd, { passive: false });
  canvas.addEventListener('touchcancel', _onEnd, { passive: false });

  return {
    setLetters,
    setOnWordComplete,
    showError,
    showPreviewSuccess,
    clearInteraction,
    reshuffle,
  };
})();
