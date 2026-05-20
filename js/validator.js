/* ============================================
   Validator - Word checking logic
   ============================================ */

const Validator = (() => {
  const HINT_STAR_COST = 5;

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

  function getHintStarCost() {
    return HINT_STAR_COST;
  }

  function canPayHintWithStars() {
    return coins >= HINT_STAR_COST;
  }

  /** @returns {boolean} true if 5 stars were spent */
  function payHintWithStars() {
    return spendCoins(HINT_STAR_COST);
  }

  function addCoins(amount) {
    coins += amount;
    if (onCoinsChange) onCoinsChange(coins);
  }

  function _targetWords() {
    return currentLevel.grid.words.map(w => w.word.toUpperCase());
  }

  function validate(word) {
    if (!currentLevel) return { type: 'none' };

    const upper = word.toUpperCase();

    if (upper.length < 2) return { type: 'invalid' };

    if (foundExtraWords.has(upper)) {
      return { type: 'duplicate' };
    }

    const targetWord = currentLevel.grid.words.find(
      w => w.word.toUpperCase() === upper
    );
    if (targetWord) {
      if (Grid.isWordSolved(upper)) {
        return { type: 'duplicate' };
      }
      return { type: 'target', wordObj: targetWord };
    }

    if (Dictionary.isValidExtra(upper, currentLevel.letters, _targetWords())) {
      foundExtraWords.add(upper);
      addCoins(1);
      return { type: 'extra', word: upper };
    }

    return { type: 'invalid' };
  }

  return {
    setLevel,
    validate,
    getCoins,
    spendCoins,
    setOnCoinsChange,
    reset,
    getHintStarCost,
    canPayHintWithStars,
    payHintWithStars,
    addCoins,
  };
})();
