/* ============================================
   Start Screen - mascot, start CTA, friend leaderboard
   ============================================ */

const StartScreen = (() => {
  const FRIENDS = [
    { name: 'Sophie', avatar: 'S', color: '#4a9eff', levels: 12 },
    { name: 'Yuki', avatar: 'Y', color: '#00c853', levels: 9 },
    { name: 'Alex', avatar: 'A', color: '#ffb800', levels: 7 },
    { name: 'Lucas', avatar: 'L', color: '#ff6b6b', levels: 5 },
    { name: '你', avatar: '我', color: '#7b61ff', levels: 3, isMe: true },
  ];

  let onStartNew = null;
  let onContinue = null;

  function init(handlers) {
    if (typeof handlers === 'function') {
      onStartNew = handlers;
      onContinue = handlers;
    } else if (handlers) {
      onStartNew = handlers.onStartNew;
      onContinue = handlers.onContinue;
    }

    const btn = document.getElementById('btn-start-game');
    const btnNew = document.getElementById('btn-new-game');
    const screen = document.getElementById('start-screen');

    btn.addEventListener('click', () => {
      if (typeof AudioHaptic !== 'undefined') {
        AudioHaptic.playClick();
      }
      const useContinue = Progress.hasProgress();
      screen.classList.add('hide');
      screen.style.pointerEvents = 'none';
      screen.style.display = 'none';
      if (useContinue && typeof onContinue === 'function') {
        onContinue();
      } else if (typeof onStartNew === 'function') {
        onStartNew();
      }
    });

    if (btnNew) {
      btnNew.addEventListener('click', () => {
        if (typeof AudioHaptic !== 'undefined') {
          AudioHaptic.playClick();
        }
        if (!confirm('确定要重新开始新游戏吗？之前闯过的进度不会被删除。')) return;
        screen.classList.add('hide');
        screen.style.pointerEvents = 'none';
        screen.style.display = 'none';
        if (typeof onStartNew === 'function') {
          onStartNew();
        }
      });
    }

    updateStartButton();
    _renderLeaderboard();
  }

  function updateStartButton() {
    const labelEl = document.getElementById('btn-start-label');
    const levelEl = document.getElementById('btn-start-level');
    const btnNew = document.getElementById('btn-new-game');
    if (!labelEl || !levelEl) return;

    if (Progress.hasProgress()) {
      labelEl.textContent = '继续闯关';
      levelEl.textContent = 'Level ' + Progress.getNextLevelNumber();
      levelEl.classList.remove('hidden');
      if (btnNew) btnNew.classList.remove('hidden');
    } else {
      labelEl.textContent = '开始游戏';
      levelEl.textContent = '';
      levelEl.classList.add('hidden');
      if (btnNew) btnNew.classList.add('hidden');
    }
  }

  function _renderLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    if (!list) return;

    const myCleared = Progress.getClearedCount();
    const friends = FRIENDS.map(f =>
      f.isMe ? { ...f, levels: Math.max(f.levels, myCleared) } : f
    );

    const sorted = [...friends].sort((a, b) => b.levels - a.levels);

    list.innerHTML = '';
    sorted.forEach((friend, index) => {
      const rank = index + 1;
      const li = document.createElement('li');
      li.className = 'lb-item' + (friend.isMe ? ' lb-item--me' : '');
      li.style.animationDelay = (index * 0.06) + 's';

      const rankClass =
        rank === 1 ? 'lb-rank--gold' :
        rank === 2 ? 'lb-rank--silver' :
        rank === 3 ? 'lb-rank--bronze' : '';

      li.innerHTML = `
        <span class="lb-rank ${rankClass}">${rank}</span>
        <span class="lb-avatar" style="background:${friend.color}">${friend.avatar}</span>
        <span class="lb-name">${friend.name}</span>
        <span class="lb-score"><strong>${friend.levels}</strong> 关</span>
      `;

      list.appendChild(li);
    });
  }

  function show() {
    const screen = document.getElementById('start-screen');
    updateStartButton();
    _renderLeaderboard();
    screen.style.display = '';
    screen.style.pointerEvents = '';
    requestAnimationFrame(() => {
      screen.classList.remove('hide');
    });
  }

  return { init, show, updateStartButton };
})();
