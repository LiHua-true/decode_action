//Tue Feb 11 2025 11:16:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x18f76b = require("fs"),
  _0x29142b = require("js-yaml"),
  _0x1bffb2 = require("axios");
async function _0x9d95a() {
  try {
    const _0x54476c = "./bing.yaml",
      _0x4b19a7 = _0x18f76b.readFileSync(_0x54476c, "utf8"),
      _0x21564e = _0x29142b.load(_0x4b19a7),
      _0x3eb46b = _0x21564e?.["accounts"] || [];
    if (_0x3eb46b.length === 0) return console.log("未找到有效的app账号数据，跳过处理"), [];
    const _0x3dad3b = [];
    for (let _0x19b30c = 0; _0x19b30c < _0x3eb46b.length; _0x19b30c++) {
      const _0x2dbeea = _0x3eb46b[_0x19b30c],
        _0x3c552e = _0x2dbeea.code?.["match"](/(?:[?&])code=([A-Za-z0-9._%-]+)/);
      if (!_0x3c552e) {
        console.error("第 " + (_0x19b30c + 1) + " 号app账号没有有效的 code 参数，跳过");
        continue;
      }
      const _0x1e8104 = _0x3c552e[1];
      if (!_0x2dbeea.refresh_token) {
        console.log("开始登录第 " + (_0x19b30c + 1) + " 号app账号");
        try {
          const _0x47c407 = await _0x272fbd(_0x1e8104);
          _0x2dbeea.refresh_token = _0x47c407;
          console.log("第 " + (_0x19b30c + 1) + " 号app账号获取到新的刷新令牌");
        } catch (_0x596068) {
          console.error("第 " + (_0x19b30c + 1) + " 号app账号获取刷新令牌失败: " + _0x596068);
          continue;
        }
      }
      if (_0x2dbeea.refresh_token) {
        try {
          const {
            access_token: _0x46d0a9,
            refresh_token: _0x58cf98
          } = await _0x56e71a(_0x2dbeea.refresh_token);
          _0x2dbeea.access_token = _0x46d0a9;
          _0x58cf98 && (_0x2dbeea.refresh_token = _0x58cf98);
          console.log("第 " + (_0x19b30c + 1) + " 号app账号获取到登录令牌");
        } catch (_0x53bc54) {
          console.error("第 " + (_0x19b30c + 1) + " 号app账号获取登录令牌失败: " + _0x53bc54);
          continue;
        }
      }
      _0x2dbeea.access_token && _0x3dad3b.push(_0x2dbeea);
    }
    console.log("有效app账号数：", _0x3dad3b.length);
    if (_0x3dad3b.length > 0) await _0x32ed67(_0x54476c, _0x3dad3b), console.log("YAML 文件已更新");else {
      console.log("没有有效app账号，跳过 YAML 文件更新");
    }
    return _0x3dad3b;
  } catch (_0x2b2681) {
    console.error("读取或解析 bing.yaml 文件失败:", _0x2b2681);
    throw _0x2b2681;
  }
}
async function _0x272fbd(_0x538039) {
  const _0x4734e6 = "https://login.live.com/oauth20_token.srf?client_id=0000000040170455&code=" + _0x538039 + "&redirect_uri=https://login.live.com/oauth20_desktop.srf&grant_type=authorization_code";
  try {
    const _0x41902b = await _0x1bffb2.get(_0x4734e6);
    return _0x41902b.data.refresh_token;
  } catch (_0x20b631) {
    console.error("获取 刷新令牌 失败: " + _0x20b631);
    throw _0x20b631;
  }
}
async function _0x56e71a(_0x5ca440) {
  const _0x2197d9 = "https://login.live.com/oauth20_token.srf?client_id=0000000040170455&refresh_token=" + _0x5ca440 + "&scope=service::prod.rewardsplatform.microsoft.com::MBI_SSL&grant_type=REFRESH_TOKEN";
  try {
    const _0x5bfaec = await _0x1bffb2.get(_0x2197d9);
    return {
      "access_token": _0x5bfaec.data.access_token,
      "refresh_token": _0x5bfaec.data.refresh_token || _0x5ca440
    };
  } catch (_0x345e21) {
    console.error("获取 登录令牌 失败: " + _0x345e21);
    throw _0x345e21;
  }
}
async function _0x32ed67(_0x519d71, _0x30c449) {
  try {
    const _0x2e02bb = {
        "accounts": _0x30c449
      },
      _0x4e5900 = _0x29142b.dump(_0x2e02bb, {
        "lineWidth": 1000000
      });
    _0x18f76b.writeFileSync(_0x519d71, _0x4e5900, "utf8");
  } catch (_0x1899ef) {
    console.error("更新 bing.yaml 文件失败:", _0x1899ef);
    throw _0x1899ef;
  }
}
const _0x4f1cfa = process.env.BING_CK ? process.env.BING_CK.split("\n").map(_0x166b14 => _0x166b14.trim()).filter(_0x1f1412 => _0x1f1412) : [];
if (_0x4f1cfa.length === 0) throw new Error("未检测到任何账号，请在环境变量中设置 BING_CK");
console.log("web账号数：", _0x4f1cfa.length);
const _0x56c103 = process.env.PC_USER_AGENT,
  _0xef84f9 = process.env.MOBILE_USER_AGENT;
if (!_0x56c103 || !_0xef84f9) throw new Error("请在环境变量中设置 PC_USER_AGENT 和 MOBILE_USER_AGENT");
function _0x1534a6(_0x3a0447) {
  const _0x4566ba = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let _0x277fb4 = "";
  for (let _0x49e071 = 0; _0x49e071 < _0x3a0447; _0x49e071++) {
    _0x277fb4 += _0x4566ba.charAt(Math.floor(Math.random() * _0x4566ba.length));
  }
  return _0x277fb4;
}
async function _0x2319e5() {
  const _0x43d774 = ["BaiduHot", "ToutiaoHot", "DouYinHot", "ZhihuHot", "BiliBliHot", "WeiBoHot", "SoGouHot", "BaiduTieBaHot", "SoHot"],
    _0x529bee = process.env.apikey;
  let _0x3b77f9 = [];
  _0x605981(_0x43d774);
  while (_0x3b77f9.length === 0) {
    for (const _0x10c2a3 of _0x43d774) {
      try {
        let _0x36c4a9 = "https://api.gumengya.com/Api/" + _0x10c2a3;
        _0x529bee && (_0x36c4a9 += "&appkey=" + _0x529bee);
        const _0x5309ca = await _0x1bffb2.get(_0x36c4a9);
        _0x5309ca.data && _0x5309ca.data.data && (_0x3b77f9 = _0x3b77f9.concat(_0x5309ca.data.data.map(_0x8674b3 => _0x8674b3.title)));
      } catch (_0x410906) {
        console.warn("请求失败: " + _0x10c2a3 + ", 错误: " + _0x410906);
      }
    }
    _0x3b77f9.length === 0 && (console.warn("未能获取到关键词，重试中..."), await new Promise(_0x3fad33 => setTimeout(_0x3fad33, 3000)));
  }
  const _0x3c4db9 = [...new Set(_0x3b77f9)];
  return _0x3c4db9;
}
function _0x605981(_0x3b0a2e) {
  for (let _0x4b76f6 = _0x3b0a2e.length - 1; _0x4b76f6 > 0; _0x4b76f6--) {
    const _0xe7e7bd = Math.floor(Math.random() * (_0x4b76f6 + 1));
    [_0x3b0a2e[_0x4b76f6], _0x3b0a2e[_0xe7e7bd]] = [_0x3b0a2e[_0xe7e7bd], _0x3b0a2e[_0x4b76f6]];
  }
}
async function _0xdbce7a(_0x20d543, _0x2dee02, _0x522afa, _0x35d8c3) {
  const _0x1209b6 = "https://cn.bing.com/search",
    _0x3100ec = {
      "q": _0x20d543,
      "qs": "n",
      "form": _0x1534a6(4),
      "sp": "-1",
      "lq": "0",
      "pq": _0x20d543,
      "sc": "9-16",
      "sk": "",
      "cvid": _0x1534a6(32),
      "ghsh": "0",
      "ghacc": "0",
      "ghpl": ""
    },
    _0x166d06 = {
      "User-Agent": _0x2dee02,
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "priority": "u=0, i",
      "Cookie": _0x522afa
    };
  try {} catch (_0x44a50a) {
    console.error("[账号 " + _0x35d8c3 + "] 搜索请求失败: " + _0x44a50a);
  }
}
async function _0x1f8978(_0x4dbadf, _0x1b191b) {
  const _0x53533e = "https://cn.bing.com/rewardsapp/reportActivity",
    _0x37e718 = {
      "Cookie": _0x4dbadf,
      "User-Agent": _0x56c103
    };
  try {
    const _0x5773c5 = await _0x1bffb2.get(_0x53533e, {
        "headers": _0x37e718
      }),
      _0x5ef413 = _0x5773c5.data.match(/"RewardsBalance":(\d+)/);
    return _0x5ef413 ? parseInt(_0x5ef413[1], 10) : (console.warn("[账号 " + _0x1b191b + "] 未找到积分信息"), null);
  } catch (_0x14f4c3) {
    return console.error("[账号 " + _0x1b191b + "] 获取积分失败: " + _0x14f4c3), null;
  }
}
const _0x5035a7 = require("cheerio");
async function _0x839be8(_0x1b2182) {
  const _0x59baab = "https://rewards.bing.com",
    _0x20231e = {
      "ref": "rewardspanel"
    },
    _0x173fdb = {
      "User-Agent": _0x56c103,
      "Cookie": _0x1b2182
    };
  try {
    const _0x397859 = await _0x1bffb2.get(_0x59baab, {
        "params": _0x20231e,
        "headers": _0x173fdb
      }),
      _0x103bdc = _0x5035a7.load(_0x397859.data),
      _0x5954ba = _0x103bdc("input[name=\"__RequestVerificationToken\"]");
    if (_0x5954ba.length > 0) {
      return _0x5954ba.val();
    } else return console.error("__RequestVerificationToken not found."), null;
  } catch (_0x2db5e3) {
    return console.error("获取 Token 失败: " + _0x2db5e3), null;
  }
}
async function _0x4f7d82(_0x25e43d, _0x176516, _0xc75875, _0x46860d) {
  console.log("开始执行任务 " + _0x25e43d);
  const _0x5b3d67 = "https://rewards.bing.com/api/reportactivity",
    _0x4ecccc = {
      "X-Requested-With": "XMLHttpRequest"
    },
    _0x21e1c4 = new URLSearchParams({
      "id": _0x25e43d,
      "hash": _0x176516,
      "__RequestVerificationToken": _0x46860d
    }).toString(),
    _0x67cff = {
      "User-Agent": _0x56c103,
      "Content-Type": "application/x-www-form-urlencoded",
      "Referer": "https://rewards.bing.com/",
      "Cookie": _0xc75875
    };
  try {
    const _0x560699 = await _0x1bffb2.post(_0x5b3d67, _0x21e1c4, {
      "params": _0x4ecccc,
      "headers": _0x67cff
    });
    if (_0x560699.status !== 200) {
      console.error("请求失败，HTTP 状态码: " + _0x560699.status);
      return;
    }
    const _0x3dfb76 = _0x560699.data,
      _0x5408d3 = _0x3dfb76.balance || null;
    if (_0x5408d3 !== null) return console.log("当前积分：" + _0x5408d3), true;else {
      console.warn("未能从响应中获取积分信息");
    }
  } catch (_0x3352c8) {
    console.error("请求失败: " + _0x3352c8);
  }
}
async function _0x948deb(_0x36cec8) {
  const _0x29ed40 = "https://rewards.bing.com/api/getuserinfo",
    _0x3acfba = {
      "type": "1",
      "X-Requested-With": "XMLHttpRequest",
      "_": Date.now()
    },
    _0x3b4767 = {
      "User-Agent": _0x56c103,
      "Cookie": _0x36cec8
    };
  try {
    const _0x59aef3 = await _0x1bffb2.get(_0x29ed40, {
      "params": _0x3acfba,
      "headers": _0x3b4767
    });
    return _0x59aef3.data;
  } catch (_0x3c05b1) {
    return console.error("获取搜索任务进度失败，错误: " + _0x3c05b1), null;
  }
}
async function _0x2c1423(_0x671042, _0x37eac8, _0x55e397) {
  console.log("开始处理账号 " + _0x671042);
  let _0x24c76a = "",
    _0x33d0b1;
  try {
    _0x33d0b1 = await _0x55e397(_0x37eac8);
    if (!_0x33d0b1) {
      console.warn("跳过当前账号 " + _0x671042 + " 任务，因为账号失效。");
      _0x24c76a += "账号 " + _0x671042 + " 失效\n";
      QLAPI.notify("账号失效", "当前账号 " + _0x671042 + "失效。");
      return;
    }
  } catch (_0x5d8bc6) {
    console.error("账号 " + _0x671042 + " 获取 token 失败，错误: " + _0x5d8bc6);
    return;
  }
  const _0x47a7cf = "https://rewards.bing.com/api/getuserinfo",
    _0x5b70ac = {
      "type": "1",
      "X-Requested-With": "XMLHttpRequest",
      "_": Date.now()
    },
    _0x37e0ec = {
      "User-Agent": _0x56c103,
      "Cookie": _0x37eac8
    };
  let _0x17e973;
  try {
    const _0x516b7c = await _0x1bffb2.get(_0x47a7cf, {
      "params": _0x5b70ac,
      "headers": _0x37e0ec
    });
    _0x17e973 = _0x516b7c.data;
  } catch (_0xdbff17) {
    console.error("账号 " + _0x671042 + " 获取每日任务失败，错误: " + _0xdbff17);
    return;
  }
  const _0x37794a = new Date().toLocaleDateString("en-US", {
    "month": "2-digit",
    "day": "2-digit",
    "year": "numeric"
  });
  let _0x267be3 = 0,
    _0x2c7f69 = 0;
  const _0x1b0b7f = _0x17e973.dashboard.dailySetPromotions[_0x37794a] || [];
  for (const _0x598cff of _0x1b0b7f) {
    _0x2c7f69++;
    const {
      offerId: _0x4dac3d,
      title: _0x4a0e5e,
      hash: _0x16fb49,
      complete: _0x46896d,
      pointProgressMax: _0xa43e51,
      attributes: _0x1af16f
    } = _0x598cff;
    console.log("------------------------");
    console.log("每日任务");
    console.log("[账号 " + _0x671042 + "]");
    console.log("Name: " + _0x4dac3d);
    console.log("题目: " + _0x4a0e5e);
    console.log("Hash: " + _0x16fb49);
    console.log("是否完成: " + _0x46896d);
    console.log("奖励积分: " + _0xa43e51);
    if (_0x1af16f?.["is_unlocked"] === "False") console.log("任务未解锁");else {
      if (!_0x46896d) {
        try {
          const _0x1f79c1 = await _0x4f7d82(_0x4dac3d, _0x16fb49, _0x37eac8, _0x33d0b1);
          _0x1f79c1 && _0x267be3++;
        } catch (_0x36b2ec) {
          console.error("账号 " + _0x671042 + " 执行任务失败，错误: " + _0x36b2ec);
          continue;
        }
      } else _0x267be3++, console.log("任务已完成");
    }
    const _0x1b98d8 = Math.floor(Math.random() * (300 - 250 + 1)) + 250;
    console.log("[账号 " + _0x671042 + "] 等待 " + _0x1b98d8 + " 秒");
    await new Promise(_0x186e2f => setTimeout(_0x186e2f, _0x1b98d8 * 1000));
  }
  let _0x57951d = 0,
    _0x26ea20 = 0;
  for (const _0x286585 of _0x17e973.dashboard.morePromotions) {
    if (_0x286585.pointProgressMax === 0) continue;
    _0x26ea20++;
    const {
      offerId: _0x484564,
      title: _0x2749ad,
      hash: _0xccc28f,
      complete: _0x34b3d7,
      pointProgressMax: _0x1a1a2c,
      attributes: _0x3dda40
    } = _0x286585;
    console.log("------------------------");
    console.log("更多任务");
    console.log("[账号 " + _0x671042 + "]");
    console.log("Name: " + _0x484564);
    console.log("题目: " + _0x2749ad);
    console.log("Hash: " + _0xccc28f);
    console.log("是否完成: " + _0x34b3d7);
    console.log("奖励积分: " + _0x1a1a2c);
    if (_0x3dda40?.["is_unlocked"] === "False") console.log("任务未解锁");else {
      if (!_0x34b3d7) {
        try {
          const _0x278cf9 = await _0x4f7d82(_0x484564, _0xccc28f, _0x37eac8, _0x33d0b1);
          _0x278cf9 && _0x57951d++;
        } catch (_0x304e42) {
          console.error("账号 " + _0x671042 + " 执行任务失败，错误: " + _0x304e42);
          continue;
        }
      } else _0x57951d++, console.log("任务已完成");
    }
    const _0x3225d4 = Math.floor(Math.random() * (300 - 250 + 1)) + 250;
    console.log("[账号 " + _0x671042 + "] 等待 " + _0x3225d4 + " 秒");
    await new Promise(_0x3eacc6 => setTimeout(_0x3eacc6, _0x3225d4 * 1000));
  }
  const _0x457786 = await _0x948deb(_0x37eac8);
  if (_0x457786) {
    const _0xa7dbe5 = _0x457786.dashboard.userStatus.counters,
      _0x4bfcfc = _0xa7dbe5.pcSearch ? _0xa7dbe5.pcSearch[0].pointProgress : 0,
      _0x187f65 = _0xa7dbe5.pcSearch ? _0xa7dbe5.pcSearch[0].pointProgressMax : 0,
      _0x40a592 = _0xa7dbe5.mobileSearch ? _0xa7dbe5.mobileSearch[0].pointProgress : 0,
      _0x3cbf98 = _0xa7dbe5.mobileSearch ? _0xa7dbe5.mobileSearch[0].pointProgressMax : 0;
    _0x24c76a += "账号 " + _0x671042 + " PC 搜索任务进度: " + _0x4bfcfc + "/" + _0x187f65 + "\n";
    _0x24c76a += "账号 " + _0x671042 + " 移动搜索任务进度: " + _0x40a592 + "/" + _0x3cbf98 + "\n";
  }
  _0x24c76a += "账号 " + _0x671042 + " 完成每日任务 " + _0x267be3 + "/" + _0x2c7f69 + " 个\n";
  _0x24c76a += "账号 " + _0x671042 + " 完成临时任务 " + _0x57951d + "/" + _0x26ea20 + " 个\n";
  const _0x1aafed = await _0x1f8978(_0x37eac8, _0x671042);
  return _0x24c76a += "账号 " + _0x671042 + " 剩余积分 " + _0x1aafed + "\n", _0x24c76a;
}
async function _0x3b2416(_0x2cc18d, _0x504291, _0x434bad, _0x15f861, _0x28fd28) {
  const _0x4076e3 = Math.random() * 99000 + 1000;
  await new Promise(_0x53a246 => setTimeout(_0x53a246, _0x4076e3));
  const _0xd7589b = await _0x434bad();
  console.log("[账号 " + _0x2cc18d + "] 开始处理...");
  const _0x2534a8 = new Set();
  let _0x2dc4ba = await _0x15f861(_0x504291, _0x2cc18d);
  if (_0x2dc4ba === null) {
    console.error("[账号 " + _0x2cc18d + "] 无法获取初始积分，跳过此账号");
    return;
  }
  console.log("[账号 " + _0x2cc18d + "] 初始积分: " + _0x2dc4ba);
  let _0x2bf380 = 0;
  const _0x5e4d67 = 5;
  while (true) {
    const _0x223b08 = _0xd7589b.filter(_0x470a81 => !_0x2534a8.has(_0x470a81));
    if (_0x223b08.length === 0) {
      console.log("[账号 " + _0x2cc18d + "] 所有关键词已用完");
      break;
    }
    searchType = "PC设备";
    userAgent = _0x56c103;
    const _0x48f39b = _0x223b08[Math.floor(Math.random() * _0x223b08.length)];
    _0x2534a8.add(_0x48f39b);
    console.log("[账号 " + _0x2cc18d + "] 执行 " + searchType + " 搜索: " + _0x48f39b);
    await _0x28fd28(_0x48f39b, userAgent, _0x504291, _0x2cc18d);
    const _0x3b2271 = await _0x15f861(_0x504291, _0x2cc18d);
    if (_0x3b2271 === null) {
      console.error("[账号 " + _0x2cc18d + "] 无法获取当前积分，跳过此账号");
      break;
    }
    _0x3b2271 > _0x2dc4ba ? (console.log("[账号 " + _0x2cc18d + "] " + searchType + " 积分增加，继续使用"), _0x2dc4ba = _0x3b2271, _0x2bf380 = 0) : (_0x2bf380++, console.log("[账号 " + _0x2cc18d + "] " + searchType + " 未增加积分，尝试次数: " + _0x2bf380));
    if (_0x2bf380 >= _0x5e4d67) {
      console.log("[账号 " + _0x2cc18d + "] " + searchType + " 多次未增加积分，结束任务");
      const _0x523d31 = Math.floor(Math.random() * (300 - 250 + 1)) + 200;
      console.log("[账号 " + _0x2cc18d + "] 等待 " + _0x523d31 + " 秒");
      await new Promise(_0x42a7a1 => setTimeout(_0x42a7a1, _0x523d31 * 1000));
      break;
    }
    const _0x466c2d = Math.floor(Math.random() * (300 - 250 + 1)) + 200;
    console.log("[账号 " + _0x2cc18d + "] 等待 " + _0x466c2d + " 秒");
    await new Promise(_0x3f2869 => setTimeout(_0x3f2869, _0x466c2d * 1000));
  }
  _0x2bf380 = 0;
  while (true) {
    const _0x5151af = _0xd7589b.filter(_0x38d92c => !_0x2534a8.has(_0x38d92c));
    if (_0x5151af.length === 0) {
      console.log("[账号 " + _0x2cc18d + "] 所有关键词已用完");
      break;
    }
    searchType = "手机设备";
    userAgent = _0xef84f9;
    const _0x34fdcb = _0x5151af[Math.floor(Math.random() * _0x5151af.length)];
    _0x2534a8.add(_0x34fdcb);
    console.log("[账号 " + _0x2cc18d + "] 执行 " + searchType + " 搜索: " + _0x34fdcb);
    await _0x28fd28(_0x34fdcb, userAgent, _0x504291, _0x2cc18d);
    const _0x5d32a0 = await _0x15f861(_0x504291, _0x2cc18d);
    if (_0x5d32a0 === null) {
      console.error("[账号 " + _0x2cc18d + "] 无法获取当前积分，跳过此账号");
      break;
    }
    _0x5d32a0 > _0x2dc4ba ? (console.log("[账号 " + _0x2cc18d + "] " + searchType + " 积分增加，继续使用"), _0x2dc4ba = _0x5d32a0, _0x2bf380 = 0) : (_0x2bf380++, console.log("[账号 " + _0x2cc18d + "] " + searchType + " 未增加积分，尝试次数: " + _0x2bf380));
    if (_0x2bf380 >= _0x5e4d67) {
      console.log("[账号 " + _0x2cc18d + "] " + searchType + " 多次未增加积分，结束任务");
      break;
    }
    const _0x2a4952 = Math.floor(Math.random() * (300 - 250 + 1)) + 200;
    console.log("[账号 " + _0x2cc18d + "] 等待 " + _0x2a4952 + " 秒");
    await new Promise(_0x18c059 => setTimeout(_0x18c059, _0x2a4952 * 1000));
  }
}
const _0x3a69a9 = async (_0x34c1a5, _0x59bf07) => {
    let _0x394998 = "";
    const _0xc68620 = "https://prod.rewardsplatform.microsoft.com/dapi/me/activities",
      _0x3da117 = new Date().toISOString().split("T")[0],
      _0x17953b = {
        "amount": 1,
        "attributes": {
          "offerid": "Gamification_Sapphire_DailyCheckIn",
          "date": _0x3da117,
          "signIn": false,
          "timezoneOffset": "08:00:00"
        },
        "id": "",
        "type": 101,
        "country": "cn",
        "risk_context": {},
        "channel": "SAAndroid"
      },
      _0x7b0773 = {
        "Content-Type": "application/json",
        "User-Agent": _0xef84f9,
        "authorization": "Bearer " + _0x59bf07
      };
    try {
      const _0x52a9d3 = await _0x1bffb2.post(_0xc68620, _0x17953b, {
          "headers": _0x7b0773
        }),
        _0x2afe39 = _0x52a9d3.data;
      if (_0x2afe39.response && _0x2afe39.response.balance !== undefined) {
        const _0x17e97b = _0x2afe39.response.balance;
        return console.log("app账号 " + _0x34c1a5 + " 签到成功 当前余额: " + _0x17e97b), _0x394998 += "app账号 " + _0x34c1a5 + " 签到成功 当前余额: " + _0x17e97b + "\n", _0x394998;
      } else console.log("无法获取余额");
    } catch (_0x2eadb1) {
      console.error("签到失败: ", _0x2eadb1);
    }
  },
  _0x34656c = require("crypto");
function _0xfcf8c6() {
  const _0x185ce0 = _0x34656c.randomBytes(64);
  return _0x185ce0.toString("hex");
}
async function _0x53ac49(_0x59aac0) {
  const _0x276f9f = "https://prod.rewardsplatform.microsoft.com/dapi/me",
    _0x201f50 = new URLSearchParams({
      "channel": "SAAndroid",
      "options": "613"
    }),
    _0x28eb48 = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + _0x59aac0
    };
  try {
    const _0x4bd2f7 = await _0x1bffb2.get(_0x276f9f, {
        "params": _0x201f50,
        "headers": _0x28eb48
      }),
      _0x32d9d4 = _0x4bd2f7.data,
      _0x31f998 = _0x32d9d4.response.promotions;
    let _0x5e23a3 = {
      "max": 1,
      "progress": 0
    };
    if (_0x31f998) {
      for (const _0x137e82 of _0x31f998) {
        if (_0x137e82.attributes.offerid === "ENUS_readarticle3_30points") {
          _0x5e23a3 = {
            "max": Number(_0x137e82.attributes.max),
            "progress": Number(_0x137e82.attributes.progress)
          };
          break;
        }
      }
    }
    return _0x5e23a3;
  } catch (_0x5420b8) {
    return console.error("请求失败:", _0x5420b8), {
      "max": 1,
      "progress": 0
    };
  }
}
async function _0x257cb8(_0x3b699c, _0x9d5d45) {
  let _0x25019c = "";
  const _0x32d78b = "https://prod.rewardsplatform.microsoft.com/dapi/me/activities";
  let _0x40074e = 0,
    _0x1dd4b7 = 0;
  const _0x501026 = {
    "Content-Type": "application/json",
    "User-Agent": _0xef84f9,
    "authorization": "Bearer " + _0x9d5d45
  };
  for (let _0x331381 = 0; _0x331381 < 15; _0x331381++) {
    const _0x29bc27 = {
      "amount": 1,
      "country": "cn",
      "id": _0xfcf8c6(),
      "type": 101,
      "attributes": {
        "offerid": "ENUS_readarticle3_30points"
      }
    };
    try {
      const _0x51e57c = await _0x1bffb2.post(_0x32d78b, _0x29bc27, {
          "headers": _0x501026
        }),
        _0x3445a8 = _0x51e57c.data;
      if (_0x3445a8 && _0x3445a8.response) {
        const _0x66611e = _0x3445a8.response.balance || 0;
        console.log("[app账号 " + _0x3b699c + "] 阅读任务第 " + (_0x331381 + 1) + " 次执行成功 当前余额: " + _0x66611e);
        if (_0x66611e === _0x40074e) {
          _0x1dd4b7++;
        } else {
          _0x1dd4b7 = 0;
        }
        if (_0x1dd4b7 >= 3) {
          console.log("[app账号 " + _0x3b699c + "] 积分连续三次没有变化");
          break;
        }
        _0x40074e = _0x66611e;
      } else {
        console.error("[app账号 " + _0x3b699c + "] 阅读任务 " + (_0x331381 + 1) + " 执行失败，未返回预期的响应数据");
      }
      const _0x1abe4a = Math.floor(Math.random() * (300 - 250 + 1)) + 250;
      console.log("[app账号 " + _0x3b699c + "] 阅读任务 等待 " + _0x1abe4a + " 秒");
      await new Promise(_0x448d6a => setTimeout(_0x448d6a, _0x1abe4a * 1000));
    } catch (_0x4945c6) {
      console.error("任务 " + (_0x331381 + 1) + " 请求失败:", _0x4945c6);
      break;
    }
  }
  const _0x146cb0 = await _0x53ac49(_0x9d5d45);
  return console.log("[app账号 " + _0x3b699c + "] 阅读任务完成 当前进度: " + _0x146cb0.progress + "/" + _0x146cb0.max), _0x25019c += "app账号 " + _0x3b699c + " 阅读任务完成 当前进度: " + _0x146cb0.progress + "/" + _0x146cb0.max + "\n", _0x25019c;
}
const _0x19332e = "1.4";
async function _0x6b4793() {
  const _0x36d31f = "http://api.bingapi.email/version.txt",
    _0x52f852 = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0"
    };
  try {
    const _0x58cbfb = await _0x1bffb2.get(_0x36d31f, {
      "headers": _0x52f852
    });
    if (_0x58cbfb.status === 200) {
      const _0x3e72e0 = _0x58cbfb.data,
        _0x513f6c = _0x3e72e0.version,
        _0x33ecc7 = _0x3e72e0.msg;
      return _0x513f6c && _0x33ecc7 ? {
        "version": _0x513f6c,
        "msg": _0x33ecc7
      } : (console.log("版本信息或消息未找到"), null);
    } else return console.log("请求失败，状态码: " + _0x58cbfb.status), null;
  } catch (_0x4950db) {
    return console.error("请求发生错误:", _0x4950db.message), null;
  }
}
const _0x3d0264 = require("os");
function _0x52d2c7() {
  const _0x41beb6 = _0x3d0264.networkInterfaces();
  for (const _0x56d14e in _0x41beb6) {
    for (const _0x1bcbd7 of _0x41beb6[_0x56d14e]) {
      if (_0x1bcbd7.mac && _0x1bcbd7.mac !== "00:00:00:00:00:00") return _0x1bcbd7.mac;
    }
  }
  return null;
}
async function _0x5791a9(_0x18cc4b) {
  const _0x596c78 = "http://api.bingapi.email/api/query",
    _0x53348d = {
      "originalText": _0x18cc4b
    },
    _0x19239a = {
      "Content-Type": "application/json"
    };
  try {
    const _0x43da63 = await _0x1bffb2.post(_0x596c78, _0x53348d, {
        "headers": _0x19239a
      }),
      _0x358e5e = _0x43da63.data;
    if (_0x358e5e.code === 200 && _0x358e5e.data && _0x358e5e.data.length > 0) {
      const _0x39e970 = _0x358e5e.data[0];
      console.log("卡密验证成功，卡密剩余使用次数:", _0x39e970.usage_count);
      if (_0x39e970.usage_count <= 0) {
        return console.log("卡密使用次数不足，任务停止。"), false;
      }
      let _0x1144ed = _0x358e5e.data[0].mac_address;
      const _0x297de9 = _0x358e5e.data[0].md5_hash,
        _0x5b428c = _0x52d2c7();
      if (!_0x5b428c) return console.log("无法获取本地 MAC 地址，任务停止。"), false;
      console.log("当前MAC地址:", _0x5b428c);
      if (_0x1144ed) return _0x1144ed === _0x5b428c ? true : (console.log("当前设备不匹配，任务停止。"), false);else {
        const _0x2f36c8 = "http://api.bingapi.email/api/updateHash",
          _0x3c10fa = {
            "md5_hash": _0x297de9,
            "mac_address": _0x5b428c
          },
          _0x56a5f6 = await _0x1bffb2.post(_0x2f36c8, _0x3c10fa, {
            "headers": {
              "Content-Type": "application/json"
            }
          }),
          _0x2ddd2d = _0x56a5f6.data;
        if (_0x2ddd2d.code === 200) {
          return console.log("第一次运行，开始绑定设备"), true;
        } else return console.log("设备绑定失败:"), false;
      }
    } else return console.log("卡密无效或未找到相关数据."), false;
  } catch (_0x42857f) {
    return console.error("卡密验证请求失败:"), false;
  }
}
async function _0x3a3cef(_0x25c684) {
  const _0x449d98 = new Date(),
    _0x3351d6 = _0x449d98.getFullYear(),
    _0x40021b = String(_0x449d98.getMonth() + 1).padStart(2, "0"),
    _0x1ecf04 = String(_0x449d98.getDate()).padStart(2, "0"),
    _0x1d92aa = String(_0x449d98.getHours()).padStart(2, "0"),
    _0x3713bf = String(_0x449d98.getMinutes()).padStart(2, "0"),
    _0x5089d5 = _0x3351d6 + "/" + _0x40021b + "/" + _0x1ecf04 + " " + _0x1d92aa + ":" + _0x3713bf,
    _0x25973a = "https://api.bingapi.email/api/endpoint",
    _0x400414 = {
      "md5_hash": _0x25c684,
      "last_run_time": _0x5089d5
    },
    _0x135eb3 = {
      "Content-Type": "application/json"
    };
  try {
    const _0x2852dd = await _0x1bffb2.post(_0x25973a, _0x400414, {
        "headers": _0x135eb3
      }),
      _0x3d9d58 = _0x2852dd.data;
    if (_0x3d9d58.message === "操作成功") console.log("开始执行，卡密剩余使用次数:", _0x3d9d58.new_usage_count);else {
      console.log("更新失败:", _0x3d9d58.message);
      throw new Error("更新数据失败，任务停止");
    }
  } catch (_0x1d28ff) {
    console.error("请求失败:", _0x1d28ff.message || _0x1d28ff);
    throw new Error("更新数据失败，任务停止");
  }
}
async function _0x4a0950() {
  let _0x3c3256 = "";
  const _0xd6ed11 = await _0x6b4793();
  console.log("当前版本" + _0x19332e);
  console.log("最新公告: " + _0xd6ed11.msg);
  if (!_0xd6ed11) {
    console.log("未找到版本信息，任务停止。");
    return;
  }
  if (_0xd6ed11.version !== _0x19332e) {
    console.log("版本不匹配云端版本" + _0xd6ed11.version);
    return;
  } else console.log("版本匹配,开始任务");
  const _0x273d10 = process.env.bingkm;
  if (!_0x273d10) {
    console.log("未找到卡密，任务停止。");
    return;
  }
  const _0x109a31 = await _0x5791a9(_0x273d10);
  if (!_0x109a31) {
    console.log("卡密无效，任务停止。");
    return;
  }
  try {
    await _0x3a3cef(_0x273d10);
  } catch (_0x416342) {
    console.log(_0x416342.message);
    return;
  }
  let _0x7b07ad = await _0x9d95a(),
    _0x49064a = _0x7b07ad.map(_0x4d136c => _0x4d136c.access_token).filter(_0x5ab10e => _0x5ab10e);
  console.log("开始web搜索任务...");
  await Promise.all(_0x4f1cfa.map((_0x27dfaf, _0x4a2063) => _0x3b2416(_0x4a2063 + 1, _0x27dfaf, _0x2319e5, _0x1f8978, _0xdbce7a)));
  console.log("开始web每日任务...");
  const _0x2101a5 = await Promise.all(_0x4f1cfa.map((_0x3fb155, _0x3a9206) => _0x2c1423(_0x3a9206 + 1, _0x3fb155, _0x839be8)));
  if (_0x49064a.length === 0) console.log("没有有效的访问令牌，跳过签到和阅读任务..."), _0x3c3256 = _0xd6ed11.msg + "\n" + "——————web任务——————\n" + _0x2101a5.join("");else {
    console.log("开始app阅读任务...");
    const _0x423448 = await Promise.all(_0x49064a.map((_0x231254, _0x4623bb) => _0x257cb8(_0x4623bb + 1, _0x231254)));
    console.log("开始app签到任务...");
    const _0x155b3b = await Promise.all(_0x49064a.map((_0x296793, _0x438ad6) => _0x3a69a9(_0x438ad6 + 1, _0x296793)));
    _0x3c3256 = _0xd6ed11.msg + "\n" + "——————web任务——————\n" + _0x2101a5.join("") + "——————app任务——————\n" + _0x155b3b.join("") + _0x423448.join("");
  }
  console.log("————————————账号统计————————————");
  console.log(_0x3c3256);
  process.env.bingPush === "true" && QLAPI.notify("bing脚本推送", _0x3c3256);
}
_0x4a0950().catch(_0x5a3d92 => console.error("执行出错:", _0x5a3d92));