/* ============================================
   Progress - Persist cleared levels (localStorage)
   ============================================ */

const Progress = (() => {
  const STORAGE_KEY = 'heyword_progress';

  function _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* ignore */ }
    return { highestClearedIndex: -1 };
  }

  function _save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) { /* ignore */ }
  }

  function getHighestClearedIndex() {
    return _load().highestClearedIndex;
  }

  function markLevelCleared(levelIndex) {
    const data = _load();
    if (levelIndex > data.highestClearedIndex) {
      data.highestClearedIndex = levelIndex;
      _save(data);
    }
  }

  function hasProgress() {
    return getHighestClearedIndex() >= 0;
  }

  function getNextLevelIndex() {
    const next = getHighestClearedIndex() + 1;
    if (next >= LEVELS.length) {
      return 0;
    }
    return next;
  }

  function getNextLevelNumber() {
    return LEVELS[getNextLevelIndex()].level;
  }

  function getClearedCount() {
    const idx = getHighestClearedIndex();
    return idx < 0 ? 0 : idx + 1;
  }

  return {
    markLevelCleared,
    hasProgress,
    getNextLevelIndex,
    getNextLevelNumber,
    getClearedCount,
  };
})();
