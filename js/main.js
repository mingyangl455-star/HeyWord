/* ============================================
   Main - Entry point & game loop
   ============================================ */

const Game = (() => {
  const HINT_STAR_COST = 5;

  const STATIONS = [
    { name: '伦敦站', flag: '🇬🇧', class: 'theme-london' },
    { name: '巴黎站', flag: '🇫🇷', class: 'theme-paris' },
    { name: '东京站', flag: '🇯🇵', class: 'theme-tokyo' },
    { name: '里约站', flag: '🇧🇷', class: 'theme-rio' },
    { name: '纽约站', flag: '🇺🇸', class: 'theme-newyork' }
  ];

  let currentLevelIndex = 0;
  let bindingsReady = false;

  const IDLE_TIMEOUT = 6000;
  let idleTimer = null;
  let idleHintTimer = null;

  const levelLabel = document.getElementById('level-label');
  const coinCount = document.getElementById('coin-count');
  const clearedPanel = document.getElementById('level-cleared');
  const btnNextLevel = document.getElementById('btn-next-level');
  const btnHint = document.getElementById('btn-hint');
  const btnHome = document.getElementById('btn-home');
  const homeConfirm = document.getElementById('home-confirm');
  const btnHomeCancel = document.getElementById('btn-home-cancel');
  const btnHomeOk = document.getElementById('btn-home-ok');
  const gridContainer = document.getElementById('grid-container');
  const wordCards = document.getElementById('word-cards');
  const stageBadge = document.getElementById('stage-badge');

  function init() {
    if (bindingsReady) return;

    if (typeof AudioHaptic !== 'undefined') {
      AudioHaptic.init();
    }

    AdHint.init();
    Validator.setOnCoinsChange(_updateCoins);
    Wheel.setOnWordComplete(_onWordComplete);

    if (btnHint) {
      btnHint.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (typeof AudioHaptic !== 'undefined') AudioHaptic.playClick();
        _useHint(e);
      });
    }

    btnNextLevel.addEventListener('click', () => {
      if (typeof AudioHaptic !== 'undefined') AudioHaptic.playClick();
      _goNextLevel();
    });

    btnHome.addEventListener('click', () => {
      if (typeof AudioHaptic !== 'undefined') AudioHaptic.playClick();
      homeConfirm.classList.add('show');
    });

    btnHomeCancel.addEventListener('click', () => {
      if (typeof AudioHaptic !== 'undefined') AudioHaptic.playClick();
      homeConfirm.classList.remove('show');
    });

    btnHomeOk.addEventListener('click', () => {
      if (typeof AudioHaptic !== 'undefined') AudioHaptic.playClick();
      homeConfirm.classList.remove('show');
      returnToHome();
    });

    _bindIdleListeners();

    bindingsReady = true;
  }

  function _bindIdleListeners() {
    const app = document.getElementById('app');
    if (!app) return;
    const events = ['pointerdown', 'pointermove', 'touchstart', 'wheel', 'keydown'];
    events.forEach(evt => {
      app.addEventListener(evt, _resetIdleTimer, { passive: true });
    });
  }

  function _startIdleTimer() {
    _clearIdleTimer();
    idleTimer = setTimeout(() => {
      _triggerIdleHint();
      idleTimer = setInterval(() => {
        _triggerIdleHint();
      }, IDLE_TIMEOUT);
    }, IDLE_TIMEOUT);
  }

  function _clearIdleTimer() {
    if (idleTimer) {
      clearTimeout(idleTimer);
      clearInterval(idleTimer);
      idleTimer = null;
    }
    if (idleHintTimer) {
      clearTimeout(idleHintTimer);
      idleHintTimer = null;
    }
    Grid.clearIdleHints();
  }

  function _resetIdleTimer() {
    Grid.clearIdleHints();
    _startIdleTimer();
  }

  function _triggerIdleHint() {
    const cells = Grid.getRandomUnsolvedWordCells();
    if (!cells || cells.length === 0) return;

    cells.forEach(cell => cell.classList.add('idle-hint'));

    idleHintTimer = setTimeout(() => {
      Grid.clearIdleHints();
    }, 1300);
  }

  function startNew() {
    _enterGame(0);
  }

  function continueGame() {
    _enterGame(Progress.getNextLevelIndex());
  }

  function _enterGame(levelIndex) {
    currentLevelIndex = levelIndex;
    Validator.reset();
    _loadLevel(levelIndex);
  }

  function returnToHome() {
    _clearIdleTimer();
    clearedPanel.classList.remove('show');
    wordCards.innerHTML = '';
    gridContainer.innerHTML = '';
    Grid.reset();
    Wheel.clearInteraction();
    Validator.reset();
    coinCount.textContent = '10';
    StartScreen.show();
  }

  function _loadLevel(index) {
    if (index >= LEVELS.length) {
      index = 0;
    }

    currentLevelIndex = index;
    const levelData = LEVELS[index];

    levelLabel.textContent = 'Level ' + levelData.level;

    // Apply country station theme skin
    const stationIndex = Math.floor(index / 10);
    const station = STATIONS[Math.min(stationIndex, STATIONS.length - 1)];
    const app = document.getElementById('app');
    if (app) {
      STATIONS.forEach(s => app.classList.remove(s.class));
      app.classList.add(station.class);
    }
    const badgeHeader = document.getElementById('station-badge-header');
    if (badgeHeader) {
      badgeHeader.textContent = station.flag + ' ' + station.name;
    }

    Validator.setLevel(levelData);
    _updateCoins(Validator.getCoins());

    Grid.loadLevel(levelData, () => {
      _onLevelCleared();
    });

    Wheel.setLetters(levelData.letters, levelData.grid.words.map(w => w.word));
    clearedPanel.classList.remove('show');

    _startIdleTimer();
  }

  function _onWordComplete(word) {
    const result = Validator.validate(word);

    switch (result.type) {
      case 'target':
        Wheel.showPreviewSuccess();
        if (Grid.solveWord(result.wordObj)) {
          Validator.addCoins(1);
          if (typeof AudioHaptic !== 'undefined') AudioHaptic.playSuccess();
          // 获得星星特效：从屏幕中央生成粒子飞向右上角星星
          const app = document.getElementById('app');
          const appRect = app.getBoundingClientRect();
          const coinEl = document.getElementById('coin-count');
          const coinRect = coinEl.getBoundingClientRect();
          Effects.spawnSparkles(
            appRect.left + appRect.width / 2,
            appRect.top + appRect.height / 2,
            coinRect.left + coinRect.width / 2,
            coinRect.top + coinRect.height / 2,
            5
          );
        }
        break;

      case 'extra':
        Wheel.showPreviewSuccess();
        if (typeof AudioHaptic !== 'undefined') AudioHaptic.playExtraSuccess();
        const app = document.getElementById('app');
        const appRect = app.getBoundingClientRect();
        const coinEl = document.getElementById('coin-count');
        const coinRect = coinEl.getBoundingClientRect();
        Effects.spawnSparkles(
          appRect.left + appRect.width / 2,
          appRect.top + appRect.height / 2,
          coinRect.left + coinRect.width / 2,
          coinRect.top + coinRect.height / 2,
          5
        );
        break;

      case 'duplicate':
      case 'invalid':
        Wheel.showError();
        if (typeof AudioHaptic !== 'undefined') AudioHaptic.playError();
        break;

      default:
        Wheel.showError();
        if (typeof AudioHaptic !== 'undefined') AudioHaptic.playError();
        break;
    }
  }

  function _applyHint() {
    const cellId = Grid.getRandomUnsolvedCellId();
    if (!cellId) return false;
    if (!Grid.revealCell(cellId)) return false;
    return true;
  }

  function _canPayHintWithStars() {
    if (typeof Validator.canPayHintWithStars === 'function') {
      return Validator.canPayHintWithStars();
    }
    return Validator.getCoins() >= HINT_STAR_COST;
  }

  function _payHintWithStars() {
    if (typeof Validator.payHintWithStars === 'function') {
      return Validator.payHintWithStars();
    }
    return Validator.spendCoins(HINT_STAR_COST);
  }

  function _useHint(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();

    if (_canPayHintWithStars()) {
      if (!_payHintWithStars()) {
        Effects.showToast('星星不足');
        return;
      }
      _applyHint();
      return;
    }

    AdHint.show(() => {
      _applyHint();
    });
  }

  function _onLevelCleared() {
    _clearIdleTimer();
    Progress.markLevelCleared(currentLevelIndex);

    if (typeof AudioHaptic !== 'undefined') {
      AudioHaptic.playLevelCleared();
    }

    if (typeof Effects !== 'undefined') {
      Effects.celebrate();
    }

    const levelNum = currentLevelIndex + 1;
    const stageIndex = Math.floor(currentLevelIndex / 10);
    const isStageEnd = levelNum % 10 === 0 && stageIndex < STATIONS.length - 1;

    if (stageBadge) {
      if (isStageEnd) {
        const nextStation = STATIONS[stageIndex + 1];
        stageBadge.innerHTML = `<span class="badge-icon">✈️</span> 恭喜抵达 ${nextStation.flag} ${nextStation.name}！`;
        stageBadge.classList.remove('hidden');
      } else {
        stageBadge.classList.add('hidden');
        stageBadge.innerHTML = '';
      }
    }

    _renderWordCards();
    setTimeout(() => {
      clearedPanel.classList.add('show');
    }, 1000);
  }

  function _renderWordCards() {
    const levelData = LEVELS[currentLevelIndex];
    wordCards.innerHTML = '';

    levelData.grid.words.forEach(w => {
      const card = document.createElement('div');
      card.className = 'word-card';

      card.innerHTML = `
        <div class="wc-header">
          <span class="wc-word">${w.word}</span>
          <span class="wc-phonetic">${w.phonetic}</span>
        </div>
        <div class="wc-meaning">${w.meaning}</div>
        <div class="wc-divider"></div>
        <div class="wc-example">${w.example}</div>
        <div class="wc-example-cn">${w.exampleCn}</div>
      `;

      wordCards.appendChild(card);
    });
  }

  function _goNextLevel() {
    _loadLevel(currentLevelIndex + 1);
  }

  function _updateCoins(count) {
    coinCount.textContent = count;
    const headerRight = coinCount.parentElement;
    if (headerRight) {
      headerRight.classList.remove('pop-pulse');
      // 触发重绘
      void headerRight.offsetWidth;
      headerRight.classList.add('pop-pulse');
      setTimeout(() => {
        headerRight.classList.remove('pop-pulse');
      }, 450);
    }
  }

  return { init, startNew, continueGame, returnToHome, useHint: _useHint };
})();

document.addEventListener('DOMContentLoaded', () => {
  Game.init();
  StartScreen.init({
    onStartNew: () => Game.startNew(),
    onContinue: () => Game.continueGame(),
  });
  window.Game = Game;
});
