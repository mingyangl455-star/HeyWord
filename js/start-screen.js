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

  function init(onStart) {
    _renderLeaderboard();

    const btn = document.getElementById('btn-start-game');
    const screen = document.getElementById('start-screen');

    btn.addEventListener('click', () => {
      screen.classList.add('hide');
      setTimeout(() => {
        screen.style.display = 'none';
        if (typeof onStart === 'function') onStart();
      }, 320);
    });
  }

  function _renderLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    if (!list) return;

    const sorted = [...FRIENDS].sort((a, b) => b.levels - a.levels);

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
    screen.style.display = '';
    requestAnimationFrame(() => {
      screen.classList.remove('hide');
    });
  }

  return { init, show };
})();
