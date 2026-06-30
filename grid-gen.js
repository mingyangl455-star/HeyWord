/* ============================================
   Grid Layout Generator - Build 50 levels (3 to 6 letters)
   Run: node grid-gen.js
   仅同步词库: node grid-gen.js --vocab-only
   ============================================ */

const fs = require('fs');
const path = require('path');

const VOCAB_PATH = path.join(__dirname, 'data', 'vocabulary.json');
const vocabOnly = process.argv.includes('--vocab-only');

function loadVocabulary() {
  if (!fs.existsSync(VOCAB_PATH)) {
    throw new Error(`词库文件不存在: ${VOCAB_PATH}`);
  }
  const raw = JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8'));
  const words = raw.words;
  if (!words || typeof words !== 'object') {
    throw new Error('vocabulary.json 需包含 "words" 对象');
  }
  return words;
}

function writeVocabularyJs(words) {
  const body = `/* Auto-generated from data/vocabulary.json — do not edit by hand */
const Vocabulary = (() => {
  const WORDS = ${JSON.stringify(words, null, 2)};

  function lookup(word) {
    if (!word) return null;
    return WORDS[String(word).toUpperCase()] || null;
  }

  function enrich(entry) {
    if (!entry) return entry;
    const key = String(entry.word || entry).toUpperCase();
    const info = WORDS[key];
    if (!info) return entry;
    return {
      ...entry,
      word: entry.word || key,
      phonetic: info.phonetic,
      meaning: info.meaning,
      example: info.example,
      exampleCn: info.exampleCn,
    };
  }

  return { lookup, enrich, WORDS };
})();
`;
  fs.writeFileSync(path.join(__dirname, 'js', 'vocabulary.js'), body, 'utf8');
}

// ========== 50 关原始单词数据 (3 - 6 字母极其平滑渐进) ==========
// 这里的每一关都极其严格地约束：words 里的所有单词只能用 letters 里的字母拼写！
const RAW_LEVELS = [
  // ==================== STAGE 1: 3 字母入门 (Levels 1 - 10) ====================
  { letters: ['D','O','G'], words: ['DOG'] }, // Level 1: 唯一一个单单词热身关
  { letters: ['C','A','T'], words: ['CAT','ACT'] }, // Level 2
  { letters: ['T','E','A'], words: ['TEA','EAT'] }, // Level 3
  { letters: ['B','U','S'], words: ['BUS','SUB'] }, // Level 4
  { letters: ['A','R','M'], words: ['ARM','RAM'] }, // Level 5
  { letters: ['N','O','W'], words: ['NOW','WON'] }, // Level 6
  { letters: ['E','A','R'], words: ['EAR','ARE','ERA'] }, // Level 7
  { letters: ['R','A','T'], words: ['RAT','ART','TAR'] }, // Level 8
  { letters: ['R','U','N'], words: ['RUN','URN'] }, // Level 9
  { letters: ['N','E','T'], words: ['NET','TEN'] }, // Level 10

  // ==================== STAGE 2: 4 字母进阶 (Levels 11 - 25) ====================
  { letters: ['S','T','A','R'], words: ['STAR','ART'] }, // Level 11
  { letters: ['R','O','S','E'], words: ['ROSE','ORE'] }, // Level 12
  { letters: ['F','I','R','E'], words: ['FIRE','REF'] }, // Level 13
  { letters: ['R','O','A','D'], words: ['ROAD','ROD'] }, // Level 14
  { letters: ['L','A','N','D'], words: ['LAND','LAD'] }, // Level 15
  { letters: ['L','I','S','T'], words: ['LIST','SIT','LIT'] }, // Level 16
  { letters: ['T','I','M','E'], words: ['TIME','MET','TIE'] }, // Level 17
  { letters: ['P','A','L','E'], words: ['PALE','LAP','ALE'] }, // Level 18
  { letters: ['B','O','A','T'], words: ['BOAT','BAT','TAB'] }, // Level 19
  { letters: ['K','I','N','G'], words: ['KING','INK','GIN'] }, // Level 20
  { letters: ['W','I','N','D'], words: ['WIND','WIN','DIN'] }, // Level 21
  { letters: ['H','A','N','D'], words: ['HAND','HAD','AND'] }, // Level 22
  { letters: ['G','O','L','D'], words: ['GOLD','GOD','DOG','LOG'] }, // Level 23
  { letters: ['E','A','S','Y'], words: ['EASY','SAY','SEA','YES'] }, // Level 24
  { letters: ['R','A','T','E'], words: ['RATE','TEAR','ART','ATE'] }, // Level 25

  // ==================== STAGE 3: 5 字母挑战 (Levels 26 - 40) ====================
  { letters: ['B','R','E','A','D'], words: ['BREAD','BEAR','RED','BAD'] }, // Level 26
  { letters: ['C','L','O','U','D'], words: ['CLOUD','LOUD','COLD','COD'] }, // Level 27
  { letters: ['G','R','E','E','N'], words: ['GREEN','GENE','ERR'] }, // Level 28
  { letters: ['F','I','E','L','D'], words: ['FIELD','FILE','LED','DIE'] }, // Level 29
  { letters: ['O','C','E','A','N'], words: ['OCEAN','CANE','ONE','CON'] }, // Level 30
  { letters: ['S','M','A','R','T'], words: ['SMART','MAT','ART','RAT'] }, // Level 31
  { letters: ['T','R','A','I','N'], words: ['TRAIN','RAIN','RAN','TIN'] }, // Level 32
  { letters: ['S','T','O','N','E'], words: ['STONE','TONE','SON','NET','TEN'] }, // Level 33
  { letters: ['H','O','U','S','E'], words: ['HOUSE','USE','SHE','HUE'] }, // Level 34
  { letters: ['S','M','I','L','E'], words: ['SMILE','SLIM','MIL','LIE'] }, // Level 35
  { letters: ['W','A','T','E','R'], words: ['WATER','TEAR','WET','ART','RAW'] }, // Level 36
  { letters: ['P','L','A','N','T'], words: ['PLANT','PLAN','TAP','PAN','ANT'] }, // Level 37
  { letters: ['A','P','P','L','E'], words: ['APPLE','PLEA','APE','PALE','LAP'] }, // Level 38
  { letters: ['S','H','E','E','P'], words: ['SHEEP','SHE','SEE','PEE'] }, // Level 39
  { letters: ['S','H','A','R','P'], words: ['SHARP','HARP','ASH','HAS','RAP','SPA'] }, // Level 40

  // ==================== STAGE 4: 6 字母大师 (Levels 41 - 50) ====================
  { letters: ['S','I','L','V','E','R'], words: ['SILVER','LIVER','RISE','LIVE','VILE'] }, // Level 41
  { letters: ['Y','E','L','L','O','W'], words: ['YELLOW','WELL','YELL','LOW'] }, // Level 42
  { letters: ['O','R','A','N','G','E'], words: ['ORANGE','RANGE','AGE','EAR','ONE'] }, // Level 43
  { letters: ['S','U','N','S','E','T'], words: ['SUNSET','NEST','SUN','NET','TEN','SET'] }, // Level 44
  { letters: ['W','I','N','T','E','R'], words: ['WINTER','WRITE','TEN','NET','WET','TIE'] }, // Level 45
  { letters: ['S','U','M','M','E','R'], words: ['SUMMER','MUSE','SUE','SUM'] }, // Level 46
  { letters: ['S','P','R','I','N','G'], words: ['SPRING','RING','PIG','PIN','GIN','SING'] }, // Level 47
  { letters: ['B','R','I','D','G','E'], words: ['BRIDGE','BIRD','RED','BED','RIDE','GRID'] }, // Level 48
  { letters: ['F','A','M','I','L','Y'], words: ['FAMILY','MAIL','FLY','LAY','AIM'] }, // Level 49
  { letters: ['A','N','I','M','A','L'], words: ['ANIMAL','MAIL','MAN','MIL','AIM','NIL'] }, // Level 50
];

const DICTIONARY = loadVocabulary();
writeVocabularyJs(DICTIONARY);

function collectLevelWords() {
  const set = new Set();
  RAW_LEVELS.forEach((lvl) => lvl.words.forEach((w) => set.add(w.toUpperCase())));
  return set;
}

function validateVocabularyCoverage() {
  const missing = [];
  collectLevelWords().forEach((w) => {
    if (!DICTIONARY[w]) missing.push(w);
  });
  if (missing.length) {
    console.warn(
      `[vocab] ${missing.length} 个关卡单词未在 data/vocabulary.json 中定义: ${missing.join(', ')}`
    );
    console.warn('[vocab] 将使用占位释义；请在 vocabulary.json 的 words 中补全后重新运行 grid-gen.js');
  } else {
    console.log(`✅ vocabulary.json 已覆盖全部 ${collectLevelWords().size} 个关卡单词`);
  }
}

function getWordInfo(word) {
  const upper = word.toUpperCase();
  if (DICTIONARY[upper]) {
    return DICTIONARY[upper];
  }
  return {
    phonetic: '',
    meaning: `n. ${word.toLowerCase()}`,
    example: `Example sentence with ${word.toLowerCase()}.`,
    exampleCn: `包含 ${word.toLowerCase()} 的例句。`,
  };
}

// ==================== 严格验证 letters 集合与单词字母匹配，消除任何数据笔误越界 ====================
function validateRawLevels() {
  for (let i = 0; i < RAW_LEVELS.length; i++) {
    const lvl = RAW_LEVELS[i];
    const letterSet = new Set(lvl.letters);
    
    // 确保 letters 数组都是大写
    lvl.letters.forEach((l) => {
      if (l !== l.toUpperCase() || l.length !== 1) {
        throw new Error(`[CRITICAL DATA ERROR] Level ${i+1}: letters list contain invalid item "${l}". Must be a single UPPERCASE char.`);
      }
    });

    lvl.words.forEach(w => {
      const upperWord = w.toUpperCase();
      if (w !== upperWord) {
        throw new Error(`[CRITICAL DATA ERROR] Level ${i+1}: word "${w}" must be completely UPPERCASE.`);
      }
      for (let c of upperWord) {
        if (!letterSet.has(c)) {
          throw new Error(`[CRITICAL DATA ERROR] Level ${i+1}: Word "${w}" contains letter "${c}" which does NOT exist on the letters disk: [${lvl.letters.join(', ')}]!`);
        }
      }
    });
  }
  console.log('✅ ALL RAW LEVELS PASSED STRICT ALPHABET VERIFICATION (100% CORRECT DATA)');
}

validateRawLevels();
validateVocabularyCoverage();

if (vocabOnly) {
  console.log('✅ 已同步 js/vocabulary.js（未重新生成关卡）');
  process.exit(0);
}

function permute(arr) {
  if (arr.length <= 1) return [arr];
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    const head = arr[i];
    const tailPerms = permute(arr.filter((_, j) => j !== i));
    for (const tp of tailPerms) out.push([head, ...tp]);
  }
  return out;
}

// 单次尝试：按给定顺序交叉摆放，遵守一行一词 / 一列一词
function tryPlaceWords(sortedWords) {
  const placedCells = new Map(); // key="row,col" -> { row, col, letter, id }
  const horizontalByRow = new Map(); // row -> word（该行唯一的横向词）
  const verticalByCol = new Map();   // col -> word（该列唯一的纵向词）
  const idCounters = {};
  const wordPlacements = []; // { word, cells: [{row, col, letter, id}] }
  
  function getId(letter) {
    idCounters[letter] = (idCounters[letter] || 0) + 1;
    return letter.toLowerCase() + idCounters[letter];
  }
  
  function getCell(row, col) {
    return placedCells.get(`${row},${col}`);
  }
  
  function setCell(row, col, letter) {
    const key = `${row},${col}`;
    if (!placedCells.has(key)) {
      placedCells.set(key, { row, col, letter, id: getId(letter) });
    }
    return placedCells.get(key);
  }
  
  // 检查是否会在同方向发生重叠。
  // 也就是说：如果我们将一个垂直词摆放在 (startRow, startCol)，
  // 1) 它的上方 (startRow-1, startCol) 和下方 (startRow + word.length, startCol) 绝对不能存在任何别的非空字符，
  //    因为否则会在视觉上把这两个垂直词无脑粘合在一起，造成长度或起止方向歧义！
  // 2) 它的两侧在没有发生“合法的正交十字交叉”时，不能有并排的字母，防止并列重合。
  function canPlaceVertical(word, crossIndex, crossRow, crossCol) {
    const startRow = crossRow - crossIndex;
    const startCol = crossCol;

    // 同一列只能有一条纵向词
    if (verticalByCol.has(startCol)) return false;
    
    // 边界与间距审查
    if (getCell(startRow - 1, startCol) !== undefined) return false;
    if (getCell(startRow + word.length, startCol) !== undefined) return false;
    
    const tempCells = [];
    for (let j = 0; j < word.length; j++) {
      const r = startRow + j;
      const c = startCol;
      const existing = getCell(r, c);
      
      if (existing) {
        if (existing.letter !== word[j]) return false;
        tempCells.push(existing);
      } else {
        // 确保新摆放格子的左右邻居是非交叉字母（左右两边不能并排粘着别的字母）
        if (getCell(r, c - 1) !== undefined || getCell(r, c + 1) !== undefined) {
          return false;
        }
        tempCells.push({ row: r, col: c, letter: word[j] });
      }
    }
    return tempCells;
  }
  
  function canPlaceHorizontal(word, crossIndex, crossRow, crossCol) {
    const startRow = crossRow;
    const startCol = crossCol - crossIndex;

    // 同一行只能有一条横向词
    if (horizontalByRow.has(startRow)) return false;
    
    // 边界与间距审查
    if (getCell(startRow, startCol - 1) !== undefined) return false;
    if (getCell(startRow, startCol + word.length) !== undefined) return false;
    
    const tempCells = [];
    for (let j = 0; j < word.length; j++) {
      const r = startRow;
      const c = startCol + j;
      const existing = getCell(r, c);
      
      if (existing) {
        if (existing.letter !== word[j]) return false;
        tempCells.push(existing);
      } else {
        // 确保新摆放格子的上下邻居是非交叉字母（上下两边不能并排粘着别的字母）
        if (getCell(r - 1, c) !== undefined || getCell(r + 1, c) !== undefined) {
          return false;
        }
        tempCells.push({ row: r, col: c, letter: word[j] });
      }
    }
    return tempCells;
  }
  
  // 1. 放置主词（水平），放到第 10 行，给上下留出足够空间
  const mainWord = sortedWords[0];
  const mainRow = 10;
  const mainCol = 10;
  const mainCells = [];
  for (let i = 0; i < mainWord.length; i++) {
    const cell = setCell(mainRow, mainCol + i, mainWord[i]);
    mainCells.push(cell);
  }
  wordPlacements.push({ word: mainWord, cells: mainCells });
  horizontalByRow.set(mainRow, mainWord);
  
  function commitPlacement(word, newCells, orientation) {
    const finalCells = newCells.map(nc => setCell(nc.row, nc.col, nc.letter));
    wordPlacements.push({ word, cells: finalCells });
    if (orientation === 'vertical') {
      const col = finalCells[0].col;
      verticalByCol.set(col, word);
    } else {
      const row = finalCells[0].row;
      horizontalByRow.set(row, word);
    }
    return true;
  }
  
  // 2. 交叉放置其余词，必须正交交叉，禁止同排/同列并排
  for (let w = 1; w < sortedWords.length; w++) {
    const word = sortedWords[w];
    let placed = false;
    
    // 遍历已摆放单词的每个字母
    for (const prev of wordPlacements) {
      for (const prevCell of prev.cells) {
        for (let i = 0; i < word.length; i++) {
          if (word[i] === prevCell.letter) {
            // 尝试垂直摆放
            let newCells = canPlaceVertical(word, i, prevCell.row, prevCell.col);
            if (newCells) {
              placed = commitPlacement(word, newCells, 'vertical');
              break;
            }
            
            // 垂直失败尝试水平交叉（仍须满足「该行尚无其它横词」）
            newCells = canPlaceHorizontal(word, i, prevCell.row, prevCell.col);
            if (newCells) {
              placed = commitPlacement(word, newCells, 'horizontal');
              break;
            }
          }
        }
        if (placed) break;
      }
      if (placed) break;
    }
    
    if (!placed) {
      const partialCells = Array.from(placedCells.values()).map(c => ({
        row: c.row,
        col: c.col,
        letter: c.letter,
        id: c.id,
      }));
      const partialWords = wordPlacements.map(wp => {
        const info = getWordInfo(wp.word);
        return {
          word: wp.word,
          cellIds: wp.cells.map(c => c.id),
          phonetic: info.phonetic,
          meaning: info.meaning,
          example: info.example,
          exampleCn: info.exampleCn,
        };
      });
      return {
        placedAll: false,
        placedCount: wordPlacements.length,
        cells: partialCells,
        words: partialWords,
      };
    }
  }
  
  const cells = Array.from(placedCells.values()).map(c => ({
    row: c.row,
    col: c.col,
    letter: c.letter,
    id: c.id,
  }));
  
  const wordObjs = wordPlacements.map(wp => {
    const info = getWordInfo(wp.word);
    return {
      word: wp.word,
      cellIds: wp.cells.map(c => c.id),
      phonetic: info.phonetic,
      meaning: info.meaning,
      example: info.example,
      exampleCn: info.exampleCn,
    };
  });
  
  return { placedAll: true, cells, words: wordObjs };
}

function generateGrid(words, letters) {
  const mainWord = [...words].sort((a, b) => b.length - a.length)[0];
  const rest = words.filter((w) => w !== mainWord);
  const restByLen = [...rest].sort((a, b) => b.length - a.length);

  const orders = [[...restByLen]];
  for (const perm of permute(rest)) {
    const key = perm.join('|');
    if (!orders.some((o) => o.join('|') === key)) orders.push(perm);
  }

  let best = null;
  for (const restOrder of orders) {
    const result = tryPlaceWords([mainWord, ...restOrder]);
    if (result.placedAll) {
      return { cells: result.cells, words: result.words };
    }
    if (!best || result.placedCount > best.placedCount) {
      best = result;
    }
  }

  const missing = words.filter((w) => !best.words.some((gw) => gw.word === w));
  console.warn(
    `[grid] Level incomplete: placed ${best.words.length}/${words.length}, missing: ${missing.join(', ')}`
  );
  return { cells: best.cells, words: best.words };
}

// ========== 4. 生成 50 关并输出到 js/levels.js ==========
const LEVELS = RAW_LEVELS.map((raw, index) => {
  const grid = generateGrid(raw.words, raw.letters);
  return {
    level: index + 1,
    letters: raw.letters,
    grid,
  };
});

const output = `/* ============================================
   Level Data - 50 Levels (3 to 6 letters flat progression)
   ============================================ */

const LEVELS = ${JSON.stringify(LEVELS, null, 2)};
`;

fs.writeFileSync('./js/levels.js', output, 'utf-8');
console.log(`Generated ${LEVELS.length} levels into ./js/levels.js`);

// 5. 严格回归校验
let success = true;
for (let i = 0; i < LEVELS.length; i++) {
  const lvl = LEVELS[i];
  const raw = RAW_LEVELS[i];
  if (lvl.grid.words.length !== raw.words.length) {
    console.error(`Level ${i + 1}: placed ${lvl.grid.words.length}/${raw.words.length} words — missing: ${raw.words.filter(w => !lvl.grid.words.some(gw => gw.word === w)).join(', ')}`);
    success = false;
  }
  for (const w of lvl.grid.words) {
    if (w.cellIds.length !== w.word.length) {
      console.error(`Level ${i+1} word "${w.word}" has ${w.cellIds.length} cells but length ${w.word.length}`);
      success = false;
    }
  }
}
if (success) {
  console.log('🎉 All levels generated and validated successfully!');
}
