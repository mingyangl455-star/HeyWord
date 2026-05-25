/* ============================================
   Effects - Animation utilities (HelloTalk palette)
   ============================================ */

const Effects = (() => {
  const SPARKLE_COLORS = ['#7b61ff', '#4a9eff', '#00c853', '#ffb800', '#ff6b6b'];

  function showToast(message) {
    const toast = document.getElementById('extra-word-toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 1200);
  }

  function spawnSparkles(fromX, fromY, toX, toY, count) {
    const app = document.getElementById('app');
    const appRect = app.getBoundingClientRect();

    for (let i = 0; i < count; i++) {
      const spark = document.createElement('div');
      spark.className = 'sparkle';

      const size = 6 + Math.random() * 6;
      const color = SPARKLE_COLORS[i % SPARKLE_COLORS.length];

      const startX = fromX - appRect.left + (Math.random() - 0.5) * 28;
      const startY = fromY - appRect.top + (Math.random() - 0.5) * 28;

      spark.style.width = size + 'px';
      spark.style.height = size + 'px';
      spark.style.background = color;
      spark.style.boxShadow = `0 0 6px ${color}`;
      spark.style.left = startX + 'px';
      spark.style.top = startY + 'px';
      spark.style.opacity = '1';

      app.appendChild(spark);

      const endX = toX - appRect.left + (Math.random() - 0.5) * 12;
      const endY = toY - appRect.top + (Math.random() - 0.5) * 12;
      const delay = i * 45;

      setTimeout(() => {
        spark.style.left = endX + 'px';
        spark.style.top = endY + 'px';
        spark.style.opacity = '0';
        spark.style.transform = 'scale(0.2)';
      }, delay + 10);

      setTimeout(() => {
        spark.remove();
      }, delay + 650);
    }
  }

  function popCell(cellEl) {
    cellEl.classList.add('cell-pop');
    cellEl.style.boxShadow = '0 0 14px rgba(74, 158, 255, 0.55)';
    setTimeout(() => {
      cellEl.classList.remove('cell-pop');
      cellEl.style.boxShadow = '';
    }, 350);
  }

  function celebrate() {
    const app = document.getElementById('app');
    if (!app) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'confetti-canvas';
    canvas.style.position = 'absolute';
    canvas.style.inset = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99';

    const rect = app.getBoundingClientRect();
    const DPR = window.devicePixelRatio || 1;
    canvas.width = rect.width * DPR;
    canvas.height = rect.height * DPR;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    
    const ctx = canvas.getContext('2d');
    ctx.scale(DPR, DPR);

    app.appendChild(canvas);

    const colors = ['#7b61ff', '#ff4a86', '#ff763b', '#00b894', '#0984e3', '#ffb800'];
    const confettiCount = 30; // Highly optimized lightweight count
    const confettiList = Array.from({ length: confettiCount }, () => {
      const w = 4 + Math.random() * 4;
      const h = 7 + Math.random() * 5;
      return {
        x: Math.random() * rect.width,
        y: -10 - Math.random() * 40,
        vx: -1.2 + Math.random() * 2.4,
        vy: 2.5 + Math.random() * 3.5,
        rotation: Math.random() * Math.PI,
        rotationSpeed: -0.08 + Math.random() * 0.16,
        color: colors[Math.floor(Math.random() * colors.length)],
        width: w,
        height: h
      };
    });

    const startTime = Date.now();
    const duration = 1500; // Strictly 1.5s max

    function tick() {
      const elapsed = Date.now() - startTime;
      if (elapsed > duration) {
        canvas.remove();
        return;
      }

      ctx.clearRect(0, 0, rect.width, rect.height);
      const globalAlpha = elapsed > 1000 ? 1 - (elapsed - 1000) / 500 : 1;

      confettiList.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = globalAlpha;
        ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
        ctx.restore();
      });

      requestAnimationFrame(tick);
    }

    tick();
  }

  return { showToast, spawnSparkles, popCell, celebrate };
})();
