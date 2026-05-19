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

  return { showToast, spawnSparkles, popCell };
})();
