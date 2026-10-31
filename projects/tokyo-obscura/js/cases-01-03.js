/* 東京暗箱 · 案 01–03
 * 数据结构：
 *   { id, chapter, code, title, place, date, victim,
 *     map:{center:[lat,lng], zoom, bounds:[[s,w],[n,e]]},
 *     target:{lat,lng,heading,goodRadius,nearRadius,headingTolerance},
 *     cards:[{id,kind,label,meta,note,diagram,lines:[{id?,text}]}],
 *     rules:[{id,suspect,card,title,body}],
 *     close:{prompt,suspects:[{id,n}],correctSuspect,evidencePrompt,goodEvidence,endingGood,endingBad},
 *     outro }
 */
window.CASES = window.CASES || [];

/* 示意图外壳：600×200，内容居中 */
window.FIG = function (inner, cap) {
  return '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" ' +
    'font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="9" fill="#6b6b6b">' +
    '<g transform="translate(85,0)" stroke-linecap="square">' + inner + '</g>' +
    '<text x="586" y="193" text-anchor="end" font-size="8" fill="#b0b0b0" letter-spacing="1.5">' +
    (cap || '') + '</text></svg>';
};

/* ───────────────────────── 案 01 ───────────────────────── */
window.CASES.push({
  id: '01',
  chapter: '第一章 · 雨',
  code: 'FILE 01',
  title: '旧书店的第七个书架',
  place: '神保町',
  date: '2031-04-09',
  victim: '死者 矢野 修（68）·「矢野書房」店主 · 2031-04-09 23:12 受理',
  map: { center: [35.6938, 139.7562], zoom: 16, bounds: [[35.683, 139.744], [35.706, 139.772]] },
  target: { lat: 35.69588, lng: 139.75812, heading: 292, goodRadius: 160, nearRadius: 600, headingTolerance: 50 },

  cards: [
    {
      id: 'brief', kind: 'brief', label: '现场简报',
      lines: [
        { text: '四月九日晚，矢野修被发现在自家店面与里屋之间的过道，后脑有钝器伤，大量出血。' },
        { text: '现场没有搏斗痕迹，店门未锁。' },
        { text: '当晚二十三点十二分由巡警受理。' }
      ]
    },
    {
      id: 'autopsy', kind: 'autopsy', label: '尸检摘要',
      lines: [
        { text: '死亡时间推定 21:50–22:20。' },
        { text: '伤在后脑，一次成型。死者身上没有抵抗伤。' },
        { text: '胃内容物与便利店关东煮一致，食用时间约 21:30。' }
      ]
    },
    {
      id: 'photo', kind: 'photo', label: '影像卡 A-07',
      meta: '来源不明 · 牛皮纸信封 · 邮戳 神田郵便局 04-10 08:15',
      note: '点选你怀疑的一行，把它钉成「疑点」。',
      diagram: window.FIG(
        '<rect x="150" y="36" width="270" height="18" fill="none" stroke="#d2d2d2"/>' +
        '<text x="285" y="49" text-anchor="middle" font-size="10" fill="#3a3a3a">矢野書房</text>' +
        '<rect x="150" y="54" width="270" height="94" fill="none" stroke="#d2d2d2"/>' +
        '<g stroke="#d2d2d2"><line x1="150" y1="64" x2="420" y2="64"/><line x1="150" y1="72" x2="420" y2="72"/><line x1="150" y1="80" x2="420" y2="80"/></g>' +
        '<g stroke="#e2e2e2"><line x1="176" y1="96" x2="394" y2="96"/><line x1="176" y1="104" x2="394" y2="104"/><line x1="176" y1="112" x2="394" y2="112"/><line x1="176" y1="120" x2="394" y2="120"/><line x1="176" y1="128" x2="394" y2="128"/><line x1="176" y1="136" x2="394" y2="136"/><line x1="176" y1="144" x2="394" y2="144"/></g>' +
        '<rect x="196" y="112" width="44" height="6" fill="#b3352b" opacity=".85"/>' +
        '<text x="248" y="118" font-size="8" fill="#b3352b">第七層</text>' +
        '<line x1="120" y1="56" x2="120" y2="176" stroke="#d2d2d2"/>' +
        '<rect x="100" y="104" width="40" height="14" fill="none" stroke="#d2d2d2"/>' +
        '<text x="120" y="114" text-anchor="middle" font-size="8">12-3</text>' +
        '<line x1="150" y1="148" x2="420" y2="148" stroke="#d2d2d2"/>' +
        '<line x1="150" y1="152" x2="420" y2="152" stroke="#e2e2e2"/>' +
        '<line x1="285" y1="186" x2="285" y2="160" stroke="#b3352b"/>' +
        '<text x="285" y="196" text-anchor="middle" font-size="8" fill="#b3352b">鏡頭在此</text>' +
        '<g transform="translate(470,14)"><circle cx="14" cy="14" r="13" fill="none" stroke="#e2e2e2"/>' +
        '<path d="M14 4 L17 14 L14 12 L11 14 Z" fill="#7a7a7a"/><text x="14" y="40" text-anchor="middle" font-size="7">N</text></g>',
        'FIG.1 現場 · 立面示意'),
      lines: [
        { id: 'p1', text: '视角：自南向北，略微仰角，约 35mm。' },
        { id: 'p2', text: '前景：一道向下收窄的窄巷，右侧是旧书店的卷帘门，半开。' },
        { id: 'p3', text: '门楣：「矢野書房」四字，右起第二字缺笔。' },
        { id: 'p4', text: '左侧：灰色电线杆一根，编号牌 12-3。' },
        { id: 'p5', text: '店内：书架自上往下第七层，一本蓝色硬壳书正对着镜头。' },
        { id: 'p6', text: '地面：干燥，没有积水。' },
        { id: 'p7', text: '玻璃反光：一个人影，背对镜头，比死者矮。' },
        { id: 'p8', text: '时间戳：2031-04-09 22:31:40。' }
      ]
    },
    {
      id: 'weather', kind: 'archive', label: '档案 · 气象记录',
      lines: [
        { text: '千代田区 4 月 9 日：21:40 至 22:08 无降水。' },
        { text: '22:08 开始降雨，持续至 22:48，累计 4.2mm。' }
      ]
    },
    {
      id: 'shelf', kind: 'archive', label: '档案 · 书架布局',
      lines: [
        { text: '「矢野書房」一层共九层书架，右侧第三列。' },
        { text: '第七层自 2019 年改建后长期空置，只堆放过期旧地图。' }
      ]
    },
    {
      id: 'testimony', kind: 'testimony', label: '证词 · 田所とし',
      meta: '对面便利店 · 夜班',
      lines: [
        { text: '「二十二点前后，我看见有个人走进书店，撑着黑伞。」' },
        { text: '「我们店十点才下雨。十点前路面是干的，我记得很清楚。」' },
        { text: '「那个人个子不高，走进去的时候没抬头。」' }
      ]
    }
  ],

  rules: [
    { id: 'x-weather', suspect: 'p6', card: 'weather', title: '地面是干的',
      body: '22:08 开始下雨，一直到 22:48。影像卡的时间戳是 22:31——那个时刻地面不可能干燥。这张照片，不是那晚拍的。' },
    { id: 'x-shelf', suspect: 'p5', card: 'shelf', title: '第七层不该有书',
      body: '布局档案写着：第七层自 2019 年起长期空置。那本蓝色硬壳书是有人特意摆上去的——摆给看照片的人。' },
    { id: 'x-reflect', suspect: 'p7', card: 'testimony', title: '玻璃里多了一个人',
      body: '田所看见一个人走进书店，个子不高。玻璃反光里那个人背对镜头，比死者矮——她站在死者身后，站在镜头这一侧。' }
  ],

  close: {
    prompt: '拍摄者是谁？',
    suspects: [
      { id: 's-died', n: '死者本人（自拍）' },
      { id: 's-shashin', n: '站在店里、死者身后的矮个子女人' },
      { id: 's-customer', n: '22:00 进店的客人（男性）' }
    ],
    correctSuspect: 's-shashin',
    evidencePrompt: '哪一件材料最不像话？',
    goodEvidence: 'x-reflect',
    endingGood: '你把照片翻过来，在背面写下结论：拍摄者当时就在店里。\n\n那个矮个子人影不在照片里，而在照片外——她站在镜头这一侧，替死者按下了最后一次快门。\n\n第七层那本书是留给你的签名。她要你看清楚：有人正在把一张照片，一点一点地补回去。',
    endingBad: '你指错了人。档案封存，信封不再来。\n\n但书架上那本蓝色硬壳书还在原位——它本来不是给人看的。'
  },
  outro: '三天后，事务所的信箱里又出现一个牛皮纸信封。'
});

/* ───────────────────────── 案 02 ───────────────────────── */
window.CASES.push({
  id: '02',
  chapter: '第一章 · 雨',
  code: 'FILE 02',
  title: '冲洗店的最后一卷',
  place: '神田',
  date: '2031-05-02',
  victim: '死者 大槻 康夫（61）·「大槻写真研究所」店主 · 2031-05-02 07:05 受理',
  map: { center: [35.6920, 139.7712], zoom: 16, bounds: [[35.682, 139.762], [35.702, 139.782]] },
  target: { lat: 35.69162, lng: 139.77148, heading: 205, goodRadius: 150, nearRadius: 550, headingTolerance: 50 },

  cards: [
    {
      id: 'brief', kind: 'brief', label: '现场简报',
      lines: [
        { text: '五月二日清晨，大槻康夫被发现在自家暗房，颈侧一处锐器伤，失血死亡。' },
        { text: '暗房门自内反锁，唯一一把钥匙挂在门内挂钩上。' },
        { text: '店内营业记录停在五月一日。卷帘门从外面拉下一半。' }
      ]
    },
    {
      id: 'autopsy', kind: 'autopsy', label: '尸检摘要',
      lines: [
        { text: '死亡时间推定 5 月 1 日 21:45–22:30。' },
        { text: '伤口自左向右，施力位置低于死者肩线——凶手比死者矮，或当时更低。' },
        { text: '现场无挣扎，死者双手干净。' }
      ]
    },
    {
      id: 'photo', kind: 'photo', label: '影像卡 B-03',
      meta: '来源不明 · 牛皮纸信封 · 邮戳 神田郵便局 05-02 09:10',
      note: '点选你怀疑的一行，把它钉成「疑点」。',
      diagram: window.FIG(
        '<rect x="140" y="24" width="280" height="104" fill="none" stroke="#d8d8d8"/>' +
        '<text x="280" y="17" text-anchor="middle" font-size="8" fill="#b3352b" letter-spacing="1.5">SAFETY LIGHT</text>' +
        '<line x1="164" y1="52" x2="396" y2="52" stroke="#d8d8d8"/>' +
        '<g stroke="#cfcfcf" fill="none"><rect x="186" y="52" width="16" height="20"/><rect x="216" y="52" width="16" height="20"/><rect x="246" y="52" width="16" height="20"/></g>' +
        '<rect x="276" y="52" width="16" height="20" fill="none" stroke="#b3352b" stroke-dasharray="2 2"/>' +
        '<text x="284" y="86" text-anchor="middle" font-size="7" fill="#b3352b">第四張（全空）</text>' +
        '<ellipse cx="220" cy="116" rx="34" ry="8" fill="none" stroke="#d8d8d8"/>' +
        '<text x="220" y="138" text-anchor="middle" font-size="7" fill="#6b6b6b">顯影盤 · 相紙</text>' +
        '<rect x="330" y="104" width="66" height="20" fill="none" stroke="#d8d8d8"/>' +
        '<text x="363" y="118" text-anchor="middle" font-size="7" fill="#6b6b6b">票據</text>' +
        '<line x1="140" y1="158" x2="420" y2="158" stroke="#d8d8d8"/>' +
        '<g stroke="#9ec6e6"><line x1="160" y1="158" x2="154" y2="172"/><line x1="196" y1="158" x2="190" y2="172"/><line x1="232" y1="158" x2="226" y2="172"/></g>' +
        '<text x="240" y="170" font-size="7" fill="#7a9cb8">門外 · 雨 / 積水</text>',
        'FIG.2 大槻寫真研究所 · 暗房'),
      lines: [
        { id: 'p1', text: '视角：暗房内，自门口向里，安全灯的红光。' },
        { id: 'p2', text: '绳上挂着四张底片：前三张已显影，第四张是全空的。' },
        { id: 'p3', text: '显影盘里泡着一张相纸，影像刚刚浮出来。' },
        { id: 'p4', text: '桌面上一张票据：代客冲印，日期 05-02。' },
        { id: 'p5', text: '门外：正在下雨，水泥台阶上有一层积水。' },
        { id: 'p6', text: '时间戳：2031-05-01 21:52:03。' },
        { id: 'p7', text: '画面右侧：地上一只工作手套，指尖朝门。' }
      ]
    },
    {
      id: 'meteo', kind: 'archive', label: '档案 · 气象记录',
      lines: [
        { text: '神田 5 月 1 日：全天无降水。' },
        { text: '5 月 2 日 00:20 开始降雨，持续至 03:40。' }
      ]
    },
    {
      id: 'log', kind: 'archive', label: '档案 · 冲洗营业记录',
      lines: [
        { text: '5 月 1 日最后一位客人：19:40，送来三张底片，要求当天洗印。' },
        { text: '客人未留姓名，现金付款。' },
        { text: '记录到此为止，没有提货行。' }
      ]
    },
    {
      id: 'testimony', kind: 'testimony', label: '证词 · 隔壁居酒屋店主',
      lines: [
        { text: '「九点半左右，我听见冲洗店里的门咔哒一声，像是从里面反锁。」' },
        { text: '「之后一直到打烊，没听见吵架，也没听见有人出来。」' }
      ]
    }
  ],

  rules: [
    { id: 'x-rain', suspect: 'p5', card: 'meteo', title: '门外不该在下雨',
      body: '5 月 1 日全天无降水。影像卡上台阶有积水，时间戳却是 5 月 1 日 21:52——这张照片是 5 月 2 日零点二十之后拍的。' },
    { id: 'x-roll', suspect: 'p2', card: 'log', title: '多出来的第四张',
      body: '客人只送来三张底片。绳上挂着四张，第四张全空——有人在暗房里额外拍了一张，然后把它洗了出来。' },
    { id: 'x-ticket', suspect: 'p4', card: 'log', title: '票据的日期',
      body: '票据写着 05-02。营业记录停在 5 月 1 日。这张照片的拍摄者，在案发之后还站在这个暗房里。' }
  ],

  close: {
    prompt: '拍摄者是谁？',
    suspects: [
      { id: 's-owner', n: '大槻康夫本人' },
      { id: 's-customer', n: '19:40 来送底片、要求当天取件的客人' },
      { id: 's-neighbor', n: '隔壁居酒屋店主' }
    ],
    correctSuspect: 's-customer',
    evidencePrompt: '哪一件材料最不像话？',
    goodEvidence: 'x-roll',
    endingGood: '三个人，三张底片，第四张是空的。\n\n她要的不是冲洗——她要的是留一个位置。空底片挂在绳上，等一个还没被拍到的人。\n\n票据背面用铅笔写着三个字：「下一张」。',
    endingBad: '你指错了人。第二天，冲洗店门口贴出停业告示。\n\n绳上那张空底片不见了。'
  },
  outro: '邮戳集中在三个地方：神田、神保町、浅草。像一条被拉直的线。'
});

/* ───────────────────────── 案 03 ───────────────────────── */
window.CASES.push({
  id: '03',
  chapter: '第二章 · 池',
  code: 'FILE 03',
  title: '公园的长椅',
  place: '上野',
  date: '2031-01-17',
  victim: '死者 千叶 幸雄（72）· 前报社摄影记者 · 2031-01-17 07:40 受理',
  map: { center: [35.7128, 139.7712], zoom: 16, bounds: [[35.702, 139.760], [35.726, 139.782]] },
  target: { lat: 35.71362, lng: 139.77018, heading: 268, goodRadius: 170, nearRadius: 600, headingTolerance: 50 },

  cards: [
    {
      id: 'brief', kind: 'brief', label: '现场简报',
      lines: [
        { text: '一月十七日清晨，千叶幸雄被发现坐在不忍池东侧的长椅上，已无生命迹象。' },
        { text: '身上盖着一份当天的早报，衣着整齐，双手放在膝上。' },
        { text: '初判为低温致死，家属无异议。' }
      ]
    },
    {
      id: 'autopsy', kind: 'autopsy', label: '尸检摘要',
      lines: [
        { text: '无外伤，无挣扎痕迹。' },
        { text: '血液中检出高剂量安眠药——处方药，非死者本人常服。' },
        { text: '死亡时间 1 月 17 日 04:00–06:00。' }
      ]
    },
    {
      id: 'photo', kind: 'photo', label: '影像卡 C-11',
      meta: '来源不明 · 牛皮纸信封 · 邮戳 上野郵便局 01-18 10:20',
      note: '点选你怀疑的一行，把它钉成「疑点」。',
      diagram: window.FIG(
        '<line x1="120" y1="150" x2="470" y2="150" stroke="#d2d2d2"/>' +
        '<g stroke="#e0c9cf"><circle cx="150" cy="52" r="13"/><circle cx="180" cy="44" r="15"/><circle cx="212" cy="52" r="12"/><circle cx="244" cy="46" r="14"/></g>' +
        '<line x1="150" y1="52" x2="150" y2="150" stroke="#e2e2e2"/>' +
        '<text x="196" y="26" font-size="7" fill="#a07f86">桜 · 満開</text>' +
        '<rect x="300" y="112" width="90" height="8" fill="none" stroke="#d2d2d2"/>' +
        '<rect x="300" y="120" width="8" height="30" fill="none" stroke="#d2d2d2"/>' +
        '<rect x="382" y="120" width="8" height="30" fill="none" stroke="#d2d2d2"/>' +
        '<path d="M300 112 L300 96 Q345 88 390 96 L390 112" fill="none" stroke="#d2d2d2"/>' +
        '<text x="345" y="142" text-anchor="middle" font-size="7">長椅</text>' +
        '<rect x="322" y="100" width="46" height="12" fill="#efefef" stroke="#d2d2d2"/>' +
        '<text x="345" y="109" text-anchor="middle" font-size="6" fill="#8a8a8a">報紙</text>' +
        '<g stroke="#c9d6e2"><ellipse cx="440" cy="176" rx="60" ry="10" fill="none"/><ellipse cx="440" cy="176" rx="34" ry="6" fill="none"/></g>' +
        '<text x="440" y="164" text-anchor="middle" font-size="7" fill="#7a90a0">不忍池 / 枯荷</text>',
        'FIG.3 不忍池東岸 · 長椅'),
      lines: [
        { id: 'p1', text: '视角：自东向西，坐在长椅正前方。' },
        { id: 'p2', text: '背景：不忍池的荷叶，枯黄。' },
        { id: 'p3', text: '长椅上盖着一份报纸，露出死者的鞋尖。' },
        { id: 'p4', text: '头顶：樱花满开，几瓣落在报纸上。' },
        { id: 'p5', text: '长椅右扶手刻着「昭和六十三年 寄赠」。' },
        { id: 'p6', text: '时间戳：2031-01-17 06:41:12。' }
      ]
    },
    {
      id: 'bloom', kind: 'archive', label: '档案 · 开花记录',
      lines: [
        { text: '上野公园 2031 年樱花：3 月 24 日开花，4 月 1 日满开。' },
        { text: '一月，园内无花。' }
      ]
    },
    {
      id: 'facility', kind: 'archive', label: '档案 · 公园设施',
      lines: [
        { text: '不忍池东侧长椅于 2019 年公园改造中全部更换。' },
        { text: '旧长椅（含刻字寄赠铭牌）已拆除回收。' }
      ]
    },
    {
      id: 'testimony', kind: 'testimony', label: '证词 · 晨练者',
      meta: '不忍池 · 每日 6:00',
      lines: [
        { text: '「那天早上六点半我经过，长椅上没人。」' },
        { text: '「报纸就摊在那儿，我以为是有人占座。」' }
      ]
    }
  ],

  rules: [
    { id: 'x-bloom', suspect: 'p4', card: 'bloom', title: '一月不该有樱花',
      body: '影像卡时间戳是 1 月 17 日，画面里樱花满开。公园的开花记录写着：3 月 24 日才开花。这张照片是四月拍的。' },
    { id: 'x-bench', suspect: 'p5', card: 'facility', title: '长椅早该拆了',
      body: '这排长椅 2019 年就全部更换，带刻字的旧椅已拆除。影像卡里那把「昭和六十三年」长椅——在 2031 年的一月并不存在。' },
    { id: 'x-paper', suspect: 'p3', card: 'testimony', title: '报纸比人先到',
      body: '六点半时椅子上没有人，只有报纸。尸检说死者凌晨四点至六点已死。那张报纸，是有人先放下、后来再把人放上去的。' }
  ],

  close: {
    prompt: '这张影像卡是什么时候拍的？',
    suspects: [
      { id: 's-jan', n: '1 月 17 日清晨' },
      { id: 's-apr', n: '四月，樱花满开的那几天' },
      { id: 's-none', n: '无法判断' }
    ],
    correctSuspect: 's-apr',
    evidencePrompt: '哪一件材料最不像话？',
    goodEvidence: 'x-bloom',
    endingGood: '你把日期推到四月。那么一月十七日清晨，坐在长椅上的究竟是谁？\n\n千叶拍了一辈子别人。最后一张照片里，他坐在一把不存在的椅子上，头顶是不存在的樱花。\n\n有人替他把时间换了一副骨架。',
    endingBad: '你接受了一月的解释。案子归档为「低温致死」。\n\n那几瓣樱花在档案袋里放了很久，谁也没有再提。'
  },
  outro: '千叶生前最后一次投稿，是一组题为《十二点》的照片。十二张，全是空镜。'
});
