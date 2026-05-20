/* ============================================
   Grid - Render and manage the crossword grid
   ============================================ */

const Grid = (() => {
  function _container() {
    return document.getElementById('grid-container');
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

    const activePositions = new Set(cells.map(c => `${c.row},${c.col}`));

    for (let ri = 0; ri < gridRows; ri++) {
      for (let ci = 0; ci < gridCols; ci++) {
        const origRow = activeRows[ri];
        const origCol = activeCols[ci];
        const key = `${origRow},${origCol}`;
        const div = document.createElement('div');

        if (activePositions.has(key)) {
          const cellData = cells.find(ce => ce.row === origRow && ce.col === origCol);
          div.className = 'grid-cell unsolved';
          div.dataset.id = cellData.id;
          div.dataset.letter = cellData.letter;

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
        } else {
          div.className = 'grid-cell empty';
        }

        container.appendChild(div);
      }
    }
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

    wordObj.cellIds.forEach((cellId, idx) => {
      solvedCells.add(cellId);
      const cellEl = cellMap[cellId];
      if (!cellEl) return;

      setTimeout(() => {
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

  function isWordSolved(word) {
    return solvedWords.has(word.toUpperCase());
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
    isWordSolved,
  };
})();
