/* ============================================
   Grid - Render and manage the crossword grid
   ============================================ */

const Grid = (() => {
  function _container() {
    return document.getElementById('grid-container');
  }

  function _fitGridToArea() {
    const grid = document.getElementById('grid-container');
    const fit = document.getElementById('grid-fit');
    const scroll = document.querySelector('#grid-area .grid-scroll');
    if (!grid || !fit || !scroll) return;

    // Reset first to get natural size
    fit.style.transform = 'scale(1)';
    fit.style.width = '';
    fit.style.height = '';

    // Measure after layout
    requestAnimationFrame(() => {
      const availableW = scroll.clientWidth;
      const availableH = scroll.clientHeight;
      const gridW = grid.scrollWidth;
      const gridH = grid.scrollHeight;

      if (!availableW || !availableH || !gridW || !gridH) return;

      const scale = Math.min(1, availableW / gridW, availableH / gridH);
      fit.style.transform = `scale(${scale})`;
      fit.style.width = `${gridW * scale}px`;
      fit.style.height = `${gridH * scale}px`;
    });
  }

  let currentLevel = null;
  let cellMap = {};
  let solvedWords = new Set();
  let solvedCells = new Set();
  let onLevelCleared = null;

  function loadLevel(levelData, callback) {
    const container = _container();
    if (!container) return;
    currentLevel = levelData;
    cellMap = {};
    solvedWords = new Set();
    solvedCells = new Set();
    onLevelCleared = callback;

    const { cells } = levelData.grid;
    container.innerHTML = '';

    const activeRows = [...new Set(cells.map(c => c.row))].sort((a, b) => a - b);
    const activeCols = [...new Set(cells.map(c => c.col))].sort((a, b) => a - b);

    const gridRows = activeRows.length;
    const gridCols = activeCols.length;

    container.style.gridTemplateColumns = `repeat(${gridCols}, 44px)`;
    container.style.gridTemplateRows = `repeat(${gridRows}, 44px)`;

    const rowIndex = new Map(activeRows.map((r, i) => [r, i + 1]));
    const colIndex = new Map(activeCols.map((c, i) => [c, i + 1]));

    cells.forEach((cellData) => {
      const div = document.createElement('div');
      div.className = 'grid-cell unsolved';
      div.dataset.id = cellData.id;
      div.dataset.letter = cellData.letter;
      div.style.gridRow = String(rowIndex.get(cellData.row));
      div.style.gridColumn = String(colIndex.get(cellData.col));

      const inner = document.createElement('div');
      inner.className = 'cell-inner';

      const front = document.createElement('div');
      front.className = 'cell-front';

      const back = document.createElement('div');
      back.className = 'cell-back';
      back.textContent = cellData.letter;

      inner.appendChild(front);
      inner.appendChild(back);
      div.appendChild(inner);

      cellMap[cellData.id] = div;
      container.appendChild(div);
    });

    levelData.grid.words.forEach((w, wi) => {
      const colorClass = `solved-word-${wi % 6}`;
      w.cellIds.forEach((id) => {
        const el = cellMap[id];
        if (el) el.dataset.wordColor = colorClass;
      });
    });

    _fitGridToArea();
  }

  function reset() {
    currentLevel = null;
    cellMap = {};
    solvedWords = new Set();
    solvedCells = new Set();
    onLevelCleared = null;
  }

  function _markCellSolved(cellEl, useHintStyle) {
    const letter = cellEl.dataset.letter || '';
    const front = cellEl.querySelector('.cell-front');
    if (front) front.textContent = letter;

    cellEl.classList.remove('unsolved');
    cellEl.classList.add('solved');
    if (useHintStyle) {
      cellEl.classList.add('hint-revealed');
    } else {
      cellEl.classList.remove('hint-revealed');
    }
  }

  function solveWord(wordObj) {
    const key = wordObj.word.toUpperCase();
    if (solvedWords.has(key)) return false;

    solvedWords.add(key);

    const colorClass = cellMap[wordObj.cellIds[0]]?.dataset.wordColor || 'solved-word-0';

    wordObj.cellIds.forEach((cellId, idx) => {
      solvedCells.add(cellId);
      const cellEl = cellMap[cellId];
      if (!cellEl) return;

      setTimeout(() => {
        cellEl.classList.add(colorClass);
        _markCellSolved(cellEl, false);
        Effects.popCell(cellEl);
      }, idx * 80);
    });

    setTimeout(() => {
      _checkCleared();
    }, wordObj.cellIds.length * 80 + 200);

    return true;
  }

  function revealCell(cellId) {
    if (!currentLevel || !currentLevel.grid) return false;

    const cellEl = cellMap[cellId];
    if (!cellEl || cellEl.classList.contains('solved')) return false;

    solvedCells.add(cellId);
    const colorClass = cellEl.dataset.wordColor;
    if (colorClass) cellEl.classList.add(colorClass);
    _markCellSolved(cellEl, true);
    Effects.popCell(cellEl);

    currentLevel.grid.words.forEach(w => {
      const wkey = w.word.toUpperCase();
      if (solvedWords.has(wkey)) return;
      const allSolved = w.cellIds.every(id => solvedCells.has(id));
      if (allSolved) {
        solvedWords.add(wkey);
        w.cellIds.forEach(id => {
          const el = cellMap[id];
          if (el) el.classList.remove('hint-revealed');
        });
      }
    });

    setTimeout(() => _checkCleared(), 300);
    return true;
  }

  function getRandomUnsolvedCellId() {
    if (!currentLevel || !currentLevel.grid || !currentLevel.grid.cells) {
      return null;
    }
    const unsolved = currentLevel.grid.cells.filter(c => !solvedCells.has(c.id));
    if (unsolved.length === 0) return null;
    return unsolved[Math.floor(Math.random() * unsolved.length)].id;
  }

  function getRandomUnsolvedWordCells() {
    if (!currentLevel || !currentLevel.grid || !currentLevel.grid.words) return null;
    const unsolvedWords = currentLevel.grid.words.filter(w => !solvedWords.has(w.word.toUpperCase()));
    if (unsolvedWords.length === 0) return null;
    const word = unsolvedWords[Math.floor(Math.random() * unsolvedWords.length)];
    return word.cellIds.map(id => cellMap[id]).filter(Boolean);
  }

  function clearIdleHints() {
    Object.values(cellMap).forEach(el => {
      if (el) el.classList.remove('idle-hint');
    });
  }

  function isWordSolved(word) {
    return solvedWords.has(word.toUpperCase());
  }

  function getSolvedWordObjects() {
    if (!currentLevel || !currentLevel.grid) return [];
    return currentLevel.grid.words.filter((w) =>
      solvedWords.has(w.word.toUpperCase())
    );
  }

  function _checkCleared() {
    if (!currentLevel || !currentLevel.grid) return;
    const allSolved = currentLevel.grid.words.every(w =>
      solvedWords.has(w.word.toUpperCase())
    );
    if (allSolved && onLevelCleared) {
      onLevelCleared();
    }
  }

  return {
    loadLevel,
    reset,
    solveWord,
    revealCell,
    getRandomUnsolvedCellId,
    getRandomUnsolvedWordCells,
    clearIdleHints,
    isWordSolved,
    getSolvedWordObjects,
  };
})();
