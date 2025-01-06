//Mon Jan 06 2025 11:47:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const fs = require("fs"),
  yaml = require("js-yaml"),
  axios = require("axios");
async function getAccountsFromYaml() {
  try {
    const _0x19189a = "./bing.yaml",
      _0x7f1cdc = fs.readFileSync(_0x19189a, "utf8"),
      _0x1c0d96 = yaml.load(_0x7f1cdc),
      _0x49210e = _0x1c0d96?.["accounts"] || [];
    if (_0x49210e.length === 0) return console.log("未找到有效的app账号数据，跳过处理"), [];
    const _0x46ee05 = [];
    for (let _0xc6b8fd = 0; _0xc6b8fd < _0x49210e.length; _0xc6b8fd++) {
      const _0x21372f = _0x49210e[_0xc6b8fd],
        _0x2a04d7 = _0x21372f.code?.["match"](/(?:[?&])code=([A-Za-z0-9._%-]+)/);
      if (!_0x2a04d7) {
        console.error("第 " + (_0xc6b8fd + 1) + " 号app账号没有有效的 code 参数，跳过");
        continue;
      }
      const _0x158e56 = _0x2a04d7[1];
      if (!_0x21372f.refresh_token) {
        console.log("开始登录第 " + (_0xc6b8fd + 1) + " 号app账号");
        try {
          const _0x9c42ce = await getRefreshToken(_0x158e56);
          _0x21372f.refresh_token = _0x9c42ce;
          console.log("第 " + (_0xc6b8fd + 1) + " 号app账号获取到新的刷新令牌");
        } catch (_0x2cff52) {
          console.error("第 " + (_0xc6b8fd + 1) + " 号app账号获取刷新令牌失败: " + _0x2cff52);
          continue;
        }
      }
      if (_0x21372f.refresh_token) try {
        const {
          access_token: _0x1a61ae,
          refresh_token: _0x1838ee
        } = await getAccessToken(_0x21372f.refresh_token);
        _0x21372f.access_token = _0x1a61ae;
        _0x1838ee && (_0x21372f.refresh_token = _0x1838ee);
        console.log("第 " + (_0xc6b8fd + 1) + " 号app账号获取到登录令牌");
      } catch (_0x59d901) {
        console.error("第 " + (_0xc6b8fd + 1) + " 号app账号获取登录令牌失败: " + _0x59d901);
        continue;
      }
      _0x21372f.access_token && _0x46ee05.push(_0x21372f);
    }
    return console.log("有效app账号数：", _0x46ee05.length), _0x46ee05.length > 0 ? (await updateYamlFile(_0x19189a, _0x46ee05), console.log("YAML 文件已更新")) : console.log("没有有效app账号，跳过 YAML 文件更新"), _0x46ee05;
  } catch (_0x4914be) {
    console.error("读取或解析 bing.yaml 文件失败:", _0x4914be);
    throw _0x4914be;
  }
}
async function getRefreshToken(_0x292d85) {
  const _0x3cc521 = "https://login.live.com/oauth20_token.srf?client_id=0000000040170455&code=" + _0x292d85 + "&redirect_uri=https://login.live.com/oauth20_desktop.srf&grant_type=authorization_code";
  try {
    const _0x5bfc16 = await axios.get(_0x3cc521);
    return _0x5bfc16.data.refresh_token;
  } catch (_0x2af853) {
    console.error("获取 刷新令牌 失败: " + _0x2af853);
    throw _0x2af853;
  }
}
async function getAccessToken(_0x448430) {
  const _0x421d71 = "https://login.live.com/oauth20_token.srf?client_id=0000000040170455&refresh_token=" + _0x448430 + "&scope=service::prod.rewardsplatform.microsoft.com::MBI_SSL&grant_type=REFRESH_TOKEN";
  try {
    const _0x35cbce = await axios.get(_0x421d71);
    return {
      "access_token": _0x35cbce.data.access_token,
      "refresh_token": _0x35cbce.data.refresh_token || _0x448430
    };
  } catch (_0xa4a3ea) {
    console.error("获取 登录令牌 失败: " + _0xa4a3ea);
    throw _0xa4a3ea;
  }
}
async function updateYamlFile(_0x3bfd63, _0x169ae2) {
  try {
    const _0x52e035 = {
        "accounts": _0x169ae2
      },
      _0x4728a5 = yaml.dump(_0x52e035, {
        "lineWidth": 1000000
      });
    fs.writeFileSync(_0x3bfd63, _0x4728a5, "utf8");
  } catch (_0x5b9861) {
    console.error("更新 bing.yaml 文件失败:", _0x5b9861);
    throw _0x5b9861;
  }
}
const cks = process.env.BING_CK ? process.env.BING_CK.split("\n").map(_0x76c408 => _0x76c408.trim()).filter(_0x2fb52c => _0x2fb52c) : [];
if (cks.length === 0) throw new Error("未检测到任何账号，请在环境变量中设置 BING_CK");
console.log("web账号数：", cks.length);
const PC_USER_AGENT = process.env.PC_USER_AGENT,
  MOBILE_USER_AGENT = process.env.MOBILE_USER_AGENT;
if (!PC_USER_AGENT || !MOBILE_USER_AGENT) throw new Error("请在环境变量中设置 PC_USER_AGENT 和 MOBILE_USER_AGENT");
function generateRandomString(_0x21839a) {
  const _0xb0612d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let _0x5c8a78 = "";
  for (let _0x56b595 = 0; _0x56b595 < _0x21839a; _0x56b595++) {
    _0x5c8a78 += _0xb0612d.charAt(Math.floor(Math.random() * _0xb0612d.length));
  }
  return _0x5c8a78;
}
async function getKeywords() {
  const _0x5a15b0 = ["BaiduHot", "ToutiaoHot", "DouYinHot", "ZhihuHot", "BiliBliHot", "WeiBoHot", "SoGouHot", "BaiduTieBaHot", "SoHot"],
    _0x4be104 = ["盛年不重来，一日难再晨", "千里之行，始于足下", "少年易学老难成，一寸光阴不可轻", "敏而好学，不耻下问", "海内存知己，天涯若比邻", "三人行，必有我师焉", "莫愁前路无知己，天下谁人不识君", "人生贵相知，何用金与钱", "天生我材必有用"];
  let _0x43a9c8 = [];
  shuffleArray(_0x5a15b0);
  for (const _0x125d06 of _0x5a15b0) {
    try {
      const _0x5a8bed = await axios.get("https://api.gumengya.com/Api/" + _0x125d06);
      _0x5a8bed.data && _0x5a8bed.data.data && (_0x43a9c8 = _0x43a9c8.concat(_0x5a8bed.data.data.map(_0x38d2b5 => _0x38d2b5.title)));
    } catch (_0x3859f3) {
      console.warn("请求失败: " + _0x125d06 + ", 错误: " + _0x3859f3);
    }
  }
  const _0x49b605 = [...new Set(_0x43a9c8)];
  return _0x49b605.length ? _0x49b605 : _0x4be104;
}
function shuffleArray(_0x13086b) {
  for (let _0x4634c6 = _0x13086b.length - 1; _0x4634c6 > 0; _0x4634c6--) {
    const _0xb2f066 = Math.floor(Math.random() * (_0x4634c6 + 1));
    [_0x13086b[_0x4634c6], _0x13086b[_0xb2f066]] = [_0x13086b[_0xb2f066], _0x13086b[_0x4634c6]];
  }
}
async function performSearch(_0x2ee6ea, _0x341e37, _0xf016d3, _0x3b10c1) {
  const _0x35c029 = "https://cn.bing.com/search",
    _0x5379f9 = {
      "q": _0x2ee6ea,
      "qs": "n",
      "form": generateRandomString(4),
      "sp": "-1",
      "lq": "0",
      "pq": _0x2ee6ea,
      "sc": "9-16",
      "sk": "",
      "cvid": generateRandomString(32),
      "ghsh": "0",
      "ghacc": "0",
      "ghpl": ""
    },
    _0xc6dbf8 = {
      "User-Agent": _0x341e37,
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "priority": "u=0, i",
      "Cookie": _0xf016d3
    };
  try {} catch (_0x3ee321) {
    console.error("[账号 " + _0x3b10c1 + "] 搜索请求失败: " + _0x3ee321);
  }
}
async function getBalance(_0x5efc32, _0x11ede3) {
  const _0xa9b6b5 = "https://cn.bing.com/rewardsapp/reportActivity",
    _0x3d1185 = {
      "Cookie": _0x5efc32,
      "User-Agent": PC_USER_AGENT
    };
  try {
    const _0x48fae7 = await axios.get(_0xa9b6b5, {
        "headers": _0x3d1185
      }),
      _0x46d8d9 = _0x48fae7.data.match(/"RewardsBalance":(\d+)/);
    if (_0x46d8d9) return parseInt(_0x46d8d9[1], 10);else {
      return console.warn("[账号 " + _0x11ede3 + "] 未找到积分信息"), null;
    }
  } catch (_0x4cfe44) {
    return console.error("[账号 " + _0x11ede3 + "] 获取积分失败: " + _0x4cfe44), null;
  }
}
const cheerio = require("cheerio");
async function getToken(_0x2c2339) {
  const _0xd6cbd6 = "https://rewards.bing.com",
    _0x1df2af = {
      "ref": "rewardspanel"
    },
    _0x42189c = {
      "User-Agent": PC_USER_AGENT,
      "Cookie": _0x2c2339
    };
  try {
    const _0x50a1c8 = await axios.get(_0xd6cbd6, {
        "params": _0x1df2af,
        "headers": _0x42189c
      }),
      _0x43cf66 = cheerio.load(_0x50a1c8.data),
      _0x6631e0 = _0x43cf66("input[name=\"__RequestVerificationToken\"]");
    return _0x6631e0.length > 0 ? _0x6631e0.val() : (console.error("__RequestVerificationToken not found."), null);
  } catch (_0x543601) {
    return console.error("获取 Token 失败: " + _0x543601), null;
  }
}
async function performSearchRw(_0x3e5452, _0x180d8d, _0x120107, _0x36f807) {
  console.log("开始执行任务 " + _0x3e5452);
  const _0x4c11b3 = "https://rewards.bing.com/api/reportactivity",
    _0x364044 = {
      "X-Requested-With": "XMLHttpRequest"
    },
    _0x2f76fd = new URLSearchParams({
      "id": _0x3e5452,
      "hash": _0x180d8d,
      "__RequestVerificationToken": _0x36f807
    }).toString(),
    _0xf2b36 = {
      "User-Agent": PC_USER_AGENT,
      "Content-Type": "application/x-www-form-urlencoded",
      "Referer": "https://rewards.bing.com/",
      "Cookie": _0x120107
    };
  try {
    const _0x4a80b0 = await axios.post(_0x4c11b3, _0x2f76fd, {
      "params": _0x364044,
      "headers": _0xf2b36
    });
    if (_0x4a80b0.status !== 200) {
      console.error("请求失败，HTTP 状态码: " + _0x4a80b0.status);
      return;
    }
    const _0x17f934 = _0x4a80b0.data,
      _0x3a1a15 = _0x17f934.balance || null;
    if (_0x3a1a15 !== null) return console.log("当前积分：" + _0x3a1a15), true;else console.warn("未能从响应中获取积分信息");
  } catch (_0x2d6c98) {
    console.error("请求失败: " + _0x2d6c98);
  }
}
async function getRewardsInfo(_0x5b57ee) {
  const _0x2a1c95 = "https://rewards.bing.com/api/getuserinfo",
    _0x302344 = {
      "type": "1",
      "X-Requested-With": "XMLHttpRequest",
      "_": Date.now()
    },
    _0x4c4953 = {
      "User-Agent": PC_USER_AGENT,
      "Cookie": _0x5b57ee
    };
  try {
    const _0x549c21 = await axios.get(_0x2a1c95, {
      "params": _0x302344,
      "headers": _0x4c4953
    });
    return _0x549c21.data;
  } catch (_0x4222f5) {
    return console.error("获取搜索任务进度失败，错误: " + _0x4222f5), null;
  }
}
async function executeTask(_0x13b0df, _0x1e012f, _0x11c6e1) {
  console.log("开始处理账号 " + _0x13b0df);
  let _0x5a890b = "",
    _0xd3805b;
  try {
    _0xd3805b = await _0x11c6e1(_0x1e012f);
    if (!_0xd3805b) {
      console.warn("跳过当前账号 " + _0x13b0df + " 任务，因为账号失效。");
      _0x5a890b += "账号 " + _0x13b0df + " 失效\n";
      QLAPI.notify("账号失效", "当前账号 " + _0x13b0df + "失效。");
      return;
    }
  } catch (_0x385d93) {
    console.error("账号 " + _0x13b0df + " 获取 token 失败，错误: " + _0x385d93);
    return;
  }
  const _0x1d73af = "https://rewards.bing.com/api/getuserinfo",
    _0x24623c = {
      "type": "1",
      "X-Requested-With": "XMLHttpRequest",
      "_": Date.now()
    },
    _0x5b35a1 = {
      "User-Agent": PC_USER_AGENT,
      "Cookie": _0x1e012f
    };
  let _0x455fad;
  try {
    const _0x3a77db = await axios.get(_0x1d73af, {
      "params": _0x24623c,
      "headers": _0x5b35a1
    });
    _0x455fad = _0x3a77db.data;
  } catch (_0x5221ea) {
    console.error("账号 " + _0x13b0df + " 获取每日任务失败，错误: " + _0x5221ea);
    return;
  }
  const _0x5684ca = new Date().toLocaleDateString("en-US", {
    "month": "2-digit",
    "day": "2-digit",
    "year": "numeric"
  });
  let _0x453fd5 = 0,
    _0x57069e = 0;
  const _0x188e69 = _0x455fad.dashboard.dailySetPromotions[_0x5684ca] || [];
  for (const _0x2a1766 of _0x188e69) {
    _0x57069e++;
    const {
      offerId: _0xba332c,
      title: _0xa77c1b,
      hash: _0x185cab,
      complete: _0x417963,
      pointProgressMax: _0x23c3d3,
      attributes: _0x5ae2fe
    } = _0x2a1766;
    console.log("------------------------");
    console.log("每日任务");
    console.log("[账号 " + _0x13b0df + "]");
    console.log("Name: " + _0xba332c);
    console.log("题目: " + _0xa77c1b);
    console.log("Hash: " + _0x185cab);
    console.log("是否完成: " + _0x417963);
    console.log("奖励积分: " + _0x23c3d3);
    if (_0x5ae2fe?.["is_unlocked"] === "False") {
      console.log("任务未解锁");
    } else {
      if (!_0x417963) try {
        const _0x26d570 = await performSearchRw(_0xba332c, _0x185cab, _0x1e012f, _0xd3805b);
        _0x26d570 && _0x453fd5++;
      } catch (_0x1912be) {
        console.error("账号 " + _0x13b0df + " 执行任务失败，错误: " + _0x1912be);
        continue;
      } else _0x453fd5++, console.log("任务已完成");
    }
    const _0x5ad08a = Math.floor(Math.random() * (300 - 250 + 1)) + 250;
    console.log("[账号 " + _0x13b0df + "] 等待 " + _0x5ad08a + " 秒");
    await new Promise(_0x3cd3ab => setTimeout(_0x3cd3ab, _0x5ad08a * 1000));
  }
  let _0x199daa = 0,
    _0x3b5601 = 0;
  for (const _0x27ed56 of _0x455fad.dashboard.morePromotions) {
    if (_0x27ed56.pointProgressMax === 0) continue;
    _0x3b5601++;
    const {
      offerId: _0x178c1e,
      title: _0x412809,
      hash: _0x47d97e,
      complete: _0x1e8199,
      pointProgressMax: _0x30b753,
      attributes: _0x2fa8d3
    } = _0x27ed56;
    console.log("------------------------");
    console.log("更多任务");
    console.log("[账号 " + _0x13b0df + "]");
    console.log("Name: " + _0x178c1e);
    console.log("题目: " + _0x412809);
    console.log("Hash: " + _0x47d97e);
    console.log("是否完成: " + _0x1e8199);
    console.log("奖励积分: " + _0x30b753);
    if (_0x2fa8d3?.["is_unlocked"] === "False") {
      console.log("任务未解锁");
    } else {
      if (!_0x1e8199) {
        try {
          const _0xac289c = await performSearchRw(_0x178c1e, _0x47d97e, _0x1e012f, _0xd3805b);
          _0xac289c && _0x199daa++;
        } catch (_0x8d58c9) {
          console.error("账号 " + _0x13b0df + " 执行任务失败，错误: " + _0x8d58c9);
          continue;
        }
      } else _0x199daa++, console.log("任务已完成");
    }
    const _0x46f0f0 = Math.floor(Math.random() * (300 - 250 + 1)) + 250;
    console.log("[账号 " + _0x13b0df + "] 等待 " + _0x46f0f0 + " 秒");
    await new Promise(_0x5e4dc8 => setTimeout(_0x5e4dc8, _0x46f0f0 * 1000));
  }
  const _0x61302f = await getRewardsInfo(_0x1e012f);
  if (_0x61302f) {
    const _0x78cdf2 = _0x61302f.dashboard.userStatus.counters,
      _0x5138b7 = _0x78cdf2.pcSearch ? _0x78cdf2.pcSearch[0].pointProgress : 0,
      _0x4c4c10 = _0x78cdf2.pcSearch ? _0x78cdf2.pcSearch[0].pointProgressMax : 0,
      _0x4bea55 = _0x78cdf2.mobileSearch ? _0x78cdf2.mobileSearch[0].pointProgress : 0,
      _0x4d6276 = _0x78cdf2.mobileSearch ? _0x78cdf2.mobileSearch[0].pointProgressMax : 0;
    _0x5a890b += "账号 " + _0x13b0df + " PC 搜索任务进度: " + _0x5138b7 + "/" + _0x4c4c10 + "\n";
    _0x5a890b += "账号 " + _0x13b0df + " 移动搜索任务进度: " + _0x4bea55 + "/" + _0x4d6276 + "\n";
  }
  _0x5a890b += "账号 " + _0x13b0df + " 完成每日任务 " + _0x453fd5 + "/" + _0x57069e + " 个\n";
  _0x5a890b += "账号 " + _0x13b0df + " 完成临时任务 " + _0x199daa + "/" + _0x3b5601 + " 个\n";
  const _0x29ed4e = await getBalance(_0x1e012f, _0x13b0df);
  return _0x5a890b += "账号 " + _0x13b0df + " 剩余积分 " + _0x29ed4e + "\n", _0x5a890b;
}
async function processAccount(_0x386692, _0x4faa27, _0x1050f6, _0x4eed52, _0x4e9f08) {
  const _0x4f4192 = await _0x1050f6();
  console.log("[账号 " + _0x386692 + "] 开始处理...");
  const _0x401be6 = new Set();
  let _0x5eccda = await _0x4eed52(_0x4faa27, _0x386692);
  if (_0x5eccda === null) {
    console.error("[账号 " + _0x386692 + "] 无法获取初始积分，跳过此账号");
    return;
  }
  console.log("[账号 " + _0x386692 + "] 初始积分: " + _0x5eccda);
  let _0x392ee7 = 0;
  const _0x1a008f = 5;
  while (true) {
    const _0x77228f = _0x4f4192.filter(_0x6b385c => !_0x401be6.has(_0x6b385c));
    if (_0x77228f.length === 0) {
      console.log("[账号 " + _0x386692 + "] 所有关键词已用完");
      break;
    }
    searchType = "PC设备";
    userAgent = PC_USER_AGENT;
    const _0x45fca5 = _0x77228f[Math.floor(Math.random() * _0x77228f.length)];
    _0x401be6.add(_0x45fca5);
    console.log("[账号 " + _0x386692 + "] 执行 " + searchType + " 搜索: " + _0x45fca5);
    await _0x4e9f08(_0x45fca5, userAgent, _0x4faa27, _0x386692);
    const _0x43e033 = await _0x4eed52(_0x4faa27, _0x386692);
    if (_0x43e033 === null) {
      console.error("[账号 " + _0x386692 + "] 无法获取当前积分，跳过此账号");
      break;
    }
    if (_0x43e033 > _0x5eccda) console.log("[账号 " + _0x386692 + "] " + searchType + " 积分增加，继续使用"), _0x5eccda = _0x43e033, _0x392ee7 = 0;else {
      _0x392ee7++;
      console.log("[账号 " + _0x386692 + "] " + searchType + " 未增加积分，尝试次数: " + _0x392ee7);
    }
    if (_0x392ee7 >= _0x1a008f) {
      console.log("[账号 " + _0x386692 + "] " + searchType + " 多次未增加积分，结束任务");
      const _0x47fe49 = Math.floor(Math.random() * (300 - 250 + 1)) + 200;
      console.log("[账号 " + _0x386692 + "] 等待 " + _0x47fe49 + " 秒");
      await new Promise(_0x2992f2 => setTimeout(_0x2992f2, _0x47fe49 * 1000));
      break;
    }
    const _0x15537f = Math.floor(Math.random() * (300 - 250 + 1)) + 200;
    console.log("[账号 " + _0x386692 + "] 等待 " + _0x15537f + " 秒");
    await new Promise(_0x2b57b1 => setTimeout(_0x2b57b1, _0x15537f * 1000));
  }
  _0x392ee7 = 0;
  while (true) {
    const _0x1a4c85 = _0x4f4192.filter(_0x881946 => !_0x401be6.has(_0x881946));
    if (_0x1a4c85.length === 0) {
      console.log("[账号 " + _0x386692 + "] 所有关键词已用完");
      break;
    }
    searchType = "手机设备";
    userAgent = MOBILE_USER_AGENT;
    const _0x447fb5 = _0x1a4c85[Math.floor(Math.random() * _0x1a4c85.length)];
    _0x401be6.add(_0x447fb5);
    console.log("[账号 " + _0x386692 + "] 执行 " + searchType + " 搜索: " + _0x447fb5);
    await _0x4e9f08(_0x447fb5, userAgent, _0x4faa27, _0x386692);
    const _0x2d1400 = await _0x4eed52(_0x4faa27, _0x386692);
    if (_0x2d1400 === null) {
      console.error("[账号 " + _0x386692 + "] 无法获取当前积分，跳过此账号");
      break;
    }
    _0x2d1400 > _0x5eccda ? (console.log("[账号 " + _0x386692 + "] " + searchType + " 积分增加，继续使用"), _0x5eccda = _0x2d1400, _0x392ee7 = 0) : (_0x392ee7++, console.log("[账号 " + _0x386692 + "] " + searchType + " 未增加积分，尝试次数: " + _0x392ee7));
    if (_0x392ee7 >= _0x1a008f) {
      console.log("[账号 " + _0x386692 + "] " + searchType + " 多次未增加积分，结束任务");
      break;
    }
    const _0x387632 = Math.floor(Math.random() * (300 - 250 + 1)) + 200;
    console.log("[账号 " + _0x386692 + "] 等待 " + _0x387632 + " 秒");
    await new Promise(_0x5d17ed => setTimeout(_0x5d17ed, _0x387632 * 1000));
  }
}
const signIn = async (_0x29fb20, _0x2c9bc7) => {
    let _0x5d185c = "";
    const _0x584baa = "https://prod.rewardsplatform.microsoft.com/dapi/me/activities",
      _0x48e16a = new Date().toISOString().split("T")[0],
      _0x298fdd = JSON.stringify({
        "amount": 1,
        "attributes": {
          "offerid": "Gamification_Sapphire_DailyCheckIn",
          "date": _0x48e16a,
          "signIn": false,
          "timezoneOffset": "08:00:00"
        },
        "id": "",
        "type": 101,
        "country": "cn",
        "risk_context": {},
        "channel": "SAAndroid"
      }),
      _0x317d9b = {
        "Content-Type": "application/json",
        "User-Agent": MOBILE_USER_AGENT,
        "authorization": "Bearer " + _0x2c9bc7
      };
    try {
      const _0x2b08fe = await fetch(_0x584baa, {
          "method": "POST",
          "headers": _0x317d9b,
          "body": _0x298fdd
        }),
        _0x5712c3 = await _0x2b08fe.json();
      if (_0x5712c3.response && _0x5712c3.response.balance !== undefined) {
        const _0x253719 = _0x5712c3.response.balance;
        return console.log("app账号 " + _0x29fb20 + " 签到成功 当前余额: " + _0x253719), _0x5d185c += "app账号 " + _0x29fb20 + " 签到成功 当前余额: " + _0x253719 + "\n", _0x5d185c;
      } else {
        console.log("无法获取余额");
      }
    } catch (_0x4af896) {
      console.error("签到失败: ", _0x4af896);
    }
  },
  crypto = require("crypto");
function generateToken() {
  const _0x45c720 = crypto.randomBytes(64);
  return _0x45c720.toString("hex");
}
async function getReadingProgress(_0x3f2978) {
  const _0x3185bd = "https://prod.rewardsplatform.microsoft.com/dapi/me",
    _0x51144f = new URLSearchParams({
      "channel": "SAAndroid",
      "options": "613"
    }),
    _0x3dbf1a = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + _0x3f2978
    };
  try {
    const _0x10572e = await fetch(_0x3185bd + "?" + _0x51144f.toString(), {
      "method": "GET",
      "headers": _0x3dbf1a
    });
    if (!_0x10572e.ok) throw new Error("请求失败，状态码: " + _0x10572e.status);
    const _0x329cb2 = await _0x10572e.json(),
      _0x36bc16 = _0x329cb2.response.promotions;
    let _0x3bafd7 = {
      "max": 1,
      "progress": 0
    };
    if (_0x36bc16) for (const _0x8f189f of _0x36bc16) {
      if (_0x8f189f.attributes.offerid === "ENUS_readarticle3_30points") {
        _0x3bafd7 = {
          "max": Number(_0x8f189f.attributes.max),
          "progress": Number(_0x8f189f.attributes.progress)
        };
        break;
      }
    }
    return _0x3bafd7;
  } catch (_0x3f699e) {
    return console.error("请求失败:", _0x3f699e), {
      "max": 1,
      "progress": 0
    };
  }
}
async function executeReadingTask(_0x2d0b50, _0x373dab) {
  let _0x27deee = "";
  const _0x99c52 = "https://prod.rewardsplatform.microsoft.com/dapi/me/activities";
  let _0x5928cd = 0,
    _0x4ada56 = 0;
  const _0xce15f = {
    "Content-Type": "application/json",
    "User-Agent": MOBILE_USER_AGENT,
    "authorization": "Bearer " + _0x373dab
  };
  for (let _0xfdffa = 0; _0xfdffa < 15; _0xfdffa++) {
    const _0x46da21 = JSON.stringify({
      "amount": 1,
      "country": "cn",
      "id": generateToken(),
      "type": 101,
      "attributes": {
        "offerid": "ENUS_readarticle3_30points"
      }
    });
    try {
      const _0x4e6b85 = await fetch(_0x99c52, {
          "method": "POST",
          "headers": _0xce15f,
          "body": _0x46da21
        }),
        _0x2cd62f = await _0x4e6b85.json();
      if (_0x4e6b85.ok) {
        const _0x20d1cb = _0x2cd62f.response.balance || 0;
        console.log("[app账号 " + _0x2d0b50 + "]阅读任务第 " + (_0xfdffa + 1) + " 次执行成功 当前余额: " + _0x20d1cb);
        _0x20d1cb === _0x5928cd ? _0x4ada56++ : _0x4ada56 = 0;
        if (_0x4ada56 >= 3) {
          console.log("[app账号 " + _0x2d0b50 + "]积分连续三次没有变化");
          break;
        }
        _0x5928cd = _0x20d1cb;
      } else console.error("[app账号 " + _0x2d0b50 + "]阅读任务 " + (_0xfdffa + 1) + " 执行失败，状态码: " + _0x4e6b85.status);
      const _0xe8598e = Math.floor(Math.random() * (300 - 250 + 1)) + 250;
      console.log("[app账号 " + _0x2d0b50 + "]阅读任务 等待 " + _0xe8598e + " 秒");
      await new Promise(_0x52b2bf => setTimeout(_0x52b2bf, _0xe8598e * 1000));
    } catch (_0x4c510f) {
      console.error("任务 " + (_0xfdffa + 1) + " 请求失败:", _0x4c510f);
      break;
    }
  }
  const _0x51eb38 = await getReadingProgress(_0x373dab);
  return console.log("[app账号 " + _0x2d0b50 + "] 阅读任务完成 当前进度: " + _0x51eb38.progress + "/" + _0x51eb38.max), _0x27deee += "app账号 " + _0x2d0b50 + " 阅读任务完成 当前进度: " + _0x51eb38.progress + "/" + _0x51eb38.max + "\n", _0x27deee;
}
const localVersion = "1.4";
async function version() {
  const _0x3b698c = "http://bingapi.xymy.xyz/version.txt",
    _0x332837 = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0"
    };
  try {
    const _0x576e4a = await axios.get(_0x3b698c, {
      "headers": _0x332837
    });
    if (_0x576e4a.status === 200) {
      const _0x11ee84 = _0x576e4a.data,
        _0x257afb = _0x11ee84.version,
        _0x48a5a4 = _0x11ee84.msg;
      return _0x257afb && _0x48a5a4 ? {
        "version": _0x257afb,
        "msg": _0x48a5a4
      } : (console.log("版本信息或消息未找到"), null);
    } else return console.log("请求失败，状态码: " + _0x576e4a.status), null;
  } catch (_0x18294c) {
    return console.error("请求发生错误:", _0x18294c.message), null;
  }
}
const os = require("os");
function getMacAddress() {
  const _0x29b691 = os.networkInterfaces();
  for (const _0x438233 in _0x29b691) {
    for (const _0x553f02 of _0x29b691[_0x438233]) {
      if (_0x553f02.mac && _0x553f02.mac !== "00:00:00:00:00:00") return _0x553f02.mac;
    }
  }
  return null;
}
async function checkCardKey(_0x20938c) {
  const _0x3f15a8 = "http://bingapi.xymy.xyz/api/query",
    _0x1c4af8 = JSON.stringify({
      "originalText": _0x20938c
    }),
    _0x1dd7ce = {
      "Content-Type": "application/json"
    };
  try {
    const _0x91c054 = await fetch(_0x3f15a8, {
        "method": "POST",
        "headers": _0x1dd7ce,
        "body": _0x1c4af8
      }),
      _0x1bf37d = await _0x91c054.json();
    if (_0x1bf37d.code === 200 && _0x1bf37d.data && _0x1bf37d.data.length > 0) {
      const _0x441880 = _0x1bf37d.data[0];
      console.log("卡密验证成功，卡密剩余使用次数:", _0x441880.usage_count);
      if (_0x441880.usage_count <= 0) return console.log("卡密使用次数不足，任务停止。"), false;
      let _0x182873 = _0x1bf37d.data[0].mac_address;
      const _0x4832bd = _0x1bf37d.data[0].md5_hash,
        _0x9291b4 = getMacAddress();
      if (!_0x9291b4) return console.log("无法获取本地 MAC 地址，任务停止。"), false;
      console.log("当前MAC地址:", _0x9291b4);
      if (_0x182873) {
        return _0x182873 === _0x9291b4 ? true : (console.log("当前设备不匹配，任务停止。"), false);
      } else {
        const _0x44452b = "http://bingapi.xymy.xyz/api/updateHash",
          _0x1f076e = JSON.stringify({
            "md5_hash": _0x4832bd,
            "mac_address": _0x9291b4
          }),
          _0x56ea2b = await fetch(_0x44452b, {
            "method": "POST",
            "headers": {
              "Content-Type": "application/json"
            },
            "body": _0x1f076e
          }),
          _0xb8adb3 = await _0x56ea2b.json();
        if (_0xb8adb3.code === 200) return console.log("第一次运行，开始绑定设备"), true;else {
          return console.log("设备绑定失败:"), false;
        }
      }
    } else return console.log("卡密无效或未找到相关数据."), false;
  } catch (_0x3531c2) {
    return console.error("卡密验证请求失败:"), false;
  }
}
async function updateCardKey(_0x5211e0) {
  const _0x1ff777 = new Date(),
    _0x3e871c = _0x1ff777.getFullYear(),
    _0xc1b60f = String(_0x1ff777.getMonth() + 1).padStart(2, "0"),
    _0x346aa9 = String(_0x1ff777.getDate()).padStart(2, "0"),
    _0x5e9350 = String(_0x1ff777.getHours()).padStart(2, "0"),
    _0x158eb0 = String(_0x1ff777.getMinutes()).padStart(2, "0"),
    _0x389306 = _0x3e871c + "/" + _0xc1b60f + "/" + _0x346aa9 + " " + _0x5e9350 + ":" + _0x158eb0,
    _0x26ca54 = "https://bingapi.xymy.xyz/api/endpoint",
    _0x3db24d = JSON.stringify({
      "md5_hash": _0x5211e0,
      "last_run_time": _0x389306
    }),
    _0x212534 = {
      "Content-Type": "application/json"
    };
  try {
    const _0x55f5bb = await fetch(_0x26ca54, {
        "method": "POST",
        "headers": _0x212534,
        "body": _0x3db24d
      }),
      _0x34bf27 = await _0x55f5bb.json();
    if (_0x34bf27.message === "操作成功") {
      console.log("开始执行，卡密剩余使用次数:", _0x34bf27.new_usage_count);
    } else {
      console.log("更新失败:", _0x34bf27.message);
      throw new Error("更新数据失败，任务停止");
    }
  } catch (_0x4ca7d4) {
    console.error("请求失败:", _0x4ca7d4.message || _0x4ca7d4);
    throw new Error("更新数据失败，任务停止");
  }
}
async function main() {
  let _0x27342f = "";
  const _0x26f3cf = await version();
  console.log("当前版本" + localVersion);
  console.log("最新公告: " + _0x26f3cf.msg);
  if (!_0x26f3cf) {
    console.log("未找到版本信息，任务停止。");
    return;
  }
  if (_0x26f3cf.version !== localVersion) {
    console.log("版本不匹配云端版本" + _0x26f3cf.version);
    return;
  } else console.log("版本匹配,开始任务");
  const _0x30b894 = process.env.bingkm;
  if (!_0x30b894) {
    console.log("未找到卡密，任务停止。");
    return;
  }
  const _0x2d2314 = await checkCardKey(_0x30b894);
  if (!_0x2d2314) {
    console.log("卡密无效，任务停止。");
    return;
  }
  try {
    await updateCardKey(_0x30b894);
  } catch (_0x526c65) {
    console.log(_0x526c65.message);
    return;
  }
  let _0x24b0e4 = await getAccountsFromYaml(),
    _0x3a3185 = _0x24b0e4.map(_0x3a4828 => _0x3a4828.access_token).filter(_0x28584b => _0x28584b);
  console.log("开始web搜索任务...");
  await Promise.all(cks.map((_0x597e4c, _0x562fff) => processAccount(_0x562fff + 1, _0x597e4c, getKeywords, getBalance, performSearch)));
  console.log("开始web每日任务...");
  const _0x4cc3ee = await Promise.all(cks.map((_0x597e2f, _0x2a9378) => executeTask(_0x2a9378 + 1, _0x597e2f, getToken)));
  if (_0x3a3185.length === 0) console.log("没有有效的访问令牌，跳过签到和阅读任务..."), _0x27342f = "——————web任务——————\n" + _0x4cc3ee.join("");else {
    console.log("开始app阅读任务...");
    const _0x3b7ecb = await Promise.all(_0x3a3185.map((_0xa52d7b, _0x3fca4b) => executeReadingTask(_0x3fca4b + 1, _0xa52d7b)));
    console.log("开始app签到任务...");
    const _0x3364de = await Promise.all(_0x3a3185.map((_0x1fd2ec, _0x2f89ab) => signIn(_0x2f89ab + 1, _0x1fd2ec)));
    _0x27342f = "——————web任务——————\n" + _0x4cc3ee.join("") + "——————app任务——————\n" + _0x3364de.join("") + _0x3b7ecb.join("");
  }
  console.log("————————————账号统计————————————");
  console.log(_0x27342f);
  if (process.env.bingPush === "true") {
    QLAPI.notify("bing脚本推送", _0x27342f);
  }
}
main().catch(_0x2fcb4d => console.error("执行出错:", _0x2fcb4d));