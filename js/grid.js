/* ============================================
   Grid - Render and manage the crossword grid
   ============================================ */

const Grid = (() => {
  const container = document.getElementById('grid-container');
  let currentLevel = null;
  let cellMap = {};
  let solvedWords = new Set();
  let solvedCells = new Set();
  let onLevelCleared = null;

  function loadLevel(levelData, callback) {
    currentLevel = levelData;
    cellMap = {};
    solvedWords = new Set();
    solvedCells = new Set();
    onLevelCleared = callback;

    const { cells, words } = levelData.grid;

    container.innerHTML = '';

    // Find bounding box of active cells to compact the grid
    const activeRows = [...new Set(cells.map(c => c.row))].sort((a, b) => a - b);
    const activeCols = [...new Set(cells.map(c => c.col))].sort((a, b) => a - b);

    const rowMap = {};
    activeRows.forEach((r, i) => rowMap[r] = i);
    const colMap = {};
    activeCols.forEach((c, i) => colMap[c] = i);

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

  function solveWord(wordObj) {
    if (solvedWords.has(wordObj.word)) return false;

    solvedWords.add(wordObj.word);

    wordObj.cellIds.forEach((cellId, idx) => {
      solvedCells.add(cellId);
      const cellEl = cellMap[cellId];
      if (!cellEl) return;

      setTimeout(() => {
        cellEl.classList.remove('unsolved');
        cellEl.classList.add('solved');
        Effects.popCell(cellEl);
      }, idx * 80);
    });

    setTimeout(() => {
      _checkCleared();
    }, wordObj.cellIds.length * 80 + 200);

    return true;
  }

  function revealCell(cellId) {
    const cellEl = cellMap[cellId];
    if (!cellEl || cellEl.classList.contains('solved')) return false;

    solvedCells.add(cellId);
    cellEl.classList.remove('unsolved');
    cellEl.classList.add('solved');
    Effects.popCell(cellEl);

    currentLevel.grid.words.forEach(w => {
      if (solvedWords.has(w.word)) return;
      const allSolved = w.cellIds.every(id => solvedCells.has(id));
      if (allSolved) {
        solvedWords.add(w.word);
      }
    });

    setTimeout(() => _checkCleared(), 300);
    return true;
  }

  function getRandomUnsolvedCellId() {
    const unsolved = currentLevel.grid.cells.filter(c => !solvedCells.has(c.id));
    if (unsolved.length === 0) return null;
    return unsolved[Math.floor(Math.random() * unsolved.length)].id;
  }

  function isSolved(word) {
    return solvedWords.has(word);
  }

  function _checkCleared() {
    const allSolved = currentLevel.grid.words.every(w => solvedWords.has(w.word));
    if (allSolved && onLevelCleared) {
      onLevelCleared();
    }
  }

  return { loadLevel, solveWord, revealCell, getRandomUnsolvedCellId, isSolved };
})();
