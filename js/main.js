/* ============================================
   Main - Entry point & game loop
   ============================================ */

const Game = (() => {
  let currentLevelIndex = 0;
  const levelLabel = document.getElementById('level-label');
  const coinCount = document.getElementById('coin-count');
  const clearedPanel = document.getElementById('level-cleared');
  const btnNextLevel = document.getElementById('btn-next-level');
  const btnHint = document.getElementById('btn-hint');

  function init() {
    Validator.setOnCoinsChange(_updateCoins);
    Wheel.setOnWordComplete(_onWordComplete);

    btnHint.addEventListener('click', () => {
      _useHint();
    });

    btnNextLevel.addEventListener('click', () => {
      _goNextLevel();
    });

    _loadLevel(0);
  }

  function _loadLevel(index) {
    if (index >= LEVELS.length) {
      index = 0; // Loop back for demo
    }

    currentLevelIndex = index;
    const levelData = LEVELS[index];

    levelLabel.textContent = 'Level ' + levelData.level;
    Validator.setLevel(levelData);

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
        // Sparkle from center toward coin counter
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
    const container = document.getElementById('word-cards');
    container.innerHTML = '';

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

      container.appendChild(card);
    });
  }

  function _goNextLevel() {
    _loadLevel(currentLevelIndex + 1);
  }

  function _updateCoins(count) {
    coinCount.textContent = count;
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  StartScreen.init(() => Game.init());
});
