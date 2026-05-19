/* ============================================
   Level Data - Hardcoded puzzle definitions
   ============================================ */

const LEVELS = [
  {
    level: 1,
    letters: ['F', 'L', 'O', 'W', 'E', 'R'],
    grid: {
      cells: [
        { row: 2, col: 1, letter: 'F', id: 'f1' },
        { row: 2, col: 2, letter: 'L', id: 'l1' },
        { row: 2, col: 3, letter: 'O', id: 'o1' },
        { row: 2, col: 4, letter: 'W', id: 'w1' },
        { row: 2, col: 5, letter: 'E', id: 'e1' },
        { row: 2, col: 6, letter: 'R', id: 'r1' },
        { row: 3, col: 1, letter: 'O', id: 'o2' },
        { row: 4, col: 1, letter: 'R', id: 'r2' },
        { row: 3, col: 3, letter: 'W', id: 'w2' },
        { row: 4, col: 3, letter: 'L', id: 'l2' },
      ],
      words: [
        {
          word: 'FLOWER', cellIds: ['f1', 'l1', 'o1', 'w1', 'e1', 'r1'],
          phonetic: '/ˈflaʊər/', meaning: 'n. 花，花朵',
          example: 'She picked a flower from the garden.',
          exampleCn: '她从花园里摘了一朵花。',
        },
        {
          word: 'FOR', cellIds: ['f1', 'o2', 'r2'],
          phonetic: '/fɔːr/', meaning: 'prep. 为了，因为',
          example: 'This gift is for you.',
          exampleCn: '这个礼物是给你的。',
        },
        {
          word: 'OWL', cellIds: ['o1', 'w2', 'l2'],
          phonetic: '/aʊl/', meaning: 'n. 猫头鹰',
          example: 'The owl hooted in the dark.',
          exampleCn: '猫头鹰在黑暗中鸣叫。',
        },
      ],
    },
  },
  {
    level: 2,
    letters: ['P', 'L', 'A', 'N', 'E', 'T'],
    grid: {
      cells: [
        { row: 1, col: 1, letter: 'P', id: 'p1' },
        { row: 1, col: 2, letter: 'L', id: 'l1' },
        { row: 1, col: 3, letter: 'A', id: 'a1' },
        { row: 1, col: 4, letter: 'N', id: 'n1' },
        { row: 1, col: 5, letter: 'E', id: 'e1' },
        { row: 1, col: 6, letter: 'T', id: 't1' },
        { row: 2, col: 1, letter: 'A', id: 'a2' },
        { row: 3, col: 1, letter: 'N', id: 'n2' },
        { row: 2, col: 4, letter: 'E', id: 'e2' },
        { row: 3, col: 4, letter: 'T', id: 't2' },
      ],
      words: [
        {
          word: 'PLANET', cellIds: ['p1', 'l1', 'a1', 'n1', 'e1', 't1'],
          phonetic: '/ˈplænɪt/', meaning: 'n. 行星',
          example: 'Mars is the fourth planet from the sun.',
          exampleCn: '火星是距离太阳第四近的行星。',
        },
        {
          word: 'PAN', cellIds: ['p1', 'a2', 'n2'],
          phonetic: '/pæn/', meaning: 'n. 平底锅；v. 严厉批评',
          example: 'Heat the oil in a large pan.',
          exampleCn: '在大平底锅里把油加热。',
        },
        {
          word: 'NET', cellIds: ['n1', 'e2', 't2'],
          phonetic: '/net/', meaning: 'n. 网，网络',
          example: 'The fish was caught in the net.',
          exampleCn: '鱼被网住了。',
        },
      ],
    },
  },
  {
    level: 3,
    letters: ['S', 'T', 'O', 'R', 'M', 'Y'],
    grid: {
      cells: [
        { row: 2, col: 1, letter: 'S', id: 's1' },
        { row: 2, col: 2, letter: 'T', id: 't1' },
        { row: 2, col: 3, letter: 'O', id: 'o1' },
        { row: 2, col: 4, letter: 'R', id: 'r1' },
        { row: 2, col: 5, letter: 'M', id: 'm1' },
        { row: 2, col: 6, letter: 'Y', id: 'y1' },
        { row: 3, col: 2, letter: 'O', id: 'o2' },
        { row: 4, col: 2, letter: 'Y', id: 'y2' },
        { row: 3, col: 4, letter: 'O', id: 'o3' },
        { row: 4, col: 4, letter: 'M', id: 'm2' },
      ],
      words: [
        {
          word: 'STORMY', cellIds: ['s1', 't1', 'o1', 'r1', 'm1', 'y1'],
          phonetic: '/ˈstɔːrmi/', meaning: 'adj. 暴风雨的，多风暴的',
          example: 'It was a dark and stormy night.',
          exampleCn: '那是一个漆黑暴风雨的夜晚。',
        },
        {
          word: 'TOY', cellIds: ['t1', 'o2', 'y2'],
          phonetic: '/tɔɪ/', meaning: 'n. 玩具',
          example: 'The child left his toys on the floor.',
          exampleCn: '孩子把玩具留在了地板上。',
        },
        {
          word: 'ROM', cellIds: ['r1', 'o3', 'm2'],
          phonetic: '/rɒm/', meaning: 'n. 只读存储器 (ROM)',
          example: 'The data is stored in ROM.',
          exampleCn: '数据存储在只读存储器中。',
        },
      ],
    },
  },
];
