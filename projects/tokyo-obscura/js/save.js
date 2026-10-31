/* 東京暗箱 · 存档
 * localStorage，三手动槽 + 一自动槽。
 * 结构：{ auto:{...}, s1:{...}, s2:{...}, s3:{...} }
 * 存档体：{ c:案件id, d:疑点, x:矛盾, loc:1, pin:[lat,lng], h:朝向,
 *           open:[展开的卡片], done:[已完成案件], ts:时间戳 }
 */
window.Save = (function () {
  'use strict';

  var KEY = 'tokyo-obscura.save.v1';
  var SLOTS = ['auto', 's1', 's2', 's3'];
  var hasLS = (function () {
    try { localStorage.setItem(KEY + '.probe', '1'); localStorage.removeItem(KEY + '.probe'); return true; }
    catch (e) { return false; }
  })();

  var mem = {};   // 无 localStorage 时的内存兜底（file:// 某些隐私模式）

  function readAll() {
    if (!hasLS) return mem;
    try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; }
    catch (e) { return {}; }
  }

  function writeAll(obj) {
    if (!hasLS) { mem = obj; return true; }
    try { localStorage.setItem(KEY, JSON.stringify(obj)); return true; }
    catch (e) { return false; }
  }

  function put(slot, data) {
    var all = readAll();
    all[slot] = data;
    return writeAll(all);
  }

  function get(slot) {
    return readAll()[slot] || null;
  }

  function del(slot) {
    var all = readAll();
    delete all[slot];
    writeAll(all);
  }

  function list() {
    var all = readAll();
    return SLOTS.map(function (slot) {
      var d = all[slot] || null;
      return { slot: slot, data: d ? Object.assign({}, d, { __slot: slot }) : null };
    });
  }

  function latest() {
    var all = readAll(), best = null, bestTs = -1;
    SLOTS.forEach(function (slot) {
      var d = all[slot];
      if (d && (d.ts || 0) > bestTs) { bestTs = d.ts || 0; best = Object.assign({}, d, { __slot: slot }); }
    });
    return best;
  }

  function clearAll() {
    if (hasLS) localStorage.removeItem(KEY); else mem = {};
  }

  return { SLOTS: SLOTS, available: hasLS, put: put, get: get, del: del, list: list, latest: latest, clearAll: clearAll };
})();
