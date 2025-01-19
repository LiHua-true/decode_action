//Sun Jan 19 2025 16:19:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
require("global-agent/bootstrap");
const _0x482201 = require("axios");
async function _0x34658e() {
  try {
    console.log("🚀代理地址", proxyUrl);
    global.GLOBAL_AGENT.HTTP_PROXY = proxyUrl;
    console.log("🚀启动global-agent中");
  } catch (_0x75d39f) {
    console.error("获取代理地址失败:", _0x75d39f);
  }
}
async function _0x3dd7ba() {
  try {
    const _0x311dea = await _0x482201.get("https://httpbin.org/ip");
    return console.log("代理请求成功:", _0x311dea.data.origin), true;
  } catch (_0x74b1d8) {
    return console.error("代理请求失败:", _0x74b1d8.message), false;
  }
}
const _0x301945 = require("fs"),
  _0x3e9f60 = require("js-yaml");
async function _0x2adc62() {
  try {
    const _0x1a47c9 = _0x301945.readFileSync(filePath, "utf8"),
      _0x5c57fe = _0x3e9f60.load(_0x1a47c9),
      _0x3d4821 = _0x5c57fe?.["accounts"] || [];
    if (_0x3d4821.length === 0) return console.log("未找到有效的app账号数据，跳过处理"), [];
    const _0x2f4c68 = [];
    for (let _0x21efb6 = 0; _0x21efb6 < _0x3d4821.length; _0x21efb6++) {
      const _0x26acd6 = _0x3d4821[_0x21efb6],
        _0x51d9d6 = _0x26acd6.code?.["match"](/(?:[?&])code=([A-Za-z0-9._%-]+)/);
      if (!_0x51d9d6) {
        console.error("第 " + (_0x21efb6 + 1) + " 号app账号没有有效的 code 参数，跳过");
        continue;
      }
      const _0x51c22a = _0x51d9d6[1];
      if (!_0x26acd6.refresh_token) {
        console.log("开始登录第 " + (_0x21efb6 + 1) + " 号app账号");
        try {
          const _0x307f2f = await _0x1943b1(_0x51c22a);
          _0x26acd6.refresh_token = _0x307f2f;
          console.log("第 " + (_0x21efb6 + 1) + " 号app账号获取到新的刷新令牌");
        } catch (_0x571cd0) {
          console.error("第 " + (_0x21efb6 + 1) + " 号app账号获取刷新令牌失败: " + _0x571cd0);
          continue;
        }
      }
      if (_0x26acd6.refresh_token) {
        try {
          const {
            access_token: _0x10b586,
            refresh_token: _0x356f8a
          } = await _0x2bc929(_0x26acd6.refresh_token);
          _0x26acd6.access_token = _0x10b586;
          _0x356f8a && (_0x26acd6.refresh_token = _0x356f8a);
          console.log("第 " + (_0x21efb6 + 1) + " 号app账号获取到登录令牌");
        } catch (_0x49f0cf) {
          console.error("第 " + (_0x21efb6 + 1) + " 号app账号获取登录令牌失败: " + _0x49f0cf);
          continue;
        }
      }
      _0x26acd6.access_token && _0x2f4c68.push(_0x26acd6);
    }
    console.log("有效app账号数：", _0x2f4c68.length);
    if (_0x2f4c68.length > 0) await _0x1f14eb(filePath, _0x2f4c68), console.log("YAML 文件已更新");else {
      console.log("没有有效app账号，跳过 YAML 文件更新");
    }
    return _0x2f4c68;
  } catch (_0xa3ead1) {
    console.error("读取或解析 " + filePath + " 文件失败:", _0xa3ead1);
    throw _0xa3ead1;
  }
}
async function _0x1943b1(_0x48af48) {
  const _0x2ddfdd = "https://login.live.com/oauth20_token.srf?client_id=0000000040170455&code=" + _0x48af48 + "&redirect_uri=https://login.live.com/oauth20_desktop.srf&grant_type=authorization_code";
  try {
    const _0x26b839 = await _0x482201.get(_0x2ddfdd);
    return _0x26b839.data.refresh_token;
  } catch (_0x2bab11) {
    console.error("获取 刷新令牌 失败: " + _0x2bab11);
    throw _0x2bab11;
  }
}
async function _0x2bc929(_0xf10d49) {
  const _0xb8e2fa = "https://login.live.com/oauth20_token.srf?client_id=0000000040170455&refresh_token=" + _0xf10d49 + "&scope=service::prod.rewardsplatform.microsoft.com::MBI_SSL&grant_type=REFRESH_TOKEN";
  try {
    const _0x56b558 = await _0x482201.get(_0xb8e2fa);
    return {
      "access_token": _0x56b558.data.access_token,
      "refresh_token": _0x56b558.data.refresh_token || _0xf10d49
    };
  } catch (_0x39b57b) {
    console.error("获取 登录令牌 失败: " + _0x39b57b);
    throw _0x39b57b;
  }
}
async function _0x1f14eb(_0x4d3009, _0x2ee24b) {
  try {
    const _0x23e7a2 = {
        "accounts": _0x2ee24b
      },
      _0x432556 = _0x3e9f60.dump(_0x23e7a2, {
        "lineWidth": 1000000
      });
    _0x301945.writeFileSync(_0x4d3009, _0x432556, "utf8");
  } catch (_0x5c6c61) {
    console.error("更新 " + _0x4d3009 + " 文件失败:", _0x5c6c61);
    throw _0x5c6c61;
  }
}
const _0x19134b = process.env[Account_name] ? process.env[Account_name].split("\n").map(_0x55d69a => _0x55d69a.trim()).filter(_0x393af6 => _0x393af6) : [];
if (_0x19134b.length === 0) throw new Error("未检测到任何账号，请在环境变量中设置 " + Account_name);
console.log("web账号数：", _0x19134b.length);
function _0x420549(_0xc2af09) {
  const _0x4047dc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let _0x5e8d79 = "";
  for (let _0x59c995 = 0; _0x59c995 < _0xc2af09; _0x59c995++) {
    _0x5e8d79 += _0x4047dc.charAt(Math.floor(Math.random() * _0x4047dc.length));
  }
  return _0x5e8d79;
}
async function _0x5ee537() {
  const _0xc8baf1 = ["BaiduHot", "ToutiaoHot", "DouYinHot", "ZhihuHot", "BiliBliHot", "WeiBoHot", "SoGouHot", "BaiduTieBaHot", "SoHot"],
    _0x328411 = ["盛年不重来，一日难再晨", "千里之行，始于足下", "少年易学老难成，一寸光阴不可轻", "敏而好学，不耻下问", "海内存知己，天涯若比邻", "三人行，必有我师焉", "莫愁前路无知己，天下谁人不识君", "人生贵相知，何用金与钱", "天生我材必有用"];
  let _0x5c9803 = [];
  _0x44dffb(_0xc8baf1);
  for (const _0x5875a9 of _0xc8baf1) {
    try {
      const _0x5c6a8d = await _0x482201.get("https://api.gumengya.com/Api/" + _0x5875a9);
      _0x5c6a8d.data && _0x5c6a8d.data.data && (_0x5c9803 = _0x5c9803.concat(_0x5c6a8d.data.data.map(_0x25fa4b => _0x25fa4b.title)));
    } catch (_0x5ae844) {
      console.warn("请求失败: " + _0x5875a9 + ", 错误: " + _0x5ae844);
    }
  }
  const _0x404065 = [...new Set(_0x5c9803)];
  return _0x404065.length ? _0x404065 : _0x328411;
}
function _0x44dffb(_0x393737) {
  for (let _0x731e1a = _0x393737.length - 1; _0x731e1a > 0; _0x731e1a--) {
    const _0x2c213c = Math.floor(Math.random() * (_0x731e1a + 1));
    [_0x393737[_0x731e1a], _0x393737[_0x2c213c]] = [_0x393737[_0x2c213c], _0x393737[_0x731e1a]];
  }
}
async function _0x1c5f88(_0x511763, _0x343f4f, _0x2e7069, _0x12eef5) {
  const _0x59b4eb = "https://cn.bing.com/search",
    _0x4bcc73 = {
      "q": _0x511763,
      "qs": "n",
      "form": _0x420549(4),
      "sp": "-1",
      "lq": "0",
      "pq": _0x511763,
      "sc": "9-16",
      "sk": "",
      "cvid": _0x420549(32),
      "ghsh": "0",
      "ghacc": "0",
      "ghpl": ""
    },
    _0x4e701e = {
      "User-Agent": _0x343f4f,
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "priority": "u=0, i",
      "Cookie": _0x2e7069
    };
  try {} catch (_0xbb30b4) {
    console.error("[账号 " + _0x12eef5 + "] 搜索请求失败: " + _0xbb30b4);
  }
}
async function _0x3e7c23(_0x259327, _0xa5d3d9) {
  const _0x5ed2bb = "https://cn.bing.com/rewardsapp/reportActivity",
    _0x286572 = {
      "Cookie": _0x259327,
      "User-Agent": PC_USER_AGENT
    };
  try {
    const _0x26cf7a = await _0x482201.get(_0x5ed2bb, {
        "headers": _0x286572
      }),
      _0x452446 = _0x26cf7a.data.match(/"RewardsBalance":(\d+)/);
    if (_0x452446) {
      return parseInt(_0x452446[1], 10);
    } else return console.warn("[账号 " + _0xa5d3d9 + "] 未找到积分信息"), null;
  } catch (_0x426bdd) {
    return console.error("[账号 " + _0xa5d3d9 + "] 获取积分失败: " + _0x426bdd), null;
  }
}
const _0x50a8f2 = require("cheerio");
async function _0x51c092(_0x426eeb) {
  const _0x33c889 = "https://rewards.bing.com",
    _0x1e875a = {
      "ref": "rewardspanel"
    },
    _0x49c920 = {
      "User-Agent": PC_USER_AGENT,
      "Cookie": _0x426eeb
    };
  try {
    const _0x34edfc = await _0x482201.get(_0x33c889, {
        "params": _0x1e875a,
        "headers": _0x49c920
      }),
      _0x18cb13 = _0x50a8f2.load(_0x34edfc.data),
      _0x5ec27e = _0x18cb13("input[name=\"__RequestVerificationToken\"]");
    if (_0x5ec27e.length > 0) return _0x5ec27e.val();else {
      return console.error("__RequestVerificationToken not found."), null;
    }
  } catch (_0x328b34) {
    return console.error("获取 Token 失败: " + _0x328b34), null;
  }
}
async function _0x340ef3(_0x10aacb, _0x30e543, _0x25c98d, _0x3fe524) {
  console.log("开始执行任务 " + _0x10aacb);
  const _0x2ab2bc = "https://rewards.bing.com/api/reportactivity",
    _0x49d1b9 = {
      "X-Requested-With": "XMLHttpRequest"
    },
    _0x3329d5 = new URLSearchParams({
      "id": _0x10aacb,
      "hash": _0x30e543,
      "__RequestVerificationToken": _0x3fe524
    }).toString(),
    _0x490c98 = {
      "User-Agent": PC_USER_AGENT,
      "Content-Type": "application/x-www-form-urlencoded",
      "Referer": "https://rewards.bing.com/",
      "Cookie": _0x25c98d
    };
  try {
    const _0x477843 = await _0x482201.post(_0x2ab2bc, _0x3329d5, {
      "params": _0x49d1b9,
      "headers": _0x490c98
    });
    if (_0x477843.status !== 200) {
      console.error("请求失败，HTTP 状态码: " + _0x477843.status);
      return;
    }
    const _0x51b19d = _0x477843.data,
      _0x23be26 = _0x51b19d.balance || null;
    if (_0x23be26 !== null) return console.log("当前积分：" + _0x23be26), true;else console.warn("未能从响应中获取积分信息");
  } catch (_0x19d671) {
    console.error("请求失败: " + _0x19d671);
  }
}
async function _0x994060(_0x40cd5d) {
  const _0x2143ff = "https://rewards.bing.com/api/getuserinfo",
    _0x5a0f2b = {
      "type": "1",
      "X-Requested-With": "XMLHttpRequest",
      "_": Date.now()
    },
    _0xb6f3cb = {
      "User-Agent": PC_USER_AGENT,
      "Cookie": _0x40cd5d
    };
  try {
    const _0x3d7247 = await _0x482201.get(_0x2143ff, {
      "params": _0x5a0f2b,
      "headers": _0xb6f3cb
    });
    return _0x3d7247.data;
  } catch (_0x2c7c04) {
    return console.error("获取搜索任务进度失败，错误: " + _0x2c7c04), null;
  }
}
async function _0x33d0d7(_0x16e316, _0x299a62, _0x3dd750) {
  console.log("开始处理账号 " + _0x16e316);
  let _0x2fc381 = "",
    _0x49fb02;
  try {
    _0x49fb02 = await _0x3dd750(_0x299a62);
    if (!_0x49fb02) {
      console.warn("跳过当前账号 " + _0x16e316 + " 任务，因为账号失效。");
      _0x2fc381 += "账号 " + _0x16e316 + " 失效\n";
      QLAPI.notify("账号失效", "当前账号 " + _0x16e316 + "失效。");
      return;
    }
  } catch (_0x386480) {
    console.error("账号 " + _0x16e316 + " 获取 token 失败，错误: " + _0x386480);
    return;
  }
  const _0x4648de = "https://rewards.bing.com/api/getuserinfo",
    _0x5f0cb6 = {
      "type": "1",
      "X-Requested-With": "XMLHttpRequest",
      "_": Date.now()
    },
    _0x4491a5 = {
      "User-Agent": PC_USER_AGENT,
      "Cookie": _0x299a62
    };
  let _0x2aea9c;
  try {
    const _0x49fb78 = await _0x482201.get(_0x4648de, {
      "params": _0x5f0cb6,
      "headers": _0x4491a5
    });
    _0x2aea9c = _0x49fb78.data;
  } catch (_0x6b074b) {
    console.error("账号 " + _0x16e316 + " 获取每日任务失败，错误: " + _0x6b074b);
    return;
  }
  const _0x3d5b0b = new Date().toLocaleDateString("en-US", {
    "month": "2-digit",
    "day": "2-digit",
    "year": "numeric"
  });
  let _0x31468f = 0,
    _0x54a186 = 0;
  const _0x283268 = _0x2aea9c.dashboard.dailySetPromotions[_0x3d5b0b] || [];
  for (const _0x172bc3 of _0x283268) {
    _0x54a186++;
    const {
      offerId: _0x1997d8,
      title: _0x4a9aae,
      hash: _0x21136b,
      complete: _0x3ca8c6,
      pointProgressMax: _0x28bb0a,
      attributes: _0x4b835e
    } = _0x172bc3;
    console.log("------------------------");
    console.log("每日任务");
    console.log("[账号 " + _0x16e316 + "]");
    console.log("Name: " + _0x1997d8);
    console.log("题目: " + _0x4a9aae);
    console.log("Hash: " + _0x21136b);
    console.log("是否完成: " + _0x3ca8c6);
    console.log("奖励积分: " + _0x28bb0a);
    if (_0x4b835e?.["is_unlocked"] === "False") {
      console.log("任务未解锁");
    } else {
      if (!_0x3ca8c6) try {
        const _0x27888b = await _0x340ef3(_0x1997d8, _0x21136b, _0x299a62, _0x49fb02);
        _0x27888b && _0x31468f++;
      } catch (_0x272ed0) {
        console.error("账号 " + _0x16e316 + " 执行任务失败，错误: " + _0x272ed0);
        continue;
      } else _0x31468f++, console.log("任务已完成");
    }
    const _0x1aaf6e = Math.floor(Math.random() * (300 - 250 + 1)) + 250;
    console.log("[账号 " + _0x16e316 + "] 等待 " + _0x1aaf6e + " 秒");
    await new Promise(_0x170786 => setTimeout(_0x170786, _0x1aaf6e * 1000));
  }
  let _0x531c14 = 0,
    _0x142545 = 0;
  for (const _0x3b901b of _0x2aea9c.dashboard.morePromotions) {
    if (_0x3b901b.pointProgressMax === 0) continue;
    _0x142545++;
    const {
      offerId: _0x54b531,
      title: _0x11d819,
      hash: _0xd6970f,
      complete: _0x254470,
      pointProgressMax: _0x445957,
      attributes: _0x42660f
    } = _0x3b901b;
    console.log("------------------------");
    console.log("更多任务");
    console.log("[账号 " + _0x16e316 + "]");
    console.log("Name: " + _0x54b531);
    console.log("题目: " + _0x11d819);
    console.log("Hash: " + _0xd6970f);
    console.log("是否完成: " + _0x254470);
    console.log("奖励积分: " + _0x445957);
    if (_0x42660f?.["is_unlocked"] === "False") {
      console.log("任务未解锁");
    } else {
      if (!_0x254470) try {
        const _0x299d4f = await _0x340ef3(_0x54b531, _0xd6970f, _0x299a62, _0x49fb02);
        _0x299d4f && _0x531c14++;
      } catch (_0x4fb488) {
        console.error("账号 " + _0x16e316 + " 执行任务失败，错误: " + _0x4fb488);
        continue;
      } else _0x531c14++, console.log("任务已完成");
    }
    const _0x55a17a = Math.floor(Math.random() * (300 - 250 + 1)) + 250;
    console.log("[账号 " + _0x16e316 + "] 等待 " + _0x55a17a + " 秒");
    await new Promise(_0x674a33 => setTimeout(_0x674a33, _0x55a17a * 1000));
  }
  const _0x105de9 = await _0x994060(_0x299a62);
  if (_0x105de9) {
    const _0x28c093 = _0x105de9.dashboard.userStatus.counters,
      _0x49fa56 = _0x28c093.pcSearch ? _0x28c093.pcSearch[0].pointProgress : 0,
      _0x5a4411 = _0x28c093.pcSearch ? _0x28c093.pcSearch[0].pointProgressMax : 0,
      _0x3ae9f8 = _0x28c093.mobileSearch ? _0x28c093.mobileSearch[0].pointProgress : 0,
      _0x54b955 = _0x28c093.mobileSearch ? _0x28c093.mobileSearch[0].pointProgressMax : 0;
    _0x2fc381 += "账号 " + _0x16e316 + " PC 搜索任务进度: " + _0x49fa56 + "/" + _0x5a4411 + "\n";
    _0x2fc381 += "账号 " + _0x16e316 + " 移动搜索任务进度: " + _0x3ae9f8 + "/" + _0x54b955 + "\n";
  }
  _0x2fc381 += "账号 " + _0x16e316 + " 完成每日任务 " + _0x31468f + "/" + _0x54a186 + " 个\n";
  _0x2fc381 += "账号 " + _0x16e316 + " 完成临时任务 " + _0x531c14 + "/" + _0x142545 + " 个\n";
  const _0x5f3c6e = await _0x3e7c23(_0x299a62, _0x16e316);
  return _0x2fc381 += "账号 " + _0x16e316 + " 剩余积分 " + _0x5f3c6e + "\n", _0x2fc381;
}
async function _0x11f74d(_0x4b42d3, _0x1c4f17, _0x1a997c, _0x23e390, _0x6d192a) {
  const _0x3256fc = Math.random() * 10000 + 20000;
  await new Promise(_0x1e54dc => setTimeout(_0x1e54dc, _0x3256fc));
  const _0x559d00 = await _0x1a997c();
  console.log("[账号 " + _0x4b42d3 + "] 开始处理...");
  const _0x48d405 = new Set();
  let _0x5be67d = await _0x23e390(_0x1c4f17, _0x4b42d3);
  if (_0x5be67d === null) {
    console.error("[账号 " + _0x4b42d3 + "] 无法获取初始积分，跳过此账号");
    return;
  }
  console.log("[账号 " + _0x4b42d3 + "] 初始积分: " + _0x5be67d);
  let _0x42d3c0 = 0;
  const _0x259038 = 5;
  while (true) {
    const _0x26ef12 = _0x559d00.filter(_0x1a2948 => !_0x48d405.has(_0x1a2948));
    if (_0x26ef12.length === 0) {
      console.log("[账号 " + _0x4b42d3 + "] 所有关键词已用完");
      break;
    }
    searchType = "PC设备";
    userAgent = PC_USER_AGENT;
    const _0x2408e4 = _0x26ef12[Math.floor(Math.random() * _0x26ef12.length)];
    _0x48d405.add(_0x2408e4);
    console.log("[账号 " + _0x4b42d3 + "] 执行 " + searchType + " 搜索: " + _0x2408e4);
    await _0x6d192a(_0x2408e4, userAgent, _0x1c4f17, _0x4b42d3);
    const _0x41d6a8 = await _0x23e390(_0x1c4f17, _0x4b42d3);
    if (_0x41d6a8 === null) {
      console.error("[账号 " + _0x4b42d3 + "] 无法获取当前积分，跳过此账号");
      break;
    }
    if (_0x41d6a8 > _0x5be67d) console.log("[账号 " + _0x4b42d3 + "] " + searchType + " 积分增加，继续使用"), _0x5be67d = _0x41d6a8, _0x42d3c0 = 0;else {
      _0x42d3c0++;
      console.log("[账号 " + _0x4b42d3 + "] " + searchType + " 未增加积分，尝试次数: " + _0x42d3c0);
    }
    if (_0x42d3c0 >= _0x259038) {
      console.log("[账号 " + _0x4b42d3 + "] " + searchType + " 多次未增加积分，结束任务");
      const _0x23956c = Math.floor(Math.random() * (300 - 250 + 1)) + 200;
      console.log("[账号 " + _0x4b42d3 + "] 等待 " + _0x23956c + " 秒");
      await new Promise(_0x2a376c => setTimeout(_0x2a376c, _0x23956c * 1000));
      break;
    }
    const _0x16320e = Math.floor(Math.random() * (300 - 250 + 1)) + 200;
    console.log("[账号 " + _0x4b42d3 + "] 等待 " + _0x16320e + " 秒");
    await new Promise(_0x5d6695 => setTimeout(_0x5d6695, _0x16320e * 1000));
  }
  _0x42d3c0 = 0;
  while (true) {
    const _0x5a6b60 = _0x559d00.filter(_0x11aab4 => !_0x48d405.has(_0x11aab4));
    if (_0x5a6b60.length === 0) {
      console.log("[账号 " + _0x4b42d3 + "] 所有关键词已用完");
      break;
    }
    searchType = "手机设备";
    userAgent = MOBILE_USER_AGENT;
    const _0x242c8f = _0x5a6b60[Math.floor(Math.random() * _0x5a6b60.length)];
    _0x48d405.add(_0x242c8f);
    console.log("[账号 " + _0x4b42d3 + "] 执行 " + searchType + " 搜索: " + _0x242c8f);
    await _0x6d192a(_0x242c8f, userAgent, _0x1c4f17, _0x4b42d3);
    const _0x4a9f8b = await _0x23e390(_0x1c4f17, _0x4b42d3);
    if (_0x4a9f8b === null) {
      console.error("[账号 " + _0x4b42d3 + "] 无法获取当前积分，跳过此账号");
      break;
    }
    _0x4a9f8b > _0x5be67d ? (console.log("[账号 " + _0x4b42d3 + "] " + searchType + " 积分增加，继续使用"), _0x5be67d = _0x4a9f8b, _0x42d3c0 = 0) : (_0x42d3c0++, console.log("[账号 " + _0x4b42d3 + "] " + searchType + " 未增加积分，尝试次数: " + _0x42d3c0));
    if (_0x42d3c0 >= _0x259038) {
      console.log("[账号 " + _0x4b42d3 + "] " + searchType + " 多次未增加积分，结束任务");
      break;
    }
    const _0x50f86c = Math.floor(Math.random() * (300 - 250 + 1)) + 200;
    console.log("[账号 " + _0x4b42d3 + "] 等待 " + _0x50f86c + " 秒");
    await new Promise(_0x3e02a2 => setTimeout(_0x3e02a2, _0x50f86c * 1000));
  }
}
const _0x2c3131 = async (_0x2d0474, _0x4c4a0b) => {
    let _0x4a0a1f = "";
    const _0x37f1ec = "https://prod.rewardsplatform.microsoft.com/dapi/me/activities",
      _0x1d4af3 = new Date().toISOString().split("T")[0],
      _0x1f5ff9 = {
        "amount": 1,
        "attributes": {
          "offerid": "Gamification_Sapphire_DailyCheckIn",
          "date": _0x1d4af3,
          "signIn": false,
          "timezoneOffset": "08:00:00"
        },
        "id": "",
        "type": 101,
        "country": "cn",
        "risk_context": {},
        "channel": "SAAndroid"
      },
      _0x31a096 = {
        "Content-Type": "application/json",
        "User-Agent": MOBILE_USER_AGENT,
        "authorization": "Bearer " + _0x4c4a0b
      };
    try {
      const _0x4332e8 = await _0x482201.post(_0x37f1ec, _0x1f5ff9, {
          "headers": _0x31a096
        }),
        _0x1dca78 = _0x4332e8.data;
      if (_0x1dca78.response && _0x1dca78.response.balance !== undefined) {
        const _0x580caa = _0x1dca78.response.balance;
        return console.log("app账号 " + _0x2d0474 + " 签到成功 当前余额: " + _0x580caa), _0x4a0a1f += "app账号 " + _0x2d0474 + " 签到成功 当前余额: " + _0x580caa + "\n", _0x4a0a1f;
      } else console.log("无法获取余额");
    } catch (_0x492d6f) {
      console.error("签到失败: ", _0x492d6f);
    }
  },
  _0x2d1173 = require("crypto");
function _0x484f55() {
  const _0x4f71b3 = _0x2d1173.randomBytes(64);
  return _0x4f71b3.toString("hex");
}
async function _0x1e20e4(_0x3cd00c) {
  const _0x3f163c = "https://prod.rewardsplatform.microsoft.com/dapi/me",
    _0x19da1a = new URLSearchParams({
      "channel": "SAAndroid",
      "options": "613"
    }),
    _0x440fa7 = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + _0x3cd00c
    };
  try {
    const _0x56e65a = await _0x482201.get(_0x3f163c, {
        "params": _0x19da1a,
        "headers": _0x440fa7
      }),
      _0xa22603 = _0x56e65a.data,
      _0x5ae8d4 = _0xa22603.response.promotions;
    let _0x215c2e = {
      "max": 1,
      "progress": 0
    };
    if (_0x5ae8d4) for (const _0x368378 of _0x5ae8d4) {
      if (_0x368378.attributes.offerid === "ENUS_readarticle3_30points") {
        _0x215c2e = {
          "max": Number(_0x368378.attributes.max),
          "progress": Number(_0x368378.attributes.progress)
        };
        break;
      }
    }
    return _0x215c2e;
  } catch (_0x2b2675) {
    return console.error("请求失败:", _0x2b2675), {
      "max": 1,
      "progress": 0
    };
  }
}
async function _0x5e73ed(_0x1d92f7, _0x79d00c) {
  let _0x3a99f6 = "";
  const _0x1166d1 = "https://prod.rewardsplatform.microsoft.com/dapi/me/activities";
  let _0xce697b = 0,
    _0x626bd8 = 0;
  const _0xfea12d = {
    "Content-Type": "application/json",
    "User-Agent": MOBILE_USER_AGENT,
    "authorization": "Bearer " + _0x79d00c
  };
  for (let _0x1187d0 = 0; _0x1187d0 < 15; _0x1187d0++) {
    const _0x3850e0 = {
      "amount": 1,
      "country": "cn",
      "id": _0x484f55(),
      "type": 101,
      "attributes": {
        "offerid": "ENUS_readarticle3_30points"
      }
    };
    try {
      const _0x4638e7 = await _0x482201.post(_0x1166d1, _0x3850e0, {
          "headers": _0xfea12d
        }),
        _0x8e1259 = _0x4638e7.data;
      if (_0x8e1259 && _0x8e1259.response) {
        const _0x38586e = _0x8e1259.response.balance || 0;
        console.log("[app账号 " + _0x1d92f7 + "] 阅读任务第 " + (_0x1187d0 + 1) + " 次执行成功 当前余额: " + _0x38586e);
        if (_0x38586e === _0xce697b) {
          _0x626bd8++;
        } else _0x626bd8 = 0;
        if (_0x626bd8 >= 3) {
          console.log("[app账号 " + _0x1d92f7 + "] 积分连续三次没有变化");
          break;
        }
        _0xce697b = _0x38586e;
      } else console.error("[app账号 " + _0x1d92f7 + "] 阅读任务 " + (_0x1187d0 + 1) + " 执行失败，未返回预期的响应数据");
      const _0x51cf8e = Math.floor(Math.random() * (300 - 250 + 1)) + 250;
      console.log("[app账号 " + _0x1d92f7 + "] 阅读任务 等待 " + _0x51cf8e + " 秒");
      await new Promise(_0x4ab500 => setTimeout(_0x4ab500, _0x51cf8e * 1000));
    } catch (_0x375625) {
      console.error("任务 " + (_0x1187d0 + 1) + " 请求失败:", _0x375625);
      break;
    }
  }
  const _0xd30ab2 = await _0x1e20e4(_0x79d00c);
  return console.log("[app账号 " + _0x1d92f7 + "] 阅读任务完成 当前进度: " + _0xd30ab2.progress + "/" + _0xd30ab2.max), _0x3a99f6 += "app账号 " + _0x1d92f7 + " 阅读任务完成 当前进度: " + _0xd30ab2.progress + "/" + _0xd30ab2.max + "\n", _0x3a99f6;
}
const _0x16d81e = "1.4";
async function _0x232181() {
  const _0xcca1ac = "http://api.bingapi.email/version.txt",
    _0x87d637 = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0"
    };
  try {
    const _0x5abed3 = await _0x482201.get(_0xcca1ac, {
      "headers": _0x87d637
    });
    if (_0x5abed3.status === 200) {
      const _0x29f316 = _0x5abed3.data,
        _0x4bd3f9 = _0x29f316.version,
        _0x1a2fda = _0x29f316.msg;
      if (_0x4bd3f9 && _0x1a2fda) {
        return {
          "version": _0x4bd3f9,
          "msg": _0x1a2fda
        };
      } else return console.log("版本信息或消息未找到"), null;
    } else {
      return console.log("请求失败，状态码: " + _0x5abed3.status), null;
    }
  } catch (_0x403f25) {
    return console.error("请求发生错误:", _0x403f25.message), null;
  }
}
const _0x5eada0 = require("os");
function _0x34e2d7() {
  const _0x91ec5c = _0x5eada0.networkInterfaces();
  for (const _0x542c4f in _0x91ec5c) {
    for (const _0x384484 of _0x91ec5c[_0x542c4f]) {
      if (_0x384484.mac && _0x384484.mac !== "00:00:00:00:00:00") return _0x384484.mac;
    }
  }
  return null;
}
async function _0x12f776(_0x4cbab9) {
  const _0x5c3867 = "http://api.bingapi.email/api/query",
    _0x2bfcfd = {
      "originalText": _0x4cbab9
    },
    _0x11fc70 = {
      "Content-Type": "application/json"
    };
  try {
    const _0x40dc63 = await _0x482201.post(_0x5c3867, _0x2bfcfd, {
        "headers": _0x11fc70
      }),
      _0x4d12c5 = _0x40dc63.data;
    if (_0x4d12c5.code === 200 && _0x4d12c5.data && _0x4d12c5.data.length > 0) {
      const _0x28cb89 = _0x4d12c5.data[0];
      console.log("卡密验证成功，卡密剩余使用次数:", _0x28cb89.usage_count);
      if (_0x28cb89.usage_count <= 0) return console.log("卡密使用次数不足，任务停止。"), false;
      let _0x11a000 = _0x4d12c5.data[0].mac_address;
      const _0x1ff051 = _0x4d12c5.data[0].md5_hash,
        _0x13d539 = _0x34e2d7();
      if (!_0x13d539) return console.log("无法获取本地 MAC 地址，任务停止。"), false;
      console.log("当前MAC地址:", _0x13d539);
      if (_0x11a000) return _0x11a000 === _0x13d539 ? true : (console.log("当前设备不匹配，任务停止。"), false);else {
        const _0x329f70 = "http://api.bingapi.email/api/updateHash",
          _0x57cdcb = {
            "md5_hash": _0x1ff051,
            "mac_address": _0x13d539
          },
          _0x5a5d2d = await _0x482201.post(_0x329f70, _0x57cdcb, {
            "headers": {
              "Content-Type": "application/json"
            }
          }),
          _0x5c5d42 = _0x5a5d2d.data;
        return _0x5c5d42.code === 200 ? (console.log("第一次运行，开始绑定设备"), true) : (console.log("设备绑定失败:"), false);
      }
    } else return console.log("卡密无效或未找到相关数据."), false;
  } catch (_0x39caa6) {
    return console.error("卡密验证请求失败:"), false;
  }
}
async function _0x4f3b11(_0x4ce919) {
  const _0xd67683 = new Date(),
    _0x2fc2dd = _0xd67683.getFullYear(),
    _0x1f5c3b = String(_0xd67683.getMonth() + 1).padStart(2, "0"),
    _0x514da4 = String(_0xd67683.getDate()).padStart(2, "0"),
    _0x511b14 = String(_0xd67683.getHours()).padStart(2, "0"),
    _0x239487 = String(_0xd67683.getMinutes()).padStart(2, "0"),
    _0x53cac7 = _0x2fc2dd + "/" + _0x1f5c3b + "/" + _0x514da4 + " " + _0x511b14 + ":" + _0x239487,
    _0x5833de = "https://api.bingapi.email/api/endpoint",
    _0xfdf51a = {
      "md5_hash": _0x4ce919,
      "last_run_time": _0x53cac7
    },
    _0x447831 = {
      "Content-Type": "application/json"
    };
  try {
    const _0x80cbc4 = await _0x482201.post(_0x5833de, _0xfdf51a, {
        "headers": _0x447831
      }),
      _0x2aa7e5 = _0x80cbc4.data;
    if (_0x2aa7e5.message === "操作成功") console.log("开始执行，卡密剩余使用次数:", _0x2aa7e5.new_usage_count);else {
      console.log("更新失败:", _0x2aa7e5.message);
      throw new Error("更新数据失败，任务停止");
    }
  } catch (_0x4adaa6) {
    console.error("请求失败:", _0x4adaa6.message || _0x4adaa6);
    throw new Error("更新数据失败，任务停止");
  }
}
async function _0x6d0ae2() {
  await _0x34658e();
  console.log("当前代理地址:", global.GLOBAL_AGENT.HTTP_PROXY);
  const _0x2cf179 = await _0x3dd7ba();
  if (!_0x2cf179) {
    console.log("代理无效，终止操作");
    return;
  }
  let _0x3f4857 = "";
  const _0x3c0a5a = await _0x232181();
  console.log("当前版本" + _0x16d81e);
  console.log("最新公告: " + _0x3c0a5a.msg);
  if (!_0x3c0a5a) {
    console.log("未找到版本信息，任务停止。");
    return;
  }
  if (_0x3c0a5a.version !== _0x16d81e) {
    console.log("版本不匹配云端版本" + _0x3c0a5a.version);
    return;
  } else console.log("版本匹配,开始任务");
  const _0x27ea60 = process.env.bingkm;
  if (!_0x27ea60) {
    console.log("未找到卡密，任务停止。");
    return;
  }
  const _0x197e78 = await _0x12f776(_0x27ea60);
  if (!_0x197e78) {
    console.log("卡密无效，任务停止。");
    return;
  }
  try {
    await _0x4f3b11(_0x27ea60);
  } catch (_0x456903) {
    console.log(_0x456903.message);
    return;
  }
  let _0x281be5 = await _0x2adc62(),
    _0x50ee18 = _0x281be5.map(_0x1ef6fd => _0x1ef6fd.access_token).filter(_0x3b6367 => _0x3b6367);
  console.log("开始web搜索任务...");
  await Promise.all(_0x19134b.map((_0x3efe92, _0x5b806d) => _0x11f74d(_0x5b806d + 1, _0x3efe92, _0x5ee537, _0x3e7c23, _0x1c5f88)));
  console.log("开始web每日任务...");
  const _0x318e62 = await Promise.all(_0x19134b.map((_0x34eed3, _0x3789eb) => _0x33d0d7(_0x3789eb + 1, _0x34eed3, _0x51c092)));
  if (_0x50ee18.length === 0) console.log("没有有效的访问令牌，跳过签到和阅读任务..."), _0x3f4857 = _0x3c0a5a.msg + "\n" + "——————web任务——————\n" + _0x318e62.join("");else {
    console.log("开始app阅读任务...");
    const _0x342c4c = await Promise.all(_0x50ee18.map((_0x2328b8, _0x4a89d2) => _0x5e73ed(_0x4a89d2 + 1, _0x2328b8)));
    console.log("开始app签到任务...");
    const _0x160a31 = await Promise.all(_0x50ee18.map((_0x8f9ed0, _0x114c7d) => _0x2c3131(_0x114c7d + 1, _0x8f9ed0)));
    _0x3f4857 = _0x3c0a5a.msg + "\n" + "——————web任务——————\n" + _0x318e62.join("") + "——————app任务——————\n" + _0x160a31.join("") + _0x342c4c.join("");
  }
  console.log("————————————账号统计————————————");
  console.log(_0x3f4857);
  process.env.bingPush === "true" && QLAPI.notify("bing脚本推送", _0x3f4857);
}
_0x6d0ae2().catch(_0x411f4d => console.error("执行出错:", _0x411f4d));