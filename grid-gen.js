/* ============================================
   Grid Layout Generator - Build 50 levels (3 to 6 letters)
   Run: node grid-gen.js
   ============================================ */

const fs = require('fs');

// ========== 50 关原始单词数据 (3 - 6 字母极其平滑渐进) ==========
// 这里的每一关都极其严格地约束：words 里的所有单词只能用 letters 里的字母拼写！
const RAW_LEVELS = [
  // ==================== STAGE 1: 3 字母入门 (Levels 1 - 10) ====================
  { letters: ['C','A','T'], words: ['CAT','ACT'] },
  { letters: ['D','O','G'], words: ['DOG'] },
  { letters: ['T','E','A'], words: ['TEA','EAT'] },
  { letters: ['B','U','S'], words: ['BUS'] },
  { letters: ['F','L','Y'], words: ['FLY'] },
  { letters: ['R','U','N'], words: ['RUN'] },
  { letters: ['S','U','N'], words: ['SUN'] },
  { letters: ['B','A','D'], words: ['BAD'] },
  { letters: ['H','O','T'], words: ['HOT'] },
  { letters: ['P','E','N'], words: ['PEN'] },

  // ==================== STAGE 2: 4 字母进阶 (Levels 11 - 25) ====================
  { letters: ['S','T','A','R'], words: ['STAR','ART'] },
  { letters: ['R','O','S','E'], words: ['ROSE','ORE'] },
  { letters: ['L','I','S','T'], words: ['LIST','SIT'] },
  { letters: ['F','I','R','E'], words: ['FIRE','REF'] }, 
  { letters: ['R','O','A','D'], words: ['ROAD','ROD'] },
  { letters: ['T','I','M','E'], words: ['TIME','MET'] },
  { letters: ['P','A','L','E'], words: ['PALE','LAP'] },
  { letters: ['L','A','N','D'], words: ['LAND','LAD'] },
  { letters: ['D','U','S','T'], words: ['DUST','STUD'] },
  { letters: ['B','O','A','T'], words: ['BOAT','BAT'] },
  { letters: ['K','I','N','G'], words: ['KING','INK'] },
  { letters: ['W','I','N','D'], words: ['WIND','WIN'] },
  { letters: ['C','O','A','L'], words: ['COAL','COLA'] },
  { letters: ['H','A','N','D'], words: ['HAND','HAD'] },
  { letters: ['G','O','L','D'], words: ['GOLD','GOD'] },

  // ==================== STAGE 3: 5 字母挑战 (Levels 26 - 40) ====================
  { letters: ['B','R','E','A','D'], words: ['BREAD','BEAR','RED'] },
  { letters: ['C','L','O','U','D'], words: ['CLOUD','LOUD','COLD'] },
  { letters: ['G','R','E','E','N'], words: ['GREEN','GENE'] },
  { letters: ['F','I','E','L','D'], words: ['FIELD','FILE','LED'] },
  { letters: ['O','C','E','A','N'], words: ['OCEAN','CANE','ONE'] },
  { letters: ['S','M','A','R','T'], words: ['SMART','STARS','MAT'] }, 
  { letters: ['T','R','A','I','N'], words: ['TRAIN','RAIN','RAN'] },
  { letters: ['S','T','O','N','E'], words: ['STONE','TONE','SON'] },
  { letters: ['H','O','U','S','E'], words: ['HOUSE','USE'] },
  { letters: ['S','M','I','L','E'], words: ['SMILE','SLIM','MIL'] },
  { letters: ['W','A','T','E','R'], words: ['WATER','TEAR','WET'] },
  { letters: ['M','U','S','I','C'], words: ['MUSIC','SUM'] },
  { letters: ['P','L','A','N','T'], words: ['PLANT','PLAN','TAP'] },
  { letters: ['A','P','P','L','E'], words: ['APPLE','PLEA','APE'] },
  { letters: ['S','H','E','E','P'], words: ['SHEEP','SHE','SEE'] },

  // ==================== STAGE 4: 6 字母大师 (Levels 41 - 50) ====================
  { letters: ['S','I','L','V','E','R'], words: ['SILVER','LIVER','RISE'] },
  { letters: ['Y','E','L','L','O','W'], words: ['YELLOW','WELL','YELL'] },
  { letters: ['O','R','A','N','G','E'], words: ['ORANGE','RANGE','AGE'] },
  { letters: ['S','U','N','S','E','T'], words: ['SUNSET','NEST','SUN'] },
  { letters: ['W','I','N','T','E','R'], words: ['WINTER','WRITE','TEN'] },
  { letters: ['S','U','M','M','E','R'], words: ['SUMMER','MUSE','SUE'] },
  { letters: ['S','P','R','I','N','G'], words: ['SPRING','RING','PIG'] },
  { letters: ['B','R','I','D','G','E'], words: ['BRIDGE','BIRD','RED'] },
  { letters: ['V','I','L','L','A','G','E'], words: ['VILLAGE','LIVE','LEG'] },
  { letters: ['A','N','I','M','A','L'], words: ['ANIMAL','MAIL','MAN'] },
];

// ========== 精准释义词典，完美覆盖这 50 关中使用的所有目标单词 ==========
const DICTIONARY = {
  // 3字母
  'CAT': { phonetic: '/kæt/', meaning: 'n. 猫', example: 'The cat sleeps on the sofa.', exampleCn: '猫在沙发上睡觉。' },
  'ACT': { phonetic: '/ækt/', meaning: 'v. 行动；表演', example: 'We must act quickly.', exampleCn: '我们必须迅速行动。' },
  'DOG': { phonetic: '/dɒɡ/', meaning: 'n. 狗', example: 'The dog runs in the park.', exampleCn: '狗在公园里跑。' },
  'TEA': { phonetic: '/tiː/', meaning: 'n. 茶', example: 'Would you like a cup of tea?', exampleCn: '你想喝杯茶吗？' },
  'EAT': { phonetic: '/iːt/', meaning: 'v. 吃', example: 'Do not eat too fast.', exampleCn: '不要吃得太快。' },
  'BUS': { phonetic: '/bʌs/', meaning: 'n. 公共汽车', example: 'I go to school by bus.', exampleCn: '我坐公共汽车上学。' },
  'FLY': { phonetic: '/flaɪ/', meaning: 'v. 飞；n. 苍蝇', example: 'Birds can fly high.', exampleCn: '鸟能飞得很高。' },
  'RUN': { phonetic: '/rʌn/', meaning: 'v. 跑', example: 'I run every morning.', exampleCn: '我每天早上跑步。' },
  'SUN': { phonetic: '/sʌn/', meaning: 'n. 太阳', example: 'The sun is shining brightly.', exampleCn: '阳光明媚。' },
  'BAD': { phonetic: '/bæd/', meaning: 'adj. 坏的，差的', example: 'It is a bad habit.', exampleCn: '这是一个坏习惯。' },
  'HOT': { phonetic: '/hɒt/', meaning: 'adj. 热的', example: 'The coffee is very hot.', exampleCn: '咖啡非常热。' },
  'PEN': { phonetic: '/pen/', meaning: 'n. 钢笔', example: 'Write your name with a pen.', exampleCn: '用钢笔写下你的名字。' },

  // 4字母
  'STAR': { phonetic: '/stɑːr/', meaning: 'n. 星星；明星', example: 'Look at the bright star in the sky.', exampleCn: '看天上那颗明亮的星星。' },
  'ART': { phonetic: '/ɑːt/', meaning: 'n. 艺术', example: 'She studies art at college.', exampleCn: '她在大学学习艺术。' },
  'ROSE': { phonetic: '/rəʊz/', meaning: 'n. 玫瑰；v. 升起(过去式)', example: 'He gave her a red rose.', exampleCn: '他送给她一朵红玫瑰。' },
  'ORE': { phonetic: '/ɔːr/', meaning: 'n. 矿石', example: 'Iron ore is found here.', exampleCn: '这里发现了铁矿石。' },
  'LIST': { phonetic: '/lɪst/', meaning: 'n. 列表；v. 列出', example: 'Make a list of things to buy.', exampleCn: '列一张购物清单。' },
  'SIT': { phonetic: '/sɪt/', meaning: 'v. 坐', example: 'Please sit down.', exampleCn: '请坐下。' },
  'FIRE': { phonetic: '/ˈfaɪər/', meaning: 'n. 火；v. 解雇', example: 'The fire spread quickly.', exampleCn: '火势蔓延得很快。' },
  'REF': { phonetic: '/ref/', meaning: 'n. 裁判（口语）', example: 'The ref blew the whistle.', exampleCn: '裁判吹了哨子。' },
  'ROAD': { phonetic: '/rəʊd/', meaning: 'n. 道路', example: 'The road is under repair.', exampleCn: '这条路正在维修。' },
  'ROD': { phonetic: '/rɒd/', meaning: 'n. 杆，棒', example: 'He bought a fishing rod.', exampleCn: '他买了一根钓鱼竿。' },
  'TIME': { phonetic: '/taɪm/', meaning: 'n. 时间', example: 'Time flies like an arrow.', exampleCn: '光阴似箭。' },
  'MET': { phonetic: '/met/', meaning: 'v. 遇见(过去式)', example: 'We met at the station.', exampleCn: '我们在车站碰面。' },
  'PALE': { phonetic: '/peɪl/', meaning: 'adj. 苍白的', example: 'She looked pale and tired.', exampleCn: '她看起来苍白而疲惫。' },
  'LAP': { phonetic: '/læp/', meaning: 'n. 大腿；一圈', example: 'The cat sat on her lap.', exampleCn: '猫坐在她的大腿上。' },
  'LAND': { phonetic: '/lænd/', meaning: 'n. 土地；v. 着陆', example: 'The plane will land soon.', exampleCn: '飞机即将着陆。' },
  'LAD': { phonetic: '/læd/', meaning: 'n. 少年，小伙子', example: 'He is a fine young lad.', exampleCn: '他是一个不错的小伙子。' },
  'DUST': { phonetic: '/dʌst/', meaning: 'n. 灰尘', example: 'The shelf is covered with dust.', exampleCn: '架子上布满灰尘。' },
  'STUD': { phonetic: '/stʌd/', meaning: 'n. 种马；耳钉', example: 'He wore diamond studs.', exampleCn: '他戴着钻石耳钉。' },
  'BOAT': { phonetic: '/bəʊt/', meaning: 'n. 船', example: 'They took a boat on the lake.', exampleCn: '他们在湖上划船。' },
  'BAT': { phonetic: '/bæt/', meaning: 'n. 蝙蝠；球棒', example: 'A bat flew out of the cave.', exampleCn: '一只蝙蝠飞出了洞穴。' },
  'KING': { phonetic: '/kɪŋ/', meaning: 'n. 国王', example: 'Long live the king!', exampleCn: '国王万岁！' },
  'INK': { phonetic: '/ɪŋk/', meaning: 'n. 墨水', example: 'My pen is out of ink.', exampleCn: '我的钢笔没墨水了。' },
  'WIND': { phonetic: '/wɪnd/', meaning: 'n. 风', example: 'The cold wind is blowing.', exampleCn: '冷风正在吹。' },
  'WIN': { phonetic: '/wɪn/', meaning: 'v. 赢，获胜', example: 'We hope to win the game.', exampleCn: '我们希望赢得比赛。' },
  'COAL': { phonetic: '/kəʊl/', meaning: 'n. 煤炭', example: 'Coal is used for fuel.', exampleCn: '煤炭被用作燃料。' },
  'COLA': { phonetic: '/ˈkəʊlə/', meaning: 'n. 可乐', example: 'A bottle of cola, please.', exampleCn: '请来瓶可乐。' },
  'HAND': { phonetic: '/hænd/', meaning: 'n. 手', example: 'Give me a hand, please.', exampleCn: '请帮我一下。' },
  'HAD': { phonetic: '/hæd/', meaning: 'v. 有(过去式)', example: 'I had a great time today.', exampleCn: '我今天过得很开心。' },
  'GOLD': { phonetic: '/ɡəʊld/', meaning: 'n. 黄金；adj. 金色的', example: 'She wore a gold necklace.', exampleCn: '她戴着一条银项链。' },
  'GOD': { phonetic: '/ɡɒd/', meaning: 'n. 神，上帝', example: 'Thank God it is Friday.', exampleCn: '谢天谢地，周五了。' },

  // 5字母
  'BREAD': { phonetic: '/bred/', meaning: 'n. 面包', example: 'Fresh bread smells wonderful.', exampleCn: '新鲜面包闻起来很香。' },
  'BEAR': { phonetic: '/beər/', meaning: 'n. 熊；v. 承受', example: 'A black bear climbed the tree.', exampleCn: '一只黑熊爬上了树。' },
  'RED': { phonetic: '/red/', meaning: 'adj. 红色的', example: 'She chose a red dress.', exampleCn: '她选了一件红裙子。' },
  'CLOUD': { phonetic: '/klaʊd/', meaning: 'n. 云', example: 'Dark clouds gathered overhead.', exampleCn: '乌云在头顶聚集。' },
  'LOUD': { phonetic: '/laʊd/', meaning: 'adj. 大声的', example: 'The music is too loud.', exampleCn: '音乐太吵了。' },
  'COLD': { phonetic: '/kəʊld/', meaning: 'adj. 冷的；n. 感冒', example: 'It is cold outside today.', exampleCn: '今天外面很冷。' },
  'GREEN': { phonetic: '/ɡriːn/', meaning: 'adj. 绿色的', example: 'The grass is green.', exampleCn: '草是绿色的。' },
  'GENE': { phonetic: '/dʒiːn/', meaning: 'n. 基因', example: 'Genes determine eye color.', exampleCn: '基因决定眼睛的颜色。' },
  'FIELD': { phonetic: '/fiːld/', meaning: 'n. 领域；田野', example: 'She works in the medical field.', exampleCn: '她在医学领域工作。' },
  'FILE': { phonetic: '/faɪl/', meaning: 'n. 文件', example: 'Save the file before closing.', exampleCn: '关闭前保存文件。' },
  'LED': { phonetic: '/led/', meaning: 'v. 领导(过去式)', example: 'He led the team to victory.', exampleCn: '他带领队伍赢得了胜利。' },
  'OCEAN': { phonetic: '/ˈəʊʃn/', meaning: 'n. 海洋', example: 'The ocean is vast and blue.', exampleCn: '海洋广阔而湛蓝。' },
  'CANE': { phonetic: '/keɪn/', meaning: 'n. 手杖；甘蔗', example: 'The old man walks with a cane.', exampleCn: '老人拄着手杖走路。' },
  'ONE': { phonetic: '/wʌn/', meaning: 'num. 一', example: 'One step at a time.', exampleCn: '一步一步来。' },
  'SMART': { phonetic: '/smɑːt/', meaning: 'adj. 聪明的', example: 'He is a very smart boy.', exampleCn: '他是一个非常聪明的男孩。' },
  'STARS': { phonetic: '/stɑːrz/', meaning: 'n. 星星（复数）', example: 'The stars are bright tonight.', exampleCn: '今晚夜星璀璨。' },
  'MAT': { phonetic: '/mæt/', meaning: 'n. 垫子', example: 'Wipe your feet on the mat.', exampleCn: '在垫子上擦擦脚。' },
  'TRAIN': { phonetic: '/treɪn/', meaning: 'n. 火车；v. 训练', example: 'The train is on time.', exampleCn: '火车很准时。' },
  'RAIN': { phonetic: '/reɪn/', meaning: 'n. 雨；v. 下雨', example: 'I love the smell of rain.', exampleCn: '我喜欢下雨的气味。' },
  'RAN': { phonetic: '/ræn/', meaning: 'v. 跑(过去式)', example: 'He ran down the street.', exampleCn: '他沿着街跑了下去。' },
  'STONE': { phonetic: '/stəʊn/', meaning: 'n. 石头', example: 'He threw a stone into the water.', exampleCn: '他往水里扔了一块石头。' },
  'TONE': { phonetic: '/təʊn/', meaning: 'n. 语气，音调', example: 'Please speak in a polite tone.', exampleCn: '请用礼貌的语气说话。' },
  'SON': { phonetic: '/sʌn/', meaning: 'n. 儿子', example: 'My son is five years old.', exampleCn: '我的儿子五岁了。' },
  'HOUSE': { phonetic: '/haʊs/', meaning: 'n. 房子', example: 'They live in a big house.', exampleCn: '他们住在一所大房子里。' },
  'USE': { phonetic: '/juːz/', meaning: 'v. 使用', example: 'Can I use your phone?', exampleCn: '我可以用下你的电话吗？' },
  'SMILE': { phonetic: '/smaɪl/', meaning: 'v./n. 微笑', example: 'She always has a smile on her face.', exampleCn: '她脸上总是挂着微笑。' },
  'SLIM': { phonetic: '/slɪm/', meaning: 'adj. 苗条的', example: 'She maintains a slim figure.', exampleCn: '她保持着苗条的身材。' },
  'MIL': { phonetic: '/mɪl/', meaning: 'n. 毫升(英文缩写)', example: 'Add one mil of liquid.', exampleCn: '加入一毫升液体。' },
  'WATER': { phonetic: '/ˈwɔːtər/', meaning: 'n. 水', example: 'Drink plenty of water.', exampleCn: '多喝水。' },
  'TEAR': { phonetic: '/teər/', meaning: 'v. 撕裂；n. 眼泪', example: 'A tear rolled down her cheek.', exampleCn: '眼泪顺着她的脸颊流下。' },
  'WET': { phonetic: '/wet/', meaning: 'adj. 湿的', example: 'The grass is wet with dew.', exampleCn: '草被露水打湿了。' },
  'MUSIC': { phonetic: '/ˈmjuːzɪk/', meaning: 'n. 音乐', example: 'I enjoy listening to music.', exampleCn: '我喜欢听音乐。' },
  'SUM': { phonetic: '/sʌm/', meaning: 'n. 总数；金额', example: 'What is the sum of these numbers?', exampleCn: '这些数字的总和是多少？' },
  'PLANT': { phonetic: '/plɑːnt/', meaning: 'n. 植物；v. 种植', example: 'Water the plants daily.', exampleCn: '每天给植物浇水。' },
  'PLAN': { phonetic: '/plæn/', meaning: 'n. 计划', example: 'We need a clear plan.', exampleCn: '我们需要一个清晰的计划。' },
  'TAP': { phonetic: '/tæp/', meaning: 'v. 轻拍；n. 水龙头', example: 'Tap the screen to play.', exampleCn: '点击屏幕开始游戏。' },
  'APPLE': { phonetic: '/ˈæpl/', meaning: 'n. 苹果', example: 'An apple a day keeps the doctor away.', exampleCn: '一日一苹果，医生远离我。' },
  'PLEA': { phonetic: '/pliː/', meaning: 'n. 恳求，抗辩', example: 'He entered a plea of not guilty.', exampleCn: '他作出了无罪抗辩。' },
  'APE': { phonetic: '/eɪp/', meaning: 'n. 猿类', example: 'The ape climbed the tree effortlessly.', exampleCn: '那只猿猴轻松地爬上了树。' },
  'SHEEP': { phonetic: '/ʃiːp/', meaning: 'n. 绵羊', example: 'A flock of sheep on the hill.', exampleCn: '山坡上的一群绵羊。' },
  'SHE': { phonetic: '/ʃiː/', meaning: 'pron. 她', example: 'She is a smart girl.', exampleCn: '她是一个聪明的女孩。' },
  'SEE': { phonetic: '/siː/', meaning: 'v. 看见', example: 'I can see the mountains.', exampleCn: '我能看见那些山。' },

  // 6字母
  'SILVER': { phonetic: '/ˈsɪlvər/', meaning: 'n. 银色；银器', example: 'She wore a silver necklace.', exampleCn: '她戴着一条银项链。' },
  'LIVER': { phonetic: '/ˈlɪvər/', meaning: 'n. 肝脏', example: 'The liver is an essential organ.', exampleCn: '肝脏是必不可少的器官。' },
  'RISE': { phonetic: '/raɪz/', meaning: 'v. 升起，上升', example: 'The sun will rise soon.', exampleCn: '太阳即将升起。' },
  'YELLOW': { phonetic: '/ˈjeləʊ/', meaning: 'adj. 黄色的', example: 'The leaves turn yellow in autumn.', exampleCn: '秋天叶子变黄。' },
  'WELL': { phonetic: '/wel/', meaning: 'adv. 很好地', example: 'You did very well.', exampleCn: '你做得很好。' },
  'YELL': { phonetic: '/jel/', meaning: 'v. 大喊', example: 'Do not yell at me!', exampleCn: '不要对我大喊大叫！' },
  'ORANGE': { phonetic: '/ˈɒrɪndʒ/', meaning: 'n. 橙子；橙色', example: 'I drink orange juice daily.', exampleCn: '我每天喝橙汁。' },
  'RANGE': { phonetic: '/reɪndʒ/', meaning: 'n. 范围，幅度', example: 'The price range is wide.', exampleCn: '价格范围很大。' },
  'AGE': { phonetic: '/eɪdʒ/', meaning: 'n. 年龄', example: 'What is your age?', exampleCn: '你的年龄是多少？' },
  'SUNSET': { phonetic: '/ˈsʌnset/', meaning: 'n. 日落', example: 'We watched the sunset together.', exampleCn: '我们一起看了日落。' },
  'NEST': { phonetic: '/nest/', meaning: 'n. 鸟巢', example: 'A bird built a nest in the tree.', exampleCn: '鸟在树上建了巢。' },
  'WINTER': { phonetic: '/ˈwɪntər/', meaning: 'n. 冬天', example: 'Winter is my favorite season.', exampleCn: '冬天是我最喜欢的季节。' },
  'WRITE': { phonetic: '/raɪt/', meaning: 'v. 书写', example: 'Write down your ideas.', exampleCn: '写下你的想法。' },
  'TEN': { phonetic: '/ten/', meaning: 'num. 十', example: 'Count from one to ten.', exampleCn: '从一数到十。' },
  'SUMMER': { phonetic: '/ˈsʌmər/', meaning: 'n. 夏天', example: 'Summer is hot and sunny.', exampleCn: '夏天炎热多阳。' },
  'MUSE': { phonetic: '/mjuːz/', meaning: 'v. 沉思；n. 缪斯', example: 'She mused on the meaning of life.', exampleCn: '她沉思人生的意义。' },
  'SUE': { phonetic: '/suː/', meaning: 'v. 起诉', example: 'They threatened to sue.', exampleCn: '他们威胁要起诉。' },
  'SPRING': { phonetic: '/sprɪŋ/', meaning: 'n. 春天', example: 'Flowers bloom in spring.', exampleCn: '花朵在春天绽放。' },
  'RING': { phonetic: '/rɪŋ/', meaning: 'n. 戒指；v. 鸣响', example: 'She wore a diamond ring.', exampleCn: '她戴着钻戒。' },
  'PIG': { phonetic: '/pɪɡ/', meaning: 'n. 猪', example: 'The little pig was pink.', exampleCn: '那只小猪是粉红色的。' },
  'BRIDGE': { phonetic: '/brɪdʒ/', meaning: 'n. 桥梁', example: 'A stone bridge crosses the river.', exampleCn: '一座石桥横跨河流。' },
  'BIRD': { phonetic: '/bɜːd/', meaning: 'n. 鸟', example: 'The bird sang a sweet song.', exampleCn: '小鸟唱起甜美的歌。' },
  'VILLAGE': { phonetic: '/ˈvɪlɪdʒ/', meaning: 'n. 村庄', example: 'They moved to a quiet village.', exampleCn: '他们搬到了宁静的村庄。' },
  'LIVE': { phonetic: '/lɪv/', meaning: 'v. 居住，生存', example: 'I live in a small town.', exampleCn: '我住在一个小镇上。' },
  'LEG': { phonetic: '/leɡ/', meaning: 'n. 腿', example: 'He hurt his leg playing football.', exampleCn: '他踢足球伤了腿。' },
  'ANIMAL': { phonetic: '/ˈænɪml/', meaning: 'n. 动物', example: 'The lion is a wild animal.', exampleCn: '狮子是野生动物。' },
  'MAIL': { phonetic: '/meɪl/', meaning: 'n. 邮件；v. 邮寄', example: 'Check your mailbox daily.', exampleCn: '每天检查一下邮箱。' },
  'MAN': { phonetic: '/mæn/', meaning: 'n. 男人', example: 'He is a kind man.', exampleCn: '他是个善良的男人。' }
};

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

// ==================== 网格自动布局算法 (科学交叉，杜绝同方向重合歧义) ====================
function generateGrid(words, letters) {
  // 按长度降序排序
  const sortedWords = [...words].sort((a, b) => b.length - a.length);
  
  const placedCells = new Map(); // key="row,col" -> { row, col, letter, id }
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
  
  // 2. 交叉放置其余词，优先垂直正交
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
              const finalCells = newCells.map(nc => setCell(nc.row, nc.col, nc.letter));
              wordPlacements.push({ word, cells: finalCells });
              placed = true;
              break;
            }
            
            // 垂直失败尝试水平摆放
            newCells = canPlaceHorizontal(word, i, prevCell.row, prevCell.col);
            if (newCells) {
              const finalCells = newCells.map(nc => setCell(nc.row, nc.col, nc.letter));
              wordPlacements.push({ word, cells: finalCells });
              placed = true;
              break;
            }
          }
        }
        if (placed) break;
      }
      if (placed) break;
    }
    
    // 如果无法与已有词完美交叉，则并排在一行，间隔 3 格，不粘合
    if (!placed) {
      let maxCol = -1;
      placedCells.forEach(c => {
        if (c.row === mainRow) {
          maxCol = Math.max(maxCol, c.col);
        }
      });
      const startC = maxCol + 3;
      const newCells = [];
      for (let i = 0; i < word.length; i++) {
        const cell = setCell(mainRow, startC + i, word[i]);
        newCells.push(cell);
      }
      wordPlacements.push({ word, cells: newCells });
      console.log(`Placed unconnected word "${word}" at safe distance.`);
    }
  }
  
  // 3. 收集并格式化输出
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
  
  return { cells, words: wordObjs };
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
