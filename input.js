//Mon Jan 13 2025 10:14:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
bing全任务脚本 v1.4
自动完成全部任务
推荐每天中午12点以后跑，中国大陆地区的每日活动（Web）和文章阅读（App）需要中午12点以后才能正常完成

运行前在环境变量bingkm里面里面填入脚本授权码(必填)

web端ck （活动+搜索）(必填)
使用电脑端Edge浏览器打开必应 https://rewards.bing.com/ F12抓取Cookie即可 正确的CK格式是里面有MUID=xxxxxxx
变量名：BING_CK  多账号换行  

app端ck （签到+阅读）（可选）只支持中国大陆地区账号，需要手动获取授权Code才能正常获取Token运行
在要登录账号的电脑端Edge浏览器访问这个连接
https://login.live.com/oauth20_authorize.srf?client_id=0000000040170455&scope=service::prod.rewardsplatform.microsoft.com::MBI_SSL&response_type=code&redirect_uri=https://login.live.com/oauth20_desktop.srf
点击访问后会3跳转至 https://login.live.com/oauth20_desktop.srf?code=M.****_***.*.*.********-****-****-****-************ 网页，只需全选复制
页面空白是正常的，访问前后是两个链接
然后把(完整链接)https://login.live.com/oauth20_desktop.srf?code=M.****_***.*.*.********-****-****-****-************
填写到bing.yaml里面(只需要填写到code里面，refresh_token和access_token是自动生成的)
必看：重定向的链接有效期特别短还是一次性的，需要填好赶紧运行脚本

请在环境变量中设置 PC_USER_AGENT 和 MOBILE_USER_AGENT来填写电脑和安卓的User-Agent
在线查询ua：https://useragent.buyaocha.com/要里面的原始UA信息

如果要开启推送设置环境变量bingPush值为true
*/

Account_name = "BING_CK1"; // 自定义变量名称
filePath = "./bing1.yaml"; // 自定义YAML 文件路径
proxyUrl = `http://`; // 自定义http代理,格式http://ip:端口

var _0xodW = "jsjiami.com.v7";
const _0x3aa276 = _0x57a1;
(function (_0xf62fe3, _0x3b79a2, _0xe71b53, _0x13e174, _0x53c041, _0x42fcf2, _0x6a54a7) {
  return _0xf62fe3 = _0xf62fe3 >> 8, _0x42fcf2 = "hs", _0x6a54a7 = "hs", function (_0x37847a, _0x1e5fdb, _0x5c8c3f, _0x77260d, _0x4608d4) {
    const _0x3e675c = _0x57a1;
    _0x77260d = "tfi", _0x42fcf2 = _0x77260d + _0x42fcf2, _0x4608d4 = "up", _0x6a54a7 += _0x4608d4, _0x42fcf2 = _0x5c8c3f(_0x42fcf2), _0x6a54a7 = _0x5c8c3f(_0x6a54a7), _0x5c8c3f = 0;
    const _0x3ca531 = _0x37847a();
    while (!![] && --_0x13e174 + _0x1e5fdb) {
      try {
        _0x77260d = parseInt(_0x3e675c(553, "eUvn")) / 1 * (parseInt(_0x3e675c(435, "9uh^")) / 2) + parseInt(_0x3e675c(470, "*@TT")) / 3 * (-parseInt(_0x3e675c(737, "1pfr")) / 4) + -parseInt(_0x3e675c(834, "hczt")) / 5 * (-parseInt(_0x3e675c(354, "ILU)")) / 6) + parseInt(_0x3e675c(818, "sLs&")) / 7 * (parseInt(_0x3e675c(395, "sLs&")) / 8) + parseInt(_0x3e675c(318, "6*6P")) / 9 * (-parseInt(_0x3e675c(570, "hczt")) / 10) + parseInt(_0x3e675c(606, "I7Py")) / 11 + -parseInt(_0x3e675c(239, "kCjT")) / 12;
      } catch (_0x4045f1) {
        _0x77260d = _0x5c8c3f;
      } finally {
        _0x4608d4 = _0x3ca531[_0x42fcf2]();
        if (_0xf62fe3 <= _0x13e174) _0x5c8c3f ? _0x53c041 ? _0x77260d = _0x4608d4 : _0x53c041 = _0x4608d4 : _0x5c8c3f = _0x4608d4;else {
          if (_0x5c8c3f == _0x53c041["replace"](/[KWlOpEwXGdtFfJVyPUNgMu=]/g, "")) {
            if (_0x77260d === _0x1e5fdb) {
              _0x3ca531["un" + _0x42fcf2](_0x4608d4);
              break;
            }
            _0x3ca531[_0x6a54a7](_0x4608d4);
          }
        }
      }
    }
  }(_0xe71b53, _0x3b79a2, function (_0x3c0387, _0x75fa90, _0x3b4185, _0x3cdec6, _0xa99c16, _0xf7d6e8, _0x431c40) {
    return _0x75fa90 = "split", _0x3c0387 = arguments[0], _0x3c0387 = _0x3c0387[_0x75fa90](""), _0x3b4185 = `\x72\x65\x76\x65\x72\x73\x65`, _0x3c0387 = _0x3c0387[_0x3b4185]("v"), _0x3cdec6 = `\x6a\x6f\x69\x6e`, 1653314, _0x3c0387[_0x3cdec6]("");
  });
}(51968, 886735, _0x5b44, 205), _0x5b44) && (_0xodW = `\xe67`);
require(_0x3aa276(923, "QZk^"));
const axios = require(_0x3aa276(660, "V!tL"));
async function fetchProxyUrl() {
  const _0x2402ef = _0x3aa276,
    _0x9dab9a = {
      "UbeUk": function (_0x5185d7, _0x54afe1) {
        return _0x5185d7 !== _0x54afe1;
      },
      "ioxlo": _0x2402ef(599, "*19I"),
      "GnXOZ": _0x2402ef(319, "9tUp"),
      "SIjGf": _0x2402ef(799, "Wy9F"),
      "tpNrI": "\u83B7\u53D6\u4EE3\u7406\u5730\u5740\u5931\u8D25:"
    };
  try {
    _0x9dab9a["UbeUk"](_0x9dab9a[_0x2402ef(170, "#3D2")], _0x9dab9a[_0x2402ef(293, "y9RD")]) ? (console[_0x2402ef(302, "6*6P")](_0x9dab9a[_0x2402ef(830, "1pfr")], proxyUrl), global["GLOBAL_AGENT"][_0x2402ef(357, "1pfr")] = proxyUrl, console[_0x2402ef(655, "HcSA")](_0x2402ef(613, "!c5i"))) : _0x48753d["error"](_0x2402ef(848, "IIfE") + _0x3b8a76);
  } catch (_0x50062f) {
    console[_0x2402ef(855, "QZk^")](_0x9dab9a[_0x2402ef(366, "QZk^")], _0x50062f);
  }
}
async function testProxy() {
  const _0xfd8110 = _0x3aa276,
    _0x3045e9 = {
      "Xcesq": _0xfd8110(226, "IIfE"),
      "IaYup": "\u4EE3\u7406\u8BF7\u6C42\u5931\u8D25:"
    };
  try {
    const _0x1940a9 = await axios["get"](_0xfd8110(322, "JouG"));
    return console[_0xfd8110(910, "JouG")](_0x3045e9["Xcesq"], _0x1940a9[_0xfd8110(639, "#3D2")][_0xfd8110(491, "L(FN")]), !![];
  } catch (_0x404f08) {
    return console["error"](_0x3045e9[_0xfd8110(221, "HcSA")], _0x404f08["message"]), ![];
  }
}
const fs = require("fs"),
  yaml = require("js-yaml");
async function getAccountsFromYaml() {
  const _0x48d6c8 = _0x3aa276,
    _0x4afdd4 = {
      "rchKO": function (_0x31e94b, _0x5c9243) {
        return _0x31e94b - _0x5c9243;
      },
      "DwPMH": function (_0x11246c, _0x13cb8e) {
        return _0x11246c > _0x13cb8e;
      },
      "wsWcr": function (_0x4b4bf9, _0x3b99e1) {
        return _0x4b4bf9 * _0x3b99e1;
      },
      "ruYwa": function (_0x1104dc, _0x2fc2c1) {
        return _0x1104dc + _0x2fc2c1;
      },
      "PbfyO": function (_0x53da2d, _0x5262fb) {
        return _0x53da2d !== _0x5262fb;
      },
      "OKMmJ": _0x48d6c8(861, "]N9o"),
      "shmxe": _0x48d6c8(571, "hczt"),
      "rSXVF": function (_0x40d3f1, _0x4baff1) {
        return _0x40d3f1 === _0x4baff1;
      },
      "EUiYB": _0x48d6c8(281, "pZMz"),
      "VmYhQ": function (_0x242930, _0x3e8252) {
        return _0x242930 < _0x3e8252;
      },
      "AvCWz": _0x48d6c8(341, "L(FN"),
      "PyLhG": function (_0x3f7548, _0x41e787) {
        return _0x3f7548 + _0x41e787;
      },
      "bTGOv": function (_0x4f1f86, _0x2c5ff3) {
        return _0x4f1f86 + _0x2c5ff3;
      },
      "hEfef": function (_0x5a48ad, _0x31e832) {
        return _0x5a48ad !== _0x31e832;
      },
      "DMFbE": _0x48d6c8(384, "SD)4"),
      "iPPxD": _0x48d6c8(879, "vOBH"),
      "zRVBu": function (_0x39cd6d, _0x3221d5) {
        return _0x39cd6d + _0x3221d5;
      },
      "NnFTg": function (_0x58e502, _0x407e3d) {
        return _0x58e502(_0x407e3d);
      },
      "ExOdS": function (_0x374e82, _0x50df41) {
        return _0x374e82 === _0x50df41;
      },
      "WGEsT": _0x48d6c8(169, "kCjT"),
      "edrbK": "TBfxD",
      "ZDhwv": _0x48d6c8(785, "]HZR"),
      "JSRZs": function (_0x462ee5, _0x5aa700) {
        return _0x462ee5 > _0x5aa700;
      },
      "qCfSW": function (_0x87af7d, _0xdc149e, _0x71e3d2) {
        return _0x87af7d(_0xdc149e, _0x71e3d2);
      },
      "BJJFs": "YAML \u6587\u4EF6\u5DF2\u66F4\u65B0",
      "ZNOeq": "\u6CA1\u6709\u6709\u6548app\u8D26\u53F7\uFF0C\u8DF3\u8FC7 YAML \u6587\u4EF6\u66F4\u65B0",
      "ysvYG": function (_0x282a5f, _0x30b145) {
        return _0x282a5f !== _0x30b145;
      },
      "HHiJL": "HhqET",
      "cvPmj": _0x48d6c8(786, "*19I")
    };
  try {
    const _0x321807 = fs["readFileSync"](filePath, _0x4afdd4[_0x48d6c8(835, "vOBH")]),
      _0x1d3d70 = yaml[_0x48d6c8(279, "AS)4")](_0x321807),
      _0x1810e6 = _0x1d3d70?.["accounts"] || [];
    if (_0x4afdd4["rSXVF"](_0x1810e6[_0x48d6c8(803, "0[u[")], 0)) return console[_0x48d6c8(448, "]HZR")](_0x4afdd4["EUiYB"]), [];
    const _0x555686 = [];
    for (let _0x52a036 = 0; _0x4afdd4["VmYhQ"](_0x52a036, _0x1810e6["length"]); _0x52a036++) {
      if (_0x48d6c8(233, "1pfr") === _0x4afdd4["AvCWz"]) for (let _0x2a79c1 = _0x4afdd4[_0x48d6c8(665, "$sq&")](_0x3a77ba[_0x48d6c8(888, "!c5i")], 1); _0x4afdd4[_0x48d6c8(669, "F11s")](_0x2a79c1, 0); _0x2a79c1--) {
        const _0x1030e6 = _0x191600["floor"](_0x4afdd4[_0x48d6c8(795, "0[u[")](_0x1577d3[_0x48d6c8(290, "kCjT")](), _0x4afdd4["ruYwa"](_0x2a79c1, 1)));
        [_0x258ffa[_0x2a79c1], _0x2e78f4[_0x1030e6]] = [_0xefbb28[_0x1030e6], _0x79c57b[_0x2a79c1]];
      } else {
        const _0x2305e4 = _0x1810e6[_0x52a036],
          _0x3478bd = _0x2305e4[_0x48d6c8(634, "r2tM")]?.[_0x48d6c8(400, "@S9i")](/(?:[?&])code=([A-Za-z0-9._%-]+)/);
        if (!_0x3478bd) {
          console[_0x48d6c8(191, "QGE#")]("\u7B2C " + _0x4afdd4[_0x48d6c8(958, "*@TT")](_0x52a036, 1) + " \u53F7app\u8D26\u53F7\u6CA1\u6709\u6709\u6548\u7684 code \u53C2\u6570\uFF0C\u8DF3\u8FC7");
          continue;
        }
        const _0x22e983 = _0x3478bd[1];
        if (!_0x2305e4["refresh_token"]) {
          console[_0x48d6c8(655, "HcSA")](_0x48d6c8(287, "@S9i") + _0x4afdd4[_0x48d6c8(495, "*19I")](_0x52a036, 1) + " \u53F7app\u8D26\u53F7");
          try {
            if (_0x4afdd4[_0x48d6c8(501, "6*6P")](_0x4afdd4[_0x48d6c8(502, "*19I")], _0x4afdd4[_0x48d6c8(644, "61MK")])) {
              const _0x46925c = await getRefreshToken(_0x22e983);
              _0x2305e4[_0x48d6c8(443, "hczt")] = _0x46925c, console[_0x48d6c8(761, "vYT2")]("\u7B2C " + (_0x52a036 + 1) + _0x48d6c8(817, "*@TT"));
            } else {
              if (_0x438e21[_0x48d6c8(245, "JouG")] && _0x4afdd4[_0x48d6c8(313, "kCjT")](_0x27ea9b[_0x48d6c8(560, "V!tL")], _0x4afdd4[_0x48d6c8(303, "y9RD")])) return _0x4a9ed2["mac"];
            }
          } catch (_0x96fd7f) {
            console[_0x48d6c8(887, "hczt")]("\u7B2C " + _0x4afdd4["zRVBu"](_0x52a036, 1) + _0x48d6c8(779, "]HZR") + _0x96fd7f);
            continue;
          }
        }
        if (_0x2305e4[_0x48d6c8(582, "AS)4")]) try {
          const {
            access_token: _0x2b10a4,
            refresh_token: _0x1cba94
          } = await _0x4afdd4[_0x48d6c8(626, "bPzX")](getAccessToken, _0x2305e4[_0x48d6c8(291, "IG&#")]);
          _0x2305e4["access_token"] = _0x2b10a4;
          if (_0x1cba94) {
            if (_0x4afdd4[_0x48d6c8(826, "*@TT")](_0x4afdd4[_0x48d6c8(507, "QZk^")], _0x4afdd4["edrbK"])) {
              const _0x52a837 = _0x50a838[_0x48d6c8(686, "UB(Y")][_0x48d6c8(173, "AS)4")];
              return _0x23f12e["log"](_0x48d6c8(900, "1pfr") + _0x3e84dd + _0x48d6c8(907, "vYT2") + _0x52a837), _0x36461e += _0x48d6c8(940, "$sq&") + _0x4d984a + _0x48d6c8(165, "QZk^") + _0x52a837 + "\n", _0x41f4e7;
            } else _0x2305e4[_0x48d6c8(593, "JouG")] = _0x1cba94;
          }
          console[_0x48d6c8(909, "*19I")]("\u7B2C " + _0x4afdd4[_0x48d6c8(899, "IG&#")](_0x52a036, 1) + _0x48d6c8(762, "YZvv"));
        } catch (_0x58c6cc) {
          console["error"]("\u7B2C " + _0x4afdd4[_0x48d6c8(214, "]N9o")](_0x52a036, 1) + _0x48d6c8(268, "V(f*") + _0x58c6cc);
          continue;
        }
        _0x2305e4["access_token"] && _0x555686[_0x48d6c8(567, "0AA3")](_0x2305e4);
      }
    }
    return console[_0x48d6c8(393, "9tUp")](_0x4afdd4[_0x48d6c8(185, "]N9o")], _0x555686[_0x48d6c8(625, "vYT2")]), _0x4afdd4[_0x48d6c8(402, "]HZR")](_0x555686[_0x48d6c8(410, "SD)4")], 0) ? (await _0x4afdd4[_0x48d6c8(886, "kCjT")](updateYamlFile, filePath, _0x555686), console["log"](_0x4afdd4["BJJFs"])) : console["log"](_0x4afdd4["ZNOeq"]), _0x555686;
  } catch (_0x550009) {
    if (_0x4afdd4["ysvYG"](_0x4afdd4[_0x48d6c8(763, "0[u[")], _0x4afdd4[_0x48d6c8(929, "V(f*")])) {
      console[_0x48d6c8(431, "pZMz")](_0x48d6c8(539, "eUvn") + filePath + _0x48d6c8(276, "FVLe"), _0x550009);
      throw _0x550009;
    } else _0x31e0e1[_0x48d6c8(345, "B@]1")]("\u4EFB\u52A1\u672A\u89E3\u9501");
  }
}
async function getRefreshToken(_0xabe93e) {
  const _0x4c2f30 = _0x3aa276,
    _0x203665 = {
      "WQEgl": function (_0x47da63, _0x4eee8f) {
        return _0x47da63 !== _0x4eee8f;
      },
      "pUmAK": "00:00:00:00:00:00",
      "CUkFC": function (_0x3f0dfd, _0x217c5d) {
        return _0x3f0dfd === _0x217c5d;
      },
      "VeptB": _0x4c2f30(717, "vYT2"),
      "nfyux": function (_0x3de284, _0x201f23) {
        return _0x3de284 === _0x201f23;
      },
      "DAcbn": _0x4c2f30(335, "0AA3")
    },
    _0x5e7162 = _0x4c2f30(286, "hczt") + _0xabe93e + _0x4c2f30(458, "IG&#");
  try {
    if (_0x203665["CUkFC"](_0x203665[_0x4c2f30(850, "ILU)")], _0x4c2f30(932, "61MK"))) for (const _0x42963e of _0x25f2e6[_0x4c107e]) {
      if (_0x42963e[_0x4c2f30(388, "]N9o")] && _0x203665["WQEgl"](_0x42963e[_0x4c2f30(947, "FVLe")], _0x203665[_0x4c2f30(631, "mXv]")])) return _0x42963e[_0x4c2f30(807, "#3D2")];
    } else {
      const _0x5c6a6a = await axios[_0x4c2f30(196, "F11s")](_0x5e7162);
      return _0x5c6a6a[_0x4c2f30(740, "mXv]")][_0x4c2f30(670, "pZMz")];
    }
  } catch (_0x8a660e) {
    if (_0x203665[_0x4c2f30(519, "UB(Y")](_0x4c2f30(615, "L(FN"), _0x203665[_0x4c2f30(210, "AS)4")])) {
      console["error"](_0x4c2f30(679, "6*6P") + _0x8a660e);
      throw _0x8a660e;
    } else return _0x4d38ca[_0x4c2f30(693, "@S9i")](_0x4c2f30(242, "IIfE")), [];
  }
}
async function getAccessToken(_0x476ae9) {
  const _0x126678 = _0x3aa276,
    _0x347858 = _0x126678(871, "*@TT") + _0x476ae9 + "&scope=service::prod.rewardsplatform.microsoft.com::MBI_SSL&grant_type=REFRESH_TOKEN";
  try {
    const _0x5bf2b0 = await axios[_0x126678(535, "!c5i")](_0x347858);
    return {
      "access_token": _0x5bf2b0[_0x126678(547, "QZk^")][_0x126678(883, "pZMz")],
      "refresh_token": _0x5bf2b0[_0x126678(576, "L(FN")]["refresh_token"] || _0x476ae9
    };
  } catch (_0xa4f02b) {
    console[_0x126678(699, "YZvv")]("\u83B7\u53D6 \u767B\u5F55\u4EE4\u724C \u5931\u8D25: " + _0xa4f02b);
    throw _0xa4f02b;
  }
}
async function updateYamlFile(_0x235fff, _0x439b56) {
  const _0x4625b5 = _0x3aa276,
    _0x392532 = {
      "XaHpA": _0x4625b5(622, "QZk^")
    };
  try {
    const _0x48b07c = {
        "accounts": _0x439b56
      },
      _0x427fbd = yaml[_0x4625b5(596, "$sq&")](_0x48b07c, {
        "lineWidth": 1000000
      });
    fs["writeFileSync"](_0x235fff, _0x427fbd, _0x392532[_0x4625b5(465, "mXv]")]);
  } catch (_0x4c5da3) {
    console["error"](_0x4625b5(628, "AS)4") + _0x235fff + _0x4625b5(276, "FVLe"), _0x4c5da3);
    throw _0x4c5da3;
  }
}
const cks = process[_0x3aa276(851, "V!tL")][Account_name] ? process["env"][Account_name][_0x3aa276(520, "]N9o")]("\n")[_0x3aa276(246, "L(FN")](_0x2bbd04 => _0x2bbd04["trim"]())[_0x3aa276(533, "r2tM")](_0x3e4607 => _0x3e4607) : [];
if (cks["length"] === 0) throw new Error("\u672A\u68C0\u6D4B\u5230\u4EFB\u4F55\u8D26\u53F7\uFF0C\u8BF7\u5728\u73AF\u5883\u53D8\u91CF\u4E2D\u8BBE\u7F6E " + Account_name);
console[_0x3aa276(910, "JouG")]("web\u8D26\u53F7\u6570\uFF1A", cks["length"]);
const PC_USER_AGENT = process[_0x3aa276(175, "$sq&")][_0x3aa276(922, "F11s")],
  MOBILE_USER_AGENT = process["env"][_0x3aa276(249, "AS)4")];
if (!PC_USER_AGENT || !MOBILE_USER_AGENT) throw new Error(_0x3aa276(825, "61MK"));
function generateRandomString(_0x32f2e6) {
  const _0x595dac = _0x3aa276,
    _0x4d59dd = {
      "afOmu": function (_0x393363, _0x1d7c8f) {
        return _0x393363 < _0x1d7c8f;
      },
      "RHmjE": function (_0x51c8e8, _0x52e03e) {
        return _0x51c8e8 === _0x52e03e;
      },
      "HzYgi": _0x595dac(802, "]HZR")
    },
    _0x1796c2 = _0x595dac(569, "]HZR");
  let _0x4c49a0 = "";
  for (let _0x5b25ea = 0; _0x4d59dd[_0x595dac(895, "hczt")](_0x5b25ea, _0x32f2e6); _0x5b25ea++) {
    _0x4d59dd["RHmjE"]("Affyk", _0x4d59dd[_0x595dac(194, "HcSA")]) ? _0x34cd21[_0x595dac(637, "L(FN")]("\u7B7E\u5230\u5931\u8D25: ", _0xa11079) : _0x4c49a0 += _0x1796c2[_0x595dac(472, "6*6P")](Math["floor"](Math[_0x595dac(290, "kCjT")]() * _0x1796c2["length"]));
  }
  return _0x4c49a0;
}
async function getKeywords() {
  const _0x47fc4d = _0x3aa276,
    _0x5f1adc = {
      "HUGLz": "\uD83D\uDE80\u4EE3\u7406\u5730\u5740",
      "oWenr": "\uD83D\uDE80\u542F\u52A8global-agent\u4E2D",
      "sLIbL": _0x47fc4d(513, "vYT2"),
      "qBhcD": "BaiduHot",
      "sJHSp": "ToutiaoHot",
      "EBdRG": _0x47fc4d(310, "1pfr"),
      "FNBLO": _0x47fc4d(744, "QGE#"),
      "DNvIy": _0x47fc4d(368, "JouG"),
      "CnQfU": _0x47fc4d(260, "V(f*"),
      "jQQAo": _0x47fc4d(228, "$sq&"),
      "raEkg": _0x47fc4d(710, "I7Py"),
      "TILTr": _0x47fc4d(542, "kCjT"),
      "TQSsw": _0x47fc4d(536, "OMHY"),
      "vUkMe": "\u6D77\u5185\u5B58\u77E5\u5DF1\uFF0C\u5929\u6DAF\u82E5\u6BD4\u90BB",
      "OXhPX": "\u4E09\u4EBA\u884C\uFF0C\u5FC5\u6709\u6211\u5E08\u7109",
      "PnlmA": "\u83AB\u6101\u524D\u8DEF\u65E0\u77E5\u5DF1\uFF0C\u5929\u4E0B\u8C01\u4EBA\u4E0D\u8BC6\u541B",
      "LCpgG": "\u4EBA\u751F\u8D35\u76F8\u77E5\uFF0C\u4F55\u7528\u91D1\u4E0E\u94B1",
      "heDel": "\u5929\u751F\u6211\u6750\u5FC5\u6709\u7528",
      "SLBAU": function (_0x1a97a5, _0xcf1639) {
        return _0x1a97a5(_0xcf1639);
      },
      "WLNmC": _0x47fc4d(392, "p9sy"),
      "rOCyX": _0x47fc4d(928, "9uh^"),
      "TgSLP": function (_0x2c1676, _0x51d751) {
        return _0x2c1676 !== _0x51d751;
      },
      "tXnrZ": _0x47fc4d(798, "!c5i")
    },
    _0x40c2c0 = [_0x5f1adc[_0x47fc4d(809, "6*6P")], _0x5f1adc[_0x47fc4d(594, "B@]1")], _0x47fc4d(650, "0[u["), _0x5f1adc[_0x47fc4d(355, "Zwjr")], _0x5f1adc["FNBLO"], _0x5f1adc[_0x47fc4d(806, "9uh^")], _0x5f1adc[_0x47fc4d(610, "ILU)")], _0x5f1adc[_0x47fc4d(808, "V!tL")], _0x5f1adc["raEkg"]],
    _0x4641ab = [_0x5f1adc["TILTr"], "\u5343\u91CC\u4E4B\u884C\uFF0C\u59CB\u4E8E\u8DB3\u4E0B", _0x5f1adc["TQSsw"], _0x47fc4d(215, "HcSA"), _0x5f1adc[_0x47fc4d(212, "*19I")], _0x5f1adc[_0x47fc4d(588, "L(FN")], _0x5f1adc[_0x47fc4d(428, "@0Bk")], _0x5f1adc[_0x47fc4d(349, "$sq&")], _0x5f1adc[_0x47fc4d(580, "IIfE")]];
  let _0xdcd49b = [];
  _0x5f1adc[_0x47fc4d(367, "1pfr")](shuffleArray, _0x40c2c0);
  for (const _0xbc9f52 of _0x40c2c0) {
    try {
      if (_0x5f1adc[_0x47fc4d(432, "@S9i")] === _0x5f1adc["rOCyX"]) {
        _0x20a950[_0x47fc4d(172, "kCjT")](_0x47fc4d(700, "mXv]") + _0x2077fd[_0x47fc4d(640, "#3D2")]);
        return;
      } else {
        const _0x2755be = await axios[_0x47fc4d(544, "7)k3")]("https://api.gumengya.com/Api/" + _0xbc9f52);
        _0x2755be[_0x47fc4d(342, "YZvv")] && _0x2755be["data"][_0x47fc4d(350, "9tUp")] && (_0xdcd49b = _0xdcd49b[_0x47fc4d(944, "OMHY")](_0x2755be["data"][_0x47fc4d(860, "IG&#")][_0x47fc4d(294, "kCjT")](_0x1f8e6e => _0x1f8e6e[_0x47fc4d(297, "r2tM")])));
      }
    } catch (_0x272dc2) {
      if (_0x5f1adc[_0x47fc4d(874, "JouG")](_0x5f1adc[_0x47fc4d(577, "@0Bk")], _0x47fc4d(750, "7)k3"))) console["warn"]("\u8BF7\u6C42\u5931\u8D25: " + _0xbc9f52 + _0x47fc4d(523, "#3D2") + _0x272dc2);else try {
        _0x8d4a78[_0x47fc4d(393, "9tUp")](_0x5f1adc["HUGLz"], _0x299199), _0x314115[_0x47fc4d(317, "*19I")][_0x47fc4d(597, "SD)4")] = _0x4242cb, _0x18e6a8[_0x47fc4d(250, "mXv]")](_0x5f1adc[_0x47fc4d(459, "*19I")]);
      } catch (_0x17f52d) {
        _0x4a809d["error"](_0x5f1adc[_0x47fc4d(697, "Wy9F")], _0x17f52d);
      }
    }
  }
  const _0x5a4ca1 = [...new Set(_0xdcd49b)];
  return _0x5a4ca1["length"] ? _0x5a4ca1 : _0x4641ab;
}
function _0x57a1(_0x3d4143, _0x5b184f) {
  const _0x5b444d = _0x5b44();
  return _0x57a1 = function (_0x57a128, _0x186bab) {
    _0x57a128 = _0x57a128 - 162;
    let _0x56cd6e = _0x5b444d[_0x57a128];
    if (_0x57a1["zAecvD"] === undefined) {
      var _0x273807 = function (_0x1ade65) {
        const _0x410fa9 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x39ffe9 = "",
          _0x21a53c = "";
        for (let _0x8075ea = 0, _0x5403c6, _0x1574e1, _0x5000e1 = 0; _0x1574e1 = _0x1ade65["charAt"](_0x5000e1++); ~_0x1574e1 && (_0x5403c6 = _0x8075ea % 4 ? _0x5403c6 * 64 + _0x1574e1 : _0x1574e1, _0x8075ea++ % 4) ? _0x39ffe9 += String["fromCharCode"](255 & _0x5403c6 >> (-2 * _0x8075ea & 6)) : 0) {
          _0x1574e1 = _0x410fa9["indexOf"](_0x1574e1);
        }
        for (let _0x101ce6 = 0, _0x221483 = _0x39ffe9["length"]; _0x101ce6 < _0x221483; _0x101ce6++) {
          _0x21a53c += "%" + ("00" + _0x39ffe9["charCodeAt"](_0x101ce6)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x21a53c);
      };
      const _0x165e34 = function (_0x4fcdca, _0x8d4a78) {
        let _0x299199 = [],
          _0x314115 = 0,
          _0x4242cb,
          _0x18e6a8 = "";
        _0x4fcdca = _0x273807(_0x4fcdca);
        let _0x66ccdc;
        for (_0x66ccdc = 0; _0x66ccdc < 256; _0x66ccdc++) {
          _0x299199[_0x66ccdc] = _0x66ccdc;
        }
        for (_0x66ccdc = 0; _0x66ccdc < 256; _0x66ccdc++) {
          _0x314115 = (_0x314115 + _0x299199[_0x66ccdc] + _0x8d4a78["charCodeAt"](_0x66ccdc % _0x8d4a78["length"])) % 256, _0x4242cb = _0x299199[_0x66ccdc], _0x299199[_0x66ccdc] = _0x299199[_0x314115], _0x299199[_0x314115] = _0x4242cb;
        }
        _0x66ccdc = 0, _0x314115 = 0;
        for (let _0x4a809d = 0; _0x4a809d < _0x4fcdca["length"]; _0x4a809d++) {
          _0x66ccdc = (_0x66ccdc + 1) % 256, _0x314115 = (_0x314115 + _0x299199[_0x66ccdc]) % 256, _0x4242cb = _0x299199[_0x66ccdc], _0x299199[_0x66ccdc] = _0x299199[_0x314115], _0x299199[_0x314115] = _0x4242cb, _0x18e6a8 += String["fromCharCode"](_0x4fcdca["charCodeAt"](_0x4a809d) ^ _0x299199[(_0x299199[_0x66ccdc] + _0x299199[_0x314115]) % 256]);
        }
        return _0x18e6a8;
      };
      _0x57a1["vCTxjV"] = _0x165e34, _0x3d4143 = arguments, _0x57a1["zAecvD"] = !![];
    }
    const _0x144e10 = _0x5b444d[0],
      _0x21c226 = _0x57a128 + _0x144e10,
      _0x554a4e = _0x3d4143[_0x21c226];
    return !_0x554a4e ? (_0x57a1["kNxddg"] === undefined && (_0x57a1["kNxddg"] = !![]), _0x56cd6e = _0x57a1["vCTxjV"](_0x56cd6e, _0x186bab), _0x3d4143[_0x21c226] = _0x56cd6e) : _0x56cd6e = _0x554a4e, _0x56cd6e;
  }, _0x57a1(_0x3d4143, _0x5b184f);
}
function _0x5b44() {
  const _0x86e16f = function () {
    return [...[_0xodW, "lyNOjdsKjEitgaumiJp.UcXofWFmPw.Gv7gtVMwU==", "WRlcImoeWPe6sSkQWQ3cNmk3W75lW7i", "xSkvWO86la", "WQpdSh9CW4y", "lqpcPZzA", "n8oVWQfXWQu", "y8kSWO00pW", "qfnOCM0", "WPnVo8oMza", "oJddJW", "tCo/WR0xWOVcLSo2ESkQWRhcMXhdRc7cGSoh", "ntlcOM1q", "W7NcJmkWWOr9wmkLW6SkWOxdSe0i", "WPxcSCosWRJdHa", "nIbotmoeCCkr", "W5jpbrW", "fZdcHqddJCkGWOaFWQCS", "WRBcQgXEB24pAvj7", "wmo3WQpdVHG", "WOZdREAjV+IHNYy", "mMJcQSkP", "WRVdKCkWgSkYWRhdUMLYW4O", "WR3OT53LJA3dIW", "WQhcUSo3WOq3", "W6NcGdG", "W6FdISojWOpcImoMW4ixmwehbSkEW4m", "W6dPM6JORzNKUjJLI77LRRxMI5ldKUw+U+wkLEI9JUw6ImkMCa", "W4BdVYxdRKm", "WRtdJ0fHW7m", "WQvcWPhcLSkp", "5PIL5PEo5Psc5OYG5Asq6lEP772j5lUa5yMI5yc75Q6K", "W53dQ8ogWRdcKG", "8y+RG+wtL+wiPcbhBY9+WRZdKCoolh3cUCor5lUT", "WQlMIzlOOyJLPj7OTRRVVklMNydOV57LM73POjtMN5BNMjFLKP7LUOZML5FMJi0", "vKDuvgi", "rarNWPH/", "bITSqCox", "C3RcKqNdOa", "ACoR5OMP5P2p5ysJ6zEX6kYD5BwX55w/5A+5", "ASkhW4CSfa", "WOddGhXDW50", "W4BdTCk7Cq", "W6JOTQFLJkPP", "FUI3PownL0C", "D1eSeSkpwq", "W4XBqNVdUa", "W4nWsLZdMW", "5PI05PwDWOi", "5B+J5yME5lUj55o55z2l5zYYoW", "5PYD6ikX5lUD5zcf5BQf5lI16iY25y+O56Ew5yMl5l265OgC", "W4bgr8k+ma", "goI1P+wmTxS", "AveXbCkuxXVdNa", "WQKwW7/dUa", "dUI1RUwpNaK", "5B+H5AEl5OQW6kcK5lIl5yQHW5K", "ANLYtuC", "WOGMWRVdIa4", "fSoWW4xdTa", "bmo0W4pdPLH6oG", "FLT0wNC", "WPHlyMLRkCkW", "CSkfW4W", "WRJcNuHRqG", "WPbCy3v4", "WOPjWQ7cL8kUW7S", "WRtcHCoRWQiP", "5AAW5Psz44k8", "WPxcJ8o7WP/dGt4", "ba3cHfD9W7ZdSsPk", "gSo0W4K", "WPBcGvDrr0WLxhbnumof", "e8okWPDIWQC", "562L5yIM5AEV6lw1WPaf", "l193", "qSkfWQq6dq", "5P2a5PEs5yAD5zgelSkY", "W6xdOCocWPRdP8ksWPtcOG", "WRZcRgG", "W7ldSX5zW50", "ymoAsCkvWPW", "ymkDxca4", "oZRdMZrVymoV", "WQlMNj/LOPRLIO/NPBdLIkJVVABLSjFOR7BMRRhMLRNcQxm", "W4rzacFdPq", "5Ro05P2b5PYI5PwHW5DOWO7OTzRLJ47VVzlOTiFOVPe7WOddK8k1qCou5PEK5lQA5PIi5PEq", "W5f/rG", "bGRcK1n9WQJcQSkTWQ7cJHrmW4/dOCoZWQP4W4rKW6BcVSkQe8ohW7ldUG", "CZTdWOvz", "AdldOr/cVSoWbCk7b3JdPb4m", "WRKFaq", "tCosWPC0WR4", "WQxcRCotWO3dNG", "WR7dG8kXo8kvWQtdQwK", "WPnLWQajWOjKWOPBqGRdHCow", "WP80W7FdHXG", "ns3dKtD6Aa", "W53dSmo+WO0", "6i+05y6sW6BLIlFMLPlKUl7NIOpdRowNU+I3ILWy", "W7ZdVa9aW5W", "W6tdN8o8WPpcGa", "6lAL6l+o5B6n5yQf6lEY5yYpqa", "W7hOJBRLJ44ZCM8rEfKO5AsV6lA077YX6zEQ6k6DWQRdJa", "DSoXtmkMCW", "e+ENM+wlGEAtP+E3OEs5MUwjGEI8GEw4PCo3wa", "W6LQwvBdQHNcTSoK", "WPHhqL5d", "WR7dP0z+W7K", "WReIWPBdQcHgqJrRWRxcJW", "WPlcOfbkxa", "5AEX5PAL44kG", "CSoYw8kFWRjzWP51pSkag8kwWO04W5FcTq", "W4BdVSoR", "WPtcNCoSWPeA", "wCkKsY88WRRcG8oMnGFdSCkK", "WRlcTCk6W43dGW", "jrpdOsvc", "W6VdVCoq", "WRqmacft", "54U45PY/5lIN5y+g6ys25lUJ56UU54Mr5P6U", "WRFNPAdLIBhLOiRLIO3VV6BNUyFNUj7KVlVNLOe", "nIxcG2jy", "qI56WRfL", "WRdcLCkEW5xdIq", "W7v6W6GXsqK", "txJcKIBdVG", "6kYw5Rgc5AEM6lwnW4O", "WQuKnH5o", "y+wKGEAvMeK", "WOxcLSk5W5xdJW", "ENlcSqRdKW", "WRqIWORdOG", "WPtcRmowWPhdUq", "mshcTxbnWRtcVmkP", "W5XCsCkppG", "abdcMbno", "BMaaa8kD", "W47cQc7dN8kt", "W6NdH8ofWOxcGa", "W6pcMCkoWRjQ", "WPtcMCoJWQxdNa", "WRLwd8oZCG", "WOWWWQddVXC", "W5TvcGxdHM0FW78GW5tdOIa", "oGRdVaxdGq", "W5NdJ8kveCoU", "gsFcM0LG", "xu7cMXVdQq", "adZdRdnO", "rs19WQX+Dq", "W6FdGmo1WQ7cKW", "WQxNRPhLIA/MIQRLIAnG5B225yU05l6S6AgTvqy", "4OkN4Okv4Ooj4OgD4Okj4Ok+ubuA5lQF5yUG4Okz4Okd4Ooe4Oo34OoS4OojWPG", "D8kDyca6", "aSo+W5JdU0vfjGbEhSkAeCoH", "W7/cM8kJWPm", "WRvMWO3dJ1VdLCkUeL88WR8", "usb8WQDJ", "uUAEU+wGR+wiTEENNUwiK++9MowXSUIVRoATJEAwJ1JcSG", "W5rYxSkE", "6i+H5y6j5lMl55gb5zY+5z2h5AA76lwwWOK", "W7nyoGhdJG", "WPZcQSk4W57dOq", "DSkIrs8sWRpcUColoae", "5BYm5yIP6k2V5Awx5lQF5y+j6yAF772C5lIe5yUu5yc65Q6o44kT", "WP9mlSoUtq", "W6XVW68mvq", "WP3cM3L8qW", "W4VcJJldN8ogya", "WPFdIhLDW50", "umk7W6OTmW", "WQpcUetcPrVcQ8obWQOLW71N", "WOPdWQC", "W7NcImk4WPj3rG", "lLpcSmk5WO4", "WQ/cSmktW5ldQq", "6iYX5y+yWQKruXeeW4Ob5AAG6lsAtCkL", "jMRcJCkTWRxcIGpdVG", "wYn0", "vCkVtq", "D1SL", "W7hLJOKtpLhOT6RLJRlOJOZLJjxLIzFNMR3LV6/KUyJNI4O", "ccRcMery", "FmkIWQi", "WPDz5Pkh57A/6k6f5Rc95AAj6lwhlGW", "W55PW5eHtq", "psNdUqb4", "W656W701bLvoW4ziW79yfSo1umohaMVcISoZrCk6vSolumoOedjnjSoNmHaN", "5PYx5OUU5yUK54IX5P+t5lYN5OoR77Yz5lI25yMI5ykI5QYa44kD", "xKeDWPJcQW", "5B+y5yQK6lEW5yYboa", "jvL8n2ZcSG", "WPVKU7lLIlpVVRRLMlZKUQBOTiBLJlBLPQRML5tJG6y", "WOXE56Y75B+laq", "nY/dVs9l", "WQnNA0TI", "W7hNPPhLIBtLO5dLIOhVV4dNUQlNU5BKVRZNLy8", "WO3cJSonWPqQ", "W4hLJ7FcTHJcGoI0PUwmJUIoNowpTEwjK+AuKos5NUElV+wMQUI0MXjP", "DSkHWQO4dW", "WQBcI8kEW53dICkXWOzr", "b0nelwG", "WQywW7W", "yLupWPNcQa", "5P+O5PwiWRyyWOdOTkBLJi7MLzVVVlK", "x8o5WQldJbe", "lSokWPS", "W7FdSt1cW4S", "WOvHWQmj", "WPtcVCo4WRKL", "bI7dOsb6", "rHtMLQlMSQdOJyZLJ6FLVlVLI7tNPi7LI7lVVjROTPNOVkJMRyJOTzpLJk0", "6kYM5Rc85Awd6lwRgW", "WRyWjdrf", "nXhcPM1M", "ccFcN1H7", "4OcB4OcF4Ocu4Oc24OcH4OogxComWRtKU6BLIPZIGiZIGOBIGk3IG4RIGlVIG7BdJG", "WQi2WQRdTHu", "8kQ7N+s5I+ErGEwCVUwDHW", "f+IUU+AXKEwNUEI0Tci", "W5xdQHBdPKJcMmka", "WQTsWOeRWPG", "laFcN2LGW7O", "CxNcTZ4", "W75VW6hdO8kf", "bW/cTbjI", "h8oWW5i", "W7NdMIz3W4e", "mGBcRMnM", "W6hcLrxdJSkz", "y8oHEmkwWRPiWPXP", "WPKIWR3dMW4", "WPDDWPdcNSk7", "WRFcNCkEW6ddGG", "EwHtDem", "eJRcNK1I", "DUwpVSk/WRJcPoI3NUwoL+ImOEwoOEwkSEAvGoEyVUwlNEAwHUs6SoElIq", "W7/cLSkzeCklWQtdS20", "uCoLWQqlWQK", "gJtcMIH8", "iJjIw8oB", "W4fBgGi", "W5/dRSk6", "wCkQsG", "6kYM5z+L54635Akq5y+E6yEp5lMx6k6J572zke7dKMlcPIhdLCk+WPRdP8o1fSkSW6BcK+wsRCk0W57dNd7cLCk9FqFdO8kaxedcRSk3WPDKW7ag", "e3hcKCkSWOC", "WQ/cU8o7WQyS", "nvf8", "nCoDW6NdGeK", "W5iyW5tcUqS", "DJldQqRcR8oR", "5B6Y5yMn54QF5P2e", "o2ZcRCk7WRxcNWu", "WRdcT8kcWPhdI8kJWRBcIWy", "W7BcHZldGSkz", "ovG9aeFdRmkRkrtdHNpdL8oBWPW/W6RcHgFdJCkMW6dcLwOrWReaFSk1qCkOnuRdVmkCWQhcJHxcUSolzH3cTmkWWRVdPYZdLW", "vSkQrsC+WRZcTq", "W7eYW63cMWZdPSkSiW", "W7DGtq", "WQ5YWOiUWRK", "W7n7xLBdTK3dQSkUWOdcQMFcTa7dI8kvWRvQWPLygSkrwCktW6mXW6lcPXBdM01LESojdmoGWPa/pCkcWPO", "oZ7dKa", "WRDLWPFcSSky", "dMeIW74", "W5nYxSkCeW", "5OUq5PY16k6u5AsH"], ...function () {
      return [...["WQjJDhf7", "6k+m5RoJ5AsT6lE5bJe", "W6VdQ8oeWOFdSSkqWOm", "WRbjWRdcHmky", "W7BdPqe", "W4RdMbv9W4u", "BHhdPJZcNW", "eYRcOqxdTq", "W5BdS8kVjSoV", "WQyCW7xdUGyx", "W6i/W7NcQrS", "oGFdHe3MK4FNTQhKUPBLIyxOVQJLURhcTvS", "WP3dHhvVW7fHcfJcIJq8", "W7pdRGpdTq", "dCkGW65jW4/dVmk0jCo3W7pdJLJcR1pdMCkpWQu", "tmoHWOqxWP4", "WQBcV3fNy0ytCvjBz8o/xG", "EN9MgG", "WQ8lW6NdSGa", "W65AyW", "vSkBWPuLeq", "WRiWW6JdUt4", "W7NdOmkUdSoV", "WRdcGCk1W57dLq", "pN3cQSk4WQFdGK/cUrVdRSkxW5pcHbG4W6ZdTSoGW6q0WR9ZWQhcMrhcSspcMZddNJ9MWPRdLCksnc5BW4hdIIJcPNNcU8kxW5NdVd5vWOKUb2pcO8kKW4BcUXWSCmoVi8o7gx9WWOjLW47cRG3cJ8kcW6mmnKz3vCkSW7KK", "r08LWPtcOmoaWOZcV8ohWQWmWPnJhMWNWPr9", "cgJMIyZOOAxcLG", "W5/cJSkfWRPi", "WRpNPBdLI5/MKkRNTOZKUPRLIR7OVjlLUBv7mW", "5PM25AsV5lU/5yQo", "tCoLWPldQbBdHSoSt0fa", "W6aKW4RcUJ4", "W5hcPZVdJCkn", "WPnLWQqyWP9UWOPo", "WRWnfq", "iCocWPzZWPKTWR7cLa", "EZtdPaJcQmoWmSkqhhZdQHu", "W4PMC2VdLq", "W7P/wKRdRbtcPmo1WPVcOh7dUHBdNmkjW7u", "vmkbW4y0eG", "W6pdVmofWPVdOq", "WQ8MWPBdQZnd", "kJlcRdLt", "W5HNxSkpceGUnSoHbuGboMxcHbJcGcVcN8kTcCouogisW78", "p8oPW6xdThu", "W5NOTjpLJ7mp", "AKOEWPtcMW", "6lES5y6oWRS", "W6FdQmo4WPNdPG", "xLjXwLS", "CNupWPpcLq", "qCo+WOtdSXpdGCokxKvbWQ0M", "W63dNshdLLG", "W6aHW47OT5JLJPRcTa", "W51gz0/dQa", "W59vwmkpha", "W43dTmo4", "hulPM7tOR7xKU6/LIlpcMq", "WQ9Ycmoeuq", "W6ldU8oAWOq", "o+ETIUwjSUAjPEwjPbhLVlVLI7tKVRJPOAKSsG", "zePwzem", "qmo+WOe", "W6FcHSkX", "osVcMajT", "6lAq5y+nsa", "qEI1SEwnSe0", "smkJW4m", "f8oJW4pdUKm", "hSo+W5y", "wmo+WRxdRG3dJCo3xa", "Bmkgzq4KWQVcOmormGtdP8kPW7JdGq", "WRyBbG", "CeOkWO3cRa", "o+AqIUE3VgRcIG", "zW9mWP1cxCotyxGkW559jG", "W5tdRCkYk8o8W4yker8bl8o5WRJcSSkmWPFcQCoHWOnmWO53", "WQuoW6pdQWa", "mYrerSoe", "W6VdOCovWP3dV8ksWRxcTapdLuXd", "lsFdRq", "jttcGXn2", "C8k7WPu6fW", "FSoOrSk1WPe", "br7dQsLQDCoLgSox", "WP7cTfvDuW", "W4rjBSkVfa", "6lES5y+3wG", "WOBcUSoHWOOE", "xSotBSkZtG", "WPJdS2vfW5m", "k0rKm3RdUSo+BL3dKJNcHSkhW4fGWQhcIdxdKSo8W77dMd1qW7S", "WPLbDG", "W5DkgoI1IUwnNsG", "qmoLWQFdNJK", "EMlcQIldG0DADID2", "W7ldIbVdHu4", "WPzbF3LRoG", "W47dSmo/WOVcImoFrr/cHG", "WRWCW6NdRHSqW5y", "WQDHgq", "5lQT5yQO5P+06ksR6zEv", "EvZcSZZdNW", "W6NdICoVWQNcUW", "qCkJW5mpj8kOWRxdUxe", "W4RdPCkkcmon", "W4vuAuBdUuCjA1FdUCkMW70ms8oge3lcPmowW4lcH8kop8k0WRJdTHFdO1C0xKddRSkY", "WQzVhq", "5y2n5A2x5Psg5PEs772Z5lMF5yI45ygN5Q2g44cX", "F8oTta", "nWpcG2a", "bNdcKSkGWPm", "W6BcTt7dQmkm", "5lUx55on5PEj5Pso772C57Ix5Q6Y5Pgo5lYl", "WQCtWRtdVYi", "W49nW4pdK8kT", "WPpNR7/LI63MIzNLIilcIUw9TowiVEs8OEMJUxVcRq", "5B6q5yIo6lEE5y27zW", "5Rk65PY95P2l5Ps955M/6k6o6zAg5lMD54QT77+46lEL6l6T566r5yIC5zo56zUF6kYj5lUB5yUGW4FcG8o7", "566/5lQl5Q2w6l+M6koI772T5BYF5Asc57Ic5A+B6k6T5AAA", "DCkKW7aYpW", "g8o+W4NdUv4", "z8oHWQddRJS", "sCkTW4C", "WQlcJmooWOiXwSkN", "hMtMIOBMNiNLHzhPL7tORilLTl7NL6lLRAm", "W5nuhG", "W7/dPba", "W5pdGJVdNeS", "qtT/WQLf", "bWFcSb50", "WRBcImoqWPa2vSkS", "54QU5PYa5lYH5OkF5OUm5RsB5Okl5PYi5OM65yM1", "FXHhWPHosmotCweu", "lItcSsH6WO7cQG", "W5dOT4/LJkhdLG", "z8ouWRWoWOK", "C0a2bCobhKFdM8kiWPPXc8kFrvVcOSklttJdH8ovWQZcKCkIWPNdQgddQsVcLmoLWQ4EW4VdTq", "mWVcTG", "wIGMWPD5ECoYvG", "W4tdTmo4WPtcHCoctYtcJaVcUXqWWOCpvc4", "DCk6WOWIjq", "uCk5wYKI", "WQ8SWP8", "W6HABue", "c0Pjjga", "WRRcR8oXWPuR", "ucLN", "WQRcJSo1WQZdJG", "s+I3Q+wmSNC", "mvTIou4", "54Q95PYc5yYO6ywxjUw9JUwKNUs6QEwlLW", "W6tcMYJdImkM", "WR0rfq", "W6n8W7SQtG", "WRZdG8k7dmkoWQG", "WRNcUwXJDtPvmKD6CCo1e8kbf8oNWO3cT8ocW4eJWO7dK8ohr8o7W6hdVLlcSCkywYRdMCkGDNtcHCoyWRnoW5n9W5vgWRqKcWtdVZRdTSkYBbudWPqShs95", "y+wSP+AlQoAVM+AuRos6O+wjRmoC", "6lEa5y+BW6a", "WPOiW7BdQsi", "BSoZWPFdIby", "WOtcRmobWOeX", "ncdcSdu", "wSoeWO3dLXO", "WQlcUe8pWP1tkmo8WRClACouWOen", "r8ocWOi7WOO", "5Psm6ic85AwT5AYL77Yf5lUn6ioQ5lMk6zEb", "DEs5OIe", "mdpdHYH8", "ucfXWRP0", "6Agw55MmW69i", "WQmFhcPoWQe", "cLfjnNK", "5P2P5OUv5yUi5y215AYp772u5lI25yMD5ycc5Q6J44gz", "WPRcHL5Irq", "l8oeWP8", "W7pcII3dICkvl0S", "5lUy55kN6k+R5RkE5OIS5yQoWPm", "WPlcV8odWO7dMa", "W7rBaqJdN1WLW78dW4FdIsFcRW", "hZ3cO2TLW6FdNdzkWPuYl8oca2OlW7qGuCkcWQq0W5XffSolgqj4zh0Ha8kZWP7dNWO", "chj8kwS", "WQZcGSof", "WRrOyfH4", "W5CjW6JcTHW", "la3cLG", "WPZcS8kWW5/dQa", "5PQg5PsHWPe", "WQSEW5tdPaS", "5lID5yMA5P6W6ksi6zA1", "fmoWWPDsFmo3W63cVxFcIs5qhx0", "isxcQMfmWRNcQG", "W7S5sSkBeN95DZKDcIXl", "5PYr5OUF5yIS5P+v5Pw055QvW4GDWP7OTQhLJ5xMLQJMJkhVVBFOTiROVRtLPPFNK6C", "q8oawCkssq", "56+65lU55Q+q6l2Q6ko377+y5B+15AEP57Qe5A6X6k+d5Awi", "W6BcImk1", "yMPW", "6lss6l+h5B6e5yIL6lEw5y+3W5K", "WOGCW7RdRXCnWPG", "WO3cOSoGWQOtFmkDWQFcU8kDW4DXW50xgxrt", "W5X8tq", "W5xdRCkYjSoV", "W4pcOWVdNmkp", "cYNNRPFLVy3dTa", "W4ZdLcvtW58uESk6WQCxDSoVWOy8amk8mX9GDMtdPYu3W6lcQJ49WPZdK0lcV8oecJNcSgi", "hSo0W5/dSKv9", "mYxcOLnwWRVcVCk4", "5y+x5A+86AUK6k6T6k2D5Rgk5Aw96lA/EW", "W67dSSkwsoAtVEE3P+s5OowkVoI/Now4NW7dLa", "EYFdT+I1I+wmRmkJ", "q8kIWOi4cdJdTCod", "FtldSW", "W6uWW4RcNW", "WPJOTAxLJi/cRa", "WOnhamopBq", "WRfXWP4pWOq", "WRNdJ8kFbSkY", "WRnHWORcQIRdUSkhmLK", "mowmUSkKjW3OTzBLJA3OJidLJOJNM6FLV6JKU4dNIAlLPzZOTyhcIcO", "W4ZOTQNLJOdcTa", "W5DHW50atG", "WPTbzxnSnW", "fCoHW4pdR2G", "6lAm5y2MWQW", "6ls85y6G5AA25PsL", "5PM65zgU5A6N5OI5WOW4", "W6RMLOFKUOZLPPROTiz0", "W4NcRHhdQSkR", "W60Z562J5B26wW", "WQZcGSodWOC", "W5jBha0", "5PYW5OIP5yQ35P2K5PAt55Ihdmkua+I0SEwnUoAuI+AmJo+9JUI2MEI8L+wMOUEtPa", "W4PNW4SMAW", "WRGNeYzB", "W7vezmk9lW", "W5ldMmozWPxdLW", "W67dUSodWOtdOmonW4NdVG7dIeHcW7ZcQ8obW6aVuWPRW40IdSoAsYPCEmkArCkVWPKMW5NdI8kUW5NcSmoNwCkXWRCiWP9PW6VdM8oRiK/cGghdR8kNW5/cL8kcWRJcUcr9lCovWRxcV8kqw8oIWRD9pCkcsW", "5B6Q5AwA55U35B6256+gWPa", "WQpdG8k2", "g+I1HowmHI4", "v8kJW44dkSkQ", "W6xdQHhdPKJcMCoiWQWWW4zAcCoX", "v8ooEW", "W4fGW5ekzG", "smkJW5a", "WRnNxhnN", "D8oDWOivWQ4", "WR4qW6/dSrC", "tCo9WOO", "jmo9W4pdLKG", "W6ddSmo/WQtcMa", "wmkKtG", "lYVcOq", "W4LfW4qODG", "W7nTjI7dVG", "WOqcxv3cMJGwW4W3W7ldRde", "W7VdUSofWPlcHa", "f+wVGoAiG+s7VoAxP+s7O+wiOb4", "54M75PYm5l6i5Oku5OUv5RsP5Okp5P+W5OU95yU9", "5PwR5Rc86i2H5yYG5PY05zYBW63dUt/cQCk75zYy5zYM77+d5lUZ5yIm5yow5Q+x44o7", "W5S5W5FcLHJdNmkGpW", "W67dUSodWOtdOmonW4NdVHddGLHkW6ddOCoEWQC7x0PVWOWStSoy", "6lEW5yYoW5e", "DCkGW4yEcG", "wCkKwYmaWQ3cV8oUoahdU8kJW6xdHG", "WQT1WRKlWPm"], ...function () {
        return ["hSkl6zU96k+V5lIY5yU55A2b5OUSFUw+KUwiLUI/R+w5VJr7", "A8oDWQNdMd7dQmogEMn2WOaA", "Cx3dSw9tWOdcG8kIWQC", "svtcPJNdJa", "WPtcJColWQtdLW", "5Pc45l2Y5OIb5yQf", "W6pcNCkIWOzReCoIWPSwWP7dR1GeWQzMWOpdPCohWP5cW7FdSa", "5B6B5AEe5OMn6kgQ776j5yYw5AYd5yUO5l6R5l6W55s45Q+05PsmWPu", "5PMN5Ps75Awg6lstWPq", "WQSJWQrOevDmWOKmWRWswSkOfmoevZ/dISkNrSoVaSkCuG", "ymkaWQ0ana", "W60+W5K", "efneahO", "gSoLW4xdPuiVE0bAaSoramo7rmoqlCoKgwWdCaCaWQ/dPvKzW6SIW41mW4ZcP8opWQ4JiH0mW54tWQbFtmk4", "WPhOTkBLJO3cIW", "6AkV55QIkCoO", "6k+S5Rg25AwZ6lwqW4er", "aSoYW6ldSfbNnWC", "WPfVWR4gWOrqWOTerbBdHCojW4a", "dar/x8oH", "WOrGpIRdRg41", "yb3dTJtcGq", "W6tdUmovWR7dQG", "W7JcNCk3WOjTwa", "DmoxB8k+WRO", "AwnAu3C", "WRuFbI8", "W7e+W43cIG", "WQhcMmk2W4JdIq", "WORcLmo9", "ngdcSmkV6iEo5P+u5O+i6ykx", "W6HOzLFdVW", "k8okWOS", "W7P5gaVdRq", "F3FcQJe", "dL9QkMxcRmkWBHRcMx7dH8oDW7j6W6hcJJpdI8oOW7ddTqyDW6vEFCocomkZeX7cOSkeWQlcMvdcRmoqb2FcR8kaW7BcP27cHmkBW5RdSgnPiGPmwb9RECkFWP1IgSkkWOznWQmyWRaFW5FcHSkeq8kPWRjGDqOAEmkyWQxcR2/cTcBdGstcVCoawexdI8oLwmk6vcRcUMtdOchdQ8omD8oizqZdMYRcLcldT8ovW6/cUSoSd8kGrmoAmvDo", "WRupcGDY", "WRCOmX5O", "W5eFW7ldHSoSW5ZcNgPrj8oG", "DMinWQNcHa", "6k2X5Rgm5y2y55wA6zsL6k6vwW", "W4KfW6RcRJldHmkDbgyX", "W6FcJmk4WPfSqW", "5B6t5yQGW6/cOHZLNiNLNOldIa", "WRRcLSkw", "FCooACkTFW", "W4LhrwBdTW", "WQhcRhXaCMeiAq", "W4ldOmkBaCos", "WR3OTiRLJlFdKa", "W4FdSCkto8ou", "W5iDW7ZcVZG", "W5ZcJmk/WRr3y8kIW4a", "amoWW5/dSv54", "WPSpWOddRWi", "WQldJCkY", "W5RdSSkcpmoZW4zieXmbjq", "5PUh5PAq5Psz5O6v5AEY6lAe77+S5lIH5yII5ykr5QYA", "WRv1WQFcG8km", "DJJdOa", "W4VdNHHCW6m", "owbxdu8", "WP3dI1L2W6i", "qmkSzsGQ", "WOlcUSoyWQxdRa", "W4hcLYefWQK1vrZcJsedasZcKW", "AmkaW4eDnG", "WRTikmoesq", "gsBcLtFdMa", "W6dcQIBdQ8kF", "W4dOTkNLJ50g", "W55NW6q", "umoXWRC", "WQxcJCkqW47dJSkN", "qSknwbC3", "5BYp5AEayvjf6zUx6k+r5lMs5yM3mXm2", "kmoKWRjzWQq", "D3NcUq", "W5DMW7u", "W7/cM8oLwmoqW7tcQvzpW5bxWRKp", "WPrFWQ7cNmkr", "5Rc65PYg5PYJ5PwU55Ib6k+i6zsR5lML54Q+77+d6lEJ6lYs56Yc5yQF5zgQ6zQE6k+Z5lIl5yQxu8krfa", "WOXUWPGUWOi", "W6fRW70", "W4FdSmo4WOdcGG", "WPncFNv4", "WQTtWOuYWOm", "W6dcNs3dLCko", "WOrfWQ7cL8kXW74", "zmoTACkMWQW", "lZtcSILn", "6kY95Rgc5Awl6lAo77YV54U45Ogk56c9s1q", "DZBdVW", "oZLNxSoJ", "mWhcVZFdPSky", "W6bOW6ldHUI3UUwnQWa", "qK7cJItdRa", "B+I3REwpNMy", "rSo+WO/dTa", "WPPd6k+e5AAS", "cYNPM5VORlpKUk/LIzNNRyZcTG", "WPtdHgjr", "WReIWPBdQcHg", "W7jABuhdQ34yzutdOSkSW6aGvCoggW", "6lAJ5yYyFW", "5lIQ5yMS5PYY6kEW6zsh", "c3/NR6hLV4iU", "fCohWR13WR0", "WQFcULj5Da", "5y6V5A2K5l6Q55wa5Q+a5PA15lQw6lAU77Yl5lMc5yQv5ykO5QYx44kr", "D+I2T+wmKCk6", "wtPCWO1H", "W6TNW77dM8kD", "WRJcLSkfW5pdNCkT", "fSoEW4hdKv8", "FYxdTqlcQq", "W73dNCocWO7cQq", "W4bVW6u2wq", "rbX7WRbM", "CrVcLb1DWO/cTG", "WRxcN8kBW5VdRa", "W61QwfxdRbJcQW", "WP/cOEMxHoIUPSkNWOO", "WPVOT4VLJzxdGW", "WPRdQ15OW6m", "nsdcRG", "WRNcUwXJDtPvmKvTACoWt8kxaCk+WO7cRmoiW5v9WOhdNCoEdSo1W6pdULpcU8kutc3dHCk2A3VcN8kqWR8", "W7tdQ8orWOBdTSkeWO7cJHBdIeroW7W", "DUETT+wlRUAlMowjI8oy5BYZ5yUB5lYU6AcCW4RcMG", "5PU75PA75AsX6lshdW", "sSoXWPmlWO0", "hEwMOEAwNhm", "WO1VWRa", "WOFcI8oQWOFdNs7cHaRcGGddRJtdK2HrWPvTWR3cGCotDvXjzmkdW47cUW44W4FcKSoTWOW", "W7pdNZVdP0G", "WPBcLmoZWOxdGb3cLXhcJb3dPwJdMaHhWPO", "6lwL5y2CW5G", "asdcRafQ", "jMBcRCk8", "W7ldUWDAW4CcFSk9WROUFCkYWOuPbSkX", "WPTbzG", "5y2C5A2w6AMy6k645OUV5yMz776i5y205AYl5yQQ5l6N5lYD55A35Q2c5PAtWOu", "WRhdVrldSetcMmofWPaWW7zehSo2WPW7W4FdKgxcNSoDW6noW4hdLmo5omo5nsCJfXdcSgZcMmoKW4XFhN1tWQqRWQi+iMRcSbhcQ03dPJVdKbFcM8o2d8oiW5pdHqxdHCkqf0elvajmFvZcTW3dOmkEialdPmosFchcS8kbW6Dd", "q8ogWOpdTa0", "osDm", "DmoCWO4CWRO", "fYNcGX3dUq", "W6PHW64", "W6hdTsiJnJPklq", "W6HYySkpoG", "gc/cVuzGW6BdIrDBWRiIomoyeq", "W7ezW5FcNae", "yoI2H+wpQ8o8", "WRy2WQNdQIa", "zdNdQSkCWPpcLIJdRXa", "iCoHWPv4WRW", "icZcP3jJWQ4", "W6xdRHNdSelcHW", "WQrch8ogyG", "WQuVWPFdOZu", "x08o", "s8oct8k5xwpdIGu", "W7FcSEAEPUAkNEwlMUELN+wiOUs+JoAcJq", "WRiRWO7dPIq", "W7fxuhJdKq", "cgJPMk7OR5lKUy3LIRNdNUESTEw+Vh4", "WR3cON8", "umklW6mHea", "W7rVW6CHuXC", "meRcQ8k+WOe", "xmk/xtyJW6xdV8kSjWFdVCkOWQxdH8oVdKRdO8kfamo4kNCjzfFcImkRWPddGYVdMLxcR8k+CWnhW75kB8oitSogW6GorSk5uCkk", "WRXii8o4wq", "xCkNWOa9lG", "W73dOb7dUG", "WQWvW7tdSGa", "yhLPrvZcVa", "gcdcSIVOTl3LJj7dRW", "5PQ35PE05PA25O2U5Ast6lE/77+d5lI35yMR5ykZ5QYe", "WP3dN1jwW6u", "tSofWQhdLqK", "W6xdOCotWPe", "jdxcScPA", "mJ7dNcy", "umoXWQq", "W53OTQJLJyddLa", "kWhcOgve", "AmoCWQddUdO", "W6RMNzpLOixLIl3NPP3LIBNVVRtLSB/OR4hMRi3MLQHVCq", "W6KaW7RcHIa", "W6FdVSoh6lEs5y2KW5C", "5B6B5AEes1BdTEESIEwlTEs5UUwjK8oHpSo7", "W6tdHSkyoSoj", "W5RdTSknjSoy", "rmoLWPldQGZcNSk2fezAWQaPnmo6eXpdN2nJbmoZWP8dW79aW64+j2BdLSoEW5pcISowrgJcIq", "6i255y20W7xLIz/MLzhKUkhNI5C95As26lACdSou", "W6FcJJpdM8ksi0a", "5B6t5Awa5AwZ55cW6lAi5y6wpW", "6i6S5y+I5lQH55gZ5z+l5z2X5Awz6lACW5S", "bdhcOr5n", "WO5yWRtcGmkPWQNdIW10n8o7WQjZW7PowCoEtCkqdSkPWQxcMmkSW4ZcS2/cLmopvCobohJcHbtcT8kfWR/cLmklW5byattcUSo2W5fFW6tcQmo9W7ZdGmo6W7nzW6tdRmoZumkj", "6lss5yY8cq", "5P+K6igF5lIB5zkL5BM15lUO6iYS5y+l56EO5yQ/5l+v5OkB", "yKuCWP/cGG", "W7vPu1pdVq", "tSoGWRGqWOS", "cgJML4VMS7ZOJihLJ47LI6pLPRFNP5BLIzJVV7JOTQxOV5ZMRR3OTRtLJi8", "WRpcI8kdW5xdIq", "xSkX6zAO6k26cZu", "mdPzrSoe", "5lIT5yMyW5e", "W5BdUrtdHum", "yowLUoAVKoACPowIIUwiSUELLUwjG++8SUE4KoACIos6PUwiIG", "W4nJrSkwdW", "k8osW4NdNf4", "W6RdOCoq", "capcGMyUWRi", "5AEu5yQe56ER5yIPWQuo", "WQWqW7FdQrCn", "mCokWPzWWQy1", "WQqMWOW", "5BoK5BMA5PIc5A286icl6zUW5OUf772E5lM25A6A5ysE6zMJ5lUa5y+j6l+L", "W4FdSmo8", "W6xcJmkIWOf3wCkMW70qWP7dVLOaWQ5RW4JdUq", "6k+O5y2u5OI96ksq5P2lgG", "WOVcNL5XCq", "WRmFW5NdIWO", "55U+5BQ25lQT6yAQ5PYG77+l5lUu5PwU6zQR5ywI5PIk", "rfeEWO7cSa", "WPFdGgi", "5y6I5A6f5Psy5PEe5OMr5PYb5OM+5yM955UN5yAJ5PAm5O+bzq", "fcRcOH7dNq", "W5FdOmkPka", "dEI0R+wmQCoO", "qJ92WRPcBmoGsKW+", "5y6u5A+O5PEX5Pws5OIC5P2K5OQR5yMI55Qo5ysr5PsN5OY5W6m", "jYxcSMe", "Ch4famkm", "iCk3eSolW6OjWO9tl8kwemoJ", "WOZdREw8MowNMowKGUEqHLqZgq", "yM5ZuvtcTu8", "WRNcUwXJDtPvmKvTACoWt8kxaCk+WO7cRmoiW5v9WOhdNCoEdSo1W6pdULpcRSkusdFdHmkNEhhcHCkFWQziW4OR", "5P6z5OU/5yUT5yYO5A2B776M5lUC5yUr5ycK5QYg44gd", "wmoaWQFdRZu", "5PI05zcW5A2s5OMaWPaf", "W77dQHq", "WQtcUeuaWPGUz8kbWOyJzW", "zSkoW7GebG", "aCooWPLMWQWQW60", "W6pcGHNdVCk/", "fCo0W4u", "ASoKWOyoWPi", "jt1yqq", "W4FdVSoUWORcHSovDWJcGW3cVq4", "WQbcWPqSWRvgWR5JAI7dQ8o2W77dLxf4ger4WORcPCkRiGz0WRv8m8ohWObYWQWslJ0u", "WRtcTSkcW4xcO8ohWRZcHXtdS0js", "W7pdUSorW4W", "gsdcHWXs", "WQ3dJSkelmkP", "wSo1WQa9WP7cSSoH", "BvCri8kn", "A2P0qW", "W49rW7ZdHmkg", "W59OW6BdLW", "WOqpuvtcMZS8W4G5W5/dPbi", "u8oewmk5ua", "WQyXWORdOZu"];
      }()];
    }()];
  }();
  _0x5b44 = function () {
    return _0x86e16f;
  };
  return _0x5b44();
}
;
function shuffleArray(_0x3289bd) {
  const _0x28f821 = _0x3aa276,
    _0x599269 = {
      "HMRMk": function (_0x2cecdf, _0x427667) {
        return _0x2cecdf - _0x427667;
      },
      "saHcB": function (_0x4f2fc2, _0x2a7f35) {
        return _0x4f2fc2 > _0x2a7f35;
      },
      "YCXWp": function (_0x3cd39b, _0x2586dc) {
        return _0x3cd39b * _0x2586dc;
      },
      "zBSvt": function (_0x4b029a, _0x421bc4) {
        return _0x4b029a + _0x421bc4;
      }
    };
  for (let _0x63984f = _0x599269[_0x28f821(462, "SD)4")](_0x3289bd["length"], 1); _0x599269[_0x28f821(587, "V(f*")](_0x63984f, 0); _0x63984f--) {
    const _0x1529de = Math[_0x28f821(780, "V(f*")](_0x599269["YCXWp"](Math[_0x28f821(484, "y9RD")](), _0x599269[_0x28f821(195, "AS)4")](_0x63984f, 1)));
    [_0x3289bd[_0x63984f], _0x3289bd[_0x1529de]] = [_0x3289bd[_0x1529de], _0x3289bd[_0x63984f]];
  }
}
async function performSearch(_0x1929ea, _0x5770ff, _0x296c3f, _0x4551d4) {
  const _0x53bb9b = _0x3aa276,
    _0xdf9f94 = {
      "ubiyt": _0x53bb9b(890, "mXv]"),
      "IdYaJ": _0x53bb9b(844, "F11s"),
      "ibVkw": function (_0x3f0d2c, _0x43ac25) {
        return _0x3f0d2c(_0x43ac25);
      },
      "apUhE": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "WAYoZ": _0x53bb9b(836, "HcSA")
    },
    _0xc375b7 = _0xdf9f94[_0x53bb9b(703, "F11s")],
    _0x1a2aee = {
      "q": _0x1929ea,
      "qs": "n",
      "form": generateRandomString(4),
      "sp": "-1",
      "lq": "0",
      "pq": _0x1929ea,
      "sc": _0xdf9f94["IdYaJ"],
      "sk": "",
      "cvid": _0xdf9f94["ibVkw"](generateRandomString, 32),
      "ghsh": "0",
      "ghacc": "0",
      "ghpl": ""
    },
    _0x334c02 = {
      "User-Agent": _0x5770ff,
      "Accept": _0xdf9f94[_0x53bb9b(775, "Wy9F")],
      "accept-language": _0xdf9f94["WAYoZ"],
      "priority": "u=0, i",
      "Cookie": _0x296c3f
    };
  try {
    const _0x392b69 = await axios["get"](_0xc375b7, {
      "params": _0x1a2aee,
      "headers": _0x334c02
    });
  } catch (_0x4c2f7c) {
    console["error"](_0x53bb9b(413, "QGE#") + _0x4551d4 + _0x53bb9b(765, "r2tM") + _0x4c2f7c);
  }
}
async function getBalance(_0x3f5dee, _0x24bdb7) {
  const _0x1ab9b0 = _0x3aa276,
    _0xa578cb = {
      "QkIqn": "00:00:00:00:00:00",
      "qPtxB": _0x1ab9b0(329, "#3D2"),
      "AENsD": function (_0x3b76d5, _0x32801e) {
        return _0x3b76d5 !== _0x32801e;
      },
      "EbRmd": "iwPoE",
      "vwlaT": function (_0x3d27a6, _0x2ad6f1, _0x244846) {
        return _0x3d27a6(_0x2ad6f1, _0x244846);
      }
    },
    _0x4d1f4c = _0xa578cb[_0x1ab9b0(641, "L(FN")],
    _0x488172 = {
      "Cookie": _0x3f5dee,
      "User-Agent": PC_USER_AGENT
    };
  try {
    if (_0xa578cb["AENsD"]("rkrzG", _0x1ab9b0(199, "HcSA"))) {
      _0x3199f8[_0x1ab9b0(764, "V(f*")]("\u4EE3\u7406\u65E0\u6548\uFF0C\u7EC8\u6B62\u64CD\u4F5C");
      return;
    } else {
      const _0x158c88 = await axios[_0x1ab9b0(261, "pZMz")](_0x4d1f4c, {
          "headers": _0x488172
        }),
        _0x48a561 = _0x158c88["data"][_0x1ab9b0(770, "Zwjr")](/"RewardsBalance":(\d+)/);
      if (_0x48a561) {
        if (_0xa578cb[_0x1ab9b0(627, "bPzX")](_0x1ab9b0(508, "QZk^"), _0xa578cb[_0x1ab9b0(742, "$sq&")])) {
          const _0x3151da = _0x47f8a5[_0x1ab9b0(538, "JouG")]();
          for (const _0x37ffa3 in _0x3151da) {
            for (const _0x13d3d1 of _0x3151da[_0x37ffa3]) {
              if (_0x13d3d1[_0x1ab9b0(288, "sLs&")] && _0x13d3d1[_0x1ab9b0(824, "QGE#")] !== _0xa578cb[_0x1ab9b0(306, "@S9i")]) return _0x13d3d1[_0x1ab9b0(787, "p9sy")];
            }
          }
          return null;
        } else return _0xa578cb[_0x1ab9b0(178, "F11s")](parseInt, _0x48a561[1], 10);
      } else return console[_0x1ab9b0(712, "!c5i")](_0x1ab9b0(623, "QZk^") + _0x24bdb7 + "] \u672A\u627E\u5230\u79EF\u5206\u4FE1\u606F"), null;
    }
  } catch (_0x1e2a8d) {
    return console["error"]("[\u8D26\u53F7 " + _0x24bdb7 + "] \u83B7\u53D6\u79EF\u5206\u5931\u8D25: " + _0x1e2a8d), null;
  }
}
const cheerio = require(_0x3aa276(595, "0AA3"));
async function getToken(_0x42914a) {
  const _0x390114 = _0x3aa276,
    _0x5c71a0 = {
      "QeudA": function (_0x1809d7, _0x692a80) {
        return _0x1809d7(_0x692a80);
      },
      "hlOYJ": "input[name=\"__RequestVerificationToken\"]",
      "uVEnG": _0x390114(254, "V!tL")
    },
    _0x4753d8 = _0x390114(311, "hczt"),
    _0x4a2ae1 = {
      "ref": _0x390114(675, "]HZR")
    },
    _0x176bb8 = {
      "User-Agent": PC_USER_AGENT,
      "Cookie": _0x42914a
    };
  try {
    const _0x1d4130 = await axios[_0x390114(565, "#3D2")](_0x4753d8, {
        "params": _0x4a2ae1,
        "headers": _0x176bb8
      }),
      _0x384677 = cheerio["load"](_0x1d4130[_0x390114(789, "]HZR")]),
      _0x5bdffc = _0x5c71a0[_0x390114(518, "Zwjr")](_0x384677, _0x5c71a0[_0x390114(618, "9tUp")]);
    return _0x5bdffc[_0x390114(646, "ILU)")] > 0 ? _0x5bdffc[_0x390114(441, "9uh^")]() : (console["error"](_0x5c71a0["uVEnG"]), null);
  } catch (_0x5d9397) {
    return console[_0x390114(905, "FVLe")](_0x390114(757, "y9RD") + _0x5d9397), null;
  }
}
async function performSearchRw(_0x3127fe, _0x17a4f1, _0x4933b9, _0x290d48) {
  const _0x1c077c = _0x3aa276,
    _0x56a6fe = {
      "FLTfs": _0x1c077c(556, "61MK"),
      "ULTEn": "XMLHttpRequest",
      "TVufh": function (_0x18f94c, _0x1f5c1f) {
        return _0x18f94c !== _0x1f5c1f;
      },
      "Mcowu": _0x1c077c(952, "QZk^"),
      "MBazs": function (_0x506c4a, _0x104469) {
        return _0x506c4a !== _0x104469;
      },
      "Juncc": function (_0x159687, _0x3d139e) {
        return _0x159687 === _0x3d139e;
      },
      "zYUBY": _0x1c077c(609, "7)k3"),
      "kvQGv": _0x1c077c(218, "F11s"),
      "NBPNi": _0x1c077c(390, "QGE#"),
      "oFrpg": _0x1c077c(713, "B@]1"),
      "wqwus": _0x1c077c(517, "sLs&")
    };
  console[_0x1c077c(301, "QGE#")](_0x1c077c(636, "]HZR") + _0x3127fe);
  const _0x4bb3a4 = _0x56a6fe[_0x1c077c(252, "vOBH")],
    _0x509458 = {
      "X-Requested-With": _0x56a6fe[_0x1c077c(746, "FVLe")]
    },
    _0x14b4ab = new URLSearchParams({
      "id": _0x3127fe,
      "hash": _0x17a4f1,
      "__RequestVerificationToken": _0x290d48
    })[_0x1c077c(917, "*19I")](),
    _0x16ea5c = {
      "User-Agent": PC_USER_AGENT,
      "Content-Type": _0x1c077c(449, "B@]1"),
      "Referer": _0x1c077c(938, "HcSA"),
      "Cookie": _0x4933b9
    };
  try {
    if (_0x56a6fe[_0x1c077c(662, "QGE#")](_0x1c077c(272, "#3D2"), _0x56a6fe[_0x1c077c(778, "AS)4")])) {
      const _0x5b6929 = await axios["post"](_0x4bb3a4, _0x14b4ab, {
        "params": _0x509458,
        "headers": _0x16ea5c
      });
      if (_0x56a6fe["MBazs"](_0x5b6929[_0x1c077c(705, "y9RD")], 200)) {
        if (_0x56a6fe[_0x1c077c(315, "]HZR")](_0x56a6fe["zYUBY"], _0x56a6fe[_0x1c077c(767, "Wy9F")])) _0x1644d2[_0x1c077c(211, "9uh^")](_0x1c077c(332, "vYT2") + _0x182388 + _0x1c077c(438, "QZk^") + _0xb0d195);else {
          console["error"]("\u8BF7\u6C42\u5931\u8D25\uFF0CHTTP \u72B6\u6001\u7801: " + _0x5b6929[_0x1c077c(649, "B@]1")]);
          return;
        }
      }
      const _0x2d3b14 = _0x5b6929[_0x1c077c(601, "*@TT")],
        _0x124050 = _0x2d3b14[_0x1c077c(837, "QGE#")] || null;
      if (_0x56a6fe[_0x1c077c(382, "kCjT")](_0x124050, null)) return _0x56a6fe[_0x1c077c(688, "7)k3")] === "gYUnY" ? (_0x5df0b8["log"]("\u8BBE\u5907\u7ED1\u5B9A\u5931\u8D25:"), ![]) : (console[_0x1c077c(910, "JouG")]("\u5F53\u524D\u79EF\u5206\uFF1A" + _0x124050), !![]);else {
        if (_0x56a6fe["Juncc"](_0x1c077c(638, "!c5i"), _0x56a6fe[_0x1c077c(902, "mXv]")])) {
          const _0x1b33b5 = _0x2ea81b[_0x1c077c(951, "kCjT")][_0x1c077c(549, "F11s")]["counters"],
            _0x34cebb = _0x1b33b5[_0x1c077c(333, "#3D2")] ? _0x1b33b5[_0x1c077c(838, "1pfr")][0][_0x1c077c(735, "#3D2")] : 0,
            _0xb71526 = _0x1b33b5[_0x1c077c(333, "#3D2")] ? _0x1b33b5[_0x1c077c(477, "IIfE")][0][_0x1c077c(451, "B@]1")] : 0,
            _0x5ac613 = _0x1b33b5[_0x1c077c(926, "hczt")] ? _0x1b33b5["mobileSearch"][0]["pointProgress"] : 0,
            _0x2b0e54 = _0x1b33b5["mobileSearch"] ? _0x1b33b5[_0x1c077c(898, "*19I")][0][_0x1c077c(419, "bPzX")] : 0;
          _0x44baea += _0x1c077c(516, "QGE#") + _0x54662e + _0x1c077c(258, "sLs&") + _0x34cebb + "/" + _0xb71526 + "\n", _0x24f465 += _0x1c077c(312, "I7Py") + _0x212fcb + _0x1c077c(875, "V!tL") + _0x5ac613 + "/" + _0x2b0e54 + "\n";
        } else console[_0x1c077c(957, "0[u[")](_0x56a6fe[_0x1c077c(543, "Zwjr")]);
      }
    } else _0xaf4064++;
  } catch (_0x1c70d9) {
    console[_0x1c077c(865, "r2tM")]("\u8BF7\u6C42\u5931\u8D25: " + _0x1c70d9);
  }
}
async function getRewardsInfo(_0x25dd69) {
  const _0xf155d9 = _0x3aa276,
    _0x32baf0 = {
      "VlEct": _0xf155d9(841, "UB(Y")
    },
    _0x52707e = _0x32baf0[_0xf155d9(423, "p9sy")],
    _0x4dcc93 = {
      "type": "1",
      "X-Requested-With": _0xf155d9(466, "0[u["),
      "_": Date["now"]()
    },
    _0x19c257 = {
      "User-Agent": PC_USER_AGENT,
      "Cookie": _0x25dd69
    };
  try {
    const _0x46079e = await axios[_0xf155d9(399, "y9RD")](_0x52707e, {
      "params": _0x4dcc93,
      "headers": _0x19c257
    });
    return _0x46079e["data"];
  } catch (_0x22c44e) {
    return console["error"]("\u83B7\u53D6\u641C\u7D22\u4EFB\u52A1\u8FDB\u5EA6\u5931\u8D25\uFF0C\u9519\u8BEF: " + _0x22c44e), null;
  }
}
async function executeTask(_0x52276c, _0x2d53f8, _0x46ff26) {
  const _0x479d89 = _0x3aa276,
    _0xdcb515 = {
      "XjPHM": _0x479d89(222, "p9sy"),
      "ZWXJK": "\u4EFB\u52A1\u5DF2\u5B8C\u6210",
      "OEgKQ": _0x479d89(741, "Wy9F"),
      "vZtiA": _0x479d89(425, "sLs&"),
      "jNHXs": function (_0x5a0a69, _0x560b9a, _0x3c4ee6) {
        return _0x5a0a69(_0x560b9a, _0x3c4ee6);
      },
      "VIzQh": function (_0x148585, _0x31624e) {
        return _0x148585(_0x31624e);
      },
      "sgLqz": "\u8D26\u53F7\u5931\u6548",
      "dqfTe": _0x479d89(442, "61MK"),
      "tOuhd": _0x479d89(725, "SD)4"),
      "AUfhV": "2-digit",
      "xwKcA": "numeric",
      "UioCb": function (_0x1b403d, _0x582a17) {
        return _0x1b403d !== _0x582a17;
      },
      "WtRwm": _0x479d89(353, "YZvv"),
      "dPLse": _0x479d89(325, "y9RD"),
      "CXcJQ": "\u6BCF\u65E5\u4EFB\u52A1",
      "PqIgt": function (_0x4ffd43, _0x443c47) {
        return _0x4ffd43 === _0x443c47;
      },
      "QiYMP": _0x479d89(433, "y9RD"),
      "VlrCy": _0x479d89(238, "B@]1"),
      "wzJSx": _0x479d89(589, "FVLe"),
      "OFnCM": _0x479d89(722, "FVLe"),
      "MPPzO": function (_0x1a60f3, _0x455783, _0x5a2390, _0x3fec5e, _0x19dddf) {
        return _0x1a60f3(_0x455783, _0x5a2390, _0x3fec5e, _0x19dddf);
      },
      "aWUgh": _0x479d89(816, "0[u["),
      "CVIfj": function (_0x24b66f, _0x223d19) {
        return _0x24b66f + _0x223d19;
      },
      "ivzyR": function (_0x572a26, _0x3e23fa) {
        return _0x572a26 - _0x3e23fa;
      },
      "eEyQc": _0x479d89(743, "I7Py"),
      "AFqBr": _0x479d89(876, "bPzX"),
      "uaezU": function (_0x213a04, _0x5c59f4) {
        return _0x213a04 !== _0x5c59f4;
      },
      "WMekq": _0x479d89(718, "vOBH"),
      "cZaRp": function (_0x58a2b4, _0x320d99) {
        return _0x58a2b4 !== _0x320d99;
      },
      "oDrTY": _0x479d89(813, "ILU)"),
      "QllST": _0x479d89(943, "IG&#"),
      "tDYel": "bNmmY",
      "NZSOG": function (_0x382b9b, _0x4be6f2) {
        return _0x382b9b + _0x4be6f2;
      },
      "TPZZz": function (_0x3d983b, _0x231716) {
        return _0x3d983b - _0x231716;
      },
      "SYgsV": function (_0x4f40c4, _0x282081) {
        return _0x4f40c4(_0x282081);
      }
    };
  console["log"](_0x479d89(512, "V!tL") + _0x52276c);
  let _0x114a1c = "",
    _0x4c0795;
  try {
    _0x4c0795 = await _0xdcb515[_0x479d89(776, "OMHY")](_0x46ff26, _0x2d53f8);
    if (!_0x4c0795) {
      console[_0x479d89(678, "@S9i")](_0x479d89(682, "*@TT") + _0x52276c + " \u4EFB\u52A1\uFF0C\u56E0\u4E3A\u8D26\u53F7\u5931\u6548\u3002"), _0x114a1c += _0x479d89(273, "@S9i") + _0x52276c + _0x479d89(447, "]N9o"), QLAPI[_0x479d89(271, "OMHY")](_0xdcb515[_0x479d89(347, "UB(Y")], _0x479d89(771, "JouG") + _0x52276c + _0x479d89(691, "AS)4"));
      return;
    }
  } catch (_0x4022f7) {
    console["error"]("\u8D26\u53F7 " + _0x52276c + _0x479d89(683, "61MK") + _0x4022f7);
    return;
  }
  const _0x52d04a = _0xdcb515["dqfTe"],
    _0x404221 = {
      "type": "1",
      "X-Requested-With": _0x479d89(918, "QGE#"),
      "_": Date[_0x479d89(456, "OMHY")]()
    },
    _0x55b5d5 = {
      "User-Agent": PC_USER_AGENT,
      "Cookie": _0x2d53f8
    };
  let _0x17fadb;
  try {
    const _0x47c2d4 = await axios[_0x479d89(919, "YZvv")](_0x52d04a, {
      "params": _0x404221,
      "headers": _0x55b5d5
    });
    _0x17fadb = _0x47c2d4["data"];
  } catch (_0x3fcf5f) {
    console[_0x479d89(905, "FVLe")](_0x479d89(207, "ILU)") + _0x52276c + " \u83B7\u53D6\u6BCF\u65E5\u4EFB\u52A1\u5931\u8D25\uFF0C\u9519\u8BEF: " + _0x3fcf5f);
    return;
  }
  const _0x2c7363 = new Date()[_0x479d89(872, "Zwjr")](_0xdcb515["tOuhd"], {
    "month": _0xdcb515[_0x479d89(897, "Zwjr")],
    "day": _0xdcb515["AUfhV"],
    "year": _0xdcb515["xwKcA"]
  });
  let _0x57e650 = 0,
    _0xff5233 = 0;
  const _0x4f7002 = _0x17fadb["dashboard"]["dailySetPromotions"][_0x2c7363] || [];
  for (const _0x51de45 of _0x4f7002) {
    if (_0xdcb515["UioCb"](_0xdcb515[_0x479d89(566, "]N9o")], _0x479d89(436, "I7Py"))) {
      _0xff5233++;
      const {
        offerId: _0x99136d,
        title: _0x5adcfb,
        hash: _0x404eca,
        complete: _0x5d8ea8,
        pointProgressMax: _0x42e0a5,
        attributes: _0x4aaf8c
      } = _0x51de45;
      console[_0x479d89(605, "vOBH")](_0xdcb515[_0x479d89(450, "IG&#")]), console[_0x479d89(866, "bPzX")](_0xdcb515[_0x479d89(950, "@S9i")]), console[_0x479d89(375, "pZMz")](_0x479d89(624, "kCjT") + _0x52276c + "]"), console[_0x479d89(460, "0AA3")]("Name: " + _0x99136d), console[_0x479d89(394, "@0Bk")](_0x479d89(219, "sLs&") + _0x5adcfb), console["log"]("Hash: " + _0x404eca), console[_0x479d89(909, "*19I")](_0x479d89(559, "9tUp") + _0x5d8ea8), console[_0x479d89(250, "mXv]")]("\u5956\u52B1\u79EF\u5206: " + _0x42e0a5);
      if (_0xdcb515[_0x479d89(265, "]HZR")](_0x4aaf8c?.["is_unlocked"], _0xdcb515["QiYMP"])) console[_0x479d89(823, "QZk^")](_0xdcb515[_0x479d89(299, "#3D2")]);else {
        if (!_0x5d8ea8) {
          if (_0xdcb515["PqIgt"](_0xdcb515[_0x479d89(612, "@S9i")], _0xdcb515["OFnCM"])) return _0x464090["error"]("\u4EE3\u7406\u8BF7\u6C42\u5931\u8D25:", _0x5005c6["message"]), ![];else try {
            const _0x110a05 = await _0xdcb515[_0x479d89(684, "IIfE")](performSearchRw, _0x99136d, _0x404eca, _0x2d53f8, _0x4c0795);
            _0x110a05 && _0x57e650++;
          } catch (_0x3a0ccd) {
            console[_0x479d89(645, "OMHY")](_0x479d89(894, "r2tM") + _0x52276c + " \u6267\u884C\u4EFB\u52A1\u5931\u8D25\uFF0C\u9519\u8BEF: " + _0x3a0ccd);
            continue;
          }
        } else {
          if (_0xdcb515[_0x479d89(604, "AS)4")] === _0xdcb515[_0x479d89(604, "AS)4")]) _0x57e650++, console["log"](_0xdcb515["ZWXJK"]);else return _0x558681[_0x479d89(524, "0AA3")]("\u83B7\u53D6\u641C\u7D22\u4EFB\u52A1\u8FDB\u5EA6\u5931\u8D25\uFF0C\u9519\u8BEF: " + _0x524889), null;
        }
      }
      const _0x44a54d = _0xdcb515[_0x479d89(734, "QGE#")](Math[_0x479d89(490, "r2tM")](Math[_0x479d89(754, "JouG")]() * _0xdcb515[_0x479d89(673, "B@]1")](_0xdcb515["ivzyR"](300, 250), 1)), 250);
      console[_0x479d89(605, "vOBH")](_0x479d89(603, "B@]1") + _0x52276c + _0x479d89(278, "mXv]") + _0x44a54d + " \u79D2"), await new Promise(_0x5c35f0 => setTimeout(_0x5c35f0, _0x44a54d * 1000));
    } else {
      _0x4ee9f0["error"](_0x479d89(510, "sLs&") + _0x55c91a);
      throw _0x15c6cf;
    }
  }
  let _0x29cb14 = 0,
    _0x5f02c1 = 0;
  for (const _0x33e481 of _0x17fadb["dashboard"][_0x479d89(314, "QGE#")]) {
    if (_0xdcb515[_0x479d89(385, "vOBH")] !== _0x479d89(870, "I7Py")) {
      if (_0xdcb515["PqIgt"](_0x33e481[_0x479d89(591, "]N9o")], 0)) continue;
      _0x5f02c1++;
      const {
        offerId: _0x53bde,
        title: _0xfb2083,
        hash: _0x57a322,
        complete: _0x231540,
        pointProgressMax: _0x2d3209,
        attributes: _0xee18cd
      } = _0x33e481;
      console["log"](_0xdcb515[_0x479d89(163, "!c5i")]), console["log"](_0xdcb515[_0x479d89(232, "OMHY")]), console[_0x479d89(460, "0AA3")]("[\u8D26\u53F7 " + _0x52276c + "]"), console[_0x479d89(954, "FVLe")](_0x479d89(749, "vOBH") + _0x53bde), console["log"](_0x479d89(331, "F11s") + _0xfb2083), console["log"](_0x479d89(531, "0[u[") + _0x57a322), console[_0x479d89(292, "IIfE")](_0x479d89(275, "0AA3") + _0x231540), console[_0x479d89(910, "JouG")](_0x479d89(532, "bPzX") + _0x2d3209);
      if (_0xdcb515[_0x479d89(791, "Wy9F")](_0xee18cd?.[_0x479d89(372, "QZk^")], _0xdcb515[_0x479d89(884, "UB(Y")])) {
        if (_0xdcb515["uaezU"](_0xdcb515[_0x479d89(847, "OMHY")], "KGqeo")) {
          _0x5d177d["log"](_0xdcb515["XjPHM"]);
          return;
        } else console[_0x479d89(764, "V(f*")](_0x479d89(948, "*@TT"));
      } else {
        if (!_0x231540) {
          if (_0x479d89(656, "V(f*") === _0x479d89(690, "61MK")) _0x58b583++, _0x5a82b1[_0x479d89(753, "ILU)")](_0xdcb515["ZWXJK"]);else try {
            if (_0xdcb515["cZaRp"](_0xdcb515["oDrTY"], _0x479d89(862, "]N9o"))) return _0xd07e87[_0x479d89(292, "IIfE")]("\u5F53\u524D\u79EF\u5206\uFF1A" + _0x58a5b0), !![];else {
              const _0x5a29da = await performSearchRw(_0x53bde, _0x57a322, _0x2d53f8, _0x4c0795);
              _0x5a29da && (_0xdcb515["PqIgt"](_0x479d89(526, "IG&#"), _0xdcb515["QllST"]) ? _0x22da70[_0x479d89(905, "FVLe")](_0xdcb515[_0x479d89(620, "kCjT")], _0x57efea) : _0x29cb14++);
            }
          } catch (_0x20cf21) {
            if (_0xdcb515[_0x479d89(959, "vOBH")](_0xdcb515[_0x479d89(586, "p9sy")], _0xdcb515[_0x479d89(227, "B@]1")])) return _0xf5eafc[_0x479d89(301, "QGE#")](_0xdcb515["vZtiA"]), ![];else {
              console[_0x479d89(403, "vOBH")]("\u8D26\u53F7 " + _0x52276c + " \u6267\u884C\u4EFB\u52A1\u5931\u8D25\uFF0C\u9519\u8BEF: " + _0x20cf21);
              continue;
            }
          }
        } else _0x29cb14++, console[_0x479d89(605, "vOBH")](_0xdcb515["ZWXJK"]);
      }
      const _0x1261a4 = _0xdcb515[_0x479d89(719, "@S9i")](Math["floor"](Math[_0x479d89(418, "!c5i")]() * _0xdcb515["NZSOG"](_0xdcb515[_0x479d89(790, "AS)4")](300, 250), 1)), 250);
      console["log"](_0x479d89(365, "ILU)") + _0x52276c + _0x479d89(422, "Wy9F") + _0x1261a4 + " \u79D2"), await new Promise(_0x48a6ae => setTimeout(_0x48a6ae, _0x1261a4 * 1000));
    } else return _0xdcb515[_0x479d89(726, "QZk^")](_0x375d55, _0x4c8a48[1], 10);
  }
  const _0xd5e392 = await _0xdcb515[_0x479d89(374, "ILU)")](getRewardsInfo, _0x2d53f8);
  if (_0xd5e392) {
    const _0x211e27 = _0xd5e392[_0x479d89(945, "@S9i")][_0x479d89(602, "sLs&")][_0x479d89(658, "hczt")],
      _0x59c3a9 = _0x211e27[_0x479d89(758, "*@TT")] ? _0x211e27[_0x479d89(838, "1pfr")][0][_0x479d89(334, "]HZR")] : 0,
      _0x223faa = _0x211e27[_0x479d89(811, "eUvn")] ? _0x211e27[_0x479d89(477, "IIfE")][0]["pointProgressMax"] : 0,
      _0x2c149c = _0x211e27[_0x479d89(695, "QGE#")] ? _0x211e27[_0x479d89(568, "@S9i")][0]["pointProgress"] : 0,
      _0x3349e7 = _0x211e27[_0x479d89(724, "$sq&")] ? _0x211e27["mobileSearch"][0]["pointProgressMax"] : 0;
    _0x114a1c += "\u8D26\u53F7 " + _0x52276c + _0x479d89(858, "pZMz") + _0x59c3a9 + "/" + _0x223faa + "\n", _0x114a1c += _0x479d89(452, "p9sy") + _0x52276c + _0x479d89(685, "Zwjr") + _0x2c149c + "/" + _0x3349e7 + "\n";
  }
  _0x114a1c += "\u8D26\u53F7 " + _0x52276c + _0x479d89(206, "p9sy") + _0x57e650 + "/" + _0xff5233 + _0x479d89(216, "0AA3"), _0x114a1c += _0x479d89(912, "$sq&") + _0x52276c + _0x479d89(307, "F11s") + _0x29cb14 + "/" + _0x5f02c1 + " \u4E2A\n";
  const _0x1e5ff6 = await _0xdcb515[_0x479d89(440, "7)k3")](getBalance, _0x2d53f8, _0x52276c);
  return _0x114a1c += _0x479d89(934, "FVLe") + _0x52276c + " \u5269\u4F59\u79EF\u5206 " + _0x1e5ff6 + "\n", _0x114a1c;
}
async function processAccount(_0x1170ea, _0x49eab4, _0x2ce63c, _0x3e8bc4, _0x52402e) {
  const _0x33f00c = _0x3aa276,
    _0x33308e = {
      "VnLvT": _0x33f00c(666, "0AA3"),
      "EfsUY": _0x33f00c(630, "F11s"),
      "EWNBT": function (_0x4fbdca, _0x51ecb9, _0x28d610) {
        return _0x4fbdca(_0x51ecb9, _0x28d610);
      },
      "RWdom": function (_0x2cc7bc, _0x2b4a90) {
        return _0x2cc7bc === _0x2b4a90;
      },
      "KNsNO": function (_0x2bdd8f, _0x113db5) {
        return _0x2bdd8f === _0x113db5;
      },
      "XUojM": function (_0x1111e2, _0x13e1fb) {
        return _0x1111e2 * _0x13e1fb;
      },
      "JJAeS": function (_0x59f365, _0x33b1e1, _0x22ca8e, _0x16f66b, _0x1ade60) {
        return _0x59f365(_0x33b1e1, _0x22ca8e, _0x16f66b, _0x1ade60);
      },
      "jmJcR": function (_0x2dff9e, _0x2ec251) {
        return _0x2dff9e === _0x2ec251;
      },
      "bvbJy": "OHRVw",
      "nBemA": function (_0x4150d6, _0xad18b) {
        return _0x4150d6 > _0xad18b;
      },
      "tGeXe": function (_0x11fa3b, _0x239ba7) {
        return _0x11fa3b !== _0x239ba7;
      },
      "vHYSz": _0x33f00c(326, "V(f*"),
      "YSbKk": function (_0x1eaf3f, _0x46a2ea) {
        return _0x1eaf3f !== _0x46a2ea;
      },
      "rsnlK": "qAnms",
      "jafIi": function (_0x1a8795, _0x33182d) {
        return _0x1a8795 >= _0x33182d;
      },
      "bJmlu": function (_0x1a4beb, _0x2fe934) {
        return _0x1a4beb + _0x2fe934;
      },
      "KBljb": function (_0x7d0ceb, _0x2b2bd7) {
        return _0x7d0ceb * _0x2b2bd7;
      },
      "oVYEs": function (_0x52cc40, _0x5c25db) {
        return _0x52cc40 - _0x5c25db;
      },
      "KpFtD": _0x33f00c(846, "UB(Y"),
      "UtJyP": function (_0x494c84, _0x17ea5c) {
        return _0x494c84 * _0x17ea5c;
      },
      "uPILL": function (_0x236176, _0x484291, _0x3c99de, _0x5c834c, _0x3d9215) {
        return _0x236176(_0x484291, _0x3c99de, _0x5c834c, _0x3d9215);
      },
      "pejmM": function (_0x5ea2e9, _0x40f1a2) {
        return _0x5ea2e9 === _0x40f1a2;
      },
      "Yzecq": _0x33f00c(379, "QGE#"),
      "dqxIS": function (_0x3c00f0, _0x534b24) {
        return _0x3c00f0 + _0x534b24;
      },
      "GLXUx": function (_0x11c948, _0x23574b) {
        return _0x11c948 - _0x23574b;
      }
    },
    _0x2151b0 = await _0x2ce63c();
  console["log"](_0x33f00c(635, "0AA3") + _0x1170ea + _0x33f00c(554, "61MK"));
  const _0x591b1c = new Set();
  let _0x3ed68a = await _0x33308e[_0x33f00c(284, "mXv]")](_0x3e8bc4, _0x49eab4, _0x1170ea);
  if (_0x3ed68a === null) {
    console["error"](_0x33f00c(330, "FVLe") + _0x1170ea + "] \u65E0\u6CD5\u83B7\u53D6\u521D\u59CB\u79EF\u5206\uFF0C\u8DF3\u8FC7\u6B64\u8D26\u53F7");
    return;
  }
  console[_0x33f00c(530, "hczt")](_0x33f00c(892, "bPzX") + _0x1170ea + "] \u521D\u59CB\u79EF\u5206: " + _0x3ed68a);
  let _0xdb8c81 = 0;
  const _0x4fe600 = 5;
  while (!![]) {
    if (_0x33308e["RWdom"](_0x33f00c(687, "OMHY"), "fWOIT")) return _0x8a81dc[_0x33f00c(655, "HcSA")](_0x33f00c(745, "SD)4")), ![];else {
      const _0x394458 = _0x2151b0["filter"](_0x3edf5c => !_0x591b1c[_0x33f00c(348, "p9sy")](_0x3edf5c));
      if (_0x33308e[_0x33f00c(546, "SD)4")](_0x394458[_0x33f00c(358, "JouG")], 0)) {
        console[_0x33f00c(360, "I7Py")](_0x33f00c(468, "IIfE") + _0x1170ea + _0x33f00c(619, "QGE#"));
        break;
      }
      searchType = _0x33f00c(415, "FVLe"), userAgent = PC_USER_AGENT;
      const _0x465f95 = _0x394458[Math[_0x33f00c(475, "!c5i")](_0x33308e["XUojM"](Math[_0x33f00c(369, "#3D2")](), _0x394458[_0x33f00c(831, "pZMz")]))];
      _0x591b1c[_0x33f00c(760, "QGE#")](_0x465f95), console[_0x33f00c(301, "QGE#")]("[\u8D26\u53F7 " + _0x1170ea + _0x33f00c(873, "0AA3") + searchType + _0x33f00c(921, "9tUp") + _0x465f95), await _0x33308e[_0x33f00c(235, "I7Py")](_0x52402e, _0x465f95, userAgent, _0x49eab4, _0x1170ea);
      const _0x9c7878 = await _0x3e8bc4(_0x49eab4, _0x1170ea);
      if (_0x9c7878 === null) {
        if (_0x33308e["jmJcR"](_0x33f00c(264, "FVLe"), _0x33308e[_0x33f00c(338, "hczt")])) _0x27b354["log"](_0x33308e[_0x33f00c(706, "9tUp")]);else {
          console[_0x33f00c(915, "#3D2")]("[\u8D26\u53F7 " + _0x1170ea + "] \u65E0\u6CD5\u83B7\u53D6\u5F53\u524D\u79EF\u5206\uFF0C\u8DF3\u8FC7\u6B64\u8D26\u53F7");
          break;
        }
      }
      if (_0x33308e[_0x33f00c(474, "FVLe")](_0x9c7878, _0x3ed68a)) {
        if (_0x33308e["tGeXe"](_0x33308e[_0x33f00c(487, "FVLe")], _0x33308e["vHYSz"])) throw new _0x5ec2b7("\u672A\u68C0\u6D4B\u5230\u4EFB\u4F55\u8D26\u53F7\uFF0C\u8BF7\u5728\u73AF\u5883\u53D8\u91CF\u4E2D\u8BBE\u7F6E " + _0x43a499);else console[_0x33f00c(292, "IIfE")]("[\u8D26\u53F7 " + _0x1170ea + "] " + searchType + _0x33f00c(701, "IG&#")), _0x3ed68a = _0x9c7878, _0xdb8c81 = 0;
      } else _0x33308e[_0x33f00c(852, "V!tL")](_0x33308e["rsnlK"], _0x33308e[_0x33f00c(396, "ILU)")]) ? _0x30e26a[_0x33f00c(822, "$sq&")](_0x33308e[_0x33f00c(805, "@0Bk")]) : (_0xdb8c81++, console[_0x33f00c(234, "0[u[")](_0x33f00c(439, "AS)4") + _0x1170ea + "] " + searchType + _0x33f00c(664, "bPzX") + _0xdb8c81));
      if (_0x33308e[_0x33f00c(747, "y9RD")](_0xdb8c81, _0x4fe600)) {
        console[_0x33f00c(916, "#3D2")](_0x33f00c(500, "hczt") + _0x1170ea + "] " + searchType + _0x33f00c(527, "0[u["));
        const _0x261bb0 = _0x33308e[_0x33f00c(471, "p9sy")](Math[_0x33f00c(738, "F11s")](_0x33308e[_0x33f00c(376, "V!tL")](Math[_0x33f00c(730, "F11s")](), _0x33308e[_0x33f00c(949, "9tUp")](50, 1))), 200);
        console["log"](_0x33f00c(184, "JouG") + _0x1170ea + _0x33f00c(253, "*@TT") + _0x261bb0 + " \u79D2"), await new Promise(_0x3372a1 => setTimeout(_0x3372a1, _0x261bb0 * 1000));
        break;
      }
      const _0x17f631 = Math[_0x33f00c(704, "I7Py")](_0x33308e[_0x33f00c(230, "HcSA")](Math["random"](), _0x33308e[_0x33f00c(827, "AS)4")](300, 250) + 1)) + 200;
      console[_0x33f00c(693, "@S9i")](_0x33f00c(386, "UB(Y") + _0x1170ea + "] \u7B49\u5F85 " + _0x17f631 + " \u79D2"), await new Promise(_0x34b282 => setTimeout(_0x34b282, _0x17f631 * 1000));
    }
  }
  _0xdb8c81 = 0;
  while (!![]) {
    const _0xadd940 = _0x2151b0[_0x33f00c(772, "HcSA")](_0x4ca75e => !_0x591b1c[_0x33f00c(671, "YZvv")](_0x4ca75e));
    if (_0xadd940["length"] === 0) {
      console[_0x33f00c(693, "@S9i")]("[\u8D26\u53F7 " + _0x1170ea + _0x33f00c(174, "6*6P"));
      break;
    }
    searchType = _0x33308e[_0x33f00c(171, "*19I")], userAgent = MOBILE_USER_AGENT;
    const _0x1d9816 = _0xadd940[Math[_0x33f00c(401, "OMHY")](_0x33308e["UtJyP"](Math[_0x33f00c(473, "IG&#")](), _0xadd940[_0x33f00c(255, "#3D2")]))];
    _0x591b1c["add"](_0x1d9816), console[_0x33f00c(693, "@S9i")](_0x33f00c(198, "V(f*") + _0x1170ea + _0x33f00c(600, "61MK") + searchType + " \u641C\u7D22: " + _0x1d9816), await _0x33308e["uPILL"](_0x52402e, _0x1d9816, userAgent, _0x49eab4, _0x1170ea);
    const _0x188795 = await _0x33308e[_0x33f00c(304, "$sq&")](_0x3e8bc4, _0x49eab4, _0x1170ea);
    if (_0x33308e[_0x33f00c(621, "7)k3")](_0x188795, null)) {
      console["error"](_0x33f00c(548, "*@TT") + _0x1170ea + _0x33f00c(792, "vYT2"));
      break;
    }
    _0x33308e[_0x33f00c(585, "9uh^")](_0x188795, _0x3ed68a) ? "tgLnz" !== _0x33308e["Yzecq"] ? _0x2965b0["log"]("\u65E0\u6CD5\u83B7\u53D6\u4F59\u989D") : (console[_0x33f00c(783, "r2tM")](_0x33f00c(913, "pZMz") + _0x1170ea + "] " + searchType + _0x33f00c(777, "YZvv")), _0x3ed68a = _0x188795, _0xdb8c81 = 0) : (_0xdb8c81++, console["log"](_0x33f00c(289, "0[u[") + _0x1170ea + "] " + searchType + _0x33f00c(739, "#3D2") + _0xdb8c81));
    if (_0xdb8c81 >= _0x4fe600) {
      console["log"](_0x33f00c(269, "IG&#") + _0x1170ea + "] " + searchType + " \u591A\u6B21\u672A\u589E\u52A0\u79EF\u5206\uFF0C\u7ED3\u675F\u4EFB\u52A1");
      break;
    }
    const _0x297b75 = _0x33308e[_0x33f00c(352, "YZvv")](Math[_0x33f00c(251, "QZk^")](_0x33308e["KBljb"](Math[_0x33f00c(220, "YZvv")](), _0x33308e[_0x33f00c(829, "#3D2")](300, 250) + 1)), 200);
    console[_0x33f00c(753, "ILU)")](_0x33f00c(263, "!c5i") + _0x1170ea + _0x33f00c(774, "YZvv") + _0x297b75 + " \u79D2"), await new Promise(_0x83e1e1 => setTimeout(_0x83e1e1, _0x297b75 * 1000));
  }
}
const signIn = async (_0x7d6bfd, _0x5f3235) => {
    const _0x501a03 = _0x3aa276,
      _0x38212d = {
        "MxTaD": _0x501a03(244, "I7Py"),
        "iYahz": _0x501a03(229, "0[u["),
        "uICFU": "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        "uquBP": function (_0x2d25b1, _0x6cf489) {
          return _0x2d25b1 < _0x6cf489;
        },
        "EIJuj": function (_0x55e904, _0x1734f2) {
          return _0x55e904 * _0x1734f2;
        },
        "LMNTm": _0x501a03(515, "ILU)"),
        "nqLwU": _0x501a03(953, "bPzX"),
        "woBUw": _0x501a03(464, "61MK"),
        "FVPrl": function (_0x36ef16, _0x4622fe) {
          return _0x36ef16 !== _0x4622fe;
        },
        "QoTEr": _0x501a03(179, "9uh^"),
        "PqmtP": function (_0x365da0, _0x585ea7) {
          return _0x365da0 === _0x585ea7;
        },
        "qHRoj": _0x501a03(782, "HcSA"),
        "FouqC": function (_0x3e1a27, _0x23757e) {
          return _0x3e1a27 !== _0x23757e;
        },
        "KcYXY": "ydiAV",
        "dABNX": "\u65E0\u6CD5\u83B7\u53D6\u4F59\u989D",
        "gUDMa": _0x501a03(654, "9tUp")
      };
    let _0x1f9ed3 = "";
    const _0x3c7c89 = _0x38212d["LMNTm"],
      _0x38c0af = new Date()["toISOString"]()[_0x501a03(528, "mXv]")]("T")[0],
      _0x3b63ec = {
        "amount": 1,
        "attributes": {
          "offerid": _0x38212d[_0x501a03(409, "0AA3")],
          "date": _0x38c0af,
          "signIn": ![],
          "timezoneOffset": _0x38212d[_0x501a03(405, "eUvn")]
        },
        "id": "",
        "type": 101,
        "country": "cn",
        "risk_context": {},
        "channel": _0x501a03(931, "Wy9F")
      },
      _0x519764 = {
        "Content-Type": _0x501a03(455, "V!tL"),
        "User-Agent": MOBILE_USER_AGENT,
        "authorization": _0x501a03(563, "p9sy") + _0x5f3235
      };
    try {
      if (_0x38212d["FVPrl"](_0x38212d[_0x501a03(270, "y9RD")], _0x501a03(285, "hczt"))) {
        const _0x4503da = await axios["post"](_0x3c7c89, _0x3b63ec, {
            "headers": _0x519764
          }),
          _0x102517 = _0x4503da[_0x501a03(417, "7)k3")];
        if (_0x102517[_0x501a03(633, "vYT2")] && _0x38212d[_0x501a03(867, "V(f*")](_0x102517[_0x501a03(714, "6*6P")]["balance"], undefined)) {
          if (_0x38212d[_0x501a03(208, "r2tM")](_0x38212d[_0x501a03(383, "FVLe")], _0x38212d["qHRoj"])) {
            const _0x3c95c4 = _0x102517["response"][_0x501a03(511, "vOBH")];
            return console["log"]("app\u8D26\u53F7 " + _0x7d6bfd + _0x501a03(444, "*@TT") + _0x3c95c4), _0x1f9ed3 += _0x501a03(259, "pZMz") + _0x7d6bfd + _0x501a03(732, "vOBH") + _0x3c95c4 + "\n", _0x1f9ed3;
          } else return _0x17104a[_0x501a03(764, "V(f*")](_0x38212d[_0x501a03(891, "#3D2")]), !![];
        } else {
          if (_0x38212d[_0x501a03(361, "IIfE")](_0x38212d[_0x501a03(796, "6*6P")], _0x501a03(453, "9uh^"))) console[_0x501a03(234, "0[u[")](_0x38212d[_0x501a03(380, "B@]1")]);else return _0x17ab1f["error"](_0x38212d[_0x501a03(283, "YZvv")]), null;
        }
      } else {
        const _0x5f7e13 = _0x38212d[_0x501a03(483, "kCjT")];
        let _0x437087 = "";
        for (let _0x3a2757 = 0; _0x38212d["uquBP"](_0x3a2757, _0x5c718c); _0x3a2757++) {
          _0x437087 += _0x5f7e13["charAt"](_0x1d7d2f[_0x501a03(217, "Wy9F")](_0x38212d["EIJuj"](_0x3a9478[_0x501a03(534, "p9sy")](), _0x5f7e13[_0x501a03(856, "r2tM")])));
        }
        return _0x437087;
      }
    } catch (_0xd001d0) {
      console[_0x501a03(431, "pZMz")](_0x38212d[_0x501a03(340, "eUvn")], _0xd001d0);
    }
  },
  crypto = require(_0x3aa276(677, "Wy9F"));
function generateToken() {
  const _0x552674 = _0x3aa276,
    _0x7208e2 = {
      "sXbfG": _0x552674(651, "#3D2")
    },
    _0x4452b3 = crypto[_0x552674(689, "!c5i")](64);
  return _0x4452b3["toString"](_0x7208e2[_0x552674(661, "eUvn")]);
}
async function getReadingProgress(_0xe5ab12) {
  const _0x5aac6f = _0x3aa276,
    _0x4d7001 = {
      "sbTWN": function (_0x56e0f1, _0x3c951b) {
        return _0x56e0f1 === _0x3c951b;
      },
      "mjmFJ": _0x5aac6f(486, "QGE#"),
      "rbyNh": "SAAndroid",
      "yIbhR": "application/json",
      "atwrZ": function (_0x14a996, _0x1a7507) {
        return _0x14a996 === _0x1a7507;
      },
      "qaFHO": "HQWha",
      "yWYqX": function (_0x24e0ca, _0x39fb3b) {
        return _0x24e0ca(_0x39fb3b);
      },
      "baPOG": "\u8BF7\u6C42\u5931\u8D25:"
    },
    _0x42998b = _0x4d7001[_0x5aac6f(930, "eUvn")],
    _0x1caf7d = new URLSearchParams({
      "channel": _0x4d7001[_0x5aac6f(721, "B@]1")],
      "options": _0x5aac6f(927, "9tUp")
    }),
    _0x4b832e = {
      "Content-Type": _0x4d7001[_0x5aac6f(756, "I7Py")],
      "Authorization": _0x5aac6f(801, "IG&#") + _0xe5ab12
    };
  try {
    if (_0x4d7001[_0x5aac6f(480, "bPzX")]("nRlzR", _0x5aac6f(941, "*19I"))) return _0x3e93c5["error"](_0x5aac6f(257, "$sq&")), ![];else {
      const _0x214751 = await axios["get"](_0x42998b, {
          "params": _0x1caf7d,
          "headers": _0x4b832e
        }),
        _0x3c54ca = _0x214751["data"],
        _0x3ed3b7 = _0x3c54ca[_0x5aac6f(880, "]HZR")]["promotions"];
      let _0x46ad12 = {
        "max": 1,
        "progress": 0
      };
      if (_0x3ed3b7) for (const _0x36a042 of _0x3ed3b7) {
        if (_0x4d7001[_0x5aac6f(201, "vOBH")](_0x36a042["attributes"]["offerid"], _0x5aac6f(668, "6*6P"))) {
          if ("HQWha" === _0x4d7001[_0x5aac6f(364, "QZk^")]) {
            _0x46ad12 = {
              "max": Number(_0x36a042[_0x5aac6f(942, "9tUp")]["max"]),
              "progress": _0x4d7001["yWYqX"](Number, _0x36a042[_0x5aac6f(877, "*19I")][_0x5aac6f(781, "I7Py")])
            };
            break;
          } else return _0x4d7001["sbTWN"](_0x2a9819, _0x3f5ecc) ? !![] : (_0x37a722[_0x5aac6f(954, "FVLe")]("\u5F53\u524D\u8BBE\u5907\u4E0D\u5339\u914D\uFF0C\u4EFB\u52A1\u505C\u6B62\u3002"), ![]);
        }
      }
      return _0x46ad12;
    }
  } catch (_0x5ef5d8) {
    return console["error"](_0x4d7001["baPOG"], _0x5ef5d8), {
      "max": 1,
      "progress": 0
    };
  }
}
async function executeReadingTask(_0x56e503, _0x102afe) {
  const _0x586ec6 = _0x3aa276,
    _0x3d4888 = {
      "ScTCs": _0x586ec6(545, "!c5i"),
      "uyJJv": _0x586ec6(324, "V!tL"),
      "YjwoX": _0x586ec6(611, "YZvv"),
      "XNwci": _0x586ec6(421, "61MK"),
      "fCuvU": _0x586ec6(205, "61MK"),
      "yfBVx": _0x586ec6(885, "UB(Y"),
      "QpRzn": function (_0x2c9948) {
        return _0x2c9948();
      },
      "OsXsP": "ENUS_readarticle3_30points",
      "ZSFbw": function (_0x2becf5, _0x3dcd93) {
        return _0x2becf5 === _0x3dcd93;
      },
      "FWCiA": "Qufbk",
      "hCyJZ": function (_0x3a9148, _0x3d8d1b) {
        return _0x3a9148 + _0x3d8d1b;
      },
      "ewIuX": function (_0x4314b8, _0x822ea3) {
        return _0x4314b8 === _0x822ea3;
      },
      "qaTfx": _0x586ec6(430, "#3D2"),
      "mzDfu": function (_0x1d3ed7, _0x2554ab) {
        return _0x1d3ed7 >= _0x2554ab;
      },
      "kAVFv": function (_0xf86a7e, _0x46f00b) {
        return _0xf86a7e !== _0x46f00b;
      },
      "dzJte": _0x586ec6(514, "9uh^"),
      "mnOFr": function (_0xeb3fe7, _0x3059cb) {
        return _0xeb3fe7 + _0x3059cb;
      },
      "YCxIo": function (_0x3de1d7, _0x2371f8) {
        return _0x3de1d7 * _0x2371f8;
      },
      "lOcpE": function (_0x48411c, _0xfdb6a8) {
        return _0x48411c + _0xfdb6a8;
      }
    };
  let _0x4c5ff7 = "";
  const _0xa37f2d = _0x3d4888[_0x586ec6(485, "*@TT")];
  let _0x1af6db = 0,
    _0x3b2e29 = 0;
  const _0x19ac03 = {
    "Content-Type": _0x3d4888[_0x586ec6(541, "r2tM")],
    "User-Agent": MOBILE_USER_AGENT,
    "authorization": _0x586ec6(248, "r2tM") + _0x102afe
  };
  for (let _0x176f15 = 0; _0x176f15 < 15; _0x176f15++) {
    if ("LPSJR" !== _0x586ec6(573, "sLs&")) {
      const _0x1b6f7a = {
        "amount": 1,
        "country": "cn",
        "id": _0x3d4888[_0x586ec6(608, "IG&#")](generateToken),
        "type": 101,
        "attributes": {
          "offerid": _0x3d4888[_0x586ec6(723, "!c5i")]
        }
      };
      try {
        const _0x3dcd15 = await axios["post"](_0xa37f2d, _0x1b6f7a, {
            "headers": _0x19ac03
          }),
          _0x5abd77 = _0x3dcd15[_0x586ec6(578, "@0Bk")];
        if (_0x5abd77 && _0x5abd77["response"]) {
          if (_0x3d4888[_0x586ec6(540, "61MK")](_0x586ec6(784, "Zwjr"), _0x3d4888[_0x586ec6(935, "AS)4")])) {
            const _0x84a675 = _0x5abd77[_0x586ec6(686, "UB(Y")][_0x586ec6(240, "6*6P")] || 0;
            console["log"](_0x586ec6(492, "9uh^") + _0x56e503 + _0x586ec6(416, "*@TT") + _0x3d4888["hCyJZ"](_0x176f15, 1) + " \u6B21\u6267\u884C\u6210\u529F \u5F53\u524D\u4F59\u989D: " + _0x84a675);
            if (_0x84a675 === _0x1af6db) {
              if (_0x3d4888[_0x586ec6(190, "V(f*")](_0x586ec6(854, "SD)4"), _0x3d4888["qaTfx"])) return _0xb5945b[_0x586ec6(590, "Wy9F")](_0x3d4888[_0x586ec6(328, "HcSA")]), ![];else _0x3b2e29++;
            } else _0x3b2e29 = 0;
            if (_0x3d4888[_0x586ec6(494, "7)k3")](_0x3b2e29, 3)) {
              console[_0x586ec6(910, "JouG")]("[app\u8D26\u53F7 " + _0x56e503 + "] \u79EF\u5206\u8FDE\u7EED\u4E09\u6B21\u6CA1\u6709\u53D8\u5316");
              break;
            }
            _0x1af6db = _0x84a675;
          } else {
            _0xf8fb88[_0x586ec6(463, "y9RD")](_0x3d4888[_0x586ec6(751, "kCjT")], _0x3076e6[_0x586ec6(555, "L(FN")]);
            throw new _0x3c2d53(_0x3d4888[_0x586ec6(893, "Zwjr")]);
          }
        } else {
          if (_0x3d4888[_0x586ec6(908, "L(FN")](_0x3d4888[_0x586ec6(788, "V!tL")], _0x3d4888[_0x586ec6(810, "vOBH")])) return _0x119cc6[_0x586ec6(828, "HcSA")]();else console[_0x586ec6(915, "#3D2")](_0x586ec6(411, "@0Bk") + _0x56e503 + _0x586ec6(904, "0[u[") + _0x3d4888[_0x586ec6(398, "]HZR")](_0x176f15, 1) + _0x586ec6(614, "bPzX"));
        }
        const _0x1a4b4e = Math[_0x586ec6(925, "0AA3")](_0x3d4888[_0x586ec6(529, "#3D2")](Math[_0x586ec6(204, "sLs&")](), _0x3d4888[_0x586ec6(715, "mXv]")](50, 1))) + 250;
        console[_0x586ec6(202, "YZvv")]("[app\u8D26\u53F7 " + _0x56e503 + _0x586ec6(481, "0AA3") + _0x1a4b4e + " \u79D2"), await new Promise(_0x1a6c2b => setTimeout(_0x1a6c2b, _0x1a4b4e * 1000));
      } catch (_0xf08a83) {
        console["error"](_0x586ec6(525, "I7Py") + _0x3d4888[_0x586ec6(378, "7)k3")](_0x176f15, 1) + _0x586ec6(800, "F11s"), _0xf08a83);
        break;
      }
    } else _0x169d98["log"](_0x3d4888["XNwci"]);
  }
  const _0x41bb32 = await getReadingProgress(_0x102afe);
  return console[_0x586ec6(360, "I7Py")]("[app\u8D26\u53F7 " + _0x56e503 + _0x586ec6(316, "p9sy") + _0x41bb32["progress"] + "/" + _0x41bb32[_0x586ec6(408, "pZMz")]), _0x4c5ff7 += _0x586ec6(505, "hczt") + _0x56e503 + _0x586ec6(607, "AS)4") + _0x41bb32["progress"] + "/" + _0x41bb32[_0x586ec6(842, "Wy9F")] + "\n", _0x4c5ff7;
}
const localVersion = _0x3aa276(643, "p9sy");
async function version() {
  const _0x2d5130 = _0x3aa276,
    _0x4fd321 = {
      "tQAuJ": _0x2d5130(186, "vYT2"),
      "MjEjS": _0x2d5130(351, "HcSA"),
      "xZnqZ": function (_0x40ce45, _0x48f188) {
        return _0x40ce45 === _0x48f188;
      },
      "oXJVW": "ynlnU",
      "dgaMu": function (_0x56217b, _0x6b066d) {
        return _0x56217b && _0x6b066d;
      },
      "LANPW": _0x2d5130(356, "y9RD")
    },
    _0x33a938 = _0x4fd321[_0x2d5130(558, "*19I")],
    _0x336cd1 = {
      "User-Agent": _0x4fd321[_0x2d5130(488, "V(f*")]
    };
  try {
    if (_0x4fd321[_0x2d5130(755, "*@TT")](_0x2d5130(362, "bPzX"), _0x4fd321["oXJVW"])) _0x22a1b6++;else {
      const _0x3d07ae = await axios[_0x2d5130(903, "@S9i")](_0x33a938, {
        "headers": _0x336cd1
      });
      if (_0x3d07ae[_0x2d5130(389, "I7Py")] === 200) {
        const _0x4863ab = _0x3d07ae[_0x2d5130(350, "9tUp")],
          _0x500042 = _0x4863ab[_0x2d5130(437, "UB(Y")],
          _0x249adc = _0x4863ab[_0x2d5130(881, "YZvv")];
        return _0x4fd321["dgaMu"](_0x500042, _0x249adc) ? {
          "version": _0x500042,
          "msg": _0x249adc
        } : (console[_0x2d5130(482, "61MK")](_0x2d5130(181, "ILU)")), null);
      } else return console[_0x2d5130(375, "pZMz")](_0x2d5130(407, "FVLe") + _0x3d07ae[_0x2d5130(339, "JouG")]), null;
    }
  } catch (_0x366596) {
    return console[_0x2d5130(203, "y9RD")](_0x4fd321[_0x2d5130(277, "vOBH")], _0x366596[_0x2d5130(833, "*@TT")]), null;
  }
}
const os = require("os");
function getMacAddress() {
  const _0x162f15 = _0x3aa276,
    _0x433d78 = {
      "sHtPn": function (_0x473294, _0x248aa9) {
        return _0x473294 && _0x248aa9;
      },
      "owxvr": _0x162f15(794, "YZvv")
    },
    _0x30bd12 = os[_0x162f15(189, "@S9i")]();
  for (const _0x1d2d1b in _0x30bd12) {
    for (const _0x3f98b8 of _0x30bd12[_0x1d2d1b]) {
      if (_0x3f98b8["mac"] && _0x3f98b8["mac"] !== "00:00:00:00:00:00") {
        if (_0x433d78[_0x162f15(924, "r2tM")] === _0x433d78[_0x162f15(680, "V!tL")]) return _0x3f98b8["mac"];else {
          const _0x191c4e = _0x3be8bb["data"],
            _0xad55fd = _0x191c4e[_0x162f15(225, "vOBH")],
            _0x2b903c = _0x191c4e[_0x162f15(698, "hczt")];
          return _0x433d78[_0x162f15(616, "F11s")](_0xad55fd, _0x2b903c) ? {
            "version": _0xad55fd,
            "msg": _0x2b903c
          } : (_0x11ffad[_0x162f15(759, "F11s")](_0x162f15(308, "Zwjr")), null);
        }
      }
    }
  }
  return null;
}
async function checkCardKey(_0x495f84) {
  const _0x22d757 = _0x3aa276,
    _0x2fa5b8 = {
      "TfwOZ": function (_0x1fd30e, _0xc0cb04) {
        return _0x1fd30e + _0xc0cb04;
      },
      "LVaoE": _0x22d757(274, "pZMz"),
      "QIWBB": "\u66F4\u65B0\u6570\u636E\u5931\u8D25\uFF0C\u4EFB\u52A1\u505C\u6B62",
      "vcSVv": function (_0x1cd552, _0x76fc1) {
        return _0x1cd552 === _0x76fc1;
      },
      "JasGr": _0x22d757(583, "V(f*"),
      "waGrr": function (_0x1e6be9, _0x26b608) {
        return _0x1e6be9 === _0x26b608;
      },
      "zJqYZ": _0x22d757(197, "B@]1"),
      "TpNrE": _0x22d757(457, "]N9o"),
      "KKFqC": function (_0x3c43b4, _0x5f4448) {
        return _0x3c43b4 <= _0x5f4448;
      },
      "dwKMl": "\u5361\u5BC6\u4F7F\u7528\u6B21\u6570\u4E0D\u8DB3\uFF0C\u4EFB\u52A1\u505C\u6B62\u3002",
      "RxJdQ": function (_0x514f54) {
        return _0x514f54();
      },
      "hpXDr": function (_0x54964f, _0x50e387) {
        return _0x54964f !== _0x50e387;
      },
      "MQyMy": _0x22d757(672, "]N9o"),
      "JMVlQ": "bhCki",
      "nvOEp": _0x22d757(309, "JouG"),
      "qhvjc": _0x22d757(592, "6*6P"),
      "wmJnS": "jNVDH",
      "SUilV": "\u5F53\u524D\u8BBE\u5907\u4E0D\u5339\u914D\uFF0C\u4EFB\u52A1\u505C\u6B62\u3002",
      "yvJyz": "http://bingapi.xymy.xyz/api/updateHash",
      "QYqxn": "application/json",
      "djSKe": function (_0x397f8a, _0x17f0e8) {
        return _0x397f8a === _0x17f0e8;
      },
      "xIsdL": _0x22d757(168, "V!tL"),
      "doqYB": "\u8BBE\u5907\u7ED1\u5B9A\u5931\u8D25:",
      "OrUFI": _0x22d757(469, "!c5i"),
      "LiBcW": _0x22d757(564, "vOBH"),
      "xejnn": _0x22d757(257, "$sq&")
    },
    _0x13da86 = _0x22d757(768, "y9RD"),
    _0x2d56c6 = {
      "originalText": _0x495f84
    },
    _0x1811ec = {
      "Content-Type": _0x22d757(692, "eUvn")
    };
  try {
    if (_0x2fa5b8[_0x22d757(575, "vYT2")](_0x2fa5b8[_0x22d757(300, "@S9i")], _0x2fa5b8[_0x22d757(869, "QZk^")])) {
      const _0x3787aa = await axios["post"](_0x13da86, _0x2d56c6, {
          "headers": _0x1811ec
        }),
        _0x3ba141 = _0x3787aa[_0x22d757(498, "Wy9F")];
      if (_0x3ba141["code"] === 200 && _0x3ba141["data"] && _0x3ba141[_0x22d757(262, "1pfr")]["length"] > 0) {
        if (_0x2fa5b8[_0x22d757(446, "]N9o")](_0x22d757(911, "9uh^"), _0x2fa5b8[_0x22d757(337, "pZMz")])) {
          const _0x2cfbfa = _0x33bbbe["floor"](_0x4d2103["random"]() * _0x2fa5b8["TfwOZ"](_0x5ca5e7, 1));
          [_0x4f9843[_0x4027d0], _0x5d922c[_0x2cfbfa]] = [_0x50095c[_0x2cfbfa], _0x25a261[_0x1ecd73]];
        } else {
          const _0x475eac = _0x3ba141["data"][0];
          console[_0x22d757(187, "SD)4")](_0x2fa5b8[_0x22d757(694, "AS)4")], _0x475eac["usage_count"]);
          if (_0x2fa5b8[_0x22d757(223, "61MK")](_0x475eac["usage_count"], 0)) return console[_0x22d757(394, "@0Bk")](_0x2fa5b8["dwKMl"]), ![];
          let _0x17e6d9 = _0x3ba141[_0x22d757(417, "7)k3")][0][_0x22d757(859, "7)k3")];
          const _0x31701f = _0x3ba141["data"][0][_0x22d757(188, "F11s")],
            _0x5f5897 = _0x2fa5b8["RxJdQ"](getMacAddress);
          if (!_0x5f5897) {
            if (_0x2fa5b8[_0x22d757(720, "JouG")](_0x2fa5b8[_0x22d757(731, "@S9i")], _0x2fa5b8[_0x22d757(296, "]N9o")])) return console["log"](_0x2fa5b8[_0x22d757(427, "F11s")]), ![];else {
              _0x19afa7[_0x22d757(712, "!c5i")](_0x22d757(247, "]HZR") + _0x5d772b + _0x22d757(773, "@0Bk")), _0x1b696d += _0x22d757(420, "vOBH") + _0x249144 + _0x22d757(709, "HcSA"), _0x4974e3[_0x22d757(429, "I7Py")](_0x2fa5b8[_0x22d757(748, "61MK")], _0x22d757(166, "!c5i") + _0x198494 + _0x22d757(648, "1pfr"));
              return;
            }
          }
          console[_0x22d757(693, "@S9i")](_0x22d757(359, "AS)4"), _0x5f5897);
          if (_0x17e6d9) {
            if (_0x2fa5b8[_0x22d757(815, "L(FN")](_0x17e6d9, _0x5f5897)) {
              if (_0x2fa5b8[_0x22d757(479, "!c5i")] !== _0x2fa5b8[_0x22d757(266, "sLs&")]) return !![];else _0x54dbfb++;
            } else return console[_0x22d757(866, "bPzX")](_0x2fa5b8[_0x22d757(584, "7)k3")]), ![];
          } else {
            const _0x3a3110 = _0x2fa5b8["yvJyz"],
              _0x3e7c97 = {
                "md5_hash": _0x31701f,
                "mac_address": _0x5f5897
              },
              _0x75dde7 = await axios[_0x22d757(454, "*@TT")](_0x3a3110, _0x3e7c97, {
                "headers": {
                  "Content-Type": _0x2fa5b8[_0x22d757(896, "L(FN")]
                }
              }),
              _0x22184c = _0x75dde7[_0x22d757(280, "$sq&")];
            return _0x2fa5b8["djSKe"](_0x22184c[_0x22d757(496, "hczt")], 200) ? (console[_0x22d757(956, "eUvn")](_0x2fa5b8[_0x22d757(868, "r2tM")]), !![]) : (console[_0x22d757(172, "kCjT")](_0x2fa5b8["doqYB"]), ![]);
          }
        }
      } else return console[_0x22d757(753, "ILU)")](_0x22d757(550, "OMHY")), ![];
    } else {
      _0x25af59["error"](_0x22d757(707, "]HZR"), _0x21f0ba[_0x22d757(642, "OMHY")] || _0x288539);
      throw new _0x145ec2(_0x2fa5b8[_0x22d757(843, "ILU)")]);
    }
  } catch (_0x1cb993) {
    if (_0x2fa5b8[_0x22d757(344, "I7Py")](_0x2fa5b8[_0x22d757(840, "]HZR")], _0x2fa5b8[_0x22d757(282, "y9RD")])) {
      _0x368fc1["log"](_0x4f6380["message"]);
      return;
    } else return console[_0x22d757(936, "IIfE")](_0x2fa5b8["xejnn"]), ![];
  }
}
async function updateCardKey(_0x4c46d8) {
  const _0x90d5f5 = _0x3aa276,
    _0x1cce70 = {
      "XgXdq": _0x90d5f5(397, "UB(Y"),
      "luprV": function (_0x1f26f1, _0x513345) {
        return _0x1f26f1 + _0x513345;
      },
      "kJGuw": _0x90d5f5(733, "QZk^"),
      "xaENu": function (_0x517274, _0x2bcfba) {
        return _0x517274(_0x2bcfba);
      },
      "YEjGt": function (_0x5d5b92, _0xe8e443) {
        return _0x5d5b92(_0xe8e443);
      },
      "vkspg": function (_0x5010db, _0x39bc41) {
        return _0x5010db(_0x39bc41);
      },
      "uaEbz": function (_0x199ad5, _0x24768a) {
        return _0x199ad5(_0x24768a);
      },
      "UWqsn": _0x90d5f5(509, "*19I"),
      "FMPuf": "application/json",
      "vwJjr": function (_0x138c28, _0x358445) {
        return _0x138c28 !== _0x358445;
      },
      "sPhxw": _0x90d5f5(901, "UB(Y"),
      "KErlD": function (_0x574290, _0x1817b0) {
        return _0x574290 === _0x1817b0;
      },
      "BbqRi": _0x90d5f5(323, "UB(Y"),
      "thIAv": function (_0x4539a7, _0x4d4c63) {
        return _0x4539a7 === _0x4d4c63;
      },
      "hVsuC": _0x90d5f5(373, "Zwjr"),
      "Cjcvo": _0x90d5f5(793, "YZvv")
    },
    _0x240945 = new Date(),
    _0x288fc9 = _0x240945["getFullYear"](),
    _0x3a93a4 = _0x1cce70[_0x90d5f5(243, "IIfE")](String, _0x1cce70[_0x90d5f5(819, "]N9o")](_0x240945["getMonth"](), 1))[_0x90d5f5(674, "sLs&")](2, "0"),
    _0x99ffa9 = _0x1cce70[_0x90d5f5(727, "0[u[")](String, _0x240945[_0x90d5f5(574, "]N9o")]())[_0x90d5f5(363, "61MK")](2, "0"),
    _0xd2b826 = _0x1cce70["vkspg"](String, _0x240945["getHours"]())[_0x90d5f5(256, "6*6P")](2, "0"),
    _0xd72465 = _0x1cce70[_0x90d5f5(702, "6*6P")](String, _0x240945[_0x90d5f5(598, "61MK")]())["padStart"](2, "0"),
    _0x2a45c2 = _0x288fc9 + "/" + _0x3a93a4 + "/" + _0x99ffa9 + " " + _0xd2b826 + ":" + _0xd72465,
    _0x50c30f = _0x1cce70["UWqsn"],
    _0x4e99e8 = {
      "md5_hash": _0x4c46d8,
      "last_run_time": _0x2a45c2
    },
    _0x142d6f = {
      "Content-Type": _0x1cce70["FMPuf"]
    };
  try {
    if (_0x1cce70[_0x90d5f5(424, "61MK")](_0x1cce70[_0x90d5f5(434, "F11s")], _0x90d5f5(295, "OMHY"))) _0x5cf85c++, _0x44ec38[_0x90d5f5(192, "!c5i")]("\u4EFB\u52A1\u5DF2\u5B8C\u6210");else {
      const _0x39c8a0 = await axios[_0x90d5f5(343, "1pfr")](_0x50c30f, _0x4e99e8, {
          "headers": _0x142d6f
        }),
        _0xd4ac2b = _0x39c8a0[_0x90d5f5(551, "6*6P")];
      if (_0x1cce70["KErlD"](_0xd4ac2b[_0x90d5f5(183, "9uh^")], _0x90d5f5(321, "OMHY"))) console[_0x90d5f5(360, "I7Py")](_0x1cce70[_0x90d5f5(209, "*19I")], _0xd4ac2b["new_usage_count"]);else {
        if (_0x1cce70[_0x90d5f5(647, "AS)4")](_0x90d5f5(696, "I7Py"), _0x90d5f5(237, "r2tM"))) _0x1f4de7[_0x90d5f5(476, "Zwjr")](_0x1cce70[_0x90d5f5(766, "y9RD")]), _0x3a49c0 = _0x1cce70[_0x90d5f5(406, "9uh^")](_0x1cce70[_0x90d5f5(552, "vYT2")], _0xbe1509[_0x90d5f5(414, "*19I")](""));else {
          console[_0x90d5f5(939, "OMHY")](_0x90d5f5(445, "L(FN"), _0xd4ac2b["message"]);
          throw new Error(_0x1cce70[_0x90d5f5(937, "7)k3")]);
        }
      }
    }
  } catch (_0x4869c5) {
    console[_0x90d5f5(522, "I7Py")](_0x1cce70[_0x90d5f5(920, "Zwjr")], _0x4869c5[_0x90d5f5(663, "Wy9F")] || _0x4869c5);
    throw new Error(_0x90d5f5(493, "6*6P"));
  }
}
async function main() {
  const _0x2c09ae = _0x3aa276,
    _0x8e8662 = {
      "pHibl": _0x2c09ae(864, "L(FN"),
      "YuXsg": function (_0x4bbf00) {
        return _0x4bbf00();
      },
      "CLXcC": _0x2c09ae(629, "mXv]"),
      "eeMxD": function (_0x108f8d) {
        return _0x108f8d();
      },
      "tZDPo": function (_0x94925b, _0x1b3178) {
        return _0x94925b === _0x1b3178;
      },
      "YjVhX": _0x2c09ae(812, "!c5i"),
      "isnbH": _0x2c09ae(162, "QGE#"),
      "hQDxM": _0x2c09ae(769, "]N9o"),
      "tDQeq": _0x2c09ae(412, "9tUp"),
      "Paovn": function (_0x11e397, _0x4f1fc5) {
        return _0x11e397 !== _0x4f1fc5;
      },
      "NNppj": "Qzpns",
      "autDS": _0x2c09ae(557, "QZk^"),
      "UMlZj": function (_0x401432, _0x58ca67) {
        return _0x401432(_0x58ca67);
      },
      "DMLHf": _0x2c09ae(955, "*19I"),
      "cnGWv": function (_0x26d048, _0x575ea5) {
        return _0x26d048(_0x575ea5);
      },
      "zxujx": function (_0x9c0b81) {
        return _0x9c0b81();
      },
      "tFaQD": "\u5F00\u59CBweb\u6BCF\u65E5\u4EFB\u52A1...",
      "rvRbv": function (_0xaa2e59, _0x5bd892) {
        return _0xaa2e59 === _0x5bd892;
      },
      "FXEKC": function (_0x1c5bb1, _0x3382c) {
        return _0x1c5bb1 === _0x3382c;
      },
      "ILZeE": _0x2c09ae(716, "9uh^"),
      "ScGha": "GZrgd",
      "adoZy": function (_0x4d7cc4, _0x26e83e) {
        return _0x4d7cc4 + _0x26e83e;
      },
      "NVjzn": _0x2c09ae(797, "L(FN"),
      "gtrqA": _0x2c09ae(391, "L(FN"),
      "wzIrm": _0x2c09ae(506, "UB(Y"),
      "wTyyG": "\u2014\u2014\u2014\u2014\u2014\u2014app\u4EFB\u52A1\u2014\u2014\u2014\u2014\u2014\u2014\n",
      "xdwmj": "\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u8D26\u53F7\u7EDF\u8BA1\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014",
      "rvQOc": _0x2c09ae(729, "Wy9F")
    };
  await _0x8e8662[_0x2c09ae(820, "9uh^")](fetchProxyUrl), console[_0x2c09ae(371, "sLs&")](_0x8e8662[_0x2c09ae(562, "kCjT")], global[_0x2c09ae(652, "61MK")][_0x2c09ae(182, "F11s")]);
  const _0x4cd485 = await _0x8e8662["eeMxD"](testProxy);
  if (!_0x4cd485) {
    if (_0x8e8662[_0x2c09ae(708, "YZvv")](_0x2c09ae(572, "9uh^"), _0x8e8662["YjVhX"])) {
      console[_0x2c09ae(176, "V!tL")](_0x8e8662[_0x2c09ae(889, "9uh^")]);
      return;
    } else return _0x283a3f["warn"](_0x2c09ae(426, "*19I") + _0x3e5d1f + _0x2c09ae(478, "@S9i")), null;
  }
  let _0x17e8c2 = "";
  const _0x7a757 = await _0x8e8662["YuXsg"](version);
  console[_0x2c09ae(476, "Zwjr")](_0x2c09ae(832, "]HZR") + localVersion), console[_0x2c09ae(866, "bPzX")](_0x2c09ae(657, "0[u[") + _0x7a757["msg"]);
  if (!_0x7a757) {
    console[_0x2c09ae(172, "kCjT")](_0x8e8662[_0x2c09ae(504, "1pfr")]);
    return;
  }
  if (_0x7a757[_0x2c09ae(180, "AS)4")] !== localVersion) {
    console[_0x2c09ae(224, "p9sy")]("\u7248\u672C\u4E0D\u5339\u914D\u4E91\u7AEF\u7248\u672C" + _0x7a757[_0x2c09ae(946, "r2tM")]);
    return;
  } else _0x8e8662["tDQeq"] === _0x8e8662[_0x2c09ae(164, "@0Bk")] ? console[_0x2c09ae(302, "6*6P")](_0x2c09ae(200, "OMHY")) : (_0xa02421++, _0x22d306["log"]("[\u8D26\u53F7 " + _0x2559e9 + "] " + _0x98d4b5 + _0x2c09ae(503, "r2tM") + _0x2a20d7));
  const _0x13d0c6 = process["env"][_0x2c09ae(404, "ILU)")];
  if (!_0x13d0c6) {
    if (_0x8e8662[_0x2c09ae(653, "p9sy")](_0x2c09ae(370, "!c5i"), _0x8e8662[_0x2c09ae(681, "@S9i")])) {
      console["log"](_0x8e8662[_0x2c09ae(878, "1pfr")]);
      return;
    } else try {
      const _0xa6b01f = {
          "accounts": _0x2bb1ba
        },
        _0x20528e = _0x5736f4[_0x2c09ae(906, "hczt")](_0xa6b01f, {
          "lineWidth": 1000000
        });
      _0x339e85[_0x2c09ae(863, "61MK")](_0x5b8191, _0x20528e, _0x8e8662[_0x2c09ae(467, "1pfr")]);
    } catch (_0x48a775) {
      _0x3ac40a[_0x2c09ae(581, "!c5i")](_0x2c09ae(236, "#3D2") + _0x2750c6 + " \u6587\u4EF6\u5931\u8D25:", _0x48a775);
      throw _0x48a775;
    }
  }
  const _0x2274d3 = await _0x8e8662[_0x2c09ae(676, "r2tM")](checkCardKey, _0x13d0c6);
  if (!_0x2274d3) {
    console["log"](_0x8e8662[_0x2c09ae(177, "IG&#")]);
    return;
  }
  try {
    await _0x8e8662[_0x2c09ae(857, "1pfr")](updateCardKey, _0x13d0c6);
  } catch (_0x36d1b5) {
    console[_0x2c09ae(234, "0[u[")](_0x36d1b5[_0x2c09ae(849, "hczt")]);
    return;
  }
  let _0x50f054 = await _0x8e8662["zxujx"](getAccountsFromYaml),
    _0x40a2f9 = _0x50f054["map"](_0x1f68f8 => _0x1f68f8["access_token"])["filter"](_0x562279 => _0x562279);
  console[_0x2c09ae(823, "QZk^")]("\u5F00\u59CBweb\u641C\u7D22\u4EFB\u52A1..."), await Promise[_0x2c09ae(298, "*19I")](cks[_0x2c09ae(499, "]N9o")]((_0x383c3b, _0x674acc) => processAccount(_0x674acc + 1, _0x383c3b, getKeywords, getBalance, performSearch))), console["log"](_0x8e8662[_0x2c09ae(853, "pZMz")]);
  const _0x45c241 = await Promise["all"](cks[_0x2c09ae(659, "61MK")]((_0xf68dc, _0x2a9374) => executeTask(_0x2a9374 + 1, _0xf68dc, getToken)));
  if (_0x8e8662["rvRbv"](_0x40a2f9["length"], 0)) {
    if (_0x8e8662[_0x2c09ae(728, "9tUp")](_0x8e8662[_0x2c09ae(461, "]N9o")], _0x8e8662[_0x2c09ae(617, "0AA3")])) {
      _0x1a269b["error"](_0x2c09ae(632, "9uh^") + _0x2ea458 + _0x2c09ae(521, "0AA3"));
      return;
    } else console["log"](_0x2c09ae(167, "vYT2")), _0x17e8c2 = _0x8e8662[_0x2c09ae(711, "9tUp")](_0x8e8662["NVjzn"], _0x45c241[_0x2c09ae(193, "bPzX")](""));
  } else {
    console[_0x2c09ae(954, "FVLe")](_0x8e8662[_0x2c09ae(497, "9uh^")]);
    const _0x1a4b45 = await Promise["all"](_0x40a2f9[_0x2c09ae(537, "@S9i")]((_0x21a5bd, _0x271b4d) => executeReadingTask(_0x271b4d + 1, _0x21a5bd)));
    console[_0x2c09ae(231, "AS)4")](_0x8e8662[_0x2c09ae(821, "0AA3")]);
    const _0x12a607 = await Promise[_0x2c09ae(667, "mXv]")](_0x40a2f9["map"]((_0x5d4171, _0x3598af) => signIn(_0x3598af + 1, _0x5d4171)));
    _0x17e8c2 = _0x8e8662[_0x2c09ae(711, "9tUp")](_0x8e8662[_0x2c09ae(814, "I7Py")](_0x8e8662["NVjzn"], _0x45c241[_0x2c09ae(804, "9tUp")]("")) + _0x8e8662["wTyyG"] + _0x12a607["join"](""), _0x1a4b45[_0x2c09ae(489, "IG&#")](""));
  }
  console[_0x2c09ae(327, "1pfr")](_0x8e8662["xdwmj"]), console[_0x2c09ae(839, "UB(Y")](_0x17e8c2);
  if (process[_0x2c09ae(387, "@0Bk")][_0x2c09ae(882, "p9sy")] === _0x2c09ae(736, "JouG")) {
    if (_0x8e8662[_0x2c09ae(933, "mXv]")](_0x8e8662[_0x2c09ae(320, "B@]1")], _0x2c09ae(377, "HcSA"))) return _0x5311c7[_0x2c09ae(914, "kCjT")];else QLAPI["notify"](_0x2c09ae(346, "*@TT"), _0x17e8c2);
  }
}
main()[_0x3aa276(845, "mXv]")](_0x20d8de => console["error"]("\u6267\u884C\u51FA\u9519:", _0x20d8de));
var version_ = "jsjiami.com.v7";
