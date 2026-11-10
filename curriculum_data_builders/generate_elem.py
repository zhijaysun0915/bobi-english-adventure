# -*- coding: utf-8 -*-
"""
Generator for elem_mid (小學・中級, 3-4年級 / A1) and elem_adv (小學・高級, 5-6年級 / A1+)
Generates curriculum_data_builders/elem_mid.py and curriculum_data_builders/elem_adv.py
Each has exactly 74 curated themes (Lessons 17 to 90).
"""

elem_mid_themes = [
    # Unit 2: 棒球進階戰術與球場風雲 (L17-L24)
    ("捕手面罩與本壘攻防", "⚾", [("catcher", "捕手"), ("mask", "面罩"), ("home plate", "本壘"), ("guard", "防守")], "The catcher wears a strong mask.", "捕手戴著堅固的面罩。"),
    ("雙殺守備與內野配合", "🧤", [("double play", "雙殺"), ("infield", "內野"), ("throw", "傳球"), ("base", "壘包")], "The infield team made a fast double play.", "內野守備隊完成了一次快速雙殺。"),
    ("外野長傳刺殺出局", "🏟️", [("outfield", "外野"), ("laser beam", "雷射肩傳球"), ("out", "出局"), ("safe", "安全上壘")], "He threw the ball from outfield.", "他從外野將球長傳進來。"),
    ("盜壘狂飆與滑壘得分", "👟", [("steal", "盜壘"), ("slide", "滑壘"), ("score", "得分"), ("cheer", "歡呼")], "The fast runner slid into second base.", "飛毛腿跑者滑進二壘。"),
    ("滿壘危機與三振出局", "⚡", [("bases loaded", "滿壘"), ("strikeout", "三振"), ("curveball", "曲球"), ("focus", "專注")], "The ace pitcher got a big strikeout.", "王牌投手投出關鍵三振。"),
    ("打擊教練與戰術暗號", "🧢", [("coach", "教練"), ("sign", "暗號"), ("hit", "安打"), ("strategy", "戰術")], "Watch the coach give the secret sign.", "看著教練比出秘密暗號。"),
    ("牛棚熱身與救援成功", "🔥", [("bullpen", "牛棚"), ("warm up", "熱身"), ("closer", "守護神投手"), ("win", "獲勝")], "The closer warms up in the bullpen.", "終結者守護神在牛棚熱身。"),
    ("棒球少棒金牌榮譽", "🏆", [("trophy", "獎盃"), ("champion", "冠軍"), ("medal", "獎牌"), ("proud", "驕傲的")], "Our team won the championship trophy.", "我們球隊贏得了冠軍獎盃。"),

    # Unit 3: 噴射戰鬥機航太與天空英雄 (L25-L32)
    ("戰鬥機駕駛艙儀表板", "✈️", [("cockpit", "駕駛艙"), ("radar", "雷達"), ("screen", "螢幕"), ("altitude", "高度")], "The pilot checks the cockpit radar.", "飛行員檢查駕駛艙雷達。"),
    ("噴射發動機後燃器", "🚀", [("engine", "發動機"), ("afterburner", "後燃器"), ("thrust", "推力"), ("sound", "聲音")], "The jet engine has huge thrust.", "噴射發動機擁有強大推力。"),
    ("超音速音爆震撼", "💥", [("sonic boom", "音爆"), ("speed of sound", "音速"), ("shockwave", "衝擊波"), ("cloud", "雲朵")], "The jet breaks the speed of sound.", "噴射機突破音速產生音爆。"),
    ("空中加油機精準接管", "⛽", [("tanker", "加油機"), ("refuel", "空中加油"), ("connect", "連接"), ("fuel", "燃料")], "The jet connects to refuel in air.", "戰機在空中對接加油。"),
    ("航母甲板彈射起飛", "🚢", [("carrier", "航空母艦"), ("catapult", "彈射器"), ("deck", "甲板"), ("launch", "發射起飛")], "The jet launches from carrier deck.", "戰機從航空母艦甲板彈射升空。"),
    ("特技飛行藍天翻滾", "🌀", [("stunt", "特技"), ("loop", "翻筋斗"), ("smoke", "彩煙"), ("crowd", "人群")], "The aerobatic plane makes a loop.", "特技飛機在空中畫出大翻滾。"),
    ("降落傘安全著陸", "🪂", [("parachute", "降落傘"), ("glide", "滑翔"), ("land", "著陸"), ("ground", "地面")], "The parachute glides safely to ground.", "降落傘安全滑翔著陸地面。"),
    ("航太飛行英勇勳章", "🎖️", [("brave", "勇敢的"), ("badge", "徽章"), ("mission", "任務"), ("success", "成功")], "He completed the brave sky mission.", "他成功完成了英勇的空中任務。"),

    # Unit 4: 撞球幾何世界與花式球技 (L33-L40)
    ("母球白球精準開球", "⚪", [("cue ball", "母球"), ("break shot", "開球"), ("pyramid", "球堆角架"), ("power", "力量")], "Hit the cue ball with power.", "用力推桿擊出強力開球。"),
    ("顆星反彈計算角度", "📐", [("bank shot", "顆星解球"), ("rail", "顆星邊框"), ("bounce", "反彈"), ("calculate", "計算")], "The ball bounces off the rail.", "球撞擊顆星邊框後反彈。"),
    ("拉桿後旋神技", "🌀", [("backspin", "後旋球"), ("draw shot", "拉桿"), ("chalk", "巧克粉"), ("friction", "摩擦力")], "Apply chalk to create great backspin.", "擦上巧克粉打出漂亮的後旋球。"),
    ("推桿前旋跟進", "⏩", [("follow shot", "推桿前旋"), ("smooth", "平順的"), ("forward", "向前"), ("center", "中心點")], "Push the cue smoothly forward.", "順暢地向前平推球桿。"),
    ("跳球越過障礙", "🦘", [("jump shot", "跳球"), ("obstacle", "障礙物"), ("elevate", "抬高桿尾"), ("clear", "越過")], "Elevate the cue for a jump shot.", "抬高桿尾擊出漂亮跳球。"),
    ("黑球八號關鍵落袋", "🎱", [("eight ball", "八號黑球"), ("pocket", "球袋"), ("corner", "底袋"), ("victory", "勝利")], "Sink the eight ball into the pocket.", "將八號黑球打進底袋獲勝。"),
    ("花式撞球神奇魔術", "🪄", [("trick shot", "花式撞球"), ("amazing", "驚人的"), ("spin", "旋轉"), ("applause", "掌聲")], "Everyone loves the amazing trick shot.", "大家都熱愛這記驚奇的花式特技。"),
    ("撞球錦標賽金獎盃", "🏆", [("champion", "冠軍"), ("master", "大師"), ("trophy", "獎盃"), ("handshake", "握手")], "The young master won the billiards trophy.", "年輕撞球大師榮獲冠軍獎盃。"),

    # Unit 5: 侏儸紀恐龍王國探秘 (L41-L48)
    ("三角龍巨大頸盾與尖角", "🦕", [("Triceratops", "三角龍"), ("horns", "尖角"), ("shield", "頸盾"), ("herbivore", "草食性")], "Triceratops has three sharp horns.", "三角龍長著三隻鋒利的角。"),
    ("迅猛龍靈敏群獵", "🦖", [("Velociraptor", "迅猛龍"), ("claw", "利爪"), ("pack", "群體"), ("agile", "敏捷的")], "The agile Velociraptor runs fast.", "敏捷的迅猛龍奔跑迅速。"),
    ("腕龍長頸採樹葉", "🌿", [("Brachiosaurus", "腕龍"), ("neck", "長頸"), ("tall", "高大的"), ("leaves", "樹葉")], "The Brachiosaurus reaches tall leaves.", "腕龍伸長脖子採食高處樹葉。"),
    ("翼龍展翅翱翔藍天", "🦅", [("Pterodactyl", "翼龍"), ("wings", "雙翼"), ("soar", "翱翔"), ("cliff", "懸崖")], "The giant Pterodactyl soars high.", "巨大的翼龍在高空盤旋翱翔。"),
    ("劍龍背骨板與尾刺", "🛡️", [("Stegosaurus", "劍龍"), ("plates", "背板"), ("spikes", "尾刺"), ("tail", "尾巴")], "Stegosaurus uses spikes for defense.", "劍龍用尾刺保護自己。"),
    ("甲龍重裝甲尾槌", "🔨", [("Ankylosaurus", "甲龍"), ("armor", "裝甲"), ("club", "尾槌"), ("heavy", "厚重的")], "Ankylosaurus has a heavy tail club.", "甲龍擁有厚重的尾槌。"),
    ("化石獵人發掘恐龍蛋", "🥚", [("fossil", "化石"), ("dinosaur egg", "恐龍蛋"), ("dig", "挖掘"), ("brush", "刷毛")], "The scientist digs a dinosaur egg.", "科學家挖掘出一枚恐龍蛋化石。"),
    ("恐龍王國自然守護者", "🌋", [("volcano", "火山"), ("jungle", "叢林"), ("footprint", "巨大腳印"), ("alive", "活生生的")], "We found a giant dinosaur footprint.", "我們發現了一個巨大的恐龍腳印。"),

    # Unit 6: 極速超跑與機械工藝 (L49-L56)
    ("流線型碳纖維車身", "🏎️", [("carbon fiber", "碳纖維"), ("streamline", "流線型"), ("body", "車身"), ("light", "輕量的")], "The supercar has a carbon fiber body.", "這輛超跑擁有碳纖維車身。"),
    ("雙渦輪增壓引擎爆發", "⚙️", [("twin-turbo", "雙渦輪增壓"), ("horsepower", "馬力"), ("exhaust", "排氣管"), ("roar", "咆哮")], "The twin-turbo engine roars loud.", "雙渦輪引擎發出轟鳴聲。"),
    ("空氣動力學大尾翼", "🏁", [("spoiler", "擾流尾翼"), ("downforce", "下壓力"), ("cornering", "過彎"), ("grip", "抓地力")], "The big spoiler creates huge downforce.", "大型尾翼產生巨大下壓力。"),
    ("陶瓷煞車散熱通風", "🛑", [("ceramic brake", "陶瓷煞車"), ("disc", "碟盤"), ("stop", "煞停"), ("heat", "熱量")], "Ceramic brakes stop the car fast.", "陶瓷煞車能極速煞停賽車。"),
    ("賽道維修區換胎大作戰", "🔧", [("pit stop", "維修區進站"), ("crew", "工作人員"), ("tire", "輪胎"), ("seconds", "秒數")], "The pit crew changed four tires.", "維修隊在數秒內換好了四個輪胎。"),
    ("終點格子旗揮舞", "🏁", [("checkered flag", "格子旗"), ("finish line", "終點線"), ("lap", "圈數"), ("winner", "贏家")], "Wave the checkered flag for winner.", "為第一名揮舞象徵勝利的格子旗。"),
    ("電動超跑零百加速", "⚡", [("electric car", "電動車"), ("battery", "電池模組"), ("accelerate", "加速"), ("silent", "安靜的")], "The electric car accelerates fast.", "這部電動超跑加速極其迅猛。"),
    ("超跑傳奇名人堂", "🏆", [("legend", "傳奇"), ("speed", "極速"), ("record", "紀錄"), ("glory", "光榮")], "He set a new world speed record.", "他創下了全新的世界速度紀錄。"),

    # Unit 7: 變形機器人格鬥競技 (L57-L64)
    ("合金裝甲重裝防禦", "🤖", [("armor plate", "裝甲板"), ("alloy", "合金"), ("shield", "能量護盾"), ("metal", "金屬")], "The alloy armor protects the robot.", "合金裝甲保護著機器人。"),
    ("機械手臂液壓傳動", "🦾", [("robotic arm", "機械手臂"), ("hydraulic", "液壓的"), ("grab", "抓取"), ("strength", "怪力")], "The hydraulic robotic arm is powerful.", "液壓機械手臂力量非常強大。"),
    ("雷射光束精準瞄準", "🔴", [("laser beam", "雷射光束"), ("target", "目標"), ("aim", "瞄準"), ("energy", "能量")], "Aim the laser beam at the target.", "將雷射光束精準瞄準目標。"),
    ("噴射推進器空中懸停", "💨", [("thruster", "推進噴嘴"), ("hover", "懸停"), ("fly", "飛行"), ("balance", "平衡")], "The thruster helps the robot hover.", "噴射推進器讓機器人懸停在空中。"),
    ("人工智慧戰鬥晶片", "💾", [("AI chip", "AI晶片"), ("circuit", "電路板"), ("processor", "處理器"), ("smart", "聰明的")], "The AI chip processes data fast.", "戰鬥AI晶片能飛速處理數據。"),
    ("無人巡邏無人偵察機", "🛸", [("drone", "無人機"), ("scout", "偵察"), ("sensor", "感測器"), ("patrol", "巡邏")], "The scout drone patrols the arena.", "偵察無人機在競技場上空巡邏。"),
    ("機器人合體超巨型戰神", "🌟", [("combine", "合體"), ("giant", "巨大的"), ("titan", "泰坦巨人"), ("power up", "充能增強")], "The small robots combine together.", "小型機器人合體變身超巨型戰神。"),
    ("機器人格鬥擂台冠軍", "👑", [("arena", "競技場"), ("champion", "格鬥冠軍"), ("cheer", "喝采"), ("spark", "火花")], "The champion robot won the match.", "冠軍機器人贏得了擂台總決賽。"),

    # Unit 8: 森林野營冒險與星空露營 (L65-L72)
    ("搭設防水露營帳篷", "⛺", [("tent", "帳篷"), ("peg", "營釘"), ("rope", "營繩"), ("camp", "露營")], "Pitch the tent near the river.", "在河畔旁搭設防水帳篷。"),
    ("保暖睡袋與防潮睡墊", "🛏️", [("sleeping bag", "睡袋"), ("mat", "睡墊"), ("warm", "溫暖的"), ("rest", "休息")], "Sleep warm inside the sleeping bag.", "在保暖睡袋裡舒服地休息。"),
    ("營火晚會烤棉花糖", "🔥", [("campfire", "營火"), ("marshmallow", "棉花糖"), ("roast", "烘烤"), ("stick", "竹籤")], "Roast sweet marshmallows over campfire.", "在營火上升火烘烤香甜棉花糖。"),
    ("登山健行背負水壺", "🥾", [("hiking", "健行"), ("boots", "登山靴"), ("canteen", "水壺"), ("trail", "步道")], "Wear strong boots for hiking trail.", "穿上結實的登山靴走步道。"),
    ("指南針與森林地圖", "🧭", [("compass", "指南針"), ("needle", "磁針"), ("north", "北方"), ("lost", "迷路")], "The compass needle points to north.", "指南針的磁針指向北方。"),
    ("手電筒夜間尋找貓頭鷹", "🔦", [("flashlight", "手電筒"), ("beam", "光束"), ("owl", "貓頭鷹"), ("night", "夜晚")], "Shine the flashlight to see owls.", "照亮手電筒在夜裡觀察貓頭鷹。"),
    ("抬頭仰望銀河與流星", "🌌", [("Milky Way", "銀河"), ("shooting star", "流星"), ("wish", "許願"), ("galaxy", "星系")], "Make a wish on a shooting star.", "對著劃過天際的流星許下願望。"),
    ("野營求生達人徽章", "🏕️", [("survival", "求生"), ("badge", "徽章"), ("nature", "大自然"), ("brave", "勇敢的")], "He earned the camp survival badge.", "他榮獲了野外露營求生達人徽章。"),

    # Unit 9: 美食料理大師與烘焙嘉年華 (L73-L80)
    ("手工披薩撒上濃起司", "🍕", [("pizza", "披薩"), ("cheese", "起司"), ("dough", "麵團"), ("bake", "烘烤")], "Sprinkle delicious cheese on the pizza dough.", "在披薩麵團上撒滿香濃起司。"),
    ("多汁牛肉漢堡配薯條", "🍔", [("burger", "漢堡"), ("beef", "牛肉"), ("fries", "薯條"), ("crispy", "酥脆的")], "Eat a juicy burger with crispy fries.", "大口咬下多汁漢堡搭配酥脆薯條。"),
    ("甜美草莓奶油蛋糕", "🍰", [("cake", "蛋糕"), ("strawberry", "草莓"), ("cream", "鮮奶油"), ("sweet", "甜美的")], "Put fresh strawberries on the sweet cake.", "在香甜蛋糕放上新鮮草莓。"),
    ("濃郁巧克力熱可可", "☕", [("chocolate", "巧克力"), ("cocoa", "熱可可"), ("cup", "馬克杯"), ("sip", "啜飲")], "Sip warm chocolate from your cup.", "從馬克杯中輕輕啜飲溫暖的巧克力。"),
    ("義大利肉醬麵與羅勒", "🍝", [("spaghetti", "義大利麵"), ("sauce", "醬汁"), ("basil", "羅勒"), ("fork", "叉子")], "Twirl the spaghetti with a fork.", "用叉子捲起香濃的義大利麵。"),
    ("香脆日式炸蝦天婦羅", "🍤", [("tempura", "天婦羅"), ("shrimp", "鮮蝦"), ("crispy", "香脆的"), ("dip", "沾醬")], "Dip the crispy shrimp into sauce.", "將香脆的炸蝦天婦羅沾上醬汁。"),
    ("繽紛水果優格冰淇淋", "🍨", [("ice cream", "冰淇淋"), ("yogurt", "優格"), ("toppings", "配料"), ("cold", "冰涼的")], "Add sweet fruit toppings to ice cream.", "在冰淇淋上加入繽紛的水果配料。"),
    ("小小廚神米其林大獎", "👨‍🍳", [("chef", "主廚"), ("recipe", "食譜"), ("award", "大獎"), ("delicious", "美味的")], "The young chef won a delicious award.", "小小主廚榮獲米其林烹飪大獎。"),

    # Unit 10: 海洋水族館與深海奇航 (L81-L88)
    ("巨大藍鯨深海下潛", "🐋", [("blue whale", "藍鯨"), ("ocean", "海洋"), ("deep", "深邃的"), ("spout", "噴水孔")], "The blue whale dives deep in ocean.", "巨大的藍鯨潛入深邃的大海中。"),
    ("海豚跳躍空中旋轉", "🐬", [("dolphin", "海豚"), ("jump", "跳躍"), ("clever", "聰明的"), ("wave", "海浪")], "The clever dolphin jumps over waves.", "聰明的海豚躍出海面翻滾。"),
    ("珊瑚礁小丑魚家園", "🐠", [("clownfish", "小丑魚"), ("coral reef", "珊瑚礁"), ("hide", "躲藏"), ("colorful", "色彩繽紛的")], "The clownfish hides in coral reef.", "可愛的小丑魚躲在珊瑚礁叢中。"),
    ("大白鯊尖牙利齒巡邏", "🦈", [("shark", "鯊魚"), ("fin", "背鰭"), ("sharp teeth", "利齒"), ("hunt", "巡獵")], "The shark swims with sharp teeth.", "鯊魚露著鋒利牙齒在海中巡游。"),
    ("八爪章魚噴墨偽裝", "🐙", [("octopus", "章魚"), ("tentacle", "觸手"), ("ink", "墨汁"), ("camouflage", "偽裝")], "The octopus sprays ink to escape.", "章魚噴出黑墨汁迅速偽裝逃脫。"),
    ("海龜悠遊海草床", "🐢", [("sea turtle", "海龜"), ("swim", "悠游"), ("seagrass", "海草"), ("shell", "硬殼")], "The sea turtle eats green seagrass.", "綠蠵龜在海草床上悠閒地進食。"),
    ("深海發光水母燈光秀", "🪼", [("jellyfish", "水母"), ("glow", "發光"), ("transparent", "透明的"), ("float", "漂浮")], "Glowing jellyfish float in dark ocean.", "發光的水母在幽暗深海中漂浮。"),
    ("深海潛水艇探險英雄", "🚤", [("submarine", "潛水艇"), ("periscope", "潛望鏡"), ("explore", "探索"), ("abyss", "深淵")], "The yellow submarine explores the deep abyss.", "黃色潛水艇探索深海未知的大深淵。"),

    # Final Milestone for elem_mid (L89-L90)
    ("四年級期末冒險大點兵", "🎒", [("review", "複習"), ("knowledge", "知識"), ("progress", "進步"), ("grade", "年級")], "We review all our useful knowledge.", "我們複習了四年級所有寶貴的知識。"),
    ("小學中級熱血滿級大考驗", "👑", [("mastery", "精通"), ("celebrate", "慶祝"), ("certificate", "結業證書"), ("future", "未來")], "Celebrate our great success and bright future.", "為我們豐碩的成果與美好的未來慶祝！"),
]

elem_adv_themes = [
    # Unit 2: 英語時態大師與過去故事 (L17-L24)
    ("上週末的遊樂園歡樂記", "🎢", [("visited", "參觀了"), ("rode", "搭乘了"), ("screamed", "尖叫了"), ("laughed", "大笑了")], "We rode the thrilling roller coaster yesterday.", "我們昨天搭乘了驚險刺激的雲霄飛車。"),
    ("博物館裡的歷史化石探險", "🏛️", [("discovered", "發現了"), ("learned", "學到了"), ("saw", "看見了"), ("took photos", "拍照了")], "She discovered dinosaur bones in the museum.", "她在博物館裡看見了巨大的恐龍化石。"),
    ("森林露營夜的奇幻冒險", "🏕️", [("built", "搭建了"), ("sang", "唱歌了"), ("heard", "聽見了"), ("slept", "入睡了")], "We sang cheerful songs around the fire.", "我們在營火旁歡樂地唱著歌。"),
    ("精彩少棒決賽奪冠時刻", "⚾", [("hit", "擊出了"), ("caught", "接住了"), ("won", "贏得了"), ("cheered", "歡呼了")], "Our star batter hit a home run.", "我們的明星打者擊出了全壘打。"),
    ("暑假夏令營結交新好友", "🤝", [("met", "認識了"), ("shared", "分享了"), ("played", "一起玩"), ("wrote", "寫信了")], "I met friendly classmates at the summer camp.", "我在夏令營結識了非常親切的同學。"),
    ("自己動手烤出香濃蛋糕", "🎂", [("baked", "烘烤了"), ("mixed", "攪拌了"), ("tasted", "品嚐了"), ("smiled", "微笑了")], "Mom baked a sweet chocolate cake for us.", "媽媽為我們烘烤了香甜的巧克力蛋糕。"),
    ("昨天下午的雷陣雨與彩虹", "🌈", [("rained", "下雨了"), ("stayed", "停留了"), ("appeared", "出現了"), ("cleared", "放晴了")], "A colorful rainbow appeared in the blue sky.", "一道七彩的彩虹出現在湛藍天空。"),
    ("過去式動詞三態通關檢定", "📝", [("grammar", "文法"), ("irregular", "不規則的"), ("practiced", "練習了"), ("mastered", "精通了")], "We practiced irregular past tense verbs daily.", "我們每天扎實練習過去式動詞三態變化。"),

    # Unit 3: 未來計畫與夢想願景 (L25-L32)
    ("今年暑假我將造訪東京", "🗼", [("will visit", "將拜訪"), ("famous", "著名的"), ("tower", "高塔"), ("plan", "計畫")], "I will visit the famous Tokyo Tower soon.", "我即將去參觀著名的東京鐵塔。"),
    ("我打算報名機器人程式營", "💻", [("going to", "打算"), ("code", "寫程式"), ("build", "建造"), ("skill", "技能")], "I am going to build a smart robot.", "我打算設計並建造一架智慧機器人。"),
    ("未來的我想要成為科學家", "🔬", [("dream", "夢想"), ("scientist", "科學家"), ("cure", "治癒"), ("help", "幫助")], "My dream is to cure illnesses worldwide.", "我的夢想是發明藥物幫助全世界的病人。"),
    ("下週球賽我們一定會贏", "🏅", [("certainly", "必定"), ("compete", "競爭"), ("victory", "勝利"), ("teamwork", "團隊合作")], "We will certainly win through great teamwork.", "透過優異的團隊合作我們一定會奪冠。"),
    ("明天早上我們將搭乘高鐵", "🚄", [("board", "搭乘"), ("high-speed train", "高鐵"), ("travel", "旅行"), ("station", "車站")], "We will board the train tomorrow morning.", "我們明天一早將在車站搭乘高鐵。"),
    ("我即將閱讀完這本冒險小說", "📚", [("finish", "完成"), ("adventure novel", "冒險小說"), ("chapter", "章節"), ("excited", "興奮的")], "I will finish reading the adventure novel tonight.", "我今晚就會把這本冒險小說讀完。"),
    ("保護海洋我將參加淨灘", "🌊", [("volunteer", "志工"), ("beach cleanup", "淨灘活動"), ("trash", "垃圾"), ("protect", "保護")], "I will join the beach cleanup this weekend.", "我這週末將擔任淨灘志工撿拾垃圾。"),
    ("未來式語法挑戰大滿貫", "🎯", [("future tense", "未來式"), ("promise", "承諾"), ("intention", "意圖"), ("confidently", "自信地")], "State your goals clearly and confidently.", "自信而明確地宣示你的未來目標。"),

    # Unit 4: 比較級與最高級極限大對決 (L33-L40)
    ("誰是世界陸地上跑最快的？", "🐆", [("cheetah", "獵豹"), ("faster than", "比...更快"), ("fastest", "最快的"), ("land animal", "陸生動物")], "The cheetah is the fastest land animal.", "獵豹是世界上跑得最快的陸地動物。"),
    ("世界上最高聳的聖母峰", "🏔️", [("Everest", "聖母峰"), ("taller than", "比...更高"), ("highest", "最高的"), ("mountain", "山峰")], "Mount Everest is the highest mountain on Earth.", "聖母峰是地球上海拔最高的山峰。"),
    ("海洋中最巨大的藍鯨", "🐋", [("heavier than", "比...更重"), ("biggest", "最大的"), ("creature", "生物"), ("ocean", "海洋")], "The blue whale is the biggest living creature.", "藍鯨是現存體型最龐大的海洋生物。"),
    ("沙漠中最炎熱嚴酷的環境", "🏜️", [("hotter than", "比...更熱"), ("hottest", "最炎熱的"), ("dry", "乾燥的"), ("desert", "沙漠")], "Death Valley is hotter than most places.", "死亡谷比地球上絕大多數地方都要酷熱。"),
    ("鑽石是自然界最堅硬礦物", "💎", [("diamond", "鑽石"), ("harder than", "比...更硬"), ("hardest", "最堅硬的"), ("mineral", "礦物")], "Diamonds are the hardest minerals in nature.", "鑽石是自然界中硬度最高的礦物。"),
    ("比光速還快的想像旅行", "💡", [("speed of light", "光速"), ("quicker than", "比...更敏捷"), ("universe", "宇宙"), ("distance", "距離")], "Nothing travels faster than the speed of light.", "沒有任何物體的運行速度能超越光速。"),
    ("最深邃的馬里亞納海溝", "🌊", [("trench", "海溝"), ("deeper than", "比...更深"), ("deepest", "最深邃的"), ("abyss", "深淵")], "The Mariana Trench is the deepest place.", "馬里亞納海溝是地球上最深邃的角落。"),
    ("形容詞比較級最高級大師", "👑", [("comparison", "比較"), ("superlative", "最高級"), ("accuracy", "精準度"), ("crown", "王冠")], "Use comparative and superlative forms accurately.", "精準地運用比較級與最高級文法句型。"),

    # Unit 5: 世界地理與環球奇觀 (L41-L48)
    ("古埃及金字塔與人面獅身", "🐫", [("pyramid", "金字塔"), ("Sphinx", "人面獅身像"), ("pharaoh", "法老"), ("ancient", "古老的")], "The ancient pyramids stand in the desert.", "古老的金字塔莊嚴矗立在沙漠之中。"),
    ("法國巴黎艾菲爾鐵塔與塞納河", "🗼", [("Eiffel Tower", "艾菲爾鐵塔"), ("river", "河流"), ("capital", "首都"), ("monument", "紀念碑")], "Tourists love the Eiffel Tower in Paris.", "觀光客非常喜愛巴黎的艾菲爾鐵塔。"),
    ("義大利威尼斯浪漫水上貢多拉", "🛶", [("gondola", "貢多拉鳳尾船"), ("canal", "運河"), ("waterway", "水路"), ("historic", "歷史悠久的")], "Ride a gondola along the historic canal.", "搭乘貢多拉沿著歷史悠久的運河穿梭。"),
    ("美國紐約自由女神像與天際線", "🗽", [("Statue of Liberty", "自由女神像"), ("harbor", "港口"), ("skyline", "天際線"), ("freedom", "自由")], "The Statue of Liberty welcomes visitors from afar.", "自由女神像在紐約港迎接遠道而來的旅客。"),
    ("澳洲大堡礁絢爛珊瑚與海龜", "🪸", [("Great Barrier Reef", "大堡礁"), ("marine life", "海洋生態"), ("scuba dive", "水肺潛水"), ("fragile", "脆弱的")], "Protect the fragile Great Barrier Reef.", "用心保護極為脆弱的大堡礁海洋生態。"),
    ("巴西亞馬遜熱帶雨林綠色之肺", "🌴", [("Amazon", "亞馬遜"), ("rainforest", "雨林"), ("oxygen", "氧氣"), ("biodiversity", "生物多樣性")], "The rainforest produces oxygen for our planet.", "亞馬遜雨林為我們的地球生產大量氧氣。"),
    ("日本富士山四季櫻花倒影", "🗻", [("Mount Fuji", "富士山"), ("cherry blossom", "櫻花"), ("reflection", "倒影"), ("sacred", "神聖的")], "Mount Fuji looks stunning in cherry blossom season.", "富士山在盛開的櫻花季顯得格外出塵動人。"),
    ("小小環球地理知識達人", "🌍", [("globe", "地球儀"), ("continent", "大洲"), ("culture", "文化"), ("passport", "護照")], "Explore diverse continents across the globe.", "探索地球上各大洲多元璀璨的獨特文化。"),

    # Unit 6: 先進科技與未來智能生活 (L49-L56)
    ("空拍無人機航拍山川美景", "🚁", [("drone", "無人機"), ("aerial photo", "空拍照片"), ("propeller", "螺旋槳"), ("landscape", "地貌風景")], "The drone captures breathtaking aerial photos.", "空拍無人機捕捉到了令人驚嘆的壯麗地貌。"),
    ("3D列印機快速成型模型", "🖨️", [("3D printer", "3D列印機"), ("nozzle", "噴嘴"), ("layer", "層疊"), ("prototype", "原型樣品")], "The 3D printer creates objects layer by layer.", "3D列印機一層層列印出實體模型原型。"),
    ("自動駕駛電動車雷達巡航", "🚗", [("self-driving", "自動駕駛"), ("sensor", "感測器"), ("autopilot", "自動導航"), ("safety", "行車安全")], "Sensors help the self-driving car navigate safely.", "車載感測器指引自動駕駛車安全巡航行駛。"),
    ("智慧家庭語音助理開關燈", "🏠", [("smart home", "智慧家庭"), ("voice assistant", "語音助理"), ("command", "指令"), ("appliance", "家電")], "Speak to the voice assistant to dim lights.", "開口對語音助理下指令調節室內燈光。"),
    ("虛擬實境VR眼鏡漫遊火星", "🥽", [("virtual reality", "虛擬實境"), ("headset", "頭戴顯示器"), ("simulate", "模擬"), ("immersion", "沉浸感")], "Put on the headset for a virtual tour.", "戴上VR眼鏡踏上一場身歷其境的火星漫遊。"),
    ("太陽能屋頂儲能綠色發電", "☀️", [("solar panel", "太陽能板"), ("clean energy", "潔淨能源"), ("store", "儲存"), ("grid", "電網")], "Solar panels convert sunlight into clean electricity.", "太陽能板能高效地將日照轉換為潔淨電力。"),
    ("四足機器狗敏捷搜救任務", "🐕‍🦺", [("robot dog", "機器狗"), ("rescue", "搜救"), ("terrain", "地形"), ("navigate", "導航穿越")], "The robot dog navigates rough disaster terrain.", "搜救機器狗能靈活穿越崎嶇險惡的災難現場。"),
    ("小小小小科學發明家殊榮", "💡", [("inventor", "發明家"), ("innovation", "創新"), ("patent", "專利"), ("solve", "解決問題")], "Young inventors use technology to solve problems.", "小小發明家善用前瞻科技解決生活難題。"),

    # Unit 7: 國際旅行與機場實用英語 (L57-L64)
    ("機場航廈出境報到櫃檯", "🧳", [("check-in counter", "報到櫃檯"), ("boarding pass", "登機證"), ("luggage", "行李"), ("weigh", "秤重")], "Show your passport at the check-in counter.", "請在報到櫃檯出示您的護照與電子機票。"),
    ("隨身行李安全檢查通道", "🛂", [("security checkpoint", "安檢站"), ("metal detector", "金屬探測門"), ("carry-on", "隨身隨身包"), ("inspect", "檢查")], "Place your carry-on bag through scanner.", "請將隨身行李放入安檢儀器通道受檢。"),
    ("登機門候機與優先登機", "🛫", [("boarding gate", "登機門"), ("departure", "起飛時間"), ("announcement", "廣播廣播"), ("delay", "延誤")], "Listen carefully to the gate announcement.", "請務必仔細聆聽候機室登機門廣播。"),
    ("機上點餐果汁與雞肉飯", "🍽️", [("flight attendant", "空服員"), ("meal", "機上餐"), ("chicken or beef", "雞肉或牛肉"), ("seatbelt", "安全帶")], "Fasten your seatbelt before meals are served.", "在空服員供餐前請先繫好您的安全帶。"),
    ("入境移民官護照查驗回答", "🛂", [("customs", "海關"), ("purpose of visit", "造訪目的"), ("sightseeing", "觀光旅遊"), ("declare", "申報物品")], "I am visiting for vacation and sightseeing.", "我本次入境的主要目的是放假休閒與觀光。"),
    ("青年旅館詢問櫃檯與Wi-Fi", "🏨", [("hostel", "青年旅館"), ("reception", "接待櫃檯"), ("password", "密碼"), ("keycard", "房卡")], "Ask the reception desk for Wi-Fi password.", "請向前台接待人員索取客房無線網路密碼。"),
    ("地鐵轉乘購票與看路線圖", "🚇", [("subway map", "地鐵路線圖"), ("ticket machine", "售票機"), ("transfer", "轉乘"), ("platform", "月台")], "Check the subway map to find your transfer.", "請參閱地鐵路線圖確認下一站的轉乘月台。"),
    ("小小國際背包客通關星章", "✈️", [("traveler", "旅人"), ("independence", "獨立"), ("explore", "勇敢探索"), ("memories", "回憶")], "Become an independent and confident global traveler.", "成為一位獨立自主且充滿自信的環球小背包客。"),

    # Unit 8: 地球守護者與綠色永續 (L65-L72)
    ("垃圾四色資源分類好習慣", "♻️", [("recycle", "資源回收"), ("plastic bottle", "寶特瓶"), ("cardboard", "紙板"), ("bin", "分類桶")], "Sort plastic bottles into the recycling bin.", "請將透明寶特瓶洗淨投入資源回收桶。"),
    ("自備環保餐具與保溫瓶", "🥤", [("reusable", "可重複使用的"), ("straw", "吸管"), ("tumbler", "隨行保溫杯"), ("reduce waste", "減少垃圾")], "Bring a reusable tumbler to reduce plastic waste.", "自備環保隨行保溫杯以減少一次性塑膠垃圾。"),
    ("隨手關閉電源節約能源", "🔌", [("turn off", "隨手關閉"), ("unplug", "拔掉插頭"), ("electricity", "電力"), ("conserve", "節約")], "Conserve electricity by turning off unnecessary lights.", "隨手關掉不必要的室內燈具以節約寶貴用電。"),
    ("珍惜水資源關緊水龍頭", "🚰", [("faucet", "水龍頭"), ("leak", "漏水"), ("water drop", "水滴"), ("precious", "珍貴的")], "Do not let the water faucet leak.", "切勿讓水龍頭滴水造成珍貴水資源浪費。"),
    ("搭乘大眾運輸減少碳足跡", "🚌", [("public transit", "大眾運輸"), ("carbon footprint", "碳足跡"), ("emissions", "碳排放"), ("commute", "通勤")], "Riding buses helps lower your carbon footprint.", "搭乘公車等綠色運具能有效降低個人碳足跡。"),
    ("週末社區植樹綠化造林", "🌱", [("plant trees", "種植樹木"), ("soil", "肥沃土壤"), ("shade", "樹蔭"), ("seedling", "幼苗")], "We planted green seedlings in the park.", "我們週末在社區公園種下了一棵棵綠色樹苗。"),
    ("拒絕快時尚愛惜舊衣物", "👕", [("secondhand", "二手的"), ("donate", "捐贈"), ("repair", "縫補修復"), ("sustainable", "永續的")], "Donate outgrown clothes to charity organizations.", "將穿不下的完好舊衣物捐贈給公益慈善機構。"),
    ("地球生態小衛士最高勛章", "🌍", [("guardian", "守護者"), ("ecosystem", "生態系"), ("harmony", "和諧共存"), ("pledge", "宣誓承諾")], "Take the pledge to protect planet Earth.", "莊嚴宣誓誓死守護我們獨一無二的美麗地球。"),

    # Unit 9: 運動防護與健康體能 (L73-L80)
    ("運動前確實動態暖身防拉傷", "🤸", [("warm up", "熱身"), ("stretch", "伸展拉筋"), ("injury", "運動傷害"), ("prevent", "預防")], "Always stretch properly to prevent sports injuries.", "運動前確實做好伸展熱身能有效預防肌肉拉傷。"),
    ("長跑訓練調配呼吸節奏", "🏃", [("jogging", "慢跑"), ("breathe", "調整呼吸"), ("pace", "配速"), ("endurance", "耐力")], "Maintain a steady breathing pace while jogging.", "慢跑時保持規律平穩的呼吸與舒適的配速步頻。"),
    ("籃球擋拆戰術與外線投射", "🏀", [("pick and roll", "擋拆戰術"), ("three-pointer", "三分球"), ("assist", "助攻"), ("dribble", "運球")], "He set a pick for a three-pointer.", "他做了一次精彩的掩護擋拆讓隊友投進三分球。"),
    ("足球小組倒三角短傳射門", "⚽", [("pass", "短傳"), ("strike", "射門"), ("cross", "橫傳"), ("goalkeeper", "守門員")], "A swift pass beat the agile goalkeeper.", "一記迅雷不及掩耳的短傳攻破了對手守門員。"),
    ("羽球後場劈殺與網前小球", "🏸", [("smash", "殺球"), ("drop shot", "網前小球"), ("racket", "球拍"), ("agility", "敏捷身手")], "Execute a sharp smash across the court.", "在後場騰空躍起打出一記落點刁鑽的劈殺。"),
    ("桌球正手搶拉強烈旋轉球", "🏓", [("topspin", "上旋球"), ("paddle", "桌球拍"), ("loop", "弧圈球"), ("rally", "多拍來回對攻")], "Spin the ball with strong forehand topspin.", "用正手擊球拍強烈摩擦球體拉出高速上旋弧圈。"),
    ("游泳自由式換氣與踢水節奏", "🏊", [("freestyle", "自由式"), ("kick", "打水"), ("breath", "換氣"), ("stroke", "划手動作")], "Kick rhythmically while breathing every three strokes.", "每划手三次順暢換氣並維持高頻率打水節奏。"),
    ("校園體育全能MVP金牌", "🏅", [("athlete", "運動員"), ("sportsmanship", "運動家精神"), ("honor", "榮譽"), ("MVP", "最佳最有價值球員")], "Demonstrate true sportsmanship both on and off court.", "在球場內外都全力展現最崇高的運動家風範。"),

    # Unit 10: 畢業成果發表與全能演講 (L81-L88)
    ("擬定精彩英語演講引言大綱", "📝", [("outline", "演講大綱"), ("introduction", "精彩開場"), ("topic", "演講主題"), ("hook", "吸睛亮點")], "Hook the audience with an exciting introduction.", "用一段引人入勝且新穎的開場迅速吸引聽眾。"),
    ("上台自信站姿與目光接觸", "🎤", [("eye contact", "目光接觸"), ("posture", "自信儀態"), ("confident", "胸有成竹的"), ("voice", "清晰嗓音")], "Maintain confident posture and eye contact.", "在台上演講時保持端莊筆挺的站姿與眼神交流。"),
    ("製作圖文並茂的簡報投影片", "📊", [("slideshow", "簡報投影片"), ("chart", "圖表數據"), ("visual", "視覺輔助"), ("clarity", "條理分明")], "Clear visual slides make presentations engaging.", "清晰易懂的圖表簡報讓整場發表更加引人入勝。"),
    ("面對全校評審提問沉著應答", "🙋", [("question", "問題提問"), ("calm", "沉著冷靜的"), ("explain", "詳加闡釋"), ("judges", "評審委員")], "Answer the judges questions calmly and politely.", "沉著冷靜且彬彬有禮地回答全體評審委員提問。"),
    ("榮獲全校英語專題研究首獎", "🏆", [("first prize", "第一名特優"), ("certificate", "得獎獎狀"), ("applause", "熱烈掌聲"), ("recognition", "高度肯定")], "Our team won the coveted first prize.", "我們的專案團隊榮獲了令人稱羨的特優第一名！"),
    ("小學畢業紀念冊簽名祝福", "📖", [("yearbook", "畢業紀念冊"), ("signature", "簽名"), ("blessing", "祝福語"), ("friendship", "永恆友誼")], "Sign warm blessings in your classmates yearbook.", "在全班同學的畢業紀念冊上簽下最真摯的祝福。"),
    ("向恩師與同窗好友真誠致謝", "💐", [("grateful", "心存感激的"), ("mentor", "恩師良師"), ("thank", "真摯道謝"), ("unforgettable", "刻骨銘心的")], "We are deeply grateful for our teachers guidance.", "我們對恩師一路以來的悉心指導滿懷無限感激。"),
    ("小學冒險圓滿告捷展望國中", "🎓", [("graduate", "畢業"), ("milestone", "人生里程碑"), ("journey", "冒險征程"), ("ready", "萬全準備好的")], "We are ready for the next adventure.", "我們已做好萬全準備，昂首邁向國中嶄新征途！"),

    # Final Milestone for elem_adv (L89-L90)
    ("小學全階段核心字彙極限總結", "🧠", [("vocabulary", "核心字彙庫"), ("fluency", "流暢表達"), ("comprehension", "深入理解"), ("achievement", "卓越成就")], "Show complete mastery of all foundational words.", "全面展現對小學全階段核心英語字彙的精通掌握！"),
    ("六載韶華波波勇者登頂加冕", "👑", [("champion", "至尊王者"), ("triumph", "勝利凱旋"), ("legend", "波波傳奇"), ("future", "璀璨未來")], "Crown your incredible six-year learning adventure.", "為你輝煌精彩的小學英語大冒險戴上榮耀王冠！"),
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
    assert len(elem_mid_themes) == 74, f"elem_mid count: {len(elem_mid_themes)}"
    assert len(elem_adv_themes) == 74, f"elem_adv count: {len(elem_adv_themes)}"
    write_module("curriculum_data_builders/elem_mid.py", elem_mid_themes)
    write_module("curriculum_data_builders/elem_adv.py", elem_adv_themes)
    print("Successfully generated elem_mid.py and elem_adv.py with 74 themes each!")
