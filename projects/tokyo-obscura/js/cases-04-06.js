/* 東京暗箱 · 案 04–06 */
window.CASES = window.CASES || [];

/* ───────────────────────── 案 04 ───────────────────────── */
window.CASES.push({
  id: '04',
  chapter: '第二章 · 池',
  code: 'FILE 04',
  title: '已拆迁的居酒屋',
  place: '歌舞伎町',
  date: '2031-05-02',
  victim: '死者 権田 亮（44）· 情报商 · 2031-05-02 23:58 受理',
  need: 2,
  map: { center: [35.6952, 139.7022], zoom: 16, bounds: [[35.686, 139.692], [35.706, 139.713]] },
  target: { lat: 35.69498, lng: 139.70162, heading: 132, goodRadius: 150, nearRadius: 550, headingTolerance: 50 },

  cards: [
    {
      id: 'brief', kind: 'brief', label: '现场简报',
      lines: [
        { text: '五月二日深夜，権田亮在歌舞伎町一条后巷被人刺伤，倒在巷口。' },
        { text: '身上三处创口，无抵抗伤。右手攥着一张照片。' },
        { text: '巷子两侧建筑早在 2016 年拆除，现址是收费停车场。' }
      ]
    },
    {
      id: 'autopsy', kind: 'autopsy', label: '尸检摘要',
      lines: [
        { text: '死亡时间推定 5 月 2 日 23:20–23:50。' },
        { text: '三处创口均在前胸，深度一致，凶手手法很稳。' },
        { text: '死者胃内有大量酒精，但血液酒精浓度不高——他喝的是水。' }
      ]
    },
    {
      id: 'photo', kind: 'photo', label: '影像卡 D-02',
      meta: '死者右手攥着 · 边缘折损 · 无信封',
      note: '点选你怀疑的一行，把它钉成「疑点」。',
      diagram: window.FIG(
        '<line x1="150" y1="24" x2="150" y2="178" stroke="#d2d2d2"/>' +
        '<line x1="410" y1="24" x2="410" y2="178" stroke="#d2d2d2"/>' +
        '<rect x="158" y="44" width="26" height="76" fill="none" stroke="#d2d2d2"/>' +
        '<text x="171" y="70" text-anchor="middle" font-size="7">カラオケ</text>' +
        '<text x="171" y="86" text-anchor="middle" font-size="9" fill="#b3352b">夢路</text>' +
        '<text x="171" y="104" text-anchor="middle" font-size="6" fill="#9a9a9a">灯管×1 坏</text>' +
        '<rect x="230" y="150" width="46" height="14" fill="#f0f0f0" stroke="#d2d2d2" transform="rotate(-6 253 157)"/>' +
        '<text x="253" y="182" text-anchor="middle" font-size="6">信封（被踩开）</text>' +
        '<g stroke="#d2d2d2"><line x1="330" y1="60" x2="372" y2="60"/><line x1="330" y1="68" x2="372" y2="68"/><line x1="330" y1="76" x2="372" y2="76"/></g>' +
        '<text x="351" y="96" text-anchor="middle" font-size="7">地下鉄 A 出口</text>' +
        '<path d="M351 76 L351 100" stroke="#c4c4c4" stroke-dasharray="3 3"/>' +
        '<g><ellipse cx="392" cy="140" rx="7" ry="17" fill="#cfcfcf"/><circle cx="392" cy="118" r="6" fill="#cfcfcf"/></g>' +
        '<text x="392" y="166" text-anchor="middle" font-size="6">雨衣人影</text>',
        'FIG.4 歌舞伎町 · 後巷'),
      lines: [
        { id: 'p1', text: '视角：站在巷口向里，霓虹反光打在墙上。' },
        { id: 'p2', text: '左侧：一块竖排招牌「カラオケ 夢路」，第三字灯管坏了一根。' },
        { id: 'p3', text: '地面：一个被踩开的牛皮纸信封。' },
        { id: 'p4', text: '右侧：地铁「A」出口的阶梯，往下。' },
        { id: 'p5', text: '巷子尽头：一个穿雨衣的人，背对镜头。' },
        { id: 'p6', text: '时间戳：2031-05-02 23:47:10。' }
      ]
    },
    {
      id: 'demolish', kind: 'archive', label: '档案 · 再开发计划',
      lines: [
        { text: '歌舞伎町东部再开发：2016 年 3 月完成拆除。' },
        { text: '「カラオケ 夢路」所在建筑位列第一批名单，拆除后地块闲置，2021 年改为停车场。' }
      ]
    },
    {
      id: 'mapnow', kind: 'archive', label: '档案 · 现行地图',
      lines: [
        { text: '该后巷 2016 年后不存在，原址为投币停车场。' },
        { text: '地铁 A 出口位于西南方向约 300 米，不在任何巷子尽头。' }
      ]
    },
    {
      id: 'testimony', kind: 'testimony', label: '证词 · 便利店店员',
      lines: [
        { text: '「十一点半左右，権田和一个女人在巷口说话。」' },
        { text: '「那个女人撑着一把黑伞。可今晚没下雨。」' }
      ]
    }
  ],

  rules: [
    { id: 'x-time', suspect: 'p6', card: 'autopsy', title: '拍照的人没有报警',
      body: '时间戳 23:47，死亡时间 23:20–23:50。照片拍下的那一刻，権田正倒在这条巷子里。拍摄者站在巷口，看着，按了快门，然后走了。' },
    { id: 'x-sign', suspect: 'p2', card: 'demolish', title: '招牌 2016 年就拆了',
      body: '「夢路」这栋楼 2016 年 3 月拆除，现在是停车场。影像卡里那块招牌、那条巷子，在 2031 年五一月的歌舞伎町并不存在。' },
    { id: 'x-exit', suspect: 'p4', card: 'mapnow', title: '这里没有地铁出口',
      body: 'A 出口在西南三百米，不在任何巷子尽头。照片里的出口是另外找一个地方拍的，或者是画上去的。' }
  ],

  close: {
    prompt: '拍摄者是谁？',
    suspects: [
      { id: 's-pass', n: '路过的人' },
      { id: 's-raincoat', n: '巷子尽头穿雨衣的人' },
      { id: 's-victim', n: '権田本人' }
    ],
    correctSuspect: 's-raincoat',
    evidencePrompt: '哪一件材料最不像话？',
    goodEvidence: 'x-time',
    endingGood: '塑料袋、雨衣、黑伞——三样东西在同一个不下雨的晚上。\n\n她拍这张照片不是为了记录，是为了证明：这条巷子曾经存在过，而她比谁都清楚它是什么时候消失的。\n\n権田手里攥着照片，是有人把它塞回给他的。',
    endingBad: '你把案子归为抢劫未遂。\n\n停车场的管理员说，那天晚上有人在那儿站了很久，什么也没做。'
  },
  outro: '再开发的档案里，有一条备注被涂掉了：这条巷子的原址，曾经属于一个叫「雨宫」的家族。'
});

/* ───────────────────────── 案 05 ───────────────────────── */
window.CASES.push({
  id: '05',
  chapter: '第三章 · 冰',
  code: 'FILE 05',
  title: '清晨的第四个摊位',
  place: '筑地',
  date: '2031-06-11',
  victim: '死者 佐伯 功（59）· 场外市场鱼贩 · 2031-06-11 06:30 受理',
  need: 2,
  map: { center: [35.6658, 139.7696], zoom: 16, bounds: [[35.656, 139.760], [35.676, 139.782]] },
  target: { lat: 35.66542, lng: 139.76978, heading: 198, goodRadius: 150, nearRadius: 550, headingTolerance: 50 },

  cards: [
    {
      id: 'brief', kind: 'brief', label: '现场简报',
      lines: [
        { text: '六月十一日清晨，佐伯功被发现在自家冷库里，腕部有捆绑痕，头部有钝伤。' },
        { text: '冷库门从外面锁上，钥匙插在锁孔里。' },
        { text: '场外市场当天未开市。' }
      ]
    },
    {
      id: 'autopsy', kind: 'autopsy', label: '尸检摘要',
      lines: [
        { text: '死亡时间推定 6 月 11 日 02:40–03:20。' },
        { text: '头部钝伤不致命，真正死因是低温与失血。' },
        { text: '捆绑痕为绳索，绑法很规整，像捆货用的结。' }
      ]
    },
    {
      id: 'photo', kind: 'photo', label: '影像卡 E-05',
      meta: '来源不明 · 牛皮纸信封 · 邮戳 築地郵便局 06-12 08:00',
      note: '点选你怀疑的一行，把它钉成「疑点」。',
      diagram: window.FIG(
        '<line x1="120" y1="30" x2="120" y2="176" stroke="#d2d2d2"/>' +
        '<g stroke="#d2d2d2"><line x1="200" y1="30" x2="200" y2="130"/><line x1="300" y1="30" x2="300" y2="130"/><line x1="400" y1="30" x2="400" y2="130"/></g>' +
        '<g stroke="#e2e2e2"><line x1="200" y1="46" x2="300" y2="46"/><line x1="200" y1="54" x2="300" y2="54"/><line x1="200" y1="62" x2="300" y2="62"/></g>' +
        '<text x="250" y="80" text-anchor="middle" font-size="8">攤位 三</text>' +
        '<rect x="300" y="30" width="100" height="100" fill="none" stroke="#b3352b" stroke-dasharray="3 3"/>' +
        '<text x="350" y="80" text-anchor="middle" font-size="8" fill="#b3352b">攤位 四</text>' +
        '<ellipse cx="230" cy="152" rx="16" ry="9" fill="none" stroke="#d2d2d2"/>' +
        '<text x="230" y="172" text-anchor="middle" font-size="6">鐵桶 / 冰在溶</text>' +
        '<line x1="120" y1="130" x2="470" y2="130" stroke="#d2d2d2"/>' +
        '<g transform="translate(452,140)"><rect x="0" y="0" width="18" height="26" fill="none" stroke="#d2d2d2"/><text x="9" y="18" text-anchor="middle" font-size="7">-18</text></g>',
        'FIG.5 場外市場 · 通道'),
      lines: [
        { id: 'p1', text: '视角：市场通道，清晨，未开市。' },
        { id: 'p2', text: '左侧第四个摊位：卷帘门半开，摊号牌「四」。' },
        { id: 'p3', text: '地面上：一只铁桶，桶沿挂着冰，冰正在化。' },
        { id: 'p4', text: '右侧墙上的温度计：-18。' },
        { id: 'p5', text: '通道尽头：一个人影，背对镜头。' },
        { id: 'p6', text: '时间戳：2031-06-11 03:12:44。' }
      ]
    },
    {
      id: 'market', kind: 'archive', label: '档案 · 摊位重编',
      lines: [
        { text: '场外市场 2029 年起重编摊位号：第四号并入第三号。' },
        { text: '摊号牌「四」自此不再使用，原位置已改作通道。' }
      ]
    },
    {
      id: 'cold', kind: 'archive', label: '档案 · 冷库温度',
      lines: [
        { text: '佐伯冷库：6 月 10 日 22:00 至 6 月 11 日 06:00，全程 -18℃，无波动。' },
        { text: '记录为每小时自动打印，无人工修改痕迹。' }
      ]
    },
    {
      id: 'testimony', kind: 'testimony', label: '证词 · 同行 三浦',
      lines: [
        { text: '「三点多，我听见冷库门响了一声，以为佐伯在理货。」' },
        { text: '「那阵子他老说有人在夜里来市场，站在第四号摊的位置上。」' }
      ]
    }
  ],

  rules: [
    { id: 'x-stall', suspect: 'p2', card: 'market', title: '第四个摊位不存在',
      body: '2029 年重编之后，第四号已并入第三号，原位置改成通道。影像卡里那块「四」的牌子，是一块早就不用了的牌子。' },
    { id: 'x-ice', suspect: 'p3', card: 'cold', title: '-18℃ 里的冰不会化',
      body: '冷库整夜 -18℃，无波动。影像卡里桶沿的冰正在融化，地面有水——这个画面不是在冷库里拍的，或者记录被改过。一个更简单的解释：拍摄者从外面进来，把桶拎进来之前，它一直放在通道上。' },
    { id: 'x-time', suspect: 'p6', card: 'autopsy', title: '拍摄时他还活着',
      body: '时间戳 03:12，死亡时间 02:40–03:20。照片拍下的那一刻，佐伯正在失去体温。拍摄者站在通道尽头，看着他，没有开门。' }
  ],

  close: {
    prompt: '拍摄者是谁？',
    suspects: [
      { id: 's-peer', n: '同行 三浦' },
      { id: 's-silhouette', n: '通道尽头的那个人影' },
      { id: 's-owner', n: '佐伯本人' }
    ],
    correctSuspect: 's-silhouette',
    evidencePrompt: '哪一件材料最不像话？',
    goodEvidence: 'x-ice',
    endingGood: '三浦说，佐伯总在夜里看见有人站在第四号摊的位置。\n\n那个位置早就不存在了。她站在一个不存在的摊位上，等人把一卷不存在的胶片交给她。\n\n佐伯是最后一个知道太多的人。',
    endingBad: '你把案子归为同行纠纷。三浦被带走问话，第二天放了出来。\n\n冷库的温度记录还在打印，一小时一行，没有一行对得上。'
  },
  outro: '修筑地市场的老档案里，有一张 1990 年的摊位分布图。第四号摊上，站着一个撑伞的女人。'
});

/* ───────────────────────── 案 06 ───────────────────────── */
window.CASES.push({
  id: '06',
  chapter: '第三章 · 冰',
  code: 'FILE 06',
  title: '十二点方向',
  place: '浅草',
  date: '2031-06-28',
  victim: '死者 真壁 透（58）· 前警视厅档案科职员 · 2031-06-28 23:52 受理',
  need: 2,
  map: { center: [35.7124, 139.7952], zoom: 16, bounds: [[35.703, 139.784], [35.723, 139.806]] },
  target: { lat: 35.71286, lng: 139.79612, heading: 8, goodRadius: 150, nearRadius: 550, headingTolerance: 55 },

  cards: [
    {
      id: 'brief', kind: 'brief', label: '现场简报',
      lines: [
        { text: '六月二十八日深夜，真壁透被发现倒在浅草寺后巷，后脑撞击伤，当场死亡。' },
        { text: '初判为醉酒跌倒，随身物品未丢。' },
        { text: '他手里攥着一份旧报告，纸被血浸透了一半。' }
      ]
    },
    {
      id: 'autopsy', kind: 'autopsy', label: '尸检摘要',
      lines: [
        { text: '死亡时间推定 6 月 28 日 23:00–23:20。' },
        { text: '后脑撞击，一次成型；无抵抗伤。' },
        { text: '报告背面粘着第二张影像卡，边缘被血黏住——是自己粘上去的。' }
      ]
    },
    {
      id: 'photo', kind: 'photo', label: '影像卡 F-01',
      meta: '尸体右手攥着 · 报告正面',
      note: '点选你怀疑的一行，把它钉成「疑点」。',
      diagram: window.FIG(
        '<g stroke="#d2d2d2"><line x1="150" y1="20" x2="150" y2="180"/><line x1="420" y1="20" x2="420" y2="180"/></g>' +
        '<g stroke="#e2e2e2"><line x1="120" y1="60" x2="450" y2="60"/><line x1="120" y1="120" x2="450" y2="120"/></g>' +
        '<circle cx="330" cy="34" r="9" fill="none" stroke="#b3352b"/>' +
        '<text x="330" y="60" text-anchor="middle" font-size="7" fill="#b3352b">十二點方向 · 燈</text>' +
        '<g><ellipse cx="352" cy="132" rx="10" ry="26" fill="#cfcfcf"/><circle cx="352" cy="102" r="8" fill="#cfcfcf"/></g>' +
        '<text x="352" y="170" text-anchor="middle" font-size="7">背影 / 深灰風衣</text>' +
        '<path d="M300 118 Q330 104 360 118 Q330 132 300 118" fill="none" stroke="#c9d6e2"/>' +
        '<text x="285" y="112" font-size="6" fill="#8aa0b0">积水倒影</text>' +
        '<rect x="228" y="140" width="16" height="10" fill="none" stroke="#d2d2d2"/>' +
        '<text x="236" y="164" text-anchor="middle" font-size="6">测距仪</text>',
        'FIG.6 淺草寺 後巷 · 十二點方向'),
      lines: [
        { id: 'p1', text: '视角：站在巷子里，面向浅草寺本堂方向。' },
        { id: 'p2', text: '画面正上方偏右——十二点方向——有一盏灯。' },
        { id: 'p3', text: '巷底：一个背影，穿深灰风衣，肩线偏左。' },
        { id: 'p4', text: '地面：水，倒映着十二点方向的那盏灯。' },
        { id: 'p5', text: '画面右下角：一只手，握着一台老式测距仪。' },
        { id: 'p6', text: '时间戳：2031-06-28 23:14:09。' }
      ]
    },
    {
      id: 'photo2', kind: 'photo', label: '影像卡 F-01b · 报告背面',
      meta: '粘贴在报告背面 · 边缘被血黏住',
      note: '这一张是粘上去的。也点选。',
      lines: [
        { id: 'q1', text: '画面：一条下坡的窄巷，雨很大。' },
        { id: 'q2', text: '巷底：一个背影，穿深灰风衣，肩线偏左。' },
        { id: 'q3', text: '角落日期戳：2024-09-17 22:38。' },
        { id: 'q4', text: '背面用铅笔写着一行小字：十二点，看镜头。' }
      ]
    },
    {
      id: 'case2024', kind: 'archive', label: '档案 · 2024 神保町案',
      lines: [
        { text: '2024 年 9 月 17 日，神保町巷口一名女性死亡。' },
        { text: '结案结论：路人斗殴。凶手赤城誠，已服刑。' },
        { text: '结案材料中，现场监控缺失 31 秒。' }
      ]
    },
    {
      id: 'personnel', kind: 'archive', label: '档案 · 调阅记录',
      lines: [
        { text: '档案科调阅记录：2024 年 9 月 18 日 02:11，神谷湊调阅该案监控。' },
        { text: '调阅时长 31 秒。次日提交删除申请，理由：无关片段。' }
      ]
    },
    {
      id: 'testimony', kind: 'testimony', label: '证词 · 老警员',
      lines: [
        { text: '「真壁那阵子整天说『十二点』，谁问他都说不清。」' },
        { text: '「他说他手里有一份不该存在的报告——哪份报告会自己粘一张照片上去？」' }
      ]
    }
  ],

  rules: [
    { id: 'x-coat', suspect: 'p3', card: 'photo2', title: '同一件风衣',
      body: '两张影像卡里的背影，同一件深灰风衣，肩线都偏左。隔了七年，同一个人在同一个角度被拍到。' },
    { id: 'x-date', suspect: 'q3', card: 'case2024', title: '那是 2024 年',
      body: '2024 年 9 月 17 日，神保町巷口，一名女性死亡。案卷里缺了 31 秒监控。现在，你手里有那 31 秒里的一帧。' },
    { id: 'x-report', suspect: 'q1', card: 'testimony', title: '不该存在的报告',
      body: '真壁说的「不该存在的报告」，就是这两张卡粘在一起。他把它攥在手里，直到最后一刻——他要交给谁，很清楚。' }
  ],

  close: {
    prompt: '照片里的人是谁？',
    suspects: [
      { id: 's-tomori', n: '雨宫灯里' },
      { id: 's-you', n: '你自己（神谷湊）' },
      { id: 's-akagi', n: '赤城誠' }
    ],
    correctSuspect: 's-you',
    evidencePrompt: '哪一件材料最不像话？',
    goodEvidence: 'x-coat',
    endingGood: '深灰风衣，肩线偏左。\n\n你把手伸到灯下看了一眼——你的左肩比右肩低，一直如此。\n\n七年前那三十一秒里，站在这条巷子里的那个人，是你。\n\n真壁把报告寄给你，不是为了指控。他只是想问一句：十二点方向的那盏灯，你看见了吗？',
    endingBad: '你指了别人。报告被重新归档，第二张卡不见了。\n\n那天之后，信箱安静了整整一个星期。'
  },
  outro: '第一批六案到此为止。十二点方向的灯还亮着——第二卷，从那里开始。'
});
