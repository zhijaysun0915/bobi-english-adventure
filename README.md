# 🦉 波波英語大冒險 (Bobi English Adventure)

> 專為國小四年級學童量身打造的 **Duolingo 風格英語闖關學習網頁遊戲**！  
> 100% 繁體中文介面、標準美式發音、免安裝即開即玩！

🎮 **線上直接玩（Live Demo）**：  
👉 [https://zhijaysun0915.github.io/bobi-english-adventure/](https://zhijaysun0915.github.io/bobi-english-adventure/)

---

## 🌟 遊戲特色與亮點

- 🗺️ **經典蛇形冒險地圖**：仿造 Duolingo 闖關路徑，包含關卡解鎖、三星評分、挑戰狀態與大魔王試煉。
- 🦉 **可愛吉祥物「波波（Bobi）」**：隨機給予加油打氣，答題時即時給予生動的情境反饋。
- 🔊 **標準美式發音朗讀（Web Speech API）**：針對國小學童調校至 0.85x 清晰慢速，點擊喇叭即可反覆聆聽發音。
- 🎵 **純程式碼音效合成（Web Audio API）**：包含答對音、答錯音、按鍵音與通關勝利號角，無須外部音檔，100% 離線可用。
- ❤️ **愛心體力與補血機制**：初始 5 顆愛心，答錯扣心；若愛心耗盡，可進行「快速複習練習」回滿體力，寓教於樂。
- 🔥 **遊戲化養成元素**：累積連勝天數（Streak）、鑽石寶石（Gems）與經驗值（XP）。
- 📖 **單元單字預習卡**：每一單元均附有單字學習卡，出發闖關前可先預習並點擊練習發音。
- 📜 **四年級專屬結業榮譽證書**：完成大魔王關卡後，可輸入學生姓名，頒發專屬數位認證證書！
- 🇹🇼 **純正繁體中文**：全題目與說明嚴格遵循臺灣國小課綱用語，無任何簡體字。

---

## 📚 七大單元漸進式學習課綱 (Grade 4)

| 單元 | 單元主題 | 核心字彙與文法句型 |
| :--- | :--- | :--- |
| **Unit 1** | **晨間日常與學校生活** | 文具 (`pencil, eraser, backpack, ruler`)、問時間與作息 (`What time is it? It is seven o'clock.`) |
| **Unit 2** | **可愛動物與大自然探險** | 野生動物 (`elephant, monkey, tiger, zebra`)、特徵形容詞 (`The monkey is in the tree.`) |
| **Unit 3** | **美味野餐與飲食喜好** | 美食飲品 (`sandwich, pizza, milk, juice`)、表達喜好與感受 (`Do you like apples? I am hungry.`) |
| **Unit 4** | **身體部位與心情感受** | 五官身體 (`eyes, ears, stomach`)、情緒表達 (`How are you? I am very happy.`) |
| **Unit 5** | **捉迷藏！神奇方位大搜查** | 空間介系詞 (`in, on, under, behind, next to`)、物品位置尋找問答 |
| **Unit 6** | **週末運動與才藝達人** | 運動樂器 (`play soccer, ride a bike, swim, guitar`)、能力助動詞 (`Can you ride a bicycle? Yes, I can.`) |
| **Unit 7** | **終極榮譽！闖關大師試煉** | 跨單元大綜合會考、情境聽力對話、長句拼字重組，通關領取**榮譽證書**！ |

---

## 🎯 題型介紹

1. **圖文詞彙選擇題**：配對可愛 Emoji 圖示與英文單字。
2. **句子磁貼重組 (Sentence Scramble)**：Duolingo 經典造句玩法，點擊單字磁貼組出完整句子。
3. **聽力測驗大挑戰**：專注聆聽標準美語發音，選出正確語義或單字。
4. **詞彙對對碰 (Matching Pairs)**：8 張卡片隨機打散，配對中英文詞彙快速消除。
5. **文法填空題 (Cloze)**：考驗介系詞、代名詞與動詞填空。

---

## 💻 本地離線遊玩

本專案為零依賴的純前端 Single Page Application (SPA)，無須安裝 Node.js 或任何後端伺服器：

1. 下載或 Clone 本專案：
   ```bash
   git clone https://github.com/zhijaysun0915/bobi-english-adventure.git
   ```
2. 直接使用任何現代瀏覽器（Google Chrome、Safari、Microsoft Edge 等）雙擊開啟 `index.html` 即可立即開始遊玩！

---

## 🛠️ 技術架構

- **HTML5 & CSS3**：響應式 Flexbox / CSS Grid 版面，支援平板、手機與電腦螢幕。
- **Modern JavaScript (ES6+)**：純原生 JavaScript，無需第三方前端框架。
- **Web Speech API**：原生語音合成引擎 (`SpeechSynthesis`)。
- **Web Audio API**：原生多波形振盪器音效即時合成。
- **HTML5 Canvas**：通關慶祝全螢幕彩帶粒子動畫。
- **LocalStorage API**：自動在本地端永久儲存學生的通關進度、XP 與愛心。

---

## 📄 授權條款 (License)

本專案採用 [MIT License](LICENSE) 授權，歡迎教育工作者、家長與學童自由使用與交流學習。
