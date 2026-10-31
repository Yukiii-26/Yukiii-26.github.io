/* 東京暗箱 · Tokyo Obscura — 主程序
 * 屏幕：主界面 / 基本介绍 / 游戏
 * 存档：localStorage，三手动槽 + 自动槽
 */
(function () {
  'use strict';

  var CASES = window.CASES || [];
  var SAVE = window.Save;

  /* ───── 小工具 ───── */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function el(tag, cls, html) {
    var d = document.createElement(tag);
    if (cls) d.className = cls;
    if (html != null) d.innerHTML = html;
    return d;
  }
  function findCase(id) {
    for (var i = 0; i < CASES.length; i++) if (CASES[i].id === id) return CASES[i];
    return null;
  }
  function caseIndex(id) {
    for (var i = 0; i < CASES.length; i++) if (CASES[i].id === id) return i;
    return -1;
  }

  /* ───── 全局状态 ───── */
  var S = null;      // 当前存档状态
  var SLOT = null;   // 当前槽位
  var C = null;      // 当前案件
  var map = null, tile = null, pinMark = null, truthCircle = null;
  var dropMark = null, locating = false;

  /* ═════════ 屏幕切换 ═════════ */
  function show(name) {
    $$('.screen').forEach(function (s) { s.classList.remove('is-on'); });
    var target = $('#screen' + name.charAt(0).toUpperCase() + name.slice(1));
    if (target) target.classList.add('is-on');
    if (name === 'game' && map) setTimeout(function () { map.invalidateSize(); }, 30);
    if (name === 'title') renderFileList();
  }

  /* ═════════ 主界面 ═════════ */
  function renderFileList() {
    var host = $('#fileList');
    if (!host) return;
    var latest = SAVE.latest();
    var done = (latest && latest.done) || [];
    var curId = (latest && latest.c) || null;
    host.innerHTML = '';
    CASES.forEach(function (c) {
      var isDone = done.indexOf(c.id) >= 0;
      var isCur = !isDone && c.id === curId;
      var row = el('div', 'file-row' + (isDone ? ' is-done' : isCur ? ' is-cur' : ''));
      row.innerHTML =
        '<span class="file-no">' + esc(c.code.replace('FILE ', '')) + '</span>' +
        '<span class="file-t">' + esc(c.title) + '</span>' +
        '<span class="file-p">' + esc(c.place) + '</span>' +
        '<span class="file-s">' + (isDone ? '已结案' : isCur ? '进行中' : '') + '</span>';
      host.appendChild(row);
    });
  }

  function newGame() { openSlotPicker('new'); }

  function continueGame() {
    var latest = SAVE.latest();
    if (!latest) { toast('还没有存档。先「开始游戏」。'); return; }
    SLOT = latest.__slot;
    resume(latest);
  }

  function loadGame() { openSlotPicker('load'); }

  function chapterPicker() {
    var order = [], groups = {};
    CASES.forEach(function (c, i) {
      var k = c.chapter || '第一章';
      if (!groups[k]) { groups[k] = []; order.push(k); }
      groups[k].push({ c: c, i: i });
    });
    var html = '<p class="modal-eyebrow">任意章节 \u00b7 START ANYWHERE</p>' +
      '<h3 class="modal-title">从哪一案开始</h3>' +
      '<p class="modal-lead">跳过的案子不计入已完成，但可以直接读。适合换设备、换浏览器、或者存档丢了的时候。</p>' +
      '<div class="chapter-list">';
    order.forEach(function (k) {
      html += '<div class="ch-group"><p class="chapter-head">' + esc(k) + '</p>';
      groups[k].forEach(function (g) {
        html += '<button class="ch-row" data-startat="' + g.i + '">' +
          '<span class="ch-no">' + esc(g.c.code.replace('FILE ', '')) + '</span>' +
          '<span class="ch-t">' + esc(g.c.title) + '</span>' +
          '<span class="ch-p">' + esc(g.c.place) + '</span></button>';
      });
      html += '</div>';
    });
    html += '</div>' +
      '<p class="modal-note">从这里开始会写入<strong>自动存档</strong>。</p>' +
      '<div class="modal-actions"><button class="btn btn-ghost" data-close="1">取消</button></div>';
    openModal(html);
  }

  function startAt(index) {
    var c = CASES[index];
    if (!c) return;
    SLOT = 'auto';
    S = { caseId: null, doubts: [], contra: [], located: false, pin: null, heading: 0, open: [], done: [] };
    startCase(c.id);
    toast('从「' + c.title + '」开始。');
  }

  function openSlotPicker(mode) {
    var rows = SAVE.list();
    var html = '<p class="modal-eyebrow">' + (mode === 'new' ? '開始遊戲 · 選擇存檔槽' : '加載遊戲') + '</p>' +
      '<h3 class="modal-title">' + (mode === 'new' ? '新的卷宗' : '选择一份存档') + '</h3>' +
      '<div class="slot-list">';
    rows.forEach(function (r) {
      var meta = r.data
        ? ('案 ' + r.data.c + ' · ' + timeAgo(r.data.ts) + (r.data.done && r.data.done.length ? ' · 已完成 ' + r.data.done.length + ' 案' : ''))
        : '空';
      var locked = mode === 'load' && !r.data;
      html += '<button class="slot' + (r.data ? '' : ' is-empty') + (locked ? ' is-locked' : '') + '" ' +
        'data-slot="' + r.slot + '" data-mode="' + mode + '"' + (locked ? ' disabled' : '') + '>' +
        '<span class="slot-name">' + slotLabel(r.slot) + '</span>' +
        '<span class="slot-meta">' + esc(meta) + '</span></button>';
    });
    html += '</div><div class="modal-actions"><button class="btn btn-ghost" data-close="1">取消</button></div>';
    openModal(html);
  }

  function slotLabel(slot) {
    return slot === 'auto' ? '自動存檔' : '存檔 ' + slot.slice(1);
  }

  function startNewInSlot(slot) {
    SLOT = slot;
    S = { caseId: null, doubts: [], contra: [], located: false, pin: null, heading: 0, open: [], done: [] };
    startCase(CASES[0].id);
  }

  function resume(data) {
    S = {
      caseId: data.c,
      doubts: data.d || [],
      contra: data.x || [],
      located: !!data.loc,
      pin: data.pin ? { lat: data.pin[0], lng: data.pin[1] } : null,
      heading: data.h || 0,
      open: data.open || [],
      done: data.done || []
    };
    if (!findCase(S.caseId)) { toast('存档里的案件不存在了。'); return; }
    startCase(S.caseId, true);
  }

  function timeAgo(ts) {
    if (!ts) return '';
    var d = Math.max(0, Date.now() - ts) / 1000;
    if (d < 60) return '刚刚';
    if (d < 3600) return Math.floor(d / 60) + ' 分钟前';
    if (d < 86400) return Math.floor(d / 3600) + ' 小时前';
    return Math.floor(d / 86400) + ' 天前';
  }

  /* ═════════ 存档 ═════════ */
  function save() {
    if (!SLOT || !S) return;
    SAVE.put(SLOT, {
      c: S.caseId,
      d: S.doubts,
      x: S.contra,
      loc: S.located ? 1 : 0,
      pin: S.pin ? [S.pin.lat, S.pin.lng] : null,
      h: S.heading,
      open: S.open,
      done: S.done,
      ts: Date.now()
    });
  }

  /* ═════════ 地图 ═════════ */
  function ensureMap() {
    if (map) return;
    map = L.map('map', {
      zoomControl: false,
      attributionControl: true,
      zoomSnap: 0.5,
      minZoom: 13,
      maxZoom: 19
    });
    L.control.zoom({ position: 'bottomright' }).addTo(map);
    tile = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
      maxNativeZoom: 18,
      maxZoom: 19,
      keepBuffer: 3,
      updateWhenIdle: true,
      attribution: '地理院タイル'
    }).addTo(map);
  }

  function clearMapArtifacts() {
    if (pinMark) { map.removeLayer(pinMark); pinMark = null; }
    if (truthCircle) { map.removeLayer(truthCircle); truthCircle = null; }
    if (dropMark) { map.removeLayer(dropMark); dropMark = null; }
  }

  /* ═════════ 案件启动 ═════════ */
  function startCase(id, fromSave) {
    C = findCase(id);
    if (!C) return;
    S.caseId = id;
    if (!fromSave) { S.doubts = []; S.contra = []; S.located = false; S.pin = null; S.open = []; }

    show('game');
    ensureMap();
    map.invalidateSize();

    map.setMinZoom(13);
    map.setMaxBounds(L.latLngBounds(C.map.bounds));
    map.setView(C.map.center, C.map.zoom);

    $('#caseCode').textContent = C.code;
    $('#caseTitle').textContent = C.title;
    $('#caseSub').textContent = C.victim;

    exitLocate(true);
    clearMapArtifacts();
    HINT_SHOWN = 1;

    renderCards();
    renderDoubts();
    renderContra();
    if (S.located) drawTruth();
    syncStatus();
    save();
  }

  /* ═════════ 卷宗渲染 ═════════ */
  function cardIsOpen(card, i) {
    if (S.open && S.open.length) return S.open.indexOf(card.id) >= 0;
    return i === 0;
  }

  function renderCards() {
    var host = $('#cards');
    host.innerHTML = '';
    C.cards.forEach(function (card, i) {
      var open = cardIsOpen(card, i);
      var sec = el('section', 'card' + (open ? ' is-open' : '') + (card.kind === 'photo' ? ' card-photo' : ''));
      sec.dataset.card = card.id;

      var head = el('button', 'card-head');
      head.dataset.toggle = card.id;
      head.innerHTML = '<span class="card-label">' + esc(card.label) + '</span>' +
        '<span class="card-caret">' + (card.kind === 'photo' ? '取景' : '') + '</span>';
      sec.appendChild(head);

      var body = el('div', 'card-body');
      if (card.meta) body.appendChild(el('p', 'card-meta', esc(card.meta)));
      if (card.diagram) body.appendChild(el('div', 'diagram', card.diagram));
      if (card.note) body.appendChild(el('p', 'card-note', esc(card.note)));

      (card.lines || []).forEach(function (ln) {
        var taggable = !!ln.id;
        var d = el('div', 'line' + (taggable ? ' taggable' : ''));
        if (ln.id) d.dataset.line = ln.id;
        d.dataset.card = card.id;
        d.innerHTML = (taggable ? '<span class="tag">◇</span>' : '') +
          '<span class="txt">' + esc(ln.text) + '</span>';
        if (taggable) d.addEventListener('click', function () { toggleDoubt(card.id, ln.id, ln.text); });
        body.appendChild(d);
      });

      sec.appendChild(body);
      if (!open) body.hidden = true;

      head.addEventListener('click', function () {
        var isOpen = sec.classList.toggle('is-open');
        body.hidden = !isOpen;
        if (isOpen) { if (S.open.indexOf(card.id) < 0) S.open.push(card.id); }
        else { var k = S.open.indexOf(card.id); if (k >= 0) S.open.splice(k, 1); }
        if (S.open.length === 0 && !isOpen) { /* 全部收起也可以 */ }
        save();
      });

      host.appendChild(sec);
    });
    markLines();
  }

  function markLines() {
    $$('.line.taggable', $('#cards')).forEach(function (d) {
      var lid = d.dataset.line;
      var inDoubts = S.doubts.some(function (x) { return x.cid === d.dataset.card && x.lid === lid; });
      var used = S.contra.some(function (rid) {
        var r = null;
        for (var i = 0; i < C.rules.length; i++) if (C.rules[i].id === rid) { r = C.rules[i]; break; }
        return r && r.suspect === lid;
      });
      d.classList.toggle('is-tagged', inDoubts);
      d.classList.toggle('is-used', used);
      var tag = d.querySelector('.tag');
      if (tag) tag.textContent = (inDoubts || used) ? '◆' : '◇';
    });
  }

  /* ═════════ 疑点 ═════════ */
  function toggleDoubt(cid, lid, text) {
    var i = -1;
    for (var k = 0; k < S.doubts.length; k++) {
      if (S.doubts[k].cid === cid && S.doubts[k].lid === lid) { i = k; break; }
    }
    if (i >= 0) { S.doubts.splice(i, 1); toast('已取下这条疑点。'); }
    else { S.doubts.push({ cid: cid, lid: lid, text: text }); toast('已钉成疑点。点「对照」把它对上。'); }
    markLines(); renderDoubts(); syncStatus(); save();
  }

  function renderDoubts() {
    var box = $('#doubtsBox'), host = $('#doubtsList');
    $('#doubtCount').textContent = S.doubts.length;
    box.hidden = S.doubts.length === 0;
    host.innerHTML = '';
    S.doubts.forEach(function (d, i) {
      var row = el('div', 'doubt');
      row.innerHTML = '<span class="doubt-text">' + esc(d.text) + '</span>' +
        '<button class="mini" data-cmp="' + i + '">对照</button>';
      host.appendChild(row);
    });
  }

  function openCompare(i) {
    var d = S.doubts[i];
    if (!d) return;
    var srcCard = null;
    for (var i2 = 0; i2 < C.cards.length; i2++) if (C.cards[i2].id === d.cid) { srcCard = C.cards[i2]; break; }
    var cands = C.cards.filter(function (c) { return c.id !== d.cid; });
    var html = '<p class="modal-eyebrow">對照 · ' + esc(srcCard ? srcCard.label : '') + '</p>' +
      '<h3 class="modal-title">「' + esc(d.text) + '」</h3>' +
      '<p class="modal-lede">拿这条疑点，和哪一份材料对？</p><div class="pick-list">';
    cands.forEach(function (c) {
      html += '<button class="pick" data-pair="' + i + '" data-card="' + c.id + '">' +
        '<span class="pick-k">' + kindName(c.kind) + '</span>' +
        '<span class="pick-t">' + esc(c.label) + '</span></button>';
    });
    html += '</div><div class="modal-actions"><button class="btn btn-ghost" data-close="1">取消</button></div>';
    openModal(html);
  }

  function kindName(k) {
    return { brief: '簡報', autopsy: '尸檢', photo: '影像', archive: '檔案', testimony: '證詞' }[k] || '材料';
  }

  function tryPair(di, cardId) {
    var d = S.doubts[di];
    if (!d) return;
    var rule = null;
    for (var i = 0; i < C.rules.length; i++) {
      if (C.rules[i].suspect === d.lid && C.rules[i].card === cardId) { rule = C.rules[i]; break; }
    }
    if (!rule) { toast('这两份材料对不上。换一份试试。'); return; }
    if (S.contra.indexOf(rule.id) >= 0) { toast('这条矛盾已经成立过了。'); closeModal(); return; }
    S.contra.push(rule.id);
    S.doubts.splice(di, 1);
    closeModal();
    markLines(); renderDoubts(); renderContra(); syncStatus(); save();
    mapToast('矛盾成立：' + rule.title);
  }

  function renderContra() {
    var box = $('#contraBox'), host = $('#contraList');
    $('#contraCount').textContent = S.contra.length;
    box.hidden = S.contra.length === 0;
    host.innerHTML = '';
    S.contra.forEach(function (rid) {
      var r = ruleById(rid);
      if (!r) return;
      var row = el('div', 'contra-item');
      row.innerHTML = '<div class="contra-title">' + esc(r.title) + '</div>' +
        '<p class="contra-body">' + esc(r.body) + '</p>';
      host.appendChild(row);
    });
  }

  function ruleById(id) {
    for (var i = 0; i < C.rules.length; i++) if (C.rules[i].id === id) return C.rules[i];
    return null;
  }

  /* ═════════ 状态条 ═════════ */
  function syncStatus() {
    var need = C.need || C.rules.length;
    $('#statDoubt').textContent = S.doubts.length;
    $('#statContra').textContent = S.contra.length;
    $('#statLoc').textContent = S.located ? '已定位' : '未定位';
    $('#statLoc').classList.toggle('is-ok', !!S.located);
    $('#btnClose').disabled = !(S.contra.length >= need && S.located);
    $('#btnLocate').disabled = !!S.located;

    var hint = $('#hintText');
    if (S.located && S.contra.length >= need) hint.textContent = '材料够了。可以结案陈词。';
    else if (S.located) hint.textContent = '还差 ' + (need - S.contra.length) + ' 条成立的矛盾。';
    else if (S.contra.length >= need) hint.textContent = '去地图上把机位定下来。';
    else hint.textContent = '先读卷宗。影像卡上的每一行都可以点选。';
  }

  /* ═════════ 定位 ═════════ */
  function enterLocate() {
    if (!C || S.located) return;
    locating = true;
    $('#locateUI').hidden = false;
    setHeading(S.heading || C.target.heading);
    if (!dropMark) {
      dropMark = L.marker(map.getCenter(), {
        draggable: true,
        icon: L.divIcon({ className: 'pin-slot', html: '<div class="pin-slot-dot"></div>', iconSize: [26, 26], iconAnchor: [13, 13] })
      }).addTo(map);
    }
    map.on('click', onMapPick);
  }

  function onMapPick(e) {
    if (!dropMark) return;
    dropMark.setLatLng(e.latlng);
  }

  function exitLocate(silent) {
    locating = false;
    var ui = $('#locateUI');
    if (ui) ui.hidden = true;
    if (map) map.off('click', onMapPick);
    if (dropMark && map) { map.removeLayer(dropMark); dropMark = null; }
  }

  function setHeading(deg) {
    S.heading = ((Math.round(deg) % 360) + 360) % 360;
    var range = $('#headingRange');
    if (range) range.value = S.heading;
    var dv = $('#degVal');
    if (dv) dv.textContent = String(S.heading).padStart(3, '0');
    var needle = $('#needle');
    if (needle) needle.setAttribute('transform', 'rotate(' + S.heading + ' 32 32)');
  }

  function angleDiff(a, b) {
    var d = Math.abs(((a - b) % 360 + 360) % 360);
    return d > 180 ? 360 - d : d;
  }

  function confirmLocate() {
    if (!dropMark) { toast('先把图钉放到地图上。'); return; }
    var pt = dropMark.getLatLng();
    var t = C.target;
    var dm = map.distance(pt, L.latLng(t.lat, t.lng));
    var dh = angleDiff(S.heading, t.heading);

    if (dm <= t.goodRadius && dh <= t.headingTolerance) {
      S.located = true;
      S.pin = { lat: pt.lat, lng: pt.lng };
      exitLocate(true);
      clearMapArtifacts();
      drawTruth();
      mapToast('定位成立 · 偏差 ' + Math.round(dm) + ' m · 朝向差 ' + Math.round(dh) + '°');
      syncStatus(); save();
    } else if (dm <= t.nearRadius) {
      mapToast('方位大体对。' + (dm <= t.goodRadius ? '朝向再调一调。' : '机位再收一点。'));
    } else {
      mapToast('差得还远。再读一遍影像卡里的地标。');
    }
  }

  function drawTruth() {
    var t = C.target;
    truthCircle = L.circle([t.lat, t.lng], {
      radius: t.goodRadius,
      color: '#b3352b', weight: 1, opacity: .55,
      fillColor: '#b3352b', fillOpacity: .05, dashArray: '4 4'
    }).addTo(map);
    pinMark = L.marker([t.lat, t.lng], {
      icon: L.divIcon({ className: 'pin-ok', html: '<div class="pin-ok-dot"></div>', iconSize: [16, 16], iconAnchor: [8, 8] })
    }).addTo(map);
    map.setView([t.lat, t.lng], Math.max(map.getZoom(), 17));
  }

  /* ═════════ 结案 ═════════ */
  function openClose() {
    var need = C.need || C.rules.length;
    if (S.contra.length < need) { toast('还差 ' + (need - S.contra.length) + ' 条成立的矛盾。'); return; }
    if (!S.located) { toast('还没有定位。'); return; }

    var html = '<p class="modal-eyebrow">結案陳詞 · ' + esc(C.code) + '</p>' +
      '<h3 class="modal-title">' + esc(C.close.prompt) + '</h3>' +
      '<div class="pick-list">';
    C.close.suspects.forEach(function (s) {
      html += '<button class="pick pick-suspect" data-suspect="' + s.id + '">' +
        '<span class="pick-t">' + esc(s.n) + '</span></button>';
    });
    html += '</div><p class="modal-lede" style="margin:20px 0 10px">' + esc(C.close.evidencePrompt) + '</p><div class="pick-list">';
    S.contra.forEach(function (rid) {
      var r = ruleById(rid);
      if (!r) return;
      html += '<button class="pick pick-ev" data-ev="' + r.id + '">' +
        '<span class="pick-k">矛盾</span><span class="pick-t">' + esc(r.title) + '</span></button>';
    });
    html += '</div><div class="modal-actions"><button class="btn btn-ghost" data-close="1">再想想</button></div>';
    openModal(html);

    var chosenSuspect = null, chosenEv = null;
    $$('#modalCard .pick-suspect').forEach(function (b) {
      b.addEventListener('click', function () {
        $$('#modalCard .pick-suspect').forEach(function (x) { x.classList.remove('is-sel'); });
        b.classList.add('is-sel');
        chosenSuspect = b.dataset.suspect;
        maybeSubmit();
      });
    });
    $$('#modalCard .pick-ev').forEach(function (b) {
      b.addEventListener('click', function () {
        $$('#modalCard .pick-ev').forEach(function (x) { x.classList.remove('is-sel'); });
        b.classList.add('is-sel');
        chosenEv = b.dataset.ev;
        maybeSubmit();
      });
    });

    function maybeSubmit() {
      if (!chosenSuspect || !chosenEv) return;
      var s = chosenSuspect, e = chosenEv;
      setTimeout(function () { submitClose(s, e); }, 200);
    }
  }

  function submitClose(suspect, ev) {
    var good = (suspect === C.close.correctSuspect) && (ev === C.close.goodEvidence);
    closeModal();
    if (good) {
      if (S.done.indexOf(C.id) < 0) S.done.push(C.id);
      save();
      showEnding(true);
    } else {
      toast('陈词站不住。再读一遍卷宗。');
    }
  }

  function showEnding(good) {
    var text = good ? C.close.endingGood : C.close.endingBad;
    var idx = caseIndex(C.id);
    var next = good && CASES[idx + 1] ? CASES[idx + 1] : null;
    var html = '<div class="ending">' +
      '<div class="stamp">' + (good ? '受理' : '退件') + '</div>' +
      '<p class="modal-eyebrow">' + (good ? 'CASE CLOSED' : 'INCOMPLETE') + ' · ' + esc(C.code) + '</p>' +
      '<h3 class="modal-title">' + esc(C.title) + '</h3>' +
      '<div class="ending-text">' + esc(text).replace(/\n/g, '<br>') + '</div>' +
      '<div class="ending-outro">' + esc(C.outro || '') + '</div>' +
      (next ? '' : '<p class="fin">FIN · 全剧终</p>') +
      '<div class="modal-actions">' +
      (next
        ? '<button class="btn btn-ghost" data-act="title">回到主界面</button>' +
          '<button class="btn btn-primary" data-next="' + next.id + '">继续 · ' + esc(next.code.replace('FILE ', '案 ')) + '</button>'
        : '<button class="btn btn-primary" data-act="title">回到主界面</button>') +
      '</div></div>';
    openModal(html);
  }

  /* ═════════ 深浅色 ═════════ */
  function systemDark() {
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  function applyTheme(mode) {
    var root = document.documentElement;
    if (mode) root.setAttribute('data-theme', mode);
    else root.removeAttribute('data-theme');
    paintThemeBtn();
  }

  function currentTheme() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t) return t;
    return systemDark() ? 'dark' : 'light';
  }

  function paintThemeBtn() {
    var b = $('#themeToggle');
    if (!b) return;
    var cur = currentTheme();
    b.title = cur === 'dark' ? '切换到浅色' : '切换到深色';
  }

  function toggleTheme() {
    // 只在内存里生效：不写 localStorage，每次进入都回到跟随系统
    applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  }

  /* ═════════ 本案提示（教程） ═════════ */
  var HINT_SHOWN = 1;

  function cardById(id) {
    for (var i = 0; i < (C.cards || []).length; i++) if (C.cards[i].id === id) return C.cards[i];
    return null;
  }

  function cardOfLine(lid) {
    for (var i = 0; i < (C.cards || []).length; i++) {
      var cs = C.cards[i].lines || [];
      for (var j = 0; j < cs.length; j++) if (cs[j].id === lid) return C.cards[i];
    }
    return null;
  }

  function openTutorial() {
    if (!C) return;
    var need = C.need || (C.rules || []).length;
    var have = S.contra.length;
    var open = (C.rules || []).filter(function (r) { return S.contra.indexOf(r.id) < 0; });

    var step2 = S.doubts.length
      ? '<span class="ok">已钉 ' + S.doubts.length + ' 条</span>'
      : '<span class="mute">还没钉</span>';
    var step3 = '<span class="' + (have >= need ? 'ok">' : 'mute">') + have + ' / ' + need + ' 条</span>';
    var step4 = S.located ? '<span class="ok">已定位</span>' : '<span class="mute">未定位</span>';

    var hints = open.map(function (r) {
      var from = cardOfLine(r.suspect) || cardById(r.card);
      var to = cardById(r.card);
      return '把「' + (from ? from.label : '影像卡') + '」里的某一行，拿去和「' +
        (to ? to.label : r.card) + '」对照。';
    });

    var shown = hints.slice(0, HINT_SHOWN);
    var html = '<div class="tutorial">' +
      '<p class="modal-eyebrow">HOW TO CLOSE · ' + esc(C.code) + '</p>' +
      '<h3 class="modal-title">本案怎么结</h3>' +
      '<ol class="tut-steps">' +
      '<li><b>读卷宗</b>点卡片标题展开。影像卡、尸检、档案、证词都要读。</li>' +
      '<li><b>钉疑点</b>带 ◇ 的行点一下，就钉成疑点。' + step2 + '</li>' +
      '<li><b>做对照</b>状态条「疑点」→ 选一条 → 选<em>另一份</em>材料。' + step3 + '</li>' +
      '<li><b>去定位</b>点「影像定位」，把图钉拖到你判断的机位，再转罗盘定朝向。' + step4 + '</li>' +
      '<li><b>结案</b>矛盾够了、位置准了 → 「结案陈词」→ 指认 + 出示一件证据。</li>' +
      '</ol>';

    if (hints.length) {
      html += '<div class="tut-hints"><p class="tut-hints-head">还差的方向 · ' + hints.length + ' 条</p>';
      shown.forEach(function (t, i) {
        html += '<p class="tut-hint"><span class="tut-hint-no">0' + (i + 1) + '</span>' + esc(t) + '</p>';
      });
      html += '</div>';
    } else {
      html += '<p class="tut-done">矛盾齐了' + (S.located ? '、位置也准了' : '，还差定位') +
        '——去「结案陈词」吧。</p>';
    }

    html += '<p class="tut-note">提示只指方向，不替你读。</p>' +
      '<div class="modal-actions">' +
      (shown.length < hints.length
        ? '<button class="btn btn-ghost" data-hintmore="1">再给一条</button>'
        : '') +
      '<button class="btn btn-primary" data-close="1">知道了</button></div>' +
      '</div>';
    openModal(html);
  }

  /* ═════════ 弹窗 / 提示 ═════════ */
  function confirmOverwrite(slot) {
    var data = SAVE.get(slot);
    var when = data && data.time ? new Date(data.time).toLocaleString('zh-CN', { hour12: false }) : '';
    openModal(
      '<h2 class="modal-title">覆盖存档</h2>' +
      '<p class="slot-warn">' + esc(slotLabel(slot)) + ' 已有进度' + (when ? '（' + esc(when) + '）' : '') + '，开始新游戏会覆盖它。</p>' +
      '<div class="modal-actions"><button class="btn btn-ghost" data-close="1">取消</button>' +
      '<button class="btn btn-main" data-newsave="' + esc(slot) + '">覆盖并开始</button></div>'
    );
  }

  function openModal(html) {
    $('#modalCard').innerHTML = html;
    $('#modal').hidden = false;
  }
  function closeModal() { $('#modal').hidden = true; }

  var toastTimer = null;
  function toast(msg) {
    var host = $('#toastHost');
    if (!host) return;
    host.innerHTML = '<div class="toast">' + esc(msg) + '</div>';
    host.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { host.hidden = true; }, 2400);
  }

  var mapToastTimer = null;
  function mapToast(msg) {
    var box = $('#mapToast');
    if (!box) return;
    box.textContent = msg;
    box.hidden = false;
    clearTimeout(mapToastTimer);
    mapToastTimer = setTimeout(function () { box.hidden = true; }, 3200);
  }

  /* ═════════ 面板 ═════════ */
  function openPanel(which) {
    if (!C) return;
    if (which === 'loc') {
      var html = '<p class="modal-eyebrow">影像定位</p><h3 class="modal-title">' +
        (S.located ? '已定位' : '把照片放回地图') + '</h3><p class="modal-lede">' +
        (S.located
          ? '你已经在案卷里钉下了机位。红色虚线圈内是允许误差。'
          : '点「开始定位」，把图钉拖到机位上，再调罗盘定朝向。误差之内即算成立。') +
        '</p>' + (S.located ? '' : '<div class="modal-actions"><button class="btn btn-primary" data-locate="1">开始定位</button></div>') +
        '<div class="modal-actions"><button class="btn btn-ghost" data-close="1">关闭</button></div>';
      openModal(html);
      return;
    }

    if (which === 'doubts') {
      var h1 = '<p class="modal-eyebrow">疑點</p><h3 class="modal-title">' +
        (S.doubts.length ? '钉下的 ' + S.doubts.length + ' 条' : '还没有疑点') + '</h3>';
      if (!S.doubts.length) h1 += '<p class="modal-lede">在影像卡里点任意一行，就能钉成疑点。</p>';
      else {
        h1 += '<div class="pick-list">';
        S.doubts.forEach(function (d, i) {
          h1 += '<button class="pick" data-cmp="' + i + '"><span class="pick-k">疑点</span>' +
            '<span class="pick-t">' + esc(d.text) + '</span></button>';
        });
        h1 += '</div>';
      }
      h1 += '<div class="modal-actions"><button class="btn btn-ghost" data-close="1">关闭</button></div>';
      openModal(h1);
      return;
    }

    if (which === 'contra') {
      var h2 = '<p class="modal-eyebrow">矛盾</p><h3 class="modal-title">' +
        (S.contra.length ? '成立的 ' + S.contra.length + ' 条' : '还没有矛盾') + '</h3>';
      if (!S.contra.length) h2 += '<p class="modal-lede">把疑点拿去和另一份材料对照，能对上的就成了矛盾。</p>';
      else {
        h2 += '<div class="modal-contra">';
        S.contra.forEach(function (rid) {
          var r = ruleById(rid);
          if (!r) return;
          h2 += '<div class="contra-item"><div class="contra-title">' + esc(r.title) + '</div>' +
            '<p class="contra-body">' + esc(r.body) + '</p></div>';
        });
        h2 += '</div>';
      }
      h2 += '<div class="modal-actions"><button class="btn btn-ghost" data-close="1">关闭</button></div>';
      openModal(h2);
    }
  }

  /* ═════════ 事件 ═════════ */
  document.addEventListener('click', function (e) {
    var t = e.target;

    var act = t.closest('[data-act]');
    if (act) {
      e.preventDefault();
      var a = act.dataset.act;
      if (a === 'new') newGame();
      else if (a === 'continue') continueGame();
      else if (a === 'load') loadGame();
      else if (a === 'chapter') chapterPicker();
      else if (a === 'intro') show('intro');
      else if (a === 'title') { closeModal(); show('title'); }
      return;
    }

    var st = t.closest('[data-startat]');
    if (st) { e.preventDefault(); closeModal(); startAt(+st.dataset.startat); return; }

    var slot = t.closest('[data-slot]');
    if (slot && !slot.disabled) {
      e.preventDefault();
      var s = slot.dataset.slot, mode = slot.dataset.mode;
      var data = SAVE.get(s);
      if (mode === 'new') {
        if (data) { confirmOverwrite(s); return; }
        closeModal();
        startNewInSlot(s);
      } else if (data) {
        SLOT = s;
        closeModal();
        resume(data);
      }
      return;
    }

    var ns = t.closest('[data-newsave]');
    if (ns) { e.preventDefault(); closeModal(); startNewInSlot(ns.dataset.newsave); return; }

    var cmp = t.closest('[data-cmp]');
    if (cmp) { e.preventDefault(); openCompare(+cmp.dataset.cmp); return; }

    var pair = t.closest('[data-pair]');
    if (pair) { e.preventDefault(); tryPair(+pair.dataset.pair, pair.dataset.card); return; }

    var next = t.closest('[data-next]');
    if (next) { e.preventDefault(); closeModal(); startCase(next.dataset.next); return; }

    var loc = t.closest('[data-locate]');
    if (loc) { e.preventDefault(); closeModal(); enterLocate(); return; }

    var hm = t.closest('[data-hintmore]');
    if (hm) { e.preventDefault(); HINT_SHOWN++; openTutorial(); return; }

    var closer = t.closest('[data-close]');
    if (closer) { e.preventDefault(); closeModal(); return; }

    var panel = t.closest('[data-panel]');
    if (panel) {
      e.preventDefault();
      openPanel(panel.dataset.panel);
      return;
    }

    /* 「返回主页」：地址写在 index.html 的 <a id="btnHome" href="../../index.html"> 上，走浏览器原生跳转，这里不再拦截 */
  });

  document.addEventListener('input', function (e) {
    if (e.target.id === 'headingRange') setHeading(+e.target.value);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { if (locating) exitLocate(); else closeModal(); }
  });

  var btnLocate = $('#btnLocate');
  if (btnLocate) btnLocate.addEventListener('click', enterLocate);
  var btnClose = $('#btnClose');
  if (btnClose) btnClose.addEventListener('click', openClose);
  var btnCancel = $('#btnCancelLocate');
  if (btnCancel) btnCancel.addEventListener('click', function () { exitLocate(); });
  var btnConfirm = $('#btnConfirmLocate');
  if (btnConfirm) btnConfirm.addEventListener('click', confirmLocate);

  /* 启动 */
  paintThemeBtn();
  var btnTheme = $('#themeToggle');
  if (btnTheme) btnTheme.addEventListener('click', function (e) { e.preventDefault(); toggleTheme(); });
  var btnTut = $('#btnTutorial');
  if (btnTut) btnTut.addEventListener('click', function (e) { e.preventDefault(); HINT_SHOWN = 1; openTutorial(); });

  ensureMap();
  renderFileList();
  show('title');

  window.__dbg = {
    get S() { return S; }, get C() { return C; }, get map() { return map; }, get slot() { return SLOT; },
    get dropMark() { return dropMark; }, get locating() { return locating; },
    startCase: startCase, save: save, openTutorial: openTutorial, toggleTheme: toggleTheme, setHeading: setHeading, startNewInSlot: startNewInSlot, enterLocate: enterLocate
  };
})();
