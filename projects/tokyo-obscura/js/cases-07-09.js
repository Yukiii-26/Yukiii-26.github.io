/* 東京暗箱 · 案 07–09 */
window.CASES = window.CASES || [];

/* ───────────────────────── 案 07 ───────────────────────── */
window.CASES.push({
  id: '07',
  chapter: '第四章 · 影',
  code: 'FILE 07',
  title: '雷门前的游客照',
  place: '浅草',
  date: '2031-07-13',
  victim: '死者 塚本 修（49）· 元浅草署巡查部长 · 2031-07-13 23:58 受理',
  need: 2,
  map: { center: [35.7107, 139.7967], zoom: 16, bounds: [[35.701, 139.786], [35.721, 139.808]] },
  target: { lat: 35.71028, lng: 139.79658, heading: 3, goodRadius: 160, nearRadius: 580, headingTolerance: 52 },

  cards: [
    {
      id: 'brief', kind: 'brief', label: '现场简报',
      lines: [
        { text: '七月十三日深夜，塚本修跪在雷门大灯笼下，双手腕割开，刀落在右脚边。' },
        { text: '雨很大，地面积水没过脚踝；现场没有第二个人的脚印。' },
        { text: '他外套内袋里有一个牛皮纸信封，里面装着一张游客照。' }
      ]
    },
    {
      id: 'autopsy', kind: 'autopsy', label: '尸检摘要',
      lines: [
        { text: '死亡时间推定 7 月 13 日 23:20–23:50。' },
        { text: '两腕创口均自左向右下，深浅一致；右手掌有刀柄压痕，无抵抗伤。' },
        { text: '胃内几乎无食物，无酒精；右膝有 2024 年旧伤，与高处坠落的伤型一致。' }
      ]
    },
    {
      id: 'photo', kind: 'photo', label: '影像卡 G-03',
      meta: '塚本外套内袋 · 信封无寄件人 · 邮戳 浅草郵便局 07-12 21:10',
      note: '点选你怀疑的一行，把它钉成「疑点」。',
      diagram: window.FIG(
        '<line x1="100" y1="152" x2="490" y2="152" stroke="#d2d2d2"/>' +
        '<rect x="175" y="26" width="130" height="8" fill="none" stroke="#d2d2d2"/>' +
        '<rect x="205" y="38" width="70" height="86" fill="none" stroke="#d2d2d2"/>' +
        '<text x="240" y="86" text-anchor="middle" font-size="15" fill="#3a3a3a">雷門</text>' +
        '<rect x="222" y="110" width="36" height="10" fill="#f4f0ec" stroke="#d2d2d2"/>' +
        '<text x="240" y="118" text-anchor="middle" font-size="5" fill="#8a8a8a">松下電器</text>' +
        '<rect x="168" y="34" width="12" height="118" fill="none" stroke="#d2d2d2"/>' +
        '<rect x="300" y="34" width="12" height="118" fill="none" stroke="#d2d2d2"/>' +
        '<rect x="301" y="58" width="10" height="18" fill="none" stroke="#b3352b" stroke-dasharray="2 2"/>' +
        '<text x="318" y="70" font-size="6" fill="#b3352b">落雷注意</text>' +
        '<g fill="#cfcfcf">' +
        '<circle cx="128" cy="134" r="4"/><rect x="124" y="138" width="8" height="14"/>' +
        '<circle cx="152" cy="132" r="4"/><rect x="148" y="136" width="8" height="16"/>' +
        '<circle cx="196" cy="136" r="4"/><rect x="192" y="140" width="8" height="12"/>' +
        '<circle cx="330" cy="134" r="4"/><rect x="326" y="138" width="8" height="14"/>' +
        '<circle cx="404" cy="134" r="4"/><rect x="400" y="138" width="8" height="14"/>' +
        '<circle cx="430" cy="136" r="4"/><rect x="426" y="140" width="8" height="12"/>' +
        '<circle cx="462" cy="136" r="4"/><rect x="458" y="140" width="8" height="12"/>' +
        '</g>' +
        '<g><ellipse cx="372" cy="146" rx="6" ry="14" fill="#b9b9b9"/><circle cx="372" cy="126" r="5" fill="#b9b9b9"/></g>' +
        '<path d="M350 118 Q372 102 394 118 Z" fill="none" stroke="#6b6b6b"/>' +
        '<line x1="372" y1="118" x2="372" y2="108" stroke="#6b6b6b"/>' +
        '<g stroke="#c4c4c4" stroke-dasharray="3 3"><line x1="212" y1="152" x2="228" y2="166"/><line x1="248" y1="152" x2="264" y2="166"/></g>' +
        '<text x="240" y="172" text-anchor="middle" font-size="6">影（朝東北）</text>' +
        '<text x="372" y="172" text-anchor="middle" font-size="6">黑傘 · 濕</text>',
        'FIG.7 淺草 · 雷門前'),
      lines: [
        { id: 'p1', text: '画面：白天，雷门前游客成群，几乎每个人都举着手机。' },
        { id: 'p2', text: '大灯笼底部铭牌：「松下電器」四字，红底白字。' },
        { id: 'p3', text: '右侧木柱上贴着一张黄色告示，写着「落雷注意」。' },
        { id: 'p4', text: '人群外侧：一个穿深色连衣裙的女人，撑黑伞，仰头看灯笼。' },
        { id: 'p5', text: '她的伞面挂着水珠，脚下有一小片湿；四周地面发白。' },
        { id: 'p6', text: '所有人的影子朝东北，拉得很长。' },
        { id: 'p7', text: '时间戳：2024-09-17 14:20:07。' },
        { id: 'p8', text: '照片背面，铅笔字：「我也在场。你也在。」' }
      ]
    },
    {
      id: 'renov', kind: 'archive', label: '档案 · 雷门整修',
      lines: [
        { text: '雷门 2029 年 3 月大修：灯笼底部铭牌由「松下電器」换为「パナソニック」。' },
        { text: '同年，两侧木柱加设黄色「落雷注意」告示牌，此前从未设置。' },
        { text: '档案里的雷门旧照：2029 年以前，这两样东西一样也没有。' }
      ]
    },
    {
      id: 'meteo', kind: 'archive', label: '档案 · 气象记录',
      lines: [
        { text: '2024 年 9 月 17 日：12:00–18:00 晴，无降水；21:40 起大雨，持续整夜。' },
        { text: '2031 年 7 月 13 日：22:00 起大雨，至次日 02:00 未停，累计 31mm。' }
      ]
    },
    {
      id: 'personnel', kind: 'archive', label: '档案 · 塚本修 人事',
      lines: [
        { text: '塚本修，2024 年在千代田区神保町一带执行巡查支援。' },
        { text: '2024 年 9 月 17 日 21:50 日志：「旧书街发现可疑人影，追至防火梯，目标坠落。」' },
        { text: '次月调任浅草署，2030 年退休。' }
      ]
    },
    {
      id: 'testimony', kind: 'testimony', label: '证词 · 仲见世店家',
      lines: [
        { text: '「那天夜里十一点多，雨大得看不清人。有个人跪在灯笼底下，一动不动。」' },
        { text: '「我以为是醉汉，没管。第二天看新闻才知道他死了。」' },
        { text: '「他前一天来过一趟，捏着一张照片问我：『这上面是不是有个女人？』」' }
      ]
    }
  ],

  rules: [
    { id: 'x-composite', suspect: 'p3', card: 'renov', title: '2029 年才有的告示',
      body: '雷门的「落雷注意」告示，是 2029 年大修时才钉上木柱的。这张标着 2024 年的照片里，告示已经在了——照片是两张不同年代的图叠出来的：灯笼和人群来自 2024 年，告示来自现在。' },
    { id: 'x-crowd', suspect: 'p1', card: 'autopsy', title: '他死的那天，雷门前没有人',
      body: '尸检：23:20–23:50 死亡，当夜大雨。照片里却是白天的晴空和成群游客——它不是现场记录，是寄给他的信。他读完这张信，跪进雨里，自己割开了手腕。' },
    { id: 'x-umbrella', suspect: 'p5', card: 'meteo', title: '晴天里不会有一把滴水的伞',
      body: '2024 年 9 月 17 日下午是晴的。照片里那把黑伞挂着水珠、脚下有湿痕——她是后来被放进照片里的。放她进去的人，想让人看见：那天下午，她也在雷门。' }
  ],

  close: {
    prompt: '这张照片，是谁拼出来的？',
    suspects: [
      { id: 's-tomori', n: '雨宫灯里' },
      { id: 's-tsukamoto', n: '塚本本人' },
      { id: 's-tourist', n: '七年前按下快门的游客' }
    ],
    correctSuspect: 's-tomori',
    evidencePrompt: '哪一件材料最不像话？',
    goodEvidence: 'x-composite',
    endingGood: '「落雷注意」的告示，是 2029 年大修时才钉上木柱的。\n\n这张标着 2024 年的照片里，2024 年的灯笼和 2031 年的告示贴在同一个画面上。有人把两张照片叠在一起，只为在人群外面多放一个女人。\n\n背面那句话是写给你的：「我也在场。你也在。」\n\n七年前那个雨夜，雷门、神保町、防火梯——她一个机位一个机位地，把当年在场的人重新摆回画面。\n\n这一次她告诉你的不只是「我在」，还有「你也在」。',
    endingBad: '你说是七年前的游客。\n\n档案封存，照片退回。雨停之后，雷门前的地面干干净净，连一个脚印都没有。'
  },
  outro: '一周后，隅田川边的邮局寄来第二张照片。'
});

/* ───────────────────────── 案 08 ───────────────────────── */
window.CASES.push({
  id: '08',
  chapter: '第四章 · 影',
  code: 'FILE 08',
  title: '隅田川桥上',
  place: '隅田川',
  date: '2031-07-29',
  victim: '死者 小暮 圭（33）· 公共影像档案 台东分区运维员 · 2031-07-29 06:20 受理',
  need: 2,
  map: { center: [35.7100, 139.8020], zoom: 16, bounds: [[35.700, 139.790], [35.720, 139.812]] },
  target: { lat: 35.70884, lng: 139.80298, heading: 350, goodRadius: 160, nearRadius: 560, headingTolerance: 52 },

  cards: [
    {
      id: 'brief', kind: 'brief', label: '现场简报',
      lines: [
        { text: '七月二十九日清晨，小暮圭被发现在吾妻桥下游两百米的河岸浅滩，头部有撞击伤。' },
        { text: '桥上护栏外侧挂着一只空咖啡罐，罐里塞着对折的纸，被雨泡开了一半。' },
        { text: '初判为失足落水；桥面没有打斗痕迹。' }
      ]
    },
    {
      id: 'autopsy', kind: 'autopsy', label: '尸检摘要',
      lines: [
        { text: '死亡时间推定 7 月 28 日 23:20–23:50。' },
        { text: '后枕部撞击为坠落所致；肺内有河水，落水时仍有呼吸。' },
        { text: '指甲缝里有桥栏旧漆；右手掌一道细割伤，像是抓过铁丝。' }
      ]
    },
    {
      id: 'photo', kind: 'photo', label: '影像卡 H-05',
      meta: '来源不明 · 无信封 · 夹在事务所门缝里 07-31 清晨',
      note: '点选你怀疑的一行，把它钉成「疑点」。',
      diagram: window.FIG(
        '<g stroke="#c9d6e2"><path d="M130 22 q12 -6 24 0 t24 0 t24 0" fill="none"/>' +
        '<path d="M130 32 q12 -6 24 0 t24 0 t24 0 t24 0 t24 0" fill="none"/>' +
        '<path d="M130 42 q12 -6 24 0 t24 0 t24 0 t24 0 t24 0 t24 0" fill="none"/></g>' +
        '<text x="420" y="24" font-size="6" fill="#8aa0b0">水面（畫面上方）</text>' +
        '<g stroke="#d2d2d2"><line x1="150" y1="66" x2="430" y2="66"/><line x1="150" y1="84" x2="430" y2="84"/></g>' +
        '<g stroke="#d2d2d2"><line x1="170" y1="54" x2="170" y2="112"/><line x1="225" y1="54" x2="225" y2="112"/><line x1="280" y1="54" x2="280" y2="112"/><line x1="335" y1="54" x2="335" y2="112"/><line x1="390" y1="54" x2="390" y2="112"/></g>' +
        '<g stroke="#c4c4c4"><line x1="158" y1="66" x2="158" y2="58"/><line x1="180" y1="66" x2="180" y2="58"/><line x1="205" y1="66" x2="205" y2="58"/></g>' +
        '<path d="M438 56 L462 56 L454 78 L446 78 Z" fill="none" stroke="#d2d2d2"/>' +
        '<text x="450" y="92" text-anchor="middle" font-size="6">燈罩開口朝上</text>' +
        '<g fill="none" stroke="#c4c4c4"><rect x="196" y="112" width="10" height="14"/><rect x="212" y="112" width="10" height="14"/><rect x="228" y="112" width="10" height="14"/><rect x="244" y="112" width="10" height="14"/></g>' +
        '<text x="225" y="140" text-anchor="middle" font-size="6">空罐 · 一排</text>' +
        '<rect x="320" y="118" width="46" height="14" fill="none" stroke="#d2d2d2"/>' +
        '<text x="343" y="128" text-anchor="middle" font-size="7">吾妻</text>' +
        '<line x1="120" y1="150" x2="470" y2="150" stroke="#e2e2e2"/>' +
        '<text x="400" y="164" font-size="6">螺絲頭全部朝上</text>',
        'FIG.8 吾妻橋 · 水面'),
      lines: [
        { id: 'p1', text: '画面：一座钢桁架桥的护栏，雨里，整张照片上下颠倒。' },
        { id: 'p2', text: '画面顶端：一层细密的水波，波纹在整排护栏的上方。' },
        { id: 'p3', text: '画面下方：桥面与积水，所有螺栓头都朝上。' },
        { id: 'p4', text: '画面右侧：一盏路灯，灯罩开口朝上，雨水正落进灯罩里。' },
        { id: 'p5', text: '桥栏外侧：一排空咖啡罐，罐口整齐地朝向同一边。' },
        { id: 'p6', text: '桥墩铭牌：字被水泡得只剩「吾妻」二字。' },
        { id: 'p7', text: '时间戳：2031-07-29 00:12:40。' },
        { id: 'p8', text: '照片边缘有一道水渍，从下往上升。' }
      ]
    },
    {
      id: 'bridge', kind: 'archive', label: '档案 · 吾妻桥',
      lines: [
        { text: '吾妻桥 1931 年建成，1995 年改建；桥灯为防雨型，灯罩开口一律朝下。' },
        { text: '桥栏钢制，螺栓头全部朝向桥面一侧。' },
        { text: '1998 年维护图：每盏灯罩上沿留有排水孔。' }
      ]
    },
    {
      id: 'habit', kind: 'testimony', label: '证词 · 小暮的同事',
      lines: [
        { text: '「真壁前辈每个星期三下午都来吾妻桥，喝一罐咖啡，喝完把罐子挂在栏杆外面。」' },
        { text: '「他说那是他的日历，一罐一个星期。小暮接手他的活，也接手了这件事。」' },
        { text: '「上个月小暮说，真壁前辈留了东西在桥上，等他哪天敢去拿。」' }
      ]
    },
    {
      id: 'calls', kind: 'archive', label: '档案 · 通话记录',
      lines: [
        { text: '小暮圭手机：7 月 28 日 21:47、21:58、22:31 三次呼叫「神谷湊」，均未接通。' },
        { text: '22:36 一条未发送的短信草稿：「照片我拿到了。你要不要看？」' },
        { text: '23:05 手机信号从吾妻桥基站消失。' }
      ]
    },
    {
      id: 'worklog', kind: 'archive', label: '档案 · 影像档案工位',
      lines: [
        { text: '小暮圭 2030 年入职公共影像档案，负责 2024 年 9 月段的数据回溯校验。' },
        { text: '工位抽屉有一张便签：「17 日 22:03–22:34，31 秒，缺失。不是故障。」' },
        { text: '同组的人说，他最近总在问：档案里为什么会有「看不到」的空白。' }
      ]
    }
  ],

  rules: [
    { id: 'x-mirror', suspect: 'p4', card: 'bridge', title: '灯罩开口朝上，照片是倒的',
      body: '吾妻桥的桥灯是防雨型，灯罩开口一律朝下。照片里灯罩开口朝上，雨水正往里落——这不是在水下拍的，是把镜头贴着水面拍了对岸的倒影，再把照片倒过来。摄影师站在河岸，不在桥上。' },
    { id: 'x-cans', suspect: 'p5', card: 'habit', title: '栏杆外面那排罐子，是真壁的日历',
      body: '真壁每个星期在桥上喝一罐咖啡，空罐挂在栏杆外面，一罐一个星期。照片里那排罐子是他七年的日历。从右数第七个，里面塞着一张纸——他留给你，一直没敢寄。' },
    { id: 'x-time', suspect: 'p7', card: 'autopsy', title: '拍照的时候，他已经在水里',
      body: '小暮 23:20–23:50 落水。照片的时间戳是 00:12。摄影师贴着水面按下快门时，他已经在水里了。她没有报警，也没有伸手——这张照片只是一句问话：「你为什么不接电话？」' }
  ],

  close: {
    prompt: '这张照片，是谁拍的？',
    suspects: [
      { id: 's-tomori', n: '雨宫灯里' },
      { id: 's-kogure', n: '小暮自己（定时拍摄）' },
      { id: 's-makabe', n: '已经死去的真壁' }
    ],
    correctSuspect: 's-tomori',
    evidencePrompt: '哪一件材料最不像话？',
    goodEvidence: 'x-mirror',
    endingGood: '你把照片翻过来，灯罩开口朝下，栏杆外面那排罐子一个挨着一个。\n\n从右数第七个，里面是一封被雨泡开的信。真壁的字：\n\n「七年前删监控的是我。你只是站在旁边。……但我删的时候，你在看着。这就够了。」\n\n档案里那条「神谷湊申请删除」的记录，是他用你的名义先签好的。他要你恨他，而不是恨你自己。\n\n小暮想把这封信交给你。他打了三个电话，你一个也没接。\n\n那一夜，你坐在事务所的灯下，什么也没做。和七年前一样。',
    endingBad: '你说是失足。\n\n罐子被当作垃圾清走了。桥上的灯还亮着，灯罩开口朝下，一滴雨也落不进去。'
  },
  outro: '第二天事务所的电话响了。是佐仓：「谷中，雨宫家的墓。你最好现在就来。」'
});

/* ───────────────────────── 案 09 ───────────────────────── */
window.CASES.push({
  id: '09',
  chapter: '第五章 · 镜',
  code: 'FILE 09',
  title: '谷中墓地的墓碑',
  place: '谷中',
  date: '2031-08-14',
  victim: '死者 佐野 亮（34）· 東堂事务所 警备 · 2031-08-14 23:40 受理；伤者 佐仓 澪（29）',
  need: 3,
  map: { center: [35.7250, 139.7702], zoom: 16, bounds: [[35.715, 139.760], [35.735, 139.781]] },
  target: { lat: 35.72480, lng: 139.76947, heading: 268, goodRadius: 155, nearRadius: 570, headingTolerance: 53 },

  cards: [
    {
      id: 'brief', kind: 'brief', label: '现场简报',
      lines: [
        { text: '八月十四日深夜，谷中灵园雨宫家墓前，佐仓澪倒在水里，后脑与左肩有钝伤。' },
        { text: '同一地点，一名男子仰面死亡，身上没有证件，右手握着佐仓的手机。' },
        { text: '墓碑上的名字被人换过：刻着「赤城 誠」。' }
      ]
    },
    {
      id: 'autopsy', kind: 'autopsy', label: '尸检摘要',
      lines: [
        { text: '男子死亡时间推定 22:40–23:00；致命伤在后颈，凶器是墓前的石灯笼碎块。' },
        { text: '男子手掌有两道抓痕，与佐仓指甲里的皮屑一致；指缝里有她外套的纤维。' },
        { text: '佐仓：后脑钝伤、左肩脱臼，无致命伤；胃内检出微量镇静剂。' }
      ]
    },
    {
      id: 'photo', kind: 'photo', label: '影像卡 I-07',
      meta: '公共影像档案 · 谷中灵园 04 号机位 · 2031-08-14 23:58 自动抓拍',
      note: '点选你怀疑的一行，把它钉成「疑点」。',
      diagram: window.FIG(
        '<rect x="235" y="58" width="100" height="72" fill="none" stroke="#d2d2d2"/>' +
        '<rect x="215" y="130" width="140" height="12" fill="none" stroke="#d2d2d2"/>' +
        '<text x="285" y="88" text-anchor="middle" font-size="12" fill="#b3352b">赤城 誠</text>' +
        '<text x="285" y="106" text-anchor="middle" font-size="6">二〇〇七 — 二〇二四</text>' +
        '<g stroke="#e2e2e2"><line x1="150" y1="142" x2="430" y2="142"/><line x1="150" y1="148" x2="430" y2="148"/></g>' +
        '<rect x="168" y="146" width="16" height="10" fill="none" stroke="#b3352b"/>' +
        '<text x="168" y="168" font-size="6" fill="#b3352b">膠卷盒</text>' +
        '<path d="M300 172 L308 152 L320 154 L316 172 Z" fill="#d8d8d8" stroke="#b0b0b0"/>' +
        '<text x="330" y="168" font-size="6">白手袋</text>' +
        '<g stroke="#d2d2d2"><line x1="376" y1="146" x2="376" y2="118"/><circle cx="376" cy="112" r="7" fill="none"/></g>' +
        '<text x="376" y="168" text-anchor="middle" font-size="6">供花</text>' +
        '<rect x="398" y="128" width="16" height="9" fill="none" stroke="#d2d2d2"/>' +
        '<text x="406" y="152" text-anchor="middle" font-size="6">名片</text>' +
        '<g><ellipse cx="450" cy="118" rx="5" ry="16" fill="#c9c9c9"/><circle cx="450" cy="98" r="5" fill="#c9c9c9"/></g>' +
        '<path d="M432 92 Q450 76 468 92 Z" fill="none" stroke="#6b6b6b"/>' +
        '<text x="450" y="168" text-anchor="middle" font-size="6">撐黑傘的人影</text>',
        'FIG.9 谷中靈園 · 雨宮家墓'),
      lines: [
        { id: 'p1', text: '画面：雨中一座灰色墓碑，正面朝着镜头，碑前有一级石阶。' },
        { id: 'p2', text: '碑面名字：「赤城 誠」，字口干净，边缘没有一处风化。' },
        { id: 'p3', text: '碑侧生卒年：「二〇〇七 — 二〇二四」。' },
        { id: 'p4', text: '画面左下：一只白手套的手，袖口露出一枚「東堂」纹章。' },
        { id: 'p5', text: '石阶上：一只被踩开的胶卷盒，标签「滝沢写真研究所」。' },
        { id: 'p6', text: '供花：白菊被压在两块石头之间，花上压着一张「東堂事務所」名片。' },
        { id: 'p7', text: '墓道尽头：一个撑黑伞的人影，背对镜头，停在那里没有动。' },
        { id: 'p8', text: '时间戳：2031-08-14 23:58:03。' }
      ]
    },
    {
      id: 'inscription', kind: 'archive', label: '档案 · 雨宫雫之墓',
      lines: [
        { text: '雨宫雫（2007–2024），2025 年 3 月立碑，碑文「雨宫 雫」，由田所とし手书。' },
        { text: '石料为伊予青石，碑侧刻生卒年；立碑后未再动过。' }
      ]
    },
    {
      id: 'employ', kind: 'archive', label: '档案 · 死者身份',
      lines: [
        { text: '死者指纹比对：東堂事务所 警备课 佐野 亮（34），2030 年 4 月入职。' },
        { text: '制服内衬有「東堂」纹章；外套口袋有一张当日门禁卡。' },
        { text: '他的手机 22:37 收到一条指令：「04 号机位，处理干净。」' }
      ]
    },
    {
      id: 'film', kind: 'archive', label: '档案 · 佐仓的胶卷盒',
      lines: [
        { text: '佐仓外套内袋：一只胶卷盒，内有一半胶片，标签「滝沢写真 · 2024-09」。' },
        { text: '另半卷据滝沢案卷宗记载，已于 2031 年 5 月烧毁。' },
        { text: '佐仓的笔记本最后一页：「她在找十二个点。第九个，谷中。」' }
      ]
    },
    {
      id: 'testimony', kind: 'testimony', label: '证词 · 谷中花店老板',
      lines: [
        { text: '「十一点多，有个女的撑着黑伞站在坡下，很久，没进灵园。」' },
        { text: '「后来雨大起来，我听见石阶那边一声闷响，像什么倒下了。」' },
        { text: '「再后来，看见一个女的把另一个人从墓前拖出来，一直喊『别死』。」' }
      ]
    }
  ],

  rules: [
    { id: 'x-name', suspect: 'p3', card: 'inscription', title: '碑上刻的不是赤城',
      body: '雨宫雫 2007 年生、2024 年死，2025 年立碑；赤城誠比她大二十岁，生卒年对不上。照片里碑名是「赤城 誠」，碑侧却刻着「二〇〇七 — 二〇二四」——名字是后来贴上去的。有人要让这起袭击看起来像「替赤城报仇」。' },
    { id: 'x-glove', suspect: 'p4', card: 'employ', title: '白手套是東堂事务所的',
      body: '照片下沿那只白手套，袖口有「東堂」纹章；档案里死在墓前的男子，正是東堂事务所的警备佐野亮。袭击佐仓的不是拍照片的人，是「处理干净」清单上的人。' },
    { id: 'x-film', suspect: 'p5', card: 'film', title: '胶卷盒的另一半',
      body: '照片里被踩开的胶卷盒，标签是「滝沢写真研究所 · 2024-09」。佐仓内袋那半卷胶片，标签一模一样——七年前那卷底片，另一半在她身上。有人为了它，把佐仓留在了墓前。' }
  ],

  close: {
    prompt: '今天晚上，是谁袭击了佐仓？',
    suspects: [
      { id: 's-tomori', n: '雨宫灯里' },
      { id: 's-higashido', n: '东堂事务所的人' },
      { id: 's-akagi', n: '替赤城复仇的人' }
    ],
    correctSuspect: 's-higashido',
    evidencePrompt: '哪一件材料最不像话？',
    goodEvidence: 'x-name',
    endingGood: '「赤城 誠」四个字，是从一块贴片上揭下来的。碑侧还留着雨宫雫的生卒年：二〇〇七 — 二〇二四。\n\n做这件事的人不是灯里。做这件事的人，需要别人相信她是灯里。\n\n东堂事务所的警备死在墓前，门禁卡上还带着今天的日期。档案项目要清理一切余党：佐仓排在名单上，你也一样。\n\n雨里，有人把佐仓从石阶上拖出来，一直拖到坡下。\n\n花店老板听见她反复说一句话：「别让她死。她是唯一还没脏的人。」',
    endingBad: '你说是那个撑黑伞的女人。\n\n雨停之后，墓碑上的贴片被人悄悄揭走了。佐仓醒来时只记得雨声，和一只把她拖离石阶的手。'
  },
  outro: '第二天，事务所门口站着一个撑黑伞的女人。她说：「还差三个机位。」'
});
