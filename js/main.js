/* ============================================
   Main - Entry point & game loop
   ============================================ */

const Game = (() => {
  let currentLevelIndex = 0;
  let bindingsReady = false;

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

  function init() {
    if (bindingsReady) return;
    bindingsReady = true;

    Validator.setOnCoinsChange(_updateCoins);
    Wheel.setOnWordComplete(_onWordComplete);

    btnHint.addEventListener('click', () => {
      _useHint();
    });

    btnNextLevel.addEventListener('click', () => {
      _goNextLevel();
    });

    btnHome.addEventListener('click', () => {
      homeConfirm.classList.add('show');
    });

    btnHomeCancel.addEventListener('click', () => {
      homeConfirm.classList.remove('show');
    });

    btnHomeOk.addEventListener('click', () => {
      homeConfirm.classList.remove('show');
      returnToHome();
    });
  }

  function start() {
    currentLevelIndex = 0;
    Validator.reset();
    _loadLevel(0);
  }

  function returnToHome() {
    clearedPanel.classList.remove('show');
    wordCards.innerHTML = '';
    gridContainer.innerHTML = '';
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
    Validator.setLevel(levelData);
    _updateCoins(Validator.getCoins());

    Grid.loadLevel(levelData, () => {
      _onLevelCleared();
    });

    Wheel.setLetters(levelData.letters);
    clearedPanel.classList.remove('show');
  }

  function _onWordComplete(word) {
    const result = Validator.validate(word);

    switch (result.type) {
      case 'target':
        Wheel.showPreviewSuccess();
        Grid.solveWord(result.wordObj);
        break;

      case 'extra':
        Wheel.showPreviewSuccess();
        Effects.showToast('+1 Extra Word');
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
        break;

      default:
        Wheel.showError();
        break;
    }
  }

  function _useHint() {
    if (!Validator.spendCoins(1)) {
      Effects.showToast('Not enough coins');
      return;
    }

    const cellId = Grid.getRandomUnsolvedCellId();
    if (cellId) {
      Grid.revealCell(cellId);
    }
  }

  function _onLevelCleared() {
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
  }

  return { init, start, returnToHome };
})();

document.addEventListener('DOMContentLoaded', () => {
  Game.init();
  StartScreen.init(() => Game.start());
});
