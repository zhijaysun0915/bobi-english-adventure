/**
 * 四年級總複習｜動畫圖解模組（v2.6.0）
 * 每個單元對應 1~2 張「圖文＋動畫」說明卡，由 grade4.html 的 openConcepts 載入。
 * 使用方式：window.G4_VISUALS[unitId] = [{ title, caption, html }]
 * 動畫皆為純 CSS / SVG，無外部資源；按「重播」可重新播放。
 */
(function (root) {
  const css = `
  .g4v-box{border:2.5px solid #bae6fd;background:linear-gradient(180deg,#f0f9ff,#fff);border-radius:20px;padding:16px;margin-top:14px}
  .g4v-head{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px}
  .g4v-head h3{font-size:1.1rem;font-weight:900;color:#0369a1;margin:0}
  .g4v-replay{border:2px solid #38bdf8;background:#e0f2fe;color:#0369a1;font-weight:800;border-radius:12px;padding:4px 12px;cursor:pointer;font-size:.85rem}
  .g4v-cap{font-size:.9rem;color:#334155;margin-top:10px;font-weight:600;white-space:pre-line}
  .g4v-stage{display:flex;flex-wrap:wrap;gap:8px;align-items:stretch;justify-content:center}
  .g4v-step{background:#fff;border:2.5px solid #e2e8f0;border-radius:16px;padding:10px 12px;min-width:92px;max-width:150px;text-align:center;opacity:0;transform:translateY(14px) scale(.9)}
  .g4v-step .e{font-size:2rem;display:block}
  .g4v-step .t{font-size:.82rem;font-weight:800;color:#1e293b}
  .g4v-arrow{align-self:center;font-size:1.4rem;color:#38bdf8;opacity:0}
  .g4v-play .g4v-step{animation:g4vIn .5s ease forwards;animation-delay:calc(var(--i)*.55s)}
  .g4v-play .g4v-arrow{animation:g4vFade .4s ease forwards;animation-delay:calc(var(--i)*.55s - .2s)}
  .g4v-play .g4v-step .e{animation:g4vBob 1.4s ease-in-out infinite;animation-delay:calc(var(--i)*.55s + .5s)}
  @keyframes g4vIn{to{opacity:1;transform:none}}
  @keyframes g4vFade{to{opacity:1}}
  @keyframes g4vBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
  .g4v-svg{width:100%;max-width:520px;display:block;margin:0 auto}
  .g4v-svg text{font-family:inherit;font-weight:800}
  .g4v-play .draw{stroke-dasharray:var(--len,400);stroke-dashoffset:var(--len,400);animation:g4vDraw 1.6s ease forwards}
  @keyframes g4vDraw{to{stroke-dashoffset:0}}
  .g4v-play .pop{opacity:0;animation:g4vIn .5s ease forwards;animation-delay:calc(var(--i,0)*.5s)}
  .g4v-play .slide{animation:g4vSlide 2.4s ease-in-out infinite alternate}
  @keyframes g4vSlide{from{transform:translateX(0)}to{transform:translateX(var(--dx,60px))}}
  .g4v-play .shake{animation:g4vShake .35s linear infinite}
  @keyframes g4vShake{0%{transform:translate(0,0)}25%{transform:translate(2px,-2px)}50%{transform:translate(-2px,2px)}75%{transform:translate(2px,2px)}100%{transform:translate(0,0)}}
  .g4v-play .wave{animation:g4vWave 1.2s ease-out infinite;transform-origin:center;transform-box:fill-box}
  @keyframes g4vWave{from{transform:scale(.3);opacity:.9}to{transform:scale(1.6);opacity:0}}
  .g4v-play .color-flip{animation:g4vFlip 3s ease-in-out infinite alternate}
  @keyframes g4vFlip{0%,30%{fill:var(--a)}70%,100%{fill:var(--b)}}
  .g4v-play .grow{animation:g4vGrow 3s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:center}
  @keyframes g4vGrow{from{transform:scale(1)}to{transform:scale(var(--s,1.35))}}
  .g4v-steps{display:flex;flex-direction:column;gap:8px;margin-top:6px}
  .g4v-ex{display:flex;gap:10px;align-items:flex-start;background:#fff;border:2.5px solid #e2e8f0;border-radius:14px;padding:10px 12px;font-size:1rem;color:#1e293b;opacity:0;transform:translateX(-14px)}
  .g4v-ex .n{flex:none;width:30px;height:30px;border-radius:50%;background:#0ea5e9;color:#fff;font-weight:900;display:flex;align-items:center;justify-content:center}
  .g4v-ex span:not(.n){color:#475569;font-weight:600}
  .g4v-play .g4v-ex{animation:g4vEx .5s ease forwards;animation-delay:calc(var(--i)*.45s)}
  @keyframes g4vEx{to{opacity:1;transform:none}}
  /* iPad / 平板放大 */
  html{font-size:calc(16px * var(--g4-scale,1))}
  @media (min-width:700px){
    .g4v-box{padding:22px}.g4v-head h3{font-size:1.4rem}.g4v-cap{font-size:1.1rem}
    .g4v-step{min-width:130px;max-width:190px;padding:14px}.g4v-step .e{font-size:2.8rem}.g4v-step .t{font-size:1.05rem}
    .g4v-ex{font-size:1.2rem;padding:14px 16px}.g4v-ex .n{width:38px;height:38px}
    .g4v-svg{max-width:820px}.g4v-replay{font-size:1rem;padding:8px 18px;min-height:44px}
  }
  `;
  if (typeof document !== 'undefined' && !document.getElementById('g4v-style')) {
    const st = document.createElement('style');
    st.id = 'g4v-style';
    st.textContent = css;
    document.head.appendChild(st);
  }

  // 流程步驟動畫：steps = [[emoji, 文字], ...]
  function flow(steps) {
    return '<div class="g4v-stage">' + steps.map((s, i) =>
      (i ? `<span class="g4v-arrow" style="--i:${i}">➜</span>` : '') +
      `<div class="g4v-step" style="--i:${i}"><span class="e">${s[0]}</span><span class="t">${s[1]}</span></div>`
    ).join('') + '</div>';
  }
  function svg(vb, inner) {
    return `<svg class="g4v-svg" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
  }

  const V = {};

  /* ============ 國語 ============ */
  V['chi-u7'] = [{ title: '松鼠先生的心情四部曲', caption: '從滿懷信心到失敗，再到「眼淚的鹹味」讓麵包成功——失敗是成功的調味！',
    html: flow([['🐿️','滿懷信心'],['🔥','麵包烤焦'],['😞','垂頭喪氣'],['😭','淚如雨下'],['🧂','眼淚調味成功！']]) }];
  V['chi-u8'] = [{ title: '「平凡」＋「大俠」＝陳樹菊', caption: '大俠不用飛簷走壁：每天誠懇工作＋真心幫助別人，就是真正的大俠。',
    html: flow([['🥬','市場賣菜（平凡）'],['💰','省吃儉用'],['📚','捐錢蓋圖書館'],['🧒','照顧弱勢兒童'],['🦸','平凡的大俠']]) }];
  V['chi-u9'] = [{ title: '一支箭 vs 一把箭', caption: '單獨一支箭很容易折斷；綁成一束就沒人折得斷——團結力量大！',
    html: svg('0 0 520 170', `
      <g class="pop" style="--i:0"><line x1="40" y1="85" x2="200" y2="85" stroke="#92400e" stroke-width="6" stroke-linecap="round"/><polygon points="200,75 220,85 200,95" fill="#64748b"/><text x="40" y="45" font-size="16" fill="#1e293b">🏹 一支箭</text></g>
      <g class="pop" style="--i:1.5"><text x="75" y="130" font-size="22">💥 一折就斷！</text></g>
      <g class="pop" style="--i:2.5"><g stroke="#92400e" stroke-width="6" stroke-linecap="round"><line x1="290" y1="70" x2="450" y2="70"/><line x1="290" y1="80" x2="450" y2="80"/><line x1="290" y1="90" x2="450" y2="90"/><line x1="290" y1="100" x2="450" y2="100"/></g><rect x="350" y="62" width="14" height="46" rx="4" fill="#f59e0b"/><text x="290" y="45" font-size="16" fill="#1e293b">🎯 一把箭</text></g>
      <g class="pop" style="--i:3.5"><text x="290" y="140" font-size="20" fill="#16a34a">💪 同心協力，折不斷！</text></g>`) }];
  V['chi-u10'] = [{ title: '珊瑚白化三步驟', caption: '珊瑚是【動物】不是植物或石頭！海水變暖→共生藻離開→珊瑚變白，環境不改善就會死亡。',
    html: flow([['🌡️','海水變暖'],['🌿','共生藻離開'],['🪸','珊瑚白化（生病）'],['💀','不改善就死亡']]) +
    svg('0 0 520 90', `<circle cx="140" cy="45" r="30" class="color-flip grow" style="--a:#fb7185;--b:#f1f5f9"/><text x="190" y="52" font-size="16" fill="#334155">← 珊瑚：彩色（健康）⇄ 白色（白化）</text>`) }];
  V['chi-u11'] = [{ title: '「美食島」的反差', caption: '名字叫「美食島」，其實是「塑膠垃圾島」。用海洋生物的天真誤認，形成強烈反差。',
    html: flow([['🐟','小魚看到彩色漂浮物'],['😋','以為是美食'],['🥤','其實是塑膠垃圾'],['🤢','生病受困'],['♻️','減塑愛海洋']]) }];
  V['chi-u12'] = [{ title: '關聯詞接龍', caption: '遞進：不但…而且…　轉折：雖然…但是…　條件：只要…就…（有就行）／只有…才…（唯一條件）',
    html: flow([['👂','聽覺摹寫：風聲沙沙'],['➕','不但…而且…'],['↩️','雖然…但是…'],['✅','只要…就…'],['🔑','只有…才…']]) }];

  /* ============ 數學 ============ */
  V['math-u6'] = [
    { title: '分數數線：真分數・假分數・帶分數', caption: '小於 1 的是真分數；等於或大於 1 的是假分數；整數＋真分數叫帶分數。例：7/4 = 1又3/4。',
      html: svg('0 0 520 150', `
        <line class="draw" style="--len:460" x1="30" y1="80" x2="490" y2="80" stroke="#334155" stroke-width="4"/>
        ${[0,1,2].map(i => `<line x1="${30+i*200}" y1="68" x2="${30+i*200}" y2="92" stroke="#334155" stroke-width="4"/><text x="${24+i*200}" y="115" font-size="18" fill="#1e293b">${i}</text>`).join('')}
        ${[1,2,3,5,6,7].map(k => `<line x1="${30+k*50}" y1="74" x2="${30+k*50}" y2="86" stroke="#94a3b8" stroke-width="3"/>`).join('')}
        <g class="pop" style="--i:1"><circle cx="130" cy="80" r="9" fill="#22c55e"/><text x="108" y="52" font-size="15" fill="#16a34a">2/4 真分數</text></g>
        <g class="pop" style="--i:2"><circle cx="230" cy="80" r="9" fill="#f59e0b"/><text x="196" y="52" font-size="15" fill="#d97706">4/4 假分數</text></g>
        <g class="pop" style="--i:3"><circle cx="355" cy="80" r="9" fill="#ef4444"/><text x="302" y="52" font-size="15" fill="#dc2626">7/4＝1又3/4 帶分數</text></g>`) },
    { title: '假分數 ⇄ 帶分數 互換', caption: '假→帶：分子 ÷ 分母，商是整數、餘數當分子。　帶→假：整數×分母＋分子。',
      html: flow([['7/4','7 ÷ 4 = 1 … 3'],['1又3/4','商 1 當整數，餘 3 當分子'],['↩️','整數×分母＋分子 = 1×4+3'],['7/4','換回假分數']]) }];
  V['math-u7'] = [{ title: '週期重複與餘數', caption: '看第幾個就「÷週期」，餘數決定位置；餘 0 就是週期的最後一個。奇＋奇＝偶，奇＋偶＝奇。',
    html: flow([['🔴','1'],['🔵','2'],['🟢','3'],['🔴','4（餘1）'],['🔵','5（餘2）'],['🟢','6（餘0=第3個）']]) +
    '<div class="g4v-cap">第 17 個？ 17 ÷ 3 = 5 … 2 → 與第 2 個相同 🔵</div>' }];
  V['math-u8'] = [{ title: '四則運算順序', caption: '① 括號先算　② 乘除（由左而右）　③ 加減（由左而右）。',
    html: flow([['( )','括號最優先'],['✖️➗','再算乘除'],['➕➖','最後加減']]) +
    '<div class="g4v-cap">例：20 − (3 + 2) × 4 ＝ 20 − 5 × 4 ＝ 20 − 20 ＝ 0</div>' }];
  V['math-u9'] = [{ title: '小數點對齊直式加減', caption: '位值：個位 . 十分位 . 百分位。直式一定要「小數點對齊」，缺位補 0。',
    html: svg('0 0 520 190', `
      <g font-size="26" fill="#1e293b"><text class="pop" style="--i:0" x="190" y="45">3 . 5</text><text class="pop" style="--i:0.6" x="150" y="85">+ 2 . 4 8</text></g>
      <line class="draw" style="--len:200" x1="140" y1="98" x2="340" y2="98" stroke="#334155" stroke-width="3"/>
      <text class="pop" style="--i:1.4" x="262" y="45" font-size="26" fill="#ef4444">0</text>
      <text class="pop" style="--i:2" x="215" y="135" font-size="28" fill="#16a34a">＝ 5 . 9 8</text>
      <text class="pop" style="--i:2.5" x="80" y="175" font-size="15" fill="#dc2626">📌 3.5 補成 3.50，小數點上下對齊再算！</text>`) }];
  V['math-u10'] = [{ title: '長度換算階梯', caption: '1 公里 ＝ 1000 公尺；1 公尺 ＝ 100 公分。大單位→小單位用乘，小→大用除。',
    html: svg('0 0 520 150', `
      <g class="pop" style="--i:0"><rect x="20" y="40" width="130" height="60" rx="16" fill="#dbeafe" stroke="#3b82f6" stroke-width="3"/><text x="52" y="78" font-size="24" fill="#1d4ed8">公里</text></g>
      <g class="pop" style="--i:1"><text x="165" y="62" font-size="15" fill="#475569">×1000 ➜</text><text x="165" y="100" font-size="15" fill="#475569">⬅ ÷1000</text></g>
      <g class="pop" style="--i:1.5"><rect x="250" y="40" width="110" height="60" rx="16" fill="#dcfce7" stroke="#22c55e" stroke-width="3"/><text x="274" y="78" font-size="24" fill="#15803d">公尺</text></g>
      <g class="pop" style="--i:2.5"><text x="372" y="62" font-size="15" fill="#475569">×100 ➜</text><text x="372" y="100" font-size="15" fill="#475569">⬅ ÷100</text></g>
      <g class="pop" style="--i:3"><rect x="440" y="40" width="70" height="60" rx="16" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/><text x="448" y="78" font-size="22" fill="#b45309">公分</text></g>
      <text class="pop" style="--i:3.5" x="60" y="135" font-size="16" fill="#334155">例：2.5 公里 ＝ 2500 公尺</text>`) }];

  /* ============ 自然 ============ */
  V['sci-u3'] = [
    { title: '熱脹冷縮：粒子動畫', caption: '受熱時粒子活動變快、距離變大（膨脹）；變冷時靠近（收縮）。融化吸熱、凝固放熱。',
      html: svg('0 0 520 150', `
        <rect x="30" y="30" width="200" height="90" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/><text x="60" y="22" font-size="14" fill="#0369a1">❄️ 冷：粒子靠近</text>
        ${[0,1,2,3,4,5].map(i => `<circle cx="${60+(i%3)*50}" cy="${58+Math.floor(i/3)*40}" r="9" fill="#38bdf8"/>`).join('')}
        <rect x="290" y="20" width="220" height="110" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="3"/><text x="320" y="14" font-size="14" fill="#b91c1c">🔥 熱：粒子跑開、體積變大</text>
        ${[0,1,2,3,4,5].map(i => `<circle class="shake" cx="${320+(i%3)*68}" cy="${55+Math.floor(i/3)*50}" r="9" fill="#f87171"/>`).join('')}`) },
    { title: '酸鹼指示劑變色', caption: '石蕊（紅藍試紙）：酸性使藍變紅、鹼性使紅變藍；紫色高麗菜汁遇酸變紅、遇鹼變藍綠。',
      html: svg('0 0 520 130', `
        <rect x="60" y="30" width="80" height="60" rx="10" class="color-flip" style="--a:#a855f7;--b:#ef4444"/><text x="50" y="115" font-size="14" fill="#334155">+ 檸檬汁（酸）→ 變紅</text>
        <rect x="330" y="30" width="80" height="60" rx="10" class="color-flip" style="--a:#a855f7;--b:#22c55e"/><text x="300" y="115" font-size="14" fill="#334155">+ 小蘇打水（鹼）→ 變藍綠</text>`) }];
  V['sci-u4'] = [
    { title: '聲音＝振動，會傳播', caption: '聲音由物體振動產生，靠空氣、水、固體傳播，真空無法傳聲。大小聲看振幅（響度），高低音看頻率（音調）。',
      html: svg('0 0 520 150', `
        <text x="60" y="85" font-size="46">🔔</text>
        ${[0,1,2].map(i => `<circle class="wave" cx="90" cy="75" r="50" fill="none" stroke="#38bdf8" stroke-width="4" style="animation-delay:${i*.4}s"/>`).join('')}
        <text x="230" y="70" font-size="16" fill="#334155">➜ 空氣振動傳到耳朵 👂</text>
        <text x="230" y="105" font-size="14" fill="#dc2626">真空中：沒有介質 → 聽不到 🔇</text>`) },
    { title: '光的直進、影子與反射', caption: '光沿直線前進，被擋住就形成影子；碰到鏡子會反射（入射角 ＝ 反射角）。',
      html: svg('0 0 520 150', `
        <text x="20" y="85" font-size="40">💡</text>
        <line class="draw" style="--len:140" x1="70" y1="75" x2="210" y2="75" stroke="#f59e0b" stroke-width="5"/>
        <rect x="210" y="45" width="16" height="60" rx="4" fill="#64748b"/>
        <rect class="pop" style="--i:2" x="240" y="62" width="120" height="26" rx="13" fill="#334155" opacity=".5"/><text class="pop" style="--i:2" x="250" y="110" font-size="14" fill="#334155">影子（光被擋住）</text>
        <line class="draw" style="--len:120" x1="400" y1="130" x2="450" y2="80" stroke="#f59e0b" stroke-width="5"/>
        <line class="draw" style="--len:120;animation-delay:.8s" x1="450" y1="80" x2="500" y2="130" stroke="#f59e0b" stroke-width="5"/>
        <line x1="420" y1="80" x2="480" y2="80" stroke="#0ea5e9" stroke-width="6"/><text x="404" y="68" font-size="13" fill="#0369a1">鏡子 反射</text>`) }];

  /* ============ 社會 ============ */
  V['soc-u3b'] = [{ title: '人口變化四要素', caption: '自然增加＝出生−死亡；社會增加＝遷入−遷出。少子化、高齡化讓家鄉需要長照據點與無障礙空間。',
    html: flow([['👶','出生 ＋'],['🧓','死亡 －'],['🚚','遷入 ＋'],['🧳','遷出 －'],['🏥','高齡化→長照需求']]) }];
  V['soc-u4'] = [{ title: '多元飲食的智慧', caption: '客家人早期開墾、惜食，發展出晒乾與醃漬保存；原住民善用在地食材；新住民帶來異國香料。',
    html: flow([['🥬','客家：醃漬晒乾（保存久）'],['🍚','閩南：醬油海鮮'],['🎋','原民：小米竹筒烤'],['🌶️','新住民：香料異國味']]) }];
  V['soc-u5'] = [{ title: '傳統節慶（農曆）一年轉一圈', caption: '傳統節慶看農曆；現代節日看國曆。陷阱：清明節依節氣，國曆固定 4/4 或 4/5。',
    html: flow([['🧧','春節 農曆正月初一'],['🏮','元宵 正月十五'],['🌿','清明 國曆 4/4~5'],['🛶','端午 農曆 5/5'],['🥮','中秋 農曆 8/15']]) }];
  V['soc-u6'] = [{ title: '小小導覽員三部曲', caption: '定主題 → 多方查證（書／訪談／踏查）→ 生動說明。訪問長輩前要先約時間、列訪綱、徵得同意。',
    html: flow([['🎯','定主題與分工'],['🔍','書籍・訪談・踏查'],['🗺️','配地圖與照片'],['🎤','生動導覽說明']]) }];

  /* ============ 英語 ============ */
  V['eng-u3'] = [
    { title: '單數 → 複數 變身動畫', caption: 'What\'s this? → It\'s a ___.　What are these? → They\'re ___s.',
      html: flow([['🍎','It\'s an apple.'],['🍎🍎','They\'re apples.'],['🐟','It\'s a fish.'],['🐟🐟','They\'re fish.（不變）']]) },
    { title: 'Phonics：v- 和 f- 嘴型不同', caption: 'f：上牙咬下唇，只吐氣（fish, fan）。v：上牙咬下唇，喉嚨震動（van, vest）。',
      html: flow([['🐟','fish /f/ 只吐氣'],['🚐','van /v/ 喉嚨震動'],['🍃','five /f/'],['🧥','vest /v/']]) }];
  V['eng-u4'] = [
    { title: '禮貌點餐對話', caption: 'Do you want some pizza? → Yes, please. / No, thank you.　pizza、juice、milk 是不可數，不加 a 或 s。',
      html: flow([['🙋','Do you want some pizza?'],['😊','Yes, please.'],['🍕','Here you are.'],['🙏','Thank you!']]) },
    { title: 'Phonics：z- 蜜蜂 vs s- 小蛇', caption: 'z 喉嚨嗡嗡震動（zebra, zoo, zero）；s 只吐氣嘶嘶（six, sun, soup）。',
      html: flow([['🐝','zzz… zebra /z/'],['🦓','zoo / zero'],['🐍','sss… six /s/'],['☀️','sun / soup']]) }];
  V['eng-rev2'] = [{ title: '單複數＋點餐＋各國美食', caption: '單數 It\'s，複數 They\'re；遞東西說 Here you are.　bubble tea、beef noodles 是臺灣代表美食。',
    html: flow([['🍔','What\'s this? It\'s a hamburger.'],['🍔🍔','What are these? They\'re hamburgers.'],['🧋','bubble tea'],['🍜','beef noodles']]) }];

  /* ============ 逐步講解 / 範例（v2.6.1 加強） ============ */
  function steps(items) {
    return '<div class="g4v-steps">' + items.map((s, i) =>
      `<div class="g4v-ex" style="--i:${i}"><span class="n">${i + 1}</span><div><b>${s[0]}</b>${s[1] ? '<br><span>' + s[1] + '</span>' : ''}</div></div>`).join('') + '</div>';
  }
  function more(id, arr) { (V[id] = V[id] || []).push(...arr); }

  more('chi-u7', [{ title: '修辭一次搞懂', caption: '考試常考：判斷句子用了哪一種修辭。',
    html: steps([['誇飾：說得比事實更誇張', '「焦掉的麵包堆得跟大樹一樣高」'],['擬人：把動物或物品當成人','「松鼠先生說話、流淚、難過」'],['譬喻：甲像乙（像、好像、如）','「淚水像雨一樣落下」'],['摹寫：描寫看到、聽到、聞到的感覺','「香噴噴的麵包」→ 嗅覺摹寫']]) }]);
  more('chi-u8', [{ title: '形近字・成語小教室', caption: '讀音相近或字形相近的字，要看意思分辨。',
    html: steps([['省吃儉用', '很節省，不亂花錢（陳樹菊的生活態度）'],['助人為樂', '幫助別人讓自己快樂'],['平凡 ≠ 平庸', '平凡指普通；真正的大俠在於行動'],['答題技巧', '問「為什麼稱大俠」→ 答：雖然平凡，但長期默默幫助別人']]) }]);
  more('chi-u9', [{ title: '多音字「折」', caption: '同一個字，讀音不同、意思也不同。',
    html: steps([['ㄓㄜˊ（折斷、折扣、折返）', '「一支箭一折就斷」'],['ㄕㄜˊ（虧本）', '「折本」＝賠錢（少用）'],['ㄓㄜ（翻轉）', '「折騰」'],['成語配對', '同心協力、眾志成城、團結合作']]) }]);
  more('chi-u10', [{ title: '珊瑚礁小知識', caption: '珊瑚礁面積不到海洋 1%，卻養活近 1/4 的海洋生物。',
    html: svg('0 0 520 150', `
      <rect x="40" y="30" width="200" height="30" rx="8" fill="#e2e8f0"/><rect class="grow" style="--s:1" x="40" y="30" width="2" height="30" fill="#0ea5e9"/>
      <rect class="pop" style="--i:0" x="40" y="30" width="2" height="30" fill="#0ea5e9"/><text x="250" y="52" font-size="15" fill="#0369a1">面積：不到 1%</text>
      <rect x="40" y="85" width="200" height="30" rx="8" fill="#e2e8f0"/><rect class="pop" style="--i:1.5" x="40" y="85" width="50" height="30" rx="8" fill="#f97316"/><text x="250" y="107" font-size="15" fill="#c2410c">養活：約 1/4 的海洋生物</text>`) +
    steps([['珊瑚是動物', '屬於刺絲胞動物，不是植物也不是石頭'],['共生藻', '住在珊瑚體內提供養分與顏色'],['保護方式', '減塑、減碳、不亂踩珊瑚']]) }]);
  more('chi-u11', [{ title: '反語與主旨怎麼寫', caption: '寫心得或回答「作者想說什麼」的步驟。',
    html: steps([['看標題', '「美食島」→ 表面好吃'],['看內容', '其實都是塑膠垃圾'],['找反差', '標題與事實相反，形成諷刺'],['寫主旨', '提醒大家減少塑膠，保護海洋生物']]) }]);
  more('chi-u12', [{ title: '關聯詞造句範例', caption: '用對關聯詞，句子才通順。',
    html: steps([['不但…而且…（遞進）', '他不但會彈琴，而且會作曲。'],['雖然…但是…（轉折）', '雖然很安靜，但是聽見了蟲鳴。'],['只要…就…（有條件就成功）', '只要用心聽，就能聽見大自然的音樂。'],['只有…才…（唯一條件）', '只有靜下心，才能聽到細微的聲音。']]) }]);

  more('math-u6', [{ title: '分數圖形：幾分之幾', caption: '把一個整體平分，取其中幾份，就是幾分之幾。',
    html: svg('0 0 520 130', `${[0,1,2,3].map(i => `<rect class="pop" style="--i:${i*.4}" x="${40+i*100}" y="25" width="90" height="70" rx="8" fill="${i<3?'#fbbf24':'#fff'}" stroke="#f59e0b" stroke-width="3"/>`).join('')}<text x="130" y="122" font-size="18" fill="#92400e">3/4：平分成 4 份，取 3 份（分母＝總份數，分子＝取幾份）</text>`) +
    steps([['真分數：分子 < 分母', '例：3/4（小於 1）'],['假分數：分子 ≥ 分母', '例：5/4（大於或等於 1）'],['帶分數：整數＋真分數', '例：1又1/4']]) }]);
  more('math-u6', [{ title: '範例練習：9/4 換帶分數', caption: '照步驟算，不容易錯。',
    html: steps([['看分子 ÷ 分母', '9 ÷ 4 = 2 餘 1'],['商當整數', '整數部分是 2'],['餘數當分子', '分數部分是 1/4'],['答案', '2又1/4；驗算：2×4+1 = 9 ✔']]) }]);
  more('math-u7', [{ title: '奇數與偶數', caption: '個位數是 0、2、4、6、8 為偶數，1、3、5、7、9 為奇數。',
    html: steps([['奇 ＋ 奇', '＝ 偶（3＋5＝8）'],['偶 ＋ 偶', '＝ 偶（2＋4＝6）'],['奇 ＋ 偶', '＝ 奇（3＋4＝7）'],['奇 × 偶', '＝ 偶；奇 × 奇 ＝ 奇']]) },
    { title: '範例：第 25 個是什麼顏色？', caption: '🔴🔵🟢 三個一組重複。',
    html: steps([['找週期', '3 個一組'],['25 ÷ 3', '＝ 8 餘 1'],['看餘數', '餘 1 → 和第 1 個一樣'],['答案', '🔴 紅色']]) }]);
  more('math-u8', [{ title: '範例：一步一步算', caption: '先看括號，再看乘除，最後加減。',
    html: steps([['題目', '36 ÷ 6 + (8 − 3) × 2'],['① 括號', '8 − 3 = 5'],['② 乘除（由左到右）', '36 ÷ 6 = 6，5 × 2 = 10'],['③ 加減', '6 + 10 = 16']]) },
    { title: '應用題四步驟', caption: '讀題 → 圈數字 → 列式 → 檢查。',
    html: flow([['📖','讀兩遍題目'],['⭕','圈出數字與問題'],['✍️','列出算式'],['✅','檢查單位與答案']]) }]);
  more('math-u9', [{ title: '小數的位值與大小比較', caption: '從左到右依序比：整數、十分位、百分位。',
    html: steps([['3.45 的位值', '3 個一、4 個 0.1、5 個 0.01'],['比 3.5 和 3.45', '十分位 5 > 4，所以 3.5 > 3.45'],['3.5 = 3.50', '小數後面補 0，大小不變'],['減法：5 − 2.37', '5.00 − 2.37 = 2.63（先補 0 再對齊）']]) }]);
  more('math-u10', [{ title: '範例：換算練習', caption: '大單位換小單位用乘；小單位換大單位用除。',
    html: steps([['3 公里 = ? 公尺', '3 × 1000 = 3000 公尺'],['2500 公尺 = ? 公里', '2500 ÷ 1000 = 2.5 公里'],['1 公里 200 公尺 = ? 公尺', '1000 + 200 = 1200 公尺'],['比較長度', '先換成相同單位再比']]) }]);

  more('sci-u3', [{ title: '物理變化 vs 化學變化', caption: '有沒有產生「新物質」是關鍵。',
    html: steps([['物理變化', '只改變形狀或狀態：冰融化、撕紙、水沸騰'],['化學變化', '產生新物質：鐵生鏽、紙燃燒、食物腐壞'],['判斷方法', '能不能變回原來的樣子？產生氣泡、顏色、氣味？'],['溫度影響', '加熱：膨脹、融化；降溫：收縮、凝固']]) },
    { title: '酸性與鹼性生活例子', caption: '用指示劑可以分辨，但不能亂嘗試！',
    html: steps([['酸性', '檸檬汁、醋、汽水'],['鹼性', '肥皂水、小蘇打水、洗衣粉水'],['中性', '食鹽水、糖水、純水'],['安全提醒', '不可以嘗味道或直接聞，要戴手套與護目鏡']]) }]);
  more('sci-u4', [{ title: '音量與音調差在哪', caption: '大聲≠高音！',
    html: steps([['響度（大小聲）', '振動幅度大 → 聲音大'],['音調（高低音）', '振動越快 → 聲音越高（細短的弦）'],['傳聲介質', '固體 > 液體 > 氣體；真空不能傳聲'],['生活例子', '土電話、敲桌子聽聲音、水中說話']]) },
    { title: '光的路徑與影子大小', caption: '影子要有光源、擋光物和屏幕。',
    html: steps([['光直進', '光沿直線前進，不會拐彎'],['影子形成', '光被不透明物擋住'],['物體靠近光源', '影子變大；遠離光源影子變小'],['鏡子反射', '入射角 = 反射角']]) }]);

  more('soc-u3b', [{ title: '人口金字塔怎麼看', caption: '少子化＝底部變窄；高齡化＝頂部變寬。',
    html: steps([['出生率下降', '新生兒變少 → 少子化'],['平均壽命延長', '醫療進步 → 高齡化'],['家鄉需求', '長照據點、無障礙設施、樂齡學習'],['人口移動', '就業、教育機會吸引人遷入']]) }]);
  more('soc-u4', [{ title: '原住民族命名文化', caption: '不同族群有不同命名方式。',
    html: steps([['名字可能代表', '家族、部落、長輩名字、期待或自然景物'],['尊重文化', '不要隨意取笑名字或發音'],['飲食搭配自然', '山野菜、小米酒、竹筒飯'],['多元共融', '主動認識、尊重、欣賞不同文化']]) }]);
  more('soc-u5', [{ title: '生命禮俗：生・長・婚・老', caption: '人生重要階段都有祝福與紀念儀式。',
    html: flow([['👶','出生：滿月、收涎'],['🎒','成長：週歲、成年禮'],['💍','婚嫁：訂婚、結婚'],['🎂','老年：祝壽、敬老']]) +
    steps([['國曆節日', '元旦、兒童節、教師節、國慶日'],['農曆節日', '春節、元宵、端午、中秋'],['陷阱', '清明節看節氣，國曆固定 4/4 或 4/5']]) }]);
  more('soc-u6', [{ title: '導覽稿範例架構', caption: '開場、介紹、結尾三段式。',
    html: steps([['開場', '大家好，我是導覽員，今天要介紹八德的……'],['介紹', '地點、歷史、特色、最推薦的理由'],['互動', '提問、請同學猜、分享照片'],['結尾', '謝謝大家，歡迎再來！']]) }]);

  more('eng-u3', [{ title: '複數變化規則', caption: '名詞變複數有三種常見方法。',
    html: steps([['一般加 s', 'book → books，cat → cats'],['s, x, ch, sh 結尾加 es', 'box → boxes，watch → watches'],['不規則', 'child → children，fish → fish'],['疑問句型', 'What are these? They\'re ___.']]) }]);
  more('eng-u4', [{ title: '點餐情境完整對話', caption: '自己照著唸一次，最容易記住。',
    html: steps([['A: What do you want?', '你想要什麼？'],['B: I want some juice, please.', '我想要一些果汁，麻煩了。'],['A: Here you are.', '給你。'],['B: Thank you!', '謝謝！']]) }]);
  more('eng-rev2', [{ title: '考前自我檢查表', caption: '每項都會了才算準備好。',
    html: steps([['會分辨單複數嗎？', 'What\'s this? / What are these?'],['會禮貌點餐嗎？', 'Yes, please. / No, thank you.'],['會聽出 v/f、z/s 嗎？', '嘴型與喉嚨震動不同'],['會拼單字嗎？', 'zebra, zero, van, five']]) }]);

  // 產生卡片 HTML（含重播鈕）
  root.G4_VISUALS = V;
  root.G4_renderVisuals = function (unitId) {
    const list = V[unitId];
    if (!list) return '';
    return list.map((v, i) => `
      <div class="g4v-box" id="g4v-${unitId}-${i}">
        <div class="g4v-head"><h3>🎬 動畫圖解：${v.title}</h3>
          <button class="g4v-replay" onclick="G4_replayVisual('g4v-${unitId}-${i}')">🔁 重播</button></div>
        <div class="g4v-body g4v-play">${v.html}</div>
        <div class="g4v-cap">${v.caption}</div>
      </div>`).join('');
  };
  root.G4_replayVisual = function (id) {
    const b = document.querySelector('#' + id + ' .g4v-body');
    if (!b) return;
    b.classList.remove('g4v-play');
    void b.offsetWidth;
    b.classList.add('g4v-play');
  };
})(typeof window !== 'undefined' ? window : globalThis);
