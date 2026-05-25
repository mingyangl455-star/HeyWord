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
  const RING_OUTER = 100;
  const RING_INNER = 66;
  const RING_MID = (RING_OUTER + RING_INNER) / 2;
  const NODE_HIT_RADIUS = 30;
  const RING_WIDTH = RING_OUTER - RING_INNER;

  let letters = [];
  let nodes = [];
  let selectedIndices = [];
  let isDragging = false;
  let currentPointer = { x: 0, y: 0 };
  let onWordComplete = null;

  let previewIsError = false;

  const COLORS = {
    ringTop: '#f5f6fa',
    ringBottom: '#e8eaef',
    ringStroke: '#636e72',
    centerBg: '#ffffff',
    nodeSelectedGlow: 'rgba(123, 97, 255, 0.3)',
    letterText: '#2d3436',
    letterTextShadow: 'rgba(255,255,255,0.8)',
    letterSelectedShadow: 'rgba(99, 71, 229, 0.25)',
    nodeSelected: '#7b61ff',
    line: 'rgba(123, 97, 255, 0.85)',
    lineGlow: 'rgba(123, 97, 255, 0.25)',
    lineError: 'rgba(255, 71, 87, 0.9)',
    lineErrorGlow: 'rgba(255, 71, 87, 0.25)',
    lineWidth: 4,
  };

  function setLetters(arr) {
    letters = arr.slice();
    _buildNodes();
    _render();
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
        x: CENTER + RING_MID * Math.cos(angle),
        y: CENTER + RING_MID * Math.sin(angle),
        targetX: CENTER + RING_MID * Math.cos(angle),
        targetY: CENTER + RING_MID * Math.sin(angle),
      };
    });
  }

  function _drawRing() {
    // Outer shadow (soft)
    ctx.beginPath();
    ctx.arc(CENTER + 1, CENTER + 3, RING_OUTER + 4, 0, Math.PI * 2);
    ctx.arc(CENTER + 1, CENTER + 3, RING_INNER - 4, 0, Math.PI * 2, true);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
    ctx.fill();

    // Ring body with gradient
    const ringGrad = ctx.createLinearGradient(CENTER, CENTER - RING_OUTER, CENTER, CENTER + RING_OUTER);
    ringGrad.addColorStop(0, COLORS.ringTop);
    ringGrad.addColorStop(1, COLORS.ringBottom);

    ctx.beginPath();
    ctx.arc(CENTER, CENTER, RING_OUTER, 0, Math.PI * 2);
    ctx.arc(CENTER, CENTER, RING_INNER, 0, Math.PI * 2, true);
    ctx.fillStyle = ringGrad;
    ctx.fill();

    // Outer border
    ctx.beginPath();
    ctx.arc(CENTER, CENTER, RING_OUTER, 0, Math.PI * 2);
    ctx.strokeStyle = COLORS.ringStroke;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Subtle inner highlight (top arc)
    ctx.beginPath();
    ctx.arc(CENTER, CENTER, RING_OUTER - 1, -Math.PI * 0.8, -Math.PI * 0.2);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function _drawCenter() {
    // Radial gradient from ring inner edge color to background
    const grad = ctx.createRadialGradient(CENTER, CENTER, RING_INNER * 0.3, CENTER, CENTER, RING_INNER - 1);
    grad.addColorStop(0, COLORS.centerBg);
    grad.addColorStop(1, COLORS.ringBottom);
    ctx.beginPath();
    ctx.arc(CENTER, CENTER, RING_INNER - 1, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
  }

  function _drawLetter(n, isSelected) {
    if (isSelected) {
      // Glow behind letter
      ctx.beginPath();
      ctx.arc(n.x, n.y, 18, 0, Math.PI * 2);
      ctx.fillStyle = COLORS.nodeSelectedGlow;
      ctx.fill();

      // Text shadow
      ctx.fillStyle = COLORS.letterSelectedShadow;
      ctx.font = `bold 24px 'Segoe UI', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(n.letter, n.x + 0.5, n.y + 1.5);

      // Text
      ctx.fillStyle = COLORS.nodeSelected;
      ctx.font = `bold 24px 'Segoe UI', sans-serif`;
      ctx.fillText(n.letter, n.x, n.y + 1);
    } else {
      // Text shadow
      ctx.fillStyle = COLORS.letterTextShadow;
      ctx.font = `bold 22px 'Segoe UI', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(n.letter, n.x + 0.5, n.y + 1.5);

      // Text
      ctx.fillStyle = COLORS.letterText;
      ctx.font = `bold 22px 'Segoe UI', sans-serif`;
      ctx.fillText(n.letter, n.x, n.y + 1);
    }
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

  function _render() {
    ctx.clearRect(0, 0, LOGICAL_SIZE, LOGICAL_SIZE);

    _drawRing();
    _drawCenter();
    _drawLines();

    // Draw letters
    nodes.forEach((n, i) => {
      const isSelected = selectedIndices.includes(i);
      _drawLetter(n, isSelected);
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
    _render();

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

    _render();
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
    _render();
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

  return { setLetters, setOnWordComplete, showError, showPreviewSuccess, clearInteraction };
})();
