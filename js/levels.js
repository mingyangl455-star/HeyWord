/* ============================================
   Level Data - 50 Levels (3 to 6 letters flat progression)
   ============================================ */

const LEVELS = [
  {
    "level": 1,
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
    "level": 2,
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
        },
        {
          "word": "SUB",
          "cellIds": [
            "s2",
            "u2",
            "b1"
          ],
          "phonetic": "/sʌb/",
          "meaning": "n. 潜水艇；v. 替代",
          "example": "The team used a sub.",
          "exampleCn": "这个团队使用了一个替补。"
        }
      ]
    }
  },
  {
    "level": 5,
    "letters": [
      "A",
      "R",
      "M"
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
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 10,
          "col": 12,
          "letter": "M",
          "id": "m1"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "R",
          "id": "r2"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "M",
          "id": "m2"
        }
      ],
      "words": [
        {
          "word": "ARM",
          "cellIds": [
            "a1",
            "r1",
            "m1"
          ],
          "phonetic": "",
          "meaning": "n. arm",
          "example": "Example sentence with arm.",
          "exampleCn": "包含 arm 的例句。"
        },
        {
          "word": "RAM",
          "cellIds": [
            "r2",
            "a1",
            "m2"
          ],
          "phonetic": "/ræm/",
          "meaning": "n. 公羊；v. 猛撞",
          "example": "A ram charged at the gate.",
          "exampleCn": "一只公羊猛撞大门。"
        }
      ]
    }
  },
  {
    "level": 6,
    "letters": [
      "N",
      "O",
      "W"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "N",
          "id": "n1"
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
          "letter": "W",
          "id": "w1"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "W",
          "id": "w2"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "O",
          "id": "o2"
        }
      ],
      "words": [
        {
          "word": "NOW",
          "cellIds": [
            "n1",
            "o1",
            "w1"
          ],
          "phonetic": "",
          "meaning": "n. now",
          "example": "Example sentence with now.",
          "exampleCn": "包含 now 的例句。"
        },
        {
          "word": "WON",
          "cellIds": [
            "w2",
            "o2",
            "n1"
          ],
          "phonetic": "/wʌn/",
          "meaning": "v. 赢（win的过去式）",
          "example": "We won the match yesterday.",
          "exampleCn": "我们昨天赢了比赛。"
        }
      ]
    }
  },
  {
    "level": 7,
    "letters": [
      "E",
      "A",
      "R"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "E",
          "id": "e1"
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
          "letter": "R",
          "id": "r1"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "R",
          "id": "r2"
        },
        {
          "row": 9,
          "col": 12,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 11,
          "col": 12,
          "letter": "A",
          "id": "a3"
        }
      ],
      "words": [
        {
          "word": "EAR",
          "cellIds": [
            "e1",
            "a1",
            "r1"
          ],
          "phonetic": "",
          "meaning": "n. ear",
          "example": "Example sentence with ear.",
          "exampleCn": "包含 ear 的例句。"
        },
        {
          "word": "ARE",
          "cellIds": [
            "a2",
            "r2",
            "e1"
          ],
          "phonetic": "",
          "meaning": "n. are",
          "example": "Example sentence with are.",
          "exampleCn": "包含 are 的例句。"
        },
        {
          "word": "ERA",
          "cellIds": [
            "e2",
            "r1",
            "a3"
          ],
          "phonetic": "/ˈɪərə/",
          "meaning": "n. 纪元，时代",
          "example": "This is the digital era.",
          "exampleCn": "这是数字化时代。"
        }
      ]
    }
  },
  {
    "level": 8,
    "letters": [
      "R",
      "A",
      "T"
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
        },
        {
          "row": 11,
          "col": 12,
          "letter": "A",
          "id": "a3"
        },
        {
          "row": 12,
          "col": 12,
          "letter": "R",
          "id": "r2"
        }
      ],
      "words": [
        {
          "word": "RAT",
          "cellIds": [
            "r1",
            "a1",
            "t1"
          ],
          "phonetic": "",
          "meaning": "n. rat",
          "example": "Example sentence with rat.",
          "exampleCn": "包含 rat 的例句。"
        },
        {
          "word": "ART",
          "cellIds": [
            "a2",
            "r1",
            "t2"
          ],
          "phonetic": "/ɑːt/",
          "meaning": "n. 艺术",
          "example": "She studies art at college.",
          "exampleCn": "她在大学学习艺术。"
        },
        {
          "word": "TAR",
          "cellIds": [
            "t1",
            "a3",
            "r2"
          ],
          "phonetic": "/tɑːr/",
          "meaning": "n. 焦油",
          "example": "Tar is used for paving roads.",
          "exampleCn": "焦油用来铺路。"
        }
      ]
    }
  },
  {
    "level": 9,
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
          "letter": "N",
          "id": "n2"
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
        },
        {
          "word": "URN",
          "cellIds": [
            "u2",
            "r1",
            "n2"
          ],
          "phonetic": "/ɜːn/",
          "meaning": "n. 瓮；茶水壶",
          "example": "An urn of hot tea stood nearby.",
          "exampleCn": "旁边放着一壶热茶。"
        }
      ]
    }
  },
  {
    "level": 10,
    "letters": [
      "N",
      "E",
      "T"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "N",
          "id": "n1"
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
          "letter": "T",
          "id": "t1"
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
          "letter": "E",
          "id": "e2"
        }
      ],
      "words": [
        {
          "word": "NET",
          "cellIds": [
            "n1",
            "e1",
            "t1"
          ],
          "phonetic": "/net/",
          "meaning": "n. 网",
          "example": "The ball hit the net.",
          "exampleCn": "球打在了网上。"
        },
        {
          "word": "TEN",
          "cellIds": [
            "t2",
            "e2",
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
    "level": 14,
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
    "level": 15,
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
    "level": 16,
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
        },
        {
          "row": 8,
          "col": 13,
          "letter": "L",
          "id": "l2"
        },
        {
          "row": 9,
          "col": 13,
          "letter": "I",
          "id": "i2"
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
        },
        {
          "word": "LIT",
          "cellIds": [
            "l2",
            "i2",
            "t1"
          ],
          "phonetic": "",
          "meaning": "n. lit",
          "example": "Example sentence with lit.",
          "exampleCn": "包含 lit 的例句。"
        }
      ]
    }
  },
  {
    "level": 17,
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
        },
        {
          "row": 8,
          "col": 13,
          "letter": "T",
          "id": "t2"
        },
        {
          "row": 9,
          "col": 13,
          "letter": "I",
          "id": "i2"
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
        },
        {
          "word": "TIE",
          "cellIds": [
            "t2",
            "i2",
            "e1"
          ],
          "phonetic": "/taɪ/",
          "meaning": "v. 系；n. 领带",
          "example": "Tie your shoelaces tightly.",
          "exampleCn": "系紧你的鞋带。"
        }
      ]
    }
  },
  {
    "level": 18,
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
          "letter": "E",
          "id": "e2"
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
        },
        {
          "word": "ALE",
          "cellIds": [
            "a1",
            "l3",
            "e2"
          ],
          "phonetic": "/eɪl/",
          "meaning": "n. 麦芽啤酒",
          "example": "He ordered a pint of ale.",
          "exampleCn": "他点了一品脱麦芽啤酒。"
        }
      ]
    }
  },
  {
    "level": 19,
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
        },
        {
          "row": 9,
          "col": 12,
          "letter": "T",
          "id": "t3"
        },
        {
          "row": 11,
          "col": 12,
          "letter": "B",
          "id": "b2"
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
        },
        {
          "word": "TAB",
          "cellIds": [
            "t3",
            "a1",
            "b2"
          ],
          "phonetic": "/tæb/",
          "meaning": "n. 标签，页签",
          "example": "Open a new tab in the browser.",
          "exampleCn": "在浏览器中打开一个新标签页。"
        }
      ]
    }
  },
  {
    "level": 20,
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
        },
        {
          "row": 8,
          "col": 12,
          "letter": "G",
          "id": "g2"
        },
        {
          "row": 9,
          "col": 12,
          "letter": "I",
          "id": "i3"
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
        },
        {
          "word": "GIN",
          "cellIds": [
            "g2",
            "i3",
            "n1"
          ],
          "phonetic": "/dʒɪn/",
          "meaning": "n. 琴酒，杜松子酒",
          "example": "He drank a glass of gin.",
          "exampleCn": "他喝了一杯琴酒。"
        }
      ]
    }
  },
  {
    "level": 21,
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
        },
        {
          "row": 8,
          "col": 12,
          "letter": "D",
          "id": "d2"
        },
        {
          "row": 9,
          "col": 12,
          "letter": "I",
          "id": "i3"
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
        },
        {
          "word": "DIN",
          "cellIds": [
            "d2",
            "i3",
            "n1"
          ],
          "phonetic": "/dɪn/",
          "meaning": "n. 嘈杂声，喧嚣",
          "example": "The kids made a terrible din.",
          "exampleCn": "孩子们制造了可怕的嘈杂声。"
        }
      ]
    }
  },
  {
    "level": 22,
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
        },
        {
          "row": 9,
          "col": 12,
          "letter": "A",
          "id": "a3"
        },
        {
          "row": 11,
          "col": 12,
          "letter": "D",
          "id": "d3"
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
        },
        {
          "word": "AND",
          "cellIds": [
            "a3",
            "n1",
            "d3"
          ],
          "phonetic": "/ænd/",
          "meaning": "conj. 和，与",
          "example": "You and I are good friends.",
          "exampleCn": "你和我是好朋友。"
        }
      ]
    }
  },
  {
    "level": 23,
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
        },
        {
          "row": 11,
          "col": 13,
          "letter": "O",
          "id": "o3"
        },
        {
          "row": 12,
          "col": 13,
          "letter": "G",
          "id": "g2"
        },
        {
          "row": 10,
          "col": 16,
          "letter": "L",
          "id": "l2"
        },
        {
          "row": 10,
          "col": 17,
          "letter": "O",
          "id": "o4"
        },
        {
          "row": 10,
          "col": 18,
          "letter": "G",
          "id": "g3"
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
        },
        {
          "word": "DOG",
          "cellIds": [
            "d1",
            "o3",
            "g2"
          ],
          "phonetic": "/dɒɡ/",
          "meaning": "n. 狗",
          "example": "The dog runs in the park.",
          "exampleCn": "狗在公园里跑。"
        },
        {
          "word": "LOG",
          "cellIds": [
            "l2",
            "o4",
            "g3"
          ],
          "phonetic": "/lɒɡ/",
          "meaning": "n. 圆木；v. 记录",
          "example": "A log of wood was burning.",
          "exampleCn": "一根圆木正在燃烧。"
        }
      ]
    }
  },
  {
    "level": 24,
    "letters": [
      "E",
      "A",
      "S",
      "Y"
    ],
    "grid": {
      "cells": [
        {
          "row": 10,
          "col": 10,
          "letter": "E",
          "id": "e1"
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
          "letter": "S",
          "id": "s1"
        },
        {
          "row": 10,
          "col": 13,
          "letter": "Y",
          "id": "y1"
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
          "letter": "Y",
          "id": "y2"
        },
        {
          "row": 10,
          "col": 16,
          "letter": "S",
          "id": "s3"
        },
        {
          "row": 10,
          "col": 17,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 10,
          "col": 18,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 11,
          "col": 13,
          "letter": "E",
          "id": "e3"
        },
        {
          "row": 12,
          "col": 13,
          "letter": "S",
          "id": "s4"
        }
      ],
      "words": [
        {
          "word": "EASY",
          "cellIds": [
            "e1",
            "a1",
            "s1",
            "y1"
          ],
          "phonetic": "",
          "meaning": "n. easy",
          "example": "Example sentence with easy.",
          "exampleCn": "包含 easy 的例句。"
        },
        {
          "word": "SAY",
          "cellIds": [
            "s2",
            "a1",
            "y2"
          ],
          "phonetic": "/seɪ/",
          "meaning": "v. 说，表达",
          "example": "What did you say?",
          "exampleCn": "你说了什么？"
        },
        {
          "word": "SEA",
          "cellIds": [
            "s3",
            "e2",
            "a2"
          ],
          "phonetic": "",
          "meaning": "n. sea",
          "example": "Example sentence with sea.",
          "exampleCn": "包含 sea 的例句。"
        },
        {
          "word": "YES",
          "cellIds": [
            "y1",
            "e3",
            "s4"
          ],
          "phonetic": "/jes/",
          "meaning": "adv. 是的，同意",
          "example": "He said yes to our offer.",
          "exampleCn": "他同意了我们的提议。"
        }
      ]
    }
  },
  {
    "level": 25,
    "letters": [
      "R",
      "A",
      "T",
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
          "row": 7,
          "col": 10,
          "letter": "T",
          "id": "t2"
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
        },
        {
          "row": 11,
          "col": 11,
          "letter": "R",
          "id": "r2"
        },
        {
          "row": 12,
          "col": 11,
          "letter": "T",
          "id": "t3"
        },
        {
          "row": 8,
          "col": 13,
          "letter": "A",
          "id": "a3"
        },
        {
          "row": 9,
          "col": 13,
          "letter": "T",
          "id": "t4"
        }
      ],
      "words": [
        {
          "word": "RATE",
          "cellIds": [
            "r1",
            "a1",
            "t1",
            "e1"
          ],
          "phonetic": "",
          "meaning": "n. rate",
          "example": "Example sentence with rate.",
          "exampleCn": "包含 rate 的例句。"
        },
        {
          "word": "TEAR",
          "cellIds": [
            "t2",
            "e2",
            "a2",
            "r1"
          ],
          "phonetic": "/teər/",
          "meaning": "v. 撕裂；n. 眼泪",
          "example": "A tear rolled down her cheek.",
          "exampleCn": "眼泪顺着她的脸颊流下。"
        },
        {
          "word": "ART",
          "cellIds": [
            "a1",
            "r2",
            "t3"
          ],
          "phonetic": "/ɑːt/",
          "meaning": "n. 艺术",
          "example": "She studies art at college.",
          "exampleCn": "她在大学学习艺术。"
        },
        {
          "word": "ATE",
          "cellIds": [
            "a3",
            "t4",
            "e1"
          ],
          "phonetic": "",
          "meaning": "n. ate",
          "example": "Example sentence with ate.",
          "exampleCn": "包含 ate 的例句。"
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
        },
        {
          "row": 8,
          "col": 14,
          "letter": "B",
          "id": "b2"
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
        },
        {
          "word": "BAD",
          "cellIds": [
            "b2",
            "a3",
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
        },
        {
          "row": 13,
          "col": 9,
          "letter": "C",
          "id": "c3"
        },
        {
          "row": 13,
          "col": 10,
          "letter": "O",
          "id": "o4"
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
        },
        {
          "word": "COD",
          "cellIds": [
            "c3",
            "o4",
            "d2"
          ],
          "phonetic": "",
          "meaning": "n. cod",
          "example": "Example sentence with cod.",
          "exampleCn": "包含 cod 的例句。"
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
        },
        {
          "row": 8,
          "col": 11,
          "letter": "E",
          "id": "e5"
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
        },
        {
          "word": "ERR",
          "cellIds": [
            "e5",
            "r2",
            "r1"
          ],
          "phonetic": "/ɜːr/",
          "meaning": "v. 犯错",
          "example": "To err is human.",
          "exampleCn": "人非圣贤，孰能无过。"
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
        },
        {
          "row": 11,
          "col": 14,
          "letter": "I",
          "id": "i3"
        },
        {
          "row": 12,
          "col": 14,
          "letter": "E",
          "id": "e3"
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
        },
        {
          "word": "DIE",
          "cellIds": [
            "d1",
            "i3",
            "e3"
          ],
          "phonetic": "/daɪ/",
          "meaning": "v. 死亡",
          "example": "Flowers die without water.",
          "exampleCn": "花朵没水就会枯死。"
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
        },
        {
          "row": 8,
          "col": 14,
          "letter": "C",
          "id": "c2"
        },
        {
          "row": 9,
          "col": 14,
          "letter": "O",
          "id": "o3"
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
        },
        {
          "word": "CON",
          "cellIds": [
            "c2",
            "o3",
            "n1"
          ],
          "phonetic": "/kɒn/",
          "meaning": "n. 反对论点；骗局",
          "example": "He weighed the pros and cons.",
          "exampleCn": "他权衡了利弊。"
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
          "col": 11,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 12,
          "col": 11,
          "letter": "T",
          "id": "t2"
        },
        {
          "row": 9,
          "col": 13,
          "letter": "A",
          "id": "a3"
        },
        {
          "row": 11,
          "col": 13,
          "letter": "T",
          "id": "t3"
        },
        {
          "row": 12,
          "col": 9,
          "letter": "R",
          "id": "r2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "A",
          "id": "a4"
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
          "word": "MAT",
          "cellIds": [
            "m1",
            "a2",
            "t2"
          ],
          "phonetic": "/mæt/",
          "meaning": "n. 垫子",
          "example": "Wipe your feet on the mat.",
          "exampleCn": "在垫子上擦擦脚。"
        },
        {
          "word": "ART",
          "cellIds": [
            "a3",
            "r1",
            "t3"
          ],
          "phonetic": "/ɑːt/",
          "meaning": "n. 艺术",
          "example": "She studies art at college.",
          "exampleCn": "她在大学学习艺术。"
        },
        {
          "word": "RAT",
          "cellIds": [
            "r2",
            "a4",
            "t2"
          ],
          "phonetic": "",
          "meaning": "n. rat",
          "example": "Example sentence with rat.",
          "exampleCn": "包含 rat 的例句。"
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
        },
        {
          "row": 12,
          "col": 10,
          "letter": "T",
          "id": "t2"
        },
        {
          "row": 12,
          "col": 12,
          "letter": "N",
          "id": "n3"
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
        },
        {
          "word": "TIN",
          "cellIds": [
            "t2",
            "i2",
            "n3"
          ],
          "phonetic": "/tɪn/",
          "meaning": "n. 锡；罐头",
          "example": "A tin of sardines.",
          "exampleCn": "一罐沙丁鱼。"
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
        },
        {
          "row": 12,
          "col": 12,
          "letter": "E",
          "id": "e3"
        },
        {
          "row": 12,
          "col": 13,
          "letter": "T",
          "id": "t2"
        },
        {
          "row": 13,
          "col": 13,
          "letter": "E",
          "id": "e4"
        },
        {
          "row": 14,
          "col": 13,
          "letter": "N",
          "id": "n3"
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
        },
        {
          "word": "NET",
          "cellIds": [
            "n2",
            "e3",
            "t2"
          ],
          "phonetic": "/net/",
          "meaning": "n. 网",
          "example": "The ball hit the net.",
          "exampleCn": "球打在了网上。"
        },
        {
          "word": "TEN",
          "cellIds": [
            "t2",
            "e4",
            "n3"
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
        },
        {
          "row": 9,
          "col": 10,
          "letter": "S",
          "id": "s3"
        },
        {
          "row": 11,
          "col": 10,
          "letter": "E",
          "id": "e3"
        },
        {
          "row": 8,
          "col": 14,
          "letter": "H",
          "id": "h2"
        },
        {
          "row": 9,
          "col": 14,
          "letter": "U",
          "id": "u2"
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
        },
        {
          "word": "SHE",
          "cellIds": [
            "s3",
            "h1",
            "e3"
          ],
          "phonetic": "/ʃiː/",
          "meaning": "pron. 她",
          "example": "She is a smart girl.",
          "exampleCn": "她是一个聪明的女孩。"
        },
        {
          "word": "HUE",
          "cellIds": [
            "h2",
            "u2",
            "e1"
          ],
          "phonetic": "/hjuː/",
          "meaning": "n. 色彩，色调",
          "example": "The sunset had a golden hue.",
          "exampleCn": "落日带有一层金色的色调。"
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
        },
        {
          "row": 8,
          "col": 14,
          "letter": "L",
          "id": "l4"
        },
        {
          "row": 9,
          "col": 14,
          "letter": "I",
          "id": "i3"
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
        },
        {
          "word": "LIE",
          "cellIds": [
            "l4",
            "i3",
            "e1"
          ],
          "phonetic": "",
          "meaning": "n. lie",
          "example": "Example sentence with lie.",
          "exampleCn": "包含 lie 的例句。"
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
        },
        {
          "row": 8,
          "col": 9,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "R",
          "id": "r3"
        },
        {
          "row": 7,
          "col": 9,
          "letter": "R",
          "id": "r4"
        },
        {
          "row": 9,
          "col": 9,
          "letter": "W",
          "id": "w3"
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
        },
        {
          "word": "ART",
          "cellIds": [
            "a2",
            "r3",
            "t2"
          ],
          "phonetic": "/ɑːt/",
          "meaning": "n. 艺术",
          "example": "She studies art at college.",
          "exampleCn": "她在大学学习艺术。"
        },
        {
          "word": "RAW",
          "cellIds": [
            "r4",
            "a2",
            "w3"
          ],
          "phonetic": "",
          "meaning": "n. raw",
          "example": "Example sentence with raw.",
          "exampleCn": "包含 raw 的例句。"
        }
      ]
    }
  },
  {
    "level": 37,
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
        },
        {
          "row": 12,
          "col": 9,
          "letter": "P",
          "id": "p3"
        },
        {
          "row": 12,
          "col": 11,
          "letter": "N",
          "id": "n3"
        },
        {
          "row": 8,
          "col": 14,
          "letter": "A",
          "id": "a3"
        },
        {
          "row": 9,
          "col": 14,
          "letter": "N",
          "id": "n4"
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
        },
        {
          "word": "PAN",
          "cellIds": [
            "p3",
            "a2",
            "n3"
          ],
          "phonetic": "",
          "meaning": "n. pan",
          "example": "Example sentence with pan.",
          "exampleCn": "包含 pan 的例句。"
        },
        {
          "word": "ANT",
          "cellIds": [
            "a3",
            "n4",
            "t1"
          ],
          "phonetic": "/ænt/",
          "meaning": "n. 蚂蚁",
          "example": "An ant carries food together.",
          "exampleCn": "蚂蚁一起搬运食物。"
        }
      ]
    }
  },
  {
    "level": 38,
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
          "row": 11,
          "col": 11,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 12,
          "col": 11,
          "letter": "L",
          "id": "l3"
        },
        {
          "row": 13,
          "col": 11,
          "letter": "E",
          "id": "e3"
        },
        {
          "row": 8,
          "col": 14,
          "letter": "A",
          "id": "a3"
        },
        {
          "row": 9,
          "col": 14,
          "letter": "P",
          "id": "p4"
        },
        {
          "row": 8,
          "col": 12,
          "letter": "L",
          "id": "l4"
        },
        {
          "row": 9,
          "col": 12,
          "letter": "A",
          "id": "a4"
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
          "word": "PALE",
          "cellIds": [
            "p1",
            "a2",
            "l3",
            "e3"
          ],
          "phonetic": "/peɪl/",
          "meaning": "adj. 苍白的",
          "example": "She looked pale and tired.",
          "exampleCn": "她看起来苍白而疲惫。"
        },
        {
          "word": "APE",
          "cellIds": [
            "a3",
            "p4",
            "e1"
          ],
          "phonetic": "/eɪp/",
          "meaning": "n. 猿类",
          "example": "The ape climbed the tree effortlessly.",
          "exampleCn": "那只猿猴轻松地爬上了树。"
        },
        {
          "word": "LAP",
          "cellIds": [
            "l4",
            "a4",
            "p2"
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
    "level": 39,
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
        },
        {
          "row": 11,
          "col": 14,
          "letter": "E",
          "id": "e5"
        },
        {
          "row": 12,
          "col": 14,
          "letter": "E",
          "id": "e6"
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
        },
        {
          "word": "PEE",
          "cellIds": [
            "p1",
            "e5",
            "e6"
          ],
          "phonetic": "/piː/",
          "meaning": "v. 小便（非正式）",
          "example": "The dog needs to pee.",
          "exampleCn": "小狗需要尿尿。"
        }
      ]
    }
  },
  {
    "level": 40,
    "letters": [
      "S",
      "H",
      "A",
      "R",
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
          "letter": "P",
          "id": "p1"
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
          "letter": "R",
          "id": "r2"
        },
        {
          "row": 13,
          "col": 11,
          "letter": "P",
          "id": "p2"
        },
        {
          "row": 10,
          "col": 17,
          "letter": "A",
          "id": "a3"
        },
        {
          "row": 10,
          "col": 18,
          "letter": "S",
          "id": "s2"
        },
        {
          "row": 10,
          "col": 19,
          "letter": "H",
          "id": "h2"
        },
        {
          "row": 8,
          "col": 10,
          "letter": "H",
          "id": "h3"
        },
        {
          "row": 9,
          "col": 10,
          "letter": "A",
          "id": "a4"
        },
        {
          "row": 11,
          "col": 13,
          "letter": "A",
          "id": "a5"
        },
        {
          "row": 12,
          "col": 13,
          "letter": "P",
          "id": "p3"
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
          "letter": "P",
          "id": "p4"
        }
      ],
      "words": [
        {
          "word": "SHARP",
          "cellIds": [
            "s1",
            "h1",
            "a1",
            "r1",
            "p1"
          ],
          "phonetic": "",
          "meaning": "n. sharp",
          "example": "Example sentence with sharp.",
          "exampleCn": "包含 sharp 的例句。"
        },
        {
          "word": "HARP",
          "cellIds": [
            "h1",
            "a2",
            "r2",
            "p2"
          ],
          "phonetic": "/hɑːp/",
          "meaning": "n. 竖琴",
          "example": "She plays the harp beautifully.",
          "exampleCn": "她竖琴弹得很动听。"
        },
        {
          "word": "ASH",
          "cellIds": [
            "a3",
            "s2",
            "h2"
          ],
          "phonetic": "/æʃ/",
          "meaning": "n. 灰烬",
          "example": "The cigar fell into ash.",
          "exampleCn": "雪茄掉成了灰烬。"
        },
        {
          "word": "HAS",
          "cellIds": [
            "h3",
            "a4",
            "s1"
          ],
          "phonetic": "/hæz/",
          "meaning": "v. 有（第三人称单数）",
          "example": "She has a lovely cat.",
          "exampleCn": "她有一只可爱的小猫。"
        },
        {
          "word": "RAP",
          "cellIds": [
            "r1",
            "a5",
            "p3"
          ],
          "phonetic": "/ræp/",
          "meaning": "n./v. 敲击；说唱",
          "example": "He loves listening to rap music.",
          "exampleCn": "他喜欢听说唱音乐。"
        },
        {
          "word": "SPA",
          "cellIds": [
            "s3",
            "p4",
            "a1"
          ],
          "phonetic": "/spɑː/",
          "meaning": "n. 水疗，温泉",
          "example": "They went to a luxury spa.",
          "exampleCn": "他们去了一家奢华的水疗中心。"
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
        },
        {
          "row": 12,
          "col": 8,
          "letter": "L",
          "id": "l3"
        },
        {
          "row": 12,
          "col": 9,
          "letter": "I",
          "id": "i3"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "V",
          "id": "v3"
        },
        {
          "row": 11,
          "col": 13,
          "letter": "I",
          "id": "i4"
        },
        {
          "row": 12,
          "col": 13,
          "letter": "L",
          "id": "l4"
        },
        {
          "row": 13,
          "col": 13,
          "letter": "E",
          "id": "e3"
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
        },
        {
          "word": "LIVE",
          "cellIds": [
            "l3",
            "i3",
            "v3",
            "e2"
          ],
          "phonetic": "/lɪv/",
          "meaning": "v. 居住，生存",
          "example": "I live in a small town.",
          "exampleCn": "我住在一个小镇上。"
        },
        {
          "word": "VILE",
          "cellIds": [
            "v1",
            "i4",
            "l4",
            "e3"
          ],
          "phonetic": "",
          "meaning": "n. vile",
          "example": "Example sentence with vile.",
          "exampleCn": "包含 vile 的例句。"
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
        },
        {
          "row": 8,
          "col": 15,
          "letter": "L",
          "id": "l6"
        },
        {
          "row": 9,
          "col": 15,
          "letter": "O",
          "id": "o2"
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
        },
        {
          "word": "LOW",
          "cellIds": [
            "l6",
            "o2",
            "w1"
          ],
          "phonetic": "/ləʊ/",
          "meaning": "adj. 低的，低矮的",
          "example": "The sun is low in the sky.",
          "exampleCn": "太阳在天空中的位置很低。"
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
        },
        {
          "row": 14,
          "col": 12,
          "letter": "A",
          "id": "a4"
        },
        {
          "row": 14,
          "col": 13,
          "letter": "R",
          "id": "r2"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "O",
          "id": "o2"
        },
        {
          "row": 12,
          "col": 12,
          "letter": "E",
          "id": "e4"
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
        },
        {
          "word": "EAR",
          "cellIds": [
            "e2",
            "a4",
            "r2"
          ],
          "phonetic": "",
          "meaning": "n. ear",
          "example": "Example sentence with ear.",
          "exampleCn": "包含 ear 的例句。"
        },
        {
          "word": "ONE",
          "cellIds": [
            "o2",
            "n2",
            "e4"
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
        },
        {
          "row": 9,
          "col": 14,
          "letter": "N",
          "id": "n3"
        },
        {
          "row": 11,
          "col": 14,
          "letter": "T",
          "id": "t3"
        },
        {
          "row": 8,
          "col": 8,
          "letter": "T",
          "id": "t4"
        },
        {
          "row": 8,
          "col": 9,
          "letter": "E",
          "id": "e3"
        },
        {
          "row": 11,
          "col": 8,
          "letter": "S",
          "id": "s4"
        },
        {
          "row": 11,
          "col": 9,
          "letter": "E",
          "id": "e4"
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
        },
        {
          "word": "NET",
          "cellIds": [
            "n3",
            "e1",
            "t3"
          ],
          "phonetic": "/net/",
          "meaning": "n. 网",
          "example": "The ball hit the net.",
          "exampleCn": "球打在了网上。"
        },
        {
          "word": "TEN",
          "cellIds": [
            "t4",
            "e3",
            "n2"
          ],
          "phonetic": "/ten/",
          "meaning": "num. 十",
          "example": "Count from one to ten.",
          "exampleCn": "从一数到十。"
        },
        {
          "word": "SET",
          "cellIds": [
            "s4",
            "e4",
            "t2"
          ],
          "phonetic": "",
          "meaning": "n. set",
          "example": "Example sentence with set.",
          "exampleCn": "包含 set 的例句。"
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
        },
        {
          "row": 9,
          "col": 14,
          "letter": "N",
          "id": "n2"
        },
        {
          "row": 11,
          "col": 14,
          "letter": "T",
          "id": "t4"
        },
        {
          "row": 13,
          "col": 8,
          "letter": "W",
          "id": "w2"
        },
        {
          "row": 13,
          "col": 9,
          "letter": "E",
          "id": "e4"
        },
        {
          "row": 10,
          "col": 18,
          "letter": "T",
          "id": "t5"
        },
        {
          "row": 10,
          "col": 19,
          "letter": "I",
          "id": "i3"
        },
        {
          "row": 10,
          "col": 20,
          "letter": "E",
          "id": "e5"
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
        },
        {
          "word": "NET",
          "cellIds": [
            "n2",
            "e1",
            "t4"
          ],
          "phonetic": "/net/",
          "meaning": "n. 网",
          "example": "The ball hit the net.",
          "exampleCn": "球打在了网上。"
        },
        {
          "word": "WET",
          "cellIds": [
            "w2",
            "e4",
            "t2"
          ],
          "phonetic": "/wet/",
          "meaning": "adj. 湿的",
          "example": "The grass is wet with dew.",
          "exampleCn": "草被露水打湿了。"
        },
        {
          "word": "TIE",
          "cellIds": [
            "t5",
            "i3",
            "e5"
          ],
          "phonetic": "/taɪ/",
          "meaning": "v. 系；n. 领带",
          "example": "Tie your shoelaces tightly.",
          "exampleCn": "系紧你的鞋带。"
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
          "id": "u4"
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
        },
        {
          "word": "SUM",
          "cellIds": [
            "s3",
            "u4",
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
          "row": 11,
          "col": 10,
          "letter": "I",
          "id": "i3"
        },
        {
          "row": 12,
          "col": 10,
          "letter": "N",
          "id": "n3"
        },
        {
          "row": 13,
          "col": 10,
          "letter": "G",
          "id": "g3"
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
          "id": "i4"
        },
        {
          "row": 12,
          "col": 8,
          "letter": "P",
          "id": "p3"
        },
        {
          "row": 12,
          "col": 9,
          "letter": "I",
          "id": "i5"
        },
        {
          "row": 13,
          "col": 13,
          "letter": "I",
          "id": "i6"
        },
        {
          "row": 13,
          "col": 14,
          "letter": "N",
          "id": "n4"
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
          "word": "SING",
          "cellIds": [
            "s1",
            "i3",
            "n3",
            "g3"
          ],
          "phonetic": "",
          "meaning": "n. sing",
          "example": "Example sentence with sing.",
          "exampleCn": "包含 sing 的例句。"
        },
        {
          "word": "PIG",
          "cellIds": [
            "p2",
            "i4",
            "g1"
          ],
          "phonetic": "/pɪɡ/",
          "meaning": "n. 猪",
          "example": "The little pig was pink.",
          "exampleCn": "那只小猪是粉红色的。"
        },
        {
          "word": "PIN",
          "cellIds": [
            "p3",
            "i5",
            "n3"
          ],
          "phonetic": "",
          "meaning": "n. pin",
          "example": "Example sentence with pin.",
          "exampleCn": "包含 pin 的例句。"
        },
        {
          "word": "GIN",
          "cellIds": [
            "g2",
            "i6",
            "n4"
          ],
          "phonetic": "/dʒɪn/",
          "meaning": "n. 琴酒，杜松子酒",
          "example": "He drank a glass of gin.",
          "exampleCn": "他喝了一杯琴酒。"
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
          "row": 9,
          "col": 12,
          "letter": "R",
          "id": "r3"
        },
        {
          "row": 11,
          "col": 12,
          "letter": "D",
          "id": "d3"
        },
        {
          "row": 12,
          "col": 12,
          "letter": "E",
          "id": "e2"
        },
        {
          "row": 11,
          "col": 14,
          "letter": "R",
          "id": "r4"
        },
        {
          "row": 12,
          "col": 14,
          "letter": "I",
          "id": "i3"
        },
        {
          "row": 13,
          "col": 14,
          "letter": "D",
          "id": "d4"
        },
        {
          "row": 13,
          "col": 8,
          "letter": "R",
          "id": "r5"
        },
        {
          "row": 13,
          "col": 9,
          "letter": "E",
          "id": "e3"
        },
        {
          "row": 10,
          "col": 18,
          "letter": "B",
          "id": "b2"
        },
        {
          "row": 10,
          "col": 19,
          "letter": "E",
          "id": "e4"
        },
        {
          "row": 10,
          "col": 20,
          "letter": "D",
          "id": "d5"
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
          "word": "RIDE",
          "cellIds": [
            "r3",
            "i1",
            "d3",
            "e2"
          ],
          "phonetic": "",
          "meaning": "n. ride",
          "example": "Example sentence with ride.",
          "exampleCn": "包含 ride 的例句。"
        },
        {
          "word": "GRID",
          "cellIds": [
            "g1",
            "r4",
            "i3",
            "d4"
          ],
          "phonetic": "",
          "meaning": "n. grid",
          "example": "Example sentence with grid.",
          "exampleCn": "包含 grid 的例句。"
        },
        {
          "word": "RED",
          "cellIds": [
            "r5",
            "e3",
            "d2"
          ],
          "phonetic": "/red/",
          "meaning": "adj. 红色的",
          "example": "She chose a red dress.",
          "exampleCn": "她选了一件红裙子。"
        },
        {
          "word": "BED",
          "cellIds": [
            "b2",
            "e4",
            "d5"
          ],
          "phonetic": "/bed/",
          "meaning": "n. 床",
          "example": "Go to bed early tonight.",
          "exampleCn": "早点上床睡觉。"
        }
      ]
    }
  },
  {
    "level": 49,
    "letters": [
      "F",
      "A",
      "M",
      "I",
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
          "letter": "A",
          "id": "a1"
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
          "letter": "I",
          "id": "i1"
        },
        {
          "row": 10,
          "col": 14,
          "letter": "L",
          "id": "l1"
        },
        {
          "row": 10,
          "col": 15,
          "letter": "Y",
          "id": "y1"
        },
        {
          "row": 9,
          "col": 11,
          "letter": "M",
          "id": "m2"
        },
        {
          "row": 11,
          "col": 11,
          "letter": "I",
          "id": "i2"
        },
        {
          "row": 12,
          "col": 11,
          "letter": "L",
          "id": "l2"
        },
        {
          "row": 9,
          "col": 14,
          "letter": "F",
          "id": "f2"
        },
        {
          "row": 11,
          "col": 14,
          "letter": "Y",
          "id": "y2"
        },
        {
          "row": 12,
          "col": 12,
          "letter": "A",
          "id": "a2"
        },
        {
          "row": 12,
          "col": 13,
          "letter": "Y",
          "id": "y3"
        },
        {
          "row": 13,
          "col": 12,
          "letter": "I",
          "id": "i3"
        },
        {
          "row": 14,
          "col": 12,
          "letter": "M",
          "id": "m3"
        }
      ],
      "words": [
        {
          "word": "FAMILY",
          "cellIds": [
            "f1",
            "a1",
            "m1",
            "i1",
            "l1",
            "y1"
          ],
          "phonetic": "",
          "meaning": "n. family",
          "example": "Example sentence with family.",
          "exampleCn": "包含 family 的例句。"
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
          "word": "FLY",
          "cellIds": [
            "f2",
            "l1",
            "y2"
          ],
          "phonetic": "/flaɪ/",
          "meaning": "v. 飞；n. 苍蝇",
          "example": "Birds can fly high.",
          "exampleCn": "鸟能飞得很高。"
        },
        {
          "word": "LAY",
          "cellIds": [
            "l2",
            "a2",
            "y3"
          ],
          "phonetic": "/leɪ/",
          "meaning": "v. 产卵；躺下（past）",
          "example": "Please lay the map on the table.",
          "exampleCn": "请把地图铺在桌子上。"
        },
        {
          "word": "AIM",
          "cellIds": [
            "a2",
            "i3",
            "m3"
          ],
          "phonetic": "/eɪm/",
          "meaning": "n. 目标；v. 瞄准",
          "example": "My aim is to pass the exam.",
          "exampleCn": "我的目标是通过考试。"
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
        },
        {
          "row": 8,
          "col": 15,
          "letter": "M",
          "id": "m3"
        },
        {
          "row": 9,
          "col": 15,
          "letter": "I",
          "id": "i3"
        },
        {
          "row": 9,
          "col": 8,
          "letter": "A",
          "id": "a4"
        },
        {
          "row": 9,
          "col": 9,
          "letter": "I",
          "id": "i4"
        },
        {
          "row": 12,
          "col": 8,
          "letter": "N",
          "id": "n3"
        },
        {
          "row": 12,
          "col": 9,
          "letter": "I",
          "id": "i5"
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
        },
        {
          "word": "MIL",
          "cellIds": [
            "m3",
            "i3",
            "l1"
          ],
          "phonetic": "/mɪl/",
          "meaning": "n. 毫升(英文缩写)",
          "example": "Add one mil of liquid.",
          "exampleCn": "加入一毫升液体。"
        },
        {
          "word": "AIM",
          "cellIds": [
            "a4",
            "i4",
            "m2"
          ],
          "phonetic": "/eɪm/",
          "meaning": "n. 目标；v. 瞄准",
          "example": "My aim is to pass the exam.",
          "exampleCn": "我的目标是通过考试。"
        },
        {
          "word": "NIL",
          "cellIds": [
            "n3",
            "i5",
            "l2"
          ],
          "phonetic": "/nɪl/",
          "meaning": "n. 零，无",
          "example": "The match ended two-nil.",
          "exampleCn": "比赛以二比零结束。"
        }
      ]
    }
  }
];
