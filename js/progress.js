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
    return { highestClearedIndex: -1, learnedWords: {} };
  }

  function _save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) { /* ignore */ }
  }

  function getHighestClearedIndex() {
    return _load().highestClearedIndex;
  }

  function _ensureLearnedWords(data) {
    if (!data.learnedWords || typeof data.learnedWords !== 'object') {
      data.learnedWords = {};
    }
  }

  function _mergeLevelWords(data, levelIndex) {
    if (typeof LEVELS === 'undefined' || !LEVELS[levelIndex]) return;
    _ensureLearnedWords(data);
    let orderBase = Object.keys(data.learnedWords).length;
    LEVELS[levelIndex].grid.words.forEach((w) => {
      const enriched =
        typeof Vocabulary !== 'undefined' ? Vocabulary.enrich(w) : w;
      const key = enriched.word.toUpperCase();
      if (data.learnedWords[key]) return;
      data.learnedWords[key] = {
        word: enriched.word,
        phonetic: enriched.phonetic,
        meaning: enriched.meaning,
        example: enriched.example,
        exampleCn: enriched.exampleCn,
        level: LEVELS[levelIndex].level,
        order: orderBase++,
      };
    });
  }

  function _backfillLearnedWords(data) {
    _ensureLearnedWords(data);
    if (data.highestClearedIndex < 0) return;
    if (Object.keys(data.learnedWords).length > 0) return;
    for (let i = 0; i <= data.highestClearedIndex; i++) {
      _mergeLevelWords(data, i);
    }
  }

  function markLevelCleared(levelIndex) {
    const data = _load();
    _mergeLevelWords(data, levelIndex);
    if (levelIndex > data.highestClearedIndex) {
      data.highestClearedIndex = levelIndex;
    }
    _save(data);
  }

  function getLearnedWords() {
    const data = _load();
    _backfillLearnedWords(data);
    if (Object.keys(data.learnedWords).length > 0) {
      _save(data);
    }
    const list = Object.values(data.learnedWords).sort((a, b) => a.order - b.order);
    if (typeof Vocabulary === 'undefined') return list;
    return list.map((w) => Vocabulary.enrich(w));
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
    getLearnedWords,
  };
})();
