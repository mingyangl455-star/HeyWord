/* ============================================
   Validator - Word checking logic
   ============================================ */

const Validator = (() => {
  let currentLevel = null;
  let foundExtraWords = new Set();
  let coins = 10;
  let onCoinsChange = null;

  function reset() {
    coins = 10;
    foundExtraWords = new Set();
    currentLevel = null;
    if (onCoinsChange) onCoinsChange(coins);
  }

  function setLevel(levelData) {
    currentLevel = levelData;
    foundExtraWords = new Set();
  }

  function setOnCoinsChange(cb) {
    onCoinsChange = cb;
  }

  function getCoins() {
    return coins;
  }

  function spendCoins(amount) {
    if (coins < amount) return false;
    coins -= amount;
    if (onCoinsChange) onCoinsChange(coins);
    return true;
  }

  function _targetWords() {
    return currentLevel.grid.words.map(w => w.word.toUpperCase());
  }

  function validate(word) {
    if (!currentLevel) return { type: 'none' };

    const upper = word.toUpperCase();

    if (upper.length < 2) return { type: 'invalid' };

    if (Grid.isSolved(upper)) {
      return { type: 'duplicate' };
    }

    const targetWord = currentLevel.grid.words.find(w => w.word === upper);
    if (targetWord) {
      return { type: 'target', wordObj: targetWord };
    }

    if (foundExtraWords.has(upper)) {
      return { type: 'duplicate' };
    }

    if (Dictionary.isValidExtra(upper, currentLevel.letters, _targetWords())) {
      foundExtraWords.add(upper);
      coins += 1;
      if (onCoinsChange) onCoinsChange(coins);
      return { type: 'extra', word: upper };
    }

    return { type: 'invalid' };
  }

  return { setLevel, validate, getCoins, spendCoins, setOnCoinsChange, reset };
})();
