window.BOBI_VERSION = '2.1.1';
window.CURRICULUM_VERSION = '2.1.1';

window.CURRICULUM_DATA = [
  {
    "id": "elem_beg",
    "category": "elementary",
    "categoryName": "小學階段",
    "categoryIcon": "🎒",
    "subLevel": "beg",
    "subLevelName": "小學・初級 (1-2年級)",
    "badge": "🌱 啟蒙階段",
    "desc": "字母發音、日常單字、數字顏色與親切問候",
    "cefr": "Pre-A1",
    "themeColor": "#10b981",
    "colorClass": "u-school",
    "lessons": [
      {
        "id": "elem_beg-l1",
        "title": "第 1 關：字母與打招呼",
        "desc": "掌握 hello、friend 等核心詞彙",
        "icon": "👋",
        "vocabularies": [
          {
            "en": "hello",
            "zh": "你好"
          },
          {
            "en": "friend",
            "zh": "朋友"
          },
          {
            "en": "goodbye",
            "zh": "再見"
          },
          {
            "en": "smile",
            "zh": "微笑"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「hello」的正確中文意思",
            "en": "hello",
            "audioText": "hello",
            "instruction": "請問「hello」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "goodbye",
                "zh": "再見",
                "emoji": "🌟",
                "correct": false
              },
              {
                "en": "hello",
                "zh": "你好",
                "emoji": "🌱",
                "correct": true
              },
              {
                "en": "ruler",
                "zh": "尺",
                "emoji": "🐣",
                "correct": false
              },
              {
                "en": "friend",
                "zh": "朋友",
                "emoji": "🎈",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Hello, my good friend.",
            "instruction": "請看中文重組成英文句子：「你好，我的好朋友。」",
            "targetTokens": [
              "Hello,",
              "my",
              "good",
              "friend."
            ],
            "pool": [
              "friend.",
              "good",
              "four",
              "shirt",
              "my",
              "Hello,"
            ],
            "targetChinese": "你好，我的好朋友。",
            "targetSentence": "Hello, my good friend."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "friend",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "friend (朋友)",
                "en": "friend",
                "zh": "朋友",
                "correct": true
              },
              {
                "text": "hello (你好)",
                "en": "hello",
                "zh": "你好",
                "correct": false
              },
              {
                "text": "circle (圓形)",
                "en": "circle",
                "zh": "圓形",
                "correct": false
              },
              {
                "text": "yellow (黃色)",
                "en": "yellow",
                "zh": "黃色",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "hello",
                "zh": "你好"
              },
              {
                "en": "friend",
                "zh": "朋友"
              },
              {
                "en": "goodbye",
                "zh": "再見"
              },
              {
                "en": "smile",
                "zh": "微笑"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l2",
        "title": "第 2 關：數字大點名 1-5",
        "desc": "掌握 one、two 等核心詞彙",
        "icon": "🔢",
        "vocabularies": [
          {
            "en": "one",
            "zh": "一"
          },
          {
            "en": "two",
            "zh": "二"
          },
          {
            "en": "three",
            "zh": "三"
          },
          {
            "en": "four",
            "zh": "四"
          },
          {
            "en": "five",
            "zh": "五"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「one」的正確中文意思",
            "en": "one",
            "audioText": "one",
            "instruction": "請問「one」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "two",
                "zh": "二",
                "emoji": "🧸",
                "correct": false
              },
              {
                "en": "three",
                "zh": "三",
                "emoji": "🍀",
                "correct": false
              },
              {
                "en": "one",
                "zh": "一",
                "emoji": "🎨",
                "correct": true
              },
              {
                "en": "sad",
                "zh": "難過的",
                "emoji": "🐶",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "I have two dogs.",
            "instruction": "請看中文重組成英文句子：「我有兩隻狗。」",
            "targetTokens": [
              "I",
              "have",
              "two",
              "dogs."
            ],
            "pool": [
              "dogs.",
              "good",
              "two",
              "goodbye",
              "have",
              "I"
            ],
            "targetChinese": "我有兩隻狗。",
            "targetSentence": "I have two dogs."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "two",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "dog (小狗)",
                "en": "dog",
                "zh": "小狗",
                "correct": false
              },
              {
                "text": "one (一)",
                "en": "one",
                "zh": "一",
                "correct": false
              },
              {
                "text": "two (二)",
                "en": "two",
                "zh": "二",
                "correct": true
              },
              {
                "text": "hat (帽子)",
                "en": "hat",
                "zh": "帽子",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "one",
                "zh": "一"
              },
              {
                "en": "two",
                "zh": "二"
              },
              {
                "en": "three",
                "zh": "三"
              },
              {
                "en": "four",
                "zh": "四"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l3",
        "title": "第 3 關：數字加速前進 6-10",
        "desc": "掌握 six、seven 等核心詞彙",
        "icon": "🔟",
        "vocabularies": [
          {
            "en": "six",
            "zh": "六"
          },
          {
            "en": "seven",
            "zh": "七"
          },
          {
            "en": "eight",
            "zh": "八"
          },
          {
            "en": "nine",
            "zh": "九"
          },
          {
            "en": "ten",
            "zh": "十"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「six」的正確中文意思",
            "en": "six",
            "audioText": "six",
            "instruction": "請問「six」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "seven",
                "zh": "七",
                "emoji": "🎈",
                "correct": false
              },
              {
                "en": "big",
                "zh": "大的",
                "emoji": "🐣",
                "correct": false
              },
              {
                "en": "six",
                "zh": "六",
                "emoji": "🌱",
                "correct": true
              },
              {
                "en": "eight",
                "zh": "八",
                "emoji": "🌟",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Count from six to ten.",
            "instruction": "請看中文重組成英文句子：「從六數到十。」",
            "targetTokens": [
              "Count",
              "from",
              "six",
              "to",
              "ten."
            ],
            "pool": [
              "to",
              "Count",
              "from",
              "six",
              "orange",
              "ten.",
              "eight"
            ],
            "targetChinese": "從六數到十。",
            "targetSentence": "Count from six to ten."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "seven",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "three (三)",
                "en": "three",
                "zh": "三",
                "correct": false
              },
              {
                "text": "seven (七)",
                "en": "seven",
                "zh": "七",
                "correct": true
              },
              {
                "text": "robot (機器人)",
                "en": "robot",
                "zh": "機器人",
                "correct": false
              },
              {
                "text": "six (六)",
                "en": "six",
                "zh": "六",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "six",
                "zh": "六"
              },
              {
                "en": "seven",
                "zh": "七"
              },
              {
                "en": "eight",
                "zh": "八"
              },
              {
                "en": "nine",
                "zh": "九"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l4",
        "title": "第 4 關：繽紛色彩世界",
        "desc": "掌握 red、blue 等核心詞彙",
        "icon": "🎨",
        "vocabularies": [
          {
            "en": "red",
            "zh": "紅色"
          },
          {
            "en": "blue",
            "zh": "藍色"
          },
          {
            "en": "yellow",
            "zh": "黃色"
          },
          {
            "en": "green",
            "zh": "綠色"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「red」的正確中文意思",
            "en": "red",
            "audioText": "red",
            "instruction": "請問「red」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "blue",
                "zh": "藍色",
                "emoji": "🧸",
                "correct": false
              },
              {
                "en": "red",
                "zh": "紅色",
                "emoji": "🎨",
                "correct": true
              },
              {
                "en": "yellow",
                "zh": "黃色",
                "emoji": "🍀",
                "correct": false
              },
              {
                "en": "car",
                "zh": "玩具車",
                "emoji": "🐶",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The apple is red.",
            "instruction": "請看中文重組成英文句子：「這顆蘋果是紅色的。」",
            "targetTokens": [
              "The",
              "apple",
              "is",
              "red."
            ],
            "pool": [
              "circle",
              "tired",
              "red.",
              "is",
              "apple",
              "The"
            ],
            "targetChinese": "這顆蘋果是紅色的。",
            "targetSentence": "The apple is red."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "blue",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "blue (藍色)",
                "en": "blue",
                "zh": "藍色",
                "correct": true
              },
              {
                "text": "ball (球)",
                "en": "ball",
                "zh": "球",
                "correct": false
              },
              {
                "text": "red (紅色)",
                "en": "red",
                "zh": "紅色",
                "correct": false
              },
              {
                "text": "book (課本)",
                "en": "book",
                "zh": "課本",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "red",
                "zh": "紅色"
              },
              {
                "en": "blue",
                "zh": "藍色"
              },
              {
                "en": "yellow",
                "zh": "黃色"
              },
              {
                "en": "green",
                "zh": "綠色"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l5",
        "title": "第 5 關：可愛家庭寵物",
        "desc": "掌握 dog、cat 等核心詞彙",
        "icon": "🐶",
        "vocabularies": [
          {
            "en": "dog",
            "zh": "小狗"
          },
          {
            "en": "cat",
            "zh": "小貓"
          },
          {
            "en": "rabbit",
            "zh": "小兔子"
          },
          {
            "en": "bird",
            "zh": "小鳥"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「dog」的正確中文意思",
            "en": "dog",
            "audioText": "dog",
            "instruction": "請問「dog」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "cat",
                "zh": "小貓",
                "emoji": "🎈",
                "correct": false
              },
              {
                "en": "rabbit",
                "zh": "小兔子",
                "emoji": "🌟",
                "correct": false
              },
              {
                "en": "two",
                "zh": "二",
                "emoji": "🐣",
                "correct": false
              },
              {
                "en": "dog",
                "zh": "小狗",
                "emoji": "🌱",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The cat is so cute.",
            "instruction": "請看中文重組成英文句子：「這隻貓咪真可愛。」",
            "targetTokens": [
              "The",
              "cat",
              "is",
              "so",
              "cute."
            ],
            "pool": [
              "The",
              "cat",
              "eight",
              "so",
              "is",
              "cute.",
              "father"
            ],
            "targetChinese": "這隻貓咪真可愛。",
            "targetSentence": "The cat is so cute."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "cat",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "hat (帽子)",
                "en": "hat",
                "zh": "帽子",
                "correct": false
              },
              {
                "text": "cat (小貓)",
                "en": "cat",
                "zh": "小貓",
                "correct": true
              },
              {
                "text": "dog (小狗)",
                "en": "dog",
                "zh": "小狗",
                "correct": false
              },
              {
                "text": "two (二)",
                "en": "two",
                "zh": "二",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "dog",
                "zh": "小狗"
              },
              {
                "en": "cat",
                "zh": "小貓"
              },
              {
                "en": "rabbit",
                "zh": "小兔子"
              },
              {
                "en": "bird",
                "zh": "小鳥"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l6",
        "title": "第 6 關：我的神奇玩具箱",
        "desc": "掌握 ball、car 等核心詞彙",
        "icon": "🧸",
        "vocabularies": [
          {
            "en": "ball",
            "zh": "球"
          },
          {
            "en": "car",
            "zh": "玩具車"
          },
          {
            "en": "robot",
            "zh": "機器人"
          },
          {
            "en": "doll",
            "zh": "洋娃娃"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「ball」的正確中文意思",
            "en": "ball",
            "audioText": "ball",
            "instruction": "請問「ball」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "car",
                "zh": "玩具車",
                "emoji": "🧸",
                "correct": false
              },
              {
                "en": "five",
                "zh": "五",
                "emoji": "🐶",
                "correct": false
              },
              {
                "en": "ball",
                "zh": "球",
                "emoji": "🎨",
                "correct": true
              },
              {
                "en": "robot",
                "zh": "機器人",
                "emoji": "🍀",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "I play with the ball.",
            "instruction": "請看中文重組成英文句子：「我玩這顆球。」",
            "targetTokens": [
              "I",
              "play",
              "with",
              "the",
              "ball."
            ],
            "pool": [
              "I",
              "five",
              "ball.",
              "blue",
              "with",
              "play",
              "the"
            ],
            "targetChinese": "我玩這顆球。",
            "targetSentence": "I play with the ball."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "car",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "ball (球)",
                "en": "ball",
                "zh": "球",
                "correct": false
              },
              {
                "text": "car (玩具車)",
                "en": "car",
                "zh": "玩具車",
                "correct": true
              },
              {
                "text": "red (紅色)",
                "en": "red",
                "zh": "紅色",
                "correct": false
              },
              {
                "text": "hat (帽子)",
                "en": "hat",
                "zh": "帽子",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "ball",
                "zh": "球"
              },
              {
                "en": "car",
                "zh": "玩具車"
              },
              {
                "en": "robot",
                "zh": "機器人"
              },
              {
                "en": "doll",
                "zh": "洋娃娃"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l7",
        "title": "第 7 關：教室文具小幫手",
        "desc": "掌握 pencil、book 等核心詞彙",
        "icon": "✏️",
        "vocabularies": [
          {
            "en": "pencil",
            "zh": "鉛筆"
          },
          {
            "en": "book",
            "zh": "課本"
          },
          {
            "en": "ruler",
            "zh": "尺"
          },
          {
            "en": "eraser",
            "zh": "橡皮擦"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「pencil」的正確中文意思",
            "en": "pencil",
            "audioText": "pencil",
            "instruction": "請問「pencil」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "ruler",
                "zh": "尺",
                "emoji": "🌟",
                "correct": false
              },
              {
                "en": "rabbit",
                "zh": "小兔子",
                "emoji": "🐣",
                "correct": false
              },
              {
                "en": "pencil",
                "zh": "鉛筆",
                "emoji": "🌱",
                "correct": true
              },
              {
                "en": "book",
                "zh": "課本",
                "emoji": "🎈",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "This is my pencil.",
            "instruction": "請看中文重組成英文句子：「這是我的鉛筆。」",
            "targetTokens": [
              "This",
              "is",
              "my",
              "pencil."
            ],
            "pool": [
              "big",
              "pencil.",
              "my",
              "This",
              "is",
              "run"
            ],
            "targetChinese": "這是我的鉛筆。",
            "targetSentence": "This is my pencil."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "book",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "star (星星)",
                "en": "star",
                "zh": "星星",
                "correct": false
              },
              {
                "text": "pencil (鉛筆)",
                "en": "pencil",
                "zh": "鉛筆",
                "correct": false
              },
              {
                "text": "doll (洋娃娃)",
                "en": "doll",
                "zh": "洋娃娃",
                "correct": false
              },
              {
                "text": "book (課本)",
                "en": "book",
                "zh": "課本",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "pencil",
                "zh": "鉛筆"
              },
              {
                "en": "book",
                "zh": "課本"
              },
              {
                "en": "ruler",
                "zh": "尺"
              },
              {
                "en": "eraser",
                "zh": "橡皮擦"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l8",
        "title": "第 8 關：早安晨間日常",
        "desc": "掌握 morning、sun 等核心詞彙",
        "icon": "☀️",
        "vocabularies": [
          {
            "en": "morning",
            "zh": "早晨"
          },
          {
            "en": "sun",
            "zh": "太陽"
          },
          {
            "en": "wake up",
            "zh": "醒來"
          },
          {
            "en": "breakfast",
            "zh": "早餐"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「morning」的正確中文意思",
            "en": "morning",
            "audioText": "morning",
            "instruction": "請問「morning」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "sun",
                "zh": "太陽",
                "emoji": "🧸",
                "correct": false
              },
              {
                "en": "morning",
                "zh": "早晨",
                "emoji": "🎨",
                "correct": true
              },
              {
                "en": "wake up",
                "zh": "醒來",
                "emoji": "🍀",
                "correct": false
              },
              {
                "en": "goodbye",
                "zh": "再見",
                "emoji": "🐶",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Good morning, sunshine!",
            "instruction": "請看中文重組成英文句子：「早安，陽光！」",
            "targetTokens": [
              "Good",
              "morning,",
              "sunshine!"
            ],
            "pool": [
              "hat",
              "sunshine!",
              "Good",
              "morning,",
              "five"
            ],
            "targetChinese": "早安，陽光！",
            "targetSentence": "Good morning, sunshine!"
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "sun",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "ten (十)",
                "en": "ten",
                "zh": "十",
                "correct": false
              },
              {
                "text": "sun (太陽)",
                "en": "sun",
                "zh": "太陽",
                "correct": true
              },
              {
                "text": "big (大的)",
                "en": "big",
                "zh": "大的",
                "correct": false
              },
              {
                "text": "morning (早晨)",
                "en": "morning",
                "zh": "早晨",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "morning",
                "zh": "早晨"
              },
              {
                "en": "sun",
                "zh": "太陽"
              },
              {
                "en": "wake up",
                "zh": "醒來"
              },
              {
                "en": "breakfast",
                "zh": "早餐"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l9",
        "title": "第 9 關：身體動一動",
        "desc": "掌握 eyes、ears 等核心詞彙",
        "icon": "👀",
        "vocabularies": [
          {
            "en": "eyes",
            "zh": "眼睛"
          },
          {
            "en": "ears",
            "zh": "耳朵"
          },
          {
            "en": "mouth",
            "zh": "嘴巴"
          },
          {
            "en": "nose",
            "zh": "鼻子"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「eyes」的正確中文意思",
            "en": "eyes",
            "audioText": "eyes",
            "instruction": "請問「eyes」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "mouth",
                "zh": "嘴巴",
                "emoji": "🌟",
                "correct": false
              },
              {
                "en": "five",
                "zh": "五",
                "emoji": "🐣",
                "correct": false
              },
              {
                "en": "ears",
                "zh": "耳朵",
                "emoji": "🎈",
                "correct": false
              },
              {
                "en": "eyes",
                "zh": "眼睛",
                "emoji": "🌱",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Touch your nose and eyes.",
            "instruction": "請看中文重組成英文句子：「摸摸你的鼻子和眼睛。」",
            "targetTokens": [
              "Touch",
              "your",
              "nose",
              "and",
              "eyes."
            ],
            "pool": [
              "your",
              "eyes.",
              "shirt",
              "Touch",
              "and",
              "fine",
              "nose"
            ],
            "targetChinese": "摸摸你的鼻子和眼睛。",
            "targetSentence": "Touch your nose and eyes."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "ears",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "eyes (眼睛)",
                "en": "eyes",
                "zh": "眼睛",
                "correct": false
              },
              {
                "text": "ears (耳朵)",
                "en": "ears",
                "zh": "耳朵",
                "correct": true
              },
              {
                "text": "blue (藍色)",
                "en": "blue",
                "zh": "藍色",
                "correct": false
              },
              {
                "text": "doll (洋娃娃)",
                "en": "doll",
                "zh": "洋娃娃",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "eyes",
                "zh": "眼睛"
              },
              {
                "en": "ears",
                "zh": "耳朵"
              },
              {
                "en": "mouth",
                "zh": "嘴巴"
              },
              {
                "en": "nose",
                "zh": "鼻子"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l10",
        "title": "第 10 關：水果點心攤",
        "desc": "掌握 apple、banana 等核心詞彙",
        "icon": "🍎",
        "vocabularies": [
          {
            "en": "apple",
            "zh": "蘋果"
          },
          {
            "en": "banana",
            "zh": "香蕉"
          },
          {
            "en": "orange",
            "zh": "柳橙"
          },
          {
            "en": "sweet",
            "zh": "甜的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「apple」的正確中文意思",
            "en": "apple",
            "audioText": "apple",
            "instruction": "請問「apple」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "banana",
                "zh": "香蕉",
                "emoji": "🧸",
                "correct": false
              },
              {
                "en": "apple",
                "zh": "蘋果",
                "emoji": "🎨",
                "correct": true
              },
              {
                "en": "eight",
                "zh": "八",
                "emoji": "🐶",
                "correct": false
              },
              {
                "en": "orange",
                "zh": "柳橙",
                "emoji": "🍀",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "I like sweet apples.",
            "instruction": "請看中文重組成英文句子：「我喜歡甜甜的蘋果。」",
            "targetTokens": [
              "I",
              "like",
              "sweet",
              "apples."
            ],
            "pool": [
              "I",
              "sweet",
              "green",
              "apples.",
              "one",
              "like"
            ],
            "targetChinese": "我喜歡甜甜的蘋果。",
            "targetSentence": "I like sweet apples."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "banana",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "yellow (黃色)",
                "en": "yellow",
                "zh": "黃色",
                "correct": false
              },
              {
                "text": "apple (蘋果)",
                "en": "apple",
                "zh": "蘋果",
                "correct": false
              },
              {
                "text": "circle (圓形)",
                "en": "circle",
                "zh": "圓形",
                "correct": false
              },
              {
                "text": "banana (香蕉)",
                "en": "banana",
                "zh": "香蕉",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "apple",
                "zh": "蘋果"
              },
              {
                "en": "banana",
                "zh": "香蕉"
              },
              {
                "en": "orange",
                "zh": "柳橙"
              },
              {
                "en": "sweet",
                "zh": "甜的"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l11",
        "title": "第 11 關：親愛的一家人",
        "desc": "掌握 father、mother 等核心詞彙",
        "icon": "👨‍👩‍👧",
        "vocabularies": [
          {
            "en": "father",
            "zh": "爸爸"
          },
          {
            "en": "mother",
            "zh": "媽媽"
          },
          {
            "en": "brother",
            "zh": "兄弟"
          },
          {
            "en": "sister",
            "zh": "姊妹"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「father」的正確中文意思",
            "en": "father",
            "audioText": "father",
            "instruction": "請問「father」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "brother",
                "zh": "兄弟",
                "emoji": "🌟",
                "correct": false
              },
              {
                "en": "yellow",
                "zh": "黃色",
                "emoji": "🐣",
                "correct": false
              },
              {
                "en": "father",
                "zh": "爸爸",
                "emoji": "🌱",
                "correct": true
              },
              {
                "en": "mother",
                "zh": "媽媽",
                "emoji": "🎈",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "I love my mother.",
            "instruction": "請看中文重組成英文句子：「我愛我的媽媽。」",
            "targetTokens": [
              "I",
              "love",
              "my",
              "mother."
            ],
            "pool": [
              "nine",
              "I",
              "mother.",
              "love",
              "robot",
              "my"
            ],
            "targetChinese": "我愛我的媽媽。",
            "targetSentence": "I love my mother."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "mother",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "eraser (橡皮擦)",
                "en": "eraser",
                "zh": "橡皮擦",
                "correct": false
              },
              {
                "text": "father (爸爸)",
                "en": "father",
                "zh": "爸爸",
                "correct": false
              },
              {
                "text": "friend (朋友)",
                "en": "friend",
                "zh": "朋友",
                "correct": false
              },
              {
                "text": "mother (媽媽)",
                "en": "mother",
                "zh": "媽媽",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "father",
                "zh": "爸爸"
              },
              {
                "en": "mother",
                "zh": "媽媽"
              },
              {
                "en": "brother",
                "zh": "兄弟"
              },
              {
                "en": "sister",
                "zh": "姊妹"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l12",
        "title": "第 12 關：漂亮衣物帽子",
        "desc": "掌握 hat、shirt 等核心詞彙",
        "icon": "🧢",
        "vocabularies": [
          {
            "en": "hat",
            "zh": "帽子"
          },
          {
            "en": "shirt",
            "zh": "襯衫"
          },
          {
            "en": "shoes",
            "zh": "鞋子"
          },
          {
            "en": "cap",
            "zh": "鴨舌帽"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「hat」的正確中文意思",
            "en": "hat",
            "audioText": "hat",
            "instruction": "請問「hat」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "shirt",
                "zh": "襯衫",
                "emoji": "🧸",
                "correct": false
              },
              {
                "en": "shoes",
                "zh": "鞋子",
                "emoji": "🍀",
                "correct": false
              },
              {
                "en": "hat",
                "zh": "帽子",
                "emoji": "🎨",
                "correct": true
              },
              {
                "en": "sun",
                "zh": "太陽",
                "emoji": "🐶",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Put on your cool cap.",
            "instruction": "請看中文重組成英文句子：「戴上你帥氣的帽子。」",
            "targetTokens": [
              "Put",
              "on",
              "your",
              "cool",
              "cap."
            ],
            "pool": [
              "sleep",
              "cool",
              "car",
              "cap.",
              "Put",
              "your",
              "on"
            ],
            "targetChinese": "戴上你帥氣的帽子。",
            "targetSentence": "Put on your cool cap."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "shirt",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "shirt (襯衫)",
                "en": "shirt",
                "zh": "襯衫",
                "correct": true
              },
              {
                "text": "smile (微笑)",
                "en": "smile",
                "zh": "微笑",
                "correct": false
              },
              {
                "text": "hat (帽子)",
                "en": "hat",
                "zh": "帽子",
                "correct": false
              },
              {
                "text": "eight (八)",
                "en": "eight",
                "zh": "八",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "hat",
                "zh": "帽子"
              },
              {
                "en": "shirt",
                "zh": "襯衫"
              },
              {
                "en": "shoes",
                "zh": "鞋子"
              },
              {
                "en": "cap",
                "zh": "鴨舌帽"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l13",
        "title": "第 13 關：形狀與大小",
        "desc": "掌握 big、small 等核心詞彙",
        "icon": "⭐",
        "vocabularies": [
          {
            "en": "big",
            "zh": "大的"
          },
          {
            "en": "small",
            "zh": "小的"
          },
          {
            "en": "star",
            "zh": "星星"
          },
          {
            "en": "circle",
            "zh": "圓形"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「big」的正確中文意思",
            "en": "big",
            "audioText": "big",
            "instruction": "請問「big」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "small",
                "zh": "小的",
                "emoji": "🎈",
                "correct": false
              },
              {
                "en": "ten",
                "zh": "十",
                "emoji": "🐣",
                "correct": false
              },
              {
                "en": "big",
                "zh": "大的",
                "emoji": "🌱",
                "correct": true
              },
              {
                "en": "star",
                "zh": "星星",
                "emoji": "🌟",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Look at the big star.",
            "instruction": "請看中文重組成英文句子：「看那顆大星星。」",
            "targetTokens": [
              "Look",
              "at",
              "the",
              "big",
              "star."
            ],
            "pool": [
              "cap",
              "Look",
              "star.",
              "big",
              "the",
              "ruler",
              "at"
            ],
            "targetChinese": "看那顆大星星。",
            "targetSentence": "Look at the big star."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "small",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "smile (微笑)",
                "en": "smile",
                "zh": "微笑",
                "correct": false
              },
              {
                "text": "apple (蘋果)",
                "en": "apple",
                "zh": "蘋果",
                "correct": false
              },
              {
                "text": "small (小的)",
                "en": "small",
                "zh": "小的",
                "correct": true
              },
              {
                "text": "big (大的)",
                "en": "big",
                "zh": "大的",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "big",
                "zh": "大的"
              },
              {
                "en": "small",
                "zh": "小的"
              },
              {
                "en": "star",
                "zh": "星星"
              },
              {
                "en": "circle",
                "zh": "圓形"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l14",
        "title": "第 14 關：活力日常動作",
        "desc": "掌握 jump、run 等核心詞彙",
        "icon": "🏃",
        "vocabularies": [
          {
            "en": "jump",
            "zh": "跳躍"
          },
          {
            "en": "run",
            "zh": "跑步"
          },
          {
            "en": "walk",
            "zh": "散步"
          },
          {
            "en": "sleep",
            "zh": "睡覺"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「jump」的正確中文意思",
            "en": "jump",
            "audioText": "jump",
            "instruction": "請問「jump」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "walk",
                "zh": "散步",
                "emoji": "🍀",
                "correct": false
              },
              {
                "en": "run",
                "zh": "跑步",
                "emoji": "🧸",
                "correct": false
              },
              {
                "en": "four",
                "zh": "四",
                "emoji": "🐶",
                "correct": false
              },
              {
                "en": "jump",
                "zh": "跳躍",
                "emoji": "🎨",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The boys run and jump.",
            "instruction": "請看中文重組成英文句子：「男孩們又跑又跳。」",
            "targetTokens": [
              "The",
              "boys",
              "run",
              "and",
              "jump."
            ],
            "pool": [
              "and",
              "run",
              "jump.",
              "The",
              "smile",
              "boys",
              "fine"
            ],
            "targetChinese": "男孩們又跑又跳。",
            "targetSentence": "The boys run and jump."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "run",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "jump (跳躍)",
                "en": "jump",
                "zh": "跳躍",
                "correct": false
              },
              {
                "text": "run (跑步)",
                "en": "run",
                "zh": "跑步",
                "correct": true
              },
              {
                "text": "hat (帽子)",
                "en": "hat",
                "zh": "帽子",
                "correct": false
              },
              {
                "text": "cap (鴨舌帽)",
                "en": "cap",
                "zh": "鴨舌帽",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "jump",
                "zh": "跳躍"
              },
              {
                "en": "run",
                "zh": "跑步"
              },
              {
                "en": "walk",
                "zh": "散步"
              },
              {
                "en": "sleep",
                "zh": "睡覺"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l15",
        "title": "第 15 關：心情大晴天",
        "desc": "掌握 happy、sad 等核心詞彙",
        "icon": "😄",
        "vocabularies": [
          {
            "en": "happy",
            "zh": "快樂的"
          },
          {
            "en": "sad",
            "zh": "難過的"
          },
          {
            "en": "fine",
            "zh": "安好的"
          },
          {
            "en": "tired",
            "zh": "疲倦的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「happy」的正確中文意思",
            "en": "happy",
            "audioText": "happy",
            "instruction": "請問「happy」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "sad",
                "zh": "難過的",
                "emoji": "🎈",
                "correct": false
              },
              {
                "en": "fine",
                "zh": "安好的",
                "emoji": "🌟",
                "correct": false
              },
              {
                "en": "smile",
                "zh": "微笑",
                "emoji": "🐣",
                "correct": false
              },
              {
                "en": "happy",
                "zh": "快樂的",
                "emoji": "🌱",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "I am very happy today.",
            "instruction": "請看中文重組成英文句子：「我今天非常開心。」",
            "targetTokens": [
              "I",
              "am",
              "very",
              "happy",
              "today."
            ],
            "pool": [
              "I",
              "today.",
              "four",
              "am",
              "happy",
              "sun",
              "very"
            ],
            "targetChinese": "我今天非常開心。",
            "targetSentence": "I am very happy today."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "sad",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "happy (快樂的)",
                "en": "happy",
                "zh": "快樂的",
                "correct": false
              },
              {
                "text": "cap (鴨舌帽)",
                "en": "cap",
                "zh": "鴨舌帽",
                "correct": false
              },
              {
                "text": "two (二)",
                "en": "two",
                "zh": "二",
                "correct": false
              },
              {
                "text": "sad (難過的)",
                "en": "sad",
                "zh": "難過的",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "happy",
                "zh": "快樂的"
              },
              {
                "en": "sad",
                "zh": "難過的"
              },
              {
                "en": "fine",
                "zh": "安好的"
              },
              {
                "en": "tired",
                "zh": "疲倦的"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_beg-l16",
        "title": "第 16 關：小學初級通關大魔王",
        "desc": "掌握 good morning、sweet apple 等核心詞彙",
        "icon": "👑",
        "vocabularies": [
          {
            "en": "good morning",
            "zh": "早安"
          },
          {
            "en": "sweet apple",
            "zh": "甜蘋果"
          },
          {
            "en": "two dogs",
            "zh": "兩隻狗"
          },
          {
            "en": "cool cap",
            "zh": "酷帽子"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「good morning」的正確中文意思",
            "en": "good morning",
            "audioText": "good morning",
            "instruction": "請問「good morning」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "two dogs",
                "zh": "兩隻狗",
                "emoji": "🍀",
                "correct": false
              },
              {
                "en": "sweet apple",
                "zh": "甜蘋果",
                "emoji": "🧸",
                "correct": false
              },
              {
                "en": "wake up",
                "zh": "醒來",
                "emoji": "🐶",
                "correct": false
              },
              {
                "en": "good morning",
                "zh": "早安",
                "emoji": "🎨",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Hello, I am happy today.",
            "instruction": "請看中文重組成英文句子：「哈囉，我今天很開心。」",
            "targetTokens": [
              "Hello,",
              "I",
              "am",
              "happy",
              "today."
            ],
            "pool": [
              "apple",
              "today.",
              "am",
              "happy",
              "Hello,",
              "I",
              "fine"
            ],
            "targetChinese": "哈囉，我今天很開心。",
            "targetSentence": "Hello, I am happy today."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "sweet apple",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "wake up (醒來)",
                "en": "wake up",
                "zh": "醒來",
                "correct": false
              },
              {
                "text": "good morning (早安)",
                "en": "good morning",
                "zh": "早安",
                "correct": false
              },
              {
                "text": "breakfast (早餐)",
                "en": "breakfast",
                "zh": "早餐",
                "correct": false
              },
              {
                "text": "sweet apple (甜蘋果)",
                "en": "sweet apple",
                "zh": "甜蘋果",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "good morning",
                "zh": "早安"
              },
              {
                "en": "sweet apple",
                "zh": "甜蘋果"
              },
              {
                "en": "two dogs",
                "zh": "兩隻狗"
              },
              {
                "en": "cool cap",
                "zh": "酷帽子"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "elem_mid",
    "category": "elementary",
    "categoryName": "小學階段",
    "categoryIcon": "🎒",
    "subLevel": "mid",
    "subLevelName": "小學・中級 (3-4年級)",
    "badge": "⭐ 探索階段",
    "desc": "校園生活、熱血棒球、超音速噴射機、恐龍、撞球神童與超跑",
    "cefr": "A1",
    "themeColor": "#0284c7",
    "colorClass": "u-plane",
    "lessons": [
      {
        "id": "elem_mid-l1",
        "title": "第 1 關：文具小幫手升級",
        "desc": "掌握 backpack、pencil 等核心詞彙",
        "icon": "🎒",
        "vocabularies": [
          {
            "en": "backpack",
            "zh": "背包"
          },
          {
            "en": "pencil",
            "zh": "鉛筆"
          },
          {
            "en": "eraser",
            "zh": "橡皮擦"
          },
          {
            "en": "ruler",
            "zh": "直尺"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「backpack」的正確中文意思",
            "en": "backpack",
            "audioText": "backpack",
            "instruction": "請問「backpack」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "eraser",
                "zh": "橡皮擦",
                "emoji": "🎱",
                "correct": false
              },
              {
                "en": "backpack",
                "zh": "背包",
                "emoji": "⚾",
                "correct": true
              },
              {
                "en": "pencil",
                "zh": "鉛筆",
                "emoji": "✈️",
                "correct": false
              },
              {
                "en": "dinosaur",
                "zh": "恐龍",
                "emoji": "🦖",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "This is my new backpack.",
            "instruction": "請看中文重組成英文句子：「這是我的新背包。」",
            "targetTokens": [
              "This",
              "is",
              "my",
              "new",
              "backpack."
            ],
            "pool": [
              "hungry",
              "backpack.",
              "is",
              "This",
              "new",
              "my",
              "breakfast"
            ],
            "targetChinese": "這是我的新背包。",
            "targetSentence": "This is my new backpack."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "pencil",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "strike (擊球)",
                "en": "strike",
                "zh": "擊球",
                "correct": false
              },
              {
                "text": "fossil (化石)",
                "en": "fossil",
                "zh": "化石",
                "correct": false
              },
              {
                "text": "backpack (背包)",
                "en": "backpack",
                "zh": "背包",
                "correct": false
              },
              {
                "text": "pencil (鉛筆)",
                "en": "pencil",
                "zh": "鉛筆",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "backpack",
                "zh": "背包"
              },
              {
                "en": "pencil",
                "zh": "鉛筆"
              },
              {
                "en": "eraser",
                "zh": "橡皮擦"
              },
              {
                "en": "ruler",
                "zh": "直尺"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l2",
        "title": "第 2 關：現在幾點鐘？",
        "desc": "掌握 o'clock、clock 等核心詞彙",
        "icon": "⏰",
        "vocabularies": [
          {
            "en": "o'clock",
            "zh": "...點鐘"
          },
          {
            "en": "clock",
            "zh": "時鐘"
          },
          {
            "en": "breakfast",
            "zh": "早餐"
          },
          {
            "en": "time",
            "zh": "時間"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「o'clock」的正確中文意思",
            "en": "o'clock",
            "audioText": "o'clock",
            "instruction": "請問「o'clock」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "o'clock",
                "zh": "...點鐘",
                "emoji": "🏎️",
                "correct": true
              },
              {
                "en": "clock",
                "zh": "時鐘",
                "emoji": "🚀",
                "correct": false
              },
              {
                "en": "behind",
                "zh": "在...後面",
                "emoji": "🤖",
                "correct": false
              },
              {
                "en": "breakfast",
                "zh": "早餐",
                "emoji": "🎒",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "What time is it now?",
            "instruction": "請看中文重組成英文句子：「現在幾點了？」",
            "targetTokens": [
              "What",
              "time",
              "is",
              "it",
              "now?"
            ],
            "pool": [
              "space",
              "is",
              "it",
              "What",
              "now?",
              "ruler",
              "time"
            ],
            "targetChinese": "現在幾點了？",
            "targetSentence": "What time is it now?"
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "clock",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "ruler (直尺)",
                "en": "ruler",
                "zh": "直尺",
                "correct": false
              },
              {
                "text": "o'clock (...點鐘)",
                "en": "o'clock",
                "zh": "...點鐘",
                "correct": false
              },
              {
                "text": "clock (時鐘)",
                "en": "clock",
                "zh": "時鐘",
                "correct": true
              },
              {
                "text": "sharp (鋒利的)",
                "en": "sharp",
                "zh": "鋒利的",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "o'clock",
                "zh": "...點鐘"
              },
              {
                "en": "clock",
                "zh": "時鐘"
              },
              {
                "en": "breakfast",
                "zh": "早餐"
              },
              {
                "en": "time",
                "zh": "時間"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l3",
        "title": "第 3 關：超音速噴射機出任務",
        "desc": "掌握 airplane、jet 等核心詞彙",
        "icon": "✈️",
        "vocabularies": [
          {
            "en": "airplane",
            "zh": "飛機"
          },
          {
            "en": "jet",
            "zh": "噴射機"
          },
          {
            "en": "pilot",
            "zh": "飛行員"
          },
          {
            "en": "airport",
            "zh": "機場"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「airplane」的正確中文意思",
            "en": "airplane",
            "audioText": "airplane",
            "instruction": "請問「airplane」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "backpack",
                "zh": "背包",
                "emoji": "🦖",
                "correct": false
              },
              {
                "en": "airplane",
                "zh": "飛機",
                "emoji": "⚾",
                "correct": true
              },
              {
                "en": "pilot",
                "zh": "飛行員",
                "emoji": "🎱",
                "correct": false
              },
              {
                "en": "jet",
                "zh": "噴射機",
                "emoji": "✈️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The pilot can fly the airplane.",
            "instruction": "請看中文重組成英文句子：「飛行員會開飛機。」",
            "targetTokens": [
              "The",
              "pilot",
              "can",
              "fly",
              "the",
              "airplane."
            ],
            "pool": [
              "ruler",
              "pilot",
              "can",
              "run",
              "fly",
              "the",
              "airplane.",
              "The"
            ],
            "targetChinese": "飛行員會開飛機。",
            "targetSentence": "The pilot can fly the airplane."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "jet",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "jet (噴射機)",
                "en": "jet",
                "zh": "噴射機",
                "correct": true
              },
              {
                "text": "in (在...裡面)",
                "en": "in",
                "zh": "在...裡面",
                "correct": false
              },
              {
                "text": "fast (快速的)",
                "en": "fast",
                "zh": "快速的",
                "correct": false
              },
              {
                "text": "airplane (飛機)",
                "en": "airplane",
                "zh": "飛機",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "airplane",
                "zh": "飛機"
              },
              {
                "en": "jet",
                "zh": "噴射機"
              },
              {
                "en": "pilot",
                "zh": "飛行員"
              },
              {
                "en": "airport",
                "zh": "機場"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l4",
        "title": "第 4 關：太空火箭發射升空",
        "desc": "掌握 rocket、space 等核心詞彙",
        "icon": "🚀",
        "vocabularies": [
          {
            "en": "rocket",
            "zh": "火箭"
          },
          {
            "en": "space",
            "zh": "太空"
          },
          {
            "en": "sky",
            "zh": "天空"
          },
          {
            "en": "fast",
            "zh": "快速的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「rocket」的正確中文意思",
            "en": "rocket",
            "audioText": "rocket",
            "instruction": "請問「rocket」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "space",
                "zh": "太空",
                "emoji": "🚀",
                "correct": false
              },
              {
                "en": "eraser",
                "zh": "橡皮擦",
                "emoji": "🤖",
                "correct": false
              },
              {
                "en": "rocket",
                "zh": "火箭",
                "emoji": "🏎️",
                "correct": true
              },
              {
                "en": "sky",
                "zh": "天空",
                "emoji": "🎒",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The rocket is flying to space.",
            "instruction": "請看中文重組成英文句子：「火箭正飛向太空。」",
            "targetTokens": [
              "The",
              "rocket",
              "is",
              "flying",
              "to",
              "space."
            ],
            "pool": [
              "flying",
              "angle",
              "rocket",
              "to",
              "cue",
              "is",
              "space.",
              "The"
            ],
            "targetChinese": "火箭正飛向太空。",
            "targetSentence": "The rocket is flying to space."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "space",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "rocket (火箭)",
                "en": "rocket",
                "zh": "火箭",
                "correct": false
              },
              {
                "text": "angle (角度)",
                "en": "angle",
                "zh": "角度",
                "correct": false
              },
              {
                "text": "ruler (直尺)",
                "en": "ruler",
                "zh": "直尺",
                "correct": false
              },
              {
                "text": "space (太空)",
                "en": "space",
                "zh": "太空",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "rocket",
                "zh": "火箭"
              },
              {
                "en": "space",
                "zh": "太空"
              },
              {
                "en": "sky",
                "zh": "天空"
              },
              {
                "en": "fast",
                "zh": "快速的"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l5",
        "title": "第 5 關：熱血棒球場擊球！",
        "desc": "掌握 baseball、bat 等核心詞彙",
        "icon": "⚾",
        "vocabularies": [
          {
            "en": "baseball",
            "zh": "棒球"
          },
          {
            "en": "bat",
            "zh": "球棒"
          },
          {
            "en": "glove",
            "zh": "手套"
          },
          {
            "en": "home run",
            "zh": "全壘打"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「baseball」的正確中文意思",
            "en": "baseball",
            "audioText": "baseball",
            "instruction": "請問「baseball」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "baseball",
                "zh": "棒球",
                "emoji": "⚾",
                "correct": true
              },
              {
                "en": "glove",
                "zh": "手套",
                "emoji": "🎱",
                "correct": false
              },
              {
                "en": "dinosaur",
                "zh": "恐龍",
                "emoji": "🦖",
                "correct": false
              },
              {
                "en": "bat",
                "zh": "球棒",
                "emoji": "✈️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "He hit a home run!",
            "instruction": "請看中文重組成英文句子：「他擊出了一支全壘打！」",
            "targetTokens": [
              "He",
              "hit",
              "a",
              "home",
              "run!"
            ],
            "pool": [
              "glove",
              "run!",
              "a",
              "home",
              "He",
              "corner",
              "hit"
            ],
            "targetChinese": "他擊出了一支全壘打！",
            "targetSentence": "He hit a home run!"
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "bat",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "baseball (棒球)",
                "en": "baseball",
                "zh": "棒球",
                "correct": false
              },
              {
                "text": "swim (游泳)",
                "en": "swim",
                "zh": "游泳",
                "correct": false
              },
              {
                "text": "bat (球棒)",
                "en": "bat",
                "zh": "球棒",
                "correct": true
              },
              {
                "text": "jet (噴射機)",
                "en": "jet",
                "zh": "噴射機",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "baseball",
                "zh": "棒球"
              },
              {
                "en": "bat",
                "zh": "球棒"
              },
              {
                "en": "glove",
                "zh": "手套"
              },
              {
                "en": "home run",
                "zh": "全壘打"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l6",
        "title": "第 6 關：王牌投手與接球",
        "desc": "掌握 pitcher、catch 等核心詞彙",
        "icon": "🧢",
        "vocabularies": [
          {
            "en": "pitcher",
            "zh": "投手"
          },
          {
            "en": "catch",
            "zh": "接球"
          },
          {
            "en": "stadium",
            "zh": "球場"
          },
          {
            "en": "ball",
            "zh": "球"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「pitcher」的正確中文意思",
            "en": "pitcher",
            "audioText": "pitcher",
            "instruction": "請問「pitcher」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "corner",
                "zh": "角落",
                "emoji": "🤖",
                "correct": false
              },
              {
                "en": "stadium",
                "zh": "球場",
                "emoji": "🎒",
                "correct": false
              },
              {
                "en": "pitcher",
                "zh": "投手",
                "emoji": "🏎️",
                "correct": true
              },
              {
                "en": "catch",
                "zh": "接球",
                "emoji": "🚀",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "I can catch the baseball.",
            "instruction": "請看中文重組成英文句子：「我接得到這顆棒球。」",
            "targetTokens": [
              "I",
              "can",
              "catch",
              "the",
              "baseball."
            ],
            "pool": [
              "I",
              "fast",
              "baseball.",
              "can",
              "breakfast",
              "the",
              "catch"
            ],
            "targetChinese": "我接得到這顆棒球。",
            "targetSentence": "I can catch the baseball."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "catch",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "catch (接球)",
                "en": "catch",
                "zh": "接球",
                "correct": true
              },
              {
                "text": "pitcher (投手)",
                "en": "pitcher",
                "zh": "投手",
                "correct": false
              },
              {
                "text": "teeth (牙齒)",
                "en": "teeth",
                "zh": "牙齒",
                "correct": false
              },
              {
                "text": "wheel (車輪)",
                "en": "wheel",
                "zh": "車輪",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "pitcher",
                "zh": "投手"
              },
              {
                "en": "catch",
                "zh": "接球"
              },
              {
                "en": "stadium",
                "zh": "球場"
              },
              {
                "en": "ball",
                "zh": "球"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l7",
        "title": "第 7 關：撞球神童精準推桿",
        "desc": "掌握 cue stick、billiard ball 等核心詞彙",
        "icon": "🎱",
        "vocabularies": [
          {
            "en": "cue stick",
            "zh": "撞球桿"
          },
          {
            "en": "billiard ball",
            "zh": "撞球"
          },
          {
            "en": "table",
            "zh": "球桌"
          },
          {
            "en": "strike",
            "zh": "擊球"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「cue stick」的正確中文意思",
            "en": "cue stick",
            "audioText": "cue stick",
            "instruction": "請問「cue stick」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "cue stick",
                "zh": "撞球桿",
                "emoji": "⚾",
                "correct": true
              },
              {
                "en": "billiard ball",
                "zh": "撞球",
                "emoji": "✈️",
                "correct": false
              },
              {
                "en": "sports car",
                "zh": "跑車",
                "emoji": "🦖",
                "correct": false
              },
              {
                "en": "table",
                "zh": "球桌",
                "emoji": "🎱",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Hold the cue stick firmly.",
            "instruction": "請看中文重組成英文句子：「握緊這支撞球桿。」",
            "targetTokens": [
              "Hold",
              "the",
              "cue",
              "stick",
              "firmly."
            ],
            "pool": [
              "Hold",
              "strike",
              "the",
              "stick",
              "firmly.",
              "cue",
              "french"
            ],
            "targetChinese": "握緊這支撞球桿。",
            "targetSentence": "Hold the cue stick firmly."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "billiard ball",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "billiard ball (撞球)",
                "en": "billiard ball",
                "zh": "撞球",
                "correct": true
              },
              {
                "text": "cue stick (撞球桿)",
                "en": "cue stick",
                "zh": "撞球桿",
                "correct": false
              },
              {
                "text": "french fries (薯條)",
                "en": "french fries",
                "zh": "薯條",
                "correct": false
              },
              {
                "text": "supersonic jet (超音速噴射機)",
                "en": "supersonic jet",
                "zh": "超音速噴射機",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "cue stick",
                "zh": "撞球桿"
              },
              {
                "en": "billiard ball",
                "zh": "撞球"
              },
              {
                "en": "table",
                "zh": "球桌"
              },
              {
                "en": "strike",
                "zh": "擊球"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l8",
        "title": "第 8 關：精準進球與角度幾何",
        "desc": "掌握 pocket、corner 等核心詞彙",
        "icon": "📐",
        "vocabularies": [
          {
            "en": "pocket",
            "zh": "球袋"
          },
          {
            "en": "corner",
            "zh": "角落"
          },
          {
            "en": "angle",
            "zh": "角度"
          },
          {
            "en": "shot",
            "zh": "出桿進球"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「pocket」的正確中文意思",
            "en": "pocket",
            "audioText": "pocket",
            "instruction": "請問「pocket」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "pencil",
                "zh": "鉛筆",
                "emoji": "🤖",
                "correct": false
              },
              {
                "en": "corner",
                "zh": "角落",
                "emoji": "🚀",
                "correct": false
              },
              {
                "en": "pocket",
                "zh": "球袋",
                "emoji": "🏎️",
                "correct": true
              },
              {
                "en": "angle",
                "zh": "角度",
                "emoji": "🎒",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Hit the ball into the pocket.",
            "instruction": "請看中文重組成英文句子：「把球打進球袋裡。」",
            "targetTokens": [
              "Hit",
              "the",
              "ball",
              "into",
              "the",
              "pocket."
            ],
            "pool": [
              "pencil",
              "into",
              "pocket.",
              "under",
              "the",
              "Hit",
              "ball",
              "the"
            ],
            "targetChinese": "把球打進球袋裡。",
            "targetSentence": "Hit the ball into the pocket."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "corner",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "giant (巨大的)",
                "en": "giant",
                "zh": "巨大的",
                "correct": false
              },
              {
                "text": "corner (角落)",
                "en": "corner",
                "zh": "角落",
                "correct": true
              },
              {
                "text": "pocket (球袋)",
                "en": "pocket",
                "zh": "球袋",
                "correct": false
              },
              {
                "text": "behind (在...後面)",
                "en": "behind",
                "zh": "在...後面",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "pocket",
                "zh": "球袋"
              },
              {
                "en": "corner",
                "zh": "角落"
              },
              {
                "en": "angle",
                "zh": "角度"
              },
              {
                "en": "shot",
                "zh": "出桿進球"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l9",
        "title": "第 9 關：侏儸紀霸王龍現身",
        "desc": "掌握 T-Rex、dinosaur 等核心詞彙",
        "icon": "🦖",
        "vocabularies": [
          {
            "en": "T-Rex",
            "zh": "霸王龍"
          },
          {
            "en": "dinosaur",
            "zh": "恐龍"
          },
          {
            "en": "teeth",
            "zh": "牙齒"
          },
          {
            "en": "sharp",
            "zh": "鋒利的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「T-Rex」的正確中文意思",
            "en": "T-Rex",
            "audioText": "T-Rex",
            "instruction": "請問「T-Rex」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "dinosaur",
                "zh": "恐龍",
                "emoji": "✈️",
                "correct": false
              },
              {
                "en": "teeth",
                "zh": "牙齒",
                "emoji": "🎱",
                "correct": false
              },
              {
                "en": "T-Rex",
                "zh": "霸王龍",
                "emoji": "⚾",
                "correct": true
              },
              {
                "en": "catch",
                "zh": "接球",
                "emoji": "🦖",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The T-Rex has sharp teeth.",
            "instruction": "請看中文重組成英文句子：「霸王龍有鋒利的牙齒。」",
            "targetTokens": [
              "The",
              "T-Rex",
              "has",
              "sharp",
              "teeth."
            ],
            "pool": [
              "jet",
              "teeth.",
              "T-Rex",
              "The",
              "sharp",
              "has",
              "french"
            ],
            "targetChinese": "霸王龍有鋒利的牙齒。",
            "targetSentence": "The T-Rex has sharp teeth."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "dinosaur",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "T-Rex (霸王龍)",
                "en": "T-Rex",
                "zh": "霸王龍",
                "correct": false
              },
              {
                "text": "hamburger (漢堡)",
                "en": "hamburger",
                "zh": "漢堡",
                "correct": false
              },
              {
                "text": "dinosaur (恐龍)",
                "en": "dinosaur",
                "zh": "恐龍",
                "correct": true
              },
              {
                "text": "airplane (飛機)",
                "en": "airplane",
                "zh": "飛機",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "T-Rex",
                "zh": "霸王龍"
              },
              {
                "en": "dinosaur",
                "zh": "恐龍"
              },
              {
                "en": "teeth",
                "zh": "牙齒"
              },
              {
                "en": "sharp",
                "zh": "鋒利的"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l10",
        "title": "第 10 關：恐龍巨型怒吼",
        "desc": "掌握 giant、roar 等核心詞彙",
        "icon": "🦕",
        "vocabularies": [
          {
            "en": "giant",
            "zh": "巨大的"
          },
          {
            "en": "roar",
            "zh": "咆哮怒吼"
          },
          {
            "en": "tail",
            "zh": "尾巴"
          },
          {
            "en": "fossil",
            "zh": "化石"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「giant」的正確中文意思",
            "en": "giant",
            "audioText": "giant",
            "instruction": "請問「giant」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "giant",
                "zh": "巨大的",
                "emoji": "🏎️",
                "correct": true
              },
              {
                "en": "tail",
                "zh": "尾巴",
                "emoji": "🎒",
                "correct": false
              },
              {
                "en": "catch",
                "zh": "接球",
                "emoji": "🤖",
                "correct": false
              },
              {
                "en": "roar",
                "zh": "咆哮怒吼",
                "emoji": "🚀",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The dinosaur has a long tail.",
            "instruction": "請看中文重組成英文句子：「恐龍有一條長尾巴。」",
            "targetTokens": [
              "The",
              "dinosaur",
              "has",
              "a",
              "long",
              "tail."
            ],
            "pool": [
              "a",
              "dinosaur",
              "long",
              "The",
              "has",
              "bat",
              "tail.",
              "table"
            ],
            "targetChinese": "恐龍有一條長尾巴。",
            "targetSentence": "The dinosaur has a long tail."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "roar",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "giant (巨大的)",
                "en": "giant",
                "zh": "巨大的",
                "correct": false
              },
              {
                "text": "shot (出桿進球)",
                "en": "shot",
                "zh": "出桿進球",
                "correct": false
              },
              {
                "text": "ball (球)",
                "en": "ball",
                "zh": "球",
                "correct": false
              },
              {
                "text": "roar (咆哮怒吼)",
                "en": "roar",
                "zh": "咆哮怒吼",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "giant",
                "zh": "巨大的"
              },
              {
                "en": "roar",
                "zh": "咆哮怒吼"
              },
              {
                "en": "tail",
                "zh": "尾巴"
              },
              {
                "en": "fossil",
                "zh": "化石"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l11",
        "title": "第 11 關：機械超跑極速狂飆",
        "desc": "掌握 sports car、engine 等核心詞彙",
        "icon": "🏎️",
        "vocabularies": [
          {
            "en": "sports car",
            "zh": "跑車"
          },
          {
            "en": "engine",
            "zh": "引擎"
          },
          {
            "en": "wheel",
            "zh": "車輪"
          },
          {
            "en": "speed",
            "zh": "速度"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「sports car」的正確中文意思",
            "en": "sports car",
            "audioText": "sports car",
            "instruction": "請問「sports car」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "engine",
                "zh": "引擎",
                "emoji": "✈️",
                "correct": false
              },
              {
                "en": "cue stick",
                "zh": "撞球桿",
                "emoji": "🦖",
                "correct": false
              },
              {
                "en": "sports car",
                "zh": "跑車",
                "emoji": "⚾",
                "correct": true
              },
              {
                "en": "wheel",
                "zh": "車輪",
                "emoji": "🎱",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The red sports car is super fast.",
            "instruction": "請看中文重組成英文句子：「這輛紅色跑車超級快。」",
            "targetTokens": [
              "The",
              "red",
              "sports",
              "car",
              "is",
              "super",
              "fast."
            ],
            "pool": [
              "is",
              "glove",
              "cue",
              "super",
              "red",
              "The",
              "sports",
              "fast.",
              "car"
            ],
            "targetChinese": "這輛紅色跑車超級快。",
            "targetSentence": "The red sports car is super fast."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "engine",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "corner (角落)",
                "en": "corner",
                "zh": "角落",
                "correct": false
              },
              {
                "text": "sports car (跑車)",
                "en": "sports car",
                "zh": "跑車",
                "correct": false
              },
              {
                "text": "pencil (鉛筆)",
                "en": "pencil",
                "zh": "鉛筆",
                "correct": false
              },
              {
                "text": "engine (引擎)",
                "en": "engine",
                "zh": "引擎",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "sports car",
                "zh": "跑車"
              },
              {
                "en": "engine",
                "zh": "引擎"
              },
              {
                "en": "wheel",
                "zh": "車輪"
              },
              {
                "en": "speed",
                "zh": "速度"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l12",
        "title": "第 12 關：變形機器人防護",
        "desc": "掌握 robot、transform 等核心詞彙",
        "icon": "🤖",
        "vocabularies": [
          {
            "en": "robot",
            "zh": "機器人"
          },
          {
            "en": "transform",
            "zh": "變形"
          },
          {
            "en": "helmet",
            "zh": "安全帽"
          },
          {
            "en": "strong",
            "zh": "強壯的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「robot」的正確中文意思",
            "en": "robot",
            "audioText": "robot",
            "instruction": "請問「robot」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "transform",
                "zh": "變形",
                "emoji": "🚀",
                "correct": false
              },
              {
                "en": "robot",
                "zh": "機器人",
                "emoji": "🏎️",
                "correct": true
              },
              {
                "en": "catch",
                "zh": "接球",
                "emoji": "🤖",
                "correct": false
              },
              {
                "en": "helmet",
                "zh": "安全帽",
                "emoji": "🎒",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The cool robot can transform.",
            "instruction": "請看中文重組成英文句子：「這個酷炫機器人可以變形。」",
            "targetTokens": [
              "The",
              "cool",
              "robot",
              "can",
              "transform."
            ],
            "pool": [
              "robot",
              "french",
              "pizza",
              "can",
              "cool",
              "transform.",
              "The"
            ],
            "targetChinese": "這個酷炫機器人可以變形。",
            "targetSentence": "The cool robot can transform."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "transform",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "transform (變形)",
                "en": "transform",
                "zh": "變形",
                "correct": true
              },
              {
                "text": "robot (機器人)",
                "en": "robot",
                "zh": "機器人",
                "correct": false
              },
              {
                "text": "hamburger (漢堡)",
                "en": "hamburger",
                "zh": "漢堡",
                "correct": false
              },
              {
                "text": "backpack (背包)",
                "en": "backpack",
                "zh": "背包",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "robot",
                "zh": "機器人"
              },
              {
                "en": "transform",
                "zh": "變形"
              },
              {
                "en": "helmet",
                "zh": "安全帽"
              },
              {
                "en": "strong",
                "zh": "強壯的"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l13",
        "title": "第 13 關：能量補給大漢堡",
        "desc": "掌握 hamburger、french fries 等核心詞彙",
        "icon": "🍔",
        "vocabularies": [
          {
            "en": "hamburger",
            "zh": "漢堡"
          },
          {
            "en": "french fries",
            "zh": "薯條"
          },
          {
            "en": "pizza",
            "zh": "披薩"
          },
          {
            "en": "hungry",
            "zh": "肚子餓的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「hamburger」的正確中文意思",
            "en": "hamburger",
            "audioText": "hamburger",
            "instruction": "請問「hamburger」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "french fries",
                "zh": "薯條",
                "emoji": "✈️",
                "correct": false
              },
              {
                "en": "pizza",
                "zh": "披薩",
                "emoji": "🎱",
                "correct": false
              },
              {
                "en": "hamburger",
                "zh": "漢堡",
                "emoji": "⚾",
                "correct": true
              },
              {
                "en": "transform",
                "zh": "變形",
                "emoji": "🦖",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "I want a big hamburger.",
            "instruction": "請看中文重組成英文句子：「我想要一個大漢堡。」",
            "targetTokens": [
              "I",
              "want",
              "a",
              "big",
              "hamburger."
            ],
            "pool": [
              "hamburger.",
              "I",
              "big",
              "want",
              "a",
              "stadium",
              "hungry"
            ],
            "targetChinese": "我想要一個大漢堡。",
            "targetSentence": "I want a big hamburger."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "french fries",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "billiard ball (撞球)",
                "en": "billiard ball",
                "zh": "撞球",
                "correct": false
              },
              {
                "text": "french fries (薯條)",
                "en": "french fries",
                "zh": "薯條",
                "correct": true
              },
              {
                "text": "hamburger (漢堡)",
                "en": "hamburger",
                "zh": "漢堡",
                "correct": false
              },
              {
                "text": "cue stick (撞球桿)",
                "en": "cue stick",
                "zh": "撞球桿",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "hamburger",
                "zh": "漢堡"
              },
              {
                "en": "french fries",
                "zh": "薯條"
              },
              {
                "en": "pizza",
                "zh": "披薩"
              },
              {
                "en": "hungry",
                "zh": "肚子餓的"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l14",
        "title": "第 14 關：秘密基地捉迷藏",
        "desc": "掌握 under、on 等核心詞彙",
        "icon": "🧭",
        "vocabularies": [
          {
            "en": "under",
            "zh": "在...下面"
          },
          {
            "en": "on",
            "zh": "在...上面"
          },
          {
            "en": "in",
            "zh": "在...裡面"
          },
          {
            "en": "behind",
            "zh": "在...後面"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「under」的正確中文意思",
            "en": "under",
            "audioText": "under",
            "instruction": "請問「under」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "under",
                "zh": "在...下面",
                "emoji": "🏎️",
                "correct": true
              },
              {
                "en": "robot",
                "zh": "機器人",
                "emoji": "🤖",
                "correct": false
              },
              {
                "en": "in",
                "zh": "在...裡面",
                "emoji": "🎒",
                "correct": false
              },
              {
                "en": "on",
                "zh": "在...上面",
                "emoji": "🚀",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The cat is under the chair.",
            "instruction": "請看中文重組成英文句子：「貓咪在椅子下面。」",
            "targetTokens": [
              "The",
              "cat",
              "is",
              "under",
              "the",
              "chair."
            ],
            "pool": [
              "under",
              "The",
              "the",
              "can",
              "is",
              "cat",
              "chair.",
              "eraser"
            ],
            "targetChinese": "貓咪在椅子下面。",
            "targetSentence": "The cat is under the chair."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "on",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "sky (天空)",
                "en": "sky",
                "zh": "天空",
                "correct": false
              },
              {
                "text": "on (在...上面)",
                "en": "on",
                "zh": "在...上面",
                "correct": true
              },
              {
                "text": "under (在...下面)",
                "en": "under",
                "zh": "在...下面",
                "correct": false
              },
              {
                "text": "can (能夠)",
                "en": "can",
                "zh": "能夠",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "under",
                "zh": "在...下面"
              },
              {
                "en": "on",
                "zh": "在...上面"
              },
              {
                "en": "in",
                "zh": "在...裡面"
              },
              {
                "en": "behind",
                "zh": "在...後面"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l15",
        "title": "第 15 關：極限滑板超能力",
        "desc": "掌握 ride a skateboard、swim 等核心詞彙",
        "icon": "🛹",
        "vocabularies": [
          {
            "en": "ride a skateboard",
            "zh": "溜滑板"
          },
          {
            "en": "swim",
            "zh": "游泳"
          },
          {
            "en": "can",
            "zh": "能夠"
          },
          {
            "en": "fast",
            "zh": "快速地"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「ride a skateboard」的正確中文意思",
            "en": "ride a skateboard",
            "audioText": "ride a skateboard",
            "instruction": "請問「ride a skateboard」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "supersonic jet",
                "zh": "超音速噴射機",
                "emoji": "✈️",
                "correct": false
              },
              {
                "en": "billiard ball",
                "zh": "撞球",
                "emoji": "🎱",
                "correct": false
              },
              {
                "en": "ride a skateboard",
                "zh": "溜滑板",
                "emoji": "⚾",
                "correct": true
              },
              {
                "en": "french fries",
                "zh": "薯條",
                "emoji": "🦖",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Can you ride a skateboard?",
            "instruction": "請看中文重組成英文句子：「你會溜滑板嗎？」",
            "targetTokens": [
              "Can",
              "you",
              "ride",
              "a",
              "skateboard?"
            ],
            "pool": [
              "Can",
              "ride",
              "skateboard?",
              "catch",
              "a",
              "engine",
              "you"
            ],
            "targetChinese": "你會溜滑板嗎？",
            "targetSentence": "Can you ride a skateboard?"
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "swim",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "swim (游泳)",
                "en": "swim",
                "zh": "游泳",
                "correct": true
              },
              {
                "text": "time (時間)",
                "en": "time",
                "zh": "時間",
                "correct": false
              },
              {
                "text": "ball (球)",
                "en": "ball",
                "zh": "球",
                "correct": false
              },
              {
                "text": "ride a skateboard (溜滑板)",
                "en": "ride a skateboard",
                "zh": "溜滑板",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "ride a skateboard",
                "zh": "溜滑板"
              },
              {
                "en": "swim",
                "zh": "游泳"
              },
              {
                "en": "can",
                "zh": "能夠"
              },
              {
                "en": "fast",
                "zh": "快速地"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_mid-l16",
        "title": "第 16 關：四年級熱血大魔王",
        "desc": "掌握 home run、supersonic jet 等核心詞彙",
        "icon": "👑",
        "vocabularies": [
          {
            "en": "home run",
            "zh": "全壘打"
          },
          {
            "en": "supersonic jet",
            "zh": "超音速噴射機"
          },
          {
            "en": "cue stick",
            "zh": "撞球桿"
          },
          {
            "en": "T-Rex",
            "zh": "暴龍"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「home run」的正確中文意思",
            "en": "home run",
            "audioText": "home run",
            "instruction": "請問「home run」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "home run",
                "zh": "全壘打",
                "emoji": "🏎️",
                "correct": true
              },
              {
                "en": "sports car",
                "zh": "跑車",
                "emoji": "🤖",
                "correct": false
              },
              {
                "en": "supersonic jet",
                "zh": "超音速噴射機",
                "emoji": "🚀",
                "correct": false
              },
              {
                "en": "cue stick",
                "zh": "撞球桿",
                "emoji": "🎒",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The pilot loves to play baseball.",
            "instruction": "請看中文重組成英文句子：「這位飛行員很喜歡打棒球。」",
            "targetTokens": [
              "The",
              "pilot",
              "loves",
              "to",
              "play",
              "baseball."
            ],
            "pool": [
              "loves",
              "rocket",
              "to",
              "play",
              "baseball.",
              "roar",
              "pilot",
              "The"
            ],
            "targetChinese": "這位飛行員很喜歡打棒球。",
            "targetSentence": "The pilot loves to play baseball."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "supersonic jet",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "billiard ball (撞球)",
                "en": "billiard ball",
                "zh": "撞球",
                "correct": false
              },
              {
                "text": "french fries (薯條)",
                "en": "french fries",
                "zh": "薯條",
                "correct": false
              },
              {
                "text": "home run (全壘打)",
                "en": "home run",
                "zh": "全壘打",
                "correct": false
              },
              {
                "text": "supersonic jet (超音速噴射機)",
                "en": "supersonic jet",
                "zh": "超音速噴射機",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "home run",
                "zh": "全壘打"
              },
              {
                "en": "supersonic jet",
                "zh": "超音速噴射機"
              },
              {
                "en": "cue stick",
                "zh": "撞球桿"
              },
              {
                "en": "T-Rex",
                "zh": "暴龍"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "elem_adv",
    "category": "elementary",
    "categoryName": "小學階段",
    "categoryIcon": "🎒",
    "subLevel": "adv",
    "subLevelName": "小學・高級 (5-6年級)",
    "badge": "🔥 進階階段",
    "desc": "現在進行式、過去式初探、形容詞比較級、星期月份與世界觀",
    "cefr": "A1+",
    "themeColor": "#8b5cf6",
    "colorClass": "u-supercar",
    "lessons": [
      {
        "id": "elem_adv-l1",
        "title": "第 1 關：正在做什麼？現在進行式",
        "desc": "掌握 playing soccer、doing 等核心詞彙",
        "icon": "⚽",
        "vocabularies": [
          {
            "en": "playing soccer",
            "zh": "正在踢足球"
          },
          {
            "en": "doing",
            "zh": "正在做"
          },
          {
            "en": "watching",
            "zh": "正在觀看"
          },
          {
            "en": "now",
            "zh": "現在"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「playing soccer」的正確中文意思",
            "en": "playing soccer",
            "audioText": "playing soccer",
            "instruction": "請問「playing soccer」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "playing soccer",
                "zh": "正在踢足球",
                "emoji": "🔥",
                "correct": true
              },
              {
                "en": "turn right",
                "zh": "右轉",
                "emoji": "🛸",
                "correct": false
              },
              {
                "en": "doing",
                "zh": "正在做",
                "emoji": "🏆",
                "correct": false
              },
              {
                "en": "watching",
                "zh": "正在觀看",
                "emoji": "🌍",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "What are you doing right now?",
            "instruction": "請看中文重組成英文句子：「你現在正在做什麼？」",
            "targetTokens": [
              "What",
              "are",
              "you",
              "doing",
              "right",
              "now?"
            ],
            "pool": [
              "you",
              "What",
              "right",
              "are",
              "camera",
              "doing",
              "straight",
              "now?"
            ],
            "targetChinese": "你現在正在做什麼？",
            "targetSentence": "What are you doing right now?"
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "doing",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "clean (乾淨的)",
                "en": "clean",
                "zh": "乾淨的",
                "correct": false
              },
              {
                "text": "doing (正在做)",
                "en": "doing",
                "zh": "正在做",
                "correct": true
              },
              {
                "text": "playing soccer (正在踢足球)",
                "en": "playing soccer",
                "zh": "正在踢足球",
                "correct": false
              },
              {
                "text": "cheer (歡呼喝采)",
                "en": "cheer",
                "zh": "歡呼喝采",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "playing soccer",
                "zh": "正在踢足球"
              },
              {
                "en": "doing",
                "zh": "正在做"
              },
              {
                "en": "watching",
                "zh": "正在觀看"
              },
              {
                "en": "now",
                "zh": "現在"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l2",
        "title": "第 2 關：昨天去了哪裡？過去式初探",
        "desc": "掌握 went、saw 等核心詞彙",
        "icon": "🏞️",
        "vocabularies": [
          {
            "en": "went",
            "zh": "去(過去式)"
          },
          {
            "en": "saw",
            "zh": "看見(過去式)"
          },
          {
            "en": "played",
            "zh": "玩耍(過去式)"
          },
          {
            "en": "yesterday",
            "zh": "昨天"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「went」的正確中文意思",
            "en": "went",
            "audioText": "went",
            "instruction": "請問「went」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "saw",
                "zh": "看見(過去式)",
                "emoji": "⚡",
                "correct": false
              },
              {
                "en": "played",
                "zh": "玩耍(過去式)",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "spin",
                "zh": "球旋轉",
                "emoji": "🧭",
                "correct": false
              },
              {
                "en": "went",
                "zh": "去(過去式)",
                "emoji": "🏅",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "We went to the park yesterday.",
            "instruction": "請看中文重組成英文句子：「我們昨天去了公園。」",
            "targetTokens": [
              "We",
              "went",
              "to",
              "the",
              "park",
              "yesterday."
            ],
            "pool": [
              "park",
              "to",
              "went",
              "yesterday.",
              "flight",
              "We",
              "the",
              "order"
            ],
            "targetChinese": "我們昨天去了公園。",
            "targetSentence": "We went to the park yesterday."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "saw",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "went (去(過去式))",
                "en": "went",
                "zh": "去(過去式)",
                "correct": false
              },
              {
                "text": "saw (看見(過去式))",
                "en": "saw",
                "zh": "看見(過去式)",
                "correct": true
              },
              {
                "text": "team (隊伍)",
                "en": "team",
                "zh": "隊伍",
                "correct": false
              },
              {
                "text": "menu (菜單)",
                "en": "menu",
                "zh": "菜單",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "went",
                "zh": "去(過去式)"
              },
              {
                "en": "saw",
                "zh": "看見(過去式)"
              },
              {
                "en": "played",
                "zh": "玩耍(過去式)"
              },
              {
                "en": "yesterday",
                "zh": "昨天"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l3",
        "title": "第 3 關：速度與力量：比較級大比拼",
        "desc": "掌握 faster、taller 等核心詞彙",
        "icon": "⚡",
        "vocabularies": [
          {
            "en": "faster",
            "zh": "更快的"
          },
          {
            "en": "taller",
            "zh": "更高的"
          },
          {
            "en": "stronger",
            "zh": "更強壯的"
          },
          {
            "en": "than",
            "zh": "比..."
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「faster」的正確中文意思",
            "en": "faster",
            "audioText": "faster",
            "instruction": "請問「faster」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "stronger",
                "zh": "更強壯的",
                "emoji": "🌍",
                "correct": false
              },
              {
                "en": "faster",
                "zh": "更快的",
                "emoji": "🔥",
                "correct": true
              },
              {
                "en": "taller",
                "zh": "更高的",
                "emoji": "🏆",
                "correct": false
              },
              {
                "en": "Monday",
                "zh": "星期一",
                "emoji": "🛸",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The jet is faster than a car.",
            "instruction": "請看中文重組成英文句子：「噴射機比汽車更快。」",
            "targetTokens": [
              "The",
              "jet",
              "is",
              "faster",
              "than",
              "a",
              "car."
            ],
            "pool": [
              "a",
              "faster",
              "went",
              "car.",
              "than",
              "The",
              "is",
              "jet",
              "sunny"
            ],
            "targetChinese": "噴射機比汽車更快。",
            "targetSentence": "The jet is faster than a car."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "taller",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "faster (更快的)",
                "en": "faster",
                "zh": "更快的",
                "correct": false
              },
              {
                "text": "doctor (醫生)",
                "en": "doctor",
                "zh": "醫生",
                "correct": false
              },
              {
                "text": "museum (博物館)",
                "en": "museum",
                "zh": "博物館",
                "correct": false
              },
              {
                "text": "taller (更高的)",
                "en": "taller",
                "zh": "更高的",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "faster",
                "zh": "更快的"
              },
              {
                "en": "taller",
                "zh": "更高的"
              },
              {
                "en": "stronger",
                "zh": "更強壯的"
              },
              {
                "en": "than",
                "zh": "比..."
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l4",
        "title": "第 4 關：一年四季與天氣晴雨",
        "desc": "掌握 sunny、rainy 等核心詞彙",
        "icon": "🌦️",
        "vocabularies": [
          {
            "en": "sunny",
            "zh": "晴朗的"
          },
          {
            "en": "rainy",
            "zh": "下雨的"
          },
          {
            "en": "winter",
            "zh": "冬天"
          },
          {
            "en": "summer",
            "zh": "夏天"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「sunny」的正確中文意思",
            "en": "sunny",
            "audioText": "sunny",
            "instruction": "請問「sunny」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "winter",
                "zh": "冬天",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "sunny",
                "zh": "晴朗的",
                "emoji": "🏅",
                "correct": true
              },
              {
                "en": "rainy",
                "zh": "下雨的",
                "emoji": "⚡",
                "correct": false
              },
              {
                "en": "earth",
                "zh": "地球",
                "emoji": "🧭",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "It is sunny and warm today.",
            "instruction": "請看中文重組成英文句子：「今天天氣晴朗又溫暖。」",
            "targetTokens": [
              "It",
              "is",
              "sunny",
              "and",
              "warm",
              "today."
            ],
            "pool": [
              "is",
              "today.",
              "sunny",
              "It",
              "warm",
              "dessert",
              "drone",
              "and"
            ],
            "targetChinese": "今天天氣晴朗又溫暖。",
            "targetSentence": "It is sunny and warm today."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "rainy",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "sunny (晴朗的)",
                "en": "sunny",
                "zh": "晴朗的",
                "correct": false
              },
              {
                "text": "score (得分)",
                "en": "score",
                "zh": "得分",
                "correct": false
              },
              {
                "text": "order (點餐)",
                "en": "order",
                "zh": "點餐",
                "correct": false
              },
              {
                "text": "rainy (下雨的)",
                "en": "rainy",
                "zh": "下雨的",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "sunny",
                "zh": "晴朗的"
              },
              {
                "en": "rainy",
                "zh": "下雨的"
              },
              {
                "en": "winter",
                "zh": "冬天"
              },
              {
                "en": "summer",
                "zh": "夏天"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l5",
        "title": "第 5 關：行事曆與一週規劃",
        "desc": "掌握 Monday、Friday 等核心詞彙",
        "icon": "📅",
        "vocabularies": [
          {
            "en": "Monday",
            "zh": "星期一"
          },
          {
            "en": "Friday",
            "zh": "星期五"
          },
          {
            "en": "weekend",
            "zh": "週末"
          },
          {
            "en": "schedule",
            "zh": "行程表"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「Monday」的正確中文意思",
            "en": "Monday",
            "audioText": "Monday",
            "instruction": "請問「Monday」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "Friday",
                "zh": "星期五",
                "emoji": "🏆",
                "correct": false
              },
              {
                "en": "winter",
                "zh": "冬天",
                "emoji": "🛸",
                "correct": false
              },
              {
                "en": "Monday",
                "zh": "星期一",
                "emoji": "🔥",
                "correct": true
              },
              {
                "en": "weekend",
                "zh": "週末",
                "emoji": "🌍",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "We play baseball on the weekend.",
            "instruction": "請看中文重組成英文句子：「我們週末會打棒球。」",
            "targetTokens": [
              "We",
              "play",
              "baseball",
              "on",
              "the",
              "weekend."
            ],
            "pool": [
              "weekend.",
              "the",
              "We",
              "play",
              "spin",
              "on",
              "astronaut",
              "baseball"
            ],
            "targetChinese": "我們週末會打棒球。",
            "targetSentence": "We play baseball on the weekend."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "Friday",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "Friday (星期五)",
                "en": "Friday",
                "zh": "星期五",
                "correct": true
              },
              {
                "text": "Monday (星期一)",
                "en": "Monday",
                "zh": "星期一",
                "correct": false
              },
              {
                "text": "played (玩耍(過去式))",
                "en": "played",
                "zh": "玩耍(過去式)",
                "correct": false
              },
              {
                "text": "target (目標)",
                "en": "target",
                "zh": "目標",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "Monday",
                "zh": "星期一"
              },
              {
                "en": "Friday",
                "zh": "星期五"
              },
              {
                "en": "weekend",
                "zh": "週末"
              },
              {
                "en": "schedule",
                "zh": "行程表"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l6",
        "title": "第 6 關：世界地圖與熱門城市",
        "desc": "掌握 Taiwan、Japan 等核心詞彙",
        "icon": "🗺️",
        "vocabularies": [
          {
            "en": "Taiwan",
            "zh": "臺灣"
          },
          {
            "en": "Japan",
            "zh": "日本"
          },
          {
            "en": "America",
            "zh": "美國"
          },
          {
            "en": "travel",
            "zh": "旅行"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「Taiwan」的正確中文意思",
            "en": "Taiwan",
            "audioText": "Taiwan",
            "instruction": "請問「Taiwan」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "doctor",
                "zh": "醫生",
                "emoji": "🧭",
                "correct": false
              },
              {
                "en": "Japan",
                "zh": "日本",
                "emoji": "⚡",
                "correct": false
              },
              {
                "en": "America",
                "zh": "美國",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "Taiwan",
                "zh": "臺灣",
                "emoji": "🏅",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "I want to travel around the world.",
            "instruction": "請看中文重組成英文句子：「我想要環遊世界。」",
            "targetTokens": [
              "I",
              "want",
              "to",
              "travel",
              "around",
              "the",
              "world."
            ],
            "pool": [
              "around",
              "flight",
              "world.",
              "I",
              "the",
              "to",
              "travel",
              "want",
              "scientist"
            ],
            "targetChinese": "我想要環遊世界。",
            "targetSentence": "I want to travel around the world."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "Japan",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "Taiwan (臺灣)",
                "en": "Taiwan",
                "zh": "臺灣",
                "correct": false
              },
              {
                "text": "sunny (晴朗的)",
                "en": "sunny",
                "zh": "晴朗的",
                "correct": false
              },
              {
                "text": "Japan (日本)",
                "en": "Japan",
                "zh": "日本",
                "correct": true
              },
              {
                "text": "doing (正在做)",
                "en": "doing",
                "zh": "正在做",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "Taiwan",
                "zh": "臺灣"
              },
              {
                "en": "Japan",
                "zh": "日本"
              },
              {
                "en": "America",
                "zh": "美國"
              },
              {
                "en": "travel",
                "zh": "旅行"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l7",
        "title": "第 7 關：少棒聯盟冠軍錦標賽",
        "desc": "掌握 championship、trophy 等核心詞彙",
        "icon": "🏆",
        "vocabularies": [
          {
            "en": "championship",
            "zh": "錦標賽"
          },
          {
            "en": "trophy",
            "zh": "獎盃"
          },
          {
            "en": "team",
            "zh": "隊伍"
          },
          {
            "en": "cheer",
            "zh": "歡呼喝采"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「championship」的正確中文意思",
            "en": "championship",
            "audioText": "championship",
            "instruction": "請問「championship」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "team",
                "zh": "隊伍",
                "emoji": "🌍",
                "correct": false
              },
              {
                "en": "championship",
                "zh": "錦標賽",
                "emoji": "🔥",
                "correct": true
              },
              {
                "en": "controller",
                "zh": "遙控器",
                "emoji": "🛸",
                "correct": false
              },
              {
                "en": "trophy",
                "zh": "獎盃",
                "emoji": "🏆",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Our team won the championship trophy.",
            "instruction": "請看中文重組成英文句子：「我們球隊贏得了冠軍獎盃。」",
            "targetTokens": [
              "Our",
              "team",
              "won",
              "the",
              "championship",
              "trophy."
            ],
            "pool": [
              "trophy.",
              "Our",
              "championship",
              "yesterday",
              "summer",
              "won",
              "team",
              "the"
            ],
            "targetChinese": "我們球隊贏得了冠軍獎盃。",
            "targetSentence": "Our team won the championship trophy."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "trophy",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "trophy (獎盃)",
                "en": "trophy",
                "zh": "獎盃",
                "correct": true
              },
              {
                "text": "faster (更快的)",
                "en": "faster",
                "zh": "更快的",
                "correct": false
              },
              {
                "text": "championship (錦標賽)",
                "en": "championship",
                "zh": "錦標賽",
                "correct": false
              },
              {
                "text": "corner (轉角處)",
                "en": "corner",
                "zh": "轉角處",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "championship",
                "zh": "錦標賽"
              },
              {
                "en": "trophy",
                "zh": "獎盃"
              },
              {
                "en": "team",
                "zh": "隊伍"
              },
              {
                "en": "cheer",
                "zh": "歡呼喝采"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l8",
        "title": "第 8 關：國際航線客機飛行",
        "desc": "掌握 flight、passenger 等核心詞彙",
        "icon": "🛫",
        "vocabularies": [
          {
            "en": "flight",
            "zh": "班機"
          },
          {
            "en": "passenger",
            "zh": "乘客"
          },
          {
            "en": "overseas",
            "zh": "海外的"
          },
          {
            "en": "airline",
            "zh": "航空公司"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「flight」的正確中文意思",
            "en": "flight",
            "audioText": "flight",
            "instruction": "請問「flight」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "flight",
                "zh": "班機",
                "emoji": "🏅",
                "correct": true
              },
              {
                "en": "corner",
                "zh": "轉角處",
                "emoji": "🧭",
                "correct": false
              },
              {
                "en": "passenger",
                "zh": "乘客",
                "emoji": "⚡",
                "correct": false
              },
              {
                "en": "overseas",
                "zh": "海外的",
                "emoji": "🎯",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The international flight was very smooth.",
            "instruction": "請看中文重組成英文句子：「這趟國際航班飛行非常平穩。」",
            "targetTokens": [
              "The",
              "international",
              "flight",
              "was",
              "very",
              "smooth."
            ],
            "pool": [
              "championship",
              "international",
              "was",
              "flight",
              "museum",
              "very",
              "smooth.",
              "The"
            ],
            "targetChinese": "這趟國際航班飛行非常平穩。",
            "targetSentence": "The international flight was very smooth."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "passenger",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "passenger (乘客)",
                "en": "passenger",
                "zh": "乘客",
                "correct": true
              },
              {
                "text": "yesterday (昨天)",
                "en": "yesterday",
                "zh": "昨天",
                "correct": false
              },
              {
                "text": "astronaut (太空人)",
                "en": "astronaut",
                "zh": "太空人",
                "correct": false
              },
              {
                "text": "flight (班機)",
                "en": "flight",
                "zh": "班機",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "flight",
                "zh": "班機"
              },
              {
                "en": "passenger",
                "zh": "乘客"
              },
              {
                "en": "overseas",
                "zh": "海外的"
              },
              {
                "en": "airline",
                "zh": "航空公司"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l9",
        "title": "第 9 關：撞球競賽顆星解球",
        "desc": "掌握 cushion、spin 等核心詞彙",
        "icon": "🎱",
        "vocabularies": [
          {
            "en": "cushion",
            "zh": "顆星邊欄"
          },
          {
            "en": "spin",
            "zh": "球旋轉"
          },
          {
            "en": "target",
            "zh": "目標"
          },
          {
            "en": "score",
            "zh": "得分"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「cushion」的正確中文意思",
            "en": "cushion",
            "audioText": "cushion",
            "instruction": "請問「cushion」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "cushion",
                "zh": "顆星邊欄",
                "emoji": "🔥",
                "correct": true
              },
              {
                "en": "spin",
                "zh": "球旋轉",
                "emoji": "🏆",
                "correct": false
              },
              {
                "en": "target",
                "zh": "目標",
                "emoji": "🌍",
                "correct": false
              },
              {
                "en": "weekend",
                "zh": "週末",
                "emoji": "🛸",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Use the cushion to hit the ball.",
            "instruction": "請看中文重組成英文句子：「利用球檯邊框顆星來擊球。」",
            "targetTokens": [
              "Use",
              "the",
              "cushion",
              "to",
              "hit",
              "the",
              "ball."
            ],
            "pool": [
              "the",
              "to",
              "cushion",
              "hit",
              "left",
              "yesterday",
              "the",
              "Use",
              "ball."
            ],
            "targetChinese": "利用球檯邊框顆星來擊球。",
            "targetSentence": "Use the cushion to hit the ball."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "spin",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "team (隊伍)",
                "en": "team",
                "zh": "隊伍",
                "correct": false
              },
              {
                "text": "cushion (顆星邊欄)",
                "en": "cushion",
                "zh": "顆星邊欄",
                "correct": false
              },
              {
                "text": "clean (乾淨的)",
                "en": "clean",
                "zh": "乾淨的",
                "correct": false
              },
              {
                "text": "spin (球旋轉)",
                "en": "spin",
                "zh": "球旋轉",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "cushion",
                "zh": "顆星邊欄"
              },
              {
                "en": "spin",
                "zh": "球旋轉"
              },
              {
                "en": "target",
                "zh": "目標"
              },
              {
                "en": "score",
                "zh": "得分"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l10",
        "title": "第 10 關：自然史博物館探險",
        "desc": "掌握 museum、ancient 等核心詞彙",
        "icon": "🏛️",
        "vocabularies": [
          {
            "en": "museum",
            "zh": "博物館"
          },
          {
            "en": "ancient",
            "zh": "古老的"
          },
          {
            "en": "bones",
            "zh": "骨骼骨頭"
          },
          {
            "en": "history",
            "zh": "歷史"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「museum」的正確中文意思",
            "en": "museum",
            "audioText": "museum",
            "instruction": "請問「museum」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "bones",
                "zh": "骨骼骨頭",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "museum",
                "zh": "博物館",
                "emoji": "🏅",
                "correct": true
              },
              {
                "en": "ancient",
                "zh": "古老的",
                "emoji": "⚡",
                "correct": false
              },
              {
                "en": "Monday",
                "zh": "星期一",
                "emoji": "🧭",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "We visited the natural history museum.",
            "instruction": "請看中文重組成英文句子：「我們參觀了自然史博物館。」",
            "targetTokens": [
              "We",
              "visited",
              "the",
              "natural",
              "history",
              "museum."
            ],
            "pool": [
              "museum.",
              "natural",
              "went",
              "the",
              "altitude",
              "history",
              "We",
              "visited"
            ],
            "targetChinese": "我們參觀了自然史博物館。",
            "targetSentence": "We visited the natural history museum."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "ancient",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "airline (航空公司)",
                "en": "airline",
                "zh": "航空公司",
                "correct": false
              },
              {
                "text": "played (玩耍(過去式))",
                "en": "played",
                "zh": "玩耍(過去式)",
                "correct": false
              },
              {
                "text": "museum (博物館)",
                "en": "museum",
                "zh": "博物館",
                "correct": false
              },
              {
                "text": "ancient (古老的)",
                "en": "ancient",
                "zh": "古老的",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "museum",
                "zh": "博物館"
              },
              {
                "en": "ancient",
                "zh": "古老的"
              },
              {
                "en": "bones",
                "zh": "骨骼骨頭"
              },
              {
                "en": "history",
                "zh": "歷史"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l11",
        "title": "第 11 關：操縱空拍無人機",
        "desc": "掌握 drone、camera 等核心詞彙",
        "icon": "🛸",
        "vocabularies": [
          {
            "en": "drone",
            "zh": "無人機"
          },
          {
            "en": "camera",
            "zh": "相機"
          },
          {
            "en": "controller",
            "zh": "遙控器"
          },
          {
            "en": "altitude",
            "zh": "高度"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「drone」的正確中文意思",
            "en": "drone",
            "audioText": "drone",
            "instruction": "請問「drone」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "camera",
                "zh": "相機",
                "emoji": "🏆",
                "correct": false
              },
              {
                "en": "score",
                "zh": "得分",
                "emoji": "🛸",
                "correct": false
              },
              {
                "en": "controller",
                "zh": "遙控器",
                "emoji": "🌍",
                "correct": false
              },
              {
                "en": "drone",
                "zh": "無人機",
                "emoji": "🔥",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The drone has a 4K camera.",
            "instruction": "請看中文重組成英文句子：「這架無人機配備了4K相機。」",
            "targetTokens": [
              "The",
              "drone",
              "has",
              "a",
              "4K",
              "camera."
            ],
            "pool": [
              "4K",
              "has",
              "The",
              "a",
              "drone",
              "travel",
              "left",
              "camera."
            ],
            "targetChinese": "這架無人機配備了4K相機。",
            "targetSentence": "The drone has a 4K camera."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "camera",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "drone (無人機)",
                "en": "drone",
                "zh": "無人機",
                "correct": false
              },
              {
                "text": "corner (轉角處)",
                "en": "corner",
                "zh": "轉角處",
                "correct": false
              },
              {
                "text": "camera (相機)",
                "en": "camera",
                "zh": "相機",
                "correct": true
              },
              {
                "text": "faster (更快的)",
                "en": "faster",
                "zh": "更快的",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "drone",
                "zh": "無人機"
              },
              {
                "en": "camera",
                "zh": "相機"
              },
              {
                "en": "controller",
                "zh": "遙控器"
              },
              {
                "en": "altitude",
                "zh": "高度"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l12",
        "title": "第 12 關：西餐廳點餐好禮貌",
        "desc": "掌握 menu、order 等核心詞彙",
        "icon": "🍽️",
        "vocabularies": [
          {
            "en": "menu",
            "zh": "菜單"
          },
          {
            "en": "order",
            "zh": "點餐"
          },
          {
            "en": "delicious",
            "zh": "美味的"
          },
          {
            "en": "dessert",
            "zh": "甜點"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「menu」的正確中文意思",
            "en": "menu",
            "audioText": "menu",
            "instruction": "請問「menu」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "menu",
                "zh": "菜單",
                "emoji": "🏅",
                "correct": true
              },
              {
                "en": "order",
                "zh": "點餐",
                "emoji": "⚡",
                "correct": false
              },
              {
                "en": "went",
                "zh": "去(過去式)",
                "emoji": "🧭",
                "correct": false
              },
              {
                "en": "delicious",
                "zh": "美味的",
                "emoji": "🎯",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Would you like some dessert?",
            "instruction": "請看中文重組成英文句子：「你想要來點甜點嗎？」",
            "targetTokens": [
              "Would",
              "you",
              "like",
              "some",
              "dessert?"
            ],
            "pool": [
              "some",
              "score",
              "Would",
              "like",
              "dessert?",
              "clean",
              "you"
            ],
            "targetChinese": "你想要來點甜點嗎？",
            "targetSentence": "Would you like some dessert?"
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "order",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "cheer (歡呼喝采)",
                "en": "cheer",
                "zh": "歡呼喝采",
                "correct": false
              },
              {
                "text": "order (點餐)",
                "en": "order",
                "zh": "點餐",
                "correct": true
              },
              {
                "text": "menu (菜單)",
                "en": "menu",
                "zh": "菜單",
                "correct": false
              },
              {
                "text": "sunny (晴朗的)",
                "en": "sunny",
                "zh": "晴朗的",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "menu",
                "zh": "菜單"
              },
              {
                "en": "order",
                "zh": "點餐"
              },
              {
                "en": "delicious",
                "zh": "美味的"
              },
              {
                "en": "dessert",
                "zh": "甜點"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l13",
        "title": "第 13 關：守護地球環保小尖兵",
        "desc": "掌握 recycle、protect 等核心詞彙",
        "icon": "🌍",
        "vocabularies": [
          {
            "en": "recycle",
            "zh": "回收"
          },
          {
            "en": "protect",
            "zh": "保護"
          },
          {
            "en": "earth",
            "zh": "地球"
          },
          {
            "en": "clean",
            "zh": "乾淨的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「recycle」的正確中文意思",
            "en": "recycle",
            "audioText": "recycle",
            "instruction": "請問「recycle」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "earth",
                "zh": "地球",
                "emoji": "🌍",
                "correct": false
              },
              {
                "en": "cushion",
                "zh": "顆星邊欄",
                "emoji": "🛸",
                "correct": false
              },
              {
                "en": "protect",
                "zh": "保護",
                "emoji": "🏆",
                "correct": false
              },
              {
                "en": "recycle",
                "zh": "回收",
                "emoji": "🔥",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "We must protect our earth.",
            "instruction": "請看中文重組成英文句子：「我們必須保護我們的地球。」",
            "targetTokens": [
              "We",
              "must",
              "protect",
              "our",
              "earth."
            ],
            "pool": [
              "taller",
              "protect",
              "earth.",
              "weekend",
              "our",
              "must",
              "We"
            ],
            "targetChinese": "我們必須保護我們的地球。",
            "targetSentence": "We must protect our earth."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "protect",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "America (美國)",
                "en": "America",
                "zh": "美國",
                "correct": false
              },
              {
                "text": "ancient (古老的)",
                "en": "ancient",
                "zh": "古老的",
                "correct": false
              },
              {
                "text": "recycle (回收)",
                "en": "recycle",
                "zh": "回收",
                "correct": false
              },
              {
                "text": "protect (保護)",
                "en": "protect",
                "zh": "保護",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "recycle",
                "zh": "回收"
              },
              {
                "en": "protect",
                "zh": "保護"
              },
              {
                "en": "earth",
                "zh": "地球"
              },
              {
                "en": "clean",
                "zh": "乾淨的"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l14",
        "title": "第 14 關：街角問路與方向指引",
        "desc": "掌握 turn left、turn right 等核心詞彙",
        "icon": "🚦",
        "vocabularies": [
          {
            "en": "turn left",
            "zh": "左轉"
          },
          {
            "en": "turn right",
            "zh": "右轉"
          },
          {
            "en": "straight",
            "zh": "筆直地"
          },
          {
            "en": "corner",
            "zh": "轉角處"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「turn left」的正確中文意思",
            "en": "turn left",
            "audioText": "turn left",
            "instruction": "請問「turn left」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "playing soccer",
                "zh": "正在踢足球",
                "emoji": "🧭",
                "correct": false
              },
              {
                "en": "turn left",
                "zh": "左轉",
                "emoji": "🏅",
                "correct": true
              },
              {
                "en": "straight",
                "zh": "筆直地",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "turn right",
                "zh": "右轉",
                "emoji": "⚡",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Go straight and turn left.",
            "instruction": "請看中文重組成英文句子：「直直走然後左轉。」",
            "targetTokens": [
              "Go",
              "straight",
              "and",
              "turn",
              "left."
            ],
            "pool": [
              "controller",
              "Go",
              "left.",
              "and",
              "turn",
              "straight",
              "earth"
            ],
            "targetChinese": "直直走然後左轉。",
            "targetSentence": "Go straight and turn left."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "turn right",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "turn left (左轉)",
                "en": "turn left",
                "zh": "左轉",
                "correct": false
              },
              {
                "text": "turn right (右轉)",
                "en": "turn right",
                "zh": "右轉",
                "correct": true
              },
              {
                "text": "playing soccer (正在踢足球)",
                "en": "playing soccer",
                "zh": "正在踢足球",
                "correct": false
              },
              {
                "text": "controller (遙控器)",
                "en": "controller",
                "zh": "遙控器",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "turn left",
                "zh": "左轉"
              },
              {
                "en": "turn right",
                "zh": "右轉"
              },
              {
                "en": "straight",
                "zh": "筆直地"
              },
              {
                "en": "corner",
                "zh": "轉角處"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l15",
        "title": "第 15 關：未來夢想大職業",
        "desc": "掌握 scientist、astronaut 等核心詞彙",
        "icon": "👨‍🚀",
        "vocabularies": [
          {
            "en": "scientist",
            "zh": "科學家"
          },
          {
            "en": "astronaut",
            "zh": "太空人"
          },
          {
            "en": "engineer",
            "zh": "工程師"
          },
          {
            "en": "doctor",
            "zh": "醫生"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「scientist」的正確中文意思",
            "en": "scientist",
            "audioText": "scientist",
            "instruction": "請問「scientist」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "engineer",
                "zh": "工程師",
                "emoji": "🌍",
                "correct": false
              },
              {
                "en": "astronaut",
                "zh": "太空人",
                "emoji": "🏆",
                "correct": false
              },
              {
                "en": "passenger",
                "zh": "乘客",
                "emoji": "🛸",
                "correct": false
              },
              {
                "en": "scientist",
                "zh": "科學家",
                "emoji": "🔥",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "He wants to become an astronaut.",
            "instruction": "請看中文重組成英文句子：「他想要成為一名太空人。」",
            "targetTokens": [
              "He",
              "wants",
              "to",
              "become",
              "an",
              "astronaut."
            ],
            "pool": [
              "wants",
              "an",
              "doctor",
              "become",
              "astronaut.",
              "rainy",
              "He",
              "to"
            ],
            "targetChinese": "他想要成為一名太空人。",
            "targetSentence": "He wants to become an astronaut."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "astronaut",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "passenger (乘客)",
                "en": "passenger",
                "zh": "乘客",
                "correct": false
              },
              {
                "text": "yesterday (昨天)",
                "en": "yesterday",
                "zh": "昨天",
                "correct": false
              },
              {
                "text": "astronaut (太空人)",
                "en": "astronaut",
                "zh": "太空人",
                "correct": true
              },
              {
                "text": "scientist (科學家)",
                "en": "scientist",
                "zh": "科學家",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "scientist",
                "zh": "科學家"
              },
              {
                "en": "astronaut",
                "zh": "太空人"
              },
              {
                "en": "engineer",
                "zh": "工程師"
              },
              {
                "en": "doctor",
                "zh": "醫生"
              }
            ]
          }
        ]
      },
      {
        "id": "elem_adv-l16",
        "title": "第 16 關：小學畢業榮譽總試煉",
        "desc": "掌握 championship、astronaut 等核心詞彙",
        "icon": "🎓",
        "vocabularies": [
          {
            "en": "championship",
            "zh": "冠軍錦標"
          },
          {
            "en": "astronaut",
            "zh": "太空人"
          },
          {
            "en": "drone",
            "zh": "無人機"
          },
          {
            "en": "yesterday",
            "zh": "昨天"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「championship」的正確中文意思",
            "en": "championship",
            "audioText": "championship",
            "instruction": "請問「championship」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "delicious",
                "zh": "美味的",
                "emoji": "🧭",
                "correct": false
              },
              {
                "en": "drone",
                "zh": "無人機",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "astronaut",
                "zh": "太空人",
                "emoji": "⚡",
                "correct": false
              },
              {
                "en": "championship",
                "zh": "冠軍錦標",
                "emoji": "🏅",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Yesterday, our team won the game.",
            "instruction": "請看中文重組成英文句子：「昨天，我們球隊贏得了比賽。」",
            "targetTokens": [
              "Yesterday,",
              "our",
              "team",
              "won",
              "the",
              "game."
            ],
            "pool": [
              "our",
              "Friday",
              "game.",
              "team",
              "Yesterday,",
              "won",
              "right",
              "the"
            ],
            "targetChinese": "昨天，我們球隊贏得了比賽。",
            "targetSentence": "Yesterday, our team won the game."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "astronaut",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "scientist (科學家)",
                "en": "scientist",
                "zh": "科學家",
                "correct": false
              },
              {
                "text": "astronaut (太空人)",
                "en": "astronaut",
                "zh": "太空人",
                "correct": true
              },
              {
                "text": "championship (冠軍錦標)",
                "en": "championship",
                "zh": "冠軍錦標",
                "correct": false
              },
              {
                "text": "passenger (乘客)",
                "en": "passenger",
                "zh": "乘客",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "championship",
                "zh": "冠軍錦標"
              },
              {
                "en": "astronaut",
                "zh": "太空人"
              },
              {
                "en": "drone",
                "zh": "無人機"
              },
              {
                "en": "yesterday",
                "zh": "昨天"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "jh_beg",
    "category": "junior",
    "categoryName": "國中階段",
    "categoryIcon": "🏫",
    "subLevel": "beg",
    "subLevelName": "國中・初級 (國一)",
    "badge": "⚡ 扎實打底",
    "desc": "國中核心1200單、頻率副詞、各類疑問詞、學校科目與團隊精神",
    "cefr": "A2-",
    "themeColor": "#0d9488",
    "colorClass": "u-pool",
    "lessons": [
      {
        "id": "jh_beg-l1",
        "title": "第 1 關：國中必背動詞與時態",
        "desc": "掌握 practice、improve 等核心詞彙",
        "icon": "📖",
        "vocabularies": [
          {
            "en": "practice",
            "zh": "練習"
          },
          {
            "en": "improve",
            "zh": "進步改善"
          },
          {
            "en": "remember",
            "zh": "記得"
          },
          {
            "en": "forget",
            "zh": "忘記"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「practice」的正確中文意思",
            "en": "practice",
            "audioText": "practice",
            "instruction": "請問「practice」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "improve",
                "zh": "進步改善",
                "emoji": "⚡",
                "correct": false
              },
              {
                "en": "remember",
                "zh": "記得",
                "emoji": "🏫",
                "correct": false
              },
              {
                "en": "practice",
                "zh": "練習",
                "emoji": "📘",
                "correct": true
              },
              {
                "en": "cheering",
                "zh": "歡呼中",
                "emoji": "⚾",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Practice makes perfect every day.",
            "instruction": "請看中文重組成英文句子：「每天練習才能熟能生巧。」",
            "targetTokens": [
              "Practice",
              "makes",
              "perfect",
              "every",
              "day."
            ],
            "pool": [
              "day.",
              "victory",
              "Practice",
              "perfect",
              "usually",
              "every",
              "makes"
            ],
            "targetChinese": "每天練習才能熟能生巧。",
            "targetSentence": "Practice makes perfect every day."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "improve",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "climate (氣候)",
                "en": "climate",
                "zh": "氣候",
                "correct": false
              },
              {
                "text": "practice (練習)",
                "en": "practice",
                "zh": "練習",
                "correct": false
              },
              {
                "text": "improve (進步改善)",
                "en": "improve",
                "zh": "進步改善",
                "correct": true
              },
              {
                "text": "library (圖書館)",
                "en": "library",
                "zh": "圖書館",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "practice",
                "zh": "練習"
              },
              {
                "en": "improve",
                "zh": "進步改善"
              },
              {
                "en": "remember",
                "zh": "記得"
              },
              {
                "en": "forget",
                "zh": "忘記"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l2",
        "title": "第 2 關：頻率副詞百寶箱",
        "desc": "掌握 always、usually 等核心詞彙",
        "icon": "📊",
        "vocabularies": [
          {
            "en": "always",
            "zh": "總是"
          },
          {
            "en": "usually",
            "zh": "通常"
          },
          {
            "en": "often",
            "zh": "經常"
          },
          {
            "en": "never",
            "zh": "從不"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「always」的正確中文意思",
            "en": "always",
            "audioText": "always",
            "instruction": "請問「always」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "always",
                "zh": "總是",
                "emoji": "✈️",
                "correct": true
              },
              {
                "en": "often",
                "zh": "經常",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "invite",
                "zh": "邀請",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "usually",
                "zh": "通常",
                "emoji": "🔬",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "He always practices baseball after school.",
            "instruction": "請看中文重組成英文句子：「他放學後總是練習棒球。」",
            "targetTokens": [
              "He",
              "always",
              "practices",
              "baseball",
              "after",
              "school."
            ],
            "pool": [
              "practices",
              "twice",
              "He",
              "school.",
              "always",
              "baseball",
              "decline",
              "after"
            ],
            "targetChinese": "他放學後總是練習棒球。",
            "targetSentence": "He always practices baseball after school."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "usually",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "usually (通常)",
                "en": "usually",
                "zh": "通常",
                "correct": true
              },
              {
                "text": "climate (氣候)",
                "en": "climate",
                "zh": "氣候",
                "correct": false
              },
              {
                "text": "always (總是)",
                "en": "always",
                "zh": "總是",
                "correct": false
              },
              {
                "text": "library (圖書館)",
                "en": "library",
                "zh": "圖書館",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "always",
                "zh": "總是"
              },
              {
                "en": "usually",
                "zh": "通常"
              },
              {
                "en": "often",
                "zh": "經常"
              },
              {
                "en": "never",
                "zh": "從不"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l3",
        "title": "第 3 關：學校科目大挑戰",
        "desc": "掌握 mathematics、science 等核心詞彙",
        "icon": "📐",
        "vocabularies": [
          {
            "en": "mathematics",
            "zh": "數學"
          },
          {
            "en": "science",
            "zh": "自然科學"
          },
          {
            "en": "history",
            "zh": "歷史"
          },
          {
            "en": "geography",
            "zh": "地理"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「mathematics」的正確中文意思",
            "en": "mathematics",
            "audioText": "mathematics",
            "instruction": "請問「mathematics」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "mathematics",
                "zh": "數學",
                "emoji": "📘",
                "correct": true
              },
              {
                "en": "history",
                "zh": "歷史",
                "emoji": "🏫",
                "correct": false
              },
              {
                "en": "science",
                "zh": "自然科學",
                "emoji": "⚡",
                "correct": false
              },
              {
                "en": "application",
                "zh": "應用程式",
                "emoji": "⚾",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Science is my favorite subject.",
            "instruction": "請看中文重組成英文句子：「自然科學是我最喜歡的科目。」",
            "targetTokens": [
              "Science",
              "is",
              "my",
              "favorite",
              "subject."
            ],
            "pool": [
              "subject.",
              "Science",
              "is",
              "favorite",
              "my",
              "friction",
              "unforgettable"
            ],
            "targetChinese": "自然科學是我最喜歡的科目。",
            "targetSentence": "Science is my favorite subject."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "science",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "victory (勝利)",
                "en": "victory",
                "zh": "勝利",
                "correct": false
              },
              {
                "text": "mathematics (數學)",
                "en": "mathematics",
                "zh": "數學",
                "correct": false
              },
              {
                "text": "science (自然科學)",
                "en": "science",
                "zh": "自然科學",
                "correct": true
              },
              {
                "text": "library (圖書館)",
                "en": "library",
                "zh": "圖書館",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "mathematics",
                "zh": "數學"
              },
              {
                "en": "science",
                "zh": "自然科學"
              },
              {
                "en": "history",
                "zh": "歷史"
              },
              {
                "en": "geography",
                "zh": "地理"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l4",
        "title": "第 4 關：詢問頻率與次數",
        "desc": "掌握 how often、once 等核心詞彙",
        "icon": "🔄",
        "vocabularies": [
          {
            "en": "how often",
            "zh": "多久一次"
          },
          {
            "en": "once",
            "zh": "一次"
          },
          {
            "en": "twice",
            "zh": "兩次"
          },
          {
            "en": "seldom",
            "zh": "很少"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「how often」的正確中文意思",
            "en": "how often",
            "audioText": "how often",
            "instruction": "請問「how often」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "twice",
                "zh": "兩次",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "how often",
                "zh": "多久一次",
                "emoji": "✈️",
                "correct": true
              },
              {
                "en": "relay race",
                "zh": "接力賽",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "once",
                "zh": "一次",
                "emoji": "🔬",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "How often do you go swimming?",
            "instruction": "請看中文重組成英文句子：「你多常去游泳？」",
            "targetTokens": [
              "How",
              "often",
              "do",
              "you",
              "go",
              "swimming?"
            ],
            "pool": [
              "swimming?",
              "do",
              "you",
              "friction",
              "go",
              "often",
              "How",
              "decline"
            ],
            "targetChinese": "你多常去游泳？",
            "targetSentence": "How often do you go swimming?"
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "once",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "diary (日記)",
                "en": "diary",
                "zh": "日記",
                "correct": false
              },
              {
                "text": "once (一次)",
                "en": "once",
                "zh": "一次",
                "correct": true
              },
              {
                "text": "how often (多久一次)",
                "en": "how often",
                "zh": "多久一次",
                "correct": false
              },
              {
                "text": "lift (升力)",
                "en": "lift",
                "zh": "升力",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "how often",
                "zh": "多久一次"
              },
              {
                "en": "once",
                "zh": "一次"
              },
              {
                "en": "twice",
                "zh": "兩次"
              },
              {
                "en": "seldom",
                "zh": "很少"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l5",
        "title": "第 5 關：六大疑問詞全方位",
        "desc": "掌握 who、what 等核心詞彙",
        "icon": "❓",
        "vocabularies": [
          {
            "en": "who",
            "zh": "誰"
          },
          {
            "en": "what",
            "zh": "什麼"
          },
          {
            "en": "where",
            "zh": "在哪"
          },
          {
            "en": "why",
            "zh": "為什麼"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「who」的正確中文意思",
            "en": "who",
            "audioText": "who",
            "instruction": "請問「who」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "where",
                "zh": "在哪",
                "emoji": "🏫",
                "correct": false
              },
              {
                "en": "who",
                "zh": "誰",
                "emoji": "📘",
                "correct": true
              },
              {
                "en": "what",
                "zh": "什麼",
                "emoji": "⚡",
                "correct": false
              },
              {
                "en": "at",
                "zh": "在...時間點",
                "emoji": "⚾",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Why did you choose this airplane?",
            "instruction": "請看中文重組成英文句子：「你為什麼選擇這架飛機？」",
            "targetTokens": [
              "Why",
              "did",
              "you",
              "choose",
              "this",
              "airplane?"
            ],
            "pool": [
              "you",
              "Why",
              "library",
              "strategy",
              "this",
              "choose",
              "did",
              "airplane?"
            ],
            "targetChinese": "你為什麼選擇這架飛機？",
            "targetSentence": "Why did you choose this airplane?"
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "what",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "once (一次)",
                "en": "once",
                "zh": "一次",
                "correct": false
              },
              {
                "text": "lift (升力)",
                "en": "lift",
                "zh": "升力",
                "correct": false
              },
              {
                "text": "what (什麼)",
                "en": "what",
                "zh": "什麼",
                "correct": true
              },
              {
                "text": "who (誰)",
                "en": "who",
                "zh": "誰",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "who",
                "zh": "誰"
              },
              {
                "en": "what",
                "zh": "什麼"
              },
              {
                "en": "where",
                "zh": "在哪"
              },
              {
                "en": "why",
                "zh": "為什麼"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l6",
        "title": "第 6 關：時間地點介系詞精熟",
        "desc": "掌握 at、on 等核心詞彙",
        "icon": "📍",
        "vocabularies": [
          {
            "en": "at",
            "zh": "在...時間點"
          },
          {
            "en": "on",
            "zh": "在...日子"
          },
          {
            "en": "in",
            "zh": "在...月份年份"
          },
          {
            "en": "during",
            "zh": "在...期間"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「at」的正確中文意思",
            "en": "at",
            "audioText": "at",
            "instruction": "請問「at」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "on",
                "zh": "在...日子",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "who",
                "zh": "誰",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "in",
                "zh": "在...月份年份",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "at",
                "zh": "在...時間點",
                "emoji": "✈️",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "We meet at seven on Sunday.",
            "instruction": "請看中文重組成英文句子：「我們星期天七點見面。」",
            "targetTokens": [
              "We",
              "meet",
              "at",
              "seven",
              "on",
              "Sunday."
            ],
            "pool": [
              "on",
              "unforgettable",
              "forget",
              "at",
              "meet",
              "seven",
              "Sunday.",
              "We"
            ],
            "targetChinese": "我們星期天七點見面。",
            "targetSentence": "We meet at seven on Sunday."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "on",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "why (為什麼)",
                "en": "why",
                "zh": "為什麼",
                "correct": false
              },
              {
                "text": "who (誰)",
                "en": "who",
                "zh": "誰",
                "correct": false
              },
              {
                "text": "on (在...日子)",
                "en": "on",
                "zh": "在...日子",
                "correct": true
              },
              {
                "text": "at (在...時間點)",
                "en": "at",
                "zh": "在...時間點",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "at",
                "zh": "在...時間點"
              },
              {
                "en": "on",
                "zh": "在...日子"
              },
              {
                "en": "in",
                "zh": "在...月份年份"
              },
              {
                "en": "during",
                "zh": "在...期間"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l7",
        "title": "第 7 關：棒球校隊團隊默契",
        "desc": "掌握 teamwork、coach 等核心詞彙",
        "icon": "🤝",
        "vocabularies": [
          {
            "en": "teamwork",
            "zh": "團隊合作"
          },
          {
            "en": "coach",
            "zh": "教練"
          },
          {
            "en": "strategy",
            "zh": "策略"
          },
          {
            "en": "victory",
            "zh": "勝利"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「teamwork」的正確中文意思",
            "en": "teamwork",
            "audioText": "teamwork",
            "instruction": "請問「teamwork」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "friction",
                "zh": "摩擦力",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "teamwork",
                "zh": "團隊合作",
                "emoji": "📘",
                "correct": true
              },
              {
                "en": "coach",
                "zh": "教練",
                "emoji": "⚡",
                "correct": false
              },
              {
                "en": "strategy",
                "zh": "策略",
                "emoji": "🏫",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Teamwork leads us to victory.",
            "instruction": "請看中文重組成英文句子：「團隊合作引領我們走向勝利。」",
            "targetTokens": [
              "Teamwork",
              "leads",
              "us",
              "to",
              "victory."
            ],
            "pool": [
              "Teamwork",
              "to",
              "athlete",
              "forget",
              "leads",
              "victory.",
              "us"
            ],
            "targetChinese": "團隊合作引領我們走向勝利。",
            "targetSentence": "Teamwork leads us to victory."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "coach",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "teamwork (團隊合作)",
                "en": "teamwork",
                "zh": "團隊合作",
                "correct": false
              },
              {
                "text": "twice (兩次)",
                "en": "twice",
                "zh": "兩次",
                "correct": false
              },
              {
                "text": "coach (教練)",
                "en": "coach",
                "zh": "教練",
                "correct": true
              },
              {
                "text": "often (經常)",
                "en": "often",
                "zh": "經常",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "teamwork",
                "zh": "團隊合作"
              },
              {
                "en": "coach",
                "zh": "教練"
              },
              {
                "en": "strategy",
                "zh": "策略"
              },
              {
                "en": "victory",
                "zh": "勝利"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l8",
        "title": "第 8 關：航空基本原理：升力推力",
        "desc": "掌握 lift、thrust 等核心詞彙",
        "icon": "🛩️",
        "vocabularies": [
          {
            "en": "lift",
            "zh": "升力"
          },
          {
            "en": "thrust",
            "zh": "推力"
          },
          {
            "en": "wings",
            "zh": "機翼"
          },
          {
            "en": "gravity",
            "zh": "重力"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「lift」的正確中文意思",
            "en": "lift",
            "audioText": "lift",
            "instruction": "請問「lift」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "lift",
                "zh": "升力",
                "emoji": "✈️",
                "correct": true
              },
              {
                "en": "twice",
                "zh": "兩次",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "wings",
                "zh": "機翼",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "thrust",
                "zh": "推力",
                "emoji": "🔬",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Wings create lift for the airplane.",
            "instruction": "請看中文重組成英文句子：「機翼為飛機產生升力。」",
            "targetTokens": [
              "Wings",
              "create",
              "lift",
              "for",
              "the",
              "airplane."
            ],
            "pool": [
              "airplane.",
              "Wings",
              "for",
              "athlete",
              "create",
              "lift",
              "the",
              "race"
            ],
            "targetChinese": "機翼為飛機產生升力。",
            "targetSentence": "Wings create lift for the airplane."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "thrust",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "thrust (推力)",
                "en": "thrust",
                "zh": "推力",
                "correct": true
              },
              {
                "text": "lift (升力)",
                "en": "lift",
                "zh": "升力",
                "correct": false
              },
              {
                "text": "forget (忘記)",
                "en": "forget",
                "zh": "忘記",
                "correct": false
              },
              {
                "text": "diary (日記)",
                "en": "diary",
                "zh": "日記",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "lift",
                "zh": "升力"
              },
              {
                "en": "thrust",
                "zh": "推力"
              },
              {
                "en": "wings",
                "zh": "機翼"
              },
              {
                "en": "gravity",
                "zh": "重力"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l9",
        "title": "第 9 關：撞球物理碰撞反彈",
        "desc": "掌握 velocity、collision 等核心詞彙",
        "icon": "🎱",
        "vocabularies": [
          {
            "en": "velocity",
            "zh": "速度"
          },
          {
            "en": "collision",
            "zh": "碰撞"
          },
          {
            "en": "rebound",
            "zh": "反彈"
          },
          {
            "en": "friction",
            "zh": "摩擦力"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「velocity」的正確中文意思",
            "en": "velocity",
            "audioText": "velocity",
            "instruction": "請問「velocity」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "velocity",
                "zh": "速度",
                "emoji": "📘",
                "correct": true
              },
              {
                "en": "collision",
                "zh": "碰撞",
                "emoji": "⚡",
                "correct": false
              },
              {
                "en": "teamwork",
                "zh": "團隊合作",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "rebound",
                "zh": "反彈",
                "emoji": "🏫",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The billiard balls had an elastic collision.",
            "instruction": "請看中文重組成英文句子：「撞球之間發生了彈性碰撞。」",
            "targetTokens": [
              "The",
              "billiard",
              "balls",
              "had",
              "an",
              "elastic",
              "collision."
            ],
            "pool": [
              "had",
              "elastic",
              "billiard",
              "The",
              "an",
              "collision.",
              "novel",
              "balls",
              "invite"
            ],
            "targetChinese": "撞球之間發生了彈性碰撞。",
            "targetSentence": "The billiard balls had an elastic collision."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "collision",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "geography (地理)",
                "en": "geography",
                "zh": "地理",
                "correct": false
              },
              {
                "text": "velocity (速度)",
                "en": "velocity",
                "zh": "速度",
                "correct": false
              },
              {
                "text": "collision (碰撞)",
                "en": "collision",
                "zh": "碰撞",
                "correct": true
              },
              {
                "text": "extinction (滅絕)",
                "en": "extinction",
                "zh": "滅絕",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "velocity",
                "zh": "速度"
              },
              {
                "en": "collision",
                "zh": "碰撞"
              },
              {
                "en": "rebound",
                "zh": "反彈"
              },
              {
                "en": "friction",
                "zh": "摩擦力"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l10",
        "title": "第 10 關：恐龍滅絕假說與隕石",
        "desc": "掌握 extinction、asteroid 等核心詞彙",
        "icon": "☄️",
        "vocabularies": [
          {
            "en": "extinction",
            "zh": "滅絕"
          },
          {
            "en": "asteroid",
            "zh": "小行星"
          },
          {
            "en": "climate",
            "zh": "氣候"
          },
          {
            "en": "theory",
            "zh": "理論"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「extinction」的正確中文意思",
            "en": "extinction",
            "audioText": "extinction",
            "instruction": "請問「extinction」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "asteroid",
                "zh": "小行星",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "climate",
                "zh": "氣候",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "extinction",
                "zh": "滅絕",
                "emoji": "✈️",
                "correct": true
              },
              {
                "en": "smartphone",
                "zh": "智慧型手機",
                "emoji": "💡",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The asteroid theory explains dinosaur extinction.",
            "instruction": "請看中文重組成英文句子：「小行星撞擊理論解釋了恐龍滅絕。」",
            "targetTokens": [
              "The",
              "asteroid",
              "theory",
              "explains",
              "dinosaur",
              "extinction."
            ],
            "pool": [
              "science",
              "twice",
              "dinosaur",
              "theory",
              "asteroid",
              "The",
              "extinction.",
              "explains"
            ],
            "targetChinese": "小行星撞擊理論解釋了恐龍滅絕。",
            "targetSentence": "The asteroid theory explains dinosaur extinction."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "asteroid",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "practice (練習)",
                "en": "practice",
                "zh": "練習",
                "correct": false
              },
              {
                "text": "asteroid (小行星)",
                "en": "asteroid",
                "zh": "小行星",
                "correct": true
              },
              {
                "text": "library (圖書館)",
                "en": "library",
                "zh": "圖書館",
                "correct": false
              },
              {
                "text": "extinction (滅絕)",
                "en": "extinction",
                "zh": "滅絕",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "extinction",
                "zh": "滅絕"
              },
              {
                "en": "asteroid",
                "zh": "小行星"
              },
              {
                "en": "climate",
                "zh": "氣候"
              },
              {
                "en": "theory",
                "zh": "理論"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l11",
        "title": "第 11 關：智慧手機與數位科技",
        "desc": "掌握 smartphone、application 等核心詞彙",
        "icon": "📱",
        "vocabularies": [
          {
            "en": "smartphone",
            "zh": "智慧型手機"
          },
          {
            "en": "application",
            "zh": "應用程式"
          },
          {
            "en": "message",
            "zh": "訊息"
          },
          {
            "en": "online",
            "zh": "在線上的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「smartphone」的正確中文意思",
            "en": "smartphone",
            "audioText": "smartphone",
            "instruction": "請問「smartphone」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "application",
                "zh": "應用程式",
                "emoji": "⚡",
                "correct": false
              },
              {
                "en": "experience",
                "zh": "經驗",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "smartphone",
                "zh": "智慧型手機",
                "emoji": "📘",
                "correct": true
              },
              {
                "en": "message",
                "zh": "訊息",
                "emoji": "🏫",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Download the new learning application.",
            "instruction": "請看中文重組成英文句子：「下載這個全新學習應用程式。」",
            "targetTokens": [
              "Download",
              "the",
              "new",
              "learning",
              "application."
            ],
            "pool": [
              "practice",
              "new",
              "application.",
              "decline",
              "the",
              "Download",
              "learning"
            ],
            "targetChinese": "下載這個全新學習應用程式。",
            "targetSentence": "Download the new learning application."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "application",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "smartphone (智慧型手機)",
                "en": "smartphone",
                "zh": "智慧型手機",
                "correct": false
              },
              {
                "text": "application (應用程式)",
                "en": "application",
                "zh": "應用程式",
                "correct": true
              },
              {
                "text": "mathematics (數學)",
                "en": "mathematics",
                "zh": "數學",
                "correct": false
              },
              {
                "text": "experience (經驗)",
                "en": "experience",
                "zh": "經驗",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "smartphone",
                "zh": "智慧型手機"
              },
              {
                "en": "application",
                "zh": "應用程式"
              },
              {
                "en": "message",
                "zh": "訊息"
              },
              {
                "en": "online",
                "zh": "在線上的"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l12",
        "title": "第 12 關：學校運動會大隊接力",
        "desc": "掌握 relay race、baton 等核心詞彙",
        "icon": "🏃‍♂️",
        "vocabularies": [
          {
            "en": "relay race",
            "zh": "接力賽"
          },
          {
            "en": "baton",
            "zh": "接力棒"
          },
          {
            "en": "athlete",
            "zh": "運動員"
          },
          {
            "en": "cheering",
            "zh": "歡呼中"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「relay race」的正確中文意思",
            "en": "relay race",
            "audioText": "relay race",
            "instruction": "請問「relay race」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "relay race",
                "zh": "接力賽",
                "emoji": "✈️",
                "correct": true
              },
              {
                "en": "baton",
                "zh": "接力棒",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "athlete",
                "zh": "運動員",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "how often",
                "zh": "多久一次",
                "emoji": "💡",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Pass the baton quickly and carefully.",
            "instruction": "請看中文重組成英文句子：「迅速且小心地交接接力棒。」",
            "targetTokens": [
              "Pass",
              "the",
              "baton",
              "quickly",
              "and",
              "carefully."
            ],
            "pool": [
              "the",
              "often",
              "quickly",
              "and",
              "carefully.",
              "Pass",
              "remember",
              "baton"
            ],
            "targetChinese": "迅速且小心地交接接力棒。",
            "targetSentence": "Pass the baton quickly and carefully."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "baton",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "baton (接力棒)",
                "en": "baton",
                "zh": "接力棒",
                "correct": true
              },
              {
                "text": "never (從不)",
                "en": "never",
                "zh": "從不",
                "correct": false
              },
              {
                "text": "relay race (接力賽)",
                "en": "relay race",
                "zh": "接力賽",
                "correct": false
              },
              {
                "text": "novel (小說)",
                "en": "novel",
                "zh": "小說",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "relay race",
                "zh": "接力賽"
              },
              {
                "en": "baton",
                "zh": "接力棒"
              },
              {
                "en": "athlete",
                "zh": "運動員"
              },
              {
                "en": "cheering",
                "zh": "歡呼中"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l13",
        "title": "第 13 關：圖書館與閱讀世界",
        "desc": "掌握 library、borrow 等核心詞彙",
        "icon": "📚",
        "vocabularies": [
          {
            "en": "library",
            "zh": "圖書館"
          },
          {
            "en": "borrow",
            "zh": "借閱"
          },
          {
            "en": "knowledge",
            "zh": "知識"
          },
          {
            "en": "novel",
            "zh": "小說"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「library」的正確中文意思",
            "en": "library",
            "audioText": "library",
            "instruction": "請問「library」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "knowledge",
                "zh": "知識",
                "emoji": "🏫",
                "correct": false
              },
              {
                "en": "history",
                "zh": "歷史",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "library",
                "zh": "圖書館",
                "emoji": "📘",
                "correct": true
              },
              {
                "en": "borrow",
                "zh": "借閱",
                "emoji": "⚡",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Books provide endless useful knowledge.",
            "instruction": "請看中文重組成英文句子：「書籍提供無窮無盡的實用知識。」",
            "targetTokens": [
              "Books",
              "provide",
              "endless",
              "useful",
              "knowledge."
            ],
            "pool": [
              "how",
              "collision",
              "Books",
              "useful",
              "knowledge.",
              "provide",
              "endless"
            ],
            "targetChinese": "書籍提供無窮無盡的實用知識。",
            "targetSentence": "Books provide endless useful knowledge."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "borrow",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "library (圖書館)",
                "en": "library",
                "zh": "圖書館",
                "correct": false
              },
              {
                "text": "online (在線上的)",
                "en": "online",
                "zh": "在線上的",
                "correct": false
              },
              {
                "text": "borrow (借閱)",
                "en": "borrow",
                "zh": "借閱",
                "correct": true
              },
              {
                "text": "always (總是)",
                "en": "always",
                "zh": "總是",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "library",
                "zh": "圖書館"
              },
              {
                "en": "borrow",
                "zh": "借閱"
              },
              {
                "en": "knowledge",
                "zh": "知識"
              },
              {
                "en": "novel",
                "zh": "小說"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l14",
        "title": "第 14 關：社交邀請與禮貌拒絕",
        "desc": "掌握 invite、accept 等核心詞彙",
        "icon": "💌",
        "vocabularies": [
          {
            "en": "invite",
            "zh": "邀請"
          },
          {
            "en": "accept",
            "zh": "接受"
          },
          {
            "en": "decline",
            "zh": "婉拒"
          },
          {
            "en": "pleasure",
            "zh": "榮幸"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「invite」的正確中文意思",
            "en": "invite",
            "audioText": "invite",
            "instruction": "請問「invite」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "invite",
                "zh": "邀請",
                "emoji": "✈️",
                "correct": true
              },
              {
                "en": "decline",
                "zh": "婉拒",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "accept",
                "zh": "接受",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "online",
                "zh": "在線上的",
                "emoji": "💡",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Would you like to join our baseball match?",
            "instruction": "請看中文重組成英文句子：「你想要參加我們的棒球比賽嗎？」",
            "targetTokens": [
              "Would",
              "you",
              "like",
              "to",
              "join",
              "our",
              "baseball",
              "match?"
            ],
            "pool": [
              "Would",
              "match?",
              "baseball",
              "to",
              "coach",
              "you",
              "our",
              "invite",
              "join",
              "like"
            ],
            "targetChinese": "你想要參加我們的棒球比賽嗎？",
            "targetSentence": "Would you like to join our baseball match?"
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "accept",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "invite (邀請)",
                "en": "invite",
                "zh": "邀請",
                "correct": false
              },
              {
                "text": "accept (接受)",
                "en": "accept",
                "zh": "接受",
                "correct": true
              },
              {
                "text": "borrow (借閱)",
                "en": "borrow",
                "zh": "借閱",
                "correct": false
              },
              {
                "text": "online (在線上的)",
                "en": "online",
                "zh": "在線上的",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "invite",
                "zh": "邀請"
              },
              {
                "en": "accept",
                "zh": "接受"
              },
              {
                "en": "decline",
                "zh": "婉拒"
              },
              {
                "en": "pleasure",
                "zh": "榮幸"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l15",
        "title": "第 15 關：國中英語日記書寫",
        "desc": "掌握 diary、experience 等核心詞彙",
        "icon": "✍️",
        "vocabularies": [
          {
            "en": "diary",
            "zh": "日記"
          },
          {
            "en": "experience",
            "zh": "經驗"
          },
          {
            "en": "unforgettable",
            "zh": "難忘的"
          },
          {
            "en": "grateful",
            "zh": "心存感激的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「diary」的正確中文意思",
            "en": "diary",
            "audioText": "diary",
            "instruction": "請問「diary」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "often",
                "zh": "經常",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "diary",
                "zh": "日記",
                "emoji": "📘",
                "correct": true
              },
              {
                "en": "unforgettable",
                "zh": "難忘的",
                "emoji": "🏫",
                "correct": false
              },
              {
                "en": "experience",
                "zh": "經驗",
                "emoji": "⚡",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Today was an unforgettable, wonderful day.",
            "instruction": "請看中文重組成英文句子：「今天是一個難忘又美好的日子。」",
            "targetTokens": [
              "Today",
              "was",
              "an",
              "unforgettable,",
              "wonderful",
              "day."
            ],
            "pool": [
              "was",
              "Today",
              "wonderful",
              "unforgettable,",
              "invite",
              "an",
              "during",
              "day."
            ],
            "targetChinese": "今天是一個難忘又美好的日子。",
            "targetSentence": "Today was an unforgettable, wonderful day."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "experience",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "experience (經驗)",
                "en": "experience",
                "zh": "經驗",
                "correct": true
              },
              {
                "text": "diary (日記)",
                "en": "diary",
                "zh": "日記",
                "correct": false
              },
              {
                "text": "mathematics (數學)",
                "en": "mathematics",
                "zh": "數學",
                "correct": false
              },
              {
                "text": "extinction (滅絕)",
                "en": "extinction",
                "zh": "滅絕",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "diary",
                "zh": "日記"
              },
              {
                "en": "experience",
                "zh": "經驗"
              },
              {
                "en": "unforgettable",
                "zh": "難忘的"
              },
              {
                "en": "grateful",
                "zh": "心存感激的"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_beg-l16",
        "title": "第 16 關：國一綜合實力全能魔王",
        "desc": "掌握 teamwork、collision 等核心詞彙",
        "icon": "👑",
        "vocabularies": [
          {
            "en": "teamwork",
            "zh": "團隊合作"
          },
          {
            "en": "collision",
            "zh": "碰撞"
          },
          {
            "en": "extinction",
            "zh": "滅絕"
          },
          {
            "en": "practice",
            "zh": "練習"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「teamwork」的正確中文意思",
            "en": "teamwork",
            "audioText": "teamwork",
            "instruction": "請問「teamwork」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "extinction",
                "zh": "滅絕",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "friction",
                "zh": "摩擦力",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "teamwork",
                "zh": "團隊合作",
                "emoji": "✈️",
                "correct": true
              },
              {
                "en": "collision",
                "zh": "碰撞",
                "emoji": "🔬",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Regular practice brings amazing improvement.",
            "instruction": "請看中文重組成英文句子：「規律的練習帶來驚人的進步。」",
            "targetTokens": [
              "Regular",
              "practice",
              "brings",
              "amazing",
              "improvement."
            ],
            "pool": [
              "practice",
              "Regular",
              "brings",
              "why",
              "improvement.",
              "thrust",
              "amazing"
            ],
            "targetChinese": "規律的練習帶來驚人的進步。",
            "targetSentence": "Regular practice brings amazing improvement."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "collision",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "asteroid (小行星)",
                "en": "asteroid",
                "zh": "小行星",
                "correct": false
              },
              {
                "text": "geography (地理)",
                "en": "geography",
                "zh": "地理",
                "correct": false
              },
              {
                "text": "collision (碰撞)",
                "en": "collision",
                "zh": "碰撞",
                "correct": true
              },
              {
                "text": "teamwork (團隊合作)",
                "en": "teamwork",
                "zh": "團隊合作",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "teamwork",
                "zh": "團隊合作"
              },
              {
                "en": "collision",
                "zh": "碰撞"
              },
              {
                "en": "extinction",
                "zh": "滅絕"
              },
              {
                "en": "practice",
                "zh": "練習"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "jh_mid",
    "category": "junior",
    "categoryName": "國中階段",
    "categoryIcon": "🏫",
    "subLevel": "mid",
    "subLevelName": "國中・中級 (國二)",
    "badge": "🏆 實力躍進",
    "desc": "現在完成式、被動語態、情態助動詞、大聯盟棒球與國際太空站",
    "cefr": "A2",
    "themeColor": "#ef4444",
    "colorClass": "u-baseball",
    "lessons": [
      {
        "id": "jh_mid-l1",
        "title": "第 1 關：現在完成式初登場",
        "desc": "掌握 have lived、has been 等核心詞彙",
        "icon": "⏳",
        "vocabularies": [
          {
            "en": "have lived",
            "zh": "已經住過"
          },
          {
            "en": "has been",
            "zh": "曾經去過"
          },
          {
            "en": "since",
            "zh": "自從..."
          },
          {
            "en": "for",
            "zh": "長達..."
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「have lived」的正確中文意思",
            "en": "have lived",
            "audioText": "have lived",
            "instruction": "請問「have lived」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "since",
                "zh": "自從...",
                "emoji": "🛰️",
                "correct": false
              },
              {
                "en": "have lived",
                "zh": "已經住過",
                "emoji": "🏆",
                "correct": true
              },
              {
                "en": "has been",
                "zh": "曾經去過",
                "emoji": "⏳",
                "correct": false
              },
              {
                "en": "was caught",
                "zh": "被接住",
                "emoji": "⚾",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "I have lived in Taiwan for ten years.",
            "instruction": "請看中文重組成英文句子：「我已經在台灣住了十年。」",
            "targetTokens": [
              "I",
              "have",
              "lived",
              "in",
              "Taiwan",
              "for",
              "ten",
              "years."
            ],
            "pool": [
              "for",
              "lived",
              "presentation",
              "ten",
              "Taiwan",
              "in",
              "years.",
              "have",
              "never",
              "I"
            ],
            "targetChinese": "我已經在台灣住了十年。",
            "targetSentence": "I have lived in Taiwan for ten years."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "has been",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "has been (曾經去過)",
                "en": "has been",
                "zh": "曾經去過",
                "correct": true
              },
              {
                "text": "is made (被製造)",
                "en": "is made",
                "zh": "被製造",
                "correct": false
              },
              {
                "text": "ought to (應當)",
                "en": "ought to",
                "zh": "應當",
                "correct": false
              },
              {
                "text": "have lived (已經住過)",
                "en": "have lived",
                "zh": "已經住過",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "have lived",
                "zh": "已經住過"
              },
              {
                "en": "has been",
                "zh": "曾經去過"
              },
              {
                "en": "since",
                "zh": "自從..."
              },
              {
                "en": "for",
                "zh": "長達..."
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l2",
        "title": "第 2 關：完成式人生經驗歷練",
        "desc": "掌握 already、yet 等核心詞彙",
        "icon": "🌟",
        "vocabularies": [
          {
            "en": "already",
            "zh": "已經"
          },
          {
            "en": "yet",
            "zh": "尚未"
          },
          {
            "en": "ever",
            "zh": "曾經"
          },
          {
            "en": "never",
            "zh": "從未"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「already」的正確中文意思",
            "en": "already",
            "audioText": "already",
            "instruction": "請問「already」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "already",
                "zh": "已經",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "charity",
                "zh": "慈善",
                "emoji": "📘",
                "correct": false
              },
              {
                "en": "yet",
                "zh": "尚未",
                "emoji": "🌟",
                "correct": false
              },
              {
                "en": "ever",
                "zh": "曾經",
                "emoji": "🧭",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Have you ever seen a supersonic fighter jet?",
            "instruction": "請看中文重組成英文句子：「你曾見過超音速戰鬥機嗎？」",
            "targetTokens": [
              "Have",
              "you",
              "ever",
              "seen",
              "a",
              "supersonic",
              "fighter",
              "jet?"
            ],
            "pool": [
              "fighter",
              "ever",
              "jet?",
              "Have",
              "supersonic",
              "feel",
              "smell",
              "a",
              "seen",
              "you"
            ],
            "targetChinese": "你曾見過超音速戰鬥機嗎？",
            "targetSentence": "Have you ever seen a supersonic fighter jet?"
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "yet",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "already (已經)",
                "en": "already",
                "zh": "已經",
                "correct": false
              },
              {
                "text": "MVP (最有價值球員)",
                "en": "MVP",
                "zh": "最有價值球員",
                "correct": false
              },
              {
                "text": "for (長達...)",
                "en": "for",
                "zh": "長達...",
                "correct": false
              },
              {
                "text": "yet (尚未)",
                "en": "yet",
                "zh": "尚未",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "already",
                "zh": "已經"
              },
              {
                "en": "yet",
                "zh": "尚未"
              },
              {
                "en": "ever",
                "zh": "曾經"
              },
              {
                "en": "never",
                "zh": "從未"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l3",
        "title": "第 3 關：被動語態揭秘",
        "desc": "掌握 was caught、is made 等核心詞彙",
        "icon": "🛡️",
        "vocabularies": [
          {
            "en": "was caught",
            "zh": "被接住"
          },
          {
            "en": "is made",
            "zh": "被製造"
          },
          {
            "en": "by",
            "zh": "被..."
          },
          {
            "en": "written",
            "zh": "被書寫"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「was caught」的正確中文意思",
            "en": "was caught",
            "audioText": "was caught",
            "instruction": "請問「was caught」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "was caught",
                "zh": "被接住",
                "emoji": "🏆",
                "correct": true
              },
              {
                "en": "by",
                "zh": "被...",
                "emoji": "🛰️",
                "correct": false
              },
              {
                "en": "have lived",
                "zh": "已經住過",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "is made",
                "zh": "被製造",
                "emoji": "⏳",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The baseball was caught by the center fielder.",
            "instruction": "請看中文重組成英文句子：「這顆棒球被中外野手接住了。」",
            "targetTokens": [
              "The",
              "baseball",
              "was",
              "caught",
              "by",
              "the",
              "center",
              "fielder."
            ],
            "pool": [
              "conclusion",
              "the",
              "center",
              "by",
              "cheer",
              "The",
              "baseball",
              "fielder.",
              "was",
              "caught"
            ],
            "targetChinese": "這顆棒球被中外野手接住了。",
            "targetSentence": "The baseball was caught by the center fielder."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "is made",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "is made (被製造)",
                "en": "is made",
                "zh": "被製造",
                "correct": true
              },
              {
                "text": "has been (曾經去過)",
                "en": "has been",
                "zh": "曾經去過",
                "correct": false
              },
              {
                "text": "have to (不得不)",
                "en": "have to",
                "zh": "不得不",
                "correct": false
              },
              {
                "text": "was caught (被接住)",
                "en": "was caught",
                "zh": "被接住",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "was caught",
                "zh": "被接住"
              },
              {
                "en": "is made",
                "zh": "被製造"
              },
              {
                "en": "by",
                "zh": "被..."
              },
              {
                "en": "written",
                "zh": "被書寫"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l4",
        "title": "第 4 關：現代科技被動應用",
        "desc": "掌握 guided、invented 等核心詞彙",
        "icon": "📡",
        "vocabularies": [
          {
            "en": "guided",
            "zh": "被導航引導"
          },
          {
            "en": "invented",
            "zh": "被發明"
          },
          {
            "en": "controlled",
            "zh": "被控制"
          },
          {
            "en": "radar",
            "zh": "雷達"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「guided」的正確中文意思",
            "en": "guided",
            "audioText": "guided",
            "instruction": "請問「guided」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "controlled",
                "zh": "被控制",
                "emoji": "🧭",
                "correct": false
              },
              {
                "en": "sensor",
                "zh": "感應器",
                "emoji": "📘",
                "correct": false
              },
              {
                "en": "guided",
                "zh": "被導航引導",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "invented",
                "zh": "被發明",
                "emoji": "🌟",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Modern aircraft are guided by satellite radar.",
            "instruction": "請看中文重組成英文句子：「現代飛機由衛星雷達導航。」",
            "targetTokens": [
              "Modern",
              "aircraft",
              "are",
              "guided",
              "by",
              "satellite",
              "radar."
            ],
            "pool": [
              "Modern",
              "radar.",
              "by",
              "aircraft",
              "satellite",
              "are",
              "for",
              "guided",
              "notice"
            ],
            "targetChinese": "現代飛機由衛星雷達導航。",
            "targetSentence": "Modern aircraft are guided by satellite radar."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "invented",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "donation (捐贈)",
                "en": "donation",
                "zh": "捐贈",
                "correct": false
              },
              {
                "text": "invented (被發明)",
                "en": "invented",
                "zh": "被發明",
                "correct": true
              },
              {
                "text": "guided (被導航引導)",
                "en": "guided",
                "zh": "被導航引導",
                "correct": false
              },
              {
                "text": "playoffs (季後賽)",
                "en": "playoffs",
                "zh": "季後賽",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "guided",
                "zh": "被導航引導"
              },
              {
                "en": "invented",
                "zh": "被發明"
              },
              {
                "en": "controlled",
                "zh": "被控制"
              },
              {
                "en": "radar",
                "zh": "雷達"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l5",
        "title": "第 5 關：情態助動詞家族",
        "desc": "掌握 must、should 等核心詞彙",
        "icon": "💡",
        "vocabularies": [
          {
            "en": "must",
            "zh": "必須"
          },
          {
            "en": "should",
            "zh": "應該"
          },
          {
            "en": "have to",
            "zh": "不得不"
          },
          {
            "en": "ought to",
            "zh": "應當"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「must」的正確中文意思",
            "en": "must",
            "audioText": "must",
            "instruction": "請問「must」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "have to",
                "zh": "不得不",
                "emoji": "🛰️",
                "correct": false
              },
              {
                "en": "ever",
                "zh": "曾經",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "must",
                "zh": "必須",
                "emoji": "🏆",
                "correct": true
              },
              {
                "en": "should",
                "zh": "應該",
                "emoji": "⏳",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Every player must respect the rules.",
            "instruction": "請看中文重組成英文句子：「每位球員都必須遵守規則。」",
            "targetTokens": [
              "Every",
              "player",
              "must",
              "respect",
              "the",
              "rules."
            ],
            "pool": [
              "respect",
              "algorithm",
              "Every",
              "the",
              "rules.",
              "must",
              "player",
              "MVP"
            ],
            "targetChinese": "每位球員都必須遵守規則。",
            "targetSentence": "Every player must respect the rules."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "should",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "must (必須)",
                "en": "must",
                "zh": "必須",
                "correct": false
              },
              {
                "text": "should (應該)",
                "en": "should",
                "zh": "應該",
                "correct": true
              },
              {
                "text": "since (自從...)",
                "en": "since",
                "zh": "自從...",
                "correct": false
              },
              {
                "text": "notice (注意到)",
                "en": "notice",
                "zh": "注意到",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "must",
                "zh": "必須"
              },
              {
                "en": "should",
                "zh": "應該"
              },
              {
                "en": "have to",
                "zh": "不得不"
              },
              {
                "en": "ought to",
                "zh": "應當"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l6",
        "title": "第 6 關：連綴動詞與五感描述",
        "desc": "掌握 taste、smell 等核心詞彙",
        "icon": "🌸",
        "vocabularies": [
          {
            "en": "taste",
            "zh": "嚐起來"
          },
          {
            "en": "smell",
            "zh": "聞起來"
          },
          {
            "en": "look",
            "zh": "看起來"
          },
          {
            "en": "sound",
            "zh": "聽起來"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「taste」的正確中文意思",
            "en": "taste",
            "audioText": "taste",
            "instruction": "請問「taste」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "taste",
                "zh": "嚐起來",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "look",
                "zh": "看起來",
                "emoji": "🧭",
                "correct": false
              },
              {
                "en": "curve",
                "zh": "曲球",
                "emoji": "📘",
                "correct": false
              },
              {
                "en": "smell",
                "zh": "聞起來",
                "emoji": "🌟",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The fresh burger tastes delicious and juicy.",
            "instruction": "請看中文重組成英文句子：「這份新鮮漢堡嚐起來多汁又美味。」",
            "targetTokens": [
              "The",
              "fresh",
              "burger",
              "tastes",
              "delicious",
              "and",
              "juicy."
            ],
            "pool": [
              "fresh",
              "juicy.",
              "taste",
              "and",
              "delicious",
              "The",
              "burger",
              "charity",
              "tastes"
            ],
            "targetChinese": "這份新鮮漢堡嚐起來多汁又美味。",
            "targetSentence": "The fresh burger tastes delicious and juicy."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "smell",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "smell (聞起來)",
                "en": "smell",
                "zh": "聞起來",
                "correct": true
              },
              {
                "text": "orbit (軌道運行)",
                "en": "orbit",
                "zh": "軌道運行",
                "correct": false
              },
              {
                "text": "curve (曲球)",
                "en": "curve",
                "zh": "曲球",
                "correct": false
              },
              {
                "text": "taste (嚐起來)",
                "en": "taste",
                "zh": "嚐起來",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "taste",
                "zh": "嚐起來"
              },
              {
                "en": "smell",
                "zh": "聞起來"
              },
              {
                "en": "look",
                "zh": "看起來"
              },
              {
                "en": "sound",
                "zh": "聽起來"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l7",
        "title": "第 7 關：感官動詞生動用法",
        "desc": "掌握 watch him swing、hear them cheer 等核心詞彙",
        "icon": "👂",
        "vocabularies": [
          {
            "en": "watch him swing",
            "zh": "看他揮棒"
          },
          {
            "en": "hear them cheer",
            "zh": "聽他們歡呼"
          },
          {
            "en": "feel the ball hit",
            "zh": "感覺球被擊中"
          },
          {
            "en": "notice",
            "zh": "注意到"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「watch him swing」的正確中文意思",
            "en": "watch him swing",
            "audioText": "watch him swing",
            "instruction": "請問「watch him swing」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "feel the ball hit",
                "zh": "感覺球被擊中",
                "emoji": "🛰️",
                "correct": false
              },
              {
                "en": "hear them cheer",
                "zh": "聽他們歡呼",
                "emoji": "⏳",
                "correct": false
              },
              {
                "en": "watch him swing",
                "zh": "看他揮棒",
                "emoji": "🏆",
                "correct": true
              },
              {
                "en": "neither do I",
                "zh": "我也不",
                "emoji": "⚾",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "We watched the batter hit a grand slam.",
            "instruction": "請看中文重組成英文句子：「我們看著打者擊出滿貫全壘打。」",
            "targetTokens": [
              "We",
              "watched",
              "the",
              "batter",
              "hit",
              "a",
              "grand",
              "slam."
            ],
            "pool": [
              "slam.",
              "the",
              "algorithm",
              "We",
              "batter",
              "grand",
              "a",
              "lived",
              "watched",
              "hit"
            ],
            "targetChinese": "我們看著打者擊出滿貫全壘打。",
            "targetSentence": "We watched the batter hit a grand slam."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "hear them cheer",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "feel the ball hit (感覺球被擊中)",
                "en": "feel the ball hit",
                "zh": "感覺球被擊中",
                "correct": false
              },
              {
                "text": "neither do I (我也不)",
                "en": "neither do I",
                "zh": "我也不",
                "correct": false
              },
              {
                "text": "watch him swing (看他揮棒)",
                "en": "watch him swing",
                "zh": "看他揮棒",
                "correct": false
              },
              {
                "text": "hear them cheer (聽他們歡呼)",
                "en": "hear them cheer",
                "zh": "聽他們歡呼",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "watch him swing",
                "zh": "看他揮棒"
              },
              {
                "en": "hear them cheer",
                "zh": "聽他們歡呼"
              },
              {
                "en": "feel the ball hit",
                "zh": "感覺球被擊中"
              },
              {
                "en": "notice",
                "zh": "注意到"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l8",
        "title": "第 8 關：附和句結構辨析",
        "desc": "掌握 so do I、neither do I 等核心詞彙",
        "icon": "💬",
        "vocabularies": [
          {
            "en": "so do I",
            "zh": "我也是"
          },
          {
            "en": "neither do I",
            "zh": "我也不"
          },
          {
            "en": "too",
            "zh": "也(肯定)"
          },
          {
            "en": "either",
            "zh": "也(否定)"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「so do I」的正確中文意思",
            "en": "so do I",
            "audioText": "so do I",
            "instruction": "請問「so do I」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "so do I",
                "zh": "我也是",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "watch him swing",
                "zh": "看他揮棒",
                "emoji": "📘",
                "correct": false
              },
              {
                "en": "neither do I",
                "zh": "我也不",
                "emoji": "🌟",
                "correct": false
              },
              {
                "en": "hear them cheer",
                "zh": "聽他們歡呼",
                "emoji": "🧭",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "He loves baseball, and so do I.",
            "instruction": "請看中文重組成英文句子：「他熱愛棒球，我也一樣。」",
            "targetTokens": [
              "He",
              "loves",
              "baseball,",
              "and",
              "so",
              "do",
              "I."
            ],
            "pool": [
              "do",
              "I.",
              "so",
              "and",
              "ball",
              "baseball,",
              "loves",
              "guided",
              "He"
            ],
            "targetChinese": "他熱愛棒球，我也一樣。",
            "targetSentence": "He loves baseball, and so do I."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "neither do I",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "hear them cheer (聽他們歡呼)",
                "en": "hear them cheer",
                "zh": "聽他們歡呼",
                "correct": false
              },
              {
                "text": "so do I (我也是)",
                "en": "so do I",
                "zh": "我也是",
                "correct": false
              },
              {
                "text": "watch him swing (看他揮棒)",
                "en": "watch him swing",
                "zh": "看他揮棒",
                "correct": false
              },
              {
                "text": "neither do I (我也不)",
                "en": "neither do I",
                "zh": "我也不",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "so do I",
                "zh": "我也是"
              },
              {
                "en": "neither do I",
                "zh": "我也不"
              },
              {
                "en": "too",
                "zh": "也(肯定)"
              },
              {
                "en": "either",
                "zh": "也(否定)"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l9",
        "title": "第 9 關：大聯盟季後賽激戰",
        "desc": "掌握 Major League、playoffs 等核心詞彙",
        "icon": "🏟️",
        "vocabularies": [
          {
            "en": "Major League",
            "zh": "大聯盟"
          },
          {
            "en": "playoffs",
            "zh": "季後賽"
          },
          {
            "en": "World Series",
            "zh": "世界大賽"
          },
          {
            "en": "MVP",
            "zh": "最有價值球員"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「Major League」的正確中文意思",
            "en": "Major League",
            "audioText": "Major League",
            "instruction": "請問「Major League」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "World Series",
                "zh": "世界大賽",
                "emoji": "🛰️",
                "correct": false
              },
              {
                "en": "playoffs",
                "zh": "季後賽",
                "emoji": "⏳",
                "correct": false
              },
              {
                "en": "visual aids",
                "zh": "視覺輔助圖表",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "Major League",
                "zh": "大聯盟",
                "emoji": "🏆",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "He won the Most Valuable Player award.",
            "instruction": "請看中文重組成英文句子：「他贏得了最有價值球員獎。」",
            "targetTokens": [
              "He",
              "won",
              "the",
              "Most",
              "Valuable",
              "Player",
              "award."
            ],
            "pool": [
              "algorithm",
              "watch",
              "award.",
              "Most",
              "won",
              "He",
              "Valuable",
              "the",
              "Player"
            ],
            "targetChinese": "他贏得了最有價值球員獎。",
            "targetSentence": "He won the Most Valuable Player award."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "playoffs",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "backspin (後旋拉桿)",
                "en": "backspin",
                "zh": "後旋拉桿",
                "correct": false
              },
              {
                "text": "Major League (大聯盟)",
                "en": "Major League",
                "zh": "大聯盟",
                "correct": false
              },
              {
                "text": "algorithm (演算法)",
                "en": "algorithm",
                "zh": "演算法",
                "correct": false
              },
              {
                "text": "playoffs (季後賽)",
                "en": "playoffs",
                "zh": "季後賽",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "Major League",
                "zh": "大聯盟"
              },
              {
                "en": "playoffs",
                "zh": "季後賽"
              },
              {
                "en": "World Series",
                "zh": "世界大賽"
              },
              {
                "en": "MVP",
                "zh": "最有價值球員"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l10",
        "title": "第 10 關：國際太空站與微重力",
        "desc": "掌握 astronaut、orbit 等核心詞彙",
        "icon": "🛰️",
        "vocabularies": [
          {
            "en": "astronaut",
            "zh": "太空人"
          },
          {
            "en": "orbit",
            "zh": "軌道運行"
          },
          {
            "en": "microgravity",
            "zh": "微重力"
          },
          {
            "en": "space station",
            "zh": "太空站"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「astronaut」的正確中文意思",
            "en": "astronaut",
            "audioText": "astronaut",
            "instruction": "請問「astronaut」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "microgravity",
                "zh": "微重力",
                "emoji": "🧭",
                "correct": false
              },
              {
                "en": "volunteer",
                "zh": "志工",
                "emoji": "📘",
                "correct": false
              },
              {
                "en": "orbit",
                "zh": "軌道運行",
                "emoji": "🌟",
                "correct": false
              },
              {
                "en": "astronaut",
                "zh": "太空人",
                "emoji": "🔬",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Astronauts conduct experiments in space station.",
            "instruction": "請看中文重組成英文句子：「太空人在太空站進行實驗。」",
            "targetTokens": [
              "Astronauts",
              "conduct",
              "experiments",
              "in",
              "space",
              "station."
            ],
            "pool": [
              "lived",
              "experiments",
              "invented",
              "Astronauts",
              "station.",
              "in",
              "conduct",
              "space"
            ],
            "targetChinese": "太空人在太空站進行實驗。",
            "targetSentence": "Astronauts conduct experiments in space station."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "orbit",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "curve (曲球)",
                "en": "curve",
                "zh": "曲球",
                "correct": false
              },
              {
                "text": "astronaut (太空人)",
                "en": "astronaut",
                "zh": "太空人",
                "correct": false
              },
              {
                "text": "orbit (軌道運行)",
                "en": "orbit",
                "zh": "軌道運行",
                "correct": true
              },
              {
                "text": "since (自從...)",
                "en": "since",
                "zh": "自從...",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "astronaut",
                "zh": "太空人"
              },
              {
                "en": "orbit",
                "zh": "軌道運行"
              },
              {
                "en": "microgravity",
                "zh": "微重力"
              },
              {
                "en": "space station",
                "zh": "太空站"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l11",
        "title": "第 11 關：撞球特技球與加塞旋轉",
        "desc": "掌握 backspin、curve 等核心詞彙",
        "icon": "🎱",
        "vocabularies": [
          {
            "en": "backspin",
            "zh": "後旋拉桿"
          },
          {
            "en": "curve",
            "zh": "曲球"
          },
          {
            "en": "precision",
            "zh": "精密度"
          },
          {
            "en": "combination",
            "zh": "組合進球"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「backspin」的正確中文意思",
            "en": "backspin",
            "audioText": "backspin",
            "instruction": "請問「backspin」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "curve",
                "zh": "曲球",
                "emoji": "⏳",
                "correct": false
              },
              {
                "en": "precision",
                "zh": "精密度",
                "emoji": "🛰️",
                "correct": false
              },
              {
                "en": "backspin",
                "zh": "後旋拉桿",
                "emoji": "🏆",
                "correct": true
              },
              {
                "en": "invented",
                "zh": "被發明",
                "emoji": "⚾",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Backspin gives the cue ball amazing control.",
            "instruction": "請看中文重組成英文句子：「下桿後旋給予母球驚人的控制力。」",
            "targetTokens": [
              "Backspin",
              "gives",
              "the",
              "cue",
              "ball",
              "amazing",
              "control."
            ],
            "pool": [
              "amazing",
              "control.",
              "since",
              "World",
              "ball",
              "cue",
              "Backspin",
              "the",
              "gives"
            ],
            "targetChinese": "下桿後旋給予母球驚人的控制力。",
            "targetSentence": "Backspin gives the cue ball amazing control."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "curve",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "taste (嚐起來)",
                "en": "taste",
                "zh": "嚐起來",
                "correct": false
              },
              {
                "text": "orbit (軌道運行)",
                "en": "orbit",
                "zh": "軌道運行",
                "correct": false
              },
              {
                "text": "curve (曲球)",
                "en": "curve",
                "zh": "曲球",
                "correct": true
              },
              {
                "text": "backspin (後旋拉桿)",
                "en": "backspin",
                "zh": "後旋拉桿",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "backspin",
                "zh": "後旋拉桿"
              },
              {
                "en": "curve",
                "zh": "曲球"
              },
              {
                "en": "precision",
                "zh": "精密度"
              },
              {
                "en": "combination",
                "zh": "組合進球"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l12",
        "title": "第 12 關：機器人程式與演算法",
        "desc": "掌握 programming、algorithm 等核心詞彙",
        "icon": "🤖",
        "vocabularies": [
          {
            "en": "programming",
            "zh": "寫程式"
          },
          {
            "en": "algorithm",
            "zh": "演算法"
          },
          {
            "en": "sensor",
            "zh": "感應器"
          },
          {
            "en": "automation",
            "zh": "自動化"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「programming」的正確中文意思",
            "en": "programming",
            "audioText": "programming",
            "instruction": "請問「programming」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "algorithm",
                "zh": "演算法",
                "emoji": "🌟",
                "correct": false
              },
              {
                "en": "combination",
                "zh": "組合進球",
                "emoji": "📘",
                "correct": false
              },
              {
                "en": "programming",
                "zh": "寫程式",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "sensor",
                "zh": "感應器",
                "emoji": "🧭",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Students learned coding and robotics algorithms.",
            "instruction": "請看中文重組成英文句子：「學生們學習了程式設計與機器人演算法。」",
            "targetTokens": [
              "Students",
              "learned",
              "coding",
              "and",
              "robotics",
              "algorithms."
            ],
            "pool": [
              "coding",
              "robotics",
              "curve",
              "League",
              "Students",
              "and",
              "algorithms.",
              "learned"
            ],
            "targetChinese": "學生們學習了程式設計與機器人演算法。",
            "targetSentence": "Students learned coding and robotics algorithms."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "algorithm",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "algorithm (演算法)",
                "en": "algorithm",
                "zh": "演算法",
                "correct": true
              },
              {
                "text": "backspin (後旋拉桿)",
                "en": "backspin",
                "zh": "後旋拉桿",
                "correct": false
              },
              {
                "text": "programming (寫程式)",
                "en": "programming",
                "zh": "寫程式",
                "correct": false
              },
              {
                "text": "astronaut (太空人)",
                "en": "astronaut",
                "zh": "太空人",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "programming",
                "zh": "寫程式"
              },
              {
                "en": "algorithm",
                "zh": "演算法"
              },
              {
                "en": "sensor",
                "zh": "感應器"
              },
              {
                "en": "automation",
                "zh": "自動化"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l13",
        "title": "第 13 關：全球暖化與再生能源",
        "desc": "掌握 global warming、renewable 等核心詞彙",
        "icon": "☀️",
        "vocabularies": [
          {
            "en": "global warming",
            "zh": "全球暖化"
          },
          {
            "en": "renewable",
            "zh": "可再生的"
          },
          {
            "en": "solar panel",
            "zh": "太陽能板"
          },
          {
            "en": "reduce",
            "zh": "減少"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「global warming」的正確中文意思",
            "en": "global warming",
            "audioText": "global warming",
            "instruction": "請問「global warming」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "space station",
                "zh": "太空站",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "solar panel",
                "zh": "太陽能板",
                "emoji": "🛰️",
                "correct": false
              },
              {
                "en": "renewable",
                "zh": "可再生的",
                "emoji": "⏳",
                "correct": false
              },
              {
                "en": "global warming",
                "zh": "全球暖化",
                "emoji": "🏆",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "We use solar energy to protect nature.",
            "instruction": "請看中文重組成英文句子：「我們使用太陽能來保護大自然。」",
            "targetTokens": [
              "We",
              "use",
              "solar",
              "energy",
              "to",
              "protect",
              "nature."
            ],
            "pool": [
              "nature.",
              "use",
              "orbit",
              "protect",
              "World",
              "to",
              "energy",
              "solar",
              "We"
            ],
            "targetChinese": "我們使用太陽能來保護大自然。",
            "targetSentence": "We use solar energy to protect nature."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "renewable",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "renewable (可再生的)",
                "en": "renewable",
                "zh": "可再生的",
                "correct": true
              },
              {
                "text": "backspin (後旋拉桿)",
                "en": "backspin",
                "zh": "後旋拉桿",
                "correct": false
              },
              {
                "text": "global warming (全球暖化)",
                "en": "global warming",
                "zh": "全球暖化",
                "correct": false
              },
              {
                "text": "precision (精密度)",
                "en": "precision",
                "zh": "精密度",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "global warming",
                "zh": "全球暖化"
              },
              {
                "en": "renewable",
                "zh": "可再生的"
              },
              {
                "en": "solar panel",
                "zh": "太陽能板"
              },
              {
                "en": "reduce",
                "zh": "減少"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l14",
        "title": "第 14 關：志工服務與社區關懷",
        "desc": "掌握 volunteer、charity 等核心詞彙",
        "icon": "🤝",
        "vocabularies": [
          {
            "en": "volunteer",
            "zh": "志工"
          },
          {
            "en": "charity",
            "zh": "慈善"
          },
          {
            "en": "community",
            "zh": "社區"
          },
          {
            "en": "donation",
            "zh": "捐贈"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「volunteer」的正確中文意思",
            "en": "volunteer",
            "audioText": "volunteer",
            "instruction": "請問「volunteer」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "astronaut",
                "zh": "太空人",
                "emoji": "📘",
                "correct": false
              },
              {
                "en": "charity",
                "zh": "慈善",
                "emoji": "🌟",
                "correct": false
              },
              {
                "en": "volunteer",
                "zh": "志工",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "community",
                "zh": "社區",
                "emoji": "🧭",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Volunteers spent their weekend helping elderly people.",
            "instruction": "請看中文重組成英文句子：「志工們週末花時間幫助長輩。」",
            "targetTokens": [
              "Volunteers",
              "spent",
              "their",
              "weekend",
              "helping",
              "elderly",
              "people."
            ],
            "pool": [
              "weekend",
              "their",
              "spent",
              "people.",
              "programming",
              "reduce",
              "helping",
              "elderly",
              "Volunteers"
            ],
            "targetChinese": "志工們週末花時間幫助長輩。",
            "targetSentence": "Volunteers spent their weekend helping elderly people."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "charity",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "charity (慈善)",
                "en": "charity",
                "zh": "慈善",
                "correct": true
              },
              {
                "text": "written (被書寫)",
                "en": "written",
                "zh": "被書寫",
                "correct": false
              },
              {
                "text": "notice (注意到)",
                "en": "notice",
                "zh": "注意到",
                "correct": false
              },
              {
                "text": "volunteer (志工)",
                "en": "volunteer",
                "zh": "志工",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "volunteer",
                "zh": "志工"
              },
              {
                "en": "charity",
                "zh": "慈善"
              },
              {
                "en": "community",
                "zh": "社區"
              },
              {
                "en": "donation",
                "zh": "捐贈"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l15",
        "title": "第 15 關：英語簡報發表技巧",
        "desc": "掌握 presentation、introduction 等核心詞彙",
        "icon": "🎤",
        "vocabularies": [
          {
            "en": "presentation",
            "zh": "簡報演講"
          },
          {
            "en": "introduction",
            "zh": "引言"
          },
          {
            "en": "conclusion",
            "zh": "結論"
          },
          {
            "en": "visual aids",
            "zh": "視覺輔助圖表"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「presentation」的正確中文意思",
            "en": "presentation",
            "audioText": "presentation",
            "instruction": "請問「presentation」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "microgravity",
                "zh": "微重力",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "introduction",
                "zh": "引言",
                "emoji": "⏳",
                "correct": false
              },
              {
                "en": "presentation",
                "zh": "簡報演講",
                "emoji": "🏆",
                "correct": true
              },
              {
                "en": "conclusion",
                "zh": "結論",
                "emoji": "🛰️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "A clear introduction grabs the audience attention.",
            "instruction": "請看中文重組成英文句子：「清晰的引言吸引聽眾的注意。」",
            "targetTokens": [
              "A",
              "clear",
              "introduction",
              "grabs",
              "the",
              "audience",
              "attention."
            ],
            "pool": [
              "the",
              "grabs",
              "introduction",
              "audience",
              "attention.",
              "taste",
              "has",
              "clear",
              "A"
            ],
            "targetChinese": "清晰的引言吸引聽眾的注意。",
            "targetSentence": "A clear introduction grabs the audience attention."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "introduction",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "combination (組合進球)",
                "en": "combination",
                "zh": "組合進球",
                "correct": false
              },
              {
                "text": "introduction (引言)",
                "en": "introduction",
                "zh": "引言",
                "correct": true
              },
              {
                "text": "programming (寫程式)",
                "en": "programming",
                "zh": "寫程式",
                "correct": false
              },
              {
                "text": "presentation (簡報演講)",
                "en": "presentation",
                "zh": "簡報演講",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "presentation",
                "zh": "簡報演講"
              },
              {
                "en": "introduction",
                "zh": "引言"
              },
              {
                "en": "conclusion",
                "zh": "結論"
              },
              {
                "en": "visual aids",
                "zh": "視覺輔助圖表"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_mid-l16",
        "title": "第 16 關：國二進階大會考",
        "desc": "掌握 have lived、was caught 等核心詞彙",
        "icon": "👑",
        "vocabularies": [
          {
            "en": "have lived",
            "zh": "住過"
          },
          {
            "en": "was caught",
            "zh": "被接住"
          },
          {
            "en": "Major League",
            "zh": "大聯盟"
          },
          {
            "en": "space station",
            "zh": "太空站"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「have lived」的正確中文意思",
            "en": "have lived",
            "audioText": "have lived",
            "instruction": "請問「have lived」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "visual aids",
                "zh": "視覺輔助圖表",
                "emoji": "📘",
                "correct": false
              },
              {
                "en": "was caught",
                "zh": "被接住",
                "emoji": "🌟",
                "correct": false
              },
              {
                "en": "Major League",
                "zh": "大聯盟",
                "emoji": "🧭",
                "correct": false
              },
              {
                "en": "have lived",
                "zh": "住過",
                "emoji": "🔬",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The pilot has flown across the Pacific.",
            "instruction": "請看中文重組成英文句子：「這位飛行員已經飛越了太平洋。」",
            "targetTokens": [
              "The",
              "pilot",
              "has",
              "flown",
              "across",
              "the",
              "Pacific."
            ],
            "pool": [
              "has",
              "flown",
              "The",
              "pilot",
              "ball",
              "for",
              "Pacific.",
              "across",
              "the"
            ],
            "targetChinese": "這位飛行員已經飛越了太平洋。",
            "targetSentence": "The pilot has flown across the Pacific."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "was caught",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "was caught (被接住)",
                "en": "was caught",
                "zh": "被接住",
                "correct": true
              },
              {
                "text": "have lived (住過)",
                "en": "have lived",
                "zh": "住過",
                "correct": false
              },
              {
                "text": "solar panel (太陽能板)",
                "en": "solar panel",
                "zh": "太陽能板",
                "correct": false
              },
              {
                "text": "visual aids (視覺輔助圖表)",
                "en": "visual aids",
                "zh": "視覺輔助圖表",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "have lived",
                "zh": "住過"
              },
              {
                "en": "was caught",
                "zh": "被接住"
              },
              {
                "en": "Major League",
                "zh": "大聯盟"
              },
              {
                "en": "space station",
                "zh": "太空站"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "jh_adv",
    "category": "junior",
    "categoryName": "國中階段",
    "categoryIcon": "🏫",
    "subLevel": "adv",
    "subLevelName": "國中・高級 (國三會考)",
    "badge": "👑 會考衝刺",
    "desc": "關係代名詞、名詞子句、間接問句、會考閱讀圖表與克漏字滿分",
    "cefr": "A2+",
    "themeColor": "#f59e0b",
    "colorClass": "u-safari",
    "lessons": [
      {
        "id": "jh_adv-l1",
        "title": "第 1 關：關係代名詞：人 (who)",
        "desc": "掌握 who hit the ball、whom 等核心詞彙",
        "icon": "⚾",
        "vocabularies": [
          {
            "en": "who hit the ball",
            "zh": "擊球的那個人"
          },
          {
            "en": "whom",
            "zh": "關係代名詞受格"
          },
          {
            "en": "teammate",
            "zh": "隊友"
          },
          {
            "en": "champion",
            "zh": "冠軍"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「who hit the ball」的正確中文意思",
            "en": "who hit the ball",
            "audioText": "who hit the ball",
            "instruction": "請問「who hit the ball」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "who hit the ball",
                "zh": "擊球的那個人",
                "emoji": "👑",
                "correct": true
              },
              {
                "en": "whose bat was signed",
                "zh": "球棒被簽名的那位",
                "emoji": "🦖",
                "correct": false
              },
              {
                "en": "Do you know where",
                "zh": "你知道在哪裡嗎",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "which broke the record",
                "zh": "破紀錄的那架",
                "emoji": "🏅",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The boy who hit the home run is my teammate.",
            "instruction": "請看中文重組成英文句子：「擊出全壘打的男孩是我的隊友。」",
            "targetTokens": [
              "The",
              "boy",
              "who",
              "hit",
              "the",
              "home",
              "run",
              "is",
              "my",
              "teammate."
            ],
            "pool": [
              "who",
              "run",
              "home",
              "my",
              "chart",
              "is",
              "The",
              "hit",
              "determine",
              "teammate.",
              "the",
              "boy"
            ],
            "targetChinese": "擊出全壘打的男孩是我的隊友。",
            "targetSentence": "The boy who hit the home run is my teammate."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "whom",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "pay (人付款買物品)",
                "en": "pay",
                "zh": "人付款買物品",
                "correct": false
              },
              {
                "text": "whom (關係代名詞受格)",
                "en": "whom",
                "zh": "關係代名詞受格",
                "correct": true
              },
              {
                "text": "who hit the ball (擊球的那個人)",
                "en": "who hit the ball",
                "zh": "擊球的那個人",
                "correct": false
              },
              {
                "text": "clue (線索提示)",
                "en": "clue",
                "zh": "線索提示",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "who hit the ball",
                "zh": "擊球的那個人"
              },
              {
                "en": "whom",
                "zh": "關係代名詞受格"
              },
              {
                "en": "teammate",
                "zh": "隊友"
              },
              {
                "en": "champion",
                "zh": "冠軍"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l2",
        "title": "第 2 關：關係代名詞：物 (which/that)",
        "desc": "掌握 which broke the record、aircraft 等核心詞彙",
        "icon": "✈️",
        "vocabularies": [
          {
            "en": "which broke the record",
            "zh": "破紀錄的那架"
          },
          {
            "en": "aircraft",
            "zh": "飛行器"
          },
          {
            "en": "speed of sound",
            "zh": "音速"
          },
          {
            "en": "legendary",
            "zh": "傳奇的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「which broke the record」的正確中文意思",
            "en": "which broke the record",
            "audioText": "which broke the record",
            "instruction": "請問「which broke the record」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "speed of sound",
                "zh": "音速",
                "emoji": "📚",
                "correct": false
              },
              {
                "en": "whose bat was signed",
                "zh": "球棒被簽名的那位",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "who hit the ball",
                "zh": "擊球的那個人",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "which broke the record",
                "zh": "破紀錄的那架",
                "emoji": "🔬",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The jet which broke the sound barrier is legendary.",
            "instruction": "請看中文重組成英文句子：「突破音障的噴射機具有傳奇色彩。」",
            "targetTokens": [
              "The",
              "jet",
              "which",
              "broke",
              "the",
              "sound",
              "barrier",
              "is",
              "legendary."
            ],
            "pool": [
              "the",
              "broke",
              "is",
              "logical",
              "sound",
              "barrier",
              "jet",
              "which",
              "The",
              "aviation",
              "legendary."
            ],
            "targetChinese": "突破音障的噴射機具有傳奇色彩。",
            "targetSentence": "The jet which broke the sound barrier is legendary."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "aircraft",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "hardship (逆境艱難)",
                "en": "hardship",
                "zh": "逆境艱難",
                "correct": false
              },
              {
                "text": "overcome (克服克服)",
                "en": "overcome",
                "zh": "克服克服",
                "correct": false
              },
              {
                "text": "aircraft (飛行器)",
                "en": "aircraft",
                "zh": "飛行器",
                "correct": true
              },
              {
                "text": "which broke the record (破紀錄的那架)",
                "en": "which broke the record",
                "zh": "破紀錄的那架",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "which broke the record",
                "zh": "破紀錄的那架"
              },
              {
                "en": "aircraft",
                "zh": "飛行器"
              },
              {
                "en": "speed of sound",
                "zh": "音速"
              },
              {
                "en": "legendary",
                "zh": "傳奇的"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l3",
        "title": "第 3 關：關係代名詞：所有格 (whose)",
        "desc": "掌握 whose bat was signed、autograph 等核心詞彙",
        "icon": "🏷️",
        "vocabularies": [
          {
            "en": "whose bat was signed",
            "zh": "球棒被簽名的那位"
          },
          {
            "en": "autograph",
            "zh": "親筆簽名"
          },
          {
            "en": "admire",
            "zh": "欽佩"
          },
          {
            "en": "talent",
            "zh": "天賦才華"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「whose bat was signed」的正確中文意思",
            "en": "whose bat was signed",
            "audioText": "whose bat was signed",
            "instruction": "請問「whose bat was signed」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "Do you know where",
                "zh": "你知道在哪裡嗎",
                "emoji": "🏅",
                "correct": false
              },
              {
                "en": "whose bat was signed",
                "zh": "球棒被簽名的那位",
                "emoji": "👑",
                "correct": true
              },
              {
                "en": "who hit the ball",
                "zh": "擊球的那個人",
                "emoji": "🦖",
                "correct": false
              },
              {
                "en": "which broke the record",
                "zh": "破紀錄的那架",
                "emoji": "📊",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The girl whose drone won first prize smiled.",
            "instruction": "請看中文重組成英文句子：「那架無人機榮獲首獎的女孩露出了微笑。」",
            "targetTokens": [
              "The",
              "girl",
              "whose",
              "drone",
              "won",
              "first",
              "prize",
              "smiled."
            ],
            "pool": [
              "girl",
              "prize",
              "won",
              "whose",
              "The",
              "innovative",
              "first",
              "smiled.",
              "record",
              "drone"
            ],
            "targetChinese": "那架無人機榮獲首獎的女孩露出了微笑。",
            "targetSentence": "The girl whose drone won first prize smiled."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "autograph",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "determine (決定)",
                "en": "determine",
                "zh": "決定",
                "correct": false
              },
              {
                "text": "autograph (親筆簽名)",
                "en": "autograph",
                "zh": "親筆簽名",
                "correct": true
              },
              {
                "text": "evolution (演化)",
                "en": "evolution",
                "zh": "演化",
                "correct": false
              },
              {
                "text": "whose bat was signed (球棒被簽名的那位)",
                "en": "whose bat was signed",
                "zh": "球棒被簽名的那位",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "whose bat was signed",
                "zh": "球棒被簽名的那位"
              },
              {
                "en": "autograph",
                "zh": "親筆簽名"
              },
              {
                "en": "admire",
                "zh": "欽佩"
              },
              {
                "en": "talent",
                "zh": "天賦才華"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l4",
        "title": "第 4 關：名詞子句：that 引導",
        "desc": "掌握 believe that、fact that 等核心詞彙",
        "icon": "💡",
        "vocabularies": [
          {
            "en": "believe that",
            "zh": "深信..."
          },
          {
            "en": "fact that",
            "zh": "事實是..."
          },
          {
            "en": "perseverance",
            "zh": "毅力"
          },
          {
            "en": "success",
            "zh": "成功"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「believe that」的正確中文意思",
            "en": "believe that",
            "audioText": "believe that",
            "instruction": "請問「believe that」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "in addition",
                "zh": "除此之外",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "fact that",
                "zh": "事實是...",
                "emoji": "📚",
                "correct": false
              },
              {
                "en": "believe that",
                "zh": "深信...",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "perseverance",
                "zh": "毅力",
                "emoji": "🎯",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "I believe that perseverance leads to great achievement.",
            "instruction": "請看中文重組成英文句子：「我相信堅持不懈會帶來偉大的成就。」",
            "targetTokens": [
              "I",
              "believe",
              "that",
              "perseverance",
              "leads",
              "to",
              "great",
              "achievement."
            ],
            "pool": [
              "give",
              "perseverance",
              "great",
              "believe",
              "achievement.",
              "that",
              "I",
              "to",
              "take",
              "leads"
            ],
            "targetChinese": "我相信堅持不懈會帶來偉大的成就。",
            "targetSentence": "I believe that perseverance leads to great achievement."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "fact that",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "believe that (深信...)",
                "en": "believe that",
                "zh": "深信...",
                "correct": false
              },
              {
                "text": "fact that (事實是...)",
                "en": "fact that",
                "zh": "事實是...",
                "correct": true
              },
              {
                "text": "in addition (除此之外)",
                "en": "in addition",
                "zh": "除此之外",
                "correct": false
              },
              {
                "text": "bar chart (長條圖)",
                "en": "bar chart",
                "zh": "長條圖",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "believe that",
                "zh": "深信..."
              },
              {
                "en": "fact that",
                "zh": "事實是..."
              },
              {
                "en": "perseverance",
                "zh": "毅力"
              },
              {
                "en": "success",
                "zh": "成功"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l5",
        "title": "第 5 關：間接問句轉換法則",
        "desc": "掌握 Do you know where、tell me what 等核心詞彙",
        "icon": "❓",
        "vocabularies": [
          {
            "en": "Do you know where",
            "zh": "你知道在哪裡嗎"
          },
          {
            "en": "tell me what",
            "zh": "告訴我什麼"
          },
          {
            "en": "location",
            "zh": "位置"
          },
          {
            "en": "schedule",
            "zh": "時刻表"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「Do you know where」的正確中文意思",
            "en": "Do you know where",
            "audioText": "Do you know where",
            "instruction": "請問「Do you know where」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "tell me what",
                "zh": "告訴我什麼",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "who hit the ball",
                "zh": "擊球的那個人",
                "emoji": "🦖",
                "correct": false
              },
              {
                "en": "whose bat was signed",
                "zh": "球棒被簽名的那位",
                "emoji": "🏅",
                "correct": false
              },
              {
                "en": "Do you know where",
                "zh": "你知道在哪裡嗎",
                "emoji": "👑",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Do you know where the airport is located?",
            "instruction": "請看中文重組成英文句子：「你知道機場位於何處嗎？」",
            "targetTokens": [
              "Do",
              "you",
              "know",
              "where",
              "the",
              "airport",
              "is",
              "located?"
            ],
            "pool": [
              "know",
              "you",
              "where",
              "cost",
              "is",
              "doubt",
              "Do",
              "airport",
              "the",
              "located?"
            ],
            "targetChinese": "你知道機場位於何處嗎？",
            "targetSentence": "Do you know where the airport is located?"
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "tell me what",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "Do you know where (你知道在哪裡嗎)",
                "en": "Do you know where",
                "zh": "你知道在哪裡嗎",
                "correct": false
              },
              {
                "text": "speed of sound (音速)",
                "en": "speed of sound",
                "zh": "音速",
                "correct": false
              },
              {
                "text": "whether or not (是否)",
                "en": "whether or not",
                "zh": "是否",
                "correct": false
              },
              {
                "text": "tell me what (告訴我什麼)",
                "en": "tell me what",
                "zh": "告訴我什麼",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "Do you know where",
                "zh": "你知道在哪裡嗎"
              },
              {
                "en": "tell me what",
                "zh": "告訴我什麼"
              },
              {
                "en": "location",
                "zh": "位置"
              },
              {
                "en": "schedule",
                "zh": "時刻表"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l6",
        "title": "第 6 關：whether / if 條件疑問子句",
        "desc": "掌握 whether or not、doubt 等核心詞彙",
        "icon": "⚖️",
        "vocabularies": [
          {
            "en": "whether or not",
            "zh": "是否"
          },
          {
            "en": "doubt",
            "zh": "懷疑"
          },
          {
            "en": "determine",
            "zh": "決定"
          },
          {
            "en": "outcome",
            "zh": "比賽結果"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「whether or not」的正確中文意思",
            "en": "whether or not",
            "audioText": "whether or not",
            "instruction": "請問「whether or not」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "whether or not",
                "zh": "是否",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "speed of sound",
                "zh": "音速",
                "emoji": "📚",
                "correct": false
              },
              {
                "en": "give someone something",
                "zh": "給某人某物",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "tell me what",
                "zh": "告訴我什麼",
                "emoji": "🎯",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "I wonder whether the baseball match will continue.",
            "instruction": "請看中文重組成英文句子：「我想知道棒球賽是否會繼續進行。」",
            "targetTokens": [
              "I",
              "wonder",
              "whether",
              "the",
              "baseball",
              "match",
              "will",
              "continue."
            ],
            "pool": [
              "whether",
              "continue.",
              "match",
              "the",
              "baseball",
              "will",
              "I",
              "feathers",
              "whose",
              "wonder"
            ],
            "targetChinese": "我想知道棒球賽是否會繼續進行。",
            "targetSentence": "I wonder whether the baseball match will continue."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "doubt",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "whether or not (是否)",
                "en": "whether or not",
                "zh": "是否",
                "correct": false
              },
              {
                "text": "doubt (懷疑)",
                "en": "doubt",
                "zh": "懷疑",
                "correct": true
              },
              {
                "text": "spend (人花時間金錢)",
                "en": "spend",
                "zh": "人花時間金錢",
                "correct": false
              },
              {
                "text": "however (然而)",
                "en": "however",
                "zh": "然而",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "whether or not",
                "zh": "是否"
              },
              {
                "en": "doubt",
                "zh": "懷疑"
              },
              {
                "en": "determine",
                "zh": "決定"
              },
              {
                "en": "outcome",
                "zh": "比賽結果"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l7",
        "title": "第 7 關：花費動詞四重奏辨析",
        "desc": "掌握 cost、spend 等核心詞彙",
        "icon": "💰",
        "vocabularies": [
          {
            "en": "cost",
            "zh": "物品花費金錢"
          },
          {
            "en": "spend",
            "zh": "人花時間金錢"
          },
          {
            "en": "take",
            "zh": "事情花費時間"
          },
          {
            "en": "pay",
            "zh": "人付款買物品"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「cost」的正確中文意思",
            "en": "cost",
            "audioText": "cost",
            "instruction": "請問「cost」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "spend",
                "zh": "人花時間金錢",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "clue",
                "zh": "線索提示",
                "emoji": "🏅",
                "correct": false
              },
              {
                "en": "cost",
                "zh": "物品花費金錢",
                "emoji": "👑",
                "correct": true
              },
              {
                "en": "take",
                "zh": "事情花費時間",
                "emoji": "🦖",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "It took two hours to finish the project.",
            "instruction": "請看中文重組成英文句子：「花了兩個小時才完成這個專案。」",
            "targetTokens": [
              "It",
              "took",
              "two",
              "hours",
              "to",
              "finish",
              "the",
              "project."
            ],
            "pool": [
              "finish",
              "two",
              "bar",
              "It",
              "project.",
              "the",
              "fact",
              "took",
              "to",
              "hours"
            ],
            "targetChinese": "花了兩個小時才完成這個專案。",
            "targetSentence": "It took two hours to finish the project."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "spend",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "whom (關係代名詞受格)",
                "en": "whom",
                "zh": "關係代名詞受格",
                "correct": false
              },
              {
                "text": "cost (物品花費金錢)",
                "en": "cost",
                "zh": "物品花費金錢",
                "correct": false
              },
              {
                "text": "spend (人花時間金錢)",
                "en": "spend",
                "zh": "人花時間金錢",
                "correct": true
              },
              {
                "text": "doubt (懷疑)",
                "en": "doubt",
                "zh": "懷疑",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "cost",
                "zh": "物品花費金錢"
              },
              {
                "en": "spend",
                "zh": "人花時間金錢"
              },
              {
                "en": "take",
                "zh": "事情花費時間"
              },
              {
                "en": "pay",
                "zh": "人付款買物品"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l8",
        "title": "第 8 關：授與動詞雙賓語結構",
        "desc": "掌握 give someone something、send to 等核心詞彙",
        "icon": "🎁",
        "vocabularies": [
          {
            "en": "give someone something",
            "zh": "給某人某物"
          },
          {
            "en": "send to",
            "zh": "寄給"
          },
          {
            "en": "buy for",
            "zh": "為...購買"
          },
          {
            "en": "pass to",
            "zh": "傳球給"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「give someone something」的正確中文意思",
            "en": "give someone something",
            "audioText": "give someone something",
            "instruction": "請問「give someone something」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "send to",
                "zh": "寄給",
                "emoji": "📚",
                "correct": false
              },
              {
                "en": "buy for",
                "zh": "為...購買",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "pass to",
                "zh": "傳球給",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "give someone something",
                "zh": "給某人某物",
                "emoji": "🔬",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The pitcher gave the baseball to the coach.",
            "instruction": "請看中文重組成英文句子：「投手把棒球遞給了教練。」",
            "targetTokens": [
              "The",
              "pitcher",
              "gave",
              "the",
              "baseball",
              "to",
              "the",
              "coach."
            ],
            "pool": [
              "bar",
              "The",
              "location",
              "pitcher",
              "the",
              "baseball",
              "to",
              "gave",
              "the",
              "coach."
            ],
            "targetChinese": "投手把棒球遞給了教練。",
            "targetSentence": "The pitcher gave the baseball to the coach."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "send to",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "bar chart (長條圖)",
                "en": "bar chart",
                "zh": "長條圖",
                "correct": false
              },
              {
                "text": "fact that (事實是...)",
                "en": "fact that",
                "zh": "事實是...",
                "correct": false
              },
              {
                "text": "give someone something (給某人某物)",
                "en": "give someone something",
                "zh": "給某人某物",
                "correct": false
              },
              {
                "text": "send to (寄給)",
                "en": "send to",
                "zh": "寄給",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "give someone something",
                "zh": "給某人某物"
              },
              {
                "en": "send to",
                "zh": "寄給"
              },
              {
                "en": "buy for",
                "zh": "為...購買"
              },
              {
                "en": "pass to",
                "zh": "傳球給"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l9",
        "title": "第 9 關：會考素養閱讀：傳奇運動員",
        "desc": "掌握 biography、hardship 等核心詞彙",
        "icon": "📖",
        "vocabularies": [
          {
            "en": "biography",
            "zh": "傳記"
          },
          {
            "en": "hardship",
            "zh": "逆境艱難"
          },
          {
            "en": "overcome",
            "zh": "克服克服"
          },
          {
            "en": "inspire",
            "zh": "啟發激勵"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「biography」的正確中文意思",
            "en": "biography",
            "audioText": "biography",
            "instruction": "請問「biography」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "determine",
                "zh": "決定",
                "emoji": "🏅",
                "correct": false
              },
              {
                "en": "biography",
                "zh": "傳記",
                "emoji": "👑",
                "correct": true
              },
              {
                "en": "hardship",
                "zh": "逆境艱難",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "overcome",
                "zh": "克服克服",
                "emoji": "🦖",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "His remarkable story inspired millions of young athletes.",
            "instruction": "請看中文重組成英文句子：「他的精彩故事激勵了數百萬名年輕運動員。」",
            "targetTokens": [
              "His",
              "remarkable",
              "story",
              "inspired",
              "millions",
              "of",
              "young",
              "athletes."
            ],
            "pool": [
              "His",
              "remarkable",
              "story",
              "young",
              "whose",
              "athletes.",
              "hit",
              "inspired",
              "of",
              "millions"
            ],
            "targetChinese": "他的精彩故事激勵了數百萬名年輕運動員。",
            "targetSentence": "His remarkable story inspired millions of young athletes."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "hardship",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "biography (傳記)",
                "en": "biography",
                "zh": "傳記",
                "correct": false
              },
              {
                "text": "teammate (隊友)",
                "en": "teammate",
                "zh": "隊友",
                "correct": false
              },
              {
                "text": "accurate (精準的)",
                "en": "accurate",
                "zh": "精準的",
                "correct": false
              },
              {
                "text": "hardship (逆境艱難)",
                "en": "hardship",
                "zh": "逆境艱難",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "biography",
                "zh": "傳記"
              },
              {
                "en": "hardship",
                "zh": "逆境艱難"
              },
              {
                "en": "overcome",
                "zh": "克服克服"
              },
              {
                "en": "inspire",
                "zh": "啟發激勵"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l10",
        "title": "第 10 關：會考圖表閱讀：航線與氣候",
        "desc": "掌握 aviation weather、telemetry 等核心詞彙",
        "icon": "📊",
        "vocabularies": [
          {
            "en": "aviation weather",
            "zh": "航空氣象"
          },
          {
            "en": "telemetry",
            "zh": "遙測數據"
          },
          {
            "en": "bar chart",
            "zh": "長條圖"
          },
          {
            "en": "percentage",
            "zh": "百分比"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「aviation weather」的正確中文意思",
            "en": "aviation weather",
            "audioText": "aviation weather",
            "instruction": "請問「aviation weather」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "bar chart",
                "zh": "長條圖",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "augmented reality",
                "zh": "擴增實境",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "telemetry",
                "zh": "遙測數據",
                "emoji": "📚",
                "correct": false
              },
              {
                "en": "aviation weather",
                "zh": "航空氣象",
                "emoji": "🔬",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The graph illustrates wind speed during flight.",
            "instruction": "請看中文重組成英文句子：「這張圖表說明了飛行期間的風速。」",
            "targetTokens": [
              "The",
              "graph",
              "illustrates",
              "wind",
              "speed",
              "during",
              "flight."
            ],
            "pool": [
              "The",
              "flight.",
              "clue",
              "wind",
              "speed",
              "graph",
              "during",
              "illustrates",
              "give"
            ],
            "targetChinese": "這張圖表說明了飛行期間的風速。",
            "targetSentence": "The graph illustrates wind speed during flight."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "telemetry",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "telemetry (遙測數據)",
                "en": "telemetry",
                "zh": "遙測數據",
                "correct": true
              },
              {
                "text": "aviation weather (航空氣象)",
                "en": "aviation weather",
                "zh": "航空氣象",
                "correct": false
              },
              {
                "text": "evolution (演化)",
                "en": "evolution",
                "zh": "演化",
                "correct": false
              },
              {
                "text": "autograph (親筆簽名)",
                "en": "autograph",
                "zh": "親筆簽名",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "aviation weather",
                "zh": "航空氣象"
              },
              {
                "en": "telemetry",
                "zh": "遙測數據"
              },
              {
                "en": "bar chart",
                "zh": "長條圖"
              },
              {
                "en": "percentage",
                "zh": "百分比"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l11",
        "title": "第 11 關：科技論壇：AR擴增實境撞球",
        "desc": "掌握 augmented reality、simulation 等核心詞彙",
        "icon": "👓",
        "vocabularies": [
          {
            "en": "augmented reality",
            "zh": "擴增實境"
          },
          {
            "en": "simulation",
            "zh": "模擬"
          },
          {
            "en": "trajectory",
            "zh": "運動軌跡"
          },
          {
            "en": "innovative",
            "zh": "創新的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「augmented reality」的正確中文意思",
            "en": "augmented reality",
            "audioText": "augmented reality",
            "instruction": "請問「augmented reality」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "logical transition",
                "zh": "邏輯承轉",
                "emoji": "🏅",
                "correct": false
              },
              {
                "en": "simulation",
                "zh": "模擬",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "augmented reality",
                "zh": "擴增實境",
                "emoji": "👑",
                "correct": true
              },
              {
                "en": "trajectory",
                "zh": "運動軌跡",
                "emoji": "🦖",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "AR glasses show the billiard ball trajectory in real time.",
            "instruction": "請看中文重組成英文句子：「擴增實境眼鏡即時顯示撞球行進軌跡。」",
            "targetTokens": [
              "AR",
              "glasses",
              "show",
              "the",
              "billiard",
              "ball",
              "trajectory",
              "in",
              "real",
              "time."
            ],
            "pool": [
              "billiard",
              "time.",
              "hardship",
              "in",
              "show",
              "trajectory",
              "ball",
              "real",
              "the",
              "AR",
              "therefore",
              "glasses"
            ],
            "targetChinese": "擴增實境眼鏡即時顯示撞球行進軌跡。",
            "targetSentence": "AR glasses show the billiard ball trajectory in real time."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "simulation",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "innovation (創新技術)",
                "en": "innovation",
                "zh": "創新技術",
                "correct": false
              },
              {
                "text": "augmented reality (擴增實境)",
                "en": "augmented reality",
                "zh": "擴增實境",
                "correct": false
              },
              {
                "text": "therefore (因此)",
                "en": "therefore",
                "zh": "因此",
                "correct": false
              },
              {
                "text": "simulation (模擬)",
                "en": "simulation",
                "zh": "模擬",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "augmented reality",
                "zh": "擴增實境"
              },
              {
                "en": "simulation",
                "zh": "模擬"
              },
              {
                "en": "trajectory",
                "zh": "運動軌跡"
              },
              {
                "en": "innovative",
                "zh": "創新的"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l12",
        "title": "第 12 關：演化生物學：恐龍到鳥類",
        "desc": "掌握 paleontology、evolution 等核心詞彙",
        "icon": "🦖",
        "vocabularies": [
          {
            "en": "paleontology",
            "zh": "古生物學"
          },
          {
            "en": "evolution",
            "zh": "演化"
          },
          {
            "en": "feathers",
            "zh": "羽毛"
          },
          {
            "en": "ancestor",
            "zh": "祖先"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「paleontology」的正確中文意思",
            "en": "paleontology",
            "audioText": "paleontology",
            "instruction": "請問「paleontology」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "feathers",
                "zh": "羽毛",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "evolution",
                "zh": "演化",
                "emoji": "📚",
                "correct": false
              },
              {
                "en": "furthermore",
                "zh": "此外進一步",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "paleontology",
                "zh": "古生物學",
                "emoji": "🔬",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Fossils prove that birds evolved from feathered dinosaurs.",
            "instruction": "請看中文重組成英文句子：「化石證實鳥類是由帶羽毛的恐龍演化而來的。」",
            "targetTokens": [
              "Fossils",
              "prove",
              "that",
              "birds",
              "evolved",
              "from",
              "feathered",
              "dinosaurs."
            ],
            "pool": [
              "pay",
              "from",
              "evolved",
              "feathered",
              "Fossils",
              "birds",
              "prove",
              "dinosaurs.",
              "competition",
              "that"
            ],
            "targetChinese": "化石證實鳥類是由帶羽毛的恐龍演化而來的。",
            "targetSentence": "Fossils prove that birds evolved from feathered dinosaurs."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "evolution",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "evolution (演化)",
                "en": "evolution",
                "zh": "演化",
                "correct": true
              },
              {
                "text": "legendary (傳奇的)",
                "en": "legendary",
                "zh": "傳奇的",
                "correct": false
              },
              {
                "text": "determine (決定)",
                "en": "determine",
                "zh": "決定",
                "correct": false
              },
              {
                "text": "paleontology (古生物學)",
                "en": "paleontology",
                "zh": "古生物學",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "paleontology",
                "zh": "古生物學"
              },
              {
                "en": "evolution",
                "zh": "演化"
              },
              {
                "en": "feathers",
                "zh": "羽毛"
              },
              {
                "en": "ancestor",
                "zh": "祖先"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l13",
        "title": "第 13 關：世界青少年機器人大賽",
        "desc": "掌握 competition、autonomous 等核心詞彙",
        "icon": "🤖",
        "vocabularies": [
          {
            "en": "competition",
            "zh": "競賽"
          },
          {
            "en": "autonomous",
            "zh": "自主全自動"
          },
          {
            "en": "innovation",
            "zh": "創新技術"
          },
          {
            "en": "teamwork",
            "zh": "隊伍默契"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「competition」的正確中文意思",
            "en": "competition",
            "audioText": "competition",
            "instruction": "請問「competition」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "paleontology",
                "zh": "古生物學",
                "emoji": "🏅",
                "correct": false
              },
              {
                "en": "autonomous",
                "zh": "自主全自動",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "innovation",
                "zh": "創新技術",
                "emoji": "🦖",
                "correct": false
              },
              {
                "en": "competition",
                "zh": "競賽",
                "emoji": "👑",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The autonomous robot navigated the maze smoothly.",
            "instruction": "請看中文重組成英文句子：「自主機器人順暢地走出了迷宮。」",
            "targetTokens": [
              "The",
              "autonomous",
              "robot",
              "navigated",
              "the",
              "maze",
              "smoothly."
            ],
            "pool": [
              "autonomous",
              "context",
              "navigated",
              "The",
              "telemetry",
              "the",
              "maze",
              "smoothly.",
              "robot"
            ],
            "targetChinese": "自主機器人順暢地走出了迷宮。",
            "targetSentence": "The autonomous robot navigated the maze smoothly."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "autonomous",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "autonomous (自主全自動)",
                "en": "autonomous",
                "zh": "自主全自動",
                "correct": true
              },
              {
                "text": "determine (決定)",
                "en": "determine",
                "zh": "決定",
                "correct": false
              },
              {
                "text": "percentage (百分比)",
                "en": "percentage",
                "zh": "百分比",
                "correct": false
              },
              {
                "text": "competition (競賽)",
                "en": "competition",
                "zh": "競賽",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "competition",
                "zh": "競賽"
              },
              {
                "en": "autonomous",
                "zh": "自主全自動"
              },
              {
                "en": "innovation",
                "zh": "創新技術"
              },
              {
                "en": "teamwork",
                "zh": "隊伍默契"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l14",
        "title": "第 14 關：篇章結構轉折連接詞",
        "desc": "掌握 however、furthermore 等核心詞彙",
        "icon": "🔗",
        "vocabularies": [
          {
            "en": "however",
            "zh": "然而"
          },
          {
            "en": "furthermore",
            "zh": "此外進一步"
          },
          {
            "en": "therefore",
            "zh": "因此"
          },
          {
            "en": "in addition",
            "zh": "除此之外"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「however」的正確中文意思",
            "en": "however",
            "audioText": "however",
            "instruction": "請問「however」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "furthermore",
                "zh": "此外進一步",
                "emoji": "📚",
                "correct": false
              },
              {
                "en": "however",
                "zh": "然而",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "therefore",
                "zh": "因此",
                "emoji": "🎯",
                "correct": false
              },
              {
                "en": "success",
                "zh": "成功",
                "emoji": "💡",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The game was tough; however, they never gave up.",
            "instruction": "請看中文重組成英文句子：「比賽很艱難，然而他們從未放棄。」",
            "targetTokens": [
              "The",
              "game",
              "was",
              "tough;",
              "however,",
              "they",
              "never",
              "gave",
              "up."
            ],
            "pool": [
              "who",
              "tough;",
              "game",
              "they",
              "never",
              "was",
              "not",
              "The",
              "gave",
              "up.",
              "however,"
            ],
            "targetChinese": "比賽很艱難，然而他們從未放棄。",
            "targetSentence": "The game was tough; however, they never gave up."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "furthermore",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "however (然而)",
                "en": "however",
                "zh": "然而",
                "correct": false
              },
              {
                "text": "furthermore (此外進一步)",
                "en": "furthermore",
                "zh": "此外進一步",
                "correct": true
              },
              {
                "text": "competition (競賽)",
                "en": "competition",
                "zh": "競賽",
                "correct": false
              },
              {
                "text": "autonomous (自主全自動)",
                "en": "autonomous",
                "zh": "自主全自動",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "however",
                "zh": "然而"
              },
              {
                "en": "furthermore",
                "zh": "此外進一步"
              },
              {
                "en": "therefore",
                "zh": "因此"
              },
              {
                "en": "in addition",
                "zh": "除此之外"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l15",
        "title": "第 15 關：會考全真克漏字模擬題",
        "desc": "掌握 context、logical transition 等核心詞彙",
        "icon": "📝",
        "vocabularies": [
          {
            "en": "context",
            "zh": "上下文語境"
          },
          {
            "en": "logical transition",
            "zh": "邏輯承轉"
          },
          {
            "en": "clue",
            "zh": "線索提示"
          },
          {
            "en": "accurate",
            "zh": "精準的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「context」的正確中文意思",
            "en": "context",
            "audioText": "context",
            "instruction": "請問「context」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "hardship",
                "zh": "逆境艱難",
                "emoji": "🏅",
                "correct": false
              },
              {
                "en": "logical transition",
                "zh": "邏輯承轉",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "clue",
                "zh": "線索提示",
                "emoji": "🦖",
                "correct": false
              },
              {
                "en": "context",
                "zh": "上下文語境",
                "emoji": "👑",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Read the context carefully to find the correct answer.",
            "instruction": "請看中文重組成英文句子：「仔細閱讀前後文以找出正確答案。」",
            "targetTokens": [
              "Read",
              "the",
              "context",
              "carefully",
              "to",
              "find",
              "the",
              "correct",
              "answer."
            ],
            "pool": [
              "find",
              "the",
              "context",
              "aviation",
              "to",
              "answer.",
              "the",
              "what",
              "Read",
              "carefully",
              "correct"
            ],
            "targetChinese": "仔細閱讀前後文以找出正確答案。",
            "targetSentence": "Read the context carefully to find the correct answer."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "logical transition",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "logical transition (邏輯承轉)",
                "en": "logical transition",
                "zh": "邏輯承轉",
                "correct": true
              },
              {
                "text": "context (上下文語境)",
                "en": "context",
                "zh": "上下文語境",
                "correct": false
              },
              {
                "text": "aviation weather (航空氣象)",
                "en": "aviation weather",
                "zh": "航空氣象",
                "correct": false
              },
              {
                "text": "augmented reality (擴增實境)",
                "en": "augmented reality",
                "zh": "擴增實境",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "context",
                "zh": "上下文語境"
              },
              {
                "en": "logical transition",
                "zh": "邏輯承轉"
              },
              {
                "en": "clue",
                "zh": "線索提示"
              },
              {
                "en": "accurate",
                "zh": "精準的"
              }
            ]
          }
        ]
      },
      {
        "id": "jh_adv-l16",
        "title": "第 16 關：國中畢業會考金牌魔王",
        "desc": "掌握 who hit the ball、which broke the record 等核心詞彙",
        "icon": "👑",
        "vocabularies": [
          {
            "en": "who hit the ball",
            "zh": "擊球者"
          },
          {
            "en": "which broke the record",
            "zh": "破紀錄者"
          },
          {
            "en": "perseverance",
            "zh": "毅力"
          },
          {
            "en": "evolution",
            "zh": "演化"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「who hit the ball」的正確中文意思",
            "en": "who hit the ball",
            "audioText": "who hit the ball",
            "instruction": "請問「who hit the ball」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "which broke the record",
                "zh": "破紀錄者",
                "emoji": "📚",
                "correct": false
              },
              {
                "en": "whose bat was signed",
                "zh": "球棒被簽名的那位",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "who hit the ball",
                "zh": "擊球者",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "Do you know where",
                "zh": "你知道在哪裡嗎",
                "emoji": "🎯",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The student who perseveres will achieve great success.",
            "instruction": "請看中文重組成英文句子：「堅持不懈的學生將會獲得巨大成功。」",
            "targetTokens": [
              "The",
              "student",
              "who",
              "perseveres",
              "will",
              "achieve",
              "great",
              "success."
            ],
            "pool": [
              "student",
              "who",
              "innovative",
              "great",
              "achieve",
              "The",
              "success.",
              "perseveres",
              "chart",
              "will"
            ],
            "targetChinese": "堅持不懈的學生將會獲得巨大成功。",
            "targetSentence": "The student who perseveres will achieve great success."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "which broke the record",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "who hit the ball (擊球者)",
                "en": "who hit the ball",
                "zh": "擊球者",
                "correct": false
              },
              {
                "text": "which broke the record (破紀錄者)",
                "en": "which broke the record",
                "zh": "破紀錄者",
                "correct": true
              },
              {
                "text": "Do you know where (你知道在哪裡嗎)",
                "en": "Do you know where",
                "zh": "你知道在哪裡嗎",
                "correct": false
              },
              {
                "text": "whose bat was signed (球棒被簽名的那位)",
                "en": "whose bat was signed",
                "zh": "球棒被簽名的那位",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "who hit the ball",
                "zh": "擊球者"
              },
              {
                "en": "which broke the record",
                "zh": "破紀錄者"
              },
              {
                "en": "perseverance",
                "zh": "毅力"
              },
              {
                "en": "evolution",
                "zh": "演化"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "sh_beg",
    "category": "senior",
    "categoryName": "高中階段",
    "categoryIcon": "🏛️",
    "subLevel": "beg",
    "subLevelName": "高中・初級 (高一)",
    "badge": "🚀 高中菁英",
    "desc": "高中4500單、分詞構句、倒裝句、運動數據分析與空氣動力學",
    "cefr": "B1-",
    "themeColor": "#0369a1",
    "colorClass": "u-plane",
    "lessons": [
      {
        "id": "sh_beg-l1",
        "title": "第 1 關：高一核心高頻詞彙",
        "desc": "掌握 crucial、emphasize 等核心詞彙",
        "icon": "📚",
        "vocabularies": [
          {
            "en": "crucial",
            "zh": "關鍵極重要的"
          },
          {
            "en": "emphasize",
            "zh": "強調"
          },
          {
            "en": "perspective",
            "zh": "觀點角度"
          },
          {
            "en": "foundation",
            "zh": "基礎基石"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「crucial」的正確中文意思",
            "en": "crucial",
            "audioText": "crucial",
            "instruction": "請問「crucial」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "perspective",
                "zh": "觀點角度",
                "emoji": "✈️",
                "correct": false
              },
              {
                "en": "emphasize",
                "zh": "強調",
                "emoji": "📈",
                "correct": false
              },
              {
                "en": "crucial",
                "zh": "關鍵極重要的",
                "emoji": "🚀",
                "correct": true
              },
              {
                "en": "empathy",
                "zh": "同理心",
                "emoji": "⚾",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Developing critical thinking is crucial for high school.",
            "instruction": "請看中文重組成英文句子：「培養批判性思維對高中生至關重要。」",
            "targetTokens": [
              "Developing",
              "critical",
              "thinking",
              "is",
              "crucial",
              "for",
              "high",
              "school."
            ],
            "pool": [
              "critical",
              "need",
              "wellbeing",
              "high",
              "school.",
              "is",
              "thinking",
              "crucial",
              "Developing",
              "for"
            ],
            "targetChinese": "培養批判性思維對高中生至關重要。",
            "targetSentence": "Developing critical thinking is crucial for high school."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "emphasize",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "crucial (關鍵極重要的)",
                "en": "crucial",
                "zh": "關鍵極重要的",
                "correct": false
              },
              {
                "text": "diplomacy (外交禮儀)",
                "en": "diplomacy",
                "zh": "外交禮儀",
                "correct": false
              },
              {
                "text": "exhausted (筋疲力竭的)",
                "en": "exhausted",
                "zh": "筋疲力竭的",
                "correct": false
              },
              {
                "text": "emphasize (強調)",
                "en": "emphasize",
                "zh": "強調",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "crucial",
                "zh": "關鍵極重要的"
              },
              {
                "en": "emphasize",
                "zh": "強調"
              },
              {
                "en": "perspective",
                "zh": "觀點角度"
              },
              {
                "en": "foundation",
                "zh": "基礎基石"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l2",
        "title": "第 2 關：現在分詞與過去分詞形容詞",
        "desc": "掌握 fascinating、exhausted 等核心詞彙",
        "icon": "🎭",
        "vocabularies": [
          {
            "en": "fascinating",
            "zh": "迷人的"
          },
          {
            "en": "exhausted",
            "zh": "筋疲力竭的"
          },
          {
            "en": "thrilled",
            "zh": "興奮無比的"
          },
          {
            "en": "surprising",
            "zh": "令人驚訝的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「fascinating」的正確中文意思",
            "en": "fascinating",
            "audioText": "fascinating",
            "instruction": "請問「fascinating」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "fascinating",
                "zh": "迷人的",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "exhausted",
                "zh": "筋疲力竭的",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "approaching",
                "zh": "接近中",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "thrilled",
                "zh": "興奮無比的",
                "emoji": "🏛️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The thrilling baseball game kept spectators on their toes.",
            "instruction": "請看中文重組成英文句子：「這場驚心動魄的棒球賽讓觀眾們屏息凝神。」",
            "targetTokens": [
              "The",
              "thrilling",
              "baseball",
              "game",
              "kept",
              "spectators",
              "on",
              "their",
              "toes."
            ],
            "pool": [
              "baseball",
              "game",
              "Over",
              "kept",
              "most",
              "thrilling",
              "their",
              "on",
              "The",
              "toes.",
              "spectators"
            ],
            "targetChinese": "這場驚心動魄的棒球賽讓觀眾們屏息凝神。",
            "targetSentence": "The thrilling baseball game kept spectators on their toes."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "exhausted",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "fascinating (迷人的)",
                "en": "fascinating",
                "zh": "迷人的",
                "correct": false
              },
              {
                "text": "inference (推論判斷)",
                "en": "inference",
                "zh": "推論判斷",
                "correct": false
              },
              {
                "text": "diplomacy (外交禮儀)",
                "en": "diplomacy",
                "zh": "外交禮儀",
                "correct": false
              },
              {
                "text": "exhausted (筋疲力竭的)",
                "en": "exhausted",
                "zh": "筋疲力竭的",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "fascinating",
                "zh": "迷人的"
              },
              {
                "en": "exhausted",
                "zh": "筋疲力竭的"
              },
              {
                "en": "thrilled",
                "zh": "興奮無比的"
              },
              {
                "en": "surprising",
                "zh": "令人驚訝的"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l3",
        "title": "第 3 關：分詞構句基本型式",
        "desc": "掌握 Seeing the pitch、hearing the roar 等核心詞彙",
        "icon": "⚡",
        "vocabularies": [
          {
            "en": "Seeing the pitch",
            "zh": "看見來球之際"
          },
          {
            "en": "hearing the roar",
            "zh": "聽見吼聲"
          },
          {
            "en": "approaching",
            "zh": "接近中"
          },
          {
            "en": "reacting",
            "zh": "迅速反應"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「Seeing the pitch」的正確中文意思",
            "en": "Seeing the pitch",
            "audioText": "Seeing the pitch",
            "instruction": "請問「Seeing the pitch」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "Seeing the pitch",
                "zh": "看見來球之際",
                "emoji": "🚀",
                "correct": true
              },
              {
                "en": "hearing the roar",
                "zh": "聽見吼聲",
                "emoji": "📈",
                "correct": false
              },
              {
                "en": "would rather than",
                "zh": "寧願...也不願...",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "what he achieved",
                "zh": "他所達成的成就",
                "emoji": "✈️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Seeing the fast pitch, he swung the bat with power.",
            "instruction": "請看中文重組成英文句子：「看見快速球飛來，他使盡全力揮棒。」",
            "targetTokens": [
              "Seeing",
              "the",
              "fast",
              "pitch,",
              "he",
              "swung",
              "the",
              "bat",
              "with",
              "power."
            ],
            "pool": [
              "the",
              "Seeing",
              "surprising",
              "fast",
              "with",
              "they",
              "power.",
              "bat",
              "the",
              "swung",
              "pitch,",
              "he"
            ],
            "targetChinese": "看見快速球飛來，他使盡全力揮棒。",
            "targetSentence": "Seeing the fast pitch, he swung the bat with power."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "hearing the roar",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "hearing the roar (聽見吼聲)",
                "en": "hearing the roar",
                "zh": "聽見吼聲",
                "correct": true
              },
              {
                "text": "What matters most (最重要的事情)",
                "en": "What matters most",
                "zh": "最重要的事情",
                "correct": false
              },
              {
                "text": "Seeing the pitch (看見來球之際)",
                "en": "Seeing the pitch",
                "zh": "看見來球之際",
                "correct": false
              },
              {
                "text": "what he achieved (他所達成的成就)",
                "en": "what he achieved",
                "zh": "他所達成的成就",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "Seeing the pitch",
                "zh": "看見來球之際"
              },
              {
                "en": "hearing the roar",
                "zh": "聽見吼聲"
              },
              {
                "en": "approaching",
                "zh": "接近中"
              },
              {
                "en": "reacting",
                "zh": "迅速反應"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l4",
        "title": "第 4 關：地方副詞倒裝句",
        "desc": "掌握 Down flew the jet、Here comes 等核心詞彙",
        "icon": "✈️",
        "vocabularies": [
          {
            "en": "Down flew the jet",
            "zh": "噴射機俯衝而下"
          },
          {
            "en": "Here comes",
            "zh": "來了..."
          },
          {
            "en": "Over the wall went",
            "zh": "飛越圍牆而去"
          },
          {
            "en": "Away ran",
            "zh": "跑遠了"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「Down flew the jet」的正確中文意思",
            "en": "Down flew the jet",
            "audioText": "Down flew the jet",
            "instruction": "請問「Down flew the jet」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "Away ran",
                "zh": "跑遠了",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "Down flew the jet",
                "zh": "噴射機俯衝而下",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "Here comes",
                "zh": "來了...",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "Over the wall went",
                "zh": "飛越圍牆而去",
                "emoji": "🏛️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Over the outfield wall flew the historic home run.",
            "instruction": "請看中文重組成英文句子：「那記歷史性的全壘打飛越了外野全壘打牆。」",
            "targetTokens": [
              "Over",
              "the",
              "outfield",
              "wall",
              "flew",
              "the",
              "historic",
              "home",
              "run."
            ],
            "pool": [
              "de-extinction",
              "flew",
              "the",
              "run.",
              "outfield",
              "Over",
              "comes",
              "wall",
              "home",
              "historic",
              "the"
            ],
            "targetChinese": "那記歷史性的全壘打飛越了外野全壘打牆。",
            "targetSentence": "Over the outfield wall flew the historic home run."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "Here comes",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "stop talking (停止講話)",
                "en": "stop talking",
                "zh": "停止講話",
                "correct": false
              },
              {
                "text": "remember doing (記得做過)",
                "en": "remember doing",
                "zh": "記得做過",
                "correct": false
              },
              {
                "text": "Down flew the jet (噴射機俯衝而下)",
                "en": "Down flew the jet",
                "zh": "噴射機俯衝而下",
                "correct": false
              },
              {
                "text": "Here comes (來了...)",
                "en": "Here comes",
                "zh": "來了...",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "Down flew the jet",
                "zh": "噴射機俯衝而下"
              },
              {
                "en": "Here comes",
                "zh": "來了..."
              },
              {
                "en": "Over the wall went",
                "zh": "飛越圍牆而去"
              },
              {
                "en": "Away ran",
                "zh": "跑遠了"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l5",
        "title": "第 5 關：否定副詞倒裝句型",
        "desc": "掌握 Never have I seen、Seldom do they 等核心詞彙",
        "icon": "⛔",
        "vocabularies": [
          {
            "en": "Never have I seen",
            "zh": "我從未見過"
          },
          {
            "en": "Seldom do they",
            "zh": "他們極少..."
          },
          {
            "en": "Rarely does he",
            "zh": "他很少..."
          },
          {
            "en": "Hardly had I",
            "zh": "我剛..."
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「Never have I seen」的正確中文意思",
            "en": "Never have I seen",
            "audioText": "Never have I seen",
            "instruction": "請問「Never have I seen」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "Seldom do they",
                "zh": "他們極少...",
                "emoji": "📈",
                "correct": false
              },
              {
                "en": "Hardly had I",
                "zh": "我剛...",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "Never have I seen",
                "zh": "我從未見過",
                "emoji": "🚀",
                "correct": true
              },
              {
                "en": "Rarely does he",
                "zh": "他很少...",
                "emoji": "✈️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Never have I witnessed such an extraordinary athletic feat.",
            "instruction": "請看中文重組成英文句子：「我從未見過如此非凡的體育壯舉。」",
            "targetTokens": [
              "Never",
              "have",
              "I",
              "witnessed",
              "such",
              "an",
              "extraordinary",
              "athletic",
              "feat."
            ],
            "pool": [
              "have",
              "on-base",
              "witnessed",
              "Never",
              "an",
              "athletic",
              "what",
              "extraordinary",
              "I",
              "such",
              "feat."
            ],
            "targetChinese": "我從未見過如此非凡的體育壯舉。",
            "targetSentence": "Never have I witnessed such an extraordinary athletic feat."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "Seldom do they",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "Rarely does he (他很少...)",
                "en": "Rarely does he",
                "zh": "他很少...",
                "correct": false
              },
              {
                "text": "Never have I seen (我從未見過)",
                "en": "Never have I seen",
                "zh": "我從未見過",
                "correct": false
              },
              {
                "text": "Seldom do they (他們極少...)",
                "en": "Seldom do they",
                "zh": "他們極少...",
                "correct": true
              },
              {
                "text": "Hardly had I (我剛...)",
                "en": "Hardly had I",
                "zh": "我剛...",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "Never have I seen",
                "zh": "我從未見過"
              },
              {
                "en": "Seldom do they",
                "zh": "他們極少..."
              },
              {
                "en": "Rarely does he",
                "zh": "他很少..."
              },
              {
                "en": "Hardly had I",
                "zh": "我剛..."
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l6",
        "title": "第 6 關：不定詞與動名詞意義辨析",
        "desc": "掌握 remember to do、remember doing 等核心詞彙",
        "icon": "⚖️",
        "vocabularies": [
          {
            "en": "remember to do",
            "zh": "記得去做"
          },
          {
            "en": "remember doing",
            "zh": "記得做過"
          },
          {
            "en": "stop to talk",
            "zh": "停下來去講話"
          },
          {
            "en": "stop talking",
            "zh": "停止講話"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「remember to do」的正確中文意思",
            "en": "remember to do",
            "audioText": "remember to do",
            "instruction": "請問「remember to do」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "remember to do",
                "zh": "記得去做",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "remember doing",
                "zh": "記得做過",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "stop talking",
                "zh": "停止講話",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "stop to talk",
                "zh": "停下來去講話",
                "emoji": "🏛️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Remember to wear your protective helmet before cycling.",
            "instruction": "請看中文重組成英文句子：「騎自行車前請務必戴上安全帽。」",
            "targetTokens": [
              "Remember",
              "to",
              "wear",
              "your",
              "protective",
              "helmet",
              "before",
              "cycling."
            ],
            "pool": [
              "cycling.",
              "to",
              "wear",
              "helmet",
              "vector",
              "Remember",
              "before",
              "percentage",
              "protective",
              "your"
            ],
            "targetChinese": "騎自行車前請務必戴上安全帽。",
            "targetSentence": "Remember to wear your protective helmet before cycling."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "remember doing",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "angular momentum (角動量)",
                "en": "angular momentum",
                "zh": "角動量",
                "correct": false
              },
              {
                "text": "remember doing (記得做過)",
                "en": "remember doing",
                "zh": "記得做過",
                "correct": true
              },
              {
                "text": "remember to do (記得去做)",
                "en": "remember to do",
                "zh": "記得去做",
                "correct": false
              },
              {
                "text": "attention span (注意力持續時間)",
                "en": "attention span",
                "zh": "注意力持續時間",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "remember to do",
                "zh": "記得去做"
              },
              {
                "en": "remember doing",
                "zh": "記得做過"
              },
              {
                "en": "stop to talk",
                "zh": "停下來去講話"
              },
              {
                "en": "stop talking",
                "zh": "停止講話"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l7",
        "title": "第 7 關：複合關係代名詞 what",
        "desc": "掌握 What matters most、what he achieved 等核心詞彙",
        "icon": "💡",
        "vocabularies": [
          {
            "en": "What matters most",
            "zh": "最重要的事情"
          },
          {
            "en": "what he achieved",
            "zh": "他所達成的成就"
          },
          {
            "en": "what they need",
            "zh": "他們所需要的"
          },
          {
            "en": "essential",
            "zh": "必不可少的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「What matters most」的正確中文意思",
            "en": "What matters most",
            "audioText": "What matters most",
            "instruction": "請問「What matters most」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "what they need",
                "zh": "他們所需要的",
                "emoji": "✈️",
                "correct": false
              },
              {
                "en": "would rather than",
                "zh": "寧願...也不願...",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "what he achieved",
                "zh": "他所達成的成就",
                "emoji": "📈",
                "correct": false
              },
              {
                "en": "What matters most",
                "zh": "最重要的事情",
                "emoji": "🚀",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "What matters most in sports is genuine sportsmanship.",
            "instruction": "請看中文重組成英文句子：「體育運動中最重要的莫過於真正的運動家精神。」",
            "targetTokens": [
              "What",
              "matters",
              "most",
              "in",
              "sports",
              "is",
              "genuine",
              "sportsmanship."
            ],
            "pool": [
              "What",
              "genuine",
              "is",
              "on-base",
              "most",
              "prefer",
              "matters",
              "sportsmanship.",
              "in",
              "sports"
            ],
            "targetChinese": "體育運動中最重要的莫過於真正的運動家精神。",
            "targetSentence": "What matters most in sports is genuine sportsmanship."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "what he achieved",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "what they need (他們所需要的)",
                "en": "what they need",
                "zh": "他們所需要的",
                "correct": false
              },
              {
                "text": "what he achieved (他所達成的成就)",
                "en": "what he achieved",
                "zh": "他所達成的成就",
                "correct": true
              },
              {
                "text": "What matters most (最重要的事情)",
                "en": "What matters most",
                "zh": "最重要的事情",
                "correct": false
              },
              {
                "text": "Seeing the pitch (看見來球之際)",
                "en": "Seeing the pitch",
                "zh": "看見來球之際",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "What matters most",
                "zh": "最重要的事情"
              },
              {
                "en": "what he achieved",
                "zh": "他所達成的成就"
              },
              {
                "en": "what they need",
                "zh": "他們所需要的"
              },
              {
                "en": "essential",
                "zh": "必不可少的"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l8",
        "title": "第 8 關：偏好與選擇句型",
        "desc": "掌握 prefer playing to watching、would rather than 等核心詞彙",
        "icon": "🎯",
        "vocabularies": [
          {
            "en": "prefer playing to watching",
            "zh": "喜歡玩勝過看"
          },
          {
            "en": "would rather than",
            "zh": "寧願...也不願..."
          },
          {
            "en": "prioritize",
            "zh": "優先考慮"
          },
          {
            "en": "choice",
            "zh": "抉擇"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「prefer playing to watching」的正確中文意思",
            "en": "prefer playing to watching",
            "audioText": "prefer playing to watching",
            "instruction": "請問「prefer playing to watching」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "would rather than",
                "zh": "寧願...也不願...",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "prefer playing to watching",
                "zh": "喜歡玩勝過看",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "Down flew the jet",
                "zh": "噴射機俯衝而下",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "Over the wall went",
                "zh": "飛越圍牆而去",
                "emoji": "🏛️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "I would rather play baseball than watch television.",
            "instruction": "請看中文重組成英文句子：「我寧願去打棒球也不想看電視。」",
            "targetTokens": [
              "I",
              "would",
              "rather",
              "play",
              "baseball",
              "than",
              "watch",
              "television."
            ],
            "pool": [
              "rather",
              "than",
              "television.",
              "I",
              "baseball",
              "watch",
              "approaching",
              "de-extinction",
              "play",
              "would"
            ],
            "targetChinese": "我寧願去打棒球也不想看電視。",
            "targetSentence": "I would rather play baseball than watch television."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "would rather than",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "would rather than (寧願...也不願...)",
                "en": "would rather than",
                "zh": "寧願...也不願...",
                "correct": true
              },
              {
                "text": "Seeing the pitch (看見來球之際)",
                "en": "Seeing the pitch",
                "zh": "看見來球之際",
                "correct": false
              },
              {
                "text": "prefer playing to watching (喜歡玩勝過看)",
                "en": "prefer playing to watching",
                "zh": "喜歡玩勝過看",
                "correct": false
              },
              {
                "text": "What matters most (最重要的事情)",
                "en": "What matters most",
                "zh": "最重要的事情",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "prefer playing to watching",
                "zh": "喜歡玩勝過看"
              },
              {
                "en": "would rather than",
                "zh": "寧願...也不願..."
              },
              {
                "en": "prioritize",
                "zh": "優先考慮"
              },
              {
                "en": "choice",
                "zh": "抉擇"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l9",
        "title": "第 9 關：棒球賽刀分析學 (Sabermetrics)",
        "desc": "掌握 sabermetrics、on-base percentage 等核心詞彙",
        "icon": "⚾",
        "vocabularies": [
          {
            "en": "sabermetrics",
            "zh": "棒球賽事統計分析"
          },
          {
            "en": "on-base percentage",
            "zh": "上壘率"
          },
          {
            "en": "slugging",
            "zh": "長打率"
          },
          {
            "en": "analytics",
            "zh": "數據分析"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「sabermetrics」的正確中文意思",
            "en": "sabermetrics",
            "audioText": "sabermetrics",
            "instruction": "請問「sabermetrics」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "sabermetrics",
                "zh": "棒球賽事統計分析",
                "emoji": "🚀",
                "correct": true
              },
              {
                "en": "slugging",
                "zh": "長打率",
                "emoji": "✈️",
                "correct": false
              },
              {
                "en": "fascinating",
                "zh": "迷人的",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "on-base percentage",
                "zh": "上壘率",
                "emoji": "📈",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Modern baseball teams rely on advanced data analytics.",
            "instruction": "請看中文重組成英文句子：「現代棒球隊仰賴先進的數據分析。」",
            "targetTokens": [
              "Modern",
              "baseball",
              "teams",
              "rely",
              "on",
              "advanced",
              "data",
              "analytics."
            ],
            "pool": [
              "on",
              "teams",
              "data",
              "advanced",
              "angular",
              "baseball",
              "analytics.",
              "synthesis",
              "Modern",
              "rely"
            ],
            "targetChinese": "現代棒球隊仰賴先進的數據分析。",
            "targetSentence": "Modern baseball teams rely on advanced data analytics."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "on-base percentage",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "on-base percentage (上壘率)",
                "en": "on-base percentage",
                "zh": "上壘率",
                "correct": true
              },
              {
                "text": "sabermetrics (棒球賽事統計分析)",
                "en": "sabermetrics",
                "zh": "棒球賽事統計分析",
                "correct": false
              },
              {
                "text": "stealth technology (隱形匿蹤技術)",
                "en": "stealth technology",
                "zh": "隱形匿蹤技術",
                "correct": false
              },
              {
                "text": "digital wellbeing (數位身心健康)",
                "en": "digital wellbeing",
                "zh": "數位身心健康",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "sabermetrics",
                "zh": "棒球賽事統計分析"
              },
              {
                "en": "on-base percentage",
                "zh": "上壘率"
              },
              {
                "en": "slugging",
                "zh": "長打率"
              },
              {
                "en": "analytics",
                "zh": "數據分析"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l10",
        "title": "第 10 關：空氣動力學與隱形戰機",
        "desc": "掌握 aerodynamics、stealth technology 等核心詞彙",
        "icon": "🛩️",
        "vocabularies": [
          {
            "en": "aerodynamics",
            "zh": "空氣動力學"
          },
          {
            "en": "stealth technology",
            "zh": "隱形匿蹤技術"
          },
          {
            "en": "radar cross-section",
            "zh": "雷達截面積"
          },
          {
            "en": "supersonic",
            "zh": "超音速的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「aerodynamics」的正確中文意思",
            "en": "aerodynamics",
            "audioText": "aerodynamics",
            "instruction": "請問「aerodynamics」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "de-extinction",
                "zh": "滅絕生物復育",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "aerodynamics",
                "zh": "空氣動力學",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "stealth technology",
                "zh": "隱形匿蹤技術",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "radar cross-section",
                "zh": "雷達截面積",
                "emoji": "🏛️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Stealth fighters minimize their radar reflection profile.",
            "instruction": "請看中文重組成英文句子：「匿蹤戰鬥機將雷達反射截面積降至最低。」",
            "targetTokens": [
              "Stealth",
              "fighters",
              "minimize",
              "their",
              "radar",
              "reflection",
              "profile."
            ],
            "pool": [
              "aerodynamics",
              "profile.",
              "their",
              "Stealth",
              "reflection",
              "radar",
              "Never",
              "fighters",
              "minimize"
            ],
            "targetChinese": "匿蹤戰鬥機將雷達反射截面積降至最低。",
            "targetSentence": "Stealth fighters minimize their radar reflection profile."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "stealth technology",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "stealth technology (隱形匿蹤技術)",
                "en": "stealth technology",
                "zh": "隱形匿蹤技術",
                "correct": true
              },
              {
                "text": "genetic engineering (基因工程)",
                "en": "genetic engineering",
                "zh": "基因工程",
                "correct": false
              },
              {
                "text": "aerodynamics (空氣動力學)",
                "en": "aerodynamics",
                "zh": "空氣動力學",
                "correct": false
              },
              {
                "text": "on-base percentage (上壘率)",
                "en": "on-base percentage",
                "zh": "上壘率",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "aerodynamics",
                "zh": "空氣動力學"
              },
              {
                "en": "stealth technology",
                "zh": "隱形匿蹤技術"
              },
              {
                "en": "radar cross-section",
                "zh": "雷達截面積"
              },
              {
                "en": "supersonic",
                "zh": "超音速的"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l11",
        "title": "第 11 關：撞球角動量與物理旋轉",
        "desc": "掌握 angular momentum、elasticity 等核心詞彙",
        "icon": "🎱",
        "vocabularies": [
          {
            "en": "angular momentum",
            "zh": "角動量"
          },
          {
            "en": "elasticity",
            "zh": "彈性"
          },
          {
            "en": "deflection",
            "zh": "偏折"
          },
          {
            "en": "vector",
            "zh": "向量"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「angular momentum」的正確中文意思",
            "en": "angular momentum",
            "audioText": "angular momentum",
            "instruction": "請問「angular momentum」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "textual evidence",
                "zh": "文本客觀證據",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "deflection",
                "zh": "偏折",
                "emoji": "✈️",
                "correct": false
              },
              {
                "en": "elasticity",
                "zh": "彈性",
                "emoji": "📈",
                "correct": false
              },
              {
                "en": "angular momentum",
                "zh": "角動量",
                "emoji": "🚀",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Calculating collision vectors helps execute the perfect bank shot.",
            "instruction": "請看中文重組成英文句子：「計算碰撞向量有助於執行完美的顆星進球。」",
            "targetTokens": [
              "Calculating",
              "collision",
              "vectors",
              "helps",
              "execute",
              "the",
              "perfect",
              "bank",
              "shot."
            ],
            "pool": [
              "essential",
              "collision",
              "perfect",
              "Calculating",
              "helps",
              "vectors",
              "matters",
              "execute",
              "bank",
              "shot.",
              "the"
            ],
            "targetChinese": "計算碰撞向量有助於執行完美的顆星進球。",
            "targetSentence": "Calculating collision vectors helps execute the perfect bank shot."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "elasticity",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "elasticity (彈性)",
                "en": "elasticity",
                "zh": "彈性",
                "correct": true
              },
              {
                "text": "angular momentum (角動量)",
                "en": "angular momentum",
                "zh": "角動量",
                "correct": false
              },
              {
                "text": "synthesis (綜合歸納)",
                "en": "synthesis",
                "zh": "綜合歸納",
                "correct": false
              },
              {
                "text": "surprising (令人驚訝的)",
                "en": "surprising",
                "zh": "令人驚訝的",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "angular momentum",
                "zh": "角動量"
              },
              {
                "en": "elasticity",
                "zh": "彈性"
              },
              {
                "en": "deflection",
                "zh": "偏折"
              },
              {
                "en": "vector",
                "zh": "向量"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l12",
        "title": "第 12 關：基因工程與古生物復育",
        "desc": "掌握 genetic engineering、de-extinction 等核心詞彙",
        "icon": "🧬",
        "vocabularies": [
          {
            "en": "genetic engineering",
            "zh": "基因工程"
          },
          {
            "en": "de-extinction",
            "zh": "滅絕生物復育"
          },
          {
            "en": "DNA extraction",
            "zh": "DNA提取"
          },
          {
            "en": "cloning",
            "zh": "複製克隆"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「genetic engineering」的正確中文意思",
            "en": "genetic engineering",
            "audioText": "genetic engineering",
            "instruction": "請問「genetic engineering」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "radar cross-section",
                "zh": "雷達截面積",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "de-extinction",
                "zh": "滅絕生物復育",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "genetic engineering",
                "zh": "基因工程",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "DNA extraction",
                "zh": "DNA提取",
                "emoji": "🏛️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Scientists debate whether resurrecting ancient dinosaurs is ethical.",
            "instruction": "請看中文重組成英文句子：「科學家們爭辯復活古老恐龍是否合乎倫理道德。」",
            "targetTokens": [
              "Scientists",
              "debate",
              "whether",
              "resurrecting",
              "ancient",
              "dinosaurs",
              "is",
              "ethical."
            ],
            "pool": [
              "Scientists",
              "is",
              "ethical.",
              "resurrecting",
              "whether",
              "dinosaurs",
              "need",
              "crucial",
              "debate",
              "ancient"
            ],
            "targetChinese": "科學家們爭辯復活古老恐龍是否合乎倫理道德。",
            "targetSentence": "Scientists debate whether resurrecting ancient dinosaurs is ethical."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "de-extinction",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "de-extinction (滅絕生物復育)",
                "en": "de-extinction",
                "zh": "滅絕生物復育",
                "correct": true
              },
              {
                "text": "genetic engineering (基因工程)",
                "en": "genetic engineering",
                "zh": "基因工程",
                "correct": false
              },
              {
                "text": "perspective (觀點角度)",
                "en": "perspective",
                "zh": "觀點角度",
                "correct": false
              },
              {
                "text": "fascinating (迷人的)",
                "en": "fascinating",
                "zh": "迷人的",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "genetic engineering",
                "zh": "基因工程"
              },
              {
                "en": "de-extinction",
                "zh": "滅絕生物復育"
              },
              {
                "en": "DNA extraction",
                "zh": "DNA提取"
              },
              {
                "en": "cloning",
                "zh": "複製克隆"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l13",
        "title": "第 13 關：演算法與青少年心理學",
        "desc": "掌握 algorithm、attention span 等核心詞彙",
        "icon": "🧠",
        "vocabularies": [
          {
            "en": "algorithm",
            "zh": "社群演算法"
          },
          {
            "en": "attention span",
            "zh": "注意力持續時間"
          },
          {
            "en": "digital wellbeing",
            "zh": "數位身心健康"
          },
          {
            "en": "moderate",
            "zh": "適度節制"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「algorithm」的正確中文意思",
            "en": "algorithm",
            "audioText": "algorithm",
            "instruction": "請問「algorithm」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "exhausted",
                "zh": "筋疲力竭的",
                "emoji": "⚾",
                "correct": false
              },
              {
                "en": "digital wellbeing",
                "zh": "數位身心健康",
                "emoji": "✈️",
                "correct": false
              },
              {
                "en": "attention span",
                "zh": "注意力持續時間",
                "emoji": "📈",
                "correct": false
              },
              {
                "en": "algorithm",
                "zh": "社群演算法",
                "emoji": "🚀",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Digital wellbeing requires balancing screen time with outdoor sports.",
            "instruction": "請看中文重組成英文句子：「數位健康需要平衡螢幕使用時間與戶外運動。」",
            "targetTokens": [
              "Digital",
              "wellbeing",
              "requires",
              "balancing",
              "screen",
              "time",
              "with",
              "outdoor",
              "sports."
            ],
            "pool": [
              "time",
              "with",
              "requires",
              "vector",
              "Digital",
              "screen",
              "outdoor",
              "synthesis",
              "sports.",
              "balancing",
              "wellbeing"
            ],
            "targetChinese": "數位健康需要平衡螢幕使用時間與戶外運動。",
            "targetSentence": "Digital wellbeing requires balancing screen time with outdoor sports."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "attention span",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "remember doing (記得做過)",
                "en": "remember doing",
                "zh": "記得做過",
                "correct": false
              },
              {
                "text": "DNA extraction (DNA提取)",
                "en": "DNA extraction",
                "zh": "DNA提取",
                "correct": false
              },
              {
                "text": "attention span (注意力持續時間)",
                "en": "attention span",
                "zh": "注意力持續時間",
                "correct": true
              },
              {
                "text": "algorithm (社群演算法)",
                "en": "algorithm",
                "zh": "社群演算法",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "algorithm",
                "zh": "社群演算法"
              },
              {
                "en": "attention span",
                "zh": "注意力持續時間"
              },
              {
                "en": "digital wellbeing",
                "zh": "數位身心健康"
              },
              {
                "en": "moderate",
                "zh": "適度節制"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l14",
        "title": "第 14 關：跨文化溝通與國際禮儀",
        "desc": "掌握 cross-cultural、diplomacy 等核心詞彙",
        "icon": "🌐",
        "vocabularies": [
          {
            "en": "cross-cultural",
            "zh": "跨文化的"
          },
          {
            "en": "diplomacy",
            "zh": "外交禮儀"
          },
          {
            "en": "etiquette",
            "zh": "社交規範"
          },
          {
            "en": "empathy",
            "zh": "同理心"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「cross-cultural」的正確中文意思",
            "en": "cross-cultural",
            "audioText": "cross-cultural",
            "instruction": "請問「cross-cultural」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "cross-cultural",
                "zh": "跨文化的",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "sabermetrics",
                "zh": "棒球賽事統計分析",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "etiquette",
                "zh": "社交規範",
                "emoji": "🏛️",
                "correct": false
              },
              {
                "en": "diplomacy",
                "zh": "外交禮儀",
                "emoji": "🧠",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Cultural empathy enables fruitful international academic collaboration.",
            "instruction": "請看中文重組成英文句子：「文化同理心促成豐碩的國際學術合作。」",
            "targetTokens": [
              "Cultural",
              "empathy",
              "enables",
              "fruitful",
              "international",
              "academic",
              "collaboration."
            ],
            "pool": [
              "on-base",
              "international",
              "empathy",
              "fruitful",
              "collaboration.",
              "Cultural",
              "enables",
              "academic",
              "than"
            ],
            "targetChinese": "文化同理心促成豐碩的國際學術合作。",
            "targetSentence": "Cultural empathy enables fruitful international academic collaboration."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "diplomacy",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "algorithm (社群演算法)",
                "en": "algorithm",
                "zh": "社群演算法",
                "correct": false
              },
              {
                "text": "essential (必不可少的)",
                "en": "essential",
                "zh": "必不可少的",
                "correct": false
              },
              {
                "text": "diplomacy (外交禮儀)",
                "en": "diplomacy",
                "zh": "外交禮儀",
                "correct": true
              },
              {
                "text": "cross-cultural (跨文化的)",
                "en": "cross-cultural",
                "zh": "跨文化的",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "cross-cultural",
                "zh": "跨文化的"
              },
              {
                "en": "diplomacy",
                "zh": "外交禮儀"
              },
              {
                "en": "etiquette",
                "zh": "社交規範"
              },
              {
                "en": "empathy",
                "zh": "同理心"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l15",
        "title": "第 15 關：高中學測混合題型全解析",
        "desc": "掌握 integrated comprehension、textual evidence 等核心詞彙",
        "icon": "📝",
        "vocabularies": [
          {
            "en": "integrated comprehension",
            "zh": "整合理解題"
          },
          {
            "en": "textual evidence",
            "zh": "文本客觀證據"
          },
          {
            "en": "synthesis",
            "zh": "綜合歸納"
          },
          {
            "en": "inference",
            "zh": "推論判斷"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「integrated comprehension」的正確中文意思",
            "en": "integrated comprehension",
            "audioText": "integrated comprehension",
            "instruction": "請問「integrated comprehension」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "synthesis",
                "zh": "綜合歸納",
                "emoji": "✈️",
                "correct": false
              },
              {
                "en": "integrated comprehension",
                "zh": "整合理解題",
                "emoji": "🚀",
                "correct": true
              },
              {
                "en": "textual evidence",
                "zh": "文本客觀證據",
                "emoji": "📈",
                "correct": false
              },
              {
                "en": "radar cross-section",
                "zh": "雷達截面積",
                "emoji": "⚾",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Support your answers with direct textual evidence.",
            "instruction": "請看中文重組成英文句子：「用直接的文本證據來支持你的答案。」",
            "targetTokens": [
              "Support",
              "your",
              "answers",
              "with",
              "direct",
              "textual",
              "evidence."
            ],
            "pool": [
              "textual",
              "evidence.",
              "with",
              "Down",
              "Support",
              "direct",
              "extraction",
              "answers",
              "your"
            ],
            "targetChinese": "用直接的文本證據來支持你的答案。",
            "targetSentence": "Support your answers with direct textual evidence."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "textual evidence",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "integrated comprehension (整合理解題)",
                "en": "integrated comprehension",
                "zh": "整合理解題",
                "correct": false
              },
              {
                "text": "remember doing (記得做過)",
                "en": "remember doing",
                "zh": "記得做過",
                "correct": false
              },
              {
                "text": "textual evidence (文本客觀證據)",
                "en": "textual evidence",
                "zh": "文本客觀證據",
                "correct": true
              },
              {
                "text": "digital wellbeing (數位身心健康)",
                "en": "digital wellbeing",
                "zh": "數位身心健康",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "integrated comprehension",
                "zh": "整合理解題"
              },
              {
                "en": "textual evidence",
                "zh": "文本客觀證據"
              },
              {
                "en": "synthesis",
                "zh": "綜合歸納"
              },
              {
                "en": "inference",
                "zh": "推論判斷"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_beg-l16",
        "title": "第 16 關：高一菁英突破魔王關",
        "desc": "掌握 crucial、aerodynamics 等核心詞彙",
        "icon": "👑",
        "vocabularies": [
          {
            "en": "crucial",
            "zh": "關鍵的"
          },
          {
            "en": "aerodynamics",
            "zh": "空氣動力學"
          },
          {
            "en": "sabermetrics",
            "zh": "棒球數據學"
          },
          {
            "en": "angular momentum",
            "zh": "角動量"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「crucial」的正確中文意思",
            "en": "crucial",
            "audioText": "crucial",
            "instruction": "請問「crucial」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "aerodynamics",
                "zh": "空氣動力學",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "crucial",
                "zh": "關鍵的",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "sabermetrics",
                "zh": "棒球數據學",
                "emoji": "🏛️",
                "correct": false
              },
              {
                "en": "cloning",
                "zh": "複製克隆",
                "emoji": "💡",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Mastering core concepts builds a solid academic foundation.",
            "instruction": "請看中文重組成英文句子：「掌握核心概念能奠定堅實的學術基礎。」",
            "targetTokens": [
              "Mastering",
              "core",
              "concepts",
              "builds",
              "a",
              "solid",
              "academic",
              "foundation."
            ],
            "pool": [
              "a",
              "ran",
              "academic",
              "foundation.",
              "Mastering",
              "builds",
              "concepts",
              "solid",
              "cross-cultural",
              "core"
            ],
            "targetChinese": "掌握核心概念能奠定堅實的學術基礎。",
            "targetSentence": "Mastering core concepts builds a solid academic foundation."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "aerodynamics",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "fascinating (迷人的)",
                "en": "fascinating",
                "zh": "迷人的",
                "correct": false
              },
              {
                "text": "crucial (關鍵的)",
                "en": "crucial",
                "zh": "關鍵的",
                "correct": false
              },
              {
                "text": "perspective (觀點角度)",
                "en": "perspective",
                "zh": "觀點角度",
                "correct": false
              },
              {
                "text": "aerodynamics (空氣動力學)",
                "en": "aerodynamics",
                "zh": "空氣動力學",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "crucial",
                "zh": "關鍵的"
              },
              {
                "en": "aerodynamics",
                "zh": "空氣動力學"
              },
              {
                "en": "sabermetrics",
                "zh": "棒球數據學"
              },
              {
                "en": "angular momentum",
                "zh": "角動量"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "sh_mid",
    "category": "senior",
    "categoryName": "高中階段",
    "categoryIcon": "🏛️",
    "subLevel": "mid",
    "subLevelName": "高中・中級 (高二)",
    "badge": "💎 卓越躍升",
    "desc": "假設語氣條件句、動詞搭配詞、航太引擎推進、運動心理學與學術寫作",
    "cefr": "B1",
    "themeColor": "#ec4899",
    "colorClass": "u-food",
    "lessons": [
      {
        "id": "sh_mid-l1",
        "title": "第 1 關：與現在事實相反假設語氣",
        "desc": "掌握 If I were a pilot、would fly 等核心詞彙",
        "icon": "🌌",
        "vocabularies": [
          {
            "en": "If I were a pilot",
            "zh": "若我是飛行員"
          },
          {
            "en": "would fly",
            "zh": "便會飛向"
          },
          {
            "en": "were",
            "zh": "與現在相反be動詞一律用were"
          },
          {
            "en": "capable",
            "zh": "有能力的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「If I were a pilot」的正確中文意思",
            "en": "If I were a pilot",
            "audioText": "If I were a pilot",
            "instruction": "請問「If I were a pilot」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "not only but also",
                "zh": "不僅...而且...",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "If I were a pilot",
                "zh": "若我是飛行員",
                "emoji": "💎",
                "correct": true
              },
              {
                "en": "insist that S (should) V",
                "zh": "堅持要求",
                "emoji": "🌱",
                "correct": false
              },
              {
                "en": "would fly",
                "zh": "便會飛向",
                "emoji": "⚙️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "If I were the pilot, I would fly around the globe.",
            "instruction": "請看中文重組成英文句子：「如果我是飛行員，我會環球飛行。」",
            "targetTokens": [
              "If",
              "I",
              "were",
              "the",
              "pilot,",
              "I",
              "would",
              "fly",
              "around",
              "the",
              "globe."
            ],
            "pool": [
              "I",
              "around",
              "would",
              "into",
              "fly",
              "were",
              "the",
              "pilot,",
              "avoidance",
              "If",
              "the",
              "globe.",
              "I"
            ],
            "targetChinese": "如果我是飛行員，我會環球飛行。",
            "targetSentence": "If I were the pilot, I would fly around the globe."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "would fly",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "If I were a pilot (若我是飛行員)",
                "en": "If I were a pilot",
                "zh": "若我是飛行員",
                "correct": false
              },
              {
                "text": "had known (早知道)",
                "en": "had known",
                "zh": "早知道",
                "correct": false
              },
              {
                "text": "either or (或者...或者...)",
                "en": "either or",
                "zh": "或者...或者...",
                "correct": false
              },
              {
                "text": "would fly (便會飛向)",
                "en": "would fly",
                "zh": "便會飛向",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "If I were a pilot",
                "zh": "若我是飛行員"
              },
              {
                "en": "would fly",
                "zh": "便會飛向"
              },
              {
                "en": "were",
                "zh": "與現在相反be動詞一律用were"
              },
              {
                "en": "capable",
                "zh": "有能力的"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l2",
        "title": "第 2 關：與過去事實相反假設語氣",
        "desc": "掌握 If he had swung、would have hit 等核心詞彙",
        "icon": "⏳",
        "vocabularies": [
          {
            "en": "If he had swung",
            "zh": "若他當時揮棒了"
          },
          {
            "en": "would have hit",
            "zh": "本就會擊出"
          },
          {
            "en": "had known",
            "zh": "早知道"
          },
          {
            "en": "regret",
            "zh": "遺憾"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「If he had swung」的正確中文意思",
            "en": "If he had swung",
            "audioText": "If he had swung",
            "instruction": "請問「If he had swung」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "not only but also",
                "zh": "不僅...而且...",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "would have hit",
                "zh": "本就會擊出",
                "emoji": "🌍",
                "correct": false
              },
              {
                "en": "had known",
                "zh": "早知道",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "If he had swung",
                "zh": "若他當時揮棒了",
                "emoji": "✈️",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "If he had swung earlier, he would have hit a home run.",
            "instruction": "請看中文重組成英文句子：「如果他揮棒早一點，他就能擊出全壘打。」",
            "targetTokens": [
              "If",
              "he",
              "had",
              "swung",
              "earlier,",
              "he",
              "would",
              "have",
              "hit",
              "a",
              "home",
              "run."
            ],
            "pool": [
              "have",
              "run.",
              "he",
              "wish",
              "match",
              "a",
              "hit",
              "earlier,",
              "swung",
              "he",
              "had",
              "would",
              "home",
              "If"
            ],
            "targetChinese": "如果他揮棒早一點，他就能擊出全壘打。",
            "targetSentence": "If he had swung earlier, he would have hit a home run."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "would have hit",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "make an effort (付出努力)",
                "en": "make an effort",
                "zh": "付出努力",
                "correct": false
              },
              {
                "text": "would have hit (本就會擊出)",
                "en": "would have hit",
                "zh": "本就會擊出",
                "correct": true
              },
              {
                "text": "had known (早知道)",
                "en": "had known",
                "zh": "早知道",
                "correct": false
              },
              {
                "text": "If he had swung (若他當時揮棒了)",
                "en": "If he had swung",
                "zh": "若他當時揮棒了",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "If he had swung",
                "zh": "若他當時揮棒了"
              },
              {
                "en": "would have hit",
                "zh": "本就會擊出"
              },
              {
                "en": "had known",
                "zh": "早知道"
              },
              {
                "en": "regret",
                "zh": "遺憾"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l3",
        "title": "第 3 關：假設語氣倒裝省 If",
        "desc": "掌握 Had I known、Were I you 等核心詞彙",
        "icon": "🔄",
        "vocabularies": [
          {
            "en": "Had I known",
            "zh": "若早知曉"
          },
          {
            "en": "Were I you",
            "zh": "若我是你"
          },
          {
            "en": "Should it rain",
            "zh": "萬一下雨"
          },
          {
            "en": "alternative",
            "zh": "替代方案"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「Had I known」的正確中文意思",
            "en": "Had I known",
            "audioText": "Had I known",
            "instruction": "請問「Had I known」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "would have hit",
                "zh": "本就會擊出",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "Should it rain",
                "zh": "萬一下雨",
                "emoji": "🌱",
                "correct": false
              },
              {
                "en": "Were I you",
                "zh": "若我是你",
                "emoji": "⚙️",
                "correct": false
              },
              {
                "en": "Had I known",
                "zh": "若早知曉",
                "emoji": "💎",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Had I known about the baseball tryouts, I would have joined.",
            "instruction": "請看中文重組成英文句子：「若我早知道有棒球選拔，我就會報名參加。」",
            "targetTokens": [
              "Had",
              "I",
              "known",
              "about",
              "the",
              "baseball",
              "tryouts,",
              "I",
              "would",
              "have",
              "joined."
            ],
            "pool": [
              "joined.",
              "turbofan",
              "about",
              "have",
              "statement",
              "the",
              "baseball",
              "would",
              "I",
              "tryouts,",
              "I",
              "known",
              "Had"
            ],
            "targetChinese": "若我早知道有棒球選拔，我就會報名參加。",
            "targetSentence": "Had I known about the baseball tryouts, I would have joined."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "Were I you",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "Were I you (若我是你)",
                "en": "Were I you",
                "zh": "若我是你",
                "correct": true
              },
              {
                "text": "wish I had (多希望擁有)",
                "en": "wish I had",
                "zh": "多希望擁有",
                "correct": false
              },
              {
                "text": "Had I known (若早知曉)",
                "en": "Had I known",
                "zh": "若早知曉",
                "correct": false
              },
              {
                "text": "Should it rain (萬一下雨)",
                "en": "Should it rain",
                "zh": "萬一下雨",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "Had I known",
                "zh": "若早知曉"
              },
              {
                "en": "Were I you",
                "zh": "若我是你"
              },
              {
                "en": "Should it rain",
                "zh": "萬一下雨"
              },
              {
                "en": "alternative",
                "zh": "替代方案"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l4",
        "title": "第 4 關：願望與堅持要求動詞",
        "desc": "掌握 wish I had、as though 等核心詞彙",
        "icon": "💫",
        "vocabularies": [
          {
            "en": "wish I had",
            "zh": "多希望擁有"
          },
          {
            "en": "as though",
            "zh": "彷彿像是"
          },
          {
            "en": "insist that S (should) V",
            "zh": "堅持要求"
          },
          {
            "en": "demand",
            "zh": "堅決要求"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「wish I had」的正確中文意思",
            "en": "wish I had",
            "audioText": "wish I had",
            "instruction": "請問「wish I had」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "insist that S (should) V",
                "zh": "堅持要求",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "Were I you",
                "zh": "若我是你",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "wish I had",
                "zh": "多希望擁有",
                "emoji": "✈️",
                "correct": true
              },
              {
                "en": "as though",
                "zh": "彷彿像是",
                "emoji": "🌍",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The coach insisted that every player practice every morning.",
            "instruction": "請看中文重組成英文句子：「教練堅持要求每位球員每天早上都要練習。」",
            "targetTokens": [
              "The",
              "coach",
              "insisted",
              "that",
              "every",
              "player",
              "practice",
              "every",
              "morning."
            ],
            "pool": [
              "every",
              "insisted",
              "that",
              "practice",
              "known",
              "every",
              "morning.",
              "would",
              "coach",
              "The",
              "player"
            ],
            "targetChinese": "教練堅持要求每位球員每天早上都要練習。",
            "targetSentence": "The coach insisted that every player practice every morning."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "as though",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "would fly (便會飛向)",
                "en": "would fly",
                "zh": "便會飛向",
                "correct": false
              },
              {
                "text": "as though (彷彿像是)",
                "en": "as though",
                "zh": "彷彿像是",
                "correct": true
              },
              {
                "text": "had known (早知道)",
                "en": "had known",
                "zh": "早知道",
                "correct": false
              },
              {
                "text": "wish I had (多希望擁有)",
                "en": "wish I had",
                "zh": "多希望擁有",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "wish I had",
                "zh": "多希望擁有"
              },
              {
                "en": "as though",
                "zh": "彷彿像是"
              },
              {
                "en": "insist that S (should) V",
                "zh": "堅持要求"
              },
              {
                "en": "demand",
                "zh": "堅決要求"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l5",
        "title": "第 5 關：高中高頻動詞搭配詞",
        "desc": "掌握 make an effort、take advantage of 等核心詞彙",
        "icon": "🧩",
        "vocabularies": [
          {
            "en": "make an effort",
            "zh": "付出努力"
          },
          {
            "en": "take advantage of",
            "zh": "善用利用"
          },
          {
            "en": "pay attention to",
            "zh": "全神貫注於"
          },
          {
            "en": "put into practice",
            "zh": "付諸實行"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「make an effort」的正確中文意思",
            "en": "make an effort",
            "audioText": "make an effort",
            "instruction": "請問「make an effort」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "pay attention to",
                "zh": "全神貫注於",
                "emoji": "🌱",
                "correct": false
              },
              {
                "en": "make an effort",
                "zh": "付出努力",
                "emoji": "💎",
                "correct": true
              },
              {
                "en": "put into practice",
                "zh": "付諸實行",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "take advantage of",
                "zh": "善用利用",
                "emoji": "⚙️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "He made every effort to master the billiards technique.",
            "instruction": "請看中文重組成英文句子：「他竭盡全力去掌握撞球擊球技術。」",
            "targetTokens": [
              "He",
              "made",
              "every",
              "effort",
              "to",
              "master",
              "the",
              "billiards",
              "technique."
            ],
            "pool": [
              "exhausted",
              "effort",
              "technique.",
              "the",
              "to",
              "made",
              "every",
              "He",
              "Were",
              "billiards",
              "master"
            ],
            "targetChinese": "他竭盡全力去掌握撞球擊球技術。",
            "targetSentence": "He made every effort to master the billiards technique."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "take advantage of",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "pay attention to (全神貫注於)",
                "en": "pay attention to",
                "zh": "全神貫注於",
                "correct": false
              },
              {
                "text": "put into practice (付諸實行)",
                "en": "put into practice",
                "zh": "付諸實行",
                "correct": false
              },
              {
                "text": "make an effort (付出努力)",
                "en": "make an effort",
                "zh": "付出努力",
                "correct": false
              },
              {
                "text": "take advantage of (善用利用)",
                "en": "take advantage of",
                "zh": "善用利用",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "make an effort",
                "zh": "付出努力"
              },
              {
                "en": "take advantage of",
                "zh": "善用利用"
              },
              {
                "en": "pay attention to",
                "zh": "全神貫注於"
              },
              {
                "en": "put into practice",
                "zh": "付諸實行"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l6",
        "title": "第 6 關：成對連接詞架構",
        "desc": "掌握 not only but also、neither nor 等核心詞彙",
        "icon": "⚖️",
        "vocabularies": [
          {
            "en": "not only but also",
            "zh": "不僅...而且..."
          },
          {
            "en": "neither nor",
            "zh": "既不...也不..."
          },
          {
            "en": "either or",
            "zh": "或者...或者..."
          },
          {
            "en": "both and",
            "zh": "兩者皆是"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「not only but also」的正確中文意思",
            "en": "not only but also",
            "audioText": "not only but also",
            "instruction": "請問「not only but also」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "both and",
                "zh": "兩者皆是",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "not only but also",
                "zh": "不僅...而且...",
                "emoji": "✈️",
                "correct": true
              },
              {
                "en": "neither nor",
                "zh": "既不...也不...",
                "emoji": "🌍",
                "correct": false
              },
              {
                "en": "either or",
                "zh": "或者...或者...",
                "emoji": "📊",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "He is not only a brilliant pitcher but also an inspiring leader.",
            "instruction": "請看中文重組成英文句子：「他不僅是一位出色的投手，更是激勵人心的領袖。」",
            "targetTokens": [
              "He",
              "is",
              "not",
              "only",
              "a",
              "brilliant",
              "pitcher",
              "but",
              "also",
              "an",
              "inspiring",
              "leader."
            ],
            "pool": [
              "He",
              "is",
              "but",
              "not",
              "pitcher",
              "leader.",
              "insist",
              "effort",
              "also",
              "an",
              "a",
              "only",
              "inspiring",
              "brilliant"
            ],
            "targetChinese": "他不僅是一位出色的投手，更是激勵人心的領袖。",
            "targetSentence": "He is not only a brilliant pitcher but also an inspiring leader."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "neither nor",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "neither nor (既不...也不...)",
                "en": "neither nor",
                "zh": "既不...也不...",
                "correct": true
              },
              {
                "text": "not only but also (不僅...而且...)",
                "en": "not only but also",
                "zh": "不僅...而且...",
                "correct": false
              },
              {
                "text": "had known (早知道)",
                "en": "had known",
                "zh": "早知道",
                "correct": false
              },
              {
                "text": "Mesozoic era (中生代)",
                "en": "Mesozoic era",
                "zh": "中生代",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "not only but also",
                "zh": "不僅...而且..."
              },
              {
                "en": "neither nor",
                "zh": "既不...也不..."
              },
              {
                "en": "either or",
                "zh": "或者...或者..."
              },
              {
                "en": "both and",
                "zh": "兩者皆是"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l7",
        "title": "第 7 關：情緒動詞與使役句型",
        "desc": "掌握 thrilled the crowd、fascinate 等核心詞彙",
        "icon": "🔥",
        "vocabularies": [
          {
            "en": "thrilled the crowd",
            "zh": "令全場振奮"
          },
          {
            "en": "fascinate",
            "zh": "深深吸引"
          },
          {
            "en": "exhausted after match",
            "zh": "賽後筋疲力竭"
          },
          {
            "en": "exhilarating",
            "zh": "令人歡欣鼓舞的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「thrilled the crowd」的正確中文意思",
            "en": "thrilled the crowd",
            "audioText": "thrilled the crowd",
            "instruction": "請問「thrilled the crowd」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "exhausted after match",
                "zh": "賽後筋疲力竭",
                "emoji": "⚙️",
                "correct": false
              },
              {
                "en": "put into practice",
                "zh": "付諸實行",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "thrilled the crowd",
                "zh": "令全場振奮",
                "emoji": "💎",
                "correct": true
              },
              {
                "en": "take advantage of",
                "zh": "善用利用",
                "emoji": "🌱",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The ninth-inning home run thrilled every baseball fan.",
            "instruction": "請看中文重組成英文句子：「九局下半的全壘打讓每位棒球迷熱血沸騰。」",
            "targetTokens": [
              "The",
              "ninth-inning",
              "home",
              "run",
              "thrilled",
              "every",
              "baseball",
              "fan."
            ],
            "pool": [
              "fan.",
              "every",
              "home",
              "run",
              "The",
              "baseball",
              "ninth-inning",
              "thrilled",
              "engine",
              "efficiency"
            ],
            "targetChinese": "九局下半的全壘打讓每位棒球迷熱血沸騰。",
            "targetSentence": "The ninth-inning home run thrilled every baseball fan."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "fascinate",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "combustion (燃燒室)",
                "en": "combustion",
                "zh": "燃燒室",
                "correct": false
              },
              {
                "text": "fascinate (深深吸引)",
                "en": "fascinate",
                "zh": "深深吸引",
                "correct": true
              },
              {
                "text": "thrilled the crowd (令全場振奮)",
                "en": "thrilled the crowd",
                "zh": "令全場振奮",
                "correct": false
              },
              {
                "text": "composure (沉著冷靜)",
                "en": "composure",
                "zh": "沉著冷靜",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "thrilled the crowd",
                "zh": "令全場振奮"
              },
              {
                "en": "fascinate",
                "zh": "深深吸引"
              },
              {
                "en": "exhausted after match",
                "zh": "賽後筋疲力竭"
              },
              {
                "en": "exhilarating",
                "zh": "令人歡欣鼓舞的"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l8",
        "title": "第 8 關：複合形容詞打造專業文風",
        "desc": "掌握 state-of-the-art、world-renowned 等核心詞彙",
        "icon": "🖋️",
        "vocabularies": [
          {
            "en": "state-of-the-art",
            "zh": "頂尖最先進的"
          },
          {
            "en": "world-renowned",
            "zh": "享譽全球的"
          },
          {
            "en": "high-performance",
            "zh": "高效能的"
          },
          {
            "en": "well-coordinated",
            "zh": "協調良好的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「state-of-the-art」的正確中文意思",
            "en": "state-of-the-art",
            "audioText": "state-of-the-art",
            "instruction": "請問「state-of-the-art」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "counterargument",
                "zh": "反方論點",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "high-performance",
                "zh": "高效能的",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "world-renowned",
                "zh": "享譽全球的",
                "emoji": "🌍",
                "correct": false
              },
              {
                "en": "state-of-the-art",
                "zh": "頂尖最先進的",
                "emoji": "✈️",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The team utilizes state-of-the-art aerospace simulation equipment.",
            "instruction": "請看中文重組成英文句子：「團隊運用了最先進的航太模擬設備。」",
            "targetTokens": [
              "The",
              "team",
              "utilizes",
              "state-of-the-art",
              "aerospace",
              "simulation",
              "equipment."
            ],
            "pool": [
              "aerospace",
              "utilizes",
              "team",
              "simulation",
              "state-of-the-art",
              "equipment.",
              "exhausted",
              "coefficient",
              "The"
            ],
            "targetChinese": "團隊運用了最先進的航太模擬設備。",
            "targetSentence": "The team utilizes state-of-the-art aerospace simulation equipment."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "world-renowned",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "state-of-the-art (頂尖最先進的)",
                "en": "state-of-the-art",
                "zh": "頂尖最先進的",
                "correct": false
              },
              {
                "text": "counterargument (反方論點)",
                "en": "counterargument",
                "zh": "反方論點",
                "correct": false
              },
              {
                "text": "sustainability (永續性)",
                "en": "sustainability",
                "zh": "永續性",
                "correct": false
              },
              {
                "text": "world-renowned (享譽全球的)",
                "en": "world-renowned",
                "zh": "享譽全球的",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "state-of-the-art",
                "zh": "頂尖最先進的"
              },
              {
                "en": "world-renowned",
                "zh": "享譽全球的"
              },
              {
                "en": "high-performance",
                "zh": "高效能的"
              },
              {
                "en": "well-coordinated",
                "zh": "協調良好的"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l9",
        "title": "第 9 關：現代航太渦輪發動機推進",
        "desc": "掌握 turbofan engine、thrust-to-weight ratio 等核心詞彙",
        "icon": "✈️",
        "vocabularies": [
          {
            "en": "turbofan engine",
            "zh": "渦輪風扇發動機"
          },
          {
            "en": "thrust-to-weight ratio",
            "zh": "推重比"
          },
          {
            "en": "fuel efficiency",
            "zh": "燃油效率"
          },
          {
            "en": "combustion",
            "zh": "燃燒室"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「turbofan engine」的正確中文意思",
            "en": "turbofan engine",
            "audioText": "turbofan engine",
            "instruction": "請問「turbofan engine」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "fuel efficiency",
                "zh": "燃油效率",
                "emoji": "🌱",
                "correct": false
              },
              {
                "en": "turbofan engine",
                "zh": "渦輪風扇發動機",
                "emoji": "💎",
                "correct": true
              },
              {
                "en": "mental toughness",
                "zh": "心理韌性",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "thrust-to-weight ratio",
                "zh": "推重比",
                "emoji": "⚙️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Turbofan engines maximize thrust while maintaining high efficiency.",
            "instruction": "請看中文重組成英文句子：「渦輪扇發動機在維持高效率的同時實現推力最大化。」",
            "targetTokens": [
              "Turbofan",
              "engines",
              "maximize",
              "thrust",
              "while",
              "maintaining",
              "high",
              "efficiency."
            ],
            "pool": [
              "high",
              "Turbofan",
              "while",
              "sustainability",
              "engines",
              "maximize",
              "thrust",
              "maintaining",
              "statement",
              "efficiency."
            ],
            "targetChinese": "渦輪扇發動機在維持高效率的同時實現推力最大化。",
            "targetSentence": "Turbofan engines maximize thrust while maintaining high efficiency."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "thrust-to-weight ratio",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "friction coefficient (摩擦係數)",
                "en": "friction coefficient",
                "zh": "摩擦係數",
                "correct": false
              },
              {
                "text": "thrust-to-weight ratio (推重比)",
                "en": "thrust-to-weight ratio",
                "zh": "推重比",
                "correct": true
              },
              {
                "text": "turbofan engine (渦輪風扇發動機)",
                "en": "turbofan engine",
                "zh": "渦輪風扇發動機",
                "correct": false
              },
              {
                "text": "trajectory deviation (彈道軌跡偏折)",
                "en": "trajectory deviation",
                "zh": "彈道軌跡偏折",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "turbofan engine",
                "zh": "渦輪風扇發動機"
              },
              {
                "en": "thrust-to-weight ratio",
                "zh": "推重比"
              },
              {
                "en": "fuel efficiency",
                "zh": "燃油效率"
              },
              {
                "en": "combustion",
                "zh": "燃燒室"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l10",
        "title": "第 10 關：運動心理學與高壓關鍵抗壓",
        "desc": "掌握 mental toughness、clutch performance 等核心詞彙",
        "icon": "🧠",
        "vocabularies": [
          {
            "en": "mental toughness",
            "zh": "心理韌性"
          },
          {
            "en": "clutch performance",
            "zh": "高壓關鍵表現"
          },
          {
            "en": "composure",
            "zh": "沉著冷靜"
          },
          {
            "en": "resilience",
            "zh": "逆境彈性"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「mental toughness」的正確中文意思",
            "en": "mental toughness",
            "audioText": "mental toughness",
            "instruction": "請問「mental toughness」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "composure",
                "zh": "沉著冷靜",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "clutch performance",
                "zh": "高壓關鍵表現",
                "emoji": "🌍",
                "correct": false
              },
              {
                "en": "carbon footprint",
                "zh": "碳足跡",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "mental toughness",
                "zh": "心理韌性",
                "emoji": "✈️",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Elite athletes cultivate mental toughness to perform under pressure.",
            "instruction": "請看中文重組成英文句子：「頂尖運動員培養心理韌性以在高壓下發揮實力。」",
            "targetTokens": [
              "Elite",
              "athletes",
              "cultivate",
              "mental",
              "toughness",
              "to",
              "perform",
              "under",
              "pressure."
            ],
            "pool": [
              "Should",
              "cultivate",
              "attention",
              "pressure.",
              "athletes",
              "toughness",
              "Elite",
              "under",
              "perform",
              "mental",
              "to"
            ],
            "targetChinese": "頂尖運動員培養心理韌性以在高壓下發揮實力。",
            "targetSentence": "Elite athletes cultivate mental toughness to perform under pressure."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "clutch performance",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "clutch performance (高壓關鍵表現)",
                "en": "clutch performance",
                "zh": "高壓關鍵表現",
                "correct": true
              },
              {
                "text": "fossilized sediment (沉積岩化石)",
                "en": "fossilized sediment",
                "zh": "沉積岩化石",
                "correct": false
              },
              {
                "text": "mental toughness (心理韌性)",
                "en": "mental toughness",
                "zh": "心理韌性",
                "correct": false
              },
              {
                "text": "autonomous vehicle (自動駕駛車輛)",
                "en": "autonomous vehicle",
                "zh": "自動駕駛車輛",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "mental toughness",
                "zh": "心理韌性"
              },
              {
                "en": "clutch performance",
                "zh": "高壓關鍵表現"
              },
              {
                "en": "composure",
                "zh": "沉著冷靜"
              },
              {
                "en": "resilience",
                "zh": "逆境彈性"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l11",
        "title": "第 11 關：撞球非線性偏轉力學",
        "desc": "掌握 trajectory deviation、friction coefficient 等核心詞彙",
        "icon": "🎱",
        "vocabularies": [
          {
            "en": "trajectory deviation",
            "zh": "彈道軌跡偏折"
          },
          {
            "en": "friction coefficient",
            "zh": "摩擦係數"
          },
          {
            "en": "spin dynamics",
            "zh": "旋轉動力學"
          },
          {
            "en": "cushion rebound",
            "zh": "顆星彈跳"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「trajectory deviation」的正確中文意思",
            "en": "trajectory deviation",
            "audioText": "trajectory deviation",
            "instruction": "請問「trajectory deviation」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "friction coefficient",
                "zh": "摩擦係數",
                "emoji": "⚙️",
                "correct": false
              },
              {
                "en": "spin dynamics",
                "zh": "旋轉動力學",
                "emoji": "🌱",
                "correct": false
              },
              {
                "en": "trajectory deviation",
                "zh": "彈道軌跡偏折",
                "emoji": "💎",
                "correct": true
              },
              {
                "en": "clutch performance",
                "zh": "高壓關鍵表現",
                "emoji": "🧠",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Spin dynamics significantly alter cue ball trajectory upon impact.",
            "instruction": "請看中文重組成英文句子：「旋轉動力學在撞擊時顯著改變母球的行進軌跡。」",
            "targetTokens": [
              "Spin",
              "dynamics",
              "significantly",
              "alter",
              "cue",
              "ball",
              "trajectory",
              "upon",
              "impact."
            ],
            "pool": [
              "dynamics",
              "Spin",
              "effort",
              "cue",
              "alter",
              "trajectory",
              "alternative",
              "ball",
              "impact.",
              "significantly",
              "upon"
            ],
            "targetChinese": "旋轉動力學在撞擊時顯著改變母球的行進軌跡。",
            "targetSentence": "Spin dynamics significantly alter cue ball trajectory upon impact."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "friction coefficient",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "collision avoidance (防撞避障機制)",
                "en": "collision avoidance",
                "zh": "防撞避障機制",
                "correct": false
              },
              {
                "text": "empirical evidence (實證證據)",
                "en": "empirical evidence",
                "zh": "實證證據",
                "correct": false
              },
              {
                "text": "trajectory deviation (彈道軌跡偏折)",
                "en": "trajectory deviation",
                "zh": "彈道軌跡偏折",
                "correct": false
              },
              {
                "text": "friction coefficient (摩擦係數)",
                "en": "friction coefficient",
                "zh": "摩擦係數",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "trajectory deviation",
                "zh": "彈道軌跡偏折"
              },
              {
                "en": "friction coefficient",
                "zh": "摩擦係數"
              },
              {
                "en": "spin dynamics",
                "zh": "旋轉動力學"
              },
              {
                "en": "cushion rebound",
                "zh": "顆星彈跳"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l12",
        "title": "第 12 關：古生物大滅絕與地質時代",
        "desc": "掌握 Mesozoic era、mass extinction 等核心詞彙",
        "icon": "🌍",
        "vocabularies": [
          {
            "en": "Mesozoic era",
            "zh": "中生代"
          },
          {
            "en": "mass extinction",
            "zh": "物種大滅絕"
          },
          {
            "en": "geological epoch",
            "zh": "地質年代"
          },
          {
            "en": "fossilized sediment",
            "zh": "沉積岩化石"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「Mesozoic era」的正確中文意思",
            "en": "Mesozoic era",
            "audioText": "Mesozoic era",
            "instruction": "請問「Mesozoic era」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "Mesozoic era",
                "zh": "中生代",
                "emoji": "✈️",
                "correct": true
              },
              {
                "en": "mass extinction",
                "zh": "物種大滅絕",
                "emoji": "🌍",
                "correct": false
              },
              {
                "en": "spin dynamics",
                "zh": "旋轉動力學",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "geological epoch",
                "zh": "地質年代",
                "emoji": "📊",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Catastrophic climate shifts marked the end of the Mesozoic era.",
            "instruction": "請看中文重組成英文句子：「災難性的氣候劇變標誌著中生代的結束。」",
            "targetTokens": [
              "Catastrophic",
              "climate",
              "shifts",
              "marked",
              "the",
              "end",
              "of",
              "the",
              "Mesozoic",
              "era."
            ],
            "pool": [
              "of",
              "lidar",
              "marked",
              "era.",
              "climate",
              "shifts",
              "the",
              "Catastrophic",
              "Mesozoic",
              "the",
              "hit",
              "end"
            ],
            "targetChinese": "災難性的氣候劇變標誌著中生代的結束。",
            "targetSentence": "Catastrophic climate shifts marked the end of the Mesozoic era."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "mass extinction",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "Mesozoic era (中生代)",
                "en": "Mesozoic era",
                "zh": "中生代",
                "correct": false
              },
              {
                "text": "fuel efficiency (燃油效率)",
                "en": "fuel efficiency",
                "zh": "燃油效率",
                "correct": false
              },
              {
                "text": "mass extinction (物種大滅絕)",
                "en": "mass extinction",
                "zh": "物種大滅絕",
                "correct": true
              },
              {
                "text": "cushion rebound (顆星彈跳)",
                "en": "cushion rebound",
                "zh": "顆星彈跳",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "Mesozoic era",
                "zh": "中生代"
              },
              {
                "en": "mass extinction",
                "zh": "物種大滅絕"
              },
              {
                "en": "geological epoch",
                "zh": "地質年代"
              },
              {
                "en": "fossilized sediment",
                "zh": "沉積岩化石"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l13",
        "title": "第 13 關：自動駕駛與車聯網安全",
        "desc": "掌握 autonomous vehicle、sensor fusion 等核心詞彙",
        "icon": "🚗",
        "vocabularies": [
          {
            "en": "autonomous vehicle",
            "zh": "自動駕駛車輛"
          },
          {
            "en": "sensor fusion",
            "zh": "多重感測器融合"
          },
          {
            "en": "collision avoidance",
            "zh": "防撞避障機制"
          },
          {
            "en": "lidar",
            "zh": "光學雷達"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「autonomous vehicle」的正確中文意思",
            "en": "autonomous vehicle",
            "audioText": "autonomous vehicle",
            "instruction": "請問「autonomous vehicle」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "collision avoidance",
                "zh": "防撞避障機制",
                "emoji": "🌱",
                "correct": false
              },
              {
                "en": "clutch performance",
                "zh": "高壓關鍵表現",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "autonomous vehicle",
                "zh": "自動駕駛車輛",
                "emoji": "💎",
                "correct": true
              },
              {
                "en": "sensor fusion",
                "zh": "多重感測器融合",
                "emoji": "⚙️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Autonomous vehicles combine lidar and camera sensor fusion.",
            "instruction": "請看中文重組成英文句子：「自動駕駛車輛融合了光達與攝影機感測技術。」",
            "targetTokens": [
              "Autonomous",
              "vehicles",
              "combine",
              "lidar",
              "and",
              "camera",
              "sensor",
              "fusion."
            ],
            "pool": [
              "lidar",
              "sensor",
              "Autonomous",
              "and",
              "fusion.",
              "avoidance",
              "camera",
              "well-coordinated",
              "combine",
              "vehicles"
            ],
            "targetChinese": "自動駕駛車輛融合了光達與攝影機感測技術。",
            "targetSentence": "Autonomous vehicles combine lidar and camera sensor fusion."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "sensor fusion",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "Mesozoic era (中生代)",
                "en": "Mesozoic era",
                "zh": "中生代",
                "correct": false
              },
              {
                "text": "sensor fusion (多重感測器融合)",
                "en": "sensor fusion",
                "zh": "多重感測器融合",
                "correct": true
              },
              {
                "text": "autonomous vehicle (自動駕駛車輛)",
                "en": "autonomous vehicle",
                "zh": "自動駕駛車輛",
                "correct": false
              },
              {
                "text": "spin dynamics (旋轉動力學)",
                "en": "spin dynamics",
                "zh": "旋轉動力學",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "autonomous vehicle",
                "zh": "自動駕駛車輛"
              },
              {
                "en": "sensor fusion",
                "zh": "多重感測器融合"
              },
              {
                "en": "collision avoidance",
                "zh": "防撞避障機制"
              },
              {
                "en": "lidar",
                "zh": "光學雷達"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l14",
        "title": "第 14 關：聯合國永續發展目標 (SDGs)",
        "desc": "掌握 sustainability、carbon footprint 等核心詞彙",
        "icon": "🌱",
        "vocabularies": [
          {
            "en": "sustainability",
            "zh": "永續性"
          },
          {
            "en": "carbon footprint",
            "zh": "碳足跡"
          },
          {
            "en": "biodiversity",
            "zh": "生物多樣性"
          },
          {
            "en": "conservation",
            "zh": "保育工作"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「sustainability」的正確中文意思",
            "en": "sustainability",
            "audioText": "sustainability",
            "instruction": "請問「sustainability」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "world-renowned",
                "zh": "享譽全球的",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "carbon footprint",
                "zh": "碳足跡",
                "emoji": "🌍",
                "correct": false
              },
              {
                "en": "sustainability",
                "zh": "永續性",
                "emoji": "✈️",
                "correct": true
              },
              {
                "en": "biodiversity",
                "zh": "生物多樣性",
                "emoji": "📊",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Reducing carbon emissions is fundamental to global sustainability.",
            "instruction": "請看中文重組成英文句子：「減少碳排放是全球永續發展的根本之道。」",
            "targetTokens": [
              "Reducing",
              "carbon",
              "emissions",
              "is",
              "fundamental",
              "to",
              "global",
              "sustainability."
            ],
            "pool": [
              "either",
              "is",
              "to",
              "fundamental",
              "you",
              "Reducing",
              "sustainability.",
              "emissions",
              "global",
              "carbon"
            ],
            "targetChinese": "減少碳排放是全球永續發展的根本之道。",
            "targetSentence": "Reducing carbon emissions is fundamental to global sustainability."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "carbon footprint",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "sustainability (永續性)",
                "en": "sustainability",
                "zh": "永續性",
                "correct": false
              },
              {
                "text": "carbon footprint (碳足跡)",
                "en": "carbon footprint",
                "zh": "碳足跡",
                "correct": true
              },
              {
                "text": "turbofan engine (渦輪風扇發動機)",
                "en": "turbofan engine",
                "zh": "渦輪風扇發動機",
                "correct": false
              },
              {
                "text": "mental toughness (心理韌性)",
                "en": "mental toughness",
                "zh": "心理韌性",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "sustainability",
                "zh": "永續性"
              },
              {
                "en": "carbon footprint",
                "zh": "碳足跡"
              },
              {
                "en": "biodiversity",
                "zh": "生物多樣性"
              },
              {
                "en": "conservation",
                "zh": "保育工作"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l15",
        "title": "第 15 關：學術論說文主題句與論據",
        "desc": "掌握 thesis statement、empirical evidence 等核心詞彙",
        "icon": "📄",
        "vocabularies": [
          {
            "en": "thesis statement",
            "zh": "主旨核心論點"
          },
          {
            "en": "empirical evidence",
            "zh": "實證證據"
          },
          {
            "en": "counterargument",
            "zh": "反方論點"
          },
          {
            "en": "coherent",
            "zh": "前後連貫的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「thesis statement」的正確中文意思",
            "en": "thesis statement",
            "audioText": "thesis statement",
            "instruction": "請問「thesis statement」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "thesis statement",
                "zh": "主旨核心論點",
                "emoji": "💎",
                "correct": true
              },
              {
                "en": "counterargument",
                "zh": "反方論點",
                "emoji": "🌱",
                "correct": false
              },
              {
                "en": "empirical evidence",
                "zh": "實證證據",
                "emoji": "⚙️",
                "correct": false
              },
              {
                "en": "mass extinction",
                "zh": "物種大滅絕",
                "emoji": "🧠",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "A strong thesis statement anchors the entire essay argument.",
            "instruction": "請看中文重組成英文句子：「有力的主題句奠定了整篇論述論文的核心立場。」",
            "targetTokens": [
              "A",
              "strong",
              "thesis",
              "statement",
              "anchors",
              "the",
              "entire",
              "essay",
              "argument."
            ],
            "pool": [
              "entire",
              "argument.",
              "A",
              "conservation",
              "exhilarating",
              "strong",
              "the",
              "essay",
              "thesis",
              "statement",
              "anchors"
            ],
            "targetChinese": "有力的主題句奠定了整篇論述論文的核心立場。",
            "targetSentence": "A strong thesis statement anchors the entire essay argument."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "empirical evidence",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "collision avoidance (防撞避障機制)",
                "en": "collision avoidance",
                "zh": "防撞避障機制",
                "correct": false
              },
              {
                "text": "clutch performance (高壓關鍵表現)",
                "en": "clutch performance",
                "zh": "高壓關鍵表現",
                "correct": false
              },
              {
                "text": "empirical evidence (實證證據)",
                "en": "empirical evidence",
                "zh": "實證證據",
                "correct": true
              },
              {
                "text": "thesis statement (主旨核心論點)",
                "en": "thesis statement",
                "zh": "主旨核心論點",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "thesis statement",
                "zh": "主旨核心論點"
              },
              {
                "en": "empirical evidence",
                "zh": "實證證據"
              },
              {
                "en": "counterargument",
                "zh": "反方論點"
              },
              {
                "en": "coherent",
                "zh": "前後連貫的"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_mid-l16",
        "title": "第 16 關：高二頂尖聯賽魔王試煉",
        "desc": "掌握 If I were a pilot、state-of-the-art 等核心詞彙",
        "icon": "👑",
        "vocabularies": [
          {
            "en": "If I were a pilot",
            "zh": "若我是飛行員"
          },
          {
            "en": "state-of-the-art",
            "zh": "頂尖的"
          },
          {
            "en": "mental toughness",
            "zh": "心理韌性"
          },
          {
            "en": "sustainability",
            "zh": "永續發展"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「If I were a pilot」的正確中文意思",
            "en": "If I were a pilot",
            "audioText": "If I were a pilot",
            "instruction": "請問「If I were a pilot」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "If I were a pilot",
                "zh": "若我是飛行員",
                "emoji": "✈️",
                "correct": true
              },
              {
                "en": "insist that S (should) V",
                "zh": "堅持要求",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "not only but also",
                "zh": "不僅...而且...",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "mental toughness",
                "zh": "心理韌性",
                "emoji": "🌍",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Had he persevered, he would have achieved magnificent greatness.",
            "instruction": "請看中文重組成英文句子：「若他當時堅持下去，必將成就非凡的偉業。」",
            "targetTokens": [
              "Had",
              "he",
              "persevered,",
              "he",
              "would",
              "have",
              "achieved",
              "magnificent",
              "greatness."
            ],
            "pool": [
              "greatness.",
              "magnificent",
              "he",
              "persevered,",
              "would",
              "Had",
              "have",
              "only",
              "achieved",
              "conservation",
              "he"
            ],
            "targetChinese": "若他當時堅持下去，必將成就非凡的偉業。",
            "targetSentence": "Had he persevered, he would have achieved magnificent greatness."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "state-of-the-art",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "If I were a pilot (若我是飛行員)",
                "en": "If I were a pilot",
                "zh": "若我是飛行員",
                "correct": false
              },
              {
                "text": "high-performance (高效能的)",
                "en": "high-performance",
                "zh": "高效能的",
                "correct": false
              },
              {
                "text": "world-renowned (享譽全球的)",
                "en": "world-renowned",
                "zh": "享譽全球的",
                "correct": false
              },
              {
                "text": "state-of-the-art (頂尖的)",
                "en": "state-of-the-art",
                "zh": "頂尖的",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "If I were a pilot",
                "zh": "若我是飛行員"
              },
              {
                "en": "state-of-the-art",
                "zh": "頂尖的"
              },
              {
                "en": "mental toughness",
                "zh": "心理韌性"
              },
              {
                "en": "sustainability",
                "zh": "永續發展"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "sh_adv",
    "category": "senior",
    "categoryName": "高中階段",
    "categoryIcon": "🏛️",
    "subLevel": "adv",
    "subLevelName": "高中・高級 (高三學測)",
    "badge": "👑 學測滿級分",
    "desc": "核心7000單、期刊導讀、學測頂標閱讀、新聞深度剖析與批判思維",
    "cefr": "B2",
    "themeColor": "#6366f1",
    "colorClass": "u-space",
    "lessons": [
      {
        "id": "sh_adv-l1",
        "title": "第 1 關：7000核心學術高頻字彙",
        "desc": "掌握 unprecedented、ubiquitous 等核心詞彙",
        "icon": "💎",
        "vocabularies": [
          {
            "en": "unprecedented",
            "zh": "史無前例的"
          },
          {
            "en": "ubiquitous",
            "zh": "無所不在普及的"
          },
          {
            "en": "paradigm",
            "zh": "範式典範"
          },
          {
            "en": "nuance",
            "zh": "細微差異"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「unprecedented」的正確中文意思",
            "en": "unprecedented",
            "audioText": "unprecedented",
            "instruction": "請問「unprecedented」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "proliferation",
                "zh": "迅速激增",
                "emoji": "🚀",
                "correct": false
              },
              {
                "en": "unprecedented",
                "zh": "史無前例的",
                "emoji": "👑",
                "correct": true
              },
              {
                "en": "ubiquitous",
                "zh": "無所不在普及的",
                "emoji": "🧬",
                "correct": false
              },
              {
                "en": "paradigm",
                "zh": "範式典範",
                "emoji": "🤖",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Artificial intelligence represents an unprecedented technological paradigm shift.",
            "instruction": "請看中文重組成英文句子：「人工智慧代表了一場前所未有的技術典範轉移。」",
            "targetTokens": [
              "Artificial",
              "intelligence",
              "represents",
              "an",
              "unprecedented",
              "technological",
              "paradigm",
              "shift."
            ],
            "pool": [
              "unprecedented",
              "shift.",
              "technological",
              "an",
              "represents",
              "Artificial",
              "intelligence",
              "hallucination",
              "paradigm",
              "technique"
            ],
            "targetChinese": "人工智慧代表了一場前所未有的技術典範轉移。",
            "targetSentence": "Artificial intelligence represents an unprecedented technological paradigm shift."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "ubiquitous",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "hypersonic (高超音速(5馬赫以上))",
                "en": "hypersonic",
                "zh": "高超音速(5馬赫以上)",
                "correct": false
              },
              {
                "text": "appositive (同位語)",
                "en": "appositive",
                "zh": "同位語",
                "correct": false
              },
              {
                "text": "unprecedented (史無前例的)",
                "en": "unprecedented",
                "zh": "史無前例的",
                "correct": false
              },
              {
                "text": "ubiquitous (無所不在普及的)",
                "en": "ubiquitous",
                "zh": "無所不在普及的",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "unprecedented",
                "zh": "史無前例的"
              },
              {
                "en": "ubiquitous",
                "zh": "無所不在普及的"
              },
              {
                "en": "paradigm",
                "zh": "範式典範"
              },
              {
                "en": "nuance",
                "zh": "細微差異"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l2",
        "title": "第 2 關：雙重否定與對比強調句型",
        "desc": "掌握 It is not that... but that、far from being 等核心詞彙",
        "icon": "🎯",
        "vocabularies": [
          {
            "en": "It is not that... but that",
            "zh": "並非...而是..."
          },
          {
            "en": "far from being",
            "zh": "遠非..."
          },
          {
            "en": "nowhere near",
            "zh": "遠遠不及"
          },
          {
            "en": "not uncommon",
            "zh": "並不罕見"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「It is not that... but that」的正確中文意思",
            "en": "It is not that... but that",
            "audioText": "It is not that... but that",
            "instruction": "請問「It is not that... but that」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "not uncommon",
                "zh": "並不罕見",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "nowhere near",
                "zh": "遠遠不及",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "It is not that... but that",
                "zh": "並非...而是...",
                "emoji": "📚",
                "correct": true
              },
              {
                "en": "far from being",
                "zh": "遠非...",
                "emoji": "🔬",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "It is not that we lack talent, but that we need discipline.",
            "instruction": "請看中文重組成英文句子：「並非我們缺乏才華，而是我們需要高度自律。」",
            "targetTokens": [
              "It",
              "is",
              "not",
              "that",
              "we",
              "lack",
              "talent,",
              "but",
              "that",
              "we",
              "need",
              "discipline."
            ],
            "pool": [
              "need",
              "not",
              "talent,",
              "we",
              "lack",
              "that",
              "It",
              "subordination",
              "we",
              "is",
              "discipline.",
              "that",
              "decomposition",
              "but"
            ],
            "targetChinese": "並非我們缺乏才華，而是我們需要高度自律。",
            "targetSentence": "It is not that we lack talent, but that we need discipline."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "far from being",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "far from being (遠非...)",
                "en": "far from being",
                "zh": "遠非...",
                "correct": true
              },
              {
                "text": "It is not that... but that (並非...而是...)",
                "en": "It is not that... but that",
                "zh": "並非...而是...",
                "correct": false
              },
              {
                "text": "not uncommon (並不罕見)",
                "en": "not uncommon",
                "zh": "並不罕見",
                "correct": false
              },
              {
                "text": "nowhere near (遠遠不及)",
                "en": "nowhere near",
                "zh": "遠遠不及",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "It is not that... but that",
                "zh": "並非...而是..."
              },
              {
                "en": "far from being",
                "zh": "遠非..."
              },
              {
                "en": "nowhere near",
                "zh": "遠遠不及"
              },
              {
                "en": "not uncommon",
                "zh": "並不罕見"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l3",
        "title": "第 3 關：名詞化寫作風格提升",
        "desc": "掌握 nominalization、implementation 等核心詞彙",
        "icon": "🖋️",
        "vocabularies": [
          {
            "en": "nominalization",
            "zh": "動詞名詞化"
          },
          {
            "en": "implementation",
            "zh": "實施推行"
          },
          {
            "en": "acceleration",
            "zh": "加速提升"
          },
          {
            "en": "proliferation",
            "zh": "迅速激增"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「nominalization」的正確中文意思",
            "en": "nominalization",
            "audioText": "nominalization",
            "instruction": "請問「nominalization」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "acceleration",
                "zh": "加速提升",
                "emoji": "🤖",
                "correct": false
              },
              {
                "en": "semiconductor",
                "zh": "半導體晶片",
                "emoji": "🚀",
                "correct": false
              },
              {
                "en": "nominalization",
                "zh": "動詞名詞化",
                "emoji": "👑",
                "correct": true
              },
              {
                "en": "implementation",
                "zh": "實施推行",
                "emoji": "🧬",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The implementation of new policies triggered rapid economic revitalization.",
            "instruction": "請看中文重組成英文句子：「新政策的推行引發了迅速的經濟振興。」",
            "targetTokens": [
              "The",
              "implementation",
              "of",
              "new",
              "policies",
              "triggered",
              "rapid",
              "economic",
              "revitalization."
            ],
            "pool": [
              "rapid",
              "revitalization.",
              "triggered",
              "skeptical",
              "economic",
              "implementation",
              "unbiased",
              "The",
              "new",
              "of",
              "policies"
            ],
            "targetChinese": "新政策的推行引發了迅速的經濟振興。",
            "targetSentence": "The implementation of new policies triggered rapid economic revitalization."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "implementation",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "implementation (實施推行)",
                "en": "implementation",
                "zh": "實施推行",
                "correct": true
              },
              {
                "text": "nominalization (動詞名詞化)",
                "en": "nominalization",
                "zh": "動詞名詞化",
                "correct": false
              },
              {
                "text": "hallucination (模型幻覺)",
                "en": "hallucination",
                "zh": "模型幻覺",
                "correct": false
              },
              {
                "text": "unprecedented (史無前例的)",
                "en": "unprecedented",
                "zh": "史無前例的",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "nominalization",
                "zh": "動詞名詞化"
              },
              {
                "en": "implementation",
                "zh": "實施推行"
              },
              {
                "en": "acceleration",
                "zh": "加速提升"
              },
              {
                "en": "proliferation",
                "zh": "迅速激增"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l4",
        "title": "第 4 關：作者弦外之音與隱含態度",
        "desc": "掌握 author tone、skeptical 等核心詞彙",
        "icon": "🧐",
        "vocabularies": [
          {
            "en": "author tone",
            "zh": "作者筆調"
          },
          {
            "en": "skeptical",
            "zh": "抱持懷疑的"
          },
          {
            "en": "ironic",
            "zh": "帶有諷刺意味的"
          },
          {
            "en": "endorse",
            "zh": "贊同背書"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「author tone」的正確中文意思",
            "en": "author tone",
            "audioText": "author tone",
            "instruction": "請問「author tone」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "skeptical",
                "zh": "抱持懷疑的",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "author tone",
                "zh": "作者筆調",
                "emoji": "📚",
                "correct": true
              },
              {
                "en": "ironic",
                "zh": "帶有諷刺意味的",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "game theory",
                "zh": "賽局博弈理論",
                "emoji": "🌐",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The author tone remains skeptical regarding unproven claims.",
            "instruction": "請看中文重組成英文句子：「作者對於未經證實的說法保持懷疑態度。」",
            "targetTokens": [
              "The",
              "author",
              "tone",
              "remains",
              "skeptical",
              "regarding",
              "unproven",
              "claims."
            ],
            "pool": [
              "remains",
              "unproven",
              "claims.",
              "regarding",
              "The",
              "decomposition",
              "author",
              "skeptical",
              "semiconductor",
              "tone"
            ],
            "targetChinese": "作者對於未經證實的說法保持懷疑態度。",
            "targetSentence": "The author tone remains skeptical regarding unproven claims."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "skeptical",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "hypersonic (高超音速(5馬赫以上))",
                "en": "hypersonic",
                "zh": "高超音速(5馬赫以上)",
                "correct": false
              },
              {
                "text": "author tone (作者筆調)",
                "en": "author tone",
                "zh": "作者筆調",
                "correct": false
              },
              {
                "text": "skeptical (抱持懷疑的)",
                "en": "skeptical",
                "zh": "抱持懷疑的",
                "correct": true
              },
              {
                "text": "alignment (價值對齊工程)",
                "en": "alignment",
                "zh": "價值對齊工程",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "author tone",
                "zh": "作者筆調"
              },
              {
                "en": "skeptical",
                "zh": "抱持懷疑的"
              },
              {
                "en": "ironic",
                "zh": "帶有諷刺意味的"
              },
              {
                "en": "endorse",
                "zh": "贊同背書"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l5",
        "title": "第 5 關：長難句化繁為簡解析策略",
        "desc": "掌握 clause decomposition、subordination 等核心詞彙",
        "icon": "🧩",
        "vocabularies": [
          {
            "en": "clause decomposition",
            "zh": "子句拆解"
          },
          {
            "en": "subordination",
            "zh": "從屬子句"
          },
          {
            "en": "appositive",
            "zh": "同位語"
          },
          {
            "en": "parenthetical",
            "zh": "插入語"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「clause decomposition」的正確中文意思",
            "en": "clause decomposition",
            "audioText": "clause decomposition",
            "instruction": "請問「clause decomposition」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "appositive",
                "zh": "同位語",
                "emoji": "🤖",
                "correct": false
              },
              {
                "en": "subordination",
                "zh": "從屬子句",
                "emoji": "🧬",
                "correct": false
              },
              {
                "en": "syntactic precision",
                "zh": "句構精準度",
                "emoji": "🚀",
                "correct": false
              },
              {
                "en": "clause decomposition",
                "zh": "子句拆解",
                "emoji": "👑",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Deconstructing subordinate clauses clarifies complex philosophical assertions.",
            "instruction": "請看中文重組成英文句子：「解構從屬子句能釐清複雜的哲學主張。」",
            "targetTokens": [
              "Deconstructing",
              "subordinate",
              "clauses",
              "clarifies",
              "complex",
              "philosophical",
              "assertions."
            ],
            "pool": [
              "resiliency",
              "complex",
              "clauses",
              "subordinate",
              "precision",
              "assertions.",
              "philosophical",
              "Deconstructing",
              "clarifies"
            ],
            "targetChinese": "解構從屬子句能釐清複雜的哲學主張。",
            "targetSentence": "Deconstructing subordinate clauses clarifies complex philosophical assertions."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "subordination",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "subordination (從屬子句)",
                "en": "subordination",
                "zh": "從屬子句",
                "correct": true
              },
              {
                "text": "clause decomposition (子句拆解)",
                "en": "clause decomposition",
                "zh": "子句拆解",
                "correct": false
              },
              {
                "text": "peer-reviewed (同行同儕審查的)",
                "en": "peer-reviewed",
                "zh": "同行同儕審查的",
                "correct": false
              },
              {
                "text": "proliferation (迅速激增)",
                "en": "proliferation",
                "zh": "迅速激增",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "clause decomposition",
                "zh": "子句拆解"
              },
              {
                "en": "subordination",
                "zh": "從屬子句"
              },
              {
                "en": "appositive",
                "zh": "同位語"
              },
              {
                "en": "parenthetical",
                "zh": "插入語"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l6",
        "title": "第 6 關：頂尖科學期刊文獻導讀",
        "desc": "掌握 peer-reviewed、methodology 等核心詞彙",
        "icon": "🔬",
        "vocabularies": [
          {
            "en": "peer-reviewed",
            "zh": "同行同儕審查的"
          },
          {
            "en": "methodology",
            "zh": "研究方法論"
          },
          {
            "en": "empirical finding",
            "zh": "實證發現"
          },
          {
            "en": "statistically significant",
            "zh": "統計顯著的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「peer-reviewed」的正確中文意思",
            "en": "peer-reviewed",
            "audioText": "peer-reviewed",
            "instruction": "請問「peer-reviewed」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "peer-reviewed",
                "zh": "同行同儕審查的",
                "emoji": "📚",
                "correct": true
              },
              {
                "en": "methodology",
                "zh": "研究方法論",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "unprecedented",
                "zh": "史無前例的",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "empirical finding",
                "zh": "實證發現",
                "emoji": "🧠",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The findings were published in a peer-reviewed academic journal.",
            "instruction": "請看中文重組成英文句子：「研究結果發表於同行評審的權威學術期刊上。」",
            "targetTokens": [
              "The",
              "findings",
              "were",
              "published",
              "in",
              "a",
              "peer-reviewed",
              "academic",
              "journal."
            ],
            "pool": [
              "were",
              "The",
              "academic",
              "findings",
              "a",
              "journal.",
              "peer-reviewed",
              "semiconductor",
              "regulatory",
              "in",
              "published"
            ],
            "targetChinese": "研究結果發表於同行評審的權威學術期刊上。",
            "targetSentence": "The findings were published in a peer-reviewed academic journal."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "methodology",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "methodology (研究方法論)",
                "en": "methodology",
                "zh": "研究方法論",
                "correct": true
              },
              {
                "text": "neuroscience (神經科學)",
                "en": "neuroscience",
                "zh": "神經科學",
                "correct": false
              },
              {
                "text": "geopolitics (地緣政治)",
                "en": "geopolitics",
                "zh": "地緣政治",
                "correct": false
              },
              {
                "text": "peer-reviewed (同行同儕審查的)",
                "en": "peer-reviewed",
                "zh": "同行同儕審查的",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "peer-reviewed",
                "zh": "同行同儕審查的"
              },
              {
                "en": "methodology",
                "zh": "研究方法論"
              },
              {
                "en": "empirical finding",
                "zh": "實證發現"
              },
              {
                "en": "statistically significant",
                "zh": "統計顯著的"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l7",
        "title": "第 7 關：運動神經科學與擊球反應極限",
        "desc": "掌握 neuroscience、reaction threshold 等核心詞彙",
        "icon": "⚾",
        "vocabularies": [
          {
            "en": "neuroscience",
            "zh": "神經科學"
          },
          {
            "en": "reaction threshold",
            "zh": "反應臨界閥值"
          },
          {
            "en": "visual cognition",
            "zh": "視覺認知"
          },
          {
            "en": "muscle memory",
            "zh": "肌肉記憶"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「neuroscience」的正確中文意思",
            "en": "neuroscience",
            "audioText": "neuroscience",
            "instruction": "請問「neuroscience」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "neuroscience",
                "zh": "神經科學",
                "emoji": "👑",
                "correct": true
              },
              {
                "en": "visual cognition",
                "zh": "視覺認知",
                "emoji": "🤖",
                "correct": false
              },
              {
                "en": "reaction threshold",
                "zh": "反應臨界閥值",
                "emoji": "🧬",
                "correct": false
              },
              {
                "en": "substantiate",
                "zh": "舉證證實",
                "emoji": "🚀",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Elite baseball batters process pitch rotation in milliseconds.",
            "instruction": "請看中文重組成英文句子：「頂尖棒球打者在幾毫秒內就能判斷球的旋轉。」",
            "targetTokens": [
              "Elite",
              "baseball",
              "batters",
              "process",
              "pitch",
              "rotation",
              "in",
              "milliseconds."
            ],
            "pool": [
              "batters",
              "alignment",
              "in",
              "Elite",
              "hallucination",
              "rotation",
              "process",
              "milliseconds.",
              "baseball",
              "pitch"
            ],
            "targetChinese": "頂尖棒球打者在幾毫秒內就能判斷球的旋轉。",
            "targetSentence": "Elite baseball batters process pitch rotation in milliseconds."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "reaction threshold",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "neuroscience (神經科學)",
                "en": "neuroscience",
                "zh": "神經科學",
                "correct": false
              },
              {
                "text": "reaction threshold (反應臨界閥值)",
                "en": "reaction threshold",
                "zh": "反應臨界閥值",
                "correct": true
              },
              {
                "text": "rhetorical framing (論述框架)",
                "en": "rhetorical framing",
                "zh": "論述框架",
                "correct": false
              },
              {
                "text": "critical discourse (批判性思維論述)",
                "en": "critical discourse",
                "zh": "批判性思維論述",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "neuroscience",
                "zh": "神經科學"
              },
              {
                "en": "reaction threshold",
                "zh": "反應臨界閥值"
              },
              {
                "en": "visual cognition",
                "zh": "視覺認知"
              },
              {
                "en": "muscle memory",
                "zh": "肌肉記憶"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l8",
        "title": "第 8 關：高超音速飛行與未來太空站",
        "desc": "掌握 hypersonic、scramjet 等核心詞彙",
        "icon": "🚀",
        "vocabularies": [
          {
            "en": "hypersonic",
            "zh": "高超音速(5馬赫以上)"
          },
          {
            "en": "scramjet",
            "zh": "超音速燃燒衝壓引擎"
          },
          {
            "en": "orbital insertion",
            "zh": "進入預定軌道"
          },
          {
            "en": "aerothermodynamic",
            "zh": "空氣熱力學"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「hypersonic」的正確中文意思",
            "en": "hypersonic",
            "audioText": "hypersonic",
            "instruction": "請問「hypersonic」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "scramjet",
                "zh": "超音速燃燒衝壓引擎",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "hypersonic",
                "zh": "高超音速(5馬赫以上)",
                "emoji": "📚",
                "correct": true
              },
              {
                "en": "adaptation",
                "zh": "適應性",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "orbital insertion",
                "zh": "進入預定軌道",
                "emoji": "🧠",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Hypersonic aircraft travel at speeds exceeding five times sound.",
            "instruction": "請看中文重組成英文句子：「極音速飛行器以超過五倍音速的速度飛行。」",
            "targetTokens": [
              "Hypersonic",
              "aircraft",
              "travel",
              "at",
              "speeds",
              "exceeding",
              "five",
              "times",
              "sound."
            ],
            "pool": [
              "travel",
              "at",
              "five",
              "sound.",
              "exceeding",
              "uncommon",
              "Hypersonic",
              "geopolitics",
              "times",
              "speeds",
              "aircraft"
            ],
            "targetChinese": "極音速飛行器以超過五倍音速的速度飛行。",
            "targetSentence": "Hypersonic aircraft travel at speeds exceeding five times sound."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "scramjet",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "ubiquitous (無所不在普及的)",
                "en": "ubiquitous",
                "zh": "無所不在普及的",
                "correct": false
              },
              {
                "text": "unbiased (客觀公正無偏見的)",
                "en": "unbiased",
                "zh": "客觀公正無偏見的",
                "correct": false
              },
              {
                "text": "scramjet (超音速燃燒衝壓引擎)",
                "en": "scramjet",
                "zh": "超音速燃燒衝壓引擎",
                "correct": true
              },
              {
                "text": "hypersonic (高超音速(5馬赫以上))",
                "en": "hypersonic",
                "zh": "高超音速(5馬赫以上)",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "hypersonic",
                "zh": "高超音速(5馬赫以上)"
              },
              {
                "en": "scramjet",
                "zh": "超音速燃燒衝壓引擎"
              },
              {
                "en": "orbital insertion",
                "zh": "進入預定軌道"
              },
              {
                "en": "aerothermodynamic",
                "zh": "空氣熱力學"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l9",
        "title": "第 9 關：博弈論與撞球對抗策略",
        "desc": "掌握 game theory、minimax strategy 等核心詞彙",
        "icon": "♟️",
        "vocabularies": [
          {
            "en": "game theory",
            "zh": "賽局博弈理論"
          },
          {
            "en": "minimax strategy",
            "zh": "極小化極大策略"
          },
          {
            "en": "adversarial play",
            "zh": "對抗賽局"
          },
          {
            "en": "optimal positioning",
            "zh": "最佳走位"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「game theory」的正確中文意思",
            "en": "game theory",
            "audioText": "game theory",
            "instruction": "請問「game theory」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "author tone",
                "zh": "作者筆調",
                "emoji": "🚀",
                "correct": false
              },
              {
                "en": "game theory",
                "zh": "賽局博弈理論",
                "emoji": "👑",
                "correct": true
              },
              {
                "en": "minimax strategy",
                "zh": "極小化極大策略",
                "emoji": "🧬",
                "correct": false
              },
              {
                "en": "adversarial play",
                "zh": "對抗賽局",
                "emoji": "🤖",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Applying game theory ensures optimal table defense and offense.",
            "instruction": "請看中文重組成英文句子：「應用賽局理論能確保球檯上的最佳攻守平衡。」",
            "targetTokens": [
              "Applying",
              "game",
              "theory",
              "ensures",
              "optimal",
              "table",
              "defense",
              "and",
              "offense."
            ],
            "pool": [
              "offense.",
              "optimal",
              "theory",
              "game",
              "geopolitics",
              "defense",
              "context",
              "and",
              "Applying",
              "table",
              "ensures"
            ],
            "targetChinese": "應用賽局理論能確保球檯上的最佳攻守平衡。",
            "targetSentence": "Applying game theory ensures optimal table defense and offense."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "minimax strategy",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "orbital insertion (進入預定軌道)",
                "en": "orbital insertion",
                "zh": "進入預定軌道",
                "correct": false
              },
              {
                "text": "game theory (賽局博弈理論)",
                "en": "game theory",
                "zh": "賽局博弈理論",
                "correct": false
              },
              {
                "text": "foundation model (基底模型)",
                "en": "foundation model",
                "zh": "基底模型",
                "correct": false
              },
              {
                "text": "minimax strategy (極小化極大策略)",
                "en": "minimax strategy",
                "zh": "極小化極大策略",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "game theory",
                "zh": "賽局博弈理論"
              },
              {
                "en": "minimax strategy",
                "zh": "極小化極大策略"
              },
              {
                "en": "adversarial play",
                "zh": "對抗賽局"
              },
              {
                "en": "optimal positioning",
                "zh": "最佳走位"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l10",
        "title": "第 10 關：演化發育生物學 (Evo-Devo)",
        "desc": "掌握 morphology、genetic regulatory network 等核心詞彙",
        "icon": "🦖",
        "vocabularies": [
          {
            "en": "morphology",
            "zh": "生物形態學"
          },
          {
            "en": "genetic regulatory network",
            "zh": "基因調控網路"
          },
          {
            "en": "adaptation",
            "zh": "適應性"
          },
          {
            "en": "fossilized lineage",
            "zh": "化石演化支"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「morphology」的正確中文意思",
            "en": "morphology",
            "audioText": "morphology",
            "instruction": "請問「morphology」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "morphology",
                "zh": "生物形態學",
                "emoji": "📚",
                "correct": true
              },
              {
                "en": "genetic regulatory network",
                "zh": "基因調控網路",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "hypersonic",
                "zh": "高超音速(5馬赫以上)",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "adaptation",
                "zh": "適應性",
                "emoji": "🧠",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Morphological adaptations reflect millions of years of environmental selection.",
            "instruction": "請看中文重組成英文句子：「形態上的適應反映了數百萬年的環境天擇。」",
            "targetTokens": [
              "Morphological",
              "adaptations",
              "reflect",
              "millions",
              "of",
              "years",
              "of",
              "environmental",
              "selection."
            ],
            "pool": [
              "millions",
              "environmental",
              "paradigm",
              "adaptations",
              "of",
              "reflect",
              "ubiquitous",
              "selection.",
              "years",
              "of",
              "Morphological"
            ],
            "targetChinese": "形態上的適應反映了數百萬年的環境天擇。",
            "targetSentence": "Morphological adaptations reflect millions of years of environmental selection."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "genetic regulatory network",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "far from being (遠非...)",
                "en": "far from being",
                "zh": "遠非...",
                "correct": false
              },
              {
                "text": "genetic regulatory network (基因調控網路)",
                "en": "genetic regulatory network",
                "zh": "基因調控網路",
                "correct": true
              },
              {
                "text": "supply chain resiliency (供應鏈韌性)",
                "en": "supply chain resiliency",
                "zh": "供應鏈韌性",
                "correct": false
              },
              {
                "text": "fossilized lineage (化石演化支)",
                "en": "fossilized lineage",
                "zh": "化石演化支",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "morphology",
                "zh": "生物形態學"
              },
              {
                "en": "genetic regulatory network",
                "zh": "基因調控網路"
              },
              {
                "en": "adaptation",
                "zh": "適應性"
              },
              {
                "en": "fossilized lineage",
                "zh": "化石演化支"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l11",
        "title": "第 11 關：大語言模型架構與對齊工程",
        "desc": "掌握 foundation model、alignment 等核心詞彙",
        "icon": "🤖",
        "vocabularies": [
          {
            "en": "foundation model",
            "zh": "基底模型"
          },
          {
            "en": "alignment",
            "zh": "價值對齊工程"
          },
          {
            "en": "hallucination",
            "zh": "模型幻覺"
          },
          {
            "en": "generative AI",
            "zh": "生成式AI"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「foundation model」的正確中文意思",
            "en": "foundation model",
            "audioText": "foundation model",
            "instruction": "請問「foundation model」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "hallucination",
                "zh": "模型幻覺",
                "emoji": "🤖",
                "correct": false
              },
              {
                "en": "alignment",
                "zh": "價值對齊工程",
                "emoji": "🧬",
                "correct": false
              },
              {
                "en": "visual cognition",
                "zh": "視覺認知",
                "emoji": "🚀",
                "correct": false
              },
              {
                "en": "foundation model",
                "zh": "基底模型",
                "emoji": "👑",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "AI alignment research ensures that algorithms act in human best interest.",
            "instruction": "請看中文重組成英文句子：「AI對齊研究確保演算法符合人類的最佳利益。」",
            "targetTokens": [
              "AI",
              "alignment",
              "research",
              "ensures",
              "that",
              "algorithms",
              "act",
              "in",
              "human",
              "best",
              "interest."
            ],
            "pool": [
              "AI",
              "human",
              "ensures",
              "alignment",
              "act",
              "algorithms",
              "best",
              "semiconductor",
              "that",
              "proliferation",
              "research",
              "interest.",
              "in"
            ],
            "targetChinese": "AI對齊研究確保演算法符合人類的最佳利益。",
            "targetSentence": "AI alignment research ensures that algorithms act in human best interest."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "alignment",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "alignment (價值對齊工程)",
                "en": "alignment",
                "zh": "價值對齊工程",
                "correct": true
              },
              {
                "text": "ubiquitous (無所不在普及的)",
                "en": "ubiquitous",
                "zh": "無所不在普及的",
                "correct": false
              },
              {
                "text": "foundation model (基底模型)",
                "en": "foundation model",
                "zh": "基底模型",
                "correct": false
              },
              {
                "text": "skeptical (抱持懷疑的)",
                "en": "skeptical",
                "zh": "抱持懷疑的",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "foundation model",
                "zh": "基底模型"
              },
              {
                "en": "alignment",
                "zh": "價值對齊工程"
              },
              {
                "en": "hallucination",
                "zh": "模型幻覺"
              },
              {
                "en": "generative AI",
                "zh": "生成式AI"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l12",
        "title": "第 12 關：全球半導體與地緣經濟學",
        "desc": "掌握 semiconductor、geopolitics 等核心詞彙",
        "icon": "💾",
        "vocabularies": [
          {
            "en": "semiconductor",
            "zh": "半導體晶片"
          },
          {
            "en": "geopolitics",
            "zh": "地緣政治"
          },
          {
            "en": "foundry ecosystem",
            "zh": "晶圓代工生態系"
          },
          {
            "en": "supply chain resiliency",
            "zh": "供應鏈韌性"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「semiconductor」的正確中文意思",
            "en": "semiconductor",
            "audioText": "semiconductor",
            "instruction": "請問「semiconductor」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "semiconductor",
                "zh": "半導體晶片",
                "emoji": "📚",
                "correct": true
              },
              {
                "en": "geopolitics",
                "zh": "地緣政治",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "parenthetical",
                "zh": "插入語",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "foundry ecosystem",
                "zh": "晶圓代工生態系",
                "emoji": "🧠",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Semiconductor manufacturing relies on an intricate global supply chain.",
            "instruction": "請看中文重組成英文句子：「半導體製造仰賴錯綜複雜的全球供應鏈。」",
            "targetTokens": [
              "Semiconductor",
              "manufacturing",
              "relies",
              "on",
              "an",
              "intricate",
              "global",
              "supply",
              "chain."
            ],
            "pool": [
              "aerothermodynamic",
              "global",
              "Semiconductor",
              "relies",
              "intricate",
              "on",
              "an",
              "manufacturing",
              "chain.",
              "supply",
              "alignment"
            ],
            "targetChinese": "半導體製造仰賴錯綜複雜的全球供應鏈。",
            "targetSentence": "Semiconductor manufacturing relies on an intricate global supply chain."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "geopolitics",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "semiconductor (半導體晶片)",
                "en": "semiconductor",
                "zh": "半導體晶片",
                "correct": false
              },
              {
                "text": "substantiate (舉證證實)",
                "en": "substantiate",
                "zh": "舉證證實",
                "correct": false
              },
              {
                "text": "geopolitics (地緣政治)",
                "en": "geopolitics",
                "zh": "地緣政治",
                "correct": true
              },
              {
                "text": "hypersonic (高超音速(5馬赫以上))",
                "en": "hypersonic",
                "zh": "高超音速(5馬赫以上)",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "semiconductor",
                "zh": "半導體晶片"
              },
              {
                "en": "geopolitics",
                "zh": "地緣政治"
              },
              {
                "en": "foundry ecosystem",
                "zh": "晶圓代工生態系"
              },
              {
                "en": "supply chain resiliency",
                "zh": "供應鏈韌性"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l13",
        "title": "第 13 關：國際深度社論新聞英語剖析",
        "desc": "掌握 editorial、journalistic discourse 等核心詞彙",
        "icon": "📰",
        "vocabularies": [
          {
            "en": "editorial",
            "zh": "社論特稿"
          },
          {
            "en": "journalistic discourse",
            "zh": "新聞論述風格"
          },
          {
            "en": "rhetorical framing",
            "zh": "論述框架"
          },
          {
            "en": "unbiased",
            "zh": "客觀公正無偏見的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「editorial」的正確中文意思",
            "en": "editorial",
            "audioText": "editorial",
            "instruction": "請問「editorial」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "skeptical",
                "zh": "抱持懷疑的",
                "emoji": "🚀",
                "correct": false
              },
              {
                "en": "rhetorical framing",
                "zh": "論述框架",
                "emoji": "🤖",
                "correct": false
              },
              {
                "en": "journalistic discourse",
                "zh": "新聞論述風格",
                "emoji": "🧬",
                "correct": false
              },
              {
                "en": "editorial",
                "zh": "社論特稿",
                "emoji": "👑",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Rigorous journalists maintain neutrality and avoid sensational rhetorical framing.",
            "instruction": "請看中文重組成英文句子：「嚴謹的記者保持中立，避免煽情報導的語意框架。」",
            "targetTokens": [
              "Rigorous",
              "journalists",
              "maintain",
              "neutrality",
              "and",
              "avoid",
              "sensational",
              "rhetorical",
              "framing."
            ],
            "pool": [
              "sensational",
              "journalists",
              "avoid",
              "Rigorous",
              "critical",
              "framing.",
              "neutrality",
              "and",
              "maintain",
              "discursive",
              "rhetorical"
            ],
            "targetChinese": "嚴謹的記者保持中立，避免煽情報導的語意框架。",
            "targetSentence": "Rigorous journalists maintain neutrality and avoid sensational rhetorical framing."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "journalistic discourse",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "statistically significant (統計顯著的)",
                "en": "statistically significant",
                "zh": "統計顯著的",
                "correct": false
              },
              {
                "text": "journalistic discourse (新聞論述風格)",
                "en": "journalistic discourse",
                "zh": "新聞論述風格",
                "correct": true
              },
              {
                "text": "underlying presupposition (底層預設立場)",
                "en": "underlying presupposition",
                "zh": "底層預設立場",
                "correct": false
              },
              {
                "text": "editorial (社論特稿)",
                "en": "editorial",
                "zh": "社論特稿",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "editorial",
                "zh": "社論特稿"
              },
              {
                "en": "journalistic discourse",
                "zh": "新聞論述風格"
              },
              {
                "en": "rhetorical framing",
                "zh": "論述框架"
              },
              {
                "en": "unbiased",
                "zh": "客觀公正無偏見的"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l14",
        "title": "第 14 關：學測頂標克漏字篇章大破解",
        "desc": "掌握 discursive context、semantic coherence 等核心詞彙",
        "icon": "🏆",
        "vocabularies": [
          {
            "en": "discursive context",
            "zh": "篇章論辯語境"
          },
          {
            "en": "semantic coherence",
            "zh": "語意連貫性"
          },
          {
            "en": "syntactic precision",
            "zh": "句構精準度"
          },
          {
            "en": "elimination technique",
            "zh": "選項排除法"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「discursive context」的正確中文意思",
            "en": "discursive context",
            "audioText": "discursive context",
            "instruction": "請問「discursive context」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "critical discourse",
                "zh": "批判性思維論述",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "discursive context",
                "zh": "篇章論辯語境",
                "emoji": "📚",
                "correct": true
              },
              {
                "en": "semantic coherence",
                "zh": "語意連貫性",
                "emoji": "🔬",
                "correct": false
              },
              {
                "en": "syntactic precision",
                "zh": "句構精準度",
                "emoji": "🧠",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Analyze semantic coherence before selecting transitional discourse markers.",
            "instruction": "請看中文重組成英文句子：「在選擇轉折連接詞前，先分析語義連貫性。」",
            "targetTokens": [
              "Analyze",
              "semantic",
              "coherence",
              "before",
              "selecting",
              "transitional",
              "discourse",
              "markers."
            ],
            "pool": [
              "Analyze",
              "before",
              "minimax",
              "markers.",
              "semantic",
              "game",
              "selecting",
              "coherence",
              "discourse",
              "transitional"
            ],
            "targetChinese": "在選擇轉折連接詞前，先分析語義連貫性。",
            "targetSentence": "Analyze semantic coherence before selecting transitional discourse markers."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "semantic coherence",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "critical discourse (批判性思維論述)",
                "en": "critical discourse",
                "zh": "批判性思維論述",
                "correct": false
              },
              {
                "text": "empirical finding (實證發現)",
                "en": "empirical finding",
                "zh": "實證發現",
                "correct": false
              },
              {
                "text": "discursive context (篇章論辯語境)",
                "en": "discursive context",
                "zh": "篇章論辯語境",
                "correct": false
              },
              {
                "text": "semantic coherence (語意連貫性)",
                "en": "semantic coherence",
                "zh": "語意連貫性",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "discursive context",
                "zh": "篇章論辯語境"
              },
              {
                "en": "semantic coherence",
                "zh": "語意連貫性"
              },
              {
                "en": "syntactic precision",
                "zh": "句構精準度"
              },
              {
                "en": "elimination technique",
                "zh": "選項排除法"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l15",
        "title": "第 15 關：分科測驗等級批判思辨題",
        "desc": "掌握 critical discourse、underlying presupposition 等核心詞彙",
        "icon": "⚖️",
        "vocabularies": [
          {
            "en": "critical discourse",
            "zh": "批判性思維論述"
          },
          {
            "en": "underlying presupposition",
            "zh": "底層預設立場"
          },
          {
            "en": "fallacy",
            "zh": "邏輯謬誤"
          },
          {
            "en": "substantiate",
            "zh": "舉證證實"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「critical discourse」的正確中文意思",
            "en": "critical discourse",
            "audioText": "critical discourse",
            "instruction": "請問「critical discourse」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "critical discourse",
                "zh": "批判性思維論述",
                "emoji": "👑",
                "correct": true
              },
              {
                "en": "fossilized lineage",
                "zh": "化石演化支",
                "emoji": "🚀",
                "correct": false
              },
              {
                "en": "fallacy",
                "zh": "邏輯謬誤",
                "emoji": "🤖",
                "correct": false
              },
              {
                "en": "underlying presupposition",
                "zh": "底層預設立場",
                "emoji": "🧬",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Critical thinkers evaluate underlying premises before accepting controversial conclusions.",
            "instruction": "請看中文重組成英文句子：「批判性思考者在接受具爭議的結論前會先評估潛在前提。」",
            "targetTokens": [
              "Critical",
              "thinkers",
              "evaluate",
              "underlying",
              "premises",
              "before",
              "accepting",
              "controversial",
              "conclusions."
            ],
            "pool": [
              "premises",
              "evaluate",
              "orbital",
              "Critical",
              "before",
              "accepting",
              "controversial",
              "conclusions.",
              "ubiquitous",
              "thinkers",
              "underlying"
            ],
            "targetChinese": "批判性思考者在接受具爭議的結論前會先評估潛在前提。",
            "targetSentence": "Critical thinkers evaluate underlying premises before accepting controversial conclusions."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "underlying presupposition",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "statistically significant (統計顯著的)",
                "en": "statistically significant",
                "zh": "統計顯著的",
                "correct": false
              },
              {
                "text": "underlying presupposition (底層預設立場)",
                "en": "underlying presupposition",
                "zh": "底層預設立場",
                "correct": true
              },
              {
                "text": "critical discourse (批判性思維論述)",
                "en": "critical discourse",
                "zh": "批判性思維論述",
                "correct": false
              },
              {
                "text": "elimination technique (選項排除法)",
                "en": "elimination technique",
                "zh": "選項排除法",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "critical discourse",
                "zh": "批判性思維論述"
              },
              {
                "en": "underlying presupposition",
                "zh": "底層預設立場"
              },
              {
                "en": "fallacy",
                "zh": "邏輯謬誤"
              },
              {
                "en": "substantiate",
                "zh": "舉證證實"
              }
            ]
          }
        ]
      },
      {
        "id": "sh_adv-l16",
        "title": "第 16 關：高中畢業學測滿級分大魔王",
        "desc": "掌握 unprecedented、neuroscience 等核心詞彙",
        "icon": "🎓",
        "vocabularies": [
          {
            "en": "unprecedented",
            "zh": "空前的"
          },
          {
            "en": "neuroscience",
            "zh": "神經科學"
          },
          {
            "en": "semiconductor",
            "zh": "半導體"
          },
          {
            "en": "game theory",
            "zh": "賽局理論"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「unprecedented」的正確中文意思",
            "en": "unprecedented",
            "audioText": "unprecedented",
            "instruction": "請問「unprecedented」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "unprecedented",
                "zh": "空前的",
                "emoji": "📚",
                "correct": true
              },
              {
                "en": "subordination",
                "zh": "從屬子句",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "semiconductor",
                "zh": "半導體",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "neuroscience",
                "zh": "神經科學",
                "emoji": "🔬",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Unprecedented innovation requires profound discipline and visionary thinking.",
            "instruction": "請看中文重組成英文句子：「前所未有的創新需要深刻的自律與遠見思維。」",
            "targetTokens": [
              "Unprecedented",
              "innovation",
              "requires",
              "profound",
              "discipline",
              "and",
              "visionary",
              "thinking."
            ],
            "pool": [
              "context",
              "discipline",
              "requires",
              "morphology",
              "Unprecedented",
              "visionary",
              "thinking.",
              "innovation",
              "profound",
              "and"
            ],
            "targetChinese": "前所未有的創新需要深刻的自律與遠見思維。",
            "targetSentence": "Unprecedented innovation requires profound discipline and visionary thinking."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "neuroscience",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "substantiate (舉證證實)",
                "en": "substantiate",
                "zh": "舉證證實",
                "correct": false
              },
              {
                "text": "neuroscience (神經科學)",
                "en": "neuroscience",
                "zh": "神經科學",
                "correct": true
              },
              {
                "text": "acceleration (加速提升)",
                "en": "acceleration",
                "zh": "加速提升",
                "correct": false
              },
              {
                "text": "unprecedented (空前的)",
                "en": "unprecedented",
                "zh": "空前的",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "unprecedented",
                "zh": "空前的"
              },
              {
                "en": "neuroscience",
                "zh": "神經科學"
              },
              {
                "en": "semiconductor",
                "zh": "半導體"
              },
              {
                "en": "game theory",
                "zh": "賽局理論"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "col_beg",
    "category": "college",
    "categoryName": "大學與成人",
    "categoryIcon": "🎓",
    "subLevel": "beg",
    "subLevelName": "大學・初級 (多益650+)",
    "badge": "💼 職場實戰",
    "desc": "商務電子郵件、會議協商、差旅出差、財務人資與行銷模型",
    "cefr": "B2",
    "themeColor": "#14b8a6",
    "colorClass": "u-hero",
    "lessons": [
      {
        "id": "col_beg-l1",
        "title": "第 1 關：專業商務書信與開場禮儀",
        "desc": "掌握 regarding your inquiry、at your earliest convenience 等核心詞彙",
        "icon": "✉️",
        "vocabularies": [
          {
            "en": "regarding your inquiry",
            "zh": "關於您的洽詢"
          },
          {
            "en": "at your earliest convenience",
            "zh": "在您方便時盡快"
          },
          {
            "en": "sincerely",
            "zh": "誠摯地"
          },
          {
            "en": "correspondence",
            "zh": "書信來往"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「regarding your inquiry」的正確中文意思",
            "en": "regarding your inquiry",
            "audioText": "regarding your inquiry",
            "instruction": "請問「regarding your inquiry」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "regarding your inquiry",
                "zh": "關於您的洽詢",
                "emoji": "💼",
                "correct": true
              },
              {
                "en": "at your earliest convenience",
                "zh": "在您方便時盡快",
                "emoji": "✉️",
                "correct": false
              },
              {
                "en": "confirm availability",
                "zh": "確認是否有空檔",
                "emoji": "🤝",
                "correct": false
              },
              {
                "en": "apologize for inconvenience",
                "zh": "為不便致歉",
                "emoji": "📊",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Please reply at your earliest convenience regarding our proposal.",
            "instruction": "請看中文重組成英文句子：「關於本合作提案，請在您方便時盡早回覆。」",
            "targetTokens": [
              "Please",
              "reply",
              "at",
              "your",
              "earliest",
              "convenience",
              "regarding",
              "our",
              "proposal."
            ],
            "pool": [
              "your",
              "our",
              "proposal.",
              "inconvenience",
              "convenience",
              "reply",
              "earliest",
              "regarding",
              "agenda",
              "Please",
              "at"
            ],
            "targetChinese": "關於本合作提案，請在您方便時盡早回覆。",
            "targetSentence": "Please reply at your earliest convenience regarding our proposal."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "at your earliest convenience",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "complaint resolution (客訴處理解決)",
                "en": "complaint resolution",
                "zh": "客訴處理解決",
                "correct": false
              },
              {
                "text": "apologize for inconvenience (為不便致歉)",
                "en": "apologize for inconvenience",
                "zh": "為不便致歉",
                "correct": false
              },
              {
                "text": "regarding your inquiry (關於您的洽詢)",
                "en": "regarding your inquiry",
                "zh": "關於您的洽詢",
                "correct": false
              },
              {
                "text": "at your earliest convenience (在您方便時盡快)",
                "en": "at your earliest convenience",
                "zh": "在您方便時盡快",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "regarding your inquiry",
                "zh": "關於您的洽詢"
              },
              {
                "en": "at your earliest convenience",
                "zh": "在您方便時盡快"
              },
              {
                "en": "sincerely",
                "zh": "誠摯地"
              },
              {
                "en": "correspondence",
                "zh": "書信來往"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l2",
        "title": "第 2 關：跨國會議時程安排與確認",
        "desc": "掌握 reschedule、time zone 等核心詞彙",
        "icon": "🗓️",
        "vocabularies": [
          {
            "en": "reschedule",
            "zh": "重新排程"
          },
          {
            "en": "time zone",
            "zh": "時區"
          },
          {
            "en": "agenda",
            "zh": "會議議程"
          },
          {
            "en": "confirm availability",
            "zh": "確認是否有空檔"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「reschedule」的正確中文意思",
            "en": "reschedule",
            "audioText": "reschedule",
            "instruction": "請問「reschedule」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "time zone",
                "zh": "時區",
                "emoji": "🏢",
                "correct": false
              },
              {
                "en": "agenda",
                "zh": "會議議程",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "paraphrase",
                "zh": "換句話說",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "reschedule",
                "zh": "重新排程",
                "emoji": "📈",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Please confirm your availability for tomorrow conference call.",
            "instruction": "請看中文重組成英文句子：「請確認您明天是否有空參加電話會議。」",
            "targetTokens": [
              "Please",
              "confirm",
              "your",
              "availability",
              "for",
              "tomorrow",
              "conference",
              "call."
            ],
            "pool": [
              "your",
              "availability",
              "penetration",
              "tomorrow",
              "benefits",
              "conference",
              "Please",
              "confirm",
              "for",
              "call."
            ],
            "targetChinese": "請確認您明天是否有空參加電話會議。",
            "targetSentence": "Please confirm your availability for tomorrow conference call."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "time zone",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "pitch deck (募資簡報)",
                "en": "pitch deck",
                "zh": "募資簡報",
                "correct": false
              },
              {
                "text": "fuel hedging (航空燃油避險)",
                "en": "fuel hedging",
                "zh": "航空燃油避險",
                "correct": false
              },
              {
                "text": "reschedule (重新排程)",
                "en": "reschedule",
                "zh": "重新排程",
                "correct": false
              },
              {
                "text": "time zone (時區)",
                "en": "time zone",
                "zh": "時區",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "reschedule",
                "zh": "重新排程"
              },
              {
                "en": "time zone",
                "zh": "時區"
              },
              {
                "en": "agenda",
                "zh": "會議議程"
              },
              {
                "en": "confirm availability",
                "zh": "確認是否有空檔"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l3",
        "title": "第 3 關：商業產品發表與價值主張",
        "desc": "掌握 value proposition、competitive edge 等核心詞彙",
        "icon": "🚀",
        "vocabularies": [
          {
            "en": "value proposition",
            "zh": "價值主張"
          },
          {
            "en": "competitive edge",
            "zh": "競爭優勢"
          },
          {
            "en": "market penetration",
            "zh": "市場滲透率"
          },
          {
            "en": "feature",
            "zh": "功能特色"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「value proposition」的正確中文意思",
            "en": "value proposition",
            "audioText": "value proposition",
            "instruction": "請問「value proposition」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "market penetration",
                "zh": "市場滲透率",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "value proposition",
                "zh": "價值主張",
                "emoji": "💼",
                "correct": true
              },
              {
                "en": "contractual terms",
                "zh": "合約條款",
                "emoji": "🤝",
                "correct": false
              },
              {
                "en": "competitive edge",
                "zh": "競爭優勢",
                "emoji": "✉️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Our software delivers an unmatched competitive edge to clients.",
            "instruction": "請看中文重組成英文句子：「我們的軟體為客戶提供無可比擬的競爭優勢。」",
            "targetTokens": [
              "Our",
              "software",
              "delivers",
              "an",
              "unmatched",
              "competitive",
              "edge",
              "to",
              "clients."
            ],
            "pool": [
              "edge",
              "quarterly",
              "to",
              "unmatched",
              "software",
              "recreational",
              "delivers",
              "an",
              "clients.",
              "Our",
              "competitive"
            ],
            "targetChinese": "我們的軟體為客戶提供無可比擬的競爭優勢。",
            "targetSentence": "Our software delivers an unmatched competitive edge to clients."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "competitive edge",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "value proposition (價值主張)",
                "en": "value proposition",
                "zh": "價值主張",
                "correct": false
              },
              {
                "text": "sprint milestone (衝刺週期里程碑)",
                "en": "sprint milestone",
                "zh": "衝刺週期里程碑",
                "correct": false
              },
              {
                "text": "fleet management (機隊營運管理)",
                "en": "fleet management",
                "zh": "機隊營運管理",
                "correct": false
              },
              {
                "text": "competitive edge (競爭優勢)",
                "en": "competitive edge",
                "zh": "競爭優勢",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "value proposition",
                "zh": "價值主張"
              },
              {
                "en": "competitive edge",
                "zh": "競爭優勢"
              },
              {
                "en": "market penetration",
                "zh": "市場滲透率"
              },
              {
                "en": "feature",
                "zh": "功能特色"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l4",
        "title": "第 4 關：客戶關係管理與危機客訴",
        "desc": "掌握 complaint resolution、customer satisfaction 等核心詞彙",
        "icon": "🤝",
        "vocabularies": [
          {
            "en": "complaint resolution",
            "zh": "客訴處理解決"
          },
          {
            "en": "customer satisfaction",
            "zh": "顧客滿意度"
          },
          {
            "en": "apologize for inconvenience",
            "zh": "為不便致歉"
          },
          {
            "en": "follow-up",
            "zh": "後續追蹤"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「complaint resolution」的正確中文意思",
            "en": "complaint resolution",
            "audioText": "complaint resolution",
            "instruction": "請問「complaint resolution」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "broadcasting rights",
                "zh": "轉播權益",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "complaint resolution",
                "zh": "客訴處理解決",
                "emoji": "📈",
                "correct": true
              },
              {
                "en": "apologize for inconvenience",
                "zh": "為不便致歉",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "customer satisfaction",
                "zh": "顧客滿意度",
                "emoji": "🏢",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Prompt complaint resolution directly enhances customer brand loyalty.",
            "instruction": "請看中文重組成英文句子：「迅速處理客訴能直接提升顧客對品牌的忠誠度。」",
            "targetTokens": [
              "Prompt",
              "complaint",
              "resolution",
              "directly",
              "enhances",
              "customer",
              "brand",
              "loyalty."
            ],
            "pool": [
              "brand",
              "loyalty.",
              "customer",
              "complaint",
              "agile",
              "period",
              "resolution",
              "directly",
              "enhances",
              "Prompt"
            ],
            "targetChinese": "迅速處理客訴能直接提升顧客對品牌的忠誠度。",
            "targetSentence": "Prompt complaint resolution directly enhances customer brand loyalty."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "customer satisfaction",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "franchise valuation (球隊特許估值)",
                "en": "franchise valuation",
                "zh": "球隊特許估值",
                "correct": false
              },
              {
                "text": "inference question (推論判斷題)",
                "en": "inference question",
                "zh": "推論判斷題",
                "correct": false
              },
              {
                "text": "customer satisfaction (顧客滿意度)",
                "en": "customer satisfaction",
                "zh": "顧客滿意度",
                "correct": true
              },
              {
                "text": "complaint resolution (客訴處理解決)",
                "en": "complaint resolution",
                "zh": "客訴處理解決",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "complaint resolution",
                "zh": "客訴處理解決"
              },
              {
                "en": "customer satisfaction",
                "zh": "顧客滿意度"
              },
              {
                "en": "apologize for inconvenience",
                "zh": "為不便致歉"
              },
              {
                "en": "follow-up",
                "zh": "後續追蹤"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l5",
        "title": "第 5 關：國際差旅與機場出境手續",
        "desc": "掌握 itinerary、boarding pass 等核心詞彙",
        "icon": "🛫",
        "vocabularies": [
          {
            "en": "itinerary",
            "zh": "行程表"
          },
          {
            "en": "boarding pass",
            "zh": "登機證"
          },
          {
            "en": "customs clearance",
            "zh": "通關手續"
          },
          {
            "en": "reimbursement",
            "zh": "差旅報帳核銷"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「itinerary」的正確中文意思",
            "en": "itinerary",
            "audioText": "itinerary",
            "instruction": "請問「itinerary」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "customs clearance",
                "zh": "通關手續",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "itinerary",
                "zh": "行程表",
                "emoji": "💼",
                "correct": true
              },
              {
                "en": "etiquette",
                "zh": "國際社交禮儀",
                "emoji": "🤝",
                "correct": false
              },
              {
                "en": "boarding pass",
                "zh": "登機證",
                "emoji": "✉️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Keep all travel receipts for business expense reimbursement.",
            "instruction": "請看中文重組成英文句子：「請保留所有出差單據以便申請公務費用報銷。」",
            "targetTokens": [
              "Keep",
              "all",
              "travel",
              "receipts",
              "for",
              "business",
              "expense",
              "reimbursement."
            ],
            "pool": [
              "for",
              "reimbursement.",
              "receipts",
              "business",
              "expense",
              "travel",
              "all",
              "Keep",
              "prize",
              "confirm"
            ],
            "targetChinese": "請保留所有出差單據以便申請公務費用報銷。",
            "targetSentence": "Keep all travel receipts for business expense reimbursement."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "boarding pass",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "boarding pass (登機證)",
                "en": "boarding pass",
                "zh": "登機證",
                "correct": true
              },
              {
                "text": "itinerary (行程表)",
                "en": "itinerary",
                "zh": "行程表",
                "correct": false
              },
              {
                "text": "fuel hedging (航空燃油避險)",
                "en": "fuel hedging",
                "zh": "航空燃油避險",
                "correct": false
              },
              {
                "text": "speaker intent (說話者弦外意圖)",
                "en": "speaker intent",
                "zh": "說話者弦外意圖",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "itinerary",
                "zh": "行程表"
              },
              {
                "en": "boarding pass",
                "zh": "登機證"
              },
              {
                "en": "customs clearance",
                "zh": "通關手續"
              },
              {
                "en": "reimbursement",
                "zh": "差旅報帳核銷"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l6",
        "title": "第 6 關：多益核心：財務與預算報表",
        "desc": "掌握 revenue、expenditure 等核心詞彙",
        "icon": "📈",
        "vocabularies": [
          {
            "en": "revenue",
            "zh": "營業額收入"
          },
          {
            "en": "expenditure",
            "zh": "支出花費"
          },
          {
            "en": "fiscal year",
            "zh": "財政年度"
          },
          {
            "en": "quarterly forecast",
            "zh": "季度預測"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「revenue」的正確中文意思",
            "en": "revenue",
            "audioText": "revenue",
            "instruction": "請問「revenue」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "expenditure",
                "zh": "支出花費",
                "emoji": "🏢",
                "correct": false
              },
              {
                "en": "revenue",
                "zh": "營業額收入",
                "emoji": "📈",
                "correct": true
              },
              {
                "en": "fiscal year",
                "zh": "財政年度",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "feature",
                "zh": "功能特色",
                "emoji": "💡",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Quarterly revenue exceeded our original financial projections.",
            "instruction": "請看中文重組成英文句子：「季度營收超出了我們最初的財務預測。」",
            "targetTokens": [
              "Quarterly",
              "revenue",
              "exceeded",
              "our",
              "original",
              "financial",
              "projections."
            ],
            "pool": [
              "financial",
              "exceeded",
              "projections.",
              "revenue",
              "our",
              "complaint",
              "deliverable",
              "original",
              "Quarterly"
            ],
            "targetChinese": "季度營收超出了我們最初的財務預測。",
            "targetSentence": "Quarterly revenue exceeded our original financial projections."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "expenditure",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "maintenance (航機維修保養)",
                "en": "maintenance",
                "zh": "航機維修保養",
                "correct": false
              },
              {
                "text": "expenditure (支出花費)",
                "en": "expenditure",
                "zh": "支出花費",
                "correct": true
              },
              {
                "text": "hospitality (餐旅招待服務)",
                "en": "hospitality",
                "zh": "餐旅招待服務",
                "correct": false
              },
              {
                "text": "revenue (營業額收入)",
                "en": "revenue",
                "zh": "營業額收入",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "revenue",
                "zh": "營業額收入"
              },
              {
                "en": "expenditure",
                "zh": "支出花費"
              },
              {
                "en": "fiscal year",
                "zh": "財政年度"
              },
              {
                "en": "quarterly forecast",
                "zh": "季度預測"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l7",
        "title": "第 7 關：多益核心：人力資源與招募",
        "desc": "掌握 recruitment、resume 等核心詞彙",
        "icon": "👔",
        "vocabularies": [
          {
            "en": "recruitment",
            "zh": "人才招募"
          },
          {
            "en": "resume",
            "zh": "履歷表"
          },
          {
            "en": "benefits package",
            "zh": "福利配套"
          },
          {
            "en": "compensation",
            "zh": "薪資待遇"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「recruitment」的正確中文意思",
            "en": "recruitment",
            "audioText": "recruitment",
            "instruction": "請問「recruitment」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "benefits package",
                "zh": "福利配套",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "resume",
                "zh": "履歷表",
                "emoji": "✉️",
                "correct": false
              },
              {
                "en": "recruitment",
                "zh": "人才招募",
                "emoji": "💼",
                "correct": true
              },
              {
                "en": "maintenance",
                "zh": "航機維修保養",
                "emoji": "🤝",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The human resources team launched an international recruitment campaign.",
            "instruction": "請看中文重組成英文句子：「人力資源團隊展開了一項國際招募計畫。」",
            "targetTokens": [
              "The",
              "human",
              "resources",
              "team",
              "launched",
              "an",
              "international",
              "recruitment",
              "campaign."
            ],
            "pool": [
              "launched",
              "campaign.",
              "international",
              "team",
              "human",
              "an",
              "reimbursement",
              "resources",
              "customs",
              "recruitment",
              "The"
            ],
            "targetChinese": "人力資源團隊展開了一項國際招募計畫。",
            "targetSentence": "The human resources team launched an international recruitment campaign."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "resume",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "agenda (會議議程)",
                "en": "agenda",
                "zh": "會議議程",
                "correct": false
              },
              {
                "text": "recruitment (人才招募)",
                "en": "recruitment",
                "zh": "人才招募",
                "correct": false
              },
              {
                "text": "vendor (供應商)",
                "en": "vendor",
                "zh": "供應商",
                "correct": false
              },
              {
                "text": "resume (履歷表)",
                "en": "resume",
                "zh": "履歷表",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "recruitment",
                "zh": "人才招募"
              },
              {
                "en": "resume",
                "zh": "履歷表"
              },
              {
                "en": "benefits package",
                "zh": "福利配套"
              },
              {
                "en": "compensation",
                "zh": "薪資待遇"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l8",
        "title": "第 8 關：多益核心：供應鏈採購與合約",
        "desc": "掌握 procurement、contractual terms 等核心詞彙",
        "icon": "📦",
        "vocabularies": [
          {
            "en": "procurement",
            "zh": "採購"
          },
          {
            "en": "contractual terms",
            "zh": "合約條款"
          },
          {
            "en": "vendor",
            "zh": "供應商"
          },
          {
            "en": "warranty period",
            "zh": "保固期"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「procurement」的正確中文意思",
            "en": "procurement",
            "audioText": "procurement",
            "instruction": "請問「procurement」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "procurement",
                "zh": "採購",
                "emoji": "📈",
                "correct": true
              },
              {
                "en": "vendor",
                "zh": "供應商",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "contractual terms",
                "zh": "合約條款",
                "emoji": "🏢",
                "correct": false
              },
              {
                "en": "deliverable",
                "zh": "專案產出交付成果",
                "emoji": "💡",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Review the contractual terms before signing with the vendor.",
            "instruction": "請看中文重組成英文句子：「在與供應商簽約前，請審閱合約條款。」",
            "targetTokens": [
              "Review",
              "the",
              "contractual",
              "terms",
              "before",
              "signing",
              "with",
              "the",
              "vendor."
            ],
            "pool": [
              "contractual",
              "rapport",
              "the",
              "signing",
              "customs",
              "with",
              "before",
              "the",
              "terms",
              "Review",
              "vendor."
            ],
            "targetChinese": "在與供應商簽約前，請審閱合約條款。",
            "targetSentence": "Review the contractual terms before signing with the vendor."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "contractual terms",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "quarterly forecast (季度預測)",
                "en": "quarterly forecast",
                "zh": "季度預測",
                "correct": false
              },
              {
                "text": "value proposition (價值主張)",
                "en": "value proposition",
                "zh": "價值主張",
                "correct": false
              },
              {
                "text": "procurement (採購)",
                "en": "procurement",
                "zh": "採購",
                "correct": false
              },
              {
                "text": "contractual terms (合約條款)",
                "en": "contractual terms",
                "zh": "合約條款",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "procurement",
                "zh": "採購"
              },
              {
                "en": "contractual terms",
                "zh": "合約條款"
              },
              {
                "en": "vendor",
                "zh": "供應商"
              },
              {
                "en": "warranty period",
                "zh": "保固期"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l9",
        "title": "第 9 關：職業體育特許經營商業模型",
        "desc": "掌握 franchise valuation、broadcasting rights 等核心詞彙",
        "icon": "⚾",
        "vocabularies": [
          {
            "en": "franchise valuation",
            "zh": "球隊特許估值"
          },
          {
            "en": "broadcasting rights",
            "zh": "轉播權益"
          },
          {
            "en": "merchandising",
            "zh": "周邊商品銷售"
          },
          {
            "en": "sponsorship",
            "zh": "企業贊助"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「franchise valuation」的正確中文意思",
            "en": "franchise valuation",
            "audioText": "franchise valuation",
            "instruction": "請問「franchise valuation」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "merchandising",
                "zh": "周邊商品銷售",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "broadcasting rights",
                "zh": "轉播權益",
                "emoji": "✉️",
                "correct": false
              },
              {
                "en": "franchise valuation",
                "zh": "球隊特許估值",
                "emoji": "💼",
                "correct": true
              },
              {
                "en": "complaint resolution",
                "zh": "客訴處理解決",
                "emoji": "🤝",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Broadcasting rights represent substantial revenue for Major League Baseball.",
            "instruction": "請看中文重組成英文句子：「轉播權是美國職棒大聯盟重要的收入來源。」",
            "targetTokens": [
              "Broadcasting",
              "rights",
              "represent",
              "substantial",
              "revenue",
              "for",
              "Major",
              "League",
              "Baseball."
            ],
            "pool": [
              "Baseball.",
              "represent",
              "rights",
              "factor",
              "agile",
              "substantial",
              "Major",
              "Broadcasting",
              "League",
              "revenue",
              "for"
            ],
            "targetChinese": "轉播權是美國職棒大聯盟重要的收入來源。",
            "targetSentence": "Broadcasting rights represent substantial revenue for Major League Baseball."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "broadcasting rights",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "broadcasting rights (轉播權益)",
                "en": "broadcasting rights",
                "zh": "轉播權益",
                "correct": true
              },
              {
                "text": "quarterly forecast (季度預測)",
                "en": "quarterly forecast",
                "zh": "季度預測",
                "correct": false
              },
              {
                "text": "franchise valuation (球隊特許估值)",
                "en": "franchise valuation",
                "zh": "球隊特許估值",
                "correct": false
              },
              {
                "text": "market penetration (市場滲透率)",
                "en": "market penetration",
                "zh": "市場滲透率",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "franchise valuation",
                "zh": "球隊特許估值"
              },
              {
                "en": "broadcasting rights",
                "zh": "轉播權益"
              },
              {
                "en": "merchandising",
                "zh": "周邊商品銷售"
              },
              {
                "en": "sponsorship",
                "zh": "企業贊助"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l10",
        "title": "第 10 關：民用航空機隊營運與航線管理",
        "desc": "掌握 fleet management、load factor 等核心詞彙",
        "icon": "✈️",
        "vocabularies": [
          {
            "en": "fleet management",
            "zh": "機隊營運管理"
          },
          {
            "en": "load factor",
            "zh": "載客率"
          },
          {
            "en": "fuel hedging",
            "zh": "航空燃油避險"
          },
          {
            "en": "maintenance",
            "zh": "航機維修保養"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「fleet management」的正確中文意思",
            "en": "fleet management",
            "audioText": "fleet management",
            "instruction": "請問「fleet management」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "fuel hedging",
                "zh": "航空燃油避險",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "load factor",
                "zh": "載客率",
                "emoji": "🏢",
                "correct": false
              },
              {
                "en": "agile methodology",
                "zh": "敏捷開發方法論",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "fleet management",
                "zh": "機隊營運管理",
                "emoji": "📈",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Optimizing flight routes significantly increases airline operating margins.",
            "instruction": "請看中文重組成英文句子：「優化飛行航線顯著提高了航空公司的營運利潤。」",
            "targetTokens": [
              "Optimizing",
              "flight",
              "routes",
              "significantly",
              "increases",
              "airline",
              "operating",
              "margins."
            ],
            "pool": [
              "Optimizing",
              "flight",
              "increases",
              "significantly",
              "earliest",
              "complaint",
              "margins.",
              "airline",
              "routes",
              "operating"
            ],
            "targetChinese": "優化飛行航線顯著提高了航空公司的營運利潤。",
            "targetSentence": "Optimizing flight routes significantly increases airline operating margins."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "load factor",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "pitch deck (募資簡報)",
                "en": "pitch deck",
                "zh": "募資簡報",
                "correct": false
              },
              {
                "text": "load factor (載客率)",
                "en": "load factor",
                "zh": "載客率",
                "correct": true
              },
              {
                "text": "fleet management (機隊營運管理)",
                "en": "fleet management",
                "zh": "機隊營運管理",
                "correct": false
              },
              {
                "text": "fiscal year (財政年度)",
                "en": "fiscal year",
                "zh": "財政年度",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "fleet management",
                "zh": "機隊營運管理"
              },
              {
                "en": "load factor",
                "zh": "載客率"
              },
              {
                "en": "fuel hedging",
                "zh": "航空燃油避險"
              },
              {
                "en": "maintenance",
                "zh": "航機維修保養"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l11",
        "title": "第 11 關：撞球與休閒運動娛樂產業經濟",
        "desc": "掌握 recreational arena、tournament prize 等核心詞彙",
        "icon": "🎱",
        "vocabularies": [
          {
            "en": "recreational arena",
            "zh": "休閒運動場館"
          },
          {
            "en": "tournament prize",
            "zh": "錦標賽總獎金"
          },
          {
            "en": "hospitality",
            "zh": "餐旅招待服務"
          },
          {
            "en": "patronage",
            "zh": "顧客光顧支持"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「recreational arena」的正確中文意思",
            "en": "recreational arena",
            "audioText": "recreational arena",
            "instruction": "請問「recreational arena」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "tournament prize",
                "zh": "錦標賽總獎金",
                "emoji": "✉️",
                "correct": false
              },
              {
                "en": "quarterly forecast",
                "zh": "季度預測",
                "emoji": "🤝",
                "correct": false
              },
              {
                "en": "hospitality",
                "zh": "餐旅招待服務",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "recreational arena",
                "zh": "休閒運動場館",
                "emoji": "💼",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Competitive cue sports tournaments attract substantial global sponsorship.",
            "instruction": "請看中文重組成英文句子：「職業撞球錦標賽吸引了大量全球贊助商。」",
            "targetTokens": [
              "Competitive",
              "cue",
              "sports",
              "tournaments",
              "attract",
              "substantial",
              "global",
              "sponsorship."
            ],
            "pool": [
              "sponsorship.",
              "merchandising",
              "substantial",
              "Competitive",
              "sports",
              "attract",
              "itinerary",
              "global",
              "cue",
              "tournaments"
            ],
            "targetChinese": "職業撞球錦標賽吸引了大量全球贊助商。",
            "targetSentence": "Competitive cue sports tournaments attract substantial global sponsorship."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "tournament prize",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "fleet management (機隊營運管理)",
                "en": "fleet management",
                "zh": "機隊營運管理",
                "correct": false
              },
              {
                "text": "recreational arena (休閒運動場館)",
                "en": "recreational arena",
                "zh": "休閒運動場館",
                "correct": false
              },
              {
                "text": "tournament prize (錦標賽總獎金)",
                "en": "tournament prize",
                "zh": "錦標賽總獎金",
                "correct": true
              },
              {
                "text": "sprint milestone (衝刺週期里程碑)",
                "en": "sprint milestone",
                "zh": "衝刺週期里程碑",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "recreational arena",
                "zh": "休閒運動場館"
              },
              {
                "en": "tournament prize",
                "zh": "錦標賽總獎金"
              },
              {
                "en": "hospitality",
                "zh": "餐旅招待服務"
              },
              {
                "en": "patronage",
                "zh": "顧客光顧支持"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l12",
        "title": "第 12 關：科技新創募資路演簡報 (Pitch)",
        "desc": "掌握 pitch deck、seed funding 等核心詞彙",
        "icon": "💡",
        "vocabularies": [
          {
            "en": "pitch deck",
            "zh": "募資簡報"
          },
          {
            "en": "seed funding",
            "zh": "種子輪融資"
          },
          {
            "en": "venture capital",
            "zh": "創投風險資本"
          },
          {
            "en": "valuation",
            "zh": "估值"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「pitch deck」的正確中文意思",
            "en": "pitch deck",
            "audioText": "pitch deck",
            "instruction": "請問「pitch deck」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "time zone",
                "zh": "時區",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "pitch deck",
                "zh": "募資簡報",
                "emoji": "📈",
                "correct": true
              },
              {
                "en": "venture capital",
                "zh": "創投風險資本",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "seed funding",
                "zh": "種子輪融資",
                "emoji": "🏢",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The startup secured seed funding from prominent venture capitalists.",
            "instruction": "請看中文重組成英文句子：「這家新創公司從知名創投家手中獲得了種子輪融資。」",
            "targetTokens": [
              "The",
              "startup",
              "secured",
              "seed",
              "funding",
              "from",
              "prominent",
              "venture",
              "capitalists."
            ],
            "pool": [
              "funding",
              "startup",
              "venture",
              "prominent",
              "seed",
              "resume",
              "capitalists.",
              "pass",
              "The",
              "secured",
              "from"
            ],
            "targetChinese": "這家新創公司從知名創投家手中獲得了種子輪融資。",
            "targetSentence": "The startup secured seed funding from prominent venture capitalists."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "seed funding",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "boarding pass (登機證)",
                "en": "boarding pass",
                "zh": "登機證",
                "correct": false
              },
              {
                "text": "pitch deck (募資簡報)",
                "en": "pitch deck",
                "zh": "募資簡報",
                "correct": false
              },
              {
                "text": "fuel hedging (航空燃油避險)",
                "en": "fuel hedging",
                "zh": "航空燃油避險",
                "correct": false
              },
              {
                "text": "seed funding (種子輪融資)",
                "en": "seed funding",
                "zh": "種子輪融資",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "pitch deck",
                "zh": "募資簡報"
              },
              {
                "en": "seed funding",
                "zh": "種子輪融資"
              },
              {
                "en": "venture capital",
                "zh": "創投風險資本"
              },
              {
                "en": "valuation",
                "zh": "估值"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l13",
        "title": "第 13 關：敏捷專案管理與跨部門協同",
        "desc": "掌握 agile methodology、sprint milestone 等核心詞彙",
        "icon": "🏃‍♀️",
        "vocabularies": [
          {
            "en": "agile methodology",
            "zh": "敏捷開發方法論"
          },
          {
            "en": "sprint milestone",
            "zh": "衝刺週期里程碑"
          },
          {
            "en": "cross-functional",
            "zh": "跨部門的"
          },
          {
            "en": "deliverable",
            "zh": "專案產出交付成果"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「agile methodology」的正確中文意思",
            "en": "agile methodology",
            "audioText": "agile methodology",
            "instruction": "請問「agile methodology」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "agile methodology",
                "zh": "敏捷開發方法論",
                "emoji": "💼",
                "correct": true
              },
              {
                "en": "sprint milestone",
                "zh": "衝刺週期里程碑",
                "emoji": "✉️",
                "correct": false
              },
              {
                "en": "cross-functional",
                "zh": "跨部門的",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "contractual terms",
                "zh": "合約條款",
                "emoji": "🤝",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Cross-functional collaboration accelerates software feature deliverables.",
            "instruction": "請看中文重組成英文句子：「跨部門協作加速了軟體新功能的交付。」",
            "targetTokens": [
              "Cross-functional",
              "collaboration",
              "accelerates",
              "software",
              "feature",
              "deliverables."
            ],
            "pool": [
              "feature",
              "accelerates",
              "hedging",
              "broadcasting",
              "software",
              "collaboration",
              "Cross-functional",
              "deliverables."
            ],
            "targetChinese": "跨部門協作加速了軟體新功能的交付。",
            "targetSentence": "Cross-functional collaboration accelerates software feature deliverables."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "sprint milestone",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "sprint milestone (衝刺週期里程碑)",
                "en": "sprint milestone",
                "zh": "衝刺週期里程碑",
                "correct": true
              },
              {
                "text": "tournament prize (錦標賽總獎金)",
                "en": "tournament prize",
                "zh": "錦標賽總獎金",
                "correct": false
              },
              {
                "text": "benefits package (福利配套)",
                "en": "benefits package",
                "zh": "福利配套",
                "correct": false
              },
              {
                "text": "agile methodology (敏捷開發方法論)",
                "en": "agile methodology",
                "zh": "敏捷開發方法論",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "agile methodology",
                "zh": "敏捷開發方法論"
              },
              {
                "en": "sprint milestone",
                "zh": "衝刺週期里程碑"
              },
              {
                "en": "cross-functional",
                "zh": "跨部門的"
              },
              {
                "en": "deliverable",
                "zh": "專案產出交付成果"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l14",
        "title": "第 14 關：商務餐敘破冰與人脈建立",
        "desc": "掌握 networking、icebreaker 等核心詞彙",
        "icon": "🍷",
        "vocabularies": [
          {
            "en": "networking",
            "zh": "人脈拓展"
          },
          {
            "en": "icebreaker",
            "zh": "破冰話題"
          },
          {
            "en": "etiquette",
            "zh": "國際社交禮儀"
          },
          {
            "en": "rapport",
            "zh": "融洽信任關係"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「networking」的正確中文意思",
            "en": "networking",
            "audioText": "networking",
            "instruction": "請問「networking」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "etiquette",
                "zh": "國際社交禮儀",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "paraphrase",
                "zh": "換句話說",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "icebreaker",
                "zh": "破冰話題",
                "emoji": "🏢",
                "correct": false
              },
              {
                "en": "networking",
                "zh": "人脈拓展",
                "emoji": "📈",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Effective networking requires genuine curiosity and professional rapport.",
            "instruction": "請看中文重組成英文句子：「有效的人脈拓展需要真誠的求知慾與專業默契。」",
            "targetTokens": [
              "Effective",
              "networking",
              "requires",
              "genuine",
              "curiosity",
              "and",
              "professional",
              "rapport."
            ],
            "pool": [
              "curiosity",
              "Effective",
              "genuine",
              "networking",
              "rapport.",
              "and",
              "requires",
              "market",
              "agenda",
              "professional"
            ],
            "targetChinese": "有效的人脈拓展需要真誠的求知慾與專業默契。",
            "targetSentence": "Effective networking requires genuine curiosity and professional rapport."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "icebreaker",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "paraphrase (換句話說)",
                "en": "paraphrase",
                "zh": "換句話說",
                "correct": false
              },
              {
                "text": "networking (人脈拓展)",
                "en": "networking",
                "zh": "人脈拓展",
                "correct": false
              },
              {
                "text": "reschedule (重新排程)",
                "en": "reschedule",
                "zh": "重新排程",
                "correct": false
              },
              {
                "text": "icebreaker (破冰話題)",
                "en": "icebreaker",
                "zh": "破冰話題",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "networking",
                "zh": "人脈拓展"
              },
              {
                "en": "icebreaker",
                "zh": "破冰話題"
              },
              {
                "en": "etiquette",
                "zh": "國際社交禮儀"
              },
              {
                "en": "rapport",
                "zh": "融洽信任關係"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l15",
        "title": "第 15 關：多益聽力關鍵題型全攻略",
        "desc": "掌握 speaker intent、inference question 等核心詞彙",
        "icon": "🎧",
        "vocabularies": [
          {
            "en": "speaker intent",
            "zh": "說話者弦外意圖"
          },
          {
            "en": "inference question",
            "zh": "推論判斷題"
          },
          {
            "en": "paraphrase",
            "zh": "換句話說"
          },
          {
            "en": "distractor",
            "zh": "誘答干擾選項"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「speaker intent」的正確中文意思",
            "en": "speaker intent",
            "audioText": "speaker intent",
            "instruction": "請問「speaker intent」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "speaker intent",
                "zh": "說話者弦外意圖",
                "emoji": "💼",
                "correct": true
              },
              {
                "en": "paraphrase",
                "zh": "換句話說",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "venture capital",
                "zh": "創投風險資本",
                "emoji": "🤝",
                "correct": false
              },
              {
                "en": "inference question",
                "zh": "推論判斷題",
                "emoji": "✉️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Listen for synonyms rather than verbatim words in options.",
            "instruction": "請看中文重組成英文句子：「在選項中聆聽同義詞，而非尋找一模一樣的字詞。」",
            "targetTokens": [
              "Listen",
              "for",
              "synonyms",
              "rather",
              "than",
              "verbatim",
              "words",
              "in",
              "options."
            ],
            "pool": [
              "agile",
              "in",
              "verbatim",
              "synonyms",
              "options.",
              "than",
              "for",
              "rather",
              "inquiry",
              "Listen",
              "words"
            ],
            "targetChinese": "在選項中聆聽同義詞，而非尋找一模一樣的字詞。",
            "targetSentence": "Listen for synonyms rather than verbatim words in options."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "inference question",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "agile methodology (敏捷開發方法論)",
                "en": "agile methodology",
                "zh": "敏捷開發方法論",
                "correct": false
              },
              {
                "text": "quarterly forecast (季度預測)",
                "en": "quarterly forecast",
                "zh": "季度預測",
                "correct": false
              },
              {
                "text": "inference question (推論判斷題)",
                "en": "inference question",
                "zh": "推論判斷題",
                "correct": true
              },
              {
                "text": "speaker intent (說話者弦外意圖)",
                "en": "speaker intent",
                "zh": "說話者弦外意圖",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "speaker intent",
                "zh": "說話者弦外意圖"
              },
              {
                "en": "inference question",
                "zh": "推論判斷題"
              },
              {
                "en": "paraphrase",
                "zh": "換句話說"
              },
              {
                "en": "distractor",
                "zh": "誘答干擾選項"
              }
            ]
          }
        ]
      },
      {
        "id": "col_beg-l16",
        "title": "第 16 關：大學商務實務認證魔王關",
        "desc": "掌握 regarding your inquiry、procurement 等核心詞彙",
        "icon": "👑",
        "vocabularies": [
          {
            "en": "regarding your inquiry",
            "zh": "關於洽詢"
          },
          {
            "en": "procurement",
            "zh": "採購"
          },
          {
            "en": "seed funding",
            "zh": "種子融資"
          },
          {
            "en": "networking",
            "zh": "人脈拓展"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「regarding your inquiry」的正確中文意思",
            "en": "regarding your inquiry",
            "audioText": "regarding your inquiry",
            "instruction": "請問「regarding your inquiry」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "apologize for inconvenience",
                "zh": "為不便致歉",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "regarding your inquiry",
                "zh": "關於洽詢",
                "emoji": "📈",
                "correct": true
              },
              {
                "en": "complaint resolution",
                "zh": "客訴處理解決",
                "emoji": "💡",
                "correct": false
              },
              {
                "en": "seed funding",
                "zh": "種子融資",
                "emoji": "🏢",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Professional communication and strategic collaboration guarantee business triumph.",
            "instruction": "請看中文重組成英文句子：「專業的溝通與戰略協作保證了商業上的成功。」",
            "targetTokens": [
              "Professional",
              "communication",
              "and",
              "strategic",
              "collaboration",
              "guarantee",
              "business",
              "triumph."
            ],
            "pool": [
              "Professional",
              "strategic",
              "question",
              "business",
              "collaboration",
              "and",
              "guarantee",
              "triumph.",
              "communication",
              "package"
            ],
            "targetChinese": "專業的溝通與戰略協作保證了商業上的成功。",
            "targetSentence": "Professional communication and strategic collaboration guarantee business triumph."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "procurement",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "sponsorship (企業贊助)",
                "en": "sponsorship",
                "zh": "企業贊助",
                "correct": false
              },
              {
                "text": "procurement (採購)",
                "en": "procurement",
                "zh": "採購",
                "correct": true
              },
              {
                "text": "regarding your inquiry (關於洽詢)",
                "en": "regarding your inquiry",
                "zh": "關於洽詢",
                "correct": false
              },
              {
                "text": "maintenance (航機維修保養)",
                "en": "maintenance",
                "zh": "航機維修保養",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "regarding your inquiry",
                "zh": "關於洽詢"
              },
              {
                "en": "procurement",
                "zh": "採購"
              },
              {
                "en": "seed funding",
                "zh": "種子融資"
              },
              {
                "en": "networking",
                "zh": "人脈拓展"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "col_mid",
    "category": "college",
    "categoryName": "大學與成人",
    "categoryIcon": "🎓",
    "subLevel": "mid",
    "subLevelName": "大學・中級 (多益850+/托福)",
    "badge": "🎯 學術思維",
    "desc": "學術論文研讀、國際談判、跨國金融、生成式AI與環境政策",
    "cefr": "B2+ ~ C1-",
    "themeColor": "#f97316",
    "colorClass": "u-dino",
    "lessons": [
      {
        "id": "col_mid-l1",
        "title": "第 1 關：學術論文方法論與結果評估",
        "desc": "掌握 empirical methodology、sample size 等核心詞彙",
        "icon": "📑",
        "vocabularies": [
          {
            "en": "empirical methodology",
            "zh": "實證研究方法論"
          },
          {
            "en": "sample size",
            "zh": "樣本規模"
          },
          {
            "en": "correlation coefficient",
            "zh": "相關係數"
          },
          {
            "en": "reproducibility",
            "zh": "可再現性"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「empirical methodology」的正確中文意思",
            "en": "empirical methodology",
            "audioText": "empirical methodology",
            "instruction": "請問「empirical methodology」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "sample size",
                "zh": "樣本規模",
                "emoji": "📑",
                "correct": false
              },
              {
                "en": "empirical methodology",
                "zh": "實證研究方法論",
                "emoji": "🎯",
                "correct": true
              },
              {
                "en": "correlation coefficient",
                "zh": "相關係數",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "illustrative example",
                "zh": "佐證範例",
                "emoji": "⚖️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The empirical study demonstrated a statistically significant positive correlation.",
            "instruction": "請看中文重組成英文句子：「該實證研究展現了具有統計顯著性的正相關。」",
            "targetTokens": [
              "The",
              "empirical",
              "study",
              "demonstrated",
              "a",
              "statistically",
              "significant",
              "positive",
              "correlation."
            ],
            "pool": [
              "correlation.",
              "nuanced",
              "statistically",
              "study",
              "significant",
              "empirical",
              "biodiversity",
              "The",
              "a",
              "positive",
              "demonstrated"
            ],
            "targetChinese": "該實證研究展現了具有統計顯著性的正相關。",
            "targetSentence": "The empirical study demonstrated a statistically significant positive correlation."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "sample size",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "yield rate (良率)",
                "en": "yield rate",
                "zh": "良率",
                "correct": false
              },
              {
                "text": "empirical methodology (實證研究方法論)",
                "en": "empirical methodology",
                "zh": "實證研究方法論",
                "correct": false
              },
              {
                "text": "generative AI (生成式AI)",
                "en": "generative AI",
                "zh": "生成式AI",
                "correct": false
              },
              {
                "text": "sample size (樣本規模)",
                "en": "sample size",
                "zh": "樣本規模",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "empirical methodology",
                "zh": "實證研究方法論"
              },
              {
                "en": "sample size",
                "zh": "樣本規模"
              },
              {
                "en": "correlation coefficient",
                "zh": "相關係數"
              },
              {
                "en": "reproducibility",
                "zh": "可再現性"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l2",
        "title": "第 2 關：托福學術演講高階聽力剖析",
        "desc": "掌握 academic lecture、digression 等核心詞彙",
        "icon": "🎙️",
        "vocabularies": [
          {
            "en": "academic lecture",
            "zh": "大學學術講堂"
          },
          {
            "en": "digression",
            "zh": "離題補充說明"
          },
          {
            "en": "professor stance",
            "zh": "教授核心立場"
          },
          {
            "en": "illustrative example",
            "zh": "佐證範例"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「academic lecture」的正確中文意思",
            "en": "academic lecture",
            "audioText": "academic lecture",
            "instruction": "請問「academic lecture」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "digression",
                "zh": "離題補充說明",
                "emoji": "🏛️",
                "correct": false
              },
              {
                "en": "academic lecture",
                "zh": "大學學術講堂",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "professor stance",
                "zh": "教授核心立場",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "bilateral treaty",
                "zh": "雙邊條約",
                "emoji": "📈",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The professor presented counterintuitive evidence regarding planetary atmospheres.",
            "instruction": "請看中文重組成英文句子：「教授提出了關於行星大氣層的反直覺證據。」",
            "targetTokens": [
              "The",
              "professor",
              "presented",
              "counterintuitive",
              "evidence",
              "regarding",
              "planetary",
              "atmospheres."
            ],
            "pool": [
              "regarding",
              "presented",
              "professor",
              "counterintuitive",
              "evidence",
              "example",
              "planetary",
              "endangered",
              "atmospheres.",
              "The"
            ],
            "targetChinese": "教授提出了關於行星大氣層的反直覺證據。",
            "targetSentence": "The professor presented counterintuitive evidence regarding planetary atmospheres."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "digression",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "academic lecture (大學學術講堂)",
                "en": "academic lecture",
                "zh": "大學學術講堂",
                "correct": false
              },
              {
                "text": "restitution (恢復係數)",
                "en": "restitution",
                "zh": "恢復係數",
                "correct": false
              },
              {
                "text": "concession (退讓妥協)",
                "en": "concession",
                "zh": "退讓妥協",
                "correct": false
              },
              {
                "text": "digression (離題補充說明)",
                "en": "digression",
                "zh": "離題補充說明",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "academic lecture",
                "zh": "大學學術講堂"
              },
              {
                "en": "digression",
                "zh": "離題補充說明"
              },
              {
                "en": "professor stance",
                "zh": "教授核心立場"
              },
              {
                "en": "illustrative example",
                "zh": "佐證範例"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l3",
        "title": "第 3 關：雅思圖表數據趨勢綜合歸納",
        "desc": "掌握 upward trajectory、plateau 等核心詞彙",
        "icon": "📊",
        "vocabularies": [
          {
            "en": "upward trajectory",
            "zh": "向上爬升走勢"
          },
          {
            "en": "plateau",
            "zh": "趨於平緩穩定"
          },
          {
            "en": "drastic fluctuation",
            "zh": "劇烈震盪波動"
          },
          {
            "en": "outweigh",
            "zh": "重於勝過"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「upward trajectory」的正確中文意思",
            "en": "upward trajectory",
            "audioText": "upward trajectory",
            "instruction": "請問「upward trajectory」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "plateau",
                "zh": "趨於平緩穩定",
                "emoji": "📑",
                "correct": false
              },
              {
                "en": "drastic fluctuation",
                "zh": "劇烈震盪波動",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "upward trajectory",
                "zh": "向上爬升走勢",
                "emoji": "🎯",
                "correct": true
              },
              {
                "en": "rebuttal strategy",
                "zh": "駁斥策略",
                "emoji": "⚖️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Renewable energy production displayed a remarkable upward trajectory.",
            "instruction": "請看中文重組成英文句子：「再生能源發電量呈現了顯著的向上攀升趨勢。」",
            "targetTokens": [
              "Renewable",
              "energy",
              "production",
              "displayed",
              "a",
              "remarkable",
              "upward",
              "trajectory."
            ],
            "pool": [
              "remarkable",
              "upward",
              "production",
              "plateau",
              "a",
              "size",
              "trajectory.",
              "Renewable",
              "displayed",
              "energy"
            ],
            "targetChinese": "再生能源發電量呈現了顯著的向上攀升趨勢。",
            "targetSentence": "Renewable energy production displayed a remarkable upward trajectory."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "plateau",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "deadlock (談判僵局)",
                "en": "deadlock",
                "zh": "談判僵局",
                "correct": false
              },
              {
                "text": "synergy (協同綜效)",
                "en": "synergy",
                "zh": "協同綜效",
                "correct": false
              },
              {
                "text": "upward trajectory (向上爬升走勢)",
                "en": "upward trajectory",
                "zh": "向上爬升走勢",
                "correct": false
              },
              {
                "text": "plateau (趨於平緩穩定)",
                "en": "plateau",
                "zh": "趨於平緩穩定",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "upward trajectory",
                "zh": "向上爬升走勢"
              },
              {
                "en": "plateau",
                "zh": "趨於平緩穩定"
              },
              {
                "en": "drastic fluctuation",
                "zh": "劇烈震盪波動"
              },
              {
                "en": "outweigh",
                "zh": "重於勝過"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l4",
        "title": "第 4 關：國際商務談判策略與讓步",
        "desc": "掌握 negotiation leverage、BATNA 等核心詞彙",
        "icon": "🤝",
        "vocabularies": [
          {
            "en": "negotiation leverage",
            "zh": "談判籌碼"
          },
          {
            "en": "BATNA",
            "zh": "最佳替代方案"
          },
          {
            "en": "concession",
            "zh": "退讓妥協"
          },
          {
            "en": "deadlock",
            "zh": "談判僵局"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「negotiation leverage」的正確中文意思",
            "en": "negotiation leverage",
            "audioText": "negotiation leverage",
            "instruction": "請問「negotiation leverage」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "concession",
                "zh": "退讓妥協",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "BATNA",
                "zh": "最佳替代方案",
                "emoji": "🏛️",
                "correct": false
              },
              {
                "en": "negotiation leverage",
                "zh": "談判籌碼",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "macroeconomic policy",
                "zh": "總體經濟政策",
                "emoji": "📈",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Understanding your BATNA strengthens leverage during contractual negotiations.",
            "instruction": "請看中文重組成英文句子：「了解您的談判最佳替代方案能強化合約協商籌碼。」",
            "targetTokens": [
              "Understanding",
              "your",
              "BATNA",
              "strengthens",
              "leverage",
              "during",
              "contractual",
              "negotiations."
            ],
            "pool": [
              "Understanding",
              "BATNA",
              "negotiations.",
              "empirical",
              "leverage",
              "during",
              "strengthens",
              "your",
              "contractual",
              "negotiation"
            ],
            "targetChinese": "了解您的談判最佳替代方案能強化合約協商籌碼。",
            "targetSentence": "Understanding your BATNA strengthens leverage during contractual negotiations."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "BATNA",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "BATNA (最佳替代方案)",
                "en": "BATNA",
                "zh": "最佳替代方案",
                "correct": true
              },
              {
                "text": "negotiation leverage (談判籌碼)",
                "en": "negotiation leverage",
                "zh": "談判籌碼",
                "correct": false
              },
              {
                "text": "plateau (趨於平緩穩定)",
                "en": "plateau",
                "zh": "趨於平緩穩定",
                "correct": false
              },
              {
                "text": "synergy (協同綜效)",
                "en": "synergy",
                "zh": "協同綜效",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "negotiation leverage",
                "zh": "談判籌碼"
              },
              {
                "en": "BATNA",
                "zh": "最佳替代方案"
              },
              {
                "en": "concession",
                "zh": "退讓妥協"
              },
              {
                "en": "deadlock",
                "zh": "談判僵局"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l5",
        "title": "第 5 關：跨國併購與企業綜效整合",
        "desc": "掌握 merger and acquisition、synergy 等核心詞彙",
        "icon": "🏢",
        "vocabularies": [
          {
            "en": "merger and acquisition",
            "zh": "跨國併購"
          },
          {
            "en": "synergy",
            "zh": "協同綜效"
          },
          {
            "en": "due diligence",
            "zh": "實地查核盡職調查"
          },
          {
            "en": "corporate restructuring",
            "zh": "企業架構重組"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「merger and acquisition」的正確中文意思",
            "en": "merger and acquisition",
            "audioText": "merger and acquisition",
            "instruction": "請問「merger and acquisition」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "due diligence",
                "zh": "實地查核盡職調查",
                "emoji": "📑",
                "correct": false
              },
              {
                "en": "merger and acquisition",
                "zh": "跨國併購",
                "emoji": "🎯",
                "correct": true
              },
              {
                "en": "sustainable aviation fuel",
                "zh": "永續航空燃油SAF",
                "emoji": "⚖️",
                "correct": false
              },
              {
                "en": "corporate restructuring",
                "zh": "企業架構重組",
                "emoji": "📊",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Due diligence ensures that expected organizational synergies are realistic.",
            "instruction": "請看中文重組成英文句子：「盡職調查確保預期的企業綜效切實可行。」",
            "targetTokens": [
              "Due",
              "diligence",
              "ensures",
              "that",
              "expected",
              "organizational",
              "synergies",
              "are",
              "realistic."
            ],
            "pool": [
              "expected",
              "realistic.",
              "synergies",
              "organizational",
              "ensures",
              "diligence",
              "are",
              "Due",
              "upward",
              "resilience",
              "that"
            ],
            "targetChinese": "盡職調查確保預期的企業綜效切實可行。",
            "targetSentence": "Due diligence ensures that expected organizational synergies are realistic."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "synergy",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "merger and acquisition (跨國併購)",
                "en": "merger and acquisition",
                "zh": "跨國併購",
                "correct": false
              },
              {
                "text": "plateau (趨於平緩穩定)",
                "en": "plateau",
                "zh": "趨於平緩穩定",
                "correct": false
              },
              {
                "text": "synergy (協同綜效)",
                "en": "synergy",
                "zh": "協同綜效",
                "correct": true
              },
              {
                "text": "deadlock (談判僵局)",
                "en": "deadlock",
                "zh": "談判僵局",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "merger and acquisition",
                "zh": "跨國併購"
              },
              {
                "en": "synergy",
                "zh": "協同綜效"
              },
              {
                "en": "due diligence",
                "zh": "實地查核盡職調查"
              },
              {
                "en": "corporate restructuring",
                "zh": "企業架構重組"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l6",
        "title": "第 6 關：總體經濟與全球貨幣政策",
        "desc": "掌握 macroeconomic policy、inflationary pressure 等核心詞彙",
        "icon": "💹",
        "vocabularies": [
          {
            "en": "macroeconomic policy",
            "zh": "總體經濟政策"
          },
          {
            "en": "inflationary pressure",
            "zh": "通膨壓力"
          },
          {
            "en": "interest rate hike",
            "zh": "央行升息"
          },
          {
            "en": "quantitative tightening",
            "zh": "量化緊縮"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「macroeconomic policy」的正確中文意思",
            "en": "macroeconomic policy",
            "audioText": "macroeconomic policy",
            "instruction": "請問「macroeconomic policy」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "macroeconomic policy",
                "zh": "總體經濟政策",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "inflationary pressure",
                "zh": "通膨壓力",
                "emoji": "🏛️",
                "correct": false
              },
              {
                "en": "illustrative example",
                "zh": "佐證範例",
                "emoji": "📈",
                "correct": false
              },
              {
                "en": "interest rate hike",
                "zh": "央行升息",
                "emoji": "🌐",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Central banks adjust interest rates to curb persistent inflation.",
            "instruction": "請看中文重組成英文句子：「各國央行調整利率以抑制持續存在的通貨膨脹。」",
            "targetTokens": [
              "Central",
              "banks",
              "adjust",
              "interest",
              "rates",
              "to",
              "curb",
              "persistent",
              "inflation."
            ],
            "pool": [
              "adjust",
              "curb",
              "plateau",
              "Central",
              "inflation.",
              "rates",
              "nuanced",
              "persistent",
              "banks",
              "to",
              "interest"
            ],
            "targetChinese": "各國央行調整利率以抑制持續存在的通貨膨脹。",
            "targetSentence": "Central banks adjust interest rates to curb persistent inflation."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "inflationary pressure",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "intellectual property (智慧財產權)",
                "en": "intellectual property",
                "zh": "智慧財產權",
                "correct": false
              },
              {
                "text": "inflationary pressure (通膨壓力)",
                "en": "inflationary pressure",
                "zh": "通膨壓力",
                "correct": true
              },
              {
                "text": "macroeconomic policy (總體經濟政策)",
                "en": "macroeconomic policy",
                "zh": "總體經濟政策",
                "correct": false
              },
              {
                "text": "semiconductor foundry (晶圓代工廠)",
                "en": "semiconductor foundry",
                "zh": "晶圓代工廠",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "macroeconomic policy",
                "zh": "總體經濟政策"
              },
              {
                "en": "inflationary pressure",
                "zh": "通膨壓力"
              },
              {
                "en": "interest rate hike",
                "zh": "央行升息"
              },
              {
                "en": "quantitative tightening",
                "zh": "量化緊縮"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l7",
        "title": "第 7 關：先進航空推進與零碳永續",
        "desc": "掌握 sustainable aviation fuel、hydrogen propulsion 等核心詞彙",
        "icon": "✈️",
        "vocabularies": [
          {
            "en": "sustainable aviation fuel",
            "zh": "永續航空燃油SAF"
          },
          {
            "en": "hydrogen propulsion",
            "zh": "氫能動力推進"
          },
          {
            "en": "thermal efficiency",
            "zh": "熱效率"
          },
          {
            "en": "decarbonization",
            "zh": "脫碳零排放"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「sustainable aviation fuel」的正確中文意思",
            "en": "sustainable aviation fuel",
            "audioText": "sustainable aviation fuel",
            "instruction": "請問「sustainable aviation fuel」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "sustainable aviation fuel",
                "zh": "永續航空燃油SAF",
                "emoji": "🎯",
                "correct": true
              },
              {
                "en": "thermal efficiency",
                "zh": "熱效率",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "hydrogen propulsion",
                "zh": "氫能動力推進",
                "emoji": "📑",
                "correct": false
              },
              {
                "en": "merger and acquisition",
                "zh": "跨國併購",
                "emoji": "⚖️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Sustainable aviation fuels substantially diminish aircraft greenhouse emissions.",
            "instruction": "請看中文重組成英文句子：「永續航空燃料大幅減少了飛機的溫室氣體排放。」",
            "targetTokens": [
              "Sustainable",
              "aviation",
              "fuels",
              "substantially",
              "diminish",
              "aircraft",
              "greenhouse",
              "emissions."
            ],
            "pool": [
              "node",
              "aviation",
              "aircraft",
              "Sustainable",
              "diminish",
              "greenhouse",
              "fuels",
              "emissions.",
              "fallacy",
              "substantially"
            ],
            "targetChinese": "永續航空燃料大幅減少了飛機的溫室氣體排放。",
            "targetSentence": "Sustainable aviation fuels substantially diminish aircraft greenhouse emissions."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "hydrogen propulsion",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "hydrogen propulsion (氫能動力推進)",
                "en": "hydrogen propulsion",
                "zh": "氫能動力推進",
                "correct": true
              },
              {
                "text": "multi-body dynamics (多體力學動態)",
                "en": "multi-body dynamics",
                "zh": "多體力學動態",
                "correct": false
              },
              {
                "text": "sustainable aviation fuel (永續航空燃油SAF)",
                "en": "sustainable aviation fuel",
                "zh": "永續航空燃油SAF",
                "correct": false
              },
              {
                "text": "macroeconomic policy (總體經濟政策)",
                "en": "macroeconomic policy",
                "zh": "總體經濟政策",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "sustainable aviation fuel",
                "zh": "永續航空燃油SAF"
              },
              {
                "en": "hydrogen propulsion",
                "zh": "氫能動力推進"
              },
              {
                "en": "thermal efficiency",
                "zh": "熱效率"
              },
              {
                "en": "decarbonization",
                "zh": "脫碳零排放"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l8",
        "title": "第 8 關：運動生物力學與高科技防護",
        "desc": "掌握 biomechanical analysis、kinetic chain 等核心詞彙",
        "icon": "🏃",
        "vocabularies": [
          {
            "en": "biomechanical analysis",
            "zh": "生物力學分析"
          },
          {
            "en": "kinetic chain",
            "zh": "動力鏈傳遞"
          },
          {
            "en": "torque generation",
            "zh": "扭矩生成"
          },
          {
            "en": "injury prevention",
            "zh": "運動創傷預防"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「biomechanical analysis」的正確中文意思",
            "en": "biomechanical analysis",
            "audioText": "biomechanical analysis",
            "instruction": "請問「biomechanical analysis」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "corporate restructuring",
                "zh": "企業架構重組",
                "emoji": "📈",
                "correct": false
              },
              {
                "en": "kinetic chain",
                "zh": "動力鏈傳遞",
                "emoji": "🏛️",
                "correct": false
              },
              {
                "en": "torque generation",
                "zh": "扭矩生成",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "biomechanical analysis",
                "zh": "生物力學分析",
                "emoji": "🔬",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Optimizing the kinetic chain reduces pitcher shoulder joint fatigue.",
            "instruction": "請看中文重組成英文句子：「優化動力鏈能減輕投手肩關節的疲勞負荷。」",
            "targetTokens": [
              "Optimizing",
              "the",
              "kinetic",
              "chain",
              "reduces",
              "pitcher",
              "shoulder",
              "joint",
              "fatigue."
            ],
            "pool": [
              "shoulder",
              "pitcher",
              "deadlock",
              "joint",
              "chain",
              "Optimizing",
              "quantitative",
              "fatigue.",
              "reduces",
              "the",
              "kinetic"
            ],
            "targetChinese": "優化動力鏈能減輕投手肩關節的疲勞負荷。",
            "targetSentence": "Optimizing the kinetic chain reduces pitcher shoulder joint fatigue."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "kinetic chain",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "generative AI (生成式AI)",
                "en": "generative AI",
                "zh": "生成式AI",
                "correct": false
              },
              {
                "text": "due diligence (實地查核盡職調查)",
                "en": "due diligence",
                "zh": "實地查核盡職調查",
                "correct": false
              },
              {
                "text": "kinetic chain (動力鏈傳遞)",
                "en": "kinetic chain",
                "zh": "動力鏈傳遞",
                "correct": true
              },
              {
                "text": "biomechanical analysis (生物力學分析)",
                "en": "biomechanical analysis",
                "zh": "生物力學分析",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "biomechanical analysis",
                "zh": "生物力學分析"
              },
              {
                "en": "kinetic chain",
                "zh": "動力鏈傳遞"
              },
              {
                "en": "torque generation",
                "zh": "扭矩生成"
              },
              {
                "en": "injury prevention",
                "zh": "運動創傷預防"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l9",
        "title": "第 9 關：隨機過程與多體碰撞力學",
        "desc": "掌握 stochastic modeling、multi-body dynamics 等核心詞彙",
        "icon": "🎱",
        "vocabularies": [
          {
            "en": "stochastic modeling",
            "zh": "隨機機率模型"
          },
          {
            "en": "multi-body dynamics",
            "zh": "多體力學動態"
          },
          {
            "en": "kinetic dissipation",
            "zh": "動能耗散"
          },
          {
            "en": "restitution",
            "zh": "恢復係數"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「stochastic modeling」的正確中文意思",
            "en": "stochastic modeling",
            "audioText": "stochastic modeling",
            "instruction": "請問「stochastic modeling」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "biodiversity treaty",
                "zh": "生物多樣性公約",
                "emoji": "⚖️",
                "correct": false
              },
              {
                "en": "kinetic dissipation",
                "zh": "動能耗散",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "multi-body dynamics",
                "zh": "多體力學動態",
                "emoji": "📑",
                "correct": false
              },
              {
                "en": "stochastic modeling",
                "zh": "隨機機率模型",
                "emoji": "🎯",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Advanced simulations model kinetic energy dissipation in cue collisions.",
            "instruction": "請看中文重組成英文句子：「先進模擬技術精確模擬撞球桿碰撞時的動能耗散。」",
            "targetTokens": [
              "Advanced",
              "simulations",
              "model",
              "kinetic",
              "energy",
              "dissipation",
              "in",
              "cue",
              "collisions."
            ],
            "pool": [
              "dissipation",
              "diligence",
              "model",
              "cue",
              "policy",
              "energy",
              "Advanced",
              "in",
              "kinetic",
              "simulations",
              "collisions."
            ],
            "targetChinese": "先進模擬技術精確模擬撞球桿碰撞時的動能耗散。",
            "targetSentence": "Advanced simulations model kinetic energy dissipation in cue collisions."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "multi-body dynamics",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "stochastic modeling (隨機機率模型)",
                "en": "stochastic modeling",
                "zh": "隨機機率模型",
                "correct": false
              },
              {
                "text": "multi-body dynamics (多體力學動態)",
                "en": "multi-body dynamics",
                "zh": "多體力學動態",
                "correct": true
              },
              {
                "text": "compelling rationale (令人信服之立論)",
                "en": "compelling rationale",
                "zh": "令人信服之立論",
                "correct": false
              },
              {
                "text": "drastic fluctuation (劇烈震盪波動)",
                "en": "drastic fluctuation",
                "zh": "劇烈震盪波動",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "stochastic modeling",
                "zh": "隨機機率模型"
              },
              {
                "en": "multi-body dynamics",
                "zh": "多體力學動態"
              },
              {
                "en": "kinetic dissipation",
                "zh": "動能耗散"
              },
              {
                "en": "restitution",
                "zh": "恢復係數"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l10",
        "title": "第 10 關：生態系統韌性與國際保育公約",
        "desc": "掌握 ecosystem resilience、endangered species 等核心詞彙",
        "icon": "🌿",
        "vocabularies": [
          {
            "en": "ecosystem resilience",
            "zh": "生態韌性"
          },
          {
            "en": "endangered species",
            "zh": "瀕危物種"
          },
          {
            "en": "biodiversity treaty",
            "zh": "生物多樣性公約"
          },
          {
            "en": "habitat fragmentation",
            "zh": "棲地破碎化"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「ecosystem resilience」的正確中文意思",
            "en": "ecosystem resilience",
            "audioText": "ecosystem resilience",
            "instruction": "請問「ecosystem resilience」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "compelling rationale",
                "zh": "令人信服之立論",
                "emoji": "📈",
                "correct": false
              },
              {
                "en": "ecosystem resilience",
                "zh": "生態韌性",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "biodiversity treaty",
                "zh": "生物多樣性公約",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "endangered species",
                "zh": "瀕危物種",
                "emoji": "🏛️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "International treaties combat catastrophic global habitat fragmentation.",
            "instruction": "請看中文重組成英文句子：「國際公約致力於對抗災難性的全球棲地破碎化。」",
            "targetTokens": [
              "International",
              "treaties",
              "combat",
              "catastrophic",
              "global",
              "habitat",
              "fragmentation."
            ],
            "pool": [
              "fragmentation.",
              "International",
              "argument",
              "combat",
              "global",
              "catastrophic",
              "habitat",
              "sustainable",
              "treaties"
            ],
            "targetChinese": "國際公約致力於對抗災難性的全球棲地破碎化。",
            "targetSentence": "International treaties combat catastrophic global habitat fragmentation."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "endangered species",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "endangered species (瀕危物種)",
                "en": "endangered species",
                "zh": "瀕危物種",
                "correct": true
              },
              {
                "text": "dispute settlement (爭端解決機構)",
                "en": "dispute settlement",
                "zh": "爭端解決機構",
                "correct": false
              },
              {
                "text": "ecosystem resilience (生態韌性)",
                "en": "ecosystem resilience",
                "zh": "生態韌性",
                "correct": false
              },
              {
                "text": "torque generation (扭矩生成)",
                "en": "torque generation",
                "zh": "扭矩生成",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "ecosystem resilience",
                "zh": "生態韌性"
              },
              {
                "en": "endangered species",
                "zh": "瀕危物種"
              },
              {
                "en": "biodiversity treaty",
                "zh": "生物多樣性公約"
              },
              {
                "en": "habitat fragmentation",
                "zh": "棲地破碎化"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l11",
        "title": "第 11 關：生成式 AI 與智慧財產權爭議",
        "desc": "掌握 generative AI、intellectual property 等核心詞彙",
        "icon": "⚖️",
        "vocabularies": [
          {
            "en": "generative AI",
            "zh": "生成式AI"
          },
          {
            "en": "intellectual property",
            "zh": "智慧財產權"
          },
          {
            "en": "copyright infringement",
            "zh": "著作權侵權"
          },
          {
            "en": "fair use doctrine",
            "zh": "合理使用原則"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「generative AI」的正確中文意思",
            "en": "generative AI",
            "audioText": "generative AI",
            "instruction": "請問「generative AI」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "copyright infringement",
                "zh": "著作權侵權",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "intellectual property",
                "zh": "智慧財產權",
                "emoji": "📑",
                "correct": false
              },
              {
                "en": "generative AI",
                "zh": "生成式AI",
                "emoji": "🎯",
                "correct": true
              },
              {
                "en": "kinetic chain",
                "zh": "動力鏈傳遞",
                "emoji": "⚖️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Courts scrutinize whether model pretraining constitutes fair use.",
            "instruction": "請看中文重組成英文句子：「法院正嚴格審查模型預訓練是否構成合理使用。」",
            "targetTokens": [
              "Courts",
              "scrutinize",
              "whether",
              "model",
              "pretraining",
              "constitutes",
              "fair",
              "use."
            ],
            "pool": [
              "scrutinize",
              "constitutes",
              "resilience",
              "fair",
              "use.",
              "model",
              "pretraining",
              "Courts",
              "torque",
              "whether"
            ],
            "targetChinese": "法院正嚴格審查模型預訓練是否構成合理使用。",
            "targetSentence": "Courts scrutinize whether model pretraining constitutes fair use."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "intellectual property",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "semiconductor foundry (晶圓代工廠)",
                "en": "semiconductor foundry",
                "zh": "晶圓代工廠",
                "correct": false
              },
              {
                "text": "generative AI (生成式AI)",
                "en": "generative AI",
                "zh": "生成式AI",
                "correct": false
              },
              {
                "text": "intellectual property (智慧財產權)",
                "en": "intellectual property",
                "zh": "智慧財產權",
                "correct": true
              },
              {
                "text": "inflationary pressure (通膨壓力)",
                "en": "inflationary pressure",
                "zh": "通膨壓力",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "generative AI",
                "zh": "生成式AI"
              },
              {
                "en": "intellectual property",
                "zh": "智慧財產權"
              },
              {
                "en": "copyright infringement",
                "zh": "著作權侵權"
              },
              {
                "en": "fair use doctrine",
                "zh": "合理使用原則"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l12",
        "title": "第 12 關：全球半導體極紫外光微影 (EUV)",
        "desc": "掌握 EUV lithography、nanometer node 等核心詞彙",
        "icon": "🔬",
        "vocabularies": [
          {
            "en": "EUV lithography",
            "zh": "極紫外光微影技術"
          },
          {
            "en": "nanometer node",
            "zh": "奈米製程節點"
          },
          {
            "en": "semiconductor foundry",
            "zh": "晶圓代工廠"
          },
          {
            "en": "yield rate",
            "zh": "良率"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「EUV lithography」的正確中文意思",
            "en": "EUV lithography",
            "audioText": "EUV lithography",
            "instruction": "請問「EUV lithography」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "semiconductor foundry",
                "zh": "晶圓代工廠",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "logical fallacy",
                "zh": "邏輯謬誤",
                "emoji": "📈",
                "correct": false
              },
              {
                "en": "nanometer node",
                "zh": "奈米製程節點",
                "emoji": "🏛️",
                "correct": false
              },
              {
                "en": "EUV lithography",
                "zh": "極紫外光微影技術",
                "emoji": "🔬",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "EUV lithography enables precision fabrication at atomic scale.",
            "instruction": "請看中文重組成英文句子：「極紫外光微影技術實現了原子級尺度的精密製造。」",
            "targetTokens": [
              "EUV",
              "lithography",
              "enables",
              "precision",
              "fabrication",
              "at",
              "atomic",
              "scale."
            ],
            "pool": [
              "at",
              "fabrication",
              "torque",
              "scale.",
              "hydrogen",
              "EUV",
              "atomic",
              "enables",
              "precision",
              "lithography"
            ],
            "targetChinese": "極紫外光微影技術實現了原子級尺度的精密製造。",
            "targetSentence": "EUV lithography enables precision fabrication at atomic scale."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "nanometer node",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "logical fallacy (邏輯謬誤)",
                "en": "logical fallacy",
                "zh": "邏輯謬誤",
                "correct": false
              },
              {
                "text": "EUV lithography (極紫外光微影技術)",
                "en": "EUV lithography",
                "zh": "極紫外光微影技術",
                "correct": false
              },
              {
                "text": "nanometer node (奈米製程節點)",
                "en": "nanometer node",
                "zh": "奈米製程節點",
                "correct": true
              },
              {
                "text": "due diligence (實地查核盡職調查)",
                "en": "due diligence",
                "zh": "實地查核盡職調查",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "EUV lithography",
                "zh": "極紫外光微影技術"
              },
              {
                "en": "nanometer node",
                "zh": "奈米製程節點"
              },
              {
                "en": "semiconductor foundry",
                "zh": "晶圓代工廠"
              },
              {
                "en": "yield rate",
                "zh": "良率"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l13",
        "title": "第 13 關：國際人權法與爭端仲裁機制",
        "desc": "掌握 international arbitration、jurisdiction 等核心詞彙",
        "icon": "🏛️",
        "vocabularies": [
          {
            "en": "international arbitration",
            "zh": "國際仲裁"
          },
          {
            "en": "jurisdiction",
            "zh": "司法管轄權"
          },
          {
            "en": "bilateral treaty",
            "zh": "雙邊條約"
          },
          {
            "en": "dispute settlement",
            "zh": "爭端解決機構"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「international arbitration」的正確中文意思",
            "en": "international arbitration",
            "audioText": "international arbitration",
            "instruction": "請問「international arbitration」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "corporate restructuring",
                "zh": "企業架構重組",
                "emoji": "⚖️",
                "correct": false
              },
              {
                "en": "jurisdiction",
                "zh": "司法管轄權",
                "emoji": "📑",
                "correct": false
              },
              {
                "en": "bilateral treaty",
                "zh": "雙邊條約",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "international arbitration",
                "zh": "國際仲裁",
                "emoji": "🎯",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The arbitration tribunal ruled unanimously in favor of maritime rights.",
            "instruction": "請看中文重組成英文句子：「仲裁法庭一致裁決支持海洋權利。」",
            "targetTokens": [
              "The",
              "arbitration",
              "tribunal",
              "ruled",
              "unanimously",
              "in",
              "favor",
              "of",
              "maritime",
              "rights."
            ],
            "pool": [
              "maritime",
              "habitat",
              "of",
              "rights.",
              "tribunal",
              "unanimously",
              "The",
              "favor",
              "in",
              "negotiation",
              "ruled",
              "arbitration"
            ],
            "targetChinese": "仲裁法庭一致裁決支持海洋權利。",
            "targetSentence": "The arbitration tribunal ruled unanimously in favor of maritime rights."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "jurisdiction",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "international arbitration (國際仲裁)",
                "en": "international arbitration",
                "zh": "國際仲裁",
                "correct": false
              },
              {
                "text": "counter-evidence (反面客觀證據)",
                "en": "counter-evidence",
                "zh": "反面客觀證據",
                "correct": false
              },
              {
                "text": "restitution (恢復係數)",
                "en": "restitution",
                "zh": "恢復係數",
                "correct": false
              },
              {
                "text": "jurisdiction (司法管轄權)",
                "en": "jurisdiction",
                "zh": "司法管轄權",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "international arbitration",
                "zh": "國際仲裁"
              },
              {
                "en": "jurisdiction",
                "zh": "司法管轄權"
              },
              {
                "en": "bilateral treaty",
                "zh": "雙邊條約"
              },
              {
                "en": "dispute settlement",
                "zh": "爭端解決機構"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l14",
        "title": "第 14 關：學術辯論反方駁斥結構技巧",
        "desc": "掌握 rebuttal strategy、logical fallacy 等核心詞彙",
        "icon": "🗣️",
        "vocabularies": [
          {
            "en": "rebuttal strategy",
            "zh": "駁斥策略"
          },
          {
            "en": "logical fallacy",
            "zh": "邏輯謬誤"
          },
          {
            "en": "straw man argument",
            "zh": "稻草人謬誤"
          },
          {
            "en": "counter-evidence",
            "zh": "反面客觀證據"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「rebuttal strategy」的正確中文意思",
            "en": "rebuttal strategy",
            "audioText": "rebuttal strategy",
            "instruction": "請問「rebuttal strategy」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "professor stance",
                "zh": "教授核心立場",
                "emoji": "📈",
                "correct": false
              },
              {
                "en": "rebuttal strategy",
                "zh": "駁斥策略",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "logical fallacy",
                "zh": "邏輯謬誤",
                "emoji": "🏛️",
                "correct": false
              },
              {
                "en": "straw man argument",
                "zh": "稻草人謬誤",
                "emoji": "🌐",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Skilled debaters deconstruct hidden premises and expose logical fallacies.",
            "instruction": "請看中文重組成英文句子：「資深辯手能解構隱藏的前提並揭露邏輯謬誤。」",
            "targetTokens": [
              "Skilled",
              "debaters",
              "deconstruct",
              "hidden",
              "premises",
              "and",
              "expose",
              "logical",
              "fallacies."
            ],
            "pool": [
              "expose",
              "premises",
              "logical",
              "hidden",
              "deconstruct",
              "Skilled",
              "and",
              "fallacies.",
              "academic",
              "debaters",
              "policy"
            ],
            "targetChinese": "資深辯手能解構隱藏的前提並揭露邏輯謬誤。",
            "targetSentence": "Skilled debaters deconstruct hidden premises and expose logical fallacies."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "logical fallacy",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "injury prevention (運動創傷預防)",
                "en": "injury prevention",
                "zh": "運動創傷預防",
                "correct": false
              },
              {
                "text": "EUV lithography (極紫外光微影技術)",
                "en": "EUV lithography",
                "zh": "極紫外光微影技術",
                "correct": false
              },
              {
                "text": "rebuttal strategy (駁斥策略)",
                "en": "rebuttal strategy",
                "zh": "駁斥策略",
                "correct": false
              },
              {
                "text": "logical fallacy (邏輯謬誤)",
                "en": "logical fallacy",
                "zh": "邏輯謬誤",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "rebuttal strategy",
                "zh": "駁斥策略"
              },
              {
                "en": "logical fallacy",
                "zh": "邏輯謬誤"
              },
              {
                "en": "straw man argument",
                "zh": "稻草人謬誤"
              },
              {
                "en": "counter-evidence",
                "zh": "反面客觀證據"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l15",
        "title": "第 15 關：托福獨立寫作高分論述建構",
        "desc": "掌握 cohesive paragraph、nuanced argumentation 等核心詞彙",
        "icon": "✍️",
        "vocabularies": [
          {
            "en": "cohesive paragraph",
            "zh": "緊密段落結構"
          },
          {
            "en": "nuanced argumentation",
            "zh": "精緻深入論點"
          },
          {
            "en": "synthesizing viewpoints",
            "zh": "整合多元觀點"
          },
          {
            "en": "compelling rationale",
            "zh": "令人信服之立論"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「cohesive paragraph」的正確中文意思",
            "en": "cohesive paragraph",
            "audioText": "cohesive paragraph",
            "instruction": "請問「cohesive paragraph」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "endangered species",
                "zh": "瀕危物種",
                "emoji": "⚖️",
                "correct": false
              },
              {
                "en": "synthesizing viewpoints",
                "zh": "整合多元觀點",
                "emoji": "📊",
                "correct": false
              },
              {
                "en": "nuanced argumentation",
                "zh": "精緻深入論點",
                "emoji": "📑",
                "correct": false
              },
              {
                "en": "cohesive paragraph",
                "zh": "緊密段落結構",
                "emoji": "🎯",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "A nuanced thesis synthesizes competing perspectives into compelling rationale.",
            "instruction": "請看中文重組成英文句子：「細緻周延的主題句將對立觀點融合成極具說服力的論述。」",
            "targetTokens": [
              "A",
              "nuanced",
              "thesis",
              "synthesizes",
              "competing",
              "perspectives",
              "into",
              "compelling",
              "rationale."
            ],
            "pool": [
              "competing",
              "hydrogen",
              "thesis",
              "rationale.",
              "into",
              "compelling",
              "synthesizes",
              "A",
              "illustrative",
              "perspectives",
              "nuanced"
            ],
            "targetChinese": "細緻周延的主題句將對立觀點融合成極具說服力的論述。",
            "targetSentence": "A nuanced thesis synthesizes competing perspectives into compelling rationale."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "nuanced argumentation",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "inflationary pressure (通膨壓力)",
                "en": "inflationary pressure",
                "zh": "通膨壓力",
                "correct": false
              },
              {
                "text": "semiconductor foundry (晶圓代工廠)",
                "en": "semiconductor foundry",
                "zh": "晶圓代工廠",
                "correct": false
              },
              {
                "text": "cohesive paragraph (緊密段落結構)",
                "en": "cohesive paragraph",
                "zh": "緊密段落結構",
                "correct": false
              },
              {
                "text": "nuanced argumentation (精緻深入論點)",
                "en": "nuanced argumentation",
                "zh": "精緻深入論點",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "cohesive paragraph",
                "zh": "緊密段落結構"
              },
              {
                "en": "nuanced argumentation",
                "zh": "精緻深入論點"
              },
              {
                "en": "synthesizing viewpoints",
                "zh": "整合多元觀點"
              },
              {
                "en": "compelling rationale",
                "zh": "令人信服之立論"
              }
            ]
          }
        ]
      },
      {
        "id": "col_mid-l16",
        "title": "第 16 關：學術菁英與托福名師魔王關",
        "desc": "掌握 empirical methodology、macroeconomic policy 等核心詞彙",
        "icon": "👑",
        "vocabularies": [
          {
            "en": "empirical methodology",
            "zh": "實證方法"
          },
          {
            "en": "macroeconomic policy",
            "zh": "總體經濟"
          },
          {
            "en": "intellectual property",
            "zh": "智財權"
          },
          {
            "en": "rebuttal strategy",
            "zh": "反駁策略"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「empirical methodology」的正確中文意思",
            "en": "empirical methodology",
            "audioText": "empirical methodology",
            "instruction": "請問「empirical methodology」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "inflationary pressure",
                "zh": "通膨壓力",
                "emoji": "📈",
                "correct": false
              },
              {
                "en": "intellectual property",
                "zh": "智財權",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "empirical methodology",
                "zh": "實證方法",
                "emoji": "🔬",
                "correct": true
              },
              {
                "en": "macroeconomic policy",
                "zh": "總體經濟",
                "emoji": "🏛️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Rigorous academic inquiry cultivates profound insight and societal transformation.",
            "instruction": "請看中文重組成英文句子：「嚴謹的學術探究培養深刻洞察並推動社會轉型。」",
            "targetTokens": [
              "Rigorous",
              "academic",
              "inquiry",
              "cultivates",
              "profound",
              "insight",
              "and",
              "societal",
              "transformation."
            ],
            "pool": [
              "insight",
              "Rigorous",
              "academic",
              "and",
              "profound",
              "biodiversity",
              "societal",
              "compelling",
              "inquiry",
              "cultivates",
              "transformation."
            ],
            "targetChinese": "嚴謹的學術探究培養深刻洞察並推動社會轉型。",
            "targetSentence": "Rigorous academic inquiry cultivates profound insight and societal transformation."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "macroeconomic policy",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "ecosystem resilience (生態韌性)",
                "en": "ecosystem resilience",
                "zh": "生態韌性",
                "correct": false
              },
              {
                "text": "empirical methodology (實證方法)",
                "en": "empirical methodology",
                "zh": "實證方法",
                "correct": false
              },
              {
                "text": "macroeconomic policy (總體經濟)",
                "en": "macroeconomic policy",
                "zh": "總體經濟",
                "correct": true
              },
              {
                "text": "negotiation leverage (談判籌碼)",
                "en": "negotiation leverage",
                "zh": "談判籌碼",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "empirical methodology",
                "zh": "實證方法"
              },
              {
                "en": "macroeconomic policy",
                "zh": "總體經濟"
              },
              {
                "en": "intellectual property",
                "zh": "智財權"
              },
              {
                "en": "rebuttal strategy",
                "zh": "反駁策略"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "col_adv",
    "category": "college",
    "categoryName": "大學與成人",
    "categoryIcon": "🎓",
    "subLevel": "adv",
    "subLevelName": "大學・高級 (多益950+/GRE)",
    "badge": "🌍 全球領袖",
    "desc": "經濟學人深度社論、GRE高階詞彙、哲學倫理、地緣戰略與名家演講",
    "cefr": "C1 ~ C2",
    "themeColor": "#eab308",
    "colorClass": "u-boss",
    "lessons": [
      {
        "id": "col_adv-l1",
        "title": "第 1 關：GRE核心高階神級字彙",
        "desc": "掌握 ephemeral、obfuscate 等核心詞彙",
        "icon": "💎",
        "vocabularies": [
          {
            "en": "ephemeral",
            "zh": "短暫轉瞬即逝的"
          },
          {
            "en": "obfuscate",
            "zh": "混淆混亂"
          },
          {
            "en": "ubiquitous",
            "zh": "無所不在的"
          },
          {
            "en": "quintessential",
            "zh": "最具代表性典範的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「ephemeral」的正確中文意思",
            "en": "ephemeral",
            "audioText": "ephemeral",
            "instruction": "請問「ephemeral」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "obfuscate",
                "zh": "混淆混亂",
                "emoji": "🏛️",
                "correct": false
              },
              {
                "en": "chiasmus",
                "zh": "交錯迴文修辭",
                "emoji": "📜",
                "correct": false
              },
              {
                "en": "ephemeral",
                "zh": "短暫轉瞬即逝的",
                "emoji": "🌍",
                "correct": true
              },
              {
                "en": "ubiquitous",
                "zh": "無所不在的",
                "emoji": "⚖️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "His address exemplified the quintessential synthesis of eloquence and wisdom.",
            "instruction": "請看中文重組成英文句子：「他的演說體現了口才與智慧的經典融合。」",
            "targetTokens": [
              "His",
              "address",
              "exemplified",
              "the",
              "quintessential",
              "synthesis",
              "of",
              "eloquence",
              "and",
              "wisdom."
            ],
            "pool": [
              "the",
              "scrutiny",
              "quintessential",
              "exemplified",
              "wisdom.",
              "synthesis",
              "of",
              "eloquence",
              "intelligence",
              "and",
              "address",
              "His"
            ],
            "targetChinese": "他的演說體現了口才與智慧的經典融合。",
            "targetSentence": "His address exemplified the quintessential synthesis of eloquence and wisdom."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "obfuscate",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "anaphora (首字排比重複)",
                "en": "anaphora",
                "zh": "首字排比重複",
                "correct": false
              },
              {
                "text": "ephemeral (短暫轉瞬即逝的)",
                "en": "ephemeral",
                "zh": "短暫轉瞬即逝的",
                "correct": false
              },
              {
                "text": "chiasmus (交錯迴文修辭)",
                "en": "chiasmus",
                "zh": "交錯迴文修辭",
                "correct": false
              },
              {
                "text": "obfuscate (混淆混亂)",
                "en": "obfuscate",
                "zh": "混淆混亂",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "ephemeral",
                "zh": "短暫轉瞬即逝的"
              },
              {
                "en": "obfuscate",
                "zh": "混淆混亂"
              },
              {
                "en": "ubiquitous",
                "zh": "無所不在的"
              },
              {
                "en": "quintessential",
                "zh": "最具代表性典範的"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l2",
        "title": "第 2 關：經濟學人深度社論研讀",
        "desc": "掌握 The Economist、fiscal conservatism 等核心詞彙",
        "icon": "📰",
        "vocabularies": [
          {
            "en": "The Economist",
            "zh": "經濟學人特刊"
          },
          {
            "en": "fiscal conservatism",
            "zh": "財政穩健保守主義"
          },
          {
            "en": "systemic vulnerability",
            "zh": "系統性脆弱"
          },
          {
            "en": "untenable",
            "zh": "站不住腳無法維持的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「The Economist」的正確中文意思",
            "en": "The Economist",
            "audioText": "The Economist",
            "instruction": "請問「The Economist」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "debt deflation",
                "zh": "債務通縮螺旋",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "fiscal conservatism",
                "zh": "財政穩健保守主義",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "systemic vulnerability",
                "zh": "系統性脆弱",
                "emoji": "🎓",
                "correct": false
              },
              {
                "en": "The Economist",
                "zh": "經濟學人特刊",
                "emoji": "💎",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Unchecked budget deficits render long-term public debts economically untenable.",
            "instruction": "請看中文重組成英文句子：「不受約束的預算赤字使得長期公共債務在經濟上難以為繼。」",
            "targetTokens": [
              "Unchecked",
              "budget",
              "deficits",
              "render",
              "long-term",
              "public",
              "debts",
              "economically",
              "untenable."
            ],
            "pool": [
              "Unchecked",
              "Economist",
              "untenable.",
              "remedy",
              "debts",
              "deficits",
              "economically",
              "public",
              "long-term",
              "render",
              "budget"
            ],
            "targetChinese": "不受約束的預算赤字使得長期公共債務在經濟上難以為繼。",
            "targetSentence": "Unchecked budget deficits render long-term public debts economically untenable."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "fiscal conservatism",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "deterrence posture (軍事嚇阻姿態)",
                "en": "deterrence posture",
                "zh": "軍事嚇阻姿態",
                "correct": false
              },
              {
                "text": "fiscal conservatism (財政穩健保守主義)",
                "en": "fiscal conservatism",
                "zh": "財政穩健保守主義",
                "correct": true
              },
              {
                "text": "antitrust litigation (反壟斷訴訟)",
                "en": "antitrust litigation",
                "zh": "反壟斷訴訟",
                "correct": false
              },
              {
                "text": "The Economist (經濟學人特刊)",
                "en": "The Economist",
                "zh": "經濟學人特刊",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "The Economist",
                "zh": "經濟學人特刊"
              },
              {
                "en": "fiscal conservatism",
                "zh": "財政穩健保守主義"
              },
              {
                "en": "systemic vulnerability",
                "zh": "系統性脆弱"
              },
              {
                "en": "untenable",
                "zh": "站不住腳無法維持的"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l3",
        "title": "第 3 關：外交事務智庫地緣戰略",
        "desc": "掌握 Foreign Affairs、multilateral alliance 等核心詞彙",
        "icon": "🌐",
        "vocabularies": [
          {
            "en": "Foreign Affairs",
            "zh": "外交事務雜誌"
          },
          {
            "en": "multilateral alliance",
            "zh": "多邊戰略聯盟"
          },
          {
            "en": "deterrence posture",
            "zh": "軍事嚇阻姿態"
          },
          {
            "en": "hegemony",
            "zh": "全球霸權"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「Foreign Affairs」的正確中文意思",
            "en": "Foreign Affairs",
            "audioText": "Foreign Affairs",
            "instruction": "請問「Foreign Affairs」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "deterrence posture",
                "zh": "軍事嚇阻姿態",
                "emoji": "⚖️",
                "correct": false
              },
              {
                "en": "semantic nuance",
                "zh": "細微語意神髓",
                "emoji": "📜",
                "correct": false
              },
              {
                "en": "multilateral alliance",
                "zh": "多邊戰略聯盟",
                "emoji": "🏛️",
                "correct": false
              },
              {
                "en": "Foreign Affairs",
                "zh": "外交事務雜誌",
                "emoji": "🌍",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Multilateral alliances preserve regional stability through coordinated deterrence.",
            "instruction": "請看中文重組成英文句子：「多邊聯盟透過協調一致的威懾力量維護區域穩定。」",
            "targetTokens": [
              "Multilateral",
              "alliances",
              "preserve",
              "regional",
              "stability",
              "through",
              "coordinated",
              "deterrence."
            ],
            "pool": [
              "foresight",
              "preserve",
              "through",
              "alliances",
              "Multilateral",
              "coordinated",
              "regional",
              "deterministic",
              "deterrence.",
              "stability"
            ],
            "targetChinese": "多邊聯盟透過協調一致的威懾力量維護區域穩定。",
            "targetSentence": "Multilateral alliances preserve regional stability through coordinated deterrence."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "multilateral alliance",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "deontological ethics (義務論倫理學)",
                "en": "deontological ethics",
                "zh": "義務論倫理學",
                "correct": false
              },
              {
                "text": "sports historiography (體育歷史編纂學)",
                "en": "sports historiography",
                "zh": "體育歷史編纂學",
                "correct": false
              },
              {
                "text": "multilateral alliance (多邊戰略聯盟)",
                "en": "multilateral alliance",
                "zh": "多邊戰略聯盟",
                "correct": true
              },
              {
                "text": "Foreign Affairs (外交事務雜誌)",
                "en": "Foreign Affairs",
                "zh": "外交事務雜誌",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "Foreign Affairs",
                "zh": "外交事務雜誌"
              },
              {
                "en": "multilateral alliance",
                "zh": "多邊戰略聯盟"
              },
              {
                "en": "deterrence posture",
                "zh": "軍事嚇阻姿態"
              },
              {
                "en": "hegemony",
                "zh": "全球霸權"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l4",
        "title": "第 4 關：哲學倫理學與認識論辨證",
        "desc": "掌握 epistemology、deontological ethics 等核心詞彙",
        "icon": "🏛️",
        "vocabularies": [
          {
            "en": "epistemology",
            "zh": "知識認識論"
          },
          {
            "en": "deontological ethics",
            "zh": "義務論倫理學"
          },
          {
            "en": "utilitarianism",
            "zh": "效益功利主義"
          },
          {
            "en": "categorical imperative",
            "zh": "絕對律令"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「epistemology」的正確中文意思",
            "en": "epistemology",
            "audioText": "epistemology",
            "instruction": "請問「epistemology」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "epistemology",
                "zh": "知識認識論",
                "emoji": "💎",
                "correct": true
              },
              {
                "en": "ubiquitous",
                "zh": "無所不在的",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "deontological ethics",
                "zh": "義務論倫理學",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "utilitarianism",
                "zh": "效益功利主義",
                "emoji": "🎓",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Deontological ethics posits that certain actions are intrinsically impermissible.",
            "instruction": "請看中文重組成英文句子：「義務倫理學主張某些行為本質上就是不被允許的。」",
            "targetTokens": [
              "Deontological",
              "ethics",
              "posits",
              "that",
              "certain",
              "actions",
              "are",
              "intrinsically",
              "impermissible."
            ],
            "pool": [
              "macroprudential",
              "actions",
              "are",
              "policy",
              "impermissible.",
              "posits",
              "ethics",
              "intrinsically",
              "that",
              "certain",
              "Deontological"
            ],
            "targetChinese": "義務倫理學主張某些行為本質上就是不被允許的。",
            "targetSentence": "Deontological ethics posits that certain actions are intrinsically impermissible."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "deontological ethics",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "cognitive processing (認知加工處置)",
                "en": "cognitive processing",
                "zh": "認知加工處置",
                "correct": false
              },
              {
                "text": "deontological ethics (義務論倫理學)",
                "en": "deontological ethics",
                "zh": "義務論倫理學",
                "correct": true
              },
              {
                "text": "cultural iconography (文化標誌圖象)",
                "en": "cultural iconography",
                "zh": "文化標誌圖象",
                "correct": false
              },
              {
                "text": "epistemology (知識認識論)",
                "en": "epistemology",
                "zh": "知識認識論",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "epistemology",
                "zh": "知識認識論"
              },
              {
                "en": "deontological ethics",
                "zh": "義務論倫理學"
              },
              {
                "en": "utilitarianism",
                "zh": "效益功利主義"
              },
              {
                "en": "categorical imperative",
                "zh": "絕對律令"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l5",
        "title": "第 5 關：修辭學大師：隱喻與排比",
        "desc": "掌握 anaphora、antithesis 等核心詞彙",
        "icon": "🖋️",
        "vocabularies": [
          {
            "en": "anaphora",
            "zh": "首字排比重複"
          },
          {
            "en": "antithesis",
            "zh": "對比對照修辭"
          },
          {
            "en": "chiasmus",
            "zh": "交錯迴文修辭"
          },
          {
            "en": "metaphor",
            "zh": "精妙隱喻"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「anaphora」的正確中文意思",
            "en": "anaphora",
            "audioText": "anaphora",
            "instruction": "請問「anaphora」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "fidelity",
                "zh": "忠實準確度",
                "emoji": "📜",
                "correct": false
              },
              {
                "en": "anaphora",
                "zh": "首字排比重複",
                "emoji": "🌍",
                "correct": true
              },
              {
                "en": "chiasmus",
                "zh": "交錯迴文修辭",
                "emoji": "⚖️",
                "correct": false
              },
              {
                "en": "antithesis",
                "zh": "對比對照修辭",
                "emoji": "🏛️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Masterful orators employ anaphora to build emotional crescendo.",
            "instruction": "請看中文重組成英文句子：「高超的演說家善用首語重複法來營造情感高潮。」",
            "targetTokens": [
              "Masterful",
              "orators",
              "employ",
              "anaphora",
              "to",
              "build",
              "emotional",
              "crescendo."
            ],
            "pool": [
              "employ",
              "point",
              "emotional",
              "Masterful",
              "crescendo.",
              "orators",
              "to",
              "anaphora",
              "solemn",
              "build"
            ],
            "targetChinese": "高超的演說家善用首語重複法來營造情感高潮。",
            "targetSentence": "Masterful orators employ anaphora to build emotional crescendo."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "antithesis",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "anaphora (首字排比重複)",
                "en": "anaphora",
                "zh": "首字排比重複",
                "correct": false
              },
              {
                "text": "decoupling (經濟與碳排脫鉤)",
                "en": "decoupling",
                "zh": "經濟與碳排脫鉤",
                "correct": false
              },
              {
                "text": "ephemeral (短暫轉瞬即逝的)",
                "en": "ephemeral",
                "zh": "短暫轉瞬即逝的",
                "correct": false
              },
              {
                "text": "antithesis (對比對照修辭)",
                "en": "antithesis",
                "zh": "對比對照修辭",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "anaphora",
                "zh": "首字排比重複"
              },
              {
                "en": "antithesis",
                "zh": "對比對照修辭"
              },
              {
                "en": "chiasmus",
                "zh": "交錯迴文修辭"
              },
              {
                "en": "metaphor",
                "zh": "精妙隱喻"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l6",
        "title": "第 6 關：數位反托拉斯法與全球壟斷",
        "desc": "掌握 antitrust litigation、monopolistic abuse 等核心詞彙",
        "icon": "⚖️",
        "vocabularies": [
          {
            "en": "antitrust litigation",
            "zh": "反壟斷訴訟"
          },
          {
            "en": "monopolistic abuse",
            "zh": "壟斷濫用行徑"
          },
          {
            "en": "regulatory scrutiny",
            "zh": "監管機構嚴格審查"
          },
          {
            "en": "remedy",
            "zh": "法定處置糾正措施"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「antitrust litigation」的正確中文意思",
            "en": "antitrust litigation",
            "audioText": "antitrust litigation",
            "instruction": "請問「antitrust litigation」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "antitrust litigation",
                "zh": "反壟斷訴訟",
                "emoji": "💎",
                "correct": true
              },
              {
                "en": "regulatory scrutiny",
                "zh": "監管機構嚴格審查",
                "emoji": "🎓",
                "correct": false
              },
              {
                "en": "monopolistic abuse",
                "zh": "壟斷濫用行徑",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "presidential oratory",
                "zh": "總統級演說風範",
                "emoji": "🌐",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Regulators scrutinized platform gatekeepers to prevent monopolistic foreclosure.",
            "instruction": "請看中文重組成英文句子：「監管機構嚴密審查平台守門人以防止壟斷性市場封鎖。」",
            "targetTokens": [
              "Regulators",
              "scrutinized",
              "platform",
              "gatekeepers",
              "to",
              "prevent",
              "monopolistic",
              "foreclosure."
            ],
            "pool": [
              "invocation",
              "monopolistic",
              "trap",
              "scrutinized",
              "to",
              "prevent",
              "gatekeepers",
              "foreclosure.",
              "platform",
              "Regulators"
            ],
            "targetChinese": "監管機構嚴密審查平台守門人以防止壟斷性市場封鎖。",
            "targetSentence": "Regulators scrutinized platform gatekeepers to prevent monopolistic foreclosure."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "monopolistic abuse",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "interstellar probe (星際探測器)",
                "en": "interstellar probe",
                "zh": "星際探測器",
                "correct": false
              },
              {
                "text": "monopolistic abuse (壟斷濫用行徑)",
                "en": "monopolistic abuse",
                "zh": "壟斷濫用行徑",
                "correct": true
              },
              {
                "text": "deterrence posture (軍事嚇阻姿態)",
                "en": "deterrence posture",
                "zh": "軍事嚇阻姿態",
                "correct": false
              },
              {
                "text": "antitrust litigation (反壟斷訴訟)",
                "en": "antitrust litigation",
                "zh": "反壟斷訴訟",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "antitrust litigation",
                "zh": "反壟斷訴訟"
              },
              {
                "en": "monopolistic abuse",
                "zh": "壟斷濫用行徑"
              },
              {
                "en": "regulatory scrutiny",
                "zh": "監管機構嚴格審查"
              },
              {
                "en": "remedy",
                "zh": "法定處置糾正措施"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l7",
        "title": "第 7 關：天體物理與深空探測力學",
        "desc": "掌握 gravitational wave、orbital insertion 等核心詞彙",
        "icon": "🌌",
        "vocabularies": [
          {
            "en": "gravitational wave",
            "zh": "重力引力波"
          },
          {
            "en": "orbital insertion",
            "zh": "軌道切入控制"
          },
          {
            "en": "interstellar probe",
            "zh": "星際探測器"
          },
          {
            "en": "relativity",
            "zh": "廣義相對論"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「gravitational wave」的正確中文意思",
            "en": "gravitational wave",
            "audioText": "gravitational wave",
            "instruction": "請問「gravitational wave」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "orbital insertion",
                "zh": "軌道切入控制",
                "emoji": "🏛️",
                "correct": false
              },
              {
                "en": "gravitational wave",
                "zh": "重力引力波",
                "emoji": "🌍",
                "correct": true
              },
              {
                "en": "interstellar probe",
                "zh": "星際探測器",
                "emoji": "⚖️",
                "correct": false
              },
              {
                "en": "solemn invocation",
                "zh": "莊嚴呼告",
                "emoji": "📜",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Gravitational wave astronomy reveals cataclysmic mergers in deep space.",
            "instruction": "請看中文重組成英文句子：「重力波天文學揭示了深太空中的災難性天體合併。」",
            "targetTokens": [
              "Gravitational",
              "wave",
              "astronomy",
              "reveals",
              "cataclysmic",
              "mergers",
              "in",
              "deep",
              "space."
            ],
            "pool": [
              "astronomy",
              "cataclysmic",
              "ethics",
              "space.",
              "Gravitational",
              "in",
              "target",
              "reveals",
              "wave",
              "deep",
              "mergers"
            ],
            "targetChinese": "重力波天文學揭示了深太空中的災難性天體合併。",
            "targetSentence": "Gravitational wave astronomy reveals cataclysmic mergers in deep space."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "orbital insertion",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "orbital insertion (軌道切入控制)",
                "en": "orbital insertion",
                "zh": "軌道切入控制",
                "correct": true
              },
              {
                "text": "bifurcation point (分岔臨界點)",
                "en": "bifurcation point",
                "zh": "分岔臨界點",
                "correct": false
              },
              {
                "text": "gravitational wave (重力引力波)",
                "en": "gravitational wave",
                "zh": "重力引力波",
                "correct": false
              },
              {
                "text": "solemn invocation (莊嚴呼告)",
                "en": "solemn invocation",
                "zh": "莊嚴呼告",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "gravitational wave",
                "zh": "重力引力波"
              },
              {
                "en": "orbital insertion",
                "zh": "軌道切入控制"
              },
              {
                "en": "interstellar probe",
                "zh": "星際探測器"
              },
              {
                "en": "relativity",
                "zh": "廣義相對論"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l8",
        "title": "第 8 關：體育史學與社會政治變遷",
        "desc": "掌握 sports historiography、civil rights integration 等核心詞彙",
        "icon": "⚾",
        "vocabularies": [
          {
            "en": "sports historiography",
            "zh": "體育歷史編纂學"
          },
          {
            "en": "civil rights integration",
            "zh": "民權種族融合"
          },
          {
            "en": "cultural iconography",
            "zh": "文化標誌圖象"
          },
          {
            "en": "legacy",
            "zh": "深遠遺產傳奇"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「sports historiography」的正確中文意思",
            "en": "sports historiography",
            "audioText": "sports historiography",
            "instruction": "請問「sports historiography」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "sports historiography",
                "zh": "體育歷史編纂學",
                "emoji": "💎",
                "correct": true
              },
              {
                "en": "civil rights integration",
                "zh": "民權種族融合",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "cultural iconography",
                "zh": "文化標誌圖象",
                "emoji": "🎓",
                "correct": false
              },
              {
                "en": "categorical imperative",
                "zh": "絕對律令",
                "emoji": "🌐",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Baseball integration catalyzed broader civil rights progress across society.",
            "instruction": "請看中文重組成英文句子：「棒球運動打破種族隔離促進了整個社會更廣泛的民權進步。」",
            "targetTokens": [
              "Baseball",
              "integration",
              "catalyzed",
              "broader",
              "civil",
              "rights",
              "progress",
              "across",
              "society."
            ],
            "pool": [
              "macroprudential",
              "across",
              "civil",
              "adjustment",
              "catalyzed",
              "rights",
              "progress",
              "broader",
              "society.",
              "Baseball",
              "integration"
            ],
            "targetChinese": "棒球運動打破種族隔離促進了整個社會更廣泛的民權進步。",
            "targetSentence": "Baseball integration catalyzed broader civil rights progress across society."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "civil rights integration",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "systemic financial risk (系統性金融風險)",
                "en": "systemic financial risk",
                "zh": "系統性金融風險",
                "correct": false
              },
              {
                "text": "sports historiography (體育歷史編纂學)",
                "en": "sports historiography",
                "zh": "體育歷史編纂學",
                "correct": false
              },
              {
                "text": "cultural iconography (文化標誌圖象)",
                "en": "cultural iconography",
                "zh": "文化標誌圖象",
                "correct": false
              },
              {
                "text": "civil rights integration (民權種族融合)",
                "en": "civil rights integration",
                "zh": "民權種族融合",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "sports historiography",
                "zh": "體育歷史編纂學"
              },
              {
                "en": "civil rights integration",
                "zh": "民權種族融合"
              },
              {
                "en": "cultural iconography",
                "zh": "文化標誌圖象"
              },
              {
                "en": "legacy",
                "zh": "深遠遺產傳奇"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l9",
        "title": "第 9 關：混沌理論與非線性動力學",
        "desc": "掌握 chaos theory、strange attractor 等核心詞彙",
        "icon": "🌀",
        "vocabularies": [
          {
            "en": "chaos theory",
            "zh": "混沌理論"
          },
          {
            "en": "strange attractor",
            "zh": "奇異吸子"
          },
          {
            "en": "bifurcation point",
            "zh": "分岔臨界點"
          },
          {
            "en": "deterministic",
            "zh": "確定性的"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「chaos theory」的正確中文意思",
            "en": "chaos theory",
            "audioText": "chaos theory",
            "instruction": "請問「chaos theory」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "strange attractor",
                "zh": "奇異吸子",
                "emoji": "🏛️",
                "correct": false
              },
              {
                "en": "chaos theory",
                "zh": "混沌理論",
                "emoji": "🌍",
                "correct": true
              },
              {
                "en": "bifurcation point",
                "zh": "分岔臨界點",
                "emoji": "⚖️",
                "correct": false
              },
              {
                "en": "liquidity trap",
                "zh": "流動性陷阱",
                "emoji": "📜",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Nonlinear systems exhibit sensitive dependence on initial boundary conditions.",
            "instruction": "請看中文重組成英文句子：「非線性系統對初始邊界條件表現出極度敏感的依賴性。」",
            "targetTokens": [
              "Nonlinear",
              "systems",
              "exhibit",
              "sensitive",
              "dependence",
              "on",
              "initial",
              "boundary",
              "conditions."
            ],
            "pool": [
              "historiography",
              "exhibit",
              "boundary",
              "systems",
              "sensitive",
              "on",
              "cognitive",
              "initial",
              "dependence",
              "conditions.",
              "Nonlinear"
            ],
            "targetChinese": "非線性系統對初始邊界條件表現出極度敏感的依賴性。",
            "targetSentence": "Nonlinear systems exhibit sensitive dependence on initial boundary conditions."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "strange attractor",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "strange attractor (奇異吸子)",
                "en": "strange attractor",
                "zh": "奇異吸子",
                "correct": true
              },
              {
                "text": "chaos theory (混沌理論)",
                "en": "chaos theory",
                "zh": "混沌理論",
                "correct": false
              },
              {
                "text": "emissions trading (碳排放交易)",
                "en": "emissions trading",
                "zh": "碳排放交易",
                "correct": false
              },
              {
                "text": "solemn invocation (莊嚴呼告)",
                "en": "solemn invocation",
                "zh": "莊嚴呼告",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "chaos theory",
                "zh": "混沌理論"
              },
              {
                "en": "strange attractor",
                "zh": "奇異吸子"
              },
              {
                "en": "bifurcation point",
                "zh": "分岔臨界點"
              },
              {
                "en": "deterministic",
                "zh": "確定性的"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l10",
        "title": "第 10 關：科技奇點與通用人工智慧 (AGI)",
        "desc": "掌握 technological singularity、artificial general intelligence 等核心詞彙",
        "icon": "🧠",
        "vocabularies": [
          {
            "en": "technological singularity",
            "zh": "技術奇異點"
          },
          {
            "en": "artificial general intelligence",
            "zh": "通用人工智慧AGI"
          },
          {
            "en": "existential risk",
            "zh": "人類存亡風險"
          },
          {
            "en": "superintelligence",
            "zh": "超級智能"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「technological singularity」的正確中文意思",
            "en": "technological singularity",
            "audioText": "technological singularity",
            "instruction": "請問「technological singularity」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "existential risk",
                "zh": "人類存亡風險",
                "emoji": "🎓",
                "correct": false
              },
              {
                "en": "technological singularity",
                "zh": "技術奇異點",
                "emoji": "💎",
                "correct": true
              },
              {
                "en": "artificial general intelligence",
                "zh": "通用人工智慧AGI",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "simultaneous interpretation",
                "zh": "會議同步口譯",
                "emoji": "🌐",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Philosophers scrutinize existential risks associated with artificial superintelligence.",
            "instruction": "請看中文重組成英文句子：「哲學家們嚴格審視與人工超智慧相關的生存風險。」",
            "targetTokens": [
              "Philosophers",
              "scrutinize",
              "existential",
              "risks",
              "associated",
              "with",
              "artificial",
              "superintelligence."
            ],
            "pool": [
              "with",
              "artificial",
              "associated",
              "superintelligence.",
              "scrutinize",
              "existential",
              "Affairs",
              "Philosophers",
              "risks",
              "invocation"
            ],
            "targetChinese": "哲學家們嚴格審視與人工超智慧相關的生存風險。",
            "targetSentence": "Philosophers scrutinize existential risks associated with artificial superintelligence."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "artificial general intelligence",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "technological singularity (技術奇異點)",
                "en": "technological singularity",
                "zh": "技術奇異點",
                "correct": false
              },
              {
                "text": "existential risk (人類存亡風險)",
                "en": "existential risk",
                "zh": "人類存亡風險",
                "correct": false
              },
              {
                "text": "artificial general intelligence (通用人工智慧AGI)",
                "en": "artificial general intelligence",
                "zh": "通用人工智慧AGI",
                "correct": true
              },
              {
                "text": "civil rights integration (民權種族融合)",
                "en": "civil rights integration",
                "zh": "民權種族融合",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "technological singularity",
                "zh": "技術奇異點"
              },
              {
                "en": "artificial general intelligence",
                "zh": "通用人工智慧AGI"
              },
              {
                "en": "existential risk",
                "zh": "人類存亡風險"
              },
              {
                "en": "superintelligence",
                "zh": "超級智能"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l11",
        "title": "第 11 關：全球碳定價與邊境調整稅",
        "desc": "掌握 carbon border adjustment、emissions trading 等核心詞彙",
        "icon": "🌿",
        "vocabularies": [
          {
            "en": "carbon border adjustment",
            "zh": "碳邊境調整機制CBAM"
          },
          {
            "en": "emissions trading",
            "zh": "碳排放交易"
          },
          {
            "en": "decoupling",
            "zh": "經濟與碳排脫鉤"
          },
          {
            "en": "net-zero target",
            "zh": "淨零目標"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「carbon border adjustment」的正確中文意思",
            "en": "carbon border adjustment",
            "audioText": "carbon border adjustment",
            "instruction": "請問「carbon border adjustment」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "civil rights integration",
                "zh": "民權種族融合",
                "emoji": "📜",
                "correct": false
              },
              {
                "en": "carbon border adjustment",
                "zh": "碳邊境調整機制CBAM",
                "emoji": "🌍",
                "correct": true
              },
              {
                "en": "net-zero target",
                "zh": "淨零目標",
                "emoji": "⚖️",
                "correct": false
              },
              {
                "en": "emissions trading",
                "zh": "碳排放交易",
                "emoji": "🏛️",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Carbon border adjustments level competitive fields for decarbonizing industries.",
            "instruction": "請看中文重組成英文句子：「碳邊境調整機制為推動脫碳的產業提供了公平競爭的環境。」",
            "targetTokens": [
              "Carbon",
              "border",
              "adjustments",
              "level",
              "competitive",
              "fields",
              "for",
              "decarbonizing",
              "industries."
            ],
            "pool": [
              "competitive",
              "cognitive",
              "for",
              "decarbonizing",
              "adjustments",
              "fields",
              "Carbon",
              "border",
              "level",
              "industries.",
              "obfuscate"
            ],
            "targetChinese": "碳邊境調整機制為推動脫碳的產業提供了公平競爭的環境。",
            "targetSentence": "Carbon border adjustments level competitive fields for decarbonizing industries."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "emissions trading",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "bifurcation point (分岔臨界點)",
                "en": "bifurcation point",
                "zh": "分岔臨界點",
                "correct": false
              },
              {
                "text": "carbon border adjustment (碳邊境調整機制CBAM)",
                "en": "carbon border adjustment",
                "zh": "碳邊境調整機制CBAM",
                "correct": false
              },
              {
                "text": "emissions trading (碳排放交易)",
                "en": "emissions trading",
                "zh": "碳排放交易",
                "correct": true
              },
              {
                "text": "orbital insertion (軌道切入控制)",
                "en": "orbital insertion",
                "zh": "軌道切入控制",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "carbon border adjustment",
                "zh": "碳邊境調整機制CBAM"
              },
              {
                "en": "emissions trading",
                "zh": "碳排放交易"
              },
              {
                "en": "decoupling",
                "zh": "經濟與碳排脫鉤"
              },
              {
                "en": "net-zero target",
                "zh": "淨零目標"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l12",
        "title": "第 12 關：系統性金融風險與流動性陷阱",
        "desc": "掌握 systemic financial risk、liquidity trap 等核心詞彙",
        "icon": "🏦",
        "vocabularies": [
          {
            "en": "systemic financial risk",
            "zh": "系統性金融風險"
          },
          {
            "en": "liquidity trap",
            "zh": "流動性陷阱"
          },
          {
            "en": "debt deflation",
            "zh": "債務通縮螺旋"
          },
          {
            "en": "macroprudential",
            "zh": "總體審慎監管"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「systemic financial risk」的正確中文意思",
            "en": "systemic financial risk",
            "audioText": "systemic financial risk",
            "instruction": "請問「systemic financial risk」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "civil rights integration",
                "zh": "民權種族融合",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "debt deflation",
                "zh": "債務通縮螺旋",
                "emoji": "🎓",
                "correct": false
              },
              {
                "en": "systemic financial risk",
                "zh": "系統性金融風險",
                "emoji": "💎",
                "correct": true
              },
              {
                "en": "liquidity trap",
                "zh": "流動性陷阱",
                "emoji": "🧠",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Macroprudential regulation shields economies from systemic domino bank insolvencies.",
            "instruction": "請看中文重組成英文句子：「總體審慎監管保護經濟體免受骨牌式銀行破產的系統性衝擊。」",
            "targetTokens": [
              "Macroprudential",
              "regulation",
              "shields",
              "economies",
              "from",
              "systemic",
              "domino",
              "bank",
              "insolvencies."
            ],
            "pool": [
              "from",
              "systemic",
              "Macroprudential",
              "strange",
              "domino",
              "shields",
              "insolvencies.",
              "economies",
              "regulation",
              "bank",
              "legacy"
            ],
            "targetChinese": "總體審慎監管保護經濟體免受骨牌式銀行破產的系統性衝擊。",
            "targetSentence": "Macroprudential regulation shields economies from systemic domino bank insolvencies."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "liquidity trap",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "systemic financial risk (系統性金融風險)",
                "en": "systemic financial risk",
                "zh": "系統性金融風險",
                "correct": false
              },
              {
                "text": "liquidity trap (流動性陷阱)",
                "en": "liquidity trap",
                "zh": "流動性陷阱",
                "correct": true
              },
              {
                "text": "net-zero target (淨零目標)",
                "en": "net-zero target",
                "zh": "淨零目標",
                "correct": false
              },
              {
                "text": "semantic nuance (細微語意神髓)",
                "en": "semantic nuance",
                "zh": "細微語意神髓",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "systemic financial risk",
                "zh": "系統性金融風險"
              },
              {
                "en": "liquidity trap",
                "zh": "流動性陷阱"
              },
              {
                "en": "debt deflation",
                "zh": "債務通縮螺旋"
              },
              {
                "en": "macroprudential",
                "zh": "總體審慎監管"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l13",
        "title": "第 13 關：名家演講修辭深度剖析",
        "desc": "掌握 presidential oratory、rhetorical cadence 等核心詞彙",
        "icon": "👑",
        "vocabularies": [
          {
            "en": "presidential oratory",
            "zh": "總統級演說風範"
          },
          {
            "en": "rhetorical cadence",
            "zh": "修辭節奏抑揚頓挫"
          },
          {
            "en": "solemn invocation",
            "zh": "莊嚴呼告"
          },
          {
            "en": "peroration",
            "zh": "結尾激昂高潮段落"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「presidential oratory」的正確中文意思",
            "en": "presidential oratory",
            "audioText": "presidential oratory",
            "instruction": "請問「presidential oratory」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "presidential oratory",
                "zh": "總統級演說風範",
                "emoji": "🌍",
                "correct": true
              },
              {
                "en": "solemn invocation",
                "zh": "莊嚴呼告",
                "emoji": "⚖️",
                "correct": false
              },
              {
                "en": "rhetorical cadence",
                "zh": "修辭節奏抑揚頓挫",
                "emoji": "🏛️",
                "correct": false
              },
              {
                "en": "deontological ethics",
                "zh": "義務論倫理學",
                "emoji": "📜",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The poignant peroration galvanized the assembly with moral urgency.",
            "instruction": "請看中文重組成英文句子：「感人肺腑的演講結尾以強烈道德使命感鼓舞了全體聽眾。」",
            "targetTokens": [
              "The",
              "poignant",
              "peroration",
              "galvanized",
              "the",
              "assembly",
              "with",
              "moral",
              "urgency."
            ],
            "pool": [
              "with",
              "galvanized",
              "assembly",
              "the",
              "peroration",
              "deflation",
              "poignant",
              "moral",
              "urgency.",
              "The",
              "ephemeral"
            ],
            "targetChinese": "感人肺腑的演講結尾以強烈道德使命感鼓舞了全體聽眾。",
            "targetSentence": "The poignant peroration galvanized the assembly with moral urgency."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "rhetorical cadence",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "presidential oratory (總統級演說風範)",
                "en": "presidential oratory",
                "zh": "總統級演說風範",
                "correct": false
              },
              {
                "text": "rhetorical cadence (修辭節奏抑揚頓挫)",
                "en": "rhetorical cadence",
                "zh": "修辭節奏抑揚頓挫",
                "correct": true
              },
              {
                "text": "monopolistic abuse (壟斷濫用行徑)",
                "en": "monopolistic abuse",
                "zh": "壟斷濫用行徑",
                "correct": false
              },
              {
                "text": "interstellar probe (星際探測器)",
                "en": "interstellar probe",
                "zh": "星際探測器",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "presidential oratory",
                "zh": "總統級演說風範"
              },
              {
                "en": "rhetorical cadence",
                "zh": "修辭節奏抑揚頓挫"
              },
              {
                "en": "solemn invocation",
                "zh": "莊嚴呼告"
              },
              {
                "en": "peroration",
                "zh": "結尾激昂高潮段落"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l14",
        "title": "第 14 關：同步口譯思維與雙向高階轉換",
        "desc": "掌握 simultaneous interpretation、semantic nuance 等核心詞彙",
        "icon": "🎙️",
        "vocabularies": [
          {
            "en": "simultaneous interpretation",
            "zh": "會議同步口譯"
          },
          {
            "en": "semantic nuance",
            "zh": "細微語意神髓"
          },
          {
            "en": "cognitive processing",
            "zh": "認知加工處置"
          },
          {
            "en": "fidelity",
            "zh": "忠實準確度"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「simultaneous interpretation」的正確中文意思",
            "en": "simultaneous interpretation",
            "audioText": "simultaneous interpretation",
            "instruction": "請問「simultaneous interpretation」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "simultaneous interpretation",
                "zh": "會議同步口譯",
                "emoji": "💎",
                "correct": true
              },
              {
                "en": "technological singularity",
                "zh": "技術奇異點",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "semantic nuance",
                "zh": "細微語意神髓",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "cognitive processing",
                "zh": "認知加工處置",
                "emoji": "🎓",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Simultaneous interpreters preserve profound semantic nuances under intense pressure.",
            "instruction": "請看中文重組成英文句子：「同步口譯員在高壓環境下仍能精準保留深層的語意細微差異。」",
            "targetTokens": [
              "Simultaneous",
              "interpreters",
              "preserve",
              "profound",
              "semantic",
              "nuances",
              "under",
              "intense",
              "pressure."
            ],
            "pool": [
              "nuances",
              "preserve",
              "semantic",
              "profound",
              "interpreters",
              "cadence",
              "pressure.",
              "under",
              "artificial",
              "intense",
              "Simultaneous"
            ],
            "targetChinese": "同步口譯員在高壓環境下仍能精準保留深層的語意細微差異。",
            "targetSentence": "Simultaneous interpreters preserve profound semantic nuances under intense pressure."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "semantic nuance",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "simultaneous interpretation (會議同步口譯)",
                "en": "simultaneous interpretation",
                "zh": "會議同步口譯",
                "correct": false
              },
              {
                "text": "Foreign Affairs (外交事務雜誌)",
                "en": "Foreign Affairs",
                "zh": "外交事務雜誌",
                "correct": false
              },
              {
                "text": "semantic nuance (細微語意神髓)",
                "en": "semantic nuance",
                "zh": "細微語意神髓",
                "correct": true
              },
              {
                "text": "net-zero target (淨零目標)",
                "en": "net-zero target",
                "zh": "淨零目標",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "simultaneous interpretation",
                "zh": "會議同步口譯"
              },
              {
                "en": "semantic nuance",
                "zh": "細微語意神髓"
              },
              {
                "en": "cognitive processing",
                "zh": "認知加工處置"
              },
              {
                "en": "fidelity",
                "zh": "忠實準確度"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l15",
        "title": "第 15 關：國際頂尖智庫政策白皮書評鑑",
        "desc": "掌握 policy white paper、strategic foresight 等核心詞彙",
        "icon": "🏛️",
        "vocabularies": [
          {
            "en": "policy white paper",
            "zh": "政策白皮書"
          },
          {
            "en": "strategic foresight",
            "zh": "前瞻戰略遠見"
          },
          {
            "en": "countervailing measures",
            "zh": "平衡反制措施"
          },
          {
            "en": "statutory reform",
            "zh": "法規體制改革"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「policy white paper」的正確中文意思",
            "en": "policy white paper",
            "audioText": "policy white paper",
            "instruction": "請問「policy white paper」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "policy white paper",
                "zh": "政策白皮書",
                "emoji": "🌍",
                "correct": true
              },
              {
                "en": "countervailing measures",
                "zh": "平衡反制措施",
                "emoji": "⚖️",
                "correct": false
              },
              {
                "en": "strategic foresight",
                "zh": "前瞻戰略遠見",
                "emoji": "🏛️",
                "correct": false
              },
              {
                "en": "statutory reform",
                "zh": "法規體制改革",
                "emoji": "📜",
                "correct": false
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "The white paper provides strategic foresight for international diplomatic engagement.",
            "instruction": "請看中文重組成英文句子：「該白皮書為國際外交參與提供了前瞻戰略遠見。」",
            "targetTokens": [
              "The",
              "white",
              "paper",
              "provides",
              "strategic",
              "foresight",
              "for",
              "international",
              "diplomatic",
              "engagement."
            ],
            "pool": [
              "trap",
              "for",
              "strategic",
              "engagement.",
              "conservatism",
              "provides",
              "The",
              "white",
              "paper",
              "diplomatic",
              "international",
              "foresight"
            ],
            "targetChinese": "該白皮書為國際外交參與提供了前瞻戰略遠見。",
            "targetSentence": "The white paper provides strategic foresight for international diplomatic engagement."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "strategic foresight",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "policy white paper (政策白皮書)",
                "en": "policy white paper",
                "zh": "政策白皮書",
                "correct": false
              },
              {
                "text": "interstellar probe (星際探測器)",
                "en": "interstellar probe",
                "zh": "星際探測器",
                "correct": false
              },
              {
                "text": "regulatory scrutiny (監管機構嚴格審查)",
                "en": "regulatory scrutiny",
                "zh": "監管機構嚴格審查",
                "correct": false
              },
              {
                "text": "strategic foresight (前瞻戰略遠見)",
                "en": "strategic foresight",
                "zh": "前瞻戰略遠見",
                "correct": true
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "policy white paper",
                "zh": "政策白皮書"
              },
              {
                "en": "strategic foresight",
                "zh": "前瞻戰略遠見"
              },
              {
                "en": "countervailing measures",
                "zh": "平衡反制措施"
              },
              {
                "en": "statutory reform",
                "zh": "法規體制改革"
              }
            ]
          }
        ]
      },
      {
        "id": "col_adv-l16",
        "title": "第 16 關：全球大師終極加冕殿堂魔王關",
        "desc": "掌握 quintessential、The Economist 等核心詞彙",
        "icon": "👑",
        "vocabularies": [
          {
            "en": "quintessential",
            "zh": "經典典範"
          },
          {
            "en": "The Economist",
            "zh": "經濟學人"
          },
          {
            "en": "multilateral alliance",
            "zh": "多邊同盟"
          },
          {
            "en": "epistemology",
            "zh": "認識論"
          }
        ],
        "questions": [
          {
            "type": "choice",
            "prompt": "選出「quintessential」的正確中文意思",
            "en": "quintessential",
            "audioText": "quintessential",
            "instruction": "請問「quintessential」在繁體中文中是什麼意思？",
            "options": [
              {
                "en": "multilateral alliance",
                "zh": "多邊同盟",
                "emoji": "🎓",
                "correct": false
              },
              {
                "en": "macroprudential",
                "zh": "總體審慎監管",
                "emoji": "🌐",
                "correct": false
              },
              {
                "en": "The Economist",
                "zh": "經濟學人",
                "emoji": "🧠",
                "correct": false
              },
              {
                "en": "quintessential",
                "zh": "經典典範",
                "emoji": "💎",
                "correct": true
              }
            ]
          },
          {
            "type": "scramble",
            "prompt": "點選字卡重組出正確的英文句子",
            "audioText": "Profound knowledge, moral integrity, and relentless perseverance empower visionary leadership.",
            "instruction": "請看中文重組成英文句子：「淵博的學識、高尚的道德品格與不懈的毅力造就遠見卓識的領導力。」",
            "targetTokens": [
              "Profound",
              "knowledge,",
              "moral",
              "integrity,",
              "and",
              "relentless",
              "perseverance",
              "empower",
              "visionary",
              "leadership."
            ],
            "pool": [
              "leadership.",
              "knowledge,",
              "relentless",
              "integrity,",
              "Profound",
              "and",
              "moral",
              "empower",
              "nuance",
              "visionary",
              "perseverance",
              "deterrence"
            ],
            "targetChinese": "淵博的學識、高尚的道德品格與不懈的毅力造就遠見卓識的領導力。",
            "targetSentence": "Profound knowledge, moral integrity, and relentless perseverance empower visionary leadership."
          },
          {
            "type": "listen",
            "prompt": "聽力測驗：點擊喇叭並選出聽到的詞語",
            "audioText": "The Economist",
            "instruction": "點擊喇叭聆聽發音，選出正確意思：",
            "options": [
              {
                "text": "The Economist (經濟學人)",
                "en": "The Economist",
                "zh": "經濟學人",
                "correct": true
              },
              {
                "text": "debt deflation (債務通縮螺旋)",
                "en": "debt deflation",
                "zh": "債務通縮螺旋",
                "correct": false
              },
              {
                "text": "Foreign Affairs (外交事務雜誌)",
                "en": "Foreign Affairs",
                "zh": "外交事務雜誌",
                "correct": false
              },
              {
                "text": "quintessential (經典典範)",
                "en": "quintessential",
                "zh": "經典典範",
                "correct": false
              }
            ]
          },
          {
            "type": "match",
            "prompt": "詞彙對對碰：配對英文與中文",
            "instruction": "點選左側英文與右側對應的繁體中文：",
            "pairs": [
              {
                "en": "quintessential",
                "zh": "經典典範"
              },
              {
                "en": "The Economist",
                "zh": "經濟學人"
              },
              {
                "en": "multilateral alliance",
                "zh": "多邊同盟"
              },
              {
                "en": "epistemology",
                "zh": "認識論"
              }
            ]
          }
        ]
      }
    ]
  }
];
