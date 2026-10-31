/* 東京暗箱 · 案 10–12
 * 数据结构：
 *   { id, chapter, code, title, place, date, victim, need?,
 *     map:{center:[lat,lng], zoom, bounds:[[s,w],[n,e]]},
 *     target:{lat,lng,heading,goodRadius,nearRadius,headingTolerance},
 *     cards:[{id,kind,label,meta,note,diagram,lines:[{id?,text}]}],
 *     rules:[{id,suspect,card,title,body}],
 *     close:{prompt,suspects:[{id,n}],correctSuspect,evidencePrompt,goodEvidence,endingGood,endingBad},
 *     outro }
 */
window.CASES = window.CASES || [];

/* ───────────────────────── 案 10 ───────────────────────── */
window.CASES.push({
  id: '10',
  chapter: '第五章 · 镜',
  code: 'FILE 10',
  title: '完美的一张',
  place: '台场',
  date: '2031-09-21',
  victim: '死者 如月 沙耶（33）· 东堂隆一秘书 · 2031-09-21 22:10 受理',
  need: 2,
  map: { center: [35.6301, 139.7741], zoom: 16, bounds: [[35.619, 139.760], [35.641, 139.789]] },
  target: { lat: 35.63012, lng: 139.77388, heading: 285, goodRadius: 160, nearRadius: 580, headingTolerance: 50 },

  cards: [
    {
      id: 'brief', kind: 'brief', label: '现场简报',
      lines: [
        { text: '二十一点四十分，台场海滨公园的观景台下发现如月沙耶，已无呼吸。' },
        { text: '栏杆外侧有三道新划痕，她的鞋跟卡在栏杆的缝隙里。' },
        { text: '手提包在观景台上，敞开着；包里的东西被拿得很干净。' }
      ]
    },
    {
      id: 'autopsy', kind: 'autopsy', label: '尸检摘要',
      lines: [
        { text: '死亡时间推定 9 月 21 日 21:10–21:40。' },
        { text: '高处坠落，颅骨与脊椎多处骨折，体内酒精为零。' },
        { text: '右手三根手指粉碎性骨折；掌心没有握持过东西的痕迹。' }
      ]
    },
    {
      id: 'photo', kind: 'photo', label: '影像卡 H-10',
      meta: '来源不明 · 无信封 · 夹在事务所门缝里',
      note: '点选你怀疑的一行，把它钉成「疑点」。',
      diagram: window.FIG(
        '<line x1="40" y1="88" x2="470" y2="88" stroke="#d2d2d2"/>' +
        '<g stroke="#e2e2e2" stroke-dasharray="3 4"><line x1="70" y1="98" x2="440" y2="98"/><line x1="70" y1="106" x2="440" y2="106"/><line x1="70" y1="114" x2="440" y2="114"/></g>' +
        '<path d="M250 88 Q300 58 352 88" fill="none" stroke="#d2d2d2"/>' +
        '<line x1="298" y1="50" x2="298" y2="88" stroke="#d2d2d2"/>' +
        '<line x1="350" y1="56" x2="350" y2="88" stroke="#d2d2d2"/>' +
        '<circle cx="120" cy="112" r="24" fill="none" stroke="#d2d2d2"/>' +
        '<g stroke="#e2e2e2"><line x1="120" y1="88" x2="120" y2="136"/><line x1="96" y1="112" x2="144" y2="112"/><line x1="103" y1="95" x2="137" y2="129"/><line x1="137" y1="95" x2="103" y2="129"/></g>' +
        '<text x="120" y="152" text-anchor="middle" font-size="7">摩天輪 / 停</text>' +
        '<g stroke="#d2d2d2"><line x1="66" y1="140" x2="66" y2="158"/><line x1="120" y1="140" x2="120" y2="158"/><line x1="174" y1="140" x2="174" y2="158"/><line x1="228" y1="140" x2="228" y2="158"/><line x1="282" y1="140" x2="282" y2="158"/><line x1="336" y1="140" x2="336" y2="158"/><line x1="390" y1="140" x2="390" y2="158"/><line x1="444" y1="140" x2="444" y2="158"/></g>' +
        '<line x1="40" y1="140" x2="470" y2="140" stroke="#9a9a9a"/>' +
        '<g stroke="#b3352b"><line x1="204" y1="137" x2="207" y2="144"/><line x1="212" y1="137" x2="215" y2="144"/></g>' +
        '<g><ellipse cx="280" cy="126" rx="7" ry="13" fill="#cfcfcf"/><circle cx="280" cy="108" r="5" fill="#cfcfcf"/></g>' +
        '<rect x="290" y="124" width="9" height="4" fill="#b3352b"/>' +
        '<circle cx="432" cy="58" r="12" fill="none" stroke="#d2d2d2"/>' +
        '<text x="432" y="76" text-anchor="middle" font-size="6">黃昏</text>' +
        '<text x="280" y="172" text-anchor="middle" font-size="7">如月 / 面向鏡頭</text>',
        'FIG.10 台場 · 觀景台 · 19:12'),
      lines: [
        { id: 'p1', text: '视角：贴着观景台栏杆，自东向西，约 50mm。' },
        { id: 'p2', text: '海面：整片平得像纸，连一丝波纹和反光都没有。' },
        { id: 'p3', text: '中景：栏杆横杆上有三道新划痕，漆翻卷着。' },
        { id: 'p4', text: '近景：如月站在栏杆前，面向镜头，表情平静。' },
        { id: 'p5', text: '她右手握着一枚银色 U 盘，指节是松开的。' },
        { id: 'p6', text: '远景：彩虹大桥的灯全亮，摩天轮静止不动。' },
        { id: 'p7', text: '地面：干燥，没有雨，也没有积水。' },
        { id: 'p8', text: '时间戳：2031-09-21 19:12:07。' }
      ]
    },
    {
      id: 'weather', kind: 'archive', label: '档案 · 气象与公园',
      lines: [
        { text: '台场 9 月 21 日 18:40 起降雨，持续至次日 01:00，累计 22 毫米。' },
        { text: '当晚风速 6 级，海面有白头浪。' },
        { text: '海滨公园 19:00 起广播闭园，值班记录：无游客滞留。' }
      ]
    },
    {
      id: 'clock', kind: 'archive', label: '档案 · 门禁记录',
      lines: [
        { text: '都厅 B1 档案库：9 月 21 日 19:12:04，如月沙耶刷卡进入。' },
        { text: '20:58 离开，期间没有任何外出记录。' },
        { text: '当晚调阅《净化》第 7 批清单，导出记录 12 次。' }
      ]
    },
    {
      id: 'list', kind: 'archive', label: '档案 · 净化清单',
      lines: [
        { text: '《档案净化》第 7 批：共 11 人，全部是神保町案的关联人。' },
        { text: '第 11 行：如月 沙耶（本人）· 处理意见：调离。' },
        { text: '末尾一行手写：补第 12 个——神谷 湊。' },
        { text: '批准人签名栏是空的。' },
        { text: '档案室留言条：「还差两个。」笔迹与那行手写一致。' }
      ]
    },
    {
      id: 'deal', kind: 'archive', label: '档案 · 再开发合同',
      lines: [
        { text: '《都市影像观测计划 · 影像采集服务》合同，签署日 2024-09-16。' },
        { text: '乙方：葛城建设。金额 48 亿。' },
        { text: '附加条款：覆盖区影像「不外流、不回溯」。' },
        { text: '签署次日，神保町旧书街被列入拆除名单。' }
      ]
    }
  ],

  rules: [
    { id: 'x-rain', suspect: 'p7', card: 'weather', title: '一场被擦掉的雨',
      body: '18:40 起下雨，整夜 22 毫米，风速 6 级，海面有白头浪。可影像卡里的地面是干的，海面平得像纸。有人把这场雨从照片里擦掉了——擦得太干净，反而成了破绽。' },
    { id: 'x-hand', suspect: 'p5', card: 'autopsy', title: '握不住的手',
      body: '尸检写着：如月右手三根手指粉碎性骨折，掌心没有握持痕迹；她死时手是空的，包也被清空。照片里那只手却松松地握着一枚 U 盘。这不是她的最后一刻，是别人替她摆好的一个姿势。' },
    { id: 'x-clock', suspect: 'p8', card: 'clock', title: '19:12，她在都厅',
      body: '19:12:04，如月刷卡进了都厅 B1 档案库，20:58 才离开。同一分钟，影像卡说她在台场看海。这张照片的时间戳是从别处抄来的——抄的人已经累了。' }
  ],

  close: {
    prompt: '把如月放进这张照片的人是谁？',
    suspects: [
      { id: 's-higashido', n: '东堂隆一（她的上司）' },
      { id: 's-tomori', n: '雨宫灯里（影像修复师）' },
      { id: 's-asatsuki', n: '如月沙耶（自拍）' }
    ],
    correctSuspect: 's-tomori',
    evidencePrompt: '哪一件材料最不像话？',
    goodEvidence: 'x-rain',
    endingGood: '雨被擦掉了。这是她第一次擦不干净。\n\n十二个机位，十二张照片，十二个姿势——她一个人做，做到手开始抖。\n\n你把清单上那行手写小字拍下来存证：补第 12 个，神谷湊。\n\n原来从很早以前，你就已经站在她的取景框里了。',
    endingBad: '你把案子归为失足。观景台的栏杆被重新焊了一遍。\n\n第二天，事务所门缝里多了一张照片：海面平得像纸，一个穿深灰风衣的人站在取景框外。'
  },
  outro: '墙上钉着十张照片，围成半个圆。圆心的位置一直在神保町。\n\n还剩两个机位。'
});

/* ───────────────────────── 案 11 ───────────────────────── */
window.CASES.push({
  id: '11',
  chapter: '第六章 · 曝',
  code: 'FILE 11',
  title: '一整年的空白',
  place: '芝浦',
  date: '2031-10-05',
  victim: '伤者 白石 悠（38）· 档案系统工程师 · 2031-10-05 05:20 受理',
  need: 2,
  map: { center: [35.6415, 139.7510], zoom: 16, bounds: [[35.630, 139.739], [35.653, 139.763]] },
  target: { lat: 35.64132, lng: 139.75058, heading: 65, goodRadius: 160, nearRadius: 580, headingTolerance: 50 },

  cards: [
    {
      id: 'brief', kind: 'brief', label: '现场简报',
      lines: [
        { text: '十月五日 04:50，芝浦一栋数据中心的消防门被从里面撞开。' },
        { text: '白石悠抱着一块硬盘跑出来，左臂有电击伤，被路人送医。' },
        { text: 'B2 层三排机柜的硬盘架已被拔空，地上有一只被踩碎的工牌。' }
      ]
    },
    {
      id: 'photo', kind: 'photo', label: '影像卡 I-11',
      meta: '白石交出 · 从硬盘重建索引里掉出来的一帧',
      note: '点选你怀疑的一行，把它钉成「疑点」。',
      diagram: window.FIG(
        '<path d="M110 172 L235 96" stroke="#d2d2d2"/>' +
        '<path d="M430 172 L315 96" stroke="#d2d2d2"/>' +
        '<line x1="235" y1="96" x2="315" y2="96" stroke="#d2d2d2"/>' +
        '<rect x="70" y="92" width="58" height="70" fill="none" stroke="#d2d2d2"/>' +
        '<g stroke="#e2e2e2"><line x1="70" y1="106" x2="128" y2="106"/><line x1="70" y1="118" x2="128" y2="118"/><line x1="70" y1="130" x2="128" y2="130"/><line x1="70" y1="142" x2="128" y2="142"/></g>' +
        '<text x="99" y="80" text-anchor="middle" font-size="8">「書」</text>' +
        '<rect x="180" y="50" width="36" height="16" fill="none" stroke="#d2d2d2"/>' +
        '<text x="198" y="62" text-anchor="middle" font-size="8">22:03</text>' +
        '<g stroke="#d2d2d2" stroke-dasharray="2 6"><line x1="170" y1="34" x2="158" y2="70"/><line x1="205" y1="90" x2="193" y2="126"/><line x1="370" y1="40" x2="358" y2="76"/><line x1="290" y1="60" x2="278" y2="96"/></g>' +
        '<ellipse cx="272" cy="150" rx="21" ry="6" fill="#cfcfcf"/>' +
        '<circle cx="254" cy="145" r="4" fill="#cfcfcf"/>' +
        '<g><ellipse cx="340" cy="116" rx="6" ry="14" fill="#cfcfcf"/><circle cx="340" cy="98" r="4" fill="#cfcfcf"/></g>' +
        '<rect x="336" y="88" width="10" height="7" fill="none" stroke="#b3352b"/>' +
        '<text x="340" y="78" text-anchor="middle" font-size="6" fill="#b3352b">相機</text>' +
        '<rect x="432" y="136" width="46" height="22" fill="none" stroke="#d2d2d2"/>' +
        '<text x="455" y="150" text-anchor="middle" font-size="7">葛城 300</text>',
        'FIG.11 神保町 · 巷口 · 2024-09-17 22:03'),
      lines: [
        { id: 'p1', text: '画面：夜里，一条下坡的窄巷，雨很大，什么都在反光。' },
        { id: 'p2', text: '左侧：旧书店卷帘门，门楣上的字被雨糊住，只认出一个「書」。' },
        { id: 'p3', text: '巷底：一个女孩倒在积水里，裙子的颜色被水泡深了。' },
        { id: 'p4', text: '巷口：一个男人站着，没有靠近，右手举着一台相机。' },
        { id: 'p5', text: '画面右上：一块电子钟，22:03。' },
        { id: 'p6', text: '右下角：一辆黑色轿车的车头，车牌「葛城 300」。' },
        { id: 'p7', text: '时间戳：2024-09-17 22:03:12。' },
        { id: 'p8', text: '备注：这一帧不在案卷里，索引编号是空的。' }
      ]
    },
    {
      id: 'case2024', kind: 'archive', label: '档案 · 神保町案',
      lines: [
        { text: '2024-09-17 22:03，雨宫雫从防火梯坠落，次日死亡。' },
        { text: '到场记录：22:03 神谷湊，22:20 真壁透。' },
        { text: '案卷记载：该巷口监控缺失 31 秒，无影像。' },
        { text: '结案：赤城誠酒后行凶。2031 年，他死在狱中。' }
      ]
    },
    {
      id: 'deal', kind: 'archive', label: '档案 · 合同与转账',
      lines: [
        { text: '葛城建设 → 档案基金：十二笔「影像采集服务费」，共 63 亿。' },
        { text: '第一笔 21 亿，划款日 2024-09-16。' },
        { text: '合同附件：覆盖区影像「不外流、不回溯」。' },
        { text: '葛城那辆黑色轿车的当晚出入记录，不在任何案卷里。' }
      ]
    },
    {
      id: 'blank', kind: 'archive', label: '档案 · 影像日志',
      lines: [
        { text: '2030-04-01 至 2031-04-01，12 万路影像的索引全部重建。' },
        { text: '重建期间原始字节未销毁，只是不再指向任何时间。' },
        { text: '操作员：相马（已故）、白石悠。' },
        { text: '白石批注：他们每删一次就留一个空洞。我把空洞连起来，得到一年。' }
      ]
    },
    {
      id: 'testimony', kind: 'testimony', label: '证词 · 白石悠 / 佐仓澪',
      lines: [
        { text: '白石：「他们不是要删影像，是要删那一天。」' },
        { text: '白石：「那 31 秒不在硬盘里——硬盘里是那 31 秒之外的全部。」' },
        { text: '佐仓：「起诉书写好了。只要有人敢签名。」' },
        { text: '佐仓：「白石问你：公开了，你自己的那 31 秒也会被看见。」' }
      ]
    },
    {
      id: 'letter', kind: 'archive', label: '档案 · 真壁遗书影印',
      lines: [
        { text: '真壁手写影印件，白石藏了两年。' },
        { text: '「七年前删监控的是我。你只是站在旁边。」' },
        { text: '「但我删的时候，你在看着。这就够了。」' },
        { text: '落款 2029-07-19。纸角有一行更小的字：去第十二个机位。' }
      ]
    }
  ],

  rules: [
    { id: 'x-man', suspect: 'p4', card: 'letter', title: '巷口举着相机的人',
      body: '到场记录写着：22:03 神谷湊先到，22:20 真壁才到。22:03:12 的巷口只有一个男人，他手里举着相机。真壁的遗书说「我删的时候你在看着」——他删的是监控，你看的是取景框。你不是旁观者，你是拍摄者。' },
    { id: 'x-frame', suspect: 'p8', card: 'case2024', title: '这就是那 31 秒',
      body: '案卷写得很清楚：该巷口监控缺失 31 秒，无影像。这一帧的时间戳 22:03:12 正好落在那 31 秒里，而索引编号是空的。有人没有毁掉它，只是让它不再指向任何时间。' },
    { id: 'x-car', suspect: 'p6', card: 'deal', title: '车牌不该出现在这里',
      body: '合同第一笔 21 亿的划款日是 2024-09-16，案发前一天。葛城那辆黑色轿车的出入记录从案卷里消失了——可它明明白白停在照片右下角，车牌「葛城 300」。' }
  ],

  close: {
    prompt: '那一帧里，巷口举着相机的人是谁？',
    suspects: [
      { id: 's-you', n: '你自己（神谷湊）' },
      { id: 's-makabe', n: '真壁透' },
      { id: 's-akagi', n: '赤城誠' }
    ],
    correctSuspect: 's-you',
    evidencePrompt: '哪一件材料最先把这张照片钉死？',
    goodEvidence: 'x-man',
    endingGood: '你把那一帧放大，再放大。\n\n深灰风衣，左肩比右肩低。相机举到眼睛的高度，取景框对着倒在地上的女孩。\n\n你不是先到现场的人。你是先按下快门的人。\n\n白石在病床上问你：公开了，你自己的那 31 秒也会被看见。\n\n你说：本来就该被看见。',
    endingBad: '你指了真壁。卷宗被重新归档，那一帧的索引编号依旧空着。\n\n第二天白石转院，去向不明。硬盘不见了，桌上留着一张便条：你还没准备好。'
  },
  outro: '你把硬盘塞进外套内侧，走出芝浦。雨停了。\n\n事务所的楼顶亮着一盏灯——那是第十一个机位没有拍过的方向。'
});

/* ───────────────────────── 案 12 · 终章 ───────────────────────── */
window.CASES.push({
  id: '12',
  chapter: '终章 · 十二点',
  code: 'FILE 12',
  title: '最后一个机位',
  place: '神保町',
  date: '2031-10-17',
  victim: '无死者 · 终局受理 · 2031-10-17 22:03',
  need: 3,
  map: { center: [35.6938, 139.7562], zoom: 16, bounds: [[35.683, 139.744], [35.706, 139.772]] },
  target: { lat: 35.69588, lng: 139.75812, heading: 12, goodRadius: 160, nearRadius: 600, headingTolerance: 55 },

  cards: [
    {
      id: 'brief', kind: 'brief', label: '现场简报 · 终局',
      lines: [
        { text: '十月十七日，雨。神保町旧书街的十二个路口同时停电十七分钟。' },
        { text: '事务所楼下停着三辆黑色轿车，车灯没关，引擎没熄。' },
        { text: '天台的铁门从里面被打开了，门轴上挂着一把黑伞。' },
        { text: '你没有报警。你上了楼。' }
      ]
    },
    {
      id: 'photo', kind: 'photo', label: '影像卡 Z-00 · 天台样片',
      meta: '灯里留在三脚架上的样片 · 边缘被雨打湿',
      note: '点选你怀疑的一行，把它钉成「疑点」。',
      diagram: window.FIG(
        '<circle cx="250" cy="88" r="58" fill="none" stroke="#c4c4c4" stroke-dasharray="4 4"/>' +
        '<g fill="#b3352b"><circle cx="308" cy="88" r="3"/><circle cx="300" cy="59" r="3"/><circle cx="279" cy="38" r="3"/><circle cx="250" cy="30" r="3"/><circle cx="221" cy="38" r="3"/><circle cx="200" cy="59" r="3"/><circle cx="192" cy="88" r="3"/><circle cx="200" cy="117" r="3"/><circle cx="221" cy="138" r="3"/><circle cx="279" cy="138" r="3"/><circle cx="300" cy="117" r="3"/></g>' +
        '<rect x="246" y="142" width="8" height="8" fill="none" stroke="#b3352b"/>' +
        '<circle cx="250" cy="88" r="5" fill="none" stroke="#9a9a9a"/>' +
        '<text x="250" y="104" text-anchor="middle" font-size="6">路燈</text>' +
        '<rect x="196" y="152" width="108" height="12" fill="none" stroke="#d2d2d2"/>' +
        '<text x="250" y="163" text-anchor="middle" font-size="6">事務所 · 天台</text>' +
        '<text x="110" y="80" text-anchor="middle" font-size="7">舊書店 · 卷簾門</text>' +
        '<text x="420" y="80" text-anchor="middle" font-size="7">自動販賣機</text>' +
        '<text x="322" y="92" font-size="6">01</text>' +
        '<text x="258" y="156" font-size="6">12</text>',
        'FIG.12A 神保町 · 十二機位 · 俯瞰'),
      lines: [
        { id: 'r1', text: '视角：从楼顶边缘向下，俯角约 60°，正对巷口。' },
        { id: 'r2', text: '画面中央：十二个白色粉笔圈，围成直径六十米的圆。' },
        { id: 'r3', text: '十二个圈上各有一台相机，镜头全部朝向圆心。' },
        { id: 'r4', text: '圆心是一盏路灯，灯罩上贴着一张被雨打湿的封条。' },
        { id: 'r5', text: '巷口东侧：旧书店卷帘门，门楣上「矢野書房」四个字还在。' },
        { id: 'r6', text: '巷口西侧：自动贩卖机亮着唯一的一盏灯。' },
        { id: 'r7', text: '画面右下：一只手伸进取景框，手里是一台老式相机。' },
        { id: 'r8', text: '样片背面：第十三个位置，留给按快门的人。' }
      ]
    },
    {
      id: 'frame2024', kind: 'photo', label: '影像卡 Z-01 · 七年前那一帧',
      meta: '序章 · 你按下快门的那一秒',
      note: '这一张不是寄来的。它一直在你这里。',
      diagram: window.FIG(
        '<rect x="120" y="24" width="280" height="140" fill="none" stroke="#d2d2d2"/>' +
        '<g stroke="#d2d2d2" stroke-dasharray="2 6"><line x1="150" y1="30" x2="138" y2="66"/><line x1="200" y1="34" x2="188" y2="70"/><line x1="370" y1="32" x2="358" y2="68"/><line x1="300" y1="26" x2="288" y2="62"/></g>' +
        '<line x1="120" y1="140" x2="400" y2="140" stroke="#e2e2e2"/>' +
        '<rect x="196" y="112" width="112" height="34" fill="none" stroke="#b3352b" stroke-dasharray="3 3"/>' +
        '<ellipse cx="250" cy="146" rx="20" ry="6" fill="#cfcfcf"/>' +
        '<circle cx="232" cy="141" r="4" fill="#cfcfcf"/>' +
        '<g opacity=".85"><ellipse cx="278" cy="138" rx="4" ry="11" fill="#b0b0b0"/><circle cx="278" cy="124" r="3.5" fill="#b0b0b0"/></g>' +
        '<g><ellipse cx="340" cy="114" rx="6" ry="15" fill="#cfcfcf"/><circle cx="340" cy="96" r="4.5" fill="#cfcfcf"/></g>' +
        '<rect x="336" y="87" width="10" height="7" fill="none" stroke="#b3352b"/>' +
        '<text x="330" y="172" text-anchor="middle" font-size="7" fill="#b3352b">取景框裡多出來的人</text>' +
        '<text x="212" y="172" text-anchor="middle" font-size="7">雨宮雫</text>',
        'FIG.12B 神保町巷口 · 22:03:12'),
      lines: [
        { id: 'm1', text: '画面：雨夜，巷口，一个女孩倒在积水里。' },
        { id: 'm2', text: '左侧：旧书店「矢野書房」的卷帘门半开，门里没有灯。' },
        { id: 'm3', text: '巷口：一个男人举着相机，取景框对准她。' },
        { id: 'm4', text: '闪光亮起的那一刻，取景框里多了一个人。' },
        { id: 'm5', text: '画面边缘：一个撑黑伞的人停在三步之外，没有进入取景框。' },
        { id: 'm6', text: '时间戳：2024-09-17 22:03:12。' },
        { id: 'm7', text: '备注：这一帧没有编号。它是用你的眼睛拍的。' }
      ]
    },
    {
      id: 'twelve', kind: 'archive', label: '档案 · 十二机位',
      lines: [
        { id: 'w1', text: '机位 01–11：标注账号已注销，只留下十一条删除记录。' },
        { id: 'w2', text: '机位 12：神保町巷口，标注人「神谷 湊」，时间 21:58。' },
        { id: 'w3', text: '全部标注记录的设备指纹，与事务所那台平板一致。' },
        { id: 'w4', text: '十二个点连成一个直径六十米的圆，圆心是她七年前坠落的位置。' },
        { id: 'w5', text: '十二个点，与七年前被拆掉的十二户门牌，一一对应。' }
      ]
    },
    {
      id: 'list', kind: 'archive', label: '档案 · 净化清单 · 最终批',
      lines: [
        { id: 'l1', text: '《档案净化》最终批：共 12 个名字。' },
        { id: 'l2', text: '第 11 个：如月 沙耶（已处理）。' },
        { id: 'l3', text: '第 12 个：神谷 湊 · 处理意见：交给媒体。' },
        { id: 'l4', text: '批准人：东堂 隆一。' }
      ]
    },
    {
      id: 'deal', kind: 'archive', label: '档案 · 葛城建设',
      lines: [
        { id: 'd1', text: '葛城建设 → 档案基金：十二笔转账，共 63 亿。' },
        { id: 'd2', text: '每一笔的次日，都有一户旧书街居民收到搬迁通知。' },
        { id: 'd3', text: '第一笔 21 亿，划款日 2024-09-16。' },
        { id: 'd4', text: '旧书街三个月内被拆空，雨宫家的房子也在其中。' }
      ]
    },
    {
      id: 'toromi', kind: 'testimony', label: '证词 · 雨宫灯里',
      lines: [
        { id: 't1', text: '「那条街有十二个能站人的位置。我数过很多遍。」' },
        { id: 't2', text: '「我一个人站不完。我需要有人替我确认每个点都是准的。」' },
        { id: 't3', text: '「你标对一个，我就有一个机位。」' },
        { id: 't4', text: '「照片不会说谎。说谎的是按下快门的人。」' }
      ]
    },
    {
      id: 'akagi', kind: 'archive', label: '档案 · 赤城誠',
      lines: [
        { text: '赤城誠在狱中拍的最后一张照片：一面空的探视窗。' },
        { text: '背面写着：「如果有人替我拍完那条街，我想看一眼。」' },
        { text: '2031-03，赤城死于医疗监区。' },
        { text: '死因：心力衰竭。没有他杀记录。' }
      ]
    }
  ],

  rules: [
    { id: 'x-calibrate', suspect: 't3', card: 'twelve', title: '你一直在替她构图',
      body: '机位 01–11 的标注账号已注销，只留下十一条删除记录；全部标注的设备指纹，与事务所那台平板一致。而她说：你标对一个，我就有一个机位。你不是在破案，你是在替她调焦。' },
    { id: 'x-list', suspect: 'l3', card: 'twelve', title: '两份名单，第 12 个都是你',
      body: '东堂的净化名单上，第 12 个名字是神谷湊，处理意见：交给媒体。灯里的机位表上，第 12 个点也是神谷湊，标注时间 21:58。两份名单，同一个人——一个要你死，一个要你按下快门。' },
    { id: 'x-street', suspect: 'w5', card: 'deal', title: '十二个点，十二户人家',
      body: '十二个机位，正好与七年前被拆掉的十二户门牌一一对应。葛城那十二笔转账，每一笔的次日都有一户旧书街居民收到搬迁通知。她拍的不是凶手，是整条街怎么被买走的。' }
  ],

  close: {
    prompt: '你在这十二个机位里，是什么？',
    suspects: [
      { id: 's-thirteen', n: '第十三个位置——按快门的人' },
      { id: 's-twelfth', n: '第十二个名字——被处理的人' },
      { id: 's-witness', n: '唯一的目击者' }
    ],
    correctSuspect: 's-thirteen',
    evidencePrompt: '哪一件材料让这个圆合上了？',
    goodEvidence: 'x-calibrate',
    endingGood: '你按下快门。\n\n闪光亮起的那一秒，十二台相机同时响了。雨被照成白色，照片里有四个人：雨宫雫、冢本、真壁，还有举着相机的你。\n\n东堂的车队到了楼下。警笛。你把硬盘和底片交给佐仓，然后说：七年前删监控的人是我。\n\n灯里没有反抗。她说：谢谢你把照片拍完。\n\n——也有另一种走法：把这张照片匿名丢进网络，真相会和谣言一起过曝，整座城市都会恨你。你没有那么做。\n\n赤城已经死了六年。这张照片，他看不到了。',
    endingBad: '你没有按下快门。\n\n东堂的人先一步清空了档案，你手里只剩一张照片。于是你接受了他的条件：把罪名安在已经死去的真壁头上，换自己全身而退。\n\n灯里被判十二年。白石拿到一笔钱。佐仓升了职，再也没联系你。\n\n那天晚上你关掉事务所的灯，窗外整条街的监控同时转向你。\n\n你成了自己曾经最恨的那种人。'
  },
  outro: '最后那一格，永远是同一张照片，只是边框不同。\n\n显影的那一张挂在旧书店第七个书架前，任何人可以看。暗箱的那一张锁在事务所的抽屉里，永远没洗。\n\n还有一张过曝的，全白，什么也看不见——那也是一种结局。\n\n序章你在巷口按下快门，终章也是。十二点方向，雨停了。'
});
