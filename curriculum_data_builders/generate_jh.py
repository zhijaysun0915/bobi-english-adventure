# -*- coding: utf-8 -*-
"""
Generator for jh_beg (國一 / A2-), jh_mid (國二 / A2), and jh_adv (國三會考 / A2+)
Generates curriculum_data_builders/jh_beg.py, jh_mid.py, and jh_adv.py
Each has exactly 74 curated themes (Lessons 17 to 90).
"""

jh_beg_themes = [
    # Unit 2: 國中校園多元社團與課後活動 (L17-L24)
    ("熱門吉他社彈奏和弦", "🎸", [("guitar", "吉他"), ("chord", "和弦"), ("strum", "刷弦"), ("melody", "旋律")], "He learned to strum basic chords on guitar.", "他學會了在吉他上彈奏基本和弦。"),
    ("熱舞社帥氣排舞練習", "💃", [("dance", "舞蹈"), ("rhythm", "節奏"), ("step", "舞步"), ("routine", "排舞套路")], "The dance club practices routine together.", "熱舞社社員們一起練習帥氣排舞。"),
    ("熱門音樂社狂野爵士鼓", "🥁", [("drums", "爵士鼓"), ("beat", "節拍"), ("stick", "鼓棒"), ("band", "樂團")], "The drummer keeps the fast rock beat.", "鼓手掌控著全團快速奔放的搖滾節奏。"),
    ("童軍團搭帳棚與繩結手藝", "🏕️", [("scout", "童軍"), ("knot", "繩結"), ("tie", "繫綁"), ("pioneer", "工程開拓")], "Scouts learn how to tie sturdy knots.", "童軍們學習如何打出牢固可靠的工程繩結。"),
    ("管樂隊銅管吹奏合奏", "🎺", [("trumpet", "小號"), ("brass", "銅管"), ("rehearse", "排練"), ("concert", "音樂會")], "The brass section rehearses for the concert.", "銅管聲部正為即將到來的音樂會緊張排練。"),
    ("書法社揮毫筆墨紙硯", "🖌️", [("calligraphy", "書法"), ("brush", "毛筆"), ("ink", "墨汁"), ("character", "漢字")], "Dip the brush into dark black ink.", "將毛筆尖端輕輕蘸入濃黑墨汁中。"),
    ("益智桌遊社策略攻防", "🎲", [("board game", "桌遊"), ("strategy", "策略"), ("dice", "骰子"), ("turn", "回合")], "Roll the dice when it is your turn.", "輪到你的回合時擲出命運的骰子。"),
    ("國中多元社團博覽會星章", "🏅", [("club", "社團"), ("passion", "熱情"), ("talent", "才藝"), ("showcase", "展示成果")], "Every club showcases its best talents.", "每個學生社團都爭相展現最耀眼的才藝。"),

    # Unit 3: 校慶運動會與榮譽班際賽 (L25-L32)
    ("班際大隊接力賽交接棒", "🏃", [("relay race", "大隊接力"), ("baton", "接力棒"), ("pass", "傳遞"), ("sprint", "衝刺")], "Pass the baton quickly without dropping it.", "迅速確實交接棒切勿發生掉棒失誤。"),
    ("拔河比賽一二殺齊心協力", "🪢", [("tug-of-war", "拔河"), ("rope", "粗繩"), ("pull", "拉扯"), ("heave", "齊步後拉")], "Pull the rope together with all your strength.", "全班齊心協力使出吃奶力氣拉緊粗繩。"),
    ("跳高過竿背向式挑戰", "🦘", [("high jump", "跳高"), ("bar", "橫竿"), ("leap", "縱身一躍"), ("mat", "厚海綿墊")], "He cleared the bar with a graceful leap.", "他以優雅的縱身一躍順利翻過橫竿。"),
    ("跳遠沙坑助跑加速踏板", "🏖️", [("long jump", "跳遠"), ("takeoff board", "起跳板"), ("sandpit", "沙坑"), ("distance", "距離")], "Sprint fast before stepping on takeoff board.", "在踏上起跳板之前全力加速助跑衝刺。"),
    ("百米短跑終點線壓線", "⚡", [("dash", "短跑"), ("starting block", "起跑架"), ("whistle", "哨聲"), ("record", "大會紀錄")], "He sprinted across the line in ten seconds.", "他以十秒的驚人速度率先衝過了終點線。"),
    ("大會操整齊劃一精神抖擻", "🤸", [("calisthenics", "大會操"), ("unison", "整齊劃一"), ("formation", "隊形變化"), ("cheer", "加油喝采")], "The students performed movements in unison.", "全體學生精神抖擻地做出整齊劃一的動作。"),
    ("班級進場口號創意隊呼", "📢", [("slogan", "精神口號"), ("banner", "班級布條"), ("march", "精神進場"), ("costume", "創意裝扮")], "Our class chanted our loud spirit slogan.", "我們班齊聲高呼響徹雲霄的熱血隊呼。"),
    ("全校運動總錦標大滿貫", "🏆", [("overall champion", "精神總錦標"), ("victory", "勝利榮光"), ("pride", "班級榮譽"), ("celebration", "慶功會")], "Our class won the overall sports championship.", "我們班榮獲全校運動會精神總錦標大獎！"),

    # Unit 4: 台灣特色小吃與夜市風情 (L33-L40)
    ("夜市排隊人氣珍珠奶茶", "🧋", [("boba", "波霸粉圓"), ("milk tea", "奶茶"), ("sweetness", "甜度"), ("straw", "粗吸管")], "Boba milk tea is popular worldwide.", "波霸珍珠奶茶深受全世界各地饕客喜愛。"),
    ("香脆鮮嫩大雞排撒胡椒鹽", "🍗", [("fried chicken", "香雞排"), ("crispy", "金黃酥脆的"), ("pepper", "胡椒鹽"), ("tender", "肉質鮮嫩的")], "The fried chicken cutlet is hot and crispy.", "剛炸起鍋的大雞排金黃酥脆香氣四溢。"),
    ("香濃熱騰騰清蒸小籠湯包", "🥟", [("soup dumpling", "小籠湯包"), ("broth", "鮮甜湯汁"), ("ginger", "薑絲"), ("steam", "蒸籠熱氣")], "Dip the soup dumpling in vinegar and ginger.", "將小籠湯包沾上黑醋與細嫩新鮮薑絲。"),
    ("金黃酥脆外酥內嫩臭豆腐", "🥢", [("stinky tofu", "臭豆腐"), ("pickled cabbage", "台式泡菜"), ("crisp", "外皮酥脆的"), ("sauce", "蒜蓉醬汁")], "Enjoy crisp stinky tofu with pickled cabbage.", "品嚐外酥內嫩的臭豆腐搭配爽脆台式泡菜。"),
    ("鮮甜肥美蚵仔煎淋上甜辣醬", "🍳", [("oyster omelet", "蚵仔煎"), ("sweet and spicy sauce", "甜辣醬"), ("lettuce", "小白菜"), ("pan-fry", "平底鍋香煎")], "The oyster omelet is topped with special sauce.", "熱呼呼的蚵仔煎淋上特調甜辣醬令人垂涎。"),
    ("香濃滷肉飯配上一顆滷蛋", "🍚", [("braised pork rice", "滷肉飯"), ("flavorful", "濃郁入味的"), ("braised egg", "香滷蛋"), ("bowl", "大碗瓷碗")], "A warm bowl of braised pork rice tastes amazing.", "一碗熱騰騰香噴噴的滷肉飯滋味無比美妙。"),
    ("夜市射氣球撈金魚熱鬧非凡", "🎈", [("night market", "觀光夜市"), ("stall", "攤位攤販"), ("prize", "獎品玩偶"), ("crowd", "熱鬧人潮")], "We played games and won prizes at night market.", "我們在夜市攤位挑戰遊戲並贏回可愛玩偶。"),
    ("台灣夜市美食文化觀光大賞", "🏮", [("cuisine", "在地美食"), ("hospitality", "熱情好客"), ("tradition", "優良傳統"), ("recommend", "大力推薦")], "Foreign visitors love friendly Taiwanese hospitality.", "外國遊客對台灣熱情好客的夜市文化讚不絕口。"),

    # Unit 5: 台灣名勝古蹟與自然壯景 (L41-L48)
    ("台北101俯瞰繁華夜景天際線", "🏙️", [("skyscraper", "摩天大樓"), ("observatory", "觀景台"), ("night view", "璀璨夜景"), ("damper", "風阻尼球")], "The observatory offers a stunning city night view.", "從觀景台居高臨下俯瞰整座城市璀璨夜景。"),
    ("故宮博物院鑑賞翠玉白菜", "🏺", [("Palace Museum", "故宮博物院"), ("artifact", "歷史文物"), ("Jadeite Cabbage", "翠玉白菜"), ("treasure", "稀世國寶")], "The Jadeite Cabbage is a celebrated museum treasure.", "翠玉白菜是故宮博物院享譽盛名的稀世國寶。"),
    ("日月潭晨霧繚繞環湖單車行", "🚴", [("Sun Moon Lake", "日月潭"), ("mist", "晨霧"), ("cycle path", "環湖自行車道"), ("scenery", "秀麗湖光山色")], "Bike around the lake covered in morning mist.", "沿著清晨薄霧繚繞的環湖自行車道悠閒騎乘。"),
    ("阿里山搭乘小火車遠眺祝山日出", "🚂", [("Alishan", "阿里山"), ("forest railway", "森林小火車"), ("sunrise", "祝山日出"), ("sea of clouds", "壯麗雲海")], "Catch the forest train to view the sunrise.", "搭乘古色古香的森林火車登祝山迎接第一道日出。"),
    ("太魯閣國家公園鬼斧神工大理石峽谷", "⛰️", [("Taroko Gorge", "太魯閣峽谷"), ("marble", "大理石岩層"), ("cliff", "險峻峭壁"), ("canyon", "壯麗峽谷")], "The sheer marble cliffs tower above the river.", "鬼斧神工的大理石絕壁高聳聳立在溪谷上方。"),
    ("墾丁白沙灣衝浪戲水碧海藍天", "🏄", [("Kenting", "墾丁"), ("beach", "沙灘"), ("waves", "海浪"), ("coral reef", "珊瑚礁海岸")], "Tourists enjoy swimming in warm ocean waves.", "遊客們在碧海藍天與溫暖浪潮中盡情暢游。"),
    ("平溪老街鐵道放天燈許願", "🏮", [("sky lantern", "天燈"), ("wish", "祈福心願"), ("railway track", "鐵道"), ("release", "施放升空")], "Write your dreams on the paper lantern.", "把心中最美好的夢想寫在冉冉升起的天燈上。"),
    ("台灣寶島自然與人文旅行金牌", "🗺️", [("island", "美麗寶島"), ("heritage", "文化遺產"), ("landscape", "自然地貌"), ("journey", "心靈旅程")], "Taiwan is famous for its natural scenic landscapes.", "台灣以其豐富壯麗的自然景致享譽國際。"),

    # Unit 6: 國一生物科學探秘 (L49-L56)
    ("光學顯微鏡觀察洋蔥表皮細胞", "🔬", [("microscope", "顯微鏡"), ("cell wall", "細胞壁"), ("nucleus", "細胞核"), ("slide", "載玻片")], "Observe onion skin cells under the microscope.", "在光學顯微鏡下仔細觀察洋蔥表皮細胞。"),
    ("綠色植物葉綠體光合作用製造養分", "🌿", [("photosynthesis", "光合作用"), ("chloroplast", "葉綠體"), ("glucose", "葡萄糖"), ("oxygen", "氧氣")], "Chloroplasts produce glucose using sunlight.", "葉綠體吸收日光能量以製造植物所需的葡萄糖。"),
    ("人體心臟搏動與血液循環路徑", "🫀", [("heart", "心臟"), ("artery", "動脈"), ("vein", "靜脈"), ("circulation", "血液循環")], "Blood travels through arteries and veins.", "血液經由動脈與靜脈在人體全身循環流動。"),
    ("人體消化系統胃酸與小腸絨毛", "🥣", [("digestion", "消化"), ("stomach", "胃"), ("small intestine", "小腸"), ("absorb", "吸收養分")], "The small intestine absorbs vital nutrients.", "小腸內壁絨毛高效吸收人體所需的核心營養。"),
    ("人體骨骼關節支撐與骨骼肌運動", "🦴", [("skeleton", "骨骼"), ("joint", "關節"), ("muscle", "肌肉"), ("support", "支撐身體")], "Bones and muscles allow our bodies to move.", "骨骼與肌肉協同運作支撐我們身體靈活運動。"),
    ("神經元突觸傳導與膝跳反射弧", "⚡", [("neuron", "神經元"), ("reflex", "反射動作"), ("nerve", "神經纖維"), ("stimulus", "外界刺激")], "A reflex action occurs without brain thinking.", "反射動作能在不經由大腦思考下迅速做出反應。"),
    ("孟德爾豌豆雜交遺傳基因定律", "🫛", [("genetics", "遺傳學"), ("gene", "基因"), ("trait", "性狀表徵"), ("allele", "等位基因")], "Mendel uncovered the secrets of inheritance.", "孟德爾揭開了生物界基因世代相傳的奧秘。"),
    ("國一生物自然科學實驗金牌", "🧬", [("experiment", "科學實驗"), ("hypothesis", "科學假說"), ("data", "觀察數據"), ("conclusion", "嚴謹結論")], "Draw logical conclusions from experiment data.", "根據實驗觀察數據推導出符合邏輯的嚴謹結論。"),

    # Unit 7: 生態保育與大自然食物鏈 (L57-L64)
    ("綠色植物生產者與草食初級消費者", "🌾", [("producer", "生產者"), ("herbivore", "初級草食動物"), ("sunlight", "陽光"), ("food web", "食物網")], "Plants are essential producers in the ecosystem.", "綠色植物是自然生態系統中最重要的生產者。"),
    ("猛禽肉食次級消費者老鷹翱翔", "🦅", [("carnivore", "肉食性動物"), ("predator", "掠食者"), ("eagle", "老鷹"), ("prey", "獵物")], "The eagle is an apex predator with keen vision.", "老鷹是天空中擁有敏銳視覺的頂級掠食者。"),
    ("土壤細菌與真菌自然分解者", "🍄", [("decomposer", "分解者"), ("fungi", "真菌"), ("decay", "分解腐化"), ("recycle", "養分循環")], "Decomposers return organic nutrients to soil.", "分解者將有機物分解讓養分回歸大自然土壤。"),
    ("外來種福壽螺威脅本土水稻田", "🐌", [("invasive species", "外來入侵種"), ("native", "本土原生種"), ("threat", "生存威脅"), ("balance", "生態平衡")], "Invasive species disrupt local ecological balance.", "外來入侵物種嚴重衝擊破壞本土生態平衡。"),
    ("保護瀕危台灣黑熊與石虎棲地", "🐻", [("endangered", "瀕危的"), ("Formosan black bear", "台灣黑熊"), ("leopard cat", "石虎"), ("habitat", "自然棲地")], "Protect the forest habitats of endangered bears.", "全面守護瀕臨絕種台灣黑熊的重要森林棲地。"),
    ("熱帶雨林大面積砍伐與碳吸存危機", "🌳", [("deforestation", "森林砍伐"), ("climate", "氣候變遷"), ("carbon sink", "碳匯"), ("conserve", "嚴加保育")], "Stop deforestation to preserve the planet.", "立即遏止毀林行為以保護地球珍貴的雨林生態。"),
    ("濕地候鳥水鳥過境黑面琵鷺保護區", "🦤", [("wetland", "濕地保護區"), ("migratory bird", "過境候鳥"), ("black-faced spoonbill", "黑面琵鷺"), ("sanctuary", "鳥類保護區")], "Thousands of spoonbills winter in coastal wetlands.", "成千上萬的黑面琵鷺飛抵沿海濕地避寒過冬。"),
    ("地球生態系環境保護大使勛章", "🌿", [("biodiversity", "生物多樣性"), ("conservation", "生態保育"), ("sustainable", "永續發展"), ("future", "世代未來")], "Conserve rich biodiversity for our future generations.", "為我們的下一代全力守護地球豐富的生物多樣性。"),

    # Unit 8: 國一基礎文法：代名詞與量詞 (L65-L72)
    ("代名詞主格受格與所有格大解析", "👥", [("subject pronoun", "主格代名詞"), ("object pronoun", "受格代名詞"), ("possessive", "所有格"), ("refer to", "指涉代稱")], "She lent her textbook to him yesterday.", "她昨天大方地把自己的課本借給了他。"),
    ("不可數名詞單位量詞：一杯茶與一袋糖", "🍵", [("a cup of", "一杯"), ("a piece of", "一片/一張"), ("a bowl of", "一碗"), ("unit", "計量單位")], "Please give me a cup of hot tea.", "請遞給我一杯熱騰騰的無糖綠茶。"),
    ("這群與那些：指示代名詞單複數區辨", "👉", [("this", "這個"), ("these", "這些"), ("that", "那個"), ("those", "那些")], "Those books belong to the school library.", "那一排書架上的精美圖書屬於學校圖書館。"),
    ("祈使句型：請保持安靜與遵守校規", "🤫", [("imperative", "祈使句"), ("quiet", "保持安靜"), ("follow", "嚴格遵守"), ("rule", "校規準則")], "Please be quiet in the study hall.", "在自習自修教室內請大家務必保持安靜。"),
    ("助動詞 can / could / may 禮貌徵詢許可", "🙋", [("may I", "我可以...嗎"), ("permit", "准許許可"), ("polite", "彬彬有禮的"), ("request", "提出請求")], "May I borrow your eraser for a moment?", "請問我可以借用一下您的橡皮擦片刻嗎？"),
    ("連鎖對等連接詞：and, but, or, so 邏輯串連", "🔗", [("and", "而且並列"), ("but", "但是轉折"), ("or", "或者選擇"), ("so", "所以因果")], "He was tired but he kept studying hard.", "他雖然身體疲憊，但依然堅持挑燈夜戰努力讀書。"),
    ("時間介系詞：at 幾點, on 某天, in 年月季節", "⏰", [("at noon", "在中午"), ("on Sunday", "在星期日"), ("in winter", "在冬季"), ("preposition", "介系詞")], "The meeting starts at eight on Monday.", "這場關鍵會議將於星期一上午八點整準時召開。"),
    ("國中文法結構扎根大滿貫試煉", "📝", [("grammar rule", "文法準則"), ("accuracy", "精準無誤"), ("sentence pattern", "基礎句型"), ("mastery", "全面掌握")], "Master basic sentence patterns through diligent practice.", "透過扎實刻苦的課後練習全面掌握國中文法句型。"),

    # Unit 9: 段考複習與應考搶分密技 (L73-L80)
    ("英語段考聽力測驗畫重點抓關鍵字", "🎧", [("listening exam", "英聽測驗"), ("keyword", "關鍵詞"), ("anticipate", "預期題意"), ("score", "奪下高分")], "Underline key words before the listening starts.", "在英聽廣播開始播放前快速劃出題目關鍵字。"),
    ("閱讀測驗首尾段段落大意快速掃讀", "📖", [("skimming", "快速略讀"), ("scanning", "精準尋讀"), ("main idea", "段落主旨"), ("passage", "長篇文章")], "Skim the first paragraph to grasp the main idea.", "略讀文章首段以便迅速掌握整篇短文核心大意。"),
    ("克漏字上下文詞性與時態一致性檢查", "✍️", [("cloze test", "克漏字測驗"), ("context", "上下文語境"), ("tense", "時態呼應"), ("part of speech", "詞性判別")], "Check whether the tense matches past events.", "仔細檢查空格動詞時態是否與過去事件前後呼應。"),
    ("數學段考平面幾何三角形角度計算", "📐", [("geometry", "幾何學"), ("triangle", "三角形"), ("angle", "內角"), ("sum", "角度總和")], "The sum of interior angles in a triangle is 180.", "平面三角形的三個內角角度總和必定等於180度。"),
    ("段考錯題訂正本整理與觀念釐清", "📓", [("correction notebook", "錯題筆記本"), ("analyze", "剖析原因"), ("mistake", "常犯盲點"), ("concept", "清晰觀念")], "Review mistakes in your correction notebook regularly.", "平時定期翻閱錯題本有助於徹底釐清錯誤觀念。"),
    ("考前作息調配充足睡眠與深呼吸", "🛌", [("routine", "生活作息"), ("sleep", "充足睡眠"), ("deep breath", "深呼吸"), ("relax", "放鬆心情")], "A good night of sleep sharpens your brain.", "考前充足飽滿的優質睡眠能讓大腦思維更敏捷。"),
    ("作答時間分配留五分鐘全卷劃卡檢查", "⏱️", [("time management", "時間管理"), ("answer sheet", "電腦答案卡"), ("double check", "複查驗算"), ("neat", "劃記工整")], "Leave five minutes to double check the answer sheet.", "務必預留至少五分鐘仔細檢查電腦卡劃記有無跳題。"),
    ("國一段考全科金榜題名狀元獎", "🥇", [("top student", "全校榜首"), ("honor roll", "榮譽榜"), ("diligent", "勤勉向學"), ("excellence", "卓越表現")], "Hard work leads to academic excellence and pride.", "平時持之以恆的勤勉苦讀終能迎來卓越輝煌成就。"),

    # Unit 10: 國一成長里程與同窗情誼 (L81-L88)
    ("國一新生活動相遇認識新同學", "🤝", [("orientation", "新生訓練"), ("classmate", "同窗同學"), ("friendly", "親切友善的"), ("beginning", "嶄新開端")], "We made new friends during school orientation.", "在新生訓練初次見面會中我們結識了許多熱情好友。"),
    ("園遊會班級攤位製作手工餅乾", "🍪", [("school fair", "校慶園遊會"), ("bake", "親手烘焙"), ("cookies", "手工餅乾"), ("profit", "班費基金")], "Our class sold homemade cookies at the fair.", "我們全班在園遊會攤位熱烈叫賣親手烤的美味餅乾。"),
    ("班會幹部選舉為大家服務奉獻", "🗳️", [("class election", "班會幹部選舉"), ("serve", "為班級服務"), ("responsible", "負責盡職的"), ("vote", "神聖一票")], "Cast your vote for a responsible class leader.", "投下手中神聖一票選出認真負責的班級服務幹部。"),
    ("打掃時間全班協力打掃校園走廊", "🧹", [("cleaning duty", "整潔打掃時間"), ("corridor", "校舍走廊"), ("mop", "拖把拖地"), ("sparkling", "窗明几淨的")], "Clean the classroom corridor until it sparkles.", "全班齊心把教室門外走廊拖拭得窗明几淨亮麗。"),
    ("跨年許願給未來自己的時光膠囊信", "✉️", [("time capsule", "時光膠囊"), ("future self", "未來的自己"), ("letter", "書信文字"), ("cherish", "細心珍藏")], "Write an inspiring letter to your future self.", "寫一封充滿勉勵與期許的深情信件給未來的自己。"),
    ("與良師促膝長談化解迷惘與困惑", "☕", [("guidance counselor", "輔導老師"), ("advice", "寶貴建議"), ("listening", "傾聽心聲"), ("encourage", "溫暖鼓勵")], "The teacher encouraged us to pursue our dreams.", "班導師語重心長地鼓勵我們勇敢追求心中遠大夢想。"),
    ("國一生活回顧相簿點滴笑容回憶", "📷", [("memories", "青澀回憶"), ("album", "成長相簿"), ("laughter", "歡聲笑語"), ("grow", "成長茁壯")], "Browse through photos filled with cheerful laughter.", "翻閱著一張張記錄著青澀歡聲笑語的成長照片相簿。"),
    ("國中初級修煉圓滿勇闖國二新境", "🚀", [("promotion", "升級晉升"), ("adventure", "大冒險"), ("ready", "萬全就緒"), ("confidence", "無比自信")], "Step into the eighth grade with burning confidence.", "帶著無比燃燒的自信與堅定勇氣昂首邁入國二殿堂！"),

    # Final Milestone for jh_beg (L89-L90)
    ("國中初級1200常用單字極限試煉", "📚", [("vocabulary", "1200常用字"), ("definition", "精準釋義"), ("spelling", "單字拼寫"), ("comprehension", "文意理解")], "Prove your total command of twelve hundred words.", "全面展現對教育部國中千二常用字彙的精闢熟稔！"),
    ("波波熱血少俠國一結業榮耀授勳", "👑", [("honor", "無上榮譽"), ("badge", "英雄勳章"), ("warrior", "勇者少俠"), ("triumph", "大獲全勝")], "You have conquered the seventh grade challenge.", "恭喜你！成功全破國一初級試煉，榮獲熱血少俠授勳！"),
]

jh_mid_themes = [
    # Unit 2: 國二理化光學與聲音奧秘 (L17-L24)
    ("聲音三要素：音調響度與音色共振", "🔊", [("pitch", "音調高低"), ("loudness", "響度大小"), ("timbre", "獨特音色"), ("resonance", "共鳴共振")], "Pitch depends on the frequency of sound waves.", "聲音音調的高低取決於聲波震動頻率的快慢。"),
    ("波的傳播：橫波縱波波長與振幅", "〰️", [("transverse wave", "橫波高低波"), ("longitudinal wave", "縱波疏密波"), ("wavelength", "波長"), ("amplitude", "振幅")], "Wavelength is the distance between wave crests.", "波長是指波形中相鄰兩個波峰之間的直線距離。"),
    ("光線反射定律與平面鏡對稱成像", "🪞", [("reflection", "光之反射"), ("incident angle", "入射角"), ("plane mirror", "平面鏡"), ("symmetry", "對稱虛像")], "The angle of incidence equals reflection angle.", "光線在平滑鏡面上的入射角必定等於其反射角。"),
    ("光的折射：光從空氣斜射入水中", "🌊", [("refraction", "光之折射"), ("medium", "介質介質"), ("normal line", "法線"), ("bend", "光線偏折")], "Light bends toward the normal line in water.", "當光線從空氣斜射入水中時會向著法線方向偏折。"),
    ("凸透鏡聚光成像與倒立實像", "🔍", [("convex lens", "凸透鏡"), ("focal point", "焦點焦距"), ("real image", "倒立實像"), ("converge", "匯聚光線")], "A convex lens converges parallel rays of light.", "雙凸透鏡能將平行的入射光束匯聚在焦點位置。"),
    ("凹透鏡發散光線與近視眼鏡原理", "👓", [("concave lens", "凹透鏡"), ("diverge", "發散光線"), ("nearsightedness", "近視眼"), ("correct", "矯正視力")], "Concave lenses help correct nearsighted vision.", "凹透鏡能將光線向外發散以有效矯正近視患者視力。"),
    ("三稜鏡散射太陽白光為七色彩虹", "🌈", [("prism", "三稜鏡"), ("dispersion", "光的色散"), ("spectrum", "光譜光線"), ("rainbow", "彩虹色彩")], "A glass prism disperses white light into spectrum.", "透明玻璃三稜鏡能將太陽白光色散為美麗彩色光譜。"),
    ("國二理化光學與聲學實驗金牌", "🏆", [("physics", "物理學科"), ("optics", "幾何光學"), ("acoustics", "聲學實驗"), ("discover", "探究奧妙")], "Explore the wonders of optics and acoustic waves.", "深入探究大自然界中幾何光學與聲波傳播的神奇奧秘。"),

    # Unit 3: 國二理化熱學與物質變化 (L25-L32)
    ("溫度計水銀膨脹與熱平衡原理", "🌡️", [("temperature", "溫度標度"), ("thermal equilibrium", "熱平衡"), ("expand", "熱脹冷縮"), ("thermometer", "溫度計")], "Heat flows until thermal equilibrium is reached.", "熱量持續由高溫處傳遞直至兩物體達成熱平衡狀態。"),
    ("比熱容量：水比砂石吸熱升溫慢", "🏖️", [("specific heat", "比熱容量"), ("absorb heat", "吸收熱量"), ("temperature rise", "溫升幅度"), ("calorie", "卡路里")], "Water has high specific heat compared to sand.", "水與砂石相較之下具有極大的比熱容故升溫較緩慢。"),
    ("熱傳播三途徑：傳導對流與輻射", "♨️", [("conduction", "固體傳導"), ("convection", "流體對流"), ("radiation", "電磁輻射"), ("vacuum", "真空環境")], "Sunlight travels through space via thermal radiation.", "溫暖的太陽光熱能透過電磁波熱輻射穿透太空傳遞。"),
    ("純物質與混合物物理分離法過濾蒸餾", "🧪", [("pure substance", "純物質"), ("mixture", "混合物"), ("filtration", "漏斗過濾"), ("distillation", "蒸餾提純")], "Distillation separates liquids by boiling points.", "蒸餾法利用各液體成分沸點高低差異進行有效分離。"),
    ("原子的微觀結構：質子中子與電子", "⚛️", [("atom", "原子結構"), ("proton", "質子正電"), ("neutron", "中子不帶電"), ("electron", "核外電子")], "Electrons orbit the dense atomic nucleus.", "帶有負電荷的電子圍繞在緻密的原子核外圍運動。"),
    ("元素週期表規律：鹼金屬與鹵素", "📋", [("periodic table", "元素週期表"), ("alkali metal", "鹼金屬"), ("halogen", "鹵素族"), ("reactive", "化學活性高的")], "Alkali metals react violently with cold water.", "第一族鹼金屬元素與常溫常壓水接觸會發生劇烈反應。"),
    ("化學式與莫耳數換算：六乘十的二十三次方", "🧮", [("mole", "莫耳單位"), ("Avogadro constant", "亞佛加厥常數"), ("molecular weight", "分子量"), ("quantity", "粒子數目")], "One mole contains Avogadros number of molecules.", "一莫耳純物質內部恰好含有亞佛加厥常數個微觀分子。"),
    ("國二理化化學計量與分子大師", "🏅", [("chemistry", "化學科學"), ("formula", "化學式"), ("calculate", "精算莫耳"), ("expert", "卓越專家")], "Master chemical formulas and mole calculations accurately.", "精準且熟練地掌握化學反應計量與莫耳數換算技巧。"),

    # Unit 4: 國二理化化學反應與酸鹼鹽 (L33-L40)
    ("質量守恆定律：密閉容器反應前後不變", "⚖️", [("law of conservation of mass", "質量守恆定律"), ("closed system", "密閉容器系統"), ("reactant", "反應物"), ("product", "生成物")], "Total mass remains unchanged during chemical reactions.", "在密閉系統中化學反應前反應物總質量必等於生成物。"),
    ("氧化還原反應：高爐煉鐵奪氧還原", "🔥", [("oxidation", "氧化失去電子"), ("reduction", "還原得到電子"), ("blast furnace", "煉鐵高爐"), ("iron ore", "鐵礦石")], "Carbon reduces iron ore to produce pure iron.", "在巨大高爐中焦炭將氧化鐵礦石還原為純淨鐵金屬。"),
    ("酸鹼指示劑：石蕊試紙與酚酞變色", "🧫", [("indicator", "酸鹼指示劑"), ("litmus paper", "石蕊試紙"), ("phenolphthalein", "酚酞試劑"), ("color change", "變色反應")], "Phenolphthalein turns bright pink in basic solutions.", "無色酚酞試劑滴入鹼性溶液中會立即顯現鮮豔粉紅色。"),
    ("酸鹼中和反應生成鹽類並放出熱量", "🧂", [("neutralization", "酸鹼中和"), ("acid", "強酸溶液"), ("base", "強鹼溶液"), ("salt", "中性鹽類")], "Acid and base neutralize to form salt and water.", "酸與鹼發生中和反應生成相對應之鹽類、水並放出熱能。"),
    ("影響反應速率四大要素：溫度濃度接觸面積催化劑", "⚡", [("reaction rate", "反應速率"), ("concentration", "濃度"), ("surface area", "接觸表面積"), ("catalyst", "化學催化劑")], "A catalyst speeds up reactions without being consumed.", "催化劑能顯著加快反應速率而在化學反應前後不被消耗。"),
    ("化學平衡動態平衡：勒沙特列原理反抗改變", "⚖️", [("dynamic equilibrium", "動態化學平衡"), ("Le Chatelier principle", "勒沙特列原理"), ("forward reaction", "正向反應"), ("reverse", "逆向反應")], "The system shifts to counteract external changes.", "動態平衡系統將自動朝向抵消外界擾動改變方向移動。"),
    ("有機化合物世界：烴類烷類醇類酯類", "🧴", [("organic compound", "有機化合物"), ("hydrocarbon", "碳氫化合物"), ("alcohol", "乙醇酒精"), ("ester", "具水果香酯類")], "Esters give pleasant fruity scents to flowers.", "具有特殊水果甜香氣味的有機酯類廣泛存在於芳香花草。"),
    ("國二理化實驗室安全防護最高準則", "🥽", [("safety goggles", "護目鏡"), ("lab coat", "實驗衣"), ("hazard", "危險化學品"), ("precaution", "防護措施")], "Always wear protective goggles in chemistry laboratories.", "進入化學實驗室操作時務必全程配戴安全防護護目鏡。"),

    # Unit 5: 力與運動大定律 (L41-L48)
    ("牛頓第一運動定律：慣性定律動者恆動", "🛹", [("inertia", "慣性定律"), ("First Law", "牛頓第一定律"), ("frictionless", "完全無摩擦力"), ("velocity", "等速度直線運動")], "An object in motion remains in constant motion.", "不受外力或合力為零時動者恆沿直線做等速度運動。"),
    ("牛頓第二運動定律：加速度正比合力倒比質量", "🏎️", [("acceleration", "加速度 a"), ("net force", "合力 F"), ("mass", "物體質量 m"), ("Second Law", "牛頓第二定律")], "Net force equals mass multiplied by acceleration.", "物體所受之外力合力必定等於其質量與加速度的乘積。"),
    ("牛頓第三運動定律：作用力與反作用力成對出現", "🚀", [("action and reaction", "作用與反作用力"), ("equal and opposite", "大小相等方向相反"), ("rocket launch", "火箭噴氣升空"), ("recoil", "後座力")], "Action and reaction forces are equal and opposite.", "作用力與反作用力大小完全相等方向相反且作用在不同物體。"),
    ("摩擦力兩大類型：靜摩擦力與動摩擦力", "⛸️", [("friction", "摩擦力"), ("static friction", "最大靜摩擦力"), ("kinetic friction", "滑動摩擦力"), ("roughness", "表面粗糙度")], "Static friction prevents heavy boxes from sliding.", "最大靜摩擦力阻擋並支撐著沉重箱子不至於輕易滑動。"),
    ("固體與流體壓力：單位受力面積正向受力", "📐", [("pressure", "壓力大小 P"), ("force per unit area", "單位面積受力"), ("depth", "液體深度"), ("atmosphere", "大氣壓力")], "Liquid pressure increases with greater fluid depth.", "液體內部各點所承受之液壓隨著垂直深度的增加而增大。"),
    ("阿基米德浮力原理：浮力等於排開液重", "⛵", [("buoyancy", "浮力原理"), ("Archimedes principle", "阿基米德定律"), ("displaced fluid", "排開液體體積"), ("density", "物質密度")], "Buoyant force equals weight of displaced fluid.", "浸在流體中的物體所受向上浮力必等於所排開之液體重量。"),
    ("大氣壓力實驗：馬德堡半球十六匹馬拉不開", "🌐", [("atmospheric pressure", "大氣壓力"), ("Magdeburg hemispheres", "馬德堡半球"), ("vacuum pump", "抽真空幫浦"), ("horses", "駿馬奔馳")], "Atmospheric pressure holds the evacuated spheres tight.", "強大無比的外部大氣壓力將抽成真空的兩座半球死死壓緊。"),
    ("經典力學物理定律榮譽大滿貫", "👑", [("classical mechanics", "古典力學"), ("Newton", "牛頓大師"), ("law of nature", "大自然物理法則"), ("mastery", "精湛融會貫通")], "Comprehend fundamental laws governing motion and force.", "精湛透徹融會貫通主宰世間萬物一切運動與受力的物理定律。"),

    # Unit 6: 美國職棒MLB季後賽與巨星風雲 (L49-L56)
    ("十月熱血秋季經典賽：外卡系列賽殊死戰", "⚾", [("Wild Card series", "外卡殊死系列賽"), ("playoffs", "季後賽激戰"), ("elimination", "淘汰殊死戰"), ("intensity", "無比張力")], "The intense Wild Card game decided the pennant.", "張力極高的外卡系列賽殊死戰直接決定了晉級爭冠門票。"),
    ("大谷翔平五十大盜五十轟二刀流神話", "🦄", [("two-way player", "二刀流奇蹟"), ("stolen base", "盜壘成功"), ("home run", "全壘打狂轟"), ("legendary", "神話傳奇")], "Shohei Ohtani made history with fifty-fifty stats.", "大谷翔平以單季五十轟五十盜的不可思議成就名垂青史。"),
    ("王牌投手七彩變化球：滑球曲球卡特球", "⚡", [("slider", "滑球橫移"), ("cutter", "切球卡特球"), ("sinker", "伸卡下沉球"), ("pitching arsenal", "變化球武器庫")], "His nasty slider tricked the batter completely.", "王牌投手銳利的極品橫移滑球徹底愚弄了打席上的強打。"),
    ("外野防守九星級飛身美技撲接沒收長打", "🧤", [("diving catch", "極限飛身撲接"), ("warning track", "警戒區紅土"), ("rob", "沒收全壘打"), ("spectacular", "嘆為觀止的美技")], "The center fielder made a spectacular diving catch.", "中外野手在全場驚呼聲中上演了一記嘆為觀止的飛身撲接。"),
    ("九局下半滿壘兩出局再見滿貫全壘打", "🎆", [("walk-off grand slam", "再見滿貫砲"), ("bottom of ninth", "九局下半最後攻勢"), ("full count", "滿球數絕境"), ("euphoria", "全場陷入瘋狂")], "A dramatic walk-off grand slam won the title.", "一記九局下半戲劇化的再見滿貫全壘打逆轉奪下世界大賽！"),
    ("精準賽伯計量學分析：擊球初速與仰角", "📊", [("exit velocity", "擊球初速"), ("launch angle", "擊球仰角"), ("barrel", "甜蜜點擊球"), ("sabermetrics", "棒球數據分析")], "A high exit velocity creates explosive line drives.", "強大的擊球初速在甜蜜點擊出具有毀滅性破壞力平飛安打。"),
    ("世界大賽第七戰冠軍遊行香檳洗禮", "🍾", [("World Series Game 7", "世界大賽搶七決戰"), ("parade", "冠軍封王大遊行"), ("champagne celebration", "香檳狂歡慶祝"), ("dynasty", "王朝霸業")], "The team celebrated their championship with champagne.", "全體球員與隊職員在更衣室裡用漫天飛舞的香檳狂歡慶祝。"),
    ("棒球名人堂古柏鎮永久典藏榮光", "🏛️", [("Hall of Fame", "棒球名人堂"), ("Cooperstown", "古柏鎮聖殿"), ("plaque", "榮譽銅匾"), ("immortal", "不朽巨星")], "Induction into the Hall of Fame honors greatness.", "入選古柏鎮棒球名人堂是所有職業球員畢生最高的崇高榮耀。"),

    # Unit 7: NBA籃球總冠軍賽與戰術拆解 (L57-L64)
    ("最後五秒落後兩分壓哨三分球絕殺", "🏀", [("buzzer-beater", "壓哨絕殺球"), ("three-pointer", "三分長射"), ("swish", "空心入網"), ("clutch", "關鍵大心臟")], "He sank a clutch buzzer-beater to win the game.", "他在終場哨聲響起前展現大心臟空心射入逆轉壓哨三分球！"),
    ("現代籃球小球陣容與無限換防防守", "🛡️", [("small-ball lineup", "小球陣容"), ("switch defense", "無限換防"), ("perimeter", "三分外線防線"), ("versatile", "全面多功能的")], "The small-ball lineup switches seamlessly on defense.", "敏捷機動的小球陣容在防守端展現了無縫流暢的無限換防。"),
    ("高位擋拆傳切戰術與底角空檔三分", "📐", [("pick and roll", "高位擋拆"), ("corner three", "底角空檔三分"), ("drive and kick", "切入分球"), ("spacing", "進攻空間拉開")], "Drive and kick to find the open shooter in corner.", "持球切入禁區吸引包夾後迅速分球給底角埋伏射手空檔出手。"),
    ("背後盲傳不看人妙傳助攻空中接力", "⚡", [("no-look pass", "不看人妙傳"), ("alley-oop", "空中接力灌籃"), ("slam dunk", "雙手暴扣"), ("court vision", "無死角球場視野")], "His flashy no-look pass led to a thunderous alley-oop.", "他一記華麗無比的背後妙傳助攻隊友在空中上演雙手暴扣！"),
    ("全場緊迫盯人防守製造對手八秒未過半場", "⏱️", [("full-court press", "全場緊迫盯人"), ("backcourt turnover", "後場失誤"), ("steal", "抄截斷球"), ("defensive pressure", "強大防守壓迫")], "Relentless full-court press forced a costly turnover.", "窒息式的全場緊迫盯人防守迫使對手在後場發生致命失誤。"),
    ("禁區中鋒勾射腳步夢幻搖擺腳步", "🩰", [("dream shake", "夢幻搖擺腳步"), ("hook shot", "柔順勾射"), ("pivot foot", "旋轉軸心腳"), ("post-up", "低位單打")], "The center dazzled defenders with a dream shake.", "身材高大的明星中鋒以眼花撩亂的夢幻腳步晃過防守球員。"),
    ("總決賽第七戰榮膺總冠軍賽FMVP", "🏆", [("Finals MVP", "總冠軍賽最有價值球員"), ("Larry O'Brien Trophy", "金盃榮耀"), ("franchise", "球團隊史"), ("triumph", "凱旋登頂")], "He lifted the trophy as the undisputed Finals MVP.", "他高高舉起總冠軍金盃榮膺實至名歸的總冠軍賽MVP！"),
    ("籃球王者傳奇成就名人堂殿堂", "👑", [("basketball legend", "籃球傳奇殿堂"), ("legacy", "不朽歷史傳承"), ("jersey retired", "球衣光榮退休"), ("greatness", "極致偉大")], "His legendary number was retired into the rafters.", "他的經典球衣號碼被球團隆重高掛於球場上空光榮退休。"),

    # Unit 8: 國際太空站與深空天文探秘 (L65-L72)
    ("國際太空站軌道微重力科學實驗", "🛰️", [("space station", "國際太空站"), ("microgravity", "微重力環境"), ("orbit", "地球軌道"), ("laboratory", "太空實驗室")], "Astronauts conduct biological tests in microgravity.", "宇航員在微重力軌道環境中進行前瞻性的尖端生物實驗。"),
    ("宇航員太空漫步出艙修復太陽能陣列", "🧑‍🚀", [("spacewalk", "艙外太空漫步"), ("spacesuit", "增壓太空衣"), ("tether", "安全繫繩"), ("repair", "精密維修")], "The brave astronaut stepped out for a spacewalk.", "英勇的宇航員踏出氣閘艙展開長達七小時的漫長太空漫步。"),
    ("韋伯太空望遠鏡紅外線回傳百億光年星系", "🔭", [("James Webb telescope", "韋伯太空望遠鏡"), ("infrared", "紅外線波段"), ("deep space", "百億光年深空"), ("galaxy", "遙遠早期星系")], "The telescope captures the earliest galaxies in time.", "太空望遠鏡捕捉到了宇宙大爆炸後不久所誕生的最古老星系。"),
    ("火星探測車毅力號採集土壤與尋找古代生命", "🤖", [("Mars rover", "火星探測車"), ("Perseverance", "毅力號"), ("sample", "岩石鑽孔樣本"), ("ancient life", "古生物遺跡")], "The rover collects core samples on dusty Martian soil.", "火星車在荒涼的火星土壤表層鑽取岩芯樣本以尋找古生命。"),
    ("超級黑洞事件視界與愛因斯坦重力透鏡", "🕳️", [("black hole", "超大質量黑洞"), ("event horizon", "事件視界"), ("gravitational lens", "重力透鏡效應"), ("spacetime", "時空扭曲")], "Nothing can escape past the dark event horizon.", "任何光線與物質一旦跨越黑洞暗黑的事件視界便再無法逃逸。"),
    ("量子超導晶片極低溫運算超越超級電腦", "💻", [("quantum computing", "量子運算"), ("superconductor", "超導電路"), ("qubit", "量子位元"), ("absolute zero", "接近絕對零度")], "Quantum chips perform calculations at near absolute zero.", "超導量子晶片在接近絕對零度的極低溫環境中展現強大算力。"),
    ("半導體晶圓代工極紫外光EUV微影製程", "💎", [("semiconductor", "半導體產業"), ("wafer fab", "晶圓代工廠"), ("EUV lithography", "極紫外光微影"), ("nanometer", "埃米奈米節點")], "EUV light carves microscopic circuits onto silicon wafers.", "極紫外光將極其微小的電路圖案雕刻在晶圓矽晶片表面。"),
    ("前瞻太空航太與量子科技頂尖勛章", "🚀", [("aerospace", "航太尖端科技"), ("frontier", "人類科學前沿"), ("exploration", "無畏探索"), ("breakthrough", "重大科技突破")], "Humanity pushes the frontiers of space and technology.", "全體人類勇往直前不斷拓展航太深空與量子科技的嶄新前沿。"),

    # Unit 9: 國二進階文法：完成式與被動語態 (L73-L80)
    ("現在完成式三大用法：經驗完成與持續", "⏳", [("present perfect", "現在完成式"), ("past participle", "過去分詞 pp"), ("duration", "持續時間段"), ("experience", "寶貴經驗")], "She has studied advanced physics for three years.", "她潛心鑽研高等物理學至今已經長達整整三年的時間。"),
    ("完成式必考時間副詞：already, yet, since, for", "📅", [("already", "已經完成"), ("not yet", "尚未達成"), ("since 2020", "自從特定時間點"), ("for a decade", "長達一段時間")], "I have not completed the science project yet.", "我目前尚未完全完成這份自然科學專題探究作業。"),
    ("被動語態時態轉換：過去式與現在式被動", "🔄", [("passive voice", "被動語態"), ("was constructed", "被興建完成"), ("is evaluated", "被客觀評定"), ("by agent", "被某施事者")], "The stadium was constructed by skilled engineers.", "這座宏偉的國際標準棒球場是由經驗豐富的工程師所建造。"),
    ("情態助動詞被動結構：must be done 必然之理", "🔒", [("must be completed", "必須被確實完成"), ("should be cleaned", "應當被妥善清潔"), ("can be solved", "能夠被有效化解"), ("obligation", "不可推卸的責任")], "All laboratory safety rules must be followed strictly.", "所有實驗室安全守則都必須被所有人員最嚴格地確實遵守。"),
    ("使役動詞四大天王：make, have, let, help 句型", "⚙️", [("make someone do", "逼迫要求某人做"), ("have someone do", "委託吩咐某人做"), ("let someone do", "允許放任某人做"), ("bare infinitive", "原形動詞")], "The strict coach made the players run ten laps.", "嚴格的總教練要求全體球員在烈日下連續頂著風跑十圈。"),
    ("感官動詞受詞補語：原形動詞 vs 現在分詞動態", "👁️", [("see someone do", "目擊全過程"), ("hear someone doing", "聽見正在發生"), ("notice", "敏銳察覺"), ("perception", "五官知覺")], "I heard the crowd cheering loudly in the arena.", "我聽見競技場觀眾席上的人群正在震耳欲聾地歡呼喝采。"),
    ("授與動詞雙賓語：give to 與 buy for 介系詞分辨", "🎁", [("give something to", "給予某人"), ("buy something for", "為某人購買"), ("indirect object", "間接接受者"), ("preposition", "專屬介系詞")], "He bought a brand-new baseball glove for his son.", "他親自挑選並為自己熱愛運動的兒子購買了一只全新棒球手套。"),
    ("國二核心文法句型融會貫通終極檢定", "📝", [("mastery", "精準掌握"), ("syntax", "句法結構"), ("fluency", "流利表達"), ("excellence", "卓越水準")], "Synthesize advanced grammatical structures with total confidence.", "胸有成竹地融會貫通並靈活運用國二所有核心高階文法句型。"),

    # Unit 10: 國二邁向國三會考前哨戰 (L81-L88)
    ("會考題型前哨站：圖表閱讀數據交叉比對", "📊", [("data chart", "統計數據圖表"), ("cross-reference", "交叉比對核實"), ("trend", "整體趨勢走向"), ("interpret", "精準解讀")], "Interpret the bar chart to extract accurate information.", "細心解讀統計長條圖以精準提取出題目所要求的核心數據。"),
    ("英文長篇克漏字前後文邏輯轉折關鍵詞", "🔍", [("however", "然而語意轉折"), ("therefore", "因此因果承接"), ("in addition", "此外遞進補充"), ("transition", "邏輯轉折詞")], "Identify transitions to solve reading comprehension questions.", "精準識別篇章中的邏輯轉折詞以輕鬆破解閱讀理解測驗題。"),
    ("國二下學期理化地科全冊系統化心智圖筆記", "🗺️", [("mind map", "概念心智圖"), ("systematic", "系統化歸納"), ("concept", "抽象核心概念"), ("retention", "長期記憶維持")], "Organize science concepts into a clear mind map.", "將繁複的理化與地科各章節核心觀念整理成清晰明瞭的心智圖。"),
    ("規律每日英語聽力新聞晨聽二十分鐘好習慣", "📻", [("daily listening", "每日晨讀英聽"), ("news broadcast", "新聞英文廣播"), ("habit", "良好生活習慣"), ("comprehension", "聽力理解能力")], "Listening to English daily sharpens comprehension skills.", "每天堅持收聽二十分鐘英語廣播能顯著提升英語聽解敏銳度。"),
    ("保持運動習慣適時排解讀書身心壓力", "🧘", [("stress relief", "排解課業壓力"), ("jogging", "規律慢跑運動"), ("mental health", "心理身心平衡"), ("recharge", "充電重獲能量")], "Regular exercise relieves study stress and recharges energy.", "規律適度的有氧運動能有效排解課業壓力並讓身心充飽能量。"),
    ("國二升國三暑期複習黃金讀書計畫擬定", "📅", [("study plan", "黃金讀書計畫"), ("summer break", "關鍵暑期假期"), ("review", "歷年觀念大複習"), ("dedication", "專注投入")], "Stick to your summer study schedule with dedication.", "以高度的自律與專注全心落實暑期全科黃金複習進度表。"),
    ("國二全體師生結業式授旗出征迎向會考", "🚩", [("ceremony", "隆重結業典禮"), ("flag presentation", "授旗出征儀式"), ("determination", "破釜沉舟決心"), ("strive", "全力以赴奮戰")], "Accept the flag with unyielding determination to win.", "接下出征榮譽大旗，懷抱破釜沉舟的必勝信念迎向國三會考！"),
    ("國二熱血中級冒險大獲全勝晉升國三", "🎖️", [("triumph", "大獲全勝凱旋"), ("ascend", "榮耀晉升晉階"), ("perseverance", "持之以恆毅力"), ("champion", "無敵勇者王者")], "Ascend to the highest tier of junior high adventure.", "歷經百般錘鍊展現非凡毅力，榮耀晉升國三至尊最高試煉階層！"),

    # Final Milestone for jh_mid (L89-L90)
    ("國中中級核心字彙與文法綜合大閱兵", "📖", [("vocabulary", "中級核心字彙"), ("grammar", "進階文法體系"), ("accuracy", "百分之百正確"), ("readiness", "萬全應戰狀態")], "Display flawless understanding of intermediate curriculum.", "完美展現對國中中級所有核心字彙與複雜文法句型的通盤領會！"),
    ("波波冒險傳奇之盾國二結業金牌加冕", "🛡️", [("shield of legend", "傳奇守護之盾"), ("gold medal", "至尊金牌勳章"), ("scholar", "文武全才少俠"), ("future", "璀璨似錦前程")], "Wear the gold medal and brandish the legendary shield.", "佩掛象徵榮譽的至尊金牌，手握傳奇之盾，傲然邁入國三殿堂！"),
]

jh_adv_themes = [
    # Unit 2: 關係代名詞高級句法與省略 (L17-L24)
    ("關係代名詞受格當受詞時之自然省略法", "✂️", [("object relative pronoun", "受格關係代名詞"), ("omission", "文法自然省略"), ("antecedent", "先行詞"), ("flow", "行文流暢自然")], "The book you recommended was fascinating.", "你上次推薦給我看的那本精彩好書內容實在令人著迷。"),
    ("先行詞同時包含人與物時只能用 that", "👥", [("relative pronoun that", "關係代名詞 that"), ("human and animal", "兼具人與動物"), ("mandatory", "強制作法準則"), ("restrictive", "限定修飾子句")], "The boy and his puppy that ran past were happy.", "剛剛從我們身旁飛奔而過的小男孩與他的可愛小狗無比開心。"),
    ("先行詞有最高級、the only, all 修飾時", "👑", [("the only", "唯一僅有的"), ("superlative", "最高級先行詞"), ("exclusively", "專屬唯一使用"), ("precedence", "優先順序準則")], "He is the only player that hit three home runs.", "他是這場錦標賽中唯一一位單場狂轟三發全壘打的明星球員。"),
    ("逗點非限定關係代名詞：補充說明與修飾整句", "✍️", [("non-restrictive", "逗點非限定關代"), ("comma", "標點逗點"), ("extra info", "補充額外說明"), ("which refers to clause", "which修飾整句")], "He passed the exam, which made his parents proud.", "他以優異成績順利通過了會考，這件事讓他的父母無比驕傲。"),
    ("介系詞移至關係代名詞之前的高階倒裝句型", "🏛️", [("preposition with whom", "介系詞加whom"), ("in which", "介系詞加which"), ("formal style", "典雅正式文體"), ("structure", "嚴密句法結構")], "This is the laboratory in which they discovered the cure.", "這座現代化實驗室正是科學家們當年成功研發出解藥的聖地。"),
    ("名詞子句當主詞：That 引導整件事情為單數", "📜", [("noun clause subject", "名詞子句當主詞"), ("singular verb", "單數動詞搭配"), ("fact", "客觀既成事實"), ("indisputable", "無可爭辯的事實")], "That she won the speech contest surprised no one.", "她一舉奪得全校英語演講比賽冠軍這件事絲毫不令人感到意外。"),
    ("疑問詞引導名詞子句當受詞之語序規則", "🧩", [("indirect question", "間接問句語序"), ("statement order", "主詞動詞陳述語序"), ("whereabouts", "下落與去向"), ("clarify", "清楚說明交代")], "Please tell me what happened in the meeting yesterday.", "請你清楚向我交代說明昨天在閉門會議中究竟發生了何事。"),
    ("國三進階關係子句與名詞子句頂峰試煉", "🏆", [("subordinate clause", "高階從屬子句"), ("syntax mastery", "句法結構登峰"), ("accuracy", "分毫不差精準"), ("brilliance", "璀璨優異成就")], "Analyze intricate subordinate clauses with effortless ease.", "游刃有餘且精準無比地剖析任何繁複複雜的高階從屬子句結構。"),

    # Unit 3: 國三地球科學板塊構造與地震地質 (L25-L32)
    ("魏格納大陸漂移學說與海底擴張學說", "🌍", [("continental drift", "大陸漂移學說"), ("Wegener", "魏格納科學家"), ("seafloor spreading", "海底擴張學說"), ("mid-ocean ridge", "中洋脊裂谷")], "Fossils across oceans support continental drift theory.", "橫跨大洋兩岸的高度相似古化石有力佐證了大陸漂移學說。"),
    ("板塊構造學說三大交界：張裂聚合與錯動", "🌋", [("plate tectonics", "板塊構造學說"), ("convergent boundary", "聚合型板塊交界"), ("divergent boundary", "張裂型板塊交界"), ("transform fault", "錯動型轉形斷層")], "Subduction zones occur along convergent plate boundaries.", "隱沒帶地質構造主要沿著兩大聚合型板塊交界區域生成。"),
    ("地震震源與震央深度規模與各地震度", "💥", [("focus", "地下震源深度"), ("epicenter", "地面投影震央"), ("magnitude", "芮氏地震規模"), ("intensity", "各地感受震度")], "Seismic waves radiate outward from the deep focus.", "強烈的地震波從地底深處的震源向外四面八方快速輻射傳播。"),
    ("台灣造山運動：歐亞板塊與菲律賓海板塊擠壓", "⛰️", [("orogeny", "造山運動"), ("Eurasian plate", "歐亞大陸板塊"), ("Philippine Sea plate", "菲律賓海板塊"), ("Central Mountain Range", "中央山脈隆起")], "The collision between two plates raised towering mountains.", "兩大板塊漫長持續的劇烈推擠碰撞造就了巍峨壯麗的中央山脈。"),
    ("三大類岩石循環：火成岩沉積岩與變質岩", "🪨", [("igneous rock", "冷凝火成岩"), ("sedimentary rock", "沉積壓密岩"), ("metamorphic rock", "高溫高壓變質岩"), ("rock cycle", "岩石循環演變")], "Heat and intense pressure transform shale into slate.", "地底極端高溫與巨大高壓作用能將頁岩緩慢變質轉化為板岩。"),
    ("相對定年法：地層疊置定律與截切定律", "⏳", [("relative dating", "地層相對定年法"), ("superposition", "地層疊置定律"), ("cross-cutting", "截切定律原則"), ("geological stratum", "沉積地質岩層")], "Undisturbed lower layers are older than upper layers.", "在未受強烈地殼擾動的沉積岩層中較下方的岩層年代必定更古老。"),
    ("地下水河流侵蝕搬運與沉積作用塑造地貌", "🌊", [("weathering", "風化作用"), ("erosion", "水流侵蝕"), ("transportation", "泥沙搬運"), ("deposition", "出海口沉積")], "Rivers carve deep canyons and deposit fertile deltas.", "奔騰的河川切蝕出險峻大峽谷並在出海口沉積出肥沃的沖積三角洲。"),
    ("國三地球科學地質地貌會考核心金牌", "🎖️", [("earth science", "地球科學地質"), ("geology", "地質演變大歷史"), ("plate motion", "板塊運動歷程"), ("mastery", "精準理解掌握")], "Master fundamental geological concepts for the exam with ease.", "游刃有餘全面掌握會考地科地質板塊運動與岩石地層核心考點。"),

    # Unit 4: 國三大氣科學氣象鋒面與颱風 (L33-L40)
    ("大氣層垂直分層：對流層平流層臭氧層", "☁️", [("troposphere", "對流層天氣變化"), ("stratosphere", "平流層客機巡航"), ("ozone layer", "臭氧層吸收紫外線"), ("altitude", "垂直高度海拔")], "Weather events occur exclusively within the troposphere.", "地球表面所有的風雨雷電天氣現象皆集中發生於對流層範圍內。"),
    ("大氣壓力與風向：等壓線判讀空氣流動", "🧭", [("isobar", "天氣圖等壓線"), ("high pressure", "高氣壓中心下沉"), ("low pressure", "低氣壓中心上升"), ("wind direction", "風向受科氏力偏折")], "Winds blow from high pressure areas to low pressure.", "大氣中的空氣質點必定由高氣壓區域朝向低氣壓區域流動。"),
    ("冷鋒過境與暖鋒系統：降雨降溫天氣驟變", "🌧️", [("cold front", "冷鋒強勢南下"), ("warm front", "暖鋒推移抬升"), ("temperature drop", "氣溫急遽驟降"), ("precipitation", "陣雨雷雨強降水")], "Temperatures drop sharply after the cold front passes.", "在強烈冷鋒強勢過境後各地氣溫將會出現斷崖式的劇烈驟降。"),
    ("梅雨滯留鋒面徘徊連日綿綿陰雨綿密", "☔", [("stationary front", "滯留鋒面徘徊"), ("plum rain", "梅雨季節"), ("continuous rainfall", "連綿陰雨不斷"), ("humidity", "空氣相對濕度")], "Stationary fronts cause prolonged rainy conditions in May.", "五六月間徘徊不去的梅雨滯留鋒往往帶來全台連綿數日的陰雨。"),
    ("強烈颱風結構：颱風眼無風無雨眼牆狂風暴雨", "🌀", [("typhoon eye", "颱風眼中心晴朗"), ("eyewall", "眼牆破壞性狂風"), ("spiral rainband", "外圍螺旋雨帶"), ("storm surge", "沿海暴潮倒灌")], "The eyewall packs the most violent winds and rain.", "颱風眼外圍的眼牆結構蘊藏著整個熱帶氣旋中最具破壞力的狂風暴雨。"),
    ("聖嬰現象與反聖嬰現象赤道太平洋海溫異常", "🌡️", [("El Nino", "聖嬰現象東太平洋暖水"), ("La Nina", "反聖嬰現象冷水異常"), ("trade winds", "赤道東風信風"), ("global climate", "全球氣候連鎖效應")], "El Nino alters weather patterns across the globe.", "赤道太平洋海溫異常的聖嬰現象會引起全球氣候格局連鎖異動。"),
    ("海陸風與山谷風：比熱差異造成日夜風向反轉", "🏞️", [("sea breeze", "日間向陸海風"), ("land breeze", "夜間向海陸風"), ("differential heating", "海陸受熱差異"), ("diurnal cycle", "日夜規律週期")], "Sea breezes blow inland during warm sunny afternoons.", "在晴朗炎熱的午後由海洋吹向陸地的涼爽海風顯著增強。"),
    ("國三氣象學天氣圖判讀與會考金牌", "🏆", [("meteorology", "氣象大氣科學"), ("weather map", "地面天氣圖"), ("forecasting", "天氣預測研判"), ("excellence", "滿分奪冠實力")], "Analyze complex weather maps to forecast storms accurately.", "精闢研判繁複的地面天氣圖以準確預測鋒面降雨與暴風路徑。"),

    # Unit 5: 國三天文奧秘四季與日月地系統 (L41-L48)
    ("地球自轉與公轉：地軸傾斜造成四季更迭", "🌏", [("axial tilt", "地軸傾斜23.5度"), ("revolution", "繞日公轉軌道"), ("equinox", "春分秋分晝夜均分"), ("solstice", "夏至冬至日照極值")], "Earths axial tilt is the true reason for four seasons.", "地軸傾斜23.5度繞日公轉正是地球表面產生四季更迭的真正主因。"),
    ("月球公轉相位變化：新月初一滿月十五", "🌙", [("phases of moon", "月相盈虧變化"), ("new moon", "朔月農曆初一"), ("full moon", "望月農曆十五"), ("crescent", "優美娥眉月牙")], "The moon reflects sunlight as it orbits our planet.", "月球在繞行地球公轉過程中反射太陽光呈現不同月相盈虧。"),
    ("日食與月食天象：日地月三者一線陰影遮蔽", "🌑", [("solar eclipse", "日食太陽被遮蔽"), ("lunar eclipse", "月食月球入地影"), ("umbra", "全影區本影"), ("penumbra", "半影區日偏食")], "A total solar eclipse occurs when the moon blocks sun.", "當月球運行至太陽與地球正中間時會遮蔽陽光形成壯麗日全食。"),
    ("海洋潮汐引力：月球與太陽引潮力大潮小潮", "🌊", [("tide", "海洋潮汐漲退"), ("spring tide", "朔望大潮落差大"), ("neap tide", "上下弦小潮"), ("gravitational pull", "萬有引潮力")], "Spring tides occur during full and new moons.", "在農曆初一朔月與十五滿月期間會出現潮差極大的壯觀大潮。"),
    ("星空周日運動與北極星指引北方方位", "⭐", [("Polaris", "北極星正北方"), ("diurnal motion", "星空周日運動"), ("constellation", "四季星座盤"), ("celestial pole", "天球北極軸心")], "Polaris serves as a dependable navigational guide at night.", "北極星始終精準恆定地懸掛在北方夜空為航海旅人指引正確航向。"),
    ("太陽系八大行星分類：類地行星與類木行星", "🪐", [("terrestrial planets", "岩石質類地行星"), ("gas giants", "氣體巨行星類木"), ("asteroid belt", "小行星帶分界"), ("solar system", "太陽系家族")], "Terrestrial planets have dense and rocky solid crusts.", "水星、金星、地球與火星等類地行星皆具有高密度的岩石質固態地殼。"),
    ("宇宙大爆炸與恆星演化超新星爆炸生命起源", "🌌", [("Big Bang", "宇宙大爆炸創生"), ("stellar evolution", "恆星演化史詩"), ("supernova", "超新星劇烈爆發"), ("stardust", "孕育生命星塵")], "Heavy elements on Earth were forged inside ancient stars.", "地球上的金屬與碳氮氧重元素皆是在遠古巨型恆星內部鍛造誕生。"),
    ("國三天文星空奧秘會考全勝金牌", "🔭", [("astronomy", "現代天文學科"), ("celestial mechanics", "天體運行力學"), ("cosmic scale", "壯闊宇宙視野"), ("triumph", "全勝稱霸會考")], "Grasp cosmic mechanics to conquer all astronomy test items.", "融會貫通天體運行力學機制，在會考天文各類素養題型中所向披靡！"),

    # Unit 6: 會考長篇素養閱讀與資訊提取 (L49-L56)
    ("多元圖表素養題：雙圖表長條圖折線圖交叉比對", "📈", [("line graph", "折線走勢圖"), ("bar chart", "分類長條圖"), ("compare", "跨圖比對歸納"), ("accuracy", "無懈可擊精準度")], "Cross-check both graphs to locate the exact year.", "交叉對照兩張統計圖表數據以鎖定題目所詢問的關鍵發生年份。"),
    ("生活實用情境題：博物館展覽門票公告與導覽時刻", "🎫", [("announcement", "官方公告事項"), ("admission fee", "門票收費標準"), ("guided tour", "專人定時導覽"), ("schedule", "詳細時刻表")], "Read the schedule carefully to find the discount time.", "仔細閱讀展覽館公告時刻表以找出享有特定折扣優待的入場時段。"),
    ("餐廳英文菜單與促銷優惠券限制條款閱讀", "🍽️", [("menu specials", "主廚特製菜單"), ("terms and conditions", "優惠限制條款"), ("discount coupon", "折扣優惠券"), ("expiration date", "使用有效截止日")], "Check the fine print for the coupons expiration date.", "仔細檢查優惠券底部字體較小的詳細條款以確認其有效截止期限。"),
    ("長篇跨領域科普閱讀：深海熱泉古生菌生態", "🦀", [("hydrothermal vent", "深海熱泉噴口"), ("chemosynthesis", "化學合成作用"), ("adaptation", "極端環境適應"), ("ecosystem", "深海黑暗生態系")], "Creatures near hydrothermal vents thrive without sunlight.", "生活在漆黑深海熱泉噴口附近的生物完全不依賴太陽光即可繁衍生息。"),
    ("人文歷史深度閱讀：古絲路貿易與文化交融", "🐪", [("Silk Road", "古代絲綢之路"), ("merchants", "各國貿易商旅"), ("cultural exchange", "多元文化交融"), ("caravan", "沙漠駱駝商隊")], "The ancient Silk Road fostered vital cultural exchange.", "歷史悠久的古絲綢之路極大地促進了東西方多元文明與貿易的深度交融。"),
    ("社會議題批判思考：人工智慧在校園的應用倫理", "💻", [("ethics", "科技倫理思辨"), ("artificial intelligence", "生成式AI工具"), ("plagiarism", "學術抄襲禁忌"), ("critical thinking", "獨立批判思考")], "Cultivate critical thinking when adopting AI tools.", "在日常學習中接觸並運用人工智慧工具時應培養獨立批判思考能力。"),
    ("環保議題深度反思：海洋塑膠垃圾與快時尚代價", "👕", [("microplastics", "海洋微塑膠粒"), ("fast fashion", "廉價快時尚"), ("pollution", "生態環境浩劫"), ("responsibility", "企業社會責任")], "Consumers must consider the environmental cost of fashion.", "當代明智的消費者在添購新衣時必須深思快時尚背後的沉重環境代價。"),
    ("會考英文閱讀素養最高標大獲全勝", "🏆", [("reading literacy", "長篇素養閱讀"), ("information retrieval", "快速提取關鍵資訊"), ("inference", "深度推論歸納"), ("perfection", "精準滿級奪標")], "Process complex English articles with swift comprehension.", "面對任何題材的英語長篇文章皆能以迅雷不及掩耳的速度精準理解破題！"),

    # Unit 7: 國三會考英語聽力特訓 (L57-L64)
    ("英聽第一部分：單圖與多圖細節比對陷阱防範", "🖼️", [("image prompt", "圖片題幹敘述"), ("distractor", "視線干擾誘答"), ("distinguish", "明察秋毫分辨"), ("key detail", "核心關鍵細節")], "Notice tiny details in illustrations to avoid traps.", "聚精會神捕捉插圖畫面中的細微特徵以防落入出題老師預設的誘答陷阱。"),
    ("英聽第二部分：簡短問答極速掌握疑問詞與時態", "⚡", [("question word", "首句首字疑問詞"), ("tense cue", "過去現在未來時態"), ("appropriate response", "合乎情境之應答"), ("quick reflex", "神經極速反射")], "Focus on the initial question word like where or when.", "題目播放時務必全神貫注鎖定第一個發問疑問詞例如Where或是When。"),
    ("英聽第三部分：長篇雙人對話人物關係與對話情境", "👥", [("dialogue context", "生活對話情境"), ("relationship", "對話雙方關係"), ("hidden meaning", "弦外之音弦外意"), ("contextual clues", "語境推論線索")], "Infer the speakers relationship from their casual tone.", "從對話雙方說話的語氣與用詞習慣推敲推斷出彼此之間的真實社交關係。"),
    ("英聽第三部分：火車站與機場廣播登機門臨時異動", "📢", [("airport broadcast", "航廈突發廣播"), ("gate change", "登機門臨時變更"), ("departure time", "起飛發車時刻"), ("listen attentively", "豎起耳朵專注聆聽")], "Passengers must pay attention to the new departure gate.", "全體候機乘客必須格外留神廣播中臨時宣佈變更的最新登機門編號。"),
    ("英聽第三部分：氣象預報週末出遊穿著與攜帶雨具", "🌂", [("weather forecast", "週末氣象預報"), ("umbrella", "自備折疊雨傘"), ("temperature swing", "日夜溫差劇烈"), ("outdoor plan", "戶外踏青計畫")], "The forecast recommends carrying an umbrella on Sunday.", "氣象主播在預報尾聲強烈建議聽眾星期日外出時務必隨身攜帶雨具。"),
    ("英聽第三部分：電話留言預約診所看診改期確認", "📞", [("voicemail message", "電話預約留言"), ("reschedule", "重新改期掛號"), ("appointment", "醫師門診預約"), ("confirm", "回電確認就診")], "Call back to confirm your dental checkup appointment.", "請於今天下班前及時回電給診所櫃檯確認您明天的洗牙看診預約時間。"),
    ("英聽第三部分：課堂老師宣布專題發表繳交截止日", "📅", [("deadline", "專案截止期限"), ("submission", "繳交專案檔案"), ("extension", "寬限延長申請"), ("penalty", "遲交扣分處分")], "The science report deadline is Friday afternoon.", "全班自然科學探究專案的最終繳交截止期限為本週五下午五點整。"),
    ("國三會考英聽測驗滿分A++奪冠", "🥇", [("perfect score", "聽力滿分雙A++"), ("listening mastery", "聽覺敏銳至極"), ("confidence", "胸有成竹應試"), ("triumph", "無上榮耀大勝")], "Achieve a perfect score on the English listening test.", "以無懈可擊的敏銳聽覺與百分之百的專注力勇奪會考英聽滿分A++！"),

    # Unit 8: 英文寫作核心段落架構 (L65-L72)
    ("議論文黃金三段式架構：引言正文支持與結論", "🏛️", [("three-paragraph essay", "經典三段式架構"), ("introduction", "開門見山引言"), ("body paragraph", "扎實正文論據"), ("conclusion", "總結回扣主題")], "A structured three-paragraph essay conveys ideas clearly.", "嚴謹有序的經典三段式作文架構能條理分明地完整傳達中心思想論述。"),
    ("引人入勝的首段破題鈎子技巧：設問與驚人事實", "🪝", [("hook", "吸睛引言鈎子"), ("rhetorical question", "發人深省的設問"), ("shocking fact", "震撼人心之事實"), ("engage reader", "迅速抓住讀者眼球")], "Start with a thought-provoking question to hook readers.", "在文章開頭運用發人深省的哲思設問瞬間抓住閱卷老師與讀者的目光。"),
    ("正文段落核心靈魂：清晰的主題句開宗明義", "🎯", [("topic sentence", "段落主題句"), ("central focus", "段落核心論點"), ("clarity", "開宗明義清晰"), ("direction", "段落論述方向")], "Each body paragraph must begin with one clear topic sentence.", "每一個正文段落開頭都必須開宗明義揭示一個條理清晰的核心主題句。"),
    ("舉出強而有力的論據支持：個人經驗與具體實例", "💡", [("supporting evidence", "有力佐證論據"), ("concrete example", "生活具體實例"), ("personal experience", "刻骨銘心之經驗"), ("convincing", "極具說服力的")], "Back up your claims with vivid personal experiences.", "運用鮮明生動且真摯動人的個人切身生活經驗來強化論點的說服力。"),
    ("運用高階邏輯轉折詞讓文章如行雲流水", "🌊", [("furthermore", "此外進一步補充"), ("on the contrary", "相反地鮮明對比"), ("undoubtedly", "毫無疑問確實如此"), ("cohesion", "篇章緊密連貫性")], "Transitions create cohesion between supporting sentences.", "精巧且恰如其分地運用高階轉折詞讓全篇文章字裡行間如行雲流水般順暢。"),
    ("首尾呼應的精彩結論段：重申論點與昇華格局", "🌅", [("restate thesis", "換句話說重申論點"), ("summarize", "簡明扼要歸納總結"), ("call to action", "發人深省之呼籲"), ("elevate", "格局胸襟昇華")], "Conclude by restating your main points and inspiring action.", "在結論段以不同的句型換句話說重申核心主張並昇華整篇文意格局。"),
    ("修辭加分祕技：排比句型與生動動詞形容詞選用", "🎨", [("parallelism", "氣勢磅礡排比句"), ("vivid verb", "鮮活動態動詞"), ("precise adjective", "精準修飾形容詞"), ("rhetoric", "文學修辭色彩")], "Use parallel structures to give sentences rhythm and power.", "運用整齊勻稱的排比句法結構賦予文章字句宛如樂曲般的節奏與澎湃力量。"),
    ("會考英文寫作滿級分範文殿堂", "🖋️", [("model essay", "會考滿級分範文"), ("masterpiece", "傳世佳作"), ("eloquence", "文采斐然流暢"), ("excellence", "滿分最高殊榮")], "Craft an eloquent essay worthy of highest exam honors.", "揮灑生花妙筆創作出文采斐然、結構嚴密的會考滿分級標竿範文！"),

    # Unit 9: 考前三十天會考衝刺與心態調適 (L73-L80)
    ("黃金作息調整：早睡早起配合會考考試時程", "⏰", [("circadian rhythm", "生理作息規律"), ("exam schedule", "會考時間表同步"), ("peak alertness", "白天專注力巔峰"), ("discipline", "高度自律生活")], "Adjust your internal clock to match the morning exam.", "提前調整日常生理時鐘使其完全與會考上午的第一節考試時程同頻共振。"),
    ("歷屆會考真題十年題庫限時全真模擬演練", "⏱️", [("past exam papers", "歷屆會考真題"), ("timed simulation", "嚴格限時模擬"), ("pacing", "時間配速掌控"), ("familiarity", "對題型無比熟悉")], "Practice ten years of past exams under strict timing.", "在嚴格比照真實考場的限時條件下反覆精煉歷屆十年全真會考試題。"),
    ("考前錯題筆記精讀：徹底封堵所有知識漏洞", "🛡️", [("error analysis", "錯題深度剖析"), ("review notebook", "精華筆記本"), ("plug loopholes", "封堵知識盲點"), ("certainty", "百分之百確定性")], "Review mistakes in your notebook to eliminate weaknesses.", "精讀錯題本中過往記錄的所有易錯盲點，徹底消除一切潛在失分風險。"),
    ("面臨重大考試焦慮時的四七八腹式深呼吸法", "🧘", [("anxiety management", "考試焦慮調控"), ("deep breathing", "腹式深呼吸法"), ("calm mind", "心如止水沉著"), ("inner peace", "內心寧靜強大")], "Breathe deeply through nose and exhale slowly to calm down.", "緩慢透過鼻腔深吸氣並綿長吐氣以迅速撫平考前緊張躁動的焦慮情緒。"),
    ("正面自我暗示心理學：相信自己長久以來的付出", "🌟", [("positive self-talk", "積極正向自我暗示"), ("confidence", "燃燒不滅之自信"), ("dedication", "多年辛勤汗水"), ("unwavering", "堅定不移的信念")], "Trust your long preparation and stay full of confidence.", "無條件相信自己多年來所傾注的每一滴汗水，滿懷豪情踏上考場！"),
    ("文具清單雙重檢查：2B鉛筆橡皮擦手錶與准考證", "🎒", [("exam kit", "文具應考包"), ("2B pencil", "合格2B電腦鉛筆"), ("eraser", "乾淨無碎屑橡皮擦"), ("exam ticket", "至關重要准考證")], "Double-check your admission ticket and 2B pencils.", "考前前一晚務必逐項清點核對您的准考證、合格2B鉛筆與指針手錶。"),
    ("考場冷靜破題原則：先易後難穩健拿滿每一分", "🎯", [("strategy", "考場實戰戰略"), ("easy questions first", "先易後難原則"), ("steady pace", "沉著穩健作答"), ("maximize score", "得分極大化")], "Tackle straightforward questions first to build momentum.", "依循先易後難的穩健作答節奏迅速建立作答手感並牢牢鎖定基本盤。"),
    ("會考登頂誓師大會：金榜題名勢在必得", "🚩", [("swearing-in ceremony", "誓師大會"), ("victory pledge", "必勝凱旋宣誓"), ("honor roll", "金榜題名榮耀"), ("destiny", "開創璀璨命運")], "Pledge to conquer the exam and shape a glorious future.", "同舟共濟齊聲宣誓，以雷霆萬鈞之勢征服會考，開創無比璀璨的人生！"),

    # Unit 10: 國中畢業典禮回顧與展翅高飛 (L81-L88)
    ("三年國中歲月點滴成長甘苦回憶長廊", "🚶", [("three-year journey", "三年國中征程"), ("memories", "珍貴點滴回憶"), ("laughter and tears", "歡笑與淚水交織"), ("transformation", "蛻變與成長")], "Reflect upon three years of laughter, tears, and growth.", "靜心回首凝望這三年來歡笑與淚水相互交織的青澀韶華與蛻變奇蹟。"),
    ("向諄諄教誨的班導師與各科良師深鞠躬致謝", "🙇", [("deep bow", "深鞠躬大禮"), ("gratitude", "滿懷無限感激"), ("mentorship", "恩師悉心提攜"), ("wisdom", "人生處世智慧")], "Express sincere thanks to mentors who guided our path.", "向在迷惘道路上始終手持明燈引領我們前行的恩師良師深情致敬致謝。"),
    ("與患難與共的摯友同窗緊緊相擁互道珍重", "🫂", [("warm embrace", "熱烈深情相擁"), ("lifelong friends", "一生摯友夥伴"), ("farewell", "互道珍重再見"), ("cherish", "永遠珍藏於心")], "Embrace classmates who stood by you through challenges.", "緊緊擁抱那些在三年艱苦奮鬥歲月中與你並肩作戰患難與共的同窗摯友。"),
    ("在畢業紀念冊寫下最真摯澎湃的友誼祝福", "✒️", [("yearbook message", "紀念冊長文題字"), ("heartfelt wishes", "發自肺腑之祝願"), ("lifelong bond", "一輩子不滅情誼"), ("remembrance", "歲月留痕銘記")], "Inscribe heartfelt wishes for a brilliant future ahead.", "在畢業紀念冊頁面上揮筆寫下一段段對同窗夥伴最真摯澎湃的錦繡祝願。"),
    ("全體畢業生齊唱畢業歌驪歌初動淚灑禮堂", "🎶", [("graduation song", "畢業驪歌"), ("choir", "全場合唱回響"), ("emotional", "熱淚盈眶感人"), ("commencement", "撥穗啟程出發")], "Sing the commencement hymn with tears in your eyes.", "在熱淚盈眶中與全體同窗一同放聲高唱象徵破繭成蝶的動人畢業驪歌。"),
    ("領取國中畢業證書：劃下完美句點踏上高中旅程", "📜", [("diploma", "國中畢業證書"), ("milestone", "人生關鍵里程碑"), ("high school", "高中全新挑戰"), ("ready", "昂首闊步啟程")], "Receive the diploma and prepare for high school life.", "雙手接過沉甸甸的畢業證書，為國中歲月劃下完美句點，昂首邁向高中！"),
    ("追逐星辰大海的壯志豪情永遠不滅", "✨", [("ambition", "鴻鵠之志"), ("stars and ocean", "星辰大海征程"), ("passion", "燃燒不息熱情"), ("unlimited", "潛能無限寬廣")], "Pursue dreams that stretch beyond the distant stars.", "勇敢無畏地追逐那片超越遙遠星辰與浩瀚大海的壯麗夢想與宏大前程。"),
    ("國中冒險全能封頂傳奇少俠功德圓滿", "👑", [("legendary hero", "傳奇至尊少俠"), ("pinnacle", "巔峰造極圓滿"), ("mastery", "登峰造極之境"), ("glory", "永恆載入史冊")], "Stand atop the summit of junior high adventure with pride.", "傲然屹立於國中三年大冒險之絕頂巔峰，以至尊少俠之姿載入史冊！"),

    # Final Milestone for jh_adv (L89-L90)
    ("會考全領域頂規核心素養終極總驗收", "🧠", [("comprehensive exam", "全真綜合大檢定"), ("all-around literacy", "全領域核心素養"), ("flawless", "完美無瑕表現"), ("supremacy", "制霸會考考場")], "Demonstrate complete supremacy across all exam areas.", "全面展現對會考英語全領域各類跨學科核心素養的絕對制霸與神級掌控！"),
    ("波波大冒險國中傳奇九十關封頂加冕", "🏆", [("ultimate crown", "終極加冕王冠"), ("ninety levels", "九十道熱血關卡"), ("triumph", "大獲全勝無敵"), ("high school bound", "高中新征途")], "Receive the ultimate crown for mastering ninety levels.", "成功攻克國中九十道考驗，榮獲至尊終極王冠，豪情萬丈進軍高中殿堂！"),
]

def write_module(filename, themes):
    with open(filename, "w", encoding="utf-8") as f:
        f.write("# -*- coding: utf-8 -*-\n")
        f.write("themes = [\n")
        for title, icon, vocab, sentence, zh in themes:
            v_str = repr(vocab)
            s_str = repr(sentence)
            z_str = repr(zh)
            t_str = repr(title)
            i_str = repr(icon)
            f.write(f"    ({t_str}, {i_str}, {v_str}, {s_str}, {z_str}),\n")
        f.write("]\n")

if __name__ == "__main__":
    assert len(jh_beg_themes) == 74, f"jh_beg count: {len(jh_beg_themes)}"
    assert len(jh_mid_themes) == 74, f"jh_mid count: {len(jh_mid_themes)}"
    assert len(jh_adv_themes) == 74, f"jh_adv count: {len(jh_adv_themes)}"
    write_module("curriculum_data_builders/jh_beg.py", jh_beg_themes)
    write_module("curriculum_data_builders/jh_mid.py", jh_mid_themes)
    write_module("curriculum_data_builders/jh_adv.py", jh_adv_themes)
    print("Successfully generated jh_beg.py, jh_mid.py, and jh_adv.py with 74 themes each!")
