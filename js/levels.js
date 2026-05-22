/* ============================================
   Level Data - 50 Levels (3 to 6 letters flat progression)
   ============================================ */

const LEVELS = [
  {
    "level": 1,
    "letters": [
      "C",
      "A",
      "T"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "C",
          "id": "c1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "T",
          "id": "t1"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "T",
          "id": "t2"
        }
      ],
      "words": [
        {
          "word": "CAT",
          "cellIds": [
            "c1",
            "a1",
            "t1"
          ],
          "phonetic": "/kæt/",
          "meaning": "n. 猫",
          "example": "The cat sleeps on the sofa.",
          "exampleCn": "猫在沙发上睡觉。"
        },
        {
          "word": "ACT",
          "cellIds": [
            "a2",
            "c1",
            "t2"
          ],
          "phonetic": "/ækt/",
          "meaning": "v. 行动；表演",
          "example": "We must act quickly.",
          "exampleCn": "我们必须迅速行动。"
        }
      ]
    }
  },
  {
    "level": 2,
    "letters": [
      "D",
      "O",
      "G"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "D",
          "id": "d1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "O",
          "id": "o1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "G",
          "id": "g1"
        }
      ],
      "words": [
        {
          "word": "DOG",
          "cellIds": [
            "d1",
            "o1",
            "g1"
          ],
          "phonetic": "/dɒɡ/",
          "meaning": "n. 狗",
          "example": "The dog runs in the park.",
          "exampleCn": "狗在公园里跑。"
        }
      ]
    }
  },
  {
    "level": 3,
    "letters": [
      "T",
      "E",
      "A"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "T",
          "id": "t1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "A",
          "id": "a2"
        }
      ],
      "words": [
        {
          "word": "TEA",
          "cellIds": [
            "t1",
            "e1",
            "a1"
          ],
          "phonetic": "/tiː/",
          "meaning": "n. 茶",
          "example": "Would you like a cup of tea?",
          "exampleCn": "你想喝杯茶吗？"
        },
        {
          "word": "EAT",
          "cellIds": [
            "e2",
            "a2",
            "t1"
          ],
          "phonetic": "/iːt/",
          "meaning": "v. 吃",
          "example": "Do not eat too fast.",
          "exampleCn": "不要吃得太快。"
        }
      ]
    }
  },
  {
    "level": 4,
    "letters": [
      "B",
      "U",
      "S"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "B",
          "id": "b1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "U",
          "id": "u1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "S",
          "id": "s1"
        }
      ],
      "words": [
        {
          "word": "BUS",
          "cellIds": [
            "b1",
            "u1",
            "s1"
          ],
          "phonetic": "/bʌs/",
          "meaning": "n. 公共汽车",
          "example": "I go to school by bus.",
          "exampleCn": "我坐公共汽车上学。"
        }
      ]
    }
  },
  {
    "level": 5,
    "letters": [
      "F",
      "L",
      "Y"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "F",
          "id": "f1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "Y",
          "id": "y1"
        }
      ],
      "words": [
        {
          "word": "FLY",
          "cellIds": [
            "f1",
            "l1",
            "y1"
          ],
          "phonetic": "/flaɪ/",
          "meaning": "v. 飞；n. 苍蝇",
          "example": "Birds can fly high.",
          "exampleCn": "鸟能飞得很高。"
        }
      ]
    }
  },
  {
    "level": 6,
    "letters": [
      "R",
      "U",
      "N"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "U",
          "id": "u1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "N",
          "id": "n1"
        }
      ],
      "words": [
        {
          "word": "RUN",
          "cellIds": [
            "r1",
            "u1",
            "n1"
          ],
          "phonetic": "/rʌn/",
          "meaning": "v. 跑",
          "example": "I run every morning.",
          "exampleCn": "我每天早上跑步。"
        }
      ]
    }
  },
  {
    "level": 7,
    "letters": [
      "S",
      "U",
      "N"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "U",
          "id": "u1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "N",
          "id": "n1"
        }
      ],
      "words": [
        {
          "word": "SUN",
          "cellIds": [
            "s1",
            "u1",
            "n1"
          ],
          "phonetic": "/sʌn/",
          "meaning": "n. 太阳",
          "example": "The sun is shining brightly.",
          "exampleCn": "阳光明媚。"
        }
      ]
    }
  },
  {
    "level": 8,
    "letters": [
      "B",
      "A",
      "D"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "B",
          "id": "b1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "D",
          "id": "d1"
        }
      ],
      "words": [
        {
          "word": "BAD",
          "cellIds": [
            "b1",
            "a1",
            "d1"
          ],
          "phonetic": "/bæd/",
          "meaning": "adj. 坏的，差的",
          "example": "It is a bad habit.",
          "exampleCn": "这是一个坏习惯。"
        }
      ]
    }
  },
  {
    "level": 9,
    "letters": [
      "H",
      "O",
      "T"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "H",
          "id": "h1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "O",
          "id": "o1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "T",
          "id": "t1"
        }
      ],
      "words": [
        {
          "word": "HOT",
          "cellIds": [
            "h1",
            "o1",
            "t1"
          ],
          "phonetic": "/hɒt/",
          "meaning": "adj. 热的",
          "example": "The coffee is very hot.",
          "exampleCn": "咖啡非常热。"
        }
      ]
    }
  },
  {
    "level": 10,
    "letters": [
      "P",
      "E",
      "N"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "P",
          "id": "p1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "N",
          "id": "n1"
        }
      ],
      "words": [
        {
          "word": "PEN",
          "cellIds": [
            "p1",
            "e1",
            "n1"
          ],
          "phonetic": "/pen/",
          "meaning": "n. 钢笔",
          "example": "Write your name with a pen.",
          "exampleCn": "用钢笔写下你的名字。"
        }
      ]
    }
  },
  {
    "level": 11,
    "letters": [
      "S",
      "T",
      "A",
      "R"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "T",
          "id": "t1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 8,
          "col": 11,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 9,
          "col": 11,
          "letter": "R",
          "id": "r2"
        }
      ],
      "words": [
        {
          "word": "STAR",
          "cellIds": [
            "s1",
            "t1",
            "a1",
            "r1"
          ],
          "phonetic": "/stɑːr/",
          "meaning": "n. 星星；明星",
          "example": "Look at the bright star in the sky.",
          "exampleCn": "看天上那颗明亮的星星。"
        },
        {
          "word": "ART",
          "cellIds": [
            "a2",
            "r2",
            "t1"
          ],
          "phonetic": "/ɑːt/",
          "meaning": "n. 艺术",
          "example": "She studies art at college.",
          "exampleCn": "她在大学学习艺术。"
        }
      ]
    }
  },
  {
    "level": 12,
    "letters": [
      "R",
      "O",
      "S",
      "E"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "O",
          "id": "o1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "O",
          "id": "o2"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "E",
          "id": "e2"
        }
      ],
      "words": [
        {
          "word": "ROSE",
          "cellIds": [
            "r1",
            "o1",
            "s1",
            "e1"
          ],
          "phonetic": "/rəʊz/",
          "meaning": "n. 玫瑰；v. 升起(过去式)",
          "example": "He gave her a red rose.",
          "exampleCn": "他送给她一朵红玫瑰。"
        },
        {
          "word": "ORE",
          "cellIds": [
            "o2",
            "r1",
            "e2"
          ],
          "phonetic": "/ɔːr/",
          "meaning": "n. 矿石",
          "example": "Iron ore is found here.",
          "exampleCn": "这里发现了铁矿石。"
        }
      ]
    }
  },
  {
    "level": 13,
    "letters": [
      "L",
      "I",
      "S",
      "T"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "T",
          "id": "t1"
        },
        {
          "row": 9,
          "col": 11,
          "letter": "S",
          "id": "s2"
        },
        {
          "row": 11,
          "col": 11,
          "letter": "T",
          "id": "t2"
        }
      ],
      "words": [
        {
          "word": "LIST",
          "cellIds": [
            "l1",
            "i1",
            "s1",
            "t1"
          ],
          "phonetic": "/lɪst/",
          "meaning": "n. 列表；v. 列出",
          "example": "Make a list of things to buy.",
          "exampleCn": "列一张购物清单。"
        },
        {
          "word": "SIT",
          "cellIds": [
            "s2",
            "i1",
            "t2"
          ],
          "phonetic": "/sɪt/",
          "meaning": "v. 坐",
          "example": "Please sit down.",
          "exampleCn": "请坐下。"
        }
      ]
    }
  },
  {
    "level": 14,
    "letters": [
      "F",
      "I",
      "R",
      "E"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "F",
          "id": "f1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "R",
          "id": "r2"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "E",
          "id": "e2"
        }
      ],
      "words": [
        {
          "word": "FIRE",
          "cellIds": [
            "f1",
            "i1",
            "r1",
            "e1"
          ],
          "phonetic": "/ˈfaɪər/",
          "meaning": "n. 火；v. 解雇",
          "example": "The fire spread quickly.",
          "exampleCn": "火势蔓延得很快。"
        },
        {
          "word": "REF",
          "cellIds": [
            "r2",
            "e2",
            "f1"
          ],
          "phonetic": "/ref/",
          "meaning": "n. 裁判（口语）",
          "example": "The ref blew the whistle.",
          "exampleCn": "裁判吹了哨子。"
        }
      ]
    }
  },
  {
    "level": 15,
    "letters": [
      "R",
      "O",
      "A",
      "D"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "O",
          "id": "o1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "D",
          "id": "d1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "O",
          "id": "o2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "D",
          "id": "d2"
        }
      ],
      "words": [
        {
          "word": "ROAD",
          "cellIds": [
            "r1",
            "o1",
            "a1",
            "d1"
          ],
          "phonetic": "/rəʊd/",
          "meaning": "n. 道路",
          "example": "The road is under repair.",
          "exampleCn": "这条路正在维修。"
        },
        {
          "word": "ROD",
          "cellIds": [
            "r1",
            "o2",
            "d2"
          ],
          "phonetic": "/rɒd/",
          "meaning": "n. 杆，棒",
          "example": "He bought a fishing rod.",
          "exampleCn": "他买了一根钓鱼竿。"
        }
      ]
    }
  },
  {
    "level": 16,
    "letters": [
      "T",
      "I",
      "M",
      "E"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "T",
          "id": "t1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "M",
          "id": "m1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "M",
          "id": "m2"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "E",
          "id": "e2"
        }
      ],
      "words": [
        {
          "word": "TIME",
          "cellIds": [
            "t1",
            "i1",
            "m1",
            "e1"
          ],
          "phonetic": "/taɪm/",
          "meaning": "n. 时间",
          "example": "Time flies like an arrow.",
          "exampleCn": "光阴似箭。"
        },
        {
          "word": "MET",
          "cellIds": [
            "m2",
            "e2",
            "t1"
          ],
          "phonetic": "/met/",
          "meaning": "v. 遇见(过去式)",
          "example": "We met at the station.",
          "exampleCn": "我们在车站碰面。"
        }
      ]
    }
  },
  {
    "level": 17,
    "letters": [
      "P",
      "A",
      "L",
      "E"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "P",
          "id": "p1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "L",
          "id": "l2"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "A",
          "id": "a2"
        }
      ],
      "words": [
        {
          "word": "PALE",
          "cellIds": [
            "p1",
            "a1",
            "l1",
            "e1"
          ],
          "phonetic": "/peɪl/",
          "meaning": "adj. 苍白的",
          "example": "She looked pale and tired.",
          "exampleCn": "她看起来苍白而疲惫。"
        },
        {
          "word": "LAP",
          "cellIds": [
            "l2",
            "a2",
            "p1"
          ],
          "phonetic": "/læp/",
          "meaning": "n. 大腿；一圈",
          "example": "The cat sat on her lap.",
          "exampleCn": "猫坐在她的大腿上。"
        }
      ]
    }
  },
  {
    "level": 18,
    "letters": [
      "L",
      "A",
      "N",
      "D"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "N",
          "id": "n1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "D",
          "id": "d1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "D",
          "id": "d2"
        }
      ],
      "words": [
        {
          "word": "LAND",
          "cellIds": [
            "l1",
            "a1",
            "n1",
            "d1"
          ],
          "phonetic": "/lænd/",
          "meaning": "n. 土地；v. 着陆",
          "example": "The plane will land soon.",
          "exampleCn": "飞机即将着陆。"
        },
        {
          "word": "LAD",
          "cellIds": [
            "l1",
            "a2",
            "d2"
          ],
          "phonetic": "/læd/",
          "meaning": "n. 少年，小伙子",
          "example": "He is a fine young lad.",
          "exampleCn": "他是一个不错的小伙子。"
        }
      ]
    }
  },
  {
    "level": 19,
    "letters": [
      "D",
      "U",
      "S",
      "T"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "D",
          "id": "d1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "U",
          "id": "u1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "T",
          "id": "t1"
        },
        {
          "row": 7,
          "col": 10,
          "letter": "S",
          "id": "s2"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "T",
          "id": "t2"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "U",
          "id": "u2"
        }
      ],
      "words": [
        {
          "word": "DUST",
          "cellIds": [
            "d1",
            "u1",
            "s1",
            "t1"
          ],
          "phonetic": "/dʌst/",
          "meaning": "n. 灰尘",
          "example": "The shelf is covered with dust.",
          "exampleCn": "架子上布满灰尘。"
        },
        {
          "word": "STUD",
          "cellIds": [
            "s2",
            "t2",
            "u2",
            "d1"
          ],
          "phonetic": "/stʌd/",
          "meaning": "n. 种马；耳钉",
          "example": "He wore diamond studs.",
          "exampleCn": "他戴着钻石耳钉。"
        }
      ]
    }
  },
  {
    "level": 20,
    "letters": [
      "B",
      "O",
      "A",
      "T"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "B",
          "id": "b1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "O",
          "id": "o1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "T",
          "id": "t1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "T",
          "id": "t2"
        }
      ],
      "words": [
        {
          "word": "BOAT",
          "cellIds": [
            "b1",
            "o1",
            "a1",
            "t1"
          ],
          "phonetic": "/bəʊt/",
          "meaning": "n. 船",
          "example": "They took a boat on the lake.",
          "exampleCn": "他们在湖上划船。"
        },
        {
          "word": "BAT",
          "cellIds": [
            "b1",
            "a2",
            "t2"
          ],
          "phonetic": "/bæt/",
          "meaning": "n. 蝙蝠；球棒",
          "example": "A bat flew out of the cave.",
          "exampleCn": "一只蝙蝠飞出了洞穴。"
        }
      ]
    }
  },
  {
    "level": 21,
    "letters": [
      "K",
      "I",
      "N",
      "G"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "K",
          "id": "k1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "N",
          "id": "n1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "G",
          "id": "g1"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "I",
          "id": "i2"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "N",
          "id": "n2"
        }
      ],
      "words": [
        {
          "word": "KING",
          "cellIds": [
            "k1",
            "i1",
            "n1",
            "g1"
          ],
          "phonetic": "/kɪŋ/",
          "meaning": "n. 国王",
          "example": "Long live the king!",
          "exampleCn": "国王万岁！"
        },
        {
          "word": "INK",
          "cellIds": [
            "i2",
            "n2",
            "k1"
          ],
          "phonetic": "/ɪŋk/",
          "meaning": "n. 墨水",
          "example": "My pen is out of ink.",
          "exampleCn": "我的钢笔没墨水了。"
        }
      ]
    }
  },
  {
    "level": 22,
    "letters": [
      "W",
      "I",
      "N",
      "D"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "W",
          "id": "w1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "N",
          "id": "n1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "D",
          "id": "d1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "I",
          "id": "i2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "N",
          "id": "n2"
        }
      ],
      "words": [
        {
          "word": "WIND",
          "cellIds": [
            "w1",
            "i1",
            "n1",
            "d1"
          ],
          "phonetic": "/wɪnd/",
          "meaning": "n. 风",
          "example": "The cold wind is blowing.",
          "exampleCn": "冷风正在吹。"
        },
        {
          "word": "WIN",
          "cellIds": [
            "w1",
            "i2",
            "n2"
          ],
          "phonetic": "/wɪn/",
          "meaning": "v. 赢，获胜",
          "example": "We hope to win the game.",
          "exampleCn": "我们希望赢得比赛。"
        }
      ]
    }
  },
  {
    "level": 23,
    "letters": [
      "C",
      "O",
      "A",
      "L"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "C",
          "id": "c1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "O",
          "id": "o1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "O",
          "id": "o2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "L",
          "id": "l2"
        },
        {
          "row": 13,
          "col": 10,
          "letter": "A",
          "id": "a2"
        }
      ],
      "words": [
        {
          "word": "COAL",
          "cellIds": [
            "c1",
            "o1",
            "a1",
            "l1"
          ],
          "phonetic": "/kəʊl/",
          "meaning": "n. 煤炭",
          "example": "Coal is used for fuel.",
          "exampleCn": "煤炭被用作燃料。"
        },
        {
          "word": "COLA",
          "cellIds": [
            "c1",
            "o2",
            "l2",
            "a2"
          ],
          "phonetic": "/ˈkəʊlə/",
          "meaning": "n. 可乐",
          "example": "A bottle of cola, please.",
          "exampleCn": "请来瓶可乐。"
        }
      ]
    }
  },
  {
    "level": 24,
    "letters": [
      "H",
      "A",
      "N",
      "D"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "H",
          "id": "h1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "N",
          "id": "n1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "D",
          "id": "d1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "D",
          "id": "d2"
        }
      ],
      "words": [
        {
          "word": "HAND",
          "cellIds": [
            "h1",
            "a1",
            "n1",
            "d1"
          ],
          "phonetic": "/hænd/",
          "meaning": "n. 手",
          "example": "Give me a hand, please.",
          "exampleCn": "请帮我一下。"
        },
        {
          "word": "HAD",
          "cellIds": [
            "h1",
            "a2",
            "d2"
          ],
          "phonetic": "/hæd/",
          "meaning": "v. 有(过去式)",
          "example": "I had a great time today.",
          "exampleCn": "我今天过得很开心。"
        }
      ]
    }
  },
  {
    "level": 25,
    "letters": [
      "G",
      "O",
      "L",
      "D"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "G",
          "id": "g1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "O",
          "id": "o1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "D",
          "id": "d1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "O",
          "id": "o2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "D",
          "id": "d2"
        }
      ],
      "words": [
        {
          "word": "GOLD",
          "cellIds": [
            "g1",
            "o1",
            "l1",
            "d1"
          ],
          "phonetic": "/ɡəʊld/",
          "meaning": "n. 黄金；adj. 金色的",
          "example": "She wore a gold necklace.",
          "exampleCn": "她戴着一条银项链。"
        },
        {
          "word": "GOD",
          "cellIds": [
            "g1",
            "o2",
            "d2"
          ],
          "phonetic": "/ɡɒd/",
          "meaning": "n. 神，上帝",
          "example": "Thank God it is Friday.",
          "exampleCn": "谢天谢地，周五了。"
        }
      ]
    }
  },
  {
    "level": 26,
    "letters": [
      "B",
      "R",
      "E",
      "A",
      "D"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "B",
          "id": "b1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "D",
          "id": "d1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 13,
          "col": 10,
          "letter": "R",
          "id": "r2"
        },
        {
          "row": 9,
          "col": 12,
          "letter": "R",
          "id": "r3"
        },
        {
          "row": 11,
          "col": 12,
          "letter": "D",
          "id": "d2"
        }
      ],
      "words": [
        {
          "word": "BREAD",
          "cellIds": [
            "b1",
            "r1",
            "e1",
            "a1",
            "d1"
          ],
          "phonetic": "/bred/",
          "meaning": "n. 面包",
          "example": "Fresh bread smells wonderful.",
          "exampleCn": "新鲜面包闻起来很香。"
        },
        {
          "word": "BEAR",
          "cellIds": [
            "b1",
            "e2",
            "a2",
            "r2"
          ],
          "phonetic": "/beər/",
          "meaning": "n. 熊；v. 承受",
          "example": "A black bear climbed the tree.",
          "exampleCn": "一只黑熊爬上了树。"
        },
        {
          "word": "RED",
          "cellIds": [
            "r3",
            "e1",
            "d2"
          ],
          "phonetic": "/red/",
          "meaning": "adj. 红色的",
          "example": "She chose a red dress.",
          "exampleCn": "她选了一件红裙子。"
        }
      ]
    }
  },
  {
    "level": 27,
    "letters": [
      "C",
      "L",
      "O",
      "U",
      "D"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "C",
          "id": "c1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "O",
          "id": "o1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "U",
          "id": "u1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "D",
          "id": "d1"
        },
        {
          "row": 11,
          "col": 11,
          "letter": "O",
          "id": "o2"
        },
        {
          "row": 12,
          "col": 11,
          "letter": "U",
          "id": "u2"
        },
        {
          "row": 13,
          "col": 11,
          "letter": "D",
          "id": "d2"
        },
        {
          "row": 7,
          "col": 14,
          "letter": "C",
          "id": "c2"
        },
        {
          "row": 8,
          "col": 14,
          "letter": "O",
          "id": "o3"
        },
        {
          "row": 9,
          "col": 14,
          "letter": "L",
          "id": "l2"
        }
      ],
      "words": [
        {
          "word": "CLOUD",
          "cellIds": [
            "c1",
            "l1",
            "o1",
            "u1",
            "d1"
          ],
          "phonetic": "/klaʊd/",
          "meaning": "n. 云",
          "example": "Dark clouds gathered overhead.",
          "exampleCn": "乌云在头顶聚集。"
        },
        {
          "word": "LOUD",
          "cellIds": [
            "l1",
            "o2",
            "u2",
            "d2"
          ],
          "phonetic": "/laʊd/",
          "meaning": "adj. 大声的",
          "example": "The music is too loud.",
          "exampleCn": "音乐太吵了。"
        },
        {
          "word": "COLD",
          "cellIds": [
            "c2",
            "o3",
            "l2",
            "d1"
          ],
          "phonetic": "/kəʊld/",
          "meaning": "adj. 冷的；n. 感冒",
          "example": "It is cold outside today.",
          "exampleCn": "今天外面很冷。"
        }
      ]
    }
  },
  {
    "level": 28,
    "letters": [
      "G",
      "R",
      "E",
      "E",
      "N"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "G",
          "id": "g1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "N",
          "id": "n1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "E",
          "id": "e3"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "N",
          "id": "n2"
        },
        {
          "row": 13,
          "col": 10,
          "letter": "E",
          "id": "e4"
        }
      ],
      "words": [
        {
          "word": "GREEN",
          "cellIds": [
            "g1",
            "r1",
            "e1",
            "e2",
            "n1"
          ],
          "phonetic": "/ɡriːn/",
          "meaning": "adj. 绿色的",
          "example": "The grass is green.",
          "exampleCn": "草是绿色的。"
        },
        {
          "word": "GENE",
          "cellIds": [
            "g1",
            "e3",
            "n2",
            "e4"
          ],
          "phonetic": "/dʒiːn/",
          "meaning": "n. 基因",
          "example": "Genes determine eye color.",
          "exampleCn": "基因决定眼睛的颜色。"
        }
      ]
    }
  },
  {
    "level": 29,
    "letters": [
      "F",
      "I",
      "E",
      "L",
      "D"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "F",
          "id": "f1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "D",
          "id": "d1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "I",
          "id": "i2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "L",
          "id": "l2"
        },
        {
          "row": 13,
          "col": 10,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 9,
          "col": 12,
          "letter": "L",
          "id": "l3"
        },
        {
          "row": 11,
          "col": 12,
          "letter": "D",
          "id": "d2"
        }
      ],
      "words": [
        {
          "word": "FIELD",
          "cellIds": [
            "f1",
            "i1",
            "e1",
            "l1",
            "d1"
          ],
          "phonetic": "/fiːld/",
          "meaning": "n. 领域；田野",
          "example": "She works in the medical field.",
          "exampleCn": "她在医学领域工作。"
        },
        {
          "word": "FILE",
          "cellIds": [
            "f1",
            "i2",
            "l2",
            "e2"
          ],
          "phonetic": "/faɪl/",
          "meaning": "n. 文件",
          "example": "Save the file before closing.",
          "exampleCn": "关闭前保存文件。"
        },
        {
          "word": "LED",
          "cellIds": [
            "l3",
            "e1",
            "d2"
          ],
          "phonetic": "/led/",
          "meaning": "v. 领导(过去式)",
          "example": "He led the team to victory.",
          "exampleCn": "他带领队伍赢得了胜利。"
        }
      ]
    }
  },
  {
    "level": 30,
    "letters": [
      "O",
      "C",
      "E",
      "A",
      "N"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "O",
          "id": "o1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "C",
          "id": "c1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "N",
          "id": "n1"
        },
        {
          "row": 11,
          "col": 11,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 12,
          "col": 11,
          "letter": "N",
          "id": "n2"
        },
        {
          "row": 13,
          "col": 11,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 8,
          "col": 12,
          "letter": "O",
          "id": "o2"
        },
        {
          "row": 9,
          "col": 12,
          "letter": "N",
          "id": "n3"
        }
      ],
      "words": [
        {
          "word": "OCEAN",
          "cellIds": [
            "o1",
            "c1",
            "e1",
            "a1",
            "n1"
          ],
          "phonetic": "/ˈəʊʃn/",
          "meaning": "n. 海洋",
          "example": "The ocean is vast and blue.",
          "exampleCn": "海洋广阔而湛蓝。"
        },
        {
          "word": "CANE",
          "cellIds": [
            "c1",
            "a2",
            "n2",
            "e2"
          ],
          "phonetic": "/keɪn/",
          "meaning": "n. 手杖；甘蔗",
          "example": "The old man walks with a cane.",
          "exampleCn": "老人拄着手杖走路。"
        },
        {
          "word": "ONE",
          "cellIds": [
            "o2",
            "n3",
            "e1"
          ],
          "phonetic": "/wʌn/",
          "meaning": "num. 一",
          "example": "One step at a time.",
          "exampleCn": "一步一步来。"
        }
      ]
    }
  },
  {
    "level": 31,
    "letters": [
      "S",
      "M",
      "A",
      "R",
      "T"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "M",
          "id": "m1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "T",
          "id": "t1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "T",
          "id": "t2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 13,
          "col": 10,
          "letter": "R",
          "id": "r2"
        },
        {
          "row": 14,
          "col": 10,
          "letter": "S",
          "id": "s2"
        },
        {
          "row": 9,
          "col": 12,
          "letter": "M",
          "id": "m2"
        },
        {
          "row": 11,
          "col": 12,
          "letter": "T",
          "id": "t3"
        }
      ],
      "words": [
        {
          "word": "SMART",
          "cellIds": [
            "s1",
            "m1",
            "a1",
            "r1",
            "t1"
          ],
          "phonetic": "/smɑːt/",
          "meaning": "adj. 聪明的",
          "example": "He is a very smart boy.",
          "exampleCn": "他是一个非常聪明的男孩。"
        },
        {
          "word": "STARS",
          "cellIds": [
            "s1",
            "t2",
            "a2",
            "r2",
            "s2"
          ],
          "phonetic": "/stɑːrz/",
          "meaning": "n. 星星（复数）",
          "example": "The stars are bright tonight.",
          "exampleCn": "今晚夜星璀璨。"
        },
        {
          "word": "MAT",
          "cellIds": [
            "m2",
            "a1",
            "t3"
          ],
          "phonetic": "/mæt/",
          "meaning": "n. 垫子",
          "example": "Wipe your feet on the mat.",
          "exampleCn": "在垫子上擦擦脚。"
        }
      ]
    }
  },
  {
    "level": 32,
    "letters": [
      "T",
      "R",
      "A",
      "I",
      "N"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "T",
          "id": "t1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "N",
          "id": "n1"
        },
        {
          "row": 11,
          "col": 11,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 12,
          "col": 11,
          "letter": "I",
          "id": "i2"
        },
        {
          "row": 13,
          "col": 11,
          "letter": "N",
          "id": "n2"
        },
        {
          "row": 8,
          "col": 14,
          "letter": "R",
          "id": "r2"
        },
        {
          "row": 9,
          "col": 14,
          "letter": "A",
          "id": "a3"
        }
      ],
      "words": [
        {
          "word": "TRAIN",
          "cellIds": [
            "t1",
            "r1",
            "a1",
            "i1",
            "n1"
          ],
          "phonetic": "/treɪn/",
          "meaning": "n. 火车；v. 训练",
          "example": "The train is on time.",
          "exampleCn": "火车很准时。"
        },
        {
          "word": "RAIN",
          "cellIds": [
            "r1",
            "a2",
            "i2",
            "n2"
          ],
          "phonetic": "/reɪn/",
          "meaning": "n. 雨；v. 下雨",
          "example": "I love the smell of rain.",
          "exampleCn": "我喜欢下雨的气味。"
        },
        {
          "word": "RAN",
          "cellIds": [
            "r2",
            "a3",
            "n1"
          ],
          "phonetic": "/ræn/",
          "meaning": "v. 跑(过去式)",
          "example": "He ran down the street.",
          "exampleCn": "他沿着街跑了下去。"
        }
      ]
    }
  },
  {
    "level": 33,
    "letters": [
      "S",
      "T",
      "O",
      "N",
      "E"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "T",
          "id": "t1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "O",
          "id": "o1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "N",
          "id": "n1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 11,
          "col": 11,
          "letter": "O",
          "id": "o2"
        },
        {
          "row": 12,
          "col": 11,
          "letter": "N",
          "id": "n2"
        },
        {
          "row": 13,
          "col": 11,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 8,
          "col": 13,
          "letter": "S",
          "id": "s2"
        },
        {
          "row": 9,
          "col": 13,
          "letter": "O",
          "id": "o3"
        }
      ],
      "words": [
        {
          "word": "STONE",
          "cellIds": [
            "s1",
            "t1",
            "o1",
            "n1",
            "e1"
          ],
          "phonetic": "/stəʊn/",
          "meaning": "n. 石头",
          "example": "He threw a stone into the water.",
          "exampleCn": "他往水里扔了一块石头。"
        },
        {
          "word": "TONE",
          "cellIds": [
            "t1",
            "o2",
            "n2",
            "e2"
          ],
          "phonetic": "/təʊn/",
          "meaning": "n. 语气，音调",
          "example": "Please speak in a polite tone.",
          "exampleCn": "请用礼貌的语气说话。"
        },
        {
          "word": "SON",
          "cellIds": [
            "s2",
            "o3",
            "n1"
          ],
          "phonetic": "/sʌn/",
          "meaning": "n. 儿子",
          "example": "My son is five years old.",
          "exampleCn": "我的儿子五岁了。"
        }
      ]
    }
  },
  {
    "level": 34,
    "letters": [
      "H",
      "O",
      "U",
      "S",
      "E"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "H",
          "id": "h1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "O",
          "id": "o1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "U",
          "id": "u1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 11,
          "col": 12,
          "letter": "S",
          "id": "s2"
        },
        {
          "row": 12,
          "col": 12,
          "letter": "E",
          "id": "e2"
        }
      ],
      "words": [
        {
          "word": "HOUSE",
          "cellIds": [
            "h1",
            "o1",
            "u1",
            "s1",
            "e1"
          ],
          "phonetic": "/haʊs/",
          "meaning": "n. 房子",
          "example": "They live in a big house.",
          "exampleCn": "他们住在一所大房子里。"
        },
        {
          "word": "USE",
          "cellIds": [
            "u1",
            "s2",
            "e2"
          ],
          "phonetic": "/juːz/",
          "meaning": "v. 使用",
          "example": "Can I use your phone?",
          "exampleCn": "我可以用下你的电话吗？"
        }
      ]
    }
  },
  {
    "level": 35,
    "letters": [
      "S",
      "M",
      "I",
      "L",
      "E"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "M",
          "id": "m1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "L",
          "id": "l2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "I",
          "id": "i2"
        },
        {
          "row": 13,
          "col": 10,
          "letter": "M",
          "id": "m2"
        },
        {
          "row": 9,
          "col": 12,
          "letter": "M",
          "id": "m3"
        },
        {
          "row": 11,
          "col": 12,
          "letter": "L",
          "id": "l3"
        }
      ],
      "words": [
        {
          "word": "SMILE",
          "cellIds": [
            "s1",
            "m1",
            "i1",
            "l1",
            "e1"
          ],
          "phonetic": "/smaɪl/",
          "meaning": "v./n. 微笑",
          "example": "She always has a smile on her face.",
          "exampleCn": "她脸上总是挂着微笑。"
        },
        {
          "word": "SLIM",
          "cellIds": [
            "s1",
            "l2",
            "i2",
            "m2"
          ],
          "phonetic": "/slɪm/",
          "meaning": "adj. 苗条的",
          "example": "She maintains a slim figure.",
          "exampleCn": "她保持着苗条的身材。"
        },
        {
          "word": "MIL",
          "cellIds": [
            "m3",
            "i1",
            "l3"
          ],
          "phonetic": "/mɪl/",
          "meaning": "n. 毫升(英文缩写)",
          "example": "Add one mil of liquid.",
          "exampleCn": "加入一毫升液体。"
        }
      ]
    }
  },
  {
    "level": 36,
    "letters": [
      "W",
      "A",
      "T",
      "E",
      "R"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "W",
          "id": "w1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "T",
          "id": "t1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 8,
          "col": 11,
          "letter": "T",
          "id": "t2"
        },
        {
          "row": 9,
          "col": 11,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 11,
          "col": 11,
          "letter": "R",
          "id": "r2"
        },
        {
          "row": 9,
          "col": 13,
          "letter": "W",
          "id": "w2"
        },
        {
          "row": 11,
          "col": 13,
          "letter": "T",
          "id": "t3"
        }
      ],
      "words": [
        {
          "word": "WATER",
          "cellIds": [
            "w1",
            "a1",
            "t1",
            "e1",
            "r1"
          ],
          "phonetic": "/ˈwɔːtər/",
          "meaning": "n. 水",
          "example": "Drink plenty of water.",
          "exampleCn": "多喝水。"
        },
        {
          "word": "TEAR",
          "cellIds": [
            "t2",
            "e2",
            "a1",
            "r2"
          ],
          "phonetic": "/teər/",
          "meaning": "v. 撕裂；n. 眼泪",
          "example": "A tear rolled down her cheek.",
          "exampleCn": "眼泪顺着她的脸颊流下。"
        },
        {
          "word": "WET",
          "cellIds": [
            "w2",
            "e1",
            "t3"
          ],
          "phonetic": "/wet/",
          "meaning": "adj. 湿的",
          "example": "The grass is wet with dew.",
          "exampleCn": "草被露水打湿了。"
        }
      ]
    }
  },
  {
    "level": 37,
    "letters": [
      "M",
      "U",
      "S",
      "I",
      "C"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "M",
          "id": "m1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "U",
          "id": "u1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "C",
          "id": "c1"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "S",
          "id": "s2"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "U",
          "id": "u2"
        }
      ],
      "words": [
        {
          "word": "MUSIC",
          "cellIds": [
            "m1",
            "u1",
            "s1",
            "i1",
            "c1"
          ],
          "phonetic": "/ˈmjuːzɪk/",
          "meaning": "n. 音乐",
          "example": "I enjoy listening to music.",
          "exampleCn": "我喜欢听音乐。"
        },
        {
          "word": "SUM",
          "cellIds": [
            "s2",
            "u2",
            "m1"
          ],
          "phonetic": "/sʌm/",
          "meaning": "n. 总数；金额",
          "example": "What is the sum of these numbers?",
          "exampleCn": "这些数字的总和是多少？"
        }
      ]
    }
  },
  {
    "level": 38,
    "letters": [
      "P",
      "L",
      "A",
      "N",
      "T"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "P",
          "id": "p1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "N",
          "id": "n1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "T",
          "id": "t1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "L",
          "id": "l2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 13,
          "col": 10,
          "letter": "N",
          "id": "n2"
        },
        {
          "row": 9,
          "col": 12,
          "letter": "T",
          "id": "t2"
        },
        {
          "row": 11,
          "col": 12,
          "letter": "P",
          "id": "p2"
        }
      ],
      "words": [
        {
          "word": "PLANT",
          "cellIds": [
            "p1",
            "l1",
            "a1",
            "n1",
            "t1"
          ],
          "phonetic": "/plɑːnt/",
          "meaning": "n. 植物；v. 种植",
          "example": "Water the plants daily.",
          "exampleCn": "每天给植物浇水。"
        },
        {
          "word": "PLAN",
          "cellIds": [
            "p1",
            "l2",
            "a2",
            "n2"
          ],
          "phonetic": "/plæn/",
          "meaning": "n. 计划",
          "example": "We need a clear plan.",
          "exampleCn": "我们需要一个清晰的计划。"
        },
        {
          "word": "TAP",
          "cellIds": [
            "t2",
            "a1",
            "p2"
          ],
          "phonetic": "/tæp/",
          "meaning": "v. 轻拍；n. 水龙头",
          "example": "Tap the screen to play.",
          "exampleCn": "点击屏幕开始游戏。"
        }
      ]
    }
  },
  {
    "level": 39,
    "letters": [
      "A",
      "P",
      "P",
      "L",
      "E"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "P",
          "id": "p1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "P",
          "id": "p2"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 7,
          "col": 10,
          "letter": "P",
          "id": "p3"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "L",
          "id": "l2"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 9,
          "col": 12,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 11,
          "col": 12,
          "letter": "E",
          "id": "e3"
        }
      ],
      "words": [
        {
          "word": "APPLE",
          "cellIds": [
            "a1",
            "p1",
            "p2",
            "l1",
            "e1"
          ],
          "phonetic": "/ˈæpl/",
          "meaning": "n. 苹果",
          "example": "An apple a day keeps the doctor away.",
          "exampleCn": "一日一苹果，医生远离我。"
        },
        {
          "word": "PLEA",
          "cellIds": [
            "p3",
            "l2",
            "e2",
            "a1"
          ],
          "phonetic": "/pliː/",
          "meaning": "n. 恳求，抗辩",
          "example": "He entered a plea of not guilty.",
          "exampleCn": "他作出了无罪抗辩。"
        },
        {
          "word": "APE",
          "cellIds": [
            "a2",
            "p2",
            "e3"
          ],
          "phonetic": "/eɪp/",
          "meaning": "n. 猿类",
          "example": "The ape climbed the tree effortlessly.",
          "exampleCn": "那只猿猴轻松地爬上了树。"
        }
      ]
    }
  },
  {
    "level": 40,
    "letters": [
      "S",
      "H",
      "E",
      "E",
      "P"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "H",
          "id": "h1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "P",
          "id": "p1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "H",
          "id": "h2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "E",
          "id": "e3"
        },
        {
          "row": 9,
          "col": 12,
          "letter": "S",
          "id": "s2"
        },
        {
          "row": 11,
          "col": 12,
          "letter": "E",
          "id": "e4"
        }
      ],
      "words": [
        {
          "word": "SHEEP",
          "cellIds": [
            "s1",
            "h1",
            "e1",
            "e2",
            "p1"
          ],
          "phonetic": "/ʃiːp/",
          "meaning": "n. 绵羊",
          "example": "A flock of sheep on the hill.",
          "exampleCn": "山坡上的一群绵羊。"
        },
        {
          "word": "SHE",
          "cellIds": [
            "s1",
            "h2",
            "e3"
          ],
          "phonetic": "/ʃiː/",
          "meaning": "pron. 她",
          "example": "She is a smart girl.",
          "exampleCn": "她是一个聪明的女孩。"
        },
        {
          "word": "SEE",
          "cellIds": [
            "s2",
            "e1",
            "e4"
          ],
          "phonetic": "/siː/",
          "meaning": "v. 看见",
          "example": "I can see the mountains.",
          "exampleCn": "我能看见那些山。"
        }
      ]
    }
  },
  {
    "level": 41,
    "letters": [
      "S",
      "I",
      "L",
      "V",
      "E",
      "R"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "V",
          "id": "v1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 10,
          "col": 15,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 9,
          "col": 11,
          "letter": "L",
          "id": "l2"
        },
        {
          "row": 11,
          "col": 11,
          "letter": "V",
          "id": "v2"
        },
        {
          "row": 12,
          "col": 11,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 13,
          "col": 11,
          "letter": "R",
          "id": "r2"
        },
        {
          "row": 7,
          "col": 14,
          "letter": "R",
          "id": "r3"
        },
        {
          "row": 8,
          "col": 14,
          "letter": "I",
          "id": "i2"
        },
        {
          "row": 9,
          "col": 14,
          "letter": "S",
          "id": "s2"
        }
      ],
      "words": [
        {
          "word": "SILVER",
          "cellIds": [
            "s1",
            "i1",
            "l1",
            "v1",
            "e1",
            "r1"
          ],
          "phonetic": "/ˈsɪlvər/",
          "meaning": "n. 银色；银器",
          "example": "She wore a silver necklace.",
          "exampleCn": "她戴着一条银项链。"
        },
        {
          "word": "LIVER",
          "cellIds": [
            "l2",
            "i1",
            "v2",
            "e2",
            "r2"
          ],
          "phonetic": "/ˈlɪvər/",
          "meaning": "n. 肝脏",
          "example": "The liver is an essential organ.",
          "exampleCn": "肝脏是必不可少的器官。"
        },
        {
          "word": "RISE",
          "cellIds": [
            "r3",
            "i2",
            "s2",
            "e1"
          ],
          "phonetic": "/raɪz/",
          "meaning": "v. 升起，上升",
          "example": "The sun will rise soon.",
          "exampleCn": "太阳即将升起。"
        }
      ]
    }
  },
  {
    "level": 42,
    "letters": [
      "Y",
      "E",
      "L",
      "L",
      "O",
      "W"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "Y",
          "id": "y1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "L",
          "id": "l2"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "O",
          "id": "o1"
        },
        {
          "row": 10,
          "col": 15,
          "letter": "W",
          "id": "w1"
        },
        {
          "row": 9,
          "col": 11,
          "letter": "W",
          "id": "w2"
        },
        {
          "row": 11,
          "col": 11,
          "letter": "L",
          "id": "l3"
        },
        {
          "row": 12,
          "col": 11,
          "letter": "L",
          "id": "l4"
        },
        {
          "row": 8,
          "col": 13,
          "letter": "Y",
          "id": "y2"
        },
        {
          "row": 9,
          "col": 13,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 11,
          "col": 13,
          "letter": "L",
          "id": "l5"
        }
      ],
      "words": [
        {
          "word": "YELLOW",
          "cellIds": [
            "y1",
            "e1",
            "l1",
            "l2",
            "o1",
            "w1"
          ],
          "phonetic": "/ˈjeləʊ/",
          "meaning": "adj. 黄色的",
          "example": "The leaves turn yellow in autumn.",
          "exampleCn": "秋天叶子变黄。"
        },
        {
          "word": "WELL",
          "cellIds": [
            "w2",
            "e1",
            "l3",
            "l4"
          ],
          "phonetic": "/wel/",
          "meaning": "adv. 很好地",
          "example": "You did very well.",
          "exampleCn": "你做得很好。"
        },
        {
          "word": "YELL",
          "cellIds": [
            "y2",
            "e2",
            "l2",
            "l5"
          ],
          "phonetic": "/jel/",
          "meaning": "v. 大喊",
          "example": "Do not yell at me!",
          "exampleCn": "不要对我大喊大叫！"
        }
      ]
    }
  },
  {
    "level": 43,
    "letters": [
      "O",
      "R",
      "A",
      "N",
      "G",
      "E"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "O",
          "id": "o1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "N",
          "id": "n1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "G",
          "id": "g1"
        },
        {
          "row": 10,
          "col": 15,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 11,
          "col": 11,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 12,
          "col": 11,
          "letter": "N",
          "id": "n2"
        },
        {
          "row": 13,
          "col": 11,
          "letter": "G",
          "id": "g2"
        },
        {
          "row": 14,
          "col": 11,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 9,
          "col": 14,
          "letter": "A",
          "id": "a3"
        },
        {
          "row": 11,
          "col": 14,
          "letter": "E",
          "id": "e3"
        }
      ],
      "words": [
        {
          "word": "ORANGE",
          "cellIds": [
            "o1",
            "r1",
            "a1",
            "n1",
            "g1",
            "e1"
          ],
          "phonetic": "/ˈɒrɪndʒ/",
          "meaning": "n. 橙子；橙色",
          "example": "I drink orange juice daily.",
          "exampleCn": "我每天喝橙汁。"
        },
        {
          "word": "RANGE",
          "cellIds": [
            "r1",
            "a2",
            "n2",
            "g2",
            "e2"
          ],
          "phonetic": "/reɪndʒ/",
          "meaning": "n. 范围，幅度",
          "example": "The price range is wide.",
          "exampleCn": "价格范围很大。"
        },
        {
          "word": "AGE",
          "cellIds": [
            "a3",
            "g1",
            "e3"
          ],
          "phonetic": "/eɪdʒ/",
          "meaning": "n. 年龄",
          "example": "What is your age?",
          "exampleCn": "你的年龄是多少？"
        }
      ]
    }
  },
  {
    "level": 44,
    "letters": [
      "S",
      "U",
      "N",
      "S",
      "E",
      "T"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "U",
          "id": "u1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "N",
          "id": "n1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "S",
          "id": "s2"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 10,
          "col": 15,
          "letter": "T",
          "id": "t1"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "N",
          "id": "n2"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "T",
          "id": "t2"
        },
        {
          "row": 8,
          "col": 12,
          "letter": "S",
          "id": "s3"
        },
        {
          "row": 9,
          "col": 12,
          "letter": "U",
          "id": "u2"
        }
      ],
      "words": [
        {
          "word": "SUNSET",
          "cellIds": [
            "s1",
            "u1",
            "n1",
            "s2",
            "e1",
            "t1"
          ],
          "phonetic": "/ˈsʌnset/",
          "meaning": "n. 日落",
          "example": "We watched the sunset together.",
          "exampleCn": "我们一起看了日落。"
        },
        {
          "word": "NEST",
          "cellIds": [
            "n2",
            "e2",
            "s1",
            "t2"
          ],
          "phonetic": "/nest/",
          "meaning": "n. 鸟巢",
          "example": "A bird built a nest in the tree.",
          "exampleCn": "鸟在树上建了巢。"
        },
        {
          "word": "SUN",
          "cellIds": [
            "s3",
            "u2",
            "n1"
          ],
          "phonetic": "/sʌn/",
          "meaning": "n. 太阳",
          "example": "The sun is shining brightly.",
          "exampleCn": "阳光明媚。"
        }
      ]
    }
  },
  {
    "level": 45,
    "letters": [
      "W",
      "I",
      "N",
      "T",
      "E",
      "R"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "W",
          "id": "w1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "N",
          "id": "n1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "T",
          "id": "t1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 10,
          "col": 15,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "R",
          "id": "r2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "I",
          "id": "i2"
        },
        {
          "row": 13,
          "col": 10,
          "letter": "T",
          "id": "t2"
        },
        {
          "row": 14,
          "col": 10,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 8,
          "col": 12,
          "letter": "T",
          "id": "t3"
        },
        {
          "row": 9,
          "col": 12,
          "letter": "E",
          "id": "e3"
        }
      ],
      "words": [
        {
          "word": "WINTER",
          "cellIds": [
            "w1",
            "i1",
            "n1",
            "t1",
            "e1",
            "r1"
          ],
          "phonetic": "/ˈwɪntər/",
          "meaning": "n. 冬天",
          "example": "Winter is my favorite season.",
          "exampleCn": "冬天是我最喜欢的季节。"
        },
        {
          "word": "WRITE",
          "cellIds": [
            "w1",
            "r2",
            "i2",
            "t2",
            "e2"
          ],
          "phonetic": "/raɪt/",
          "meaning": "v. 书写",
          "example": "Write down your ideas.",
          "exampleCn": "写下你的想法。"
        },
        {
          "word": "TEN",
          "cellIds": [
            "t3",
            "e3",
            "n1"
          ],
          "phonetic": "/ten/",
          "meaning": "num. 十",
          "example": "Count from one to ten.",
          "exampleCn": "从一数到十。"
        }
      ]
    }
  },
  {
    "level": 46,
    "letters": [
      "S",
      "U",
      "M",
      "M",
      "E",
      "R"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "U",
          "id": "u1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "M",
          "id": "m1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "M",
          "id": "m2"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 10,
          "col": 15,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "M",
          "id": "m3"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "U",
          "id": "u2"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 8,
          "col": 14,
          "letter": "S",
          "id": "s2"
        },
        {
          "row": 9,
          "col": 14,
          "letter": "U",
          "id": "u3"
        }
      ],
      "words": [
        {
          "word": "SUMMER",
          "cellIds": [
            "s1",
            "u1",
            "m1",
            "m2",
            "e1",
            "r1"
          ],
          "phonetic": "/ˈsʌmər/",
          "meaning": "n. 夏天",
          "example": "Summer is hot and sunny.",
          "exampleCn": "夏天炎热多阳。"
        },
        {
          "word": "MUSE",
          "cellIds": [
            "m3",
            "u2",
            "s1",
            "e2"
          ],
          "phonetic": "/mjuːz/",
          "meaning": "v. 沉思；n. 缪斯",
          "example": "She mused on the meaning of life.",
          "exampleCn": "她沉思人生的意义。"
        },
        {
          "word": "SUE",
          "cellIds": [
            "s2",
            "u3",
            "e1"
          ],
          "phonetic": "/suː/",
          "meaning": "v. 起诉",
          "example": "They threatened to sue.",
          "exampleCn": "他们威胁要起诉。"
        }
      ]
    }
  },
  {
    "level": 47,
    "letters": [
      "S",
      "P",
      "R",
      "I",
      "N",
      "G"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "P",
          "id": "p1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "N",
          "id": "n1"
        },
        {
          "row": 10,
          "col": 15,
          "letter": "G",
          "id": "g1"
        },
        {
          "row": 11,
          "col": 12,
          "letter": "I",
          "id": "i2"
        },
        {
          "row": 12,
          "col": 12,
          "letter": "N",
          "id": "n2"
        },
        {
          "row": 13,
          "col": 12,
          "letter": "G",
          "id": "g2"
        },
        {
          "row": 8,
          "col": 15,
          "letter": "P",
          "id": "p2"
        },
        {
          "row": 9,
          "col": 15,
          "letter": "I",
          "id": "i3"
        }
      ],
      "words": [
        {
          "word": "SPRING",
          "cellIds": [
            "s1",
            "p1",
            "r1",
            "i1",
            "n1",
            "g1"
          ],
          "phonetic": "/sprɪŋ/",
          "meaning": "n. 春天",
          "example": "Flowers bloom in spring.",
          "exampleCn": "花朵在春天绽放。"
        },
        {
          "word": "RING",
          "cellIds": [
            "r1",
            "i2",
            "n2",
            "g2"
          ],
          "phonetic": "/rɪŋ/",
          "meaning": "n. 戒指；v. 鸣响",
          "example": "She wore a diamond ring.",
          "exampleCn": "她戴着钻戒。"
        },
        {
          "word": "PIG",
          "cellIds": [
            "p2",
            "i3",
            "g1"
          ],
          "phonetic": "/pɪɡ/",
          "meaning": "n. 猪",
          "example": "The little pig was pink.",
          "exampleCn": "那只小猪是粉红色的。"
        }
      ]
    }
  },
  {
    "level": 48,
    "letters": [
      "B",
      "R",
      "I",
      "D",
      "G",
      "E"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "B",
          "id": "b1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "D",
          "id": "d1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "G",
          "id": "g1"
        },
        {
          "row": 10,
          "col": 15,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "I",
          "id": "i2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "R",
          "id": "r2"
        },
        {
          "row": 13,
          "col": 10,
          "letter": "D",
          "id": "d2"
        },
        {
          "row": 8,
          "col": 13,
          "letter": "R",
          "id": "r3"
        },
        {
          "row": 9,
          "col": 13,
          "letter": "E",
          "id": "e2"
        }
      ],
      "words": [
        {
          "word": "BRIDGE",
          "cellIds": [
            "b1",
            "r1",
            "i1",
            "d1",
            "g1",
            "e1"
          ],
          "phonetic": "/brɪdʒ/",
          "meaning": "n. 桥梁",
          "example": "A stone bridge crosses the river.",
          "exampleCn": "一座石桥横跨河流。"
        },
        {
          "word": "BIRD",
          "cellIds": [
            "b1",
            "i2",
            "r2",
            "d2"
          ],
          "phonetic": "/bɜːd/",
          "meaning": "n. 鸟",
          "example": "The bird sang a sweet song.",
          "exampleCn": "小鸟唱起甜美的歌。"
        },
        {
          "word": "RED",
          "cellIds": [
            "r3",
            "e2",
            "d1"
          ],
          "phonetic": "/red/",
          "meaning": "adj. 红色的",
          "example": "She chose a red dress.",
          "exampleCn": "她选了一件红裙子。"
        }
      ]
    }
  },
  {
    "level": 49,
    "letters": [
      "V",
      "I",
      "L",
      "L",
      "A",
      "G",
      "E"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "V",
          "id": "v1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "L",
          "id": "l2"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 15,
          "letter": "G",
          "id": "g1"
        },
        {
          "row": 10,
          "col": 16,
          "letter": "E",
          "id": "e1"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "L",
          "id": "l3"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "I",
          "id": "i2"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 11,
          "col": 12,
          "letter": "E",
          "id": "e3"
        },
        {
          "row": 12,
          "col": 12,
          "letter": "G",
          "id": "g2"
        }
      ],
      "words": [
        {
          "word": "VILLAGE",
          "cellIds": [
            "v1",
            "i1",
            "l1",
            "l2",
            "a1",
            "g1",
            "e1"
          ],
          "phonetic": "/ˈvɪlɪdʒ/",
          "meaning": "n. 村庄",
          "example": "They moved to a quiet village.",
          "exampleCn": "他们搬到了宁静的村庄。"
        },
        {
          "word": "LIVE",
          "cellIds": [
            "l3",
            "i2",
            "v1",
            "e2"
          ],
          "phonetic": "/lɪv/",
          "meaning": "v. 居住，生存",
          "example": "I live in a small town.",
          "exampleCn": "我住在一个小镇上。"
        },
        {
          "word": "LEG",
          "cellIds": [
            "l1",
            "e3",
            "g2"
          ],
          "phonetic": "/leɡ/",
          "meaning": "n. 腿",
          "example": "He hurt his leg playing football.",
          "exampleCn": "他踢足球伤了腿。"
        }
      ]
    }
  },
  {
    "level": 50,
    "letters": [
      "A",
      "N",
      "I",
      "M",
      "A",
      "L"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "A",
          "id": "a1"
        },
        {
          "row": 10,
          "col": 11,
          "letter": "N",
          "id": "n1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "M",
          "id": "m1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 10,
          "col": 15,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "M",
          "id": "m2"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "I",
          "id": "i2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "L",
          "id": "l2"
        },
        {
          "row": 11,
          "col": 13,
          "letter": "A",
          "id": "a3"
        },
        {
          "row": 12,
          "col": 13,
          "letter": "N",
          "id": "n2"
        }
      ],
      "words": [
        {
          "word": "ANIMAL",
          "cellIds": [
            "a1",
            "n1",
            "i1",
            "m1",
            "a2",
            "l1"
          ],
          "phonetic": "/ˈænɪml/",
          "meaning": "n. 动物",
          "example": "The lion is a wild animal.",
          "exampleCn": "狮子是野生动物。"
        },
        {
          "word": "MAIL",
          "cellIds": [
            "m2",
            "a1",
            "i2",
            "l2"
          ],
          "phonetic": "/meɪl/",
          "meaning": "n. 邮件；v. 邮寄",
          "example": "Check your mailbox daily.",
          "exampleCn": "每天检查一下邮箱。"
        },
        {
          "word": "MAN",
          "cellIds": [
            "m1",
            "a3",
            "n2"
          ],
          "phonetic": "/mæn/",
          "meaning": "n. 男人",
          "example": "He is a kind man.",
          "exampleCn": "他是个善良的男人。"
        }
      ]
    }
  }
];
