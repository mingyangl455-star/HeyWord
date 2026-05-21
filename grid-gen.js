/* ============================================
   Grid Layout Generator - Build 50 levels
   Run: node grid-gen.js
   ============================================ */

const fs = require('fs');

// ========== 50 关原始单词数据 ==========
// Level 1: 3字母热身；Level 2-50: 难度递增
const RAW_LEVELS = [
  // Level 1: 3字母热身
  { letters: ['C','A','T'], words: ['CAT','ACT'] },

  // Level 2-10: 4字母入门（避免纯变位词堆叠，主词+少量短词）
  { letters: ['S','T','A','R'], words: ['STAR','ART'] },
  { letters: ['R','O','S','E'], words: ['ROSE','ORES'] },
  { letters: ['L','I','S','T'], words: ['LIST','SILT','SLIT'] },
  { letters: ['F','I','R','E'], words: ['FIRE','RIFE'] },
  { letters: ['R','O','A','D'], words: ['ROAD','ORAD'] },
  { letters: ['T','I','M','E'], words: ['TIME','EMIT','ITEM'] },
  { letters: ['P','A','L','E'], words: ['PALE','LEAP'] },
  { letters: ['L','A','N','D'], words: ['LAND','DUAL'] },
  { letters: ['D','U','S','T'], words: ['DUST','STUD'] },

  // Level 11-20: 4-5字母进阶
  { letters: ['R','A','T','E'], words: ['RATE','TEAR'] },
  { letters: ['B','R','E','A','D'], words: ['BREAD','READ','DARE'] },
  { letters: ['C','L','O','U','D'], words: ['CLOUD','LOUD','COLD'] },
  { letters: ['G','R','E','E','N'], words: ['GREEN','GENRE'] },
  { letters: ['F','I','E','L','D'], words: ['FIELD','FILED','IDLE'] },
  { letters: ['O','C','E','A','N'], words: ['OCEAN','CONE','CANE'] },
  { letters: ['B','R','I','G','H','T'], words: ['BRIGHT','RIGHT'] },
  { letters: ['S','T','R','E','A','M'], words: ['STREAM','TEAM'] },
  { letters: ['Y','E','L','L','O','W'], words: ['YELLOW','WELL'] },
  { letters: ['S','I','L','V','E','R'], words: ['SILVER','LIVER'] },

  // Level 21-30: 5-7字母挑战
  { letters: ['O','R','A','N','G','E'], words: ['ORANGE','RANGE'] },
  { letters: ['D','I','A','M','O','N','D'], words: ['DIAMOND'] },
  { letters: ['S','U','N','S','E','T'], words: ['SUNSET','NEST'] },
  { letters: ['W','I','N','T','E','R'], words: ['WINTER','WRITE'] },
  { letters: ['S','U','M','M','E','R'], words: ['SUMMER','USER'] },
  { letters: ['S','P','R','I','N','G'], words: ['SPRING','RINGS'] },
  { letters: ['B','R','I','D','G','E'], words: ['BRIDGE','BIRD'] },
  { letters: ['V','I','L','L','A','G','E'], words: ['VILLAGE','GIVE'] },
  { letters: ['T','H','O','U','G','H','T'], words: ['THOUGHT','OUGHT'] },
  { letters: ['P','I','C','T','U','R','E'], words: ['PICTURE','PURE'] },

  // Level 31-40: 6-7字母高手
  { letters: ['C','A','P','T','A','I','N'], words: ['CAPTAIN','PAINT'] },
  { letters: ['W','E','A','T','H','E','R'], words: ['WEATHER','HEAT'] },
  { letters: ['F','O','R','E','S','T','S'], words: ['FORESTS','FOREST'] },
  { letters: ['G','A','R','D','E','N','S'], words: ['GARDENS','READS'] },
  { letters: ['J','O','U','R','N','E','Y'], words: ['JOURNEY','JURY'] },
  { letters: ['C','H','A','P','T','E','R'], words: ['CHAPTER','CHART'] },
  { letters: ['D','E','S','T','R','O','Y'], words: ['DESTROY','STORE'] },
  { letters: ['H','I','S','T','O','R','Y'], words: ['HISTORY','SHORT'] },
  { letters: ['F','A','S','H','I','O','N'], words: ['FASHION','FANS'] },
  { letters: ['P','R','O','B','L','E','M'], words: ['PROBLEM','PROBE'] },

  // Level 41-50: 7-8字母大师
  { letters: ['T','R','E','A','S','U','R','E'], words: ['TREASURE','STARE'] },
  { letters: ['T','E','A','C','H','E','R','S'], words: ['TEACHERS','TEACHES'] },
  { letters: ['Q','U','E','S','T','I','O','N'], words: ['QUESTION','QUEST'] },
  { letters: ['P','O','S','I','T','I','V','E'], words: ['POSITIVE','VISIT'] },
  { letters: ['C','O','M','P','L','E','T','E'], words: ['COMPLETE','POET'] },
  { letters: ['P','R','A','C','T','I','C','E'], words: ['PRACTICE','TRACE'] },
  { letters: ['I','N','T','E','R','E','S','T'], words: ['INTEREST','ENTER'] },
  { letters: ['R','E','S','E','A','R','C','H'], words: ['RESEARCH','SEARCH'] },
  { letters: ['C','H','A','M','P','I','O','N'], words: ['CHAMPION','CHAMP'] },
  { letters: ['A','D','V','E','N','T','U','R','E'], words: ['ADVENTURE','VENTURE'] },
];

// ========== 简化释义词典 ==========
const DICTIONARY = {
  'CAT': { phonetic: '/kæt/', meaning: 'n. 猫', example: 'The cat sleeps on the sofa.', exampleCn: '猫在沙发上睡觉。' },
  'ACT': { phonetic: '/ækt/', meaning: 'v. 行动；表演', example: 'We must act quickly.', exampleCn: '我们必须迅速行动。' },
  'DOG': { phonetic: '/dɒɡ/', meaning: 'n. 狗', example: 'The dog runs in the park.', exampleCn: '狗在公园里跑。' },
  'GOD': { phonetic: '/ɡɒd/', meaning: 'n. 神，上帝', example: 'Thank God it is Friday.', exampleCn: '谢天谢地，周五了。' },
  'BAT': { phonetic: '/bæt/', meaning: 'n. 蝙蝠；球棒', example: 'A bat flew out of the cave.', exampleCn: '一只蝙蝠飞出了洞穴。' },
  'TAB': { phonetic: '/tæb/', meaning: 'n. 标签；账单', example: 'He paid the tab at the bar.', exampleCn: '他在酒吧付了账单。' },
  'EAR': { phonetic: '/ɪər/', meaning: 'n. 耳朵', example: 'She whispered in his ear.', exampleCn: '她在他耳边低语。' },
  'ARE': { phonetic: '/ɑːr/', meaning: 'v. 是（复数）', example: 'They are good friends.', exampleCn: '他们是好朋友。' },
  'ERA': { phonetic: '/ˈɪərə/', meaning: 'n. 时代，纪元', example: 'We live in a digital era.', exampleCn: '我们生活在数字时代。' },
  'TEA': { phonetic: '/tiː/', meaning: 'n. 茶', example: 'Would you like a cup of tea?', exampleCn: '你想喝杯茶吗？' },
  'EAT': { phonetic: '/iːt/', meaning: 'v. 吃', example: 'Do not eat too fast.', exampleCn: '不要吃得太快。' },
  'ATE': { phonetic: '/eɪt/', meaning: 'v. eat 的过去式', example: 'She ate an apple.', exampleCn: '她吃了一个苹果。' },
  'RAT': { phonetic: '/ræt/', meaning: 'n. 老鼠', example: 'A rat ran across the floor.', exampleCn: '一只老鼠跑过地板。' },
  'ART': { phonetic: '/ɑːt/', meaning: 'n. 艺术', example: 'She studies art at college.', exampleCn: '她在大学学习艺术。' },
  'TAR': { phonetic: '/tɑːr/', meaning: 'n. 焦油', example: 'The road was covered with tar.', exampleCn: '路上铺满了焦油。' },
  'NOW': { phonetic: '/naʊ/', meaning: 'adv. 现在', example: 'I am busy right now.', exampleCn: '我现在很忙。' },
  'WON': { phonetic: '/wʌn/', meaning: 'v. win 的过去式', example: 'Our team won the game.', exampleCn: '我们队赢了比赛。' },
  'OWN': { phonetic: '/əʊn/', meaning: 'v. 拥有；adj. 自己的', example: 'I own a small car.', exampleCn: '我有一辆小汽车。' },
  'RUN': { phonetic: '/rʌn/', meaning: 'v. 跑', example: 'I run every morning.', exampleCn: '我每天早上跑步。' },
  'URN': { phonetic: '/ɜːn/', meaning: 'n. 瓮，骨灰盒', example: 'The ashes are kept in an urn.', exampleCn: '骨灰保存在瓮中。' },
  'ARM': { phonetic: '/ɑːm/', meaning: 'n. 手臂', example: 'He broke his left arm.', exampleCn: '他摔断了左臂。' },
  'RAM': { phonetic: '/ræm/', meaning: 'n. 公羊；v. 撞击', example: 'A ram charged at the fence.', exampleCn: '一只公羊冲向围栏。' },
  'MAR': { phonetic: '/mɑːr/', meaning: 'v. 损坏，毁坏', example: 'The scratch will mar the table.', exampleCn: '划痕会损坏桌子。' },
  'LIE': { phonetic: '/laɪ/', meaning: 'v. 躺；说谎', example: 'Do not lie to me.', exampleCn: '不要对我说谎。' },
  'LEI': { phonetic: '/leɪ/', meaning: 'n. （夏威夷）花环', example: 'She wore a lei around her neck.', exampleCn: '她脖子上戴着花环。' },
  'STAR': { phonetic: '/stɑːr/', meaning: 'n. 星星；明星', example: 'Look at the bright star in the sky.', exampleCn: '看天上那颗明亮的星星。' },
  'ROSE': { phonetic: '/rəʊz/', meaning: 'n. 玫瑰；v. rise 的过去式', example: 'He gave her a red rose.', exampleCn: '他送给她一朵红玫瑰。' },
  'ORES': { phonetic: '/ɔːrz/', meaning: 'n. 矿石（复数）', example: 'The mine produces iron ores.', exampleCn: '这座矿出产铁矿石。' },
  'LIST': { phonetic: '/lɪst/', meaning: 'n. 列表；v. 列出', example: 'Make a list of things to buy.', exampleCn: '列一张购物清单。' },
  'SILT': { phonetic: '/sɪlt/', meaning: 'n. 淤泥', example: 'The river is full of silt.', exampleCn: '这条河满是淤泥。' },
  'SLIT': { phonetic: '/slɪt/', meaning: 'n. 裂缝；v. 切开', example: 'There is a slit in the curtain.', exampleCn: '窗帘上有一道裂缝。' },
  'LIT': { phonetic: '/lɪt/', meaning: 'v. light 的过去式', example: 'She lit a candle.', exampleCn: '她点燃了一支蜡烛。' },
  'SIT': { phonetic: '/sɪt/', meaning: 'v. 坐', example: 'Please sit down.', exampleCn: '请坐。' },
  'RATE': { phonetic: '/reɪt/', meaning: 'n. 比率；v. 评价', example: 'The exchange rate is rising.', exampleCn: '汇率正在上涨。' },
  'TEAR': { phonetic: '/tɪər/', meaning: 'n. 眼泪；v. 撕裂', example: 'A tear rolled down her cheek.', exampleCn: '一滴眼泪从她脸颊滑落。' },
  'TARE': { phonetic: '/teər/', meaning: 'n. 皮重', example: 'Subtract the tare from the gross weight.', exampleCn: '从毛重中减去皮重。' },
  'DUST': { phonetic: '/dʌst/', meaning: 'n. 灰尘', example: 'The shelf is covered with dust.', exampleCn: '架子上布满灰尘。' },
  'STUD': { phonetic: '/stʌd/', meaning: 'n. 种马；耳钉', example: 'He wore diamond studs.', exampleCn: '他戴着钻石耳钉。' },
  'FIRE': { phonetic: '/ˈfaɪər/', meaning: 'n. 火；v. 解雇', example: 'The fire spread quickly.', exampleCn: '火势蔓延得很快。' },
  'RIFE': { phonetic: '/raɪf/', meaning: 'adj. 流行的，普遍的', example: 'Corruption is rife in the system.', exampleCn: '腐败在这个系统中很普遍。' },
  'LAND': { phonetic: '/lænd/', meaning: 'n. 土地；v. 着陆', example: 'The plane will land soon.', exampleCn: '飞机即将着陆。' },
  'DUAL': { phonetic: '/ˈdjuːəl/', meaning: 'adj. 双重的', example: 'The phone has dual cameras.', exampleCn: '这款手机有双摄像头。' },
  'LAUD': { phonetic: '/lɔːd/', meaning: 'v. 赞美', example: 'Critics laud the new film.', exampleCn: '评论家称赞这部新电影。' },
  'TIME': { phonetic: '/taɪm/', meaning: 'n. 时间', example: 'Time flies when you are having fun.', exampleCn: '开心的时候时间飞逝。' },
  'EMIT': { phonetic: '/ɪˈmɪt/', meaning: 'v. 发出，排放', example: 'The factory emits toxic gas.', exampleCn: '这家工厂排放有毒气体。' },
  'ITEM': { phonetic: '/ˈaɪtəm/', meaning: 'n. 项目，物品', example: 'This item is out of stock.', exampleCn: '这件商品缺货。' },
  'MITE': { phonetic: '/maɪt/', meaning: 'n. 螨虫', example: 'Dust mites can cause allergies.', exampleCn: '尘螨会引起过敏。' },
  'TIE': { phonetic: '/taɪ/', meaning: 'n. 领带；v. 系', example: 'He wore a blue tie.', exampleCn: '他系了一条蓝色领带。' },
  'ROAD': { phonetic: '/rəʊd/', meaning: 'n. 道路', example: 'The road is under repair.', exampleCn: '这条路正在维修。' },
  'ORAD': { phonetic: '/ˈɔːræd/', meaning: 'adv. 向口部', example: 'An orad movement.', exampleCn: '向口部的运动。' },
  'PALE': { phonetic: '/peɪl/', meaning: 'adj. 苍白的', example: 'She looked pale and tired.', exampleCn: '她看起来苍白而疲惫。' },
  'LEAP': { phonetic: '/liːp/', meaning: 'v. 跳跃', example: 'The cat made a leap over the fence.', exampleCn: '猫跳过围栏。' },
  'PLEA': { phonetic: '/pliː/', meaning: 'n. 恳求，抗辩', example: 'He entered a plea of not guilty.', exampleCn: '他提出无罪抗辩。' },
  'ALE': { phonetic: '/eɪl/', meaning: 'n. 麦芽酒', example: 'A pint of ale, please.', exampleCn: '请来一品脱麦芽酒。' },
  'LAP': { phonetic: '/læp/', meaning: 'n. 大腿；v. 舔食', example: 'The cat sat on her lap.', exampleCn: '猫坐在她的大腿上。' },
  'BREAD': { phonetic: '/bred/', meaning: 'n. 面包', example: 'Fresh bread smells wonderful.', exampleCn: '新鲜面包闻起来很香。' },
  'READ': { phonetic: '/riːd/', meaning: 'v. 阅读', example: 'I read a book every week.', exampleCn: '我每周读一本书。' },
  'DARE': { phonetic: '/deər/', meaning: 'v. 敢于', example: 'Do you dare to try?', exampleCn: '你敢试试吗？' },
  'DEAR': { phonetic: '/dɪər/', meaning: 'adj. 亲爱的；昂贵的', example: 'You are so dear to me.', exampleCn: '你对我来说很珍贵。' },
  'CLOUD': { phonetic: '/klaʊd/', meaning: 'n. 云', example: 'Dark clouds gathered overhead.', exampleCn: '乌云在头顶聚集。' },
  'LOUD': { phonetic: '/laʊd/', meaning: 'adj. 大声的', example: 'The music is too loud.', exampleCn: '音乐太吵了。' },
  'COLD': { phonetic: '/kəʊld/', meaning: 'adj. 冷的；n. 感冒', example: 'It is cold outside today.', exampleCn: '今天外面很冷。' },
  'BRIGHT': { phonetic: '/braɪt/', meaning: 'adj. 明亮的', example: 'The sun is bright today.', exampleCn: '今天阳光明媚。' },
  'RIGHT': { phonetic: '/raɪt/', meaning: 'adj. 正确的；n. 右边', example: 'Turn right at the corner.', exampleCn: '在拐角处右转。' },
  'GRIT': { phonetic: '/ɡrɪt/', meaning: 'n. 勇气；砂砾', example: 'She showed true grit.', exampleCn: '她展现了真正的勇气。' },
  'STREAM': { phonetic: '/striːm/', meaning: 'n. 小溪；v. 流动', example: 'A small stream runs through the village.', exampleCn: '一条小溪穿过村庄。' },
  'TEAM': { phonetic: '/tiːm/', meaning: 'n. 团队', example: 'Our team won the match.', exampleCn: '我们队赢了比赛。' },
  'STEAM': { phonetic: '/stiːm/', meaning: 'n. 蒸汽', example: 'Steam rose from the hot soup.', exampleCn: '热气从热汤中升起。' },
  'MATES': { phonetic: '/meɪts/', meaning: 'n. 伙伴，同事（复数）', example: 'He went out with his mates.', exampleCn: '他和伙伴们出去玩了。' },
  'FIELD': { phonetic: '/fiːld/', meaning: 'n. 田野；领域', example: 'She works in the medical field.', exampleCn: '她在医学领域工作。' },
  'FILED': { phonetic: '/faɪld/', meaning: 'v. file 的过去式，提交', example: 'He filed a complaint.', exampleCn: '他提交了一份投诉。' },
  'IDLE': { phonetic: '/ˈaɪdl/', meaning: 'adj. 空闲的；懒散的', example: 'The factory machines sat idle.', exampleCn: '工厂的机器闲置着。' },
  'LIED': { phonetic: '/laɪd/', meaning: 'v. lie 的过去式', example: 'He lied about his age.', exampleCn: '他谎报了年龄。' },
  'FILE': { phonetic: '/faɪl/', meaning: 'n. 文件', example: 'Save the file before closing.', exampleCn: '关闭前保存文件。' },
  'LIFE': { phonetic: '/laɪf/', meaning: 'n. 生活，生命', example: 'Life is full of surprises.', exampleCn: '生活充满惊喜。' },
  'GREEN': { phonetic: '/ɡriːn/', meaning: 'adj. 绿色的', example: 'The grass is green.', exampleCn: '草是绿色的。' },
  'GENRE': { phonetic: '/ˈʒɒnrə/', meaning: 'n. 类型，体裁', example: 'What is your favorite music genre?', exampleCn: '你最喜欢的音乐类型是什么？' },
  'SILVER': { phonetic: '/ˈsɪlvər/', meaning: 'n. 银；adj. 银色的', example: 'She wore a silver necklace.', exampleCn: '她戴着一条银项链。' },
  'LIVER': { phonetic: '/ˈlɪvər/', meaning: 'n. 肝脏', example: 'The liver filters blood.', exampleCn: '肝脏过滤血液。' },
  'SLIVER': { phonetic: '/ˈslɪvər/', meaning: 'n. 碎片，裂片', example: 'A sliver of glass cut her finger.', exampleCn: '一块玻璃碎片割伤了她的手指。' },
  'YELLOW': { phonetic: '/ˈjeləʊ/', meaning: 'adj. 黄色的', example: 'The leaves turn yellow in autumn.', exampleCn: '秋天叶子变黄。' },
  'WELL': { phonetic: '/wel/', meaning: 'adv. 好地；n. 井', example: 'She plays the piano very well.', exampleCn: '她钢琴弹得很好。' },
  'YELL': { phonetic: '/jel/', meaning: 'v. 大喊', example: 'Do not yell at me!', exampleCn: '别对我大喊大叫！' },
  'ORANGE': { phonetic: '/ˈɒrɪndʒ/', meaning: 'n. 橙子；adj. 橙色的', example: 'I drink orange juice every morning.', exampleCn: '我每天早上喝橙汁。' },
  'RANGE': { phonetic: '/reɪndʒ/', meaning: 'n. 范围', example: 'The price range is wide.', exampleCn: '价格范围很广。' },
  'GROAN': { phonetic: '/ɡrəʊn/', meaning: 'v. 呻吟', example: 'He groaned in pain.', exampleCn: '他痛苦地呻吟。' },
  'ORGAN': { phonetic: '/ˈɔːɡən/', meaning: 'n. 器官；风琴', example: 'The heart is a vital organ.', exampleCn: '心脏是重要的器官。' },
  'DIAMOND': { phonetic: '/ˈdaɪəmənd/', meaning: 'n. 钻石', example: 'A diamond ring sparkled on her finger.', exampleCn: '她手指上的钻戒闪闪发光。' },
  'SUNSET': { phonetic: '/ˈsʌnset/', meaning: 'n. 日落', example: 'We watched the sunset at the beach.', exampleCn: '我们在海滩看日落。' },
  'NEST': { phonetic: '/nest/', meaning: 'n. 巢', example: 'The bird built a nest in the tree.', exampleCn: '鸟在树上筑了一个巢。' },
  'SENT': { phonetic: '/sent/', meaning: 'v. send 的过去式', example: 'I sent an email yesterday.', exampleCn: '我昨天发了一封邮件。' },
  'TENS': { phonetic: '/tenz/', meaning: 'n. 十位数', example: 'The temperature is in the tens.', exampleCn: '温度在十几度。' },
  'NETS': { phonetic: '/nets/', meaning: 'n. 网（复数）', example: 'The fisherman checked his nets.', exampleCn: '渔夫检查了他的网。' },
  'CAPTAIN': { phonetic: '/ˈkæptɪn/', meaning: 'n. 船长；队长', example: 'The captain steered the ship.', exampleCn: '船长驾驶着船。' },
  'PAINT': { phonetic: '/peɪnt/', meaning: 'n. 油漆；v. 绘画', example: 'She loves to paint landscapes.', exampleCn: '她喜欢画风景画。' },
  'PIN': { phonetic: '/pɪn/', meaning: 'n. 别针', example: 'He wore a pin on his jacket.', exampleCn: '他在夹克上别了一枚别针。' },
  'CAP': { phonetic: '/kæp/', meaning: 'n. 帽子', example: 'He wore a baseball cap.', exampleCn: '他戴了一顶棒球帽。' },
  'PAN': { phonetic: '/pæn/', meaning: 'n. 平底锅', example: 'Heat the oil in a pan.', exampleCn: '在平底锅里加热油。' },
  'PICTURE': { phonetic: '/ˈpɪktʃər/', meaning: 'n. 图片，照片', example: 'Take a picture of the sunset.', exampleCn: '拍一张日落的照片。' },
  'PURE': { phonetic: '/pjʊər/', meaning: 'adj. 纯的', example: 'The water is pure and clean.', exampleCn: '水纯净清澈。' },
  'CUTE': { phonetic: '/kjuːt/', meaning: 'adj. 可爱的', example: 'The puppy is so cute.', exampleCn: '这只小狗太可爱了。' },
  'RITE': { phonetic: '/raɪt/', meaning: 'n. 仪式', example: 'The wedding rite was beautiful.', exampleCn: '婚礼仪式很美好。' },
  'TIRE': { phonetic: '/ˈtaɪər/', meaning: 'n. 轮胎；v. 疲劳', example: 'The car needs a new tire.', exampleCn: '这辆车需要新轮胎。' },
  'WINTER': { phonetic: '/ˈwɪntər/', meaning: 'n. 冬天', example: 'Winter is my favorite season.', exampleCn: '冬天是我最喜欢的季节。' },
  'WRITE': { phonetic: '/raɪt/', meaning: 'v. 写', example: 'I write in my diary every night.', exampleCn: '我每晚写日记。' },
  'TWIN': { phonetic: '/twɪn/', meaning: 'n. 双胞胎之一', example: 'She has a twin sister.', exampleCn: '她有一个双胞胎姐妹。' },
  'WINE': { phonetic: '/waɪn/', meaning: 'n. 葡萄酒', example: 'A glass of red wine, please.', exampleCn: '请来一杯红葡萄酒。' },
  'WIRE': { phonetic: '/ˈwaɪər/', meaning: 'n. 电线', example: 'The wire was cut.', exampleCn: '电线被切断了。' },
  'TIER': { phonetic: '/ˈtaɪər/', meaning: 'n. 层，等级', example: 'The cake had three tiers.', exampleCn: '蛋糕有三层。' },
  'SUMMER': { phonetic: '/ˈsʌmər/', meaning: 'n. 夏天', example: 'We go swimming every summer.', exampleCn: '我们每年夏天都去游泳。' },
  'USER': { phonetic: '/ˈjuːzər/', meaning: 'n. 用户', example: 'The app has one million users.', exampleCn: '这款应用有一百万用户。' },
  'SURE': { phonetic: '/ʃʊər/', meaning: 'adj. 确定的', example: 'Are you sure about that?', exampleCn: '你确定吗？' },
  'RUSE': { phonetic: '/ruːz/', meaning: 'n. 诡计', example: 'It was all a ruse to trick us.', exampleCn: '这都是欺骗我们的诡计。' },
  'SPRING': { phonetic: '/sprɪŋ/', meaning: 'n. 春天；弹簧', example: 'Spring is the season of growth.', exampleCn: '春天是生长的季节。' },
  'RINGS': { phonetic: '/rɪŋz/', meaning: 'n. 戒指（复数）；v. ring 的第三人称单数', example: 'She wears two gold rings.', exampleCn: '她戴着两枚金戒指。' },
  'GRINS': { phonetic: '/ɡrɪnz/', meaning: 'v. grin 的第三人称单数，咧嘴笑', example: 'He grins from ear to ear.', exampleCn: '他笑得合不拢嘴。' },
  'GRIP': { phonetic: '/ɡrɪp/', meaning: 'n. 紧握；v. 抓住', example: 'Keep a firm grip on the rope.', exampleCn: '紧紧握住绳子。' },
  'PINS': { phonetic: '/pɪnz/', meaning: 'n. 别针（复数）', example: 'She collects colorful pins.', exampleCn: '她收集彩色别针。' },
  'SIGN': { phonetic: '/saɪn/', meaning: 'n. 标志；v. 签名', example: 'Please sign your name here.', exampleCn: '请在这里签名。' },
  'OCEAN': { phonetic: '/ˈəʊʃn/', meaning: 'n. 海洋', example: 'The ocean is vast and blue.', exampleCn: '海洋广阔而湛蓝。' },
  'CONE': { phonetic: '/kəʊn/', meaning: 'n. 圆锥；松果', example: 'An ice cream cone, please.', exampleCn: '请给我一个冰淇淋甜筒。' },
  'CANE': { phonetic: '/keɪn/', meaning: 'n. 手杖；甘蔗', example: 'The old man walks with a cane.', exampleCn: '老人拄着手杖走路。' },
  'ONCE': { phonetic: '/wʌns/', meaning: 'adv. 一次；曾经', example: 'I have been there once.', exampleCn: '我去过那里一次。' },
  'VILLAGE': { phonetic: '/ˈvɪlɪdʒ/', meaning: 'n. 村庄', example: 'A small village by the lake.', exampleCn: '湖边的一个小村庄。' },
  'GIVE': { phonetic: '/ɡɪv/', meaning: 'v. 给', example: 'Give me a hand, please.', exampleCn: '请帮我一下。' },
  'LIVE': { phonetic: '/lɪv/', meaning: 'v. 生活；/laɪv/ adj. 现场的', example: 'I live in Beijing.', exampleCn: '我住在北京。' },
  'VILE': { phonetic: '/vaɪl/', meaning: 'adj. 卑鄙的', example: 'A vile smell filled the room.', exampleCn: '房间里弥漫着恶臭。' },
  'VEIL': { phonetic: '/veɪl/', meaning: 'n. 面纱', example: 'The bride wore a white veil.', exampleCn: '新娘戴着白色面纱。' },
  'BRIDGE': { phonetic: '/brɪdʒ/', meaning: 'n. 桥', example: 'The bridge crosses the river.', exampleCn: '这座桥横跨河流。' },
  'BIRD': { phonetic: '/bɜːd/', meaning: 'n. 鸟', example: 'A bird sang in the tree.', exampleCn: '一只鸟在树上唱歌。' },
  'RIDE': { phonetic: '/raɪd/', meaning: 'v. 骑；n. 旅程', example: 'I ride my bike to work.', exampleCn: '我骑自行车上班。' },
  'GRID': { phonetic: '/ɡrɪd/', meaning: 'n. 网格', example: 'The city is laid out in a grid.', exampleCn: '这座城市呈网格状布局。' },
  'BIDE': { phonetic: '/baɪd/', meaning: 'v. 等待', example: 'Bide your time patiently.', exampleCn: '耐心等待时机。' },
  'BRIE': { phonetic: '/briː/', meaning: 'n. （法国）布里奶酪', example: 'She served brie with crackers.', exampleCn: '她配饼干上了布里奶酪。' },
  'THOUGHT': { phonetic: '/θɔːt/', meaning: 'n. 想法', example: 'A thought crossed my mind.', exampleCn: '一个想法掠过我的脑海。' },
  'OUGHT': { phonetic: '/ɔːt/', meaning: 'aux. 应该', example: 'You ought to try harder.', exampleCn: '你应该更努力。' },
  'TOUGH': { phonetic: '/tʌf/', meaning: 'adj. 坚韧的；困难的', example: 'This meat is tough to chew.', exampleCn: '这块肉很难嚼。' },
  'THOU': { phonetic: '/ðaʊ/', meaning: 'pron. 你（古英语）', example: 'Where art thou?', exampleCn: '你在哪里？（古英语）' },
  'WEATHER': { phonetic: '/ˈweðər/', meaning: 'n. 天气', example: 'The weather is nice today.', exampleCn: '今天天气很好。' },
  'HEAT': { phonetic: '/hiːt/', meaning: 'n. 热', example: 'The heat is unbearable.', exampleCn: '热得难以忍受。' },
  'EARTH': { phonetic: '/ɜːθ/', meaning: 'n. 地球；土壤', example: 'The Earth orbits the Sun.', exampleCn: '地球围绕太阳运转。' },
  'FORESTS': { phonetic: '/ˈfɒrɪsts/', meaning: 'n. 森林（复数）', example: 'Dense forests cover the mountain.', exampleCn: '茂密的森林覆盖着山脉。' },
  'FOREST': { phonetic: '/ˈfɒrɪst/', meaning: 'n. 森林', example: 'We camped in the forest.', exampleCn: '我们在森林里露营。' },
  'FORTS': { phonetic: '/fɔːts/', meaning: 'n. 堡垒（复数）', example: 'Old forts line the coast.', exampleCn: '古老的堡垒沿着海岸排列。' },
  'RESTS': { phonetic: '/rests/', meaning: 'v. 休息（第三人称单数）', example: 'He rests after lunch.', exampleCn: '他午饭后休息。' },
  'GARDENS': { phonetic: '/ˈɡɑːdnz/', meaning: 'n. 花园（复数）', example: 'The palace has beautiful gardens.', exampleCn: '这座宫殿有美丽的花园。' },
  'READS': { phonetic: '/riːdz/', meaning: 'v. 阅读（第三人称单数）', example: 'She reads every night.', exampleCn: '她每晚都阅读。' },
  'DARES': { phonetic: '/deərz/', meaning: 'v. 敢于（第三人称单数）', example: 'He dares to dream big.', exampleCn: '他敢于大胆梦想。' },
  'GRAND': { phonetic: '/ɡrænd/', meaning: 'adj. 宏伟的', example: 'A grand building stood before us.', exampleCn: '一座宏伟的建筑矗立在我们面前。' },
  'SAND': { phonetic: '/sænd/', meaning: 'n. 沙子', example: 'Children play in the sand.', exampleCn: '孩子们在沙子里玩耍。' },
  'JOURNEY': { phonetic: '/ˈdʒɜːni/', meaning: 'n. 旅程', example: 'Life is a journey, not a destination.', exampleCn: '人生是一场旅程，不是终点。' },
  'JURY': { phonetic: '/ˈdʒʊəri/', meaning: 'n. 陪审团', example: 'The jury reached a verdict.', exampleCn: '陪审团做出了裁决。' },
  'ENJOY': { phonetic: '/ɪnˈdʒɔɪ/', meaning: 'v. 享受', example: 'Enjoy your meal!', exampleCn: '请享用你的餐食！' },
  'OUR': { phonetic: '/ˈaʊər/', meaning: 'pron. 我们的', example: 'This is our home.', exampleCn: '这是我们的家。' },
  'CHAPTER': { phonetic: '/ˈtʃæptər/', meaning: 'n. 章节', example: 'Read chapter three by Monday.', exampleCn: '周一前读完第三章。' },
  'CHART': { phonetic: '/tʃɑːt/', meaning: 'n. 图表', example: 'The chart shows sales growth.', exampleCn: '图表显示了销售增长。' },
  'PATCH': { phonetic: '/pætʃ/', meaning: 'n. 补丁；v. 修补', example: 'He sewed a patch on his jeans.', exampleCn: '他在牛仔裤上缝了一块补丁。' },
  'PEACH': { phonetic: '/piːtʃ/', meaning: 'n. 桃子', example: 'She ate a juicy peach.', exampleCn: '她吃了一个多汁的桃子。' },
  'DESTROY': { phonetic: '/dɪˈstrɔɪ/', meaning: 'v. 摧毁', example: 'The fire destroyed the house.', exampleCn: '大火摧毁了房子。' },
  'STORE': { phonetic: '/stɔːr/', meaning: 'n. 商店；v. 储存', example: 'I need to go to the store.', exampleCn: '我需要去商店。' },
  'STORY': { phonetic: '/ˈstɔːri/', meaning: 'n. 故事', example: 'Tell me a bedtime story.', exampleCn: '给我讲一个睡前故事。' },
  'HISTORY': { phonetic: '/ˈhɪstri/', meaning: 'n. 历史', example: 'History repeats itself.', exampleCn: '历史总是重演。' },
  'SHORT': { phonetic: '/ʃɔːt/', meaning: 'adj. 短的', example: 'He is short but strong.', exampleCn: '他个子矮但很强壮。' },
  'SHIRT': { phonetic: '/ʃɜːt/', meaning: 'n. 衬衫', example: 'He wore a white shirt.', exampleCn: '他穿了一件白衬衫。' },
  'FASHION': { phonetic: '/ˈfæʃn/', meaning: 'n. 时尚', example: 'She works in the fashion industry.', exampleCn: '她在时尚行业工作。' },
  'FANS': { phonetic: '/fænz/', meaning: 'n. 粉丝（复数）', example: 'The singer has millions of fans.', exampleCn: '这位歌手有数百万粉丝。' },
  'SHIN': { phonetic: '/ʃɪn/', meaning: 'n. 胫骨', example: 'He hurt his shin playing soccer.', exampleCn: '他踢足球时伤了胫骨。' },
  'PROBLEM': { phonetic: '/ˈprɒbləm/', meaning: 'n. 问题', example: 'Every problem has a solution.', exampleCn: '每个问题都有解决方案。' },
  'PROBE': { phonetic: '/prəʊb/', meaning: 'n. 探测器；v. 探查', example: 'The doctor used a probe.', exampleCn: '医生使用了探针。' },
  'ROLE': { phonetic: '/rəʊl/', meaning: 'n. 角色', example: 'She played the lead role.', exampleCn: '她扮演了主角。' },
  'TREASURE': { phonetic: '/ˈtreʒər/', meaning: 'n. 宝藏', example: 'The pirates buried their treasure.', exampleCn: '海盗埋藏了他们的宝藏。' },
  'STARE': { phonetic: '/steər/', meaning: 'v. 凝视', example: 'Do not stare at strangers.', exampleCn: '不要盯着陌生人看。' },
  'RATES': { phonetic: '/reɪts/', meaning: 'n. 比率（复数）', example: 'Interest rates are rising.', exampleCn: '利率正在上升。' },
  'TEACHERS': { phonetic: '/ˈtiːtʃərz/', meaning: 'n. 老师（复数）', example: 'The teachers are in the meeting room.', exampleCn: '老师们正在会议室里。' },
  'TEACHES': { phonetic: '/ˈtiːtʃɪz/', meaning: 'v. 教（第三人称单数）', example: 'She teaches English at school.', exampleCn: '她在学校教英语。' },
  'QUEST': { phonetic: '/kwest/', meaning: 'n. 探索，追求', example: 'He went on a quest for knowledge.', exampleCn: '他踏上了求知之旅。' },
  'POET': { phonetic: '/ˈpəʊɪt/', meaning: 'n. 诗人', example: 'The poet wrote beautiful verses.', exampleCn: '这位诗人写下了优美的诗句。' },
  'ENTER': { phonetic: '/ˈentər/', meaning: 'v. 进入', example: 'Please enter through the front door.', exampleCn: '请从前门进入。' },
  'CHAMP': { phonetic: '/tʃæmp/', meaning: 'n. 冠军（口语）', example: 'He is the champ of the tournament.', exampleCn: '他是锦标赛的冠军。' },
  'VENTURE': { phonetic: '/ˈventʃər/', meaning: 'n. 冒险；v. 敢于', example: 'The business venture was risky.', exampleCn: '这项商业投资有风险。' },
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

// ========== 网格自动布局算法 ==========
function generateGrid(words, letters) {
  // 按长度降序排列
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
  
  // 尝试垂直放置 word，使 word[crossIndex] 位于 (crossRow, crossCol)
  function tryPlaceVertical(word, crossIndex, crossRow, crossCol) {
    const startRow = crossRow - crossIndex;
    const startCol = crossCol;
    
    const newCells = [];
    for (let j = 0; j < word.length; j++) {
      const r = startRow + j;
      const c = startCol;
      const existing = getCell(r, c);
      if (existing) {
        if (existing.letter !== word[j]) return null;
        newCells.push(existing);
      } else {
        newCells.push({ row: r, col: c, letter: word[j] });
      }
    }
    return newCells;
  }
  
  // 尝试水平放置 word，使 word[crossIndex] 位于 (crossRow, crossCol)
  function tryPlaceHorizontal(word, crossIndex, crossRow, crossCol) {
    const startRow = crossRow;
    const startCol = crossCol - crossIndex;
    
    const newCells = [];
    for (let j = 0; j < word.length; j++) {
      const r = startRow;
      const c = startCol + j;
      const existing = getCell(r, c);
      if (existing) {
        if (existing.letter !== word[j]) return null;
        newCells.push(existing);
      } else {
        newCells.push({ row: r, col: c, letter: word[j] });
      }
    }
    return newCells;
  }
  
  // 放置主词（水平）
  const mainWord = sortedWords[0];
  const mainRow = 3;
  const mainCells = [];
  for (let i = 0; i < mainWord.length; i++) {
    const cell = setCell(mainRow, 1 + i, mainWord[i]);
    mainCells.push(cell);
  }
  wordPlacements.push({ word: mainWord, cells: mainCells });
  
  // 放置后续词
  for (let w = 1; w < sortedWords.length; w++) {
    const word = sortedWords[w];
    let placed = false;
    
    // 先尝试与每个已放置的词垂直交叉
    for (const prevPlacement of wordPlacements) {
      for (const prevCell of prevPlacement.cells) {
        for (let i = 0; i < word.length; i++) {
          if (word[i] === prevCell.letter) {
            const newCells = tryPlaceVertical(word, i, prevCell.row, prevCell.col);
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
    
    // 垂直失败则尝试水平交叉
    if (!placed) {
      for (const prevPlacement of wordPlacements) {
        for (const prevCell of prevPlacement.cells) {
          for (let i = 0; i < word.length; i++) {
            if (word[i] === prevCell.letter) {
              const newCells = tryPlaceHorizontal(word, i, prevCell.row, prevCell.col);
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
    }
    
    if (!placed) {
      console.warn(`Warning: Could not place word "${word}"`);
    }
  }
  
  // 构建输出
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

// ========== 生成完整 LEVELS 数组 ==========
const LEVELS = RAW_LEVELS.map((raw, index) => {
  const grid = generateGrid(raw.words, raw.letters);
  return {
    level: index + 1,
    letters: raw.letters,
    grid,
  };
});

// ========== 输出到 js/levels.js ==========
const output = `/* ============================================
   Level Data - 50 Levels (Auto-generated by grid-gen.js)
   ============================================ */

const LEVELS = ${JSON.stringify(LEVELS, null, 2)};
`;

fs.writeFileSync('./js/levels.js', output, 'utf-8');
console.log(`Generated ${LEVELS.length} levels into ./js/levels.js`);

// 验证
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
  console.log('All levels validated successfully!');
}
