/* ============================================
   AdHint - Simulated ad for free hint (stars unchanged)
   ============================================ */

const AdHint = (() => {
  const AD_DURATION_MS = 3000;
  let activeTimer = null;
  let onComplete = null;

  let modal = null;
  let progressBar = null;
  let countdownEl = null;
  let btnClose = null;

  function _bindDom() {
    modal = document.getElementById('ad-hint-modal');
    progressBar = document.getElementById('ad-progress-bar');
    countdownEl = document.getElementById('ad-countdown');
    btnClose = document.getElementById('btn-ad-close');
  }

  function init() {
    _bindDom();
    if (!btnClose) return;
    btnClose.addEventListener('click', () => {
      if (btnClose.disabled) return;
      _finish();
    });
  }

  function show(completeCb) {
    _bindDom();
    if (!modal) {
      if (typeof completeCb === 'function') completeCb();
      return;
    }

    _cancelTimer();
    onComplete = completeCb;
    if (progressBar) progressBar.style.width = '0%';
    if (countdownEl) countdownEl.textContent = '广告播放中… 3s';
    if (btnClose) {
      btnClose.disabled = true;
      btnClose.textContent = '请稍候';
    }
    modal.classList.add('show');

    const start = performance.now();

    activeTimer = setInterval(() => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, (elapsed / AD_DURATION_MS) * 100);
      const left = Math.max(0, Math.ceil((AD_DURATION_MS - elapsed) / 1000));

      if (progressBar) progressBar.style.width = pct + '%';
      if (countdownEl) {
        countdownEl.textContent = left > 0 ? `广告播放中… ${left}s` : '播放完成';
      }

      if (elapsed >= AD_DURATION_MS) {
        _cancelTimer();
        if (progressBar) progressBar.style.width = '100%';
        if (countdownEl) countdownEl.textContent = '正在为你揭示提示…';
        _finish();
      }
    }, 50);
  }

  function _finish() {
    _cancelTimer();
    if (modal) modal.classList.remove('show');
    const cb = onComplete;
    onComplete = null;
    if (typeof cb === 'function') cb();
  }

  function _cancelTimer() {
    if (activeTimer) {
      clearInterval(activeTimer);
      activeTimer = null;
    }
  }

  return { init, show };
})();
