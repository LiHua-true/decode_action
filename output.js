//Sat Jan 17 2026 06:49:55 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
"use strict";

Object.defineProperty(exports, "__esModule", {
  "value": true
});
const axios_1 = require("axios"),
  cheerio_1 = require("cheerio"),
  CryptoJs = require("crypto-js"),
  he = require("he"),
  pageSize = 20;
function formatMusicItem(_0x5002c8) {
  var _0x30cc11, _0x421df4, _0xffebeb, _0x3a2f8c, _0x3845e4, _0x2b98f, _0x20d47f, _0x5a6943, _0x29c4b7;
  return {
    "id": (_0x3a2f8c = _0x5002c8.FileHash) !== null && _0x3a2f8c !== void 0 ? _0x3a2f8c : _0x5002c8.Grp[0].FileHash,
    "title": (_0x30cc11 = _0x5002c8.SongName) !== null && _0x30cc11 !== void 0 ? _0x30cc11 : _0x5002c8.OriSongName,
    "artist": (_0x421df4 = _0x5002c8.SingerName) !== null && _0x421df4 !== void 0 ? _0x421df4 : _0x5002c8.Singers[0].name,
    "album": (_0xffebeb = _0x5002c8.AlbumName) !== null && _0xffebeb !== void 0 ? _0xffebeb : _0x5002c8.Grp[0].AlbumName,
    "album_id": (_0x3845e4 = _0x5002c8.AlbumID) !== null && _0x3845e4 !== void 0 ? _0x3845e4 : _0x5002c8.Grp[0].AlbumID,
    "album_audio_id": 0,
    "duration": _0x5002c8.Duration,
    "artwork": ((_0x2b98f = _0x5002c8.Image) !== null && _0x2b98f !== void 0 ? _0x2b98f : _0x5002c8.Grp[0].Image).replace("{size}", "1080"),
    "320hash": (_0x29c4b7 = _0x5002c8.HQFileHash) !== null && _0x29c4b7 !== void 0 ? _0x29c4b7 : undefined,
    "sqhash": (_0x20d47f = _0x5002c8.SQFileHash) !== null && _0x20d47f !== void 0 ? _0x20d47f : undefined,
    "ResFileHash": (_0x5a6943 = _0x5002c8.ResFileHash) !== null && _0x5a6943 !== void 0 ? _0x5a6943 : undefined
  };
}
function formatMusicItem2(_0x8e7500) {
  var _0x2b7da0, _0xe00d3b, _0x28c24d, _0x2eb017, _0x364b07, _0x260b2b, _0x3d326a;
  return {
    "id": _0x8e7500.hash,
    "title": _0x8e7500.songname,
    "artist": (_0x2b7da0 = _0x8e7500.singername) !== null && _0x2b7da0 !== void 0 ? _0x2b7da0 : ((_0x28c24d = (_0xe00d3b = _0x8e7500.authors) === null || _0xe00d3b === void 0 ? void 0 : _0xe00d3b.map(_0x4a2bec => {
      var _0x23c971;
      return (_0x23c971 = _0x4a2bec === null || _0x4a2bec === void 0 ? void 0 : _0x4a2bec.author_name) !== null && _0x23c971 !== void 0 ? _0x23c971 : "";
    })) === null || _0x28c24d === void 0 ? void 0 : _0x28c24d.join(", ")) || ((_0x260b2b = (_0x364b07 = (_0x2eb017 = _0x8e7500.filename) === null || _0x2eb017 === void 0 ? void 0 : _0x2eb017.split("-")) === null || _0x364b07 === void 0 ? void 0 : _0x364b07[0]) === null || _0x260b2b === void 0 ? void 0 : _0x260b2b.trim()),
    "album": (_0x3d326a = _0x8e7500.album_name) !== null && _0x3d326a !== void 0 ? _0x3d326a : _0x8e7500.remark,
    "album_id": _0x8e7500.album_id,
    "album_audio_id": _0x8e7500.album_audio_id,
    "artwork": _0x8e7500.album_sizable_cover ? _0x8e7500.album_sizable_cover.replace("{size}", "400") : undefined,
    "duration": _0x8e7500.duration,
    "320hash": _0x8e7500["320hash"],
    "sqhash": _0x8e7500.sqhash,
    "origin_hash": _0x8e7500.origin_hash
  };
}
function formatImportMusicItem(_0x145a1e) {
  var _0x29ba59, _0x140e65, _0x426ece, _0x5e1178, _0x34f763, _0x3c02e5, _0xae2b51;
  let _0x1a8735 = _0x145a1e.name;
  const _0x4486ca = _0x145a1e.singername;
  if (_0x4486ca && _0x1a8735) {
    const _0x4a7d5a = _0x1a8735.indexOf(_0x4486ca);
    if (_0x4a7d5a !== -1) {
      _0x1a8735 = (_0x29ba59 = _0x1a8735.substring(_0x4a7d5a + _0x4486ca.length + 2)) === null || _0x29ba59 === void 0 ? void 0 : _0x29ba59.trim();
    }
    !_0x1a8735 && (_0x1a8735 = _0x4486ca);
  }
  const _0x49babd = _0x145a1e.relate_goods;
  return {
    "id": _0x145a1e.hash,
    "title": _0x1a8735,
    "artist": _0x4486ca,
    "album": (_0x140e65 = _0x145a1e.albumname) !== null && _0x140e65 !== void 0 ? _0x140e65 : "",
    "album_id": _0x145a1e.album_id,
    "album_audio_id": _0x145a1e.album_audio_id,
    "artwork": (_0x5e1178 = (_0x426ece = _0x145a1e === null || _0x145a1e === void 0 ? void 0 : _0x145a1e.info) === null || _0x426ece === void 0 ? void 0 : _0x426ece.image) === null || _0x5e1178 === void 0 ? void 0 : _0x5e1178.replace("{size}", "400"),
    "320hash": (_0x34f763 = _0x49babd === null || _0x49babd === void 0 ? void 0 : _0x49babd[1]) === null || _0x34f763 === void 0 ? void 0 : _0x34f763.hash,
    "sqhash": (_0x3c02e5 = _0x49babd === null || _0x49babd === void 0 ? void 0 : _0x49babd[2]) === null || _0x3c02e5 === void 0 ? void 0 : _0x3c02e5.hash,
    "origin_hash": (_0xae2b51 = _0x49babd === null || _0x49babd === void 0 ? void 0 : _0x49babd[3]) === null || _0xae2b51 === void 0 ? void 0 : _0xae2b51.hash
  };
}
const headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
  "Accept": "*/*",
  "Accept-Encoding": "gzip, deflate",
  "Accept-Language": "zh-CN,zh;q=0.9"
};
async function searchMusic(_0x54cde4, _0x310c71) {
  const _0x4a9ca5 = (await axios_1.default.get("https://songsearch.kugou.com/song_search_v2", {
      "headers": headers,
      "params": {
        "keyword": _0x54cde4,
        "page": _0x310c71,
        "pagesize": pageSize,
        "userid": 0,
        "clientver": "",
        "platform": "WebFilter",
        "filter": 2,
        "iscorrection": 1,
        "privilege_filter": 0,
        "area_code": 1
      }
    })).data,
    _0x3115e9 = _0x4a9ca5.data.lists.map(formatMusicItem);
  return {
    "isEnd": _0x310c71 * pageSize >= _0x4a9ca5.data.total,
    "data": _0x3115e9
  };
}
async function searchAlbum(_0x3c2107, _0x28ecaf) {
  const _0xb93857 = (await axios_1.default.get("http://msearch.kugou.com/api/v3/search/album", {
      "headers": headers,
      "params": {
        "version": 9108,
        "iscorrection": 1,
        "highlight": "em",
        "plat": 0,
        "keyword": _0x3c2107,
        "pagesize": 20,
        "page": _0x28ecaf,
        "sver": 2,
        "with_res_tag": 0
      }
    })).data,
    _0x56b902 = _0xb93857.data.info.map(_0x285c5d => {
      var _0x42f7ae, _0x440cbb;
      return {
        "id": _0x285c5d.albumid,
        "artwork": (_0x42f7ae = _0x285c5d.imgurl) === null || _0x42f7ae === void 0 ? void 0 : _0x42f7ae.replace("{size}", "400"),
        "artist": _0x285c5d.singername,
        "title": (0, cheerio_1.load)(_0x285c5d.albumname).text(),
        "description": _0x285c5d.intro,
        "date": (_0x440cbb = _0x285c5d.publishtime) === null || _0x440cbb === void 0 ? void 0 : _0x440cbb.slice(0, 10)
      };
    });
  return {
    "isEnd": _0x28ecaf * 20 >= _0xb93857.data.total,
    "data": _0x56b902
  };
}
async function searchMusicSheet(_0x4bc373, _0x1a0a22) {
  const _0x4ad1b4 = (await axios_1.default.get("http://mobilecdn.kugou.com/api/v3/search/special", {
      "headers": headers,
      "params": {
        "format": "json",
        "keyword": _0x4bc373,
        "page": _0x1a0a22,
        "pagesize": pageSize,
        "showtype": 1
      }
    })).data,
    _0x5b8acd = _0x4ad1b4.data.info.map(_0x32a9b7 => ({
      "title": _0x32a9b7.specialname,
      "createAt": _0x32a9b7.publishtime,
      "description": _0x32a9b7.intro,
      "artist": _0x32a9b7.nickname,
      "coverImg": _0x32a9b7.imgurl,
      "gid": _0x32a9b7.gid,
      "playCount": _0x32a9b7.playcount,
      "id": _0x32a9b7.specialid,
      "worksNum": _0x32a9b7.songcount
    }));
  return {
    "isEnd": _0x1a0a22 * pageSize >= _0x4ad1b4.data.total,
    "data": _0x5b8acd
  };
}
const qualityLevels = {
  "low": "standard",
  "standard": "exhigh",
  "high": "lossless",
  "super": "hires"
};
async function getMediaSource(_0x33d1bd, _0x26e0e3) {
  const _0x3c67bf = (await axios_1.default.get("https://music.haitangw.cc/kgqq/kg.php?id=" + _0x33d1bd.id + "&type=json&level=" + qualityLevels[_0x26e0e3])).data;
  return {
    "url": _0x3c67bf.data.url
  };
}
async function getTopLists() {
  const _0x109c23 = (await axios_1.default.get("http://mobilecdnbj.kugou.com/api/v3/rank/list?version=9108&plat=0&showtype=2&parentid=0&apiver=6&area_code=1&withsong=0&with_res_tag=0", {
      "headers": headers
    })).data.data.info,
    _0x240465 = [{
      "title": "热门榜单",
      "data": []
    }, {
      "title": "特色音乐榜",
      "data": []
    }, {
      "title": "全球榜",
      "data": []
    }],
    _0x5a72e8 = {
      "title": "其他",
      "data": []
    };
  return _0x109c23.forEach(_0x381e3a => {
    var _0x1840a3, _0x52494a, _0x5f5063, _0x4497dd;
    if (_0x381e3a.classify === 1 || _0x381e3a.classify === 2) _0x240465[0].data.push({
      "id": _0x381e3a.rankid,
      "description": _0x381e3a.intro,
      "coverImg": (_0x1840a3 = _0x381e3a.imgurl) === null || _0x1840a3 === void 0 ? void 0 : _0x1840a3.replace("{size}", "400"),
      "title": _0x381e3a.rankname
    });else {
      if (_0x381e3a.classify === 3 || _0x381e3a.classify === 5) _0x240465[1].data.push({
        "id": _0x381e3a.rankid,
        "description": _0x381e3a.intro,
        "coverImg": (_0x52494a = _0x381e3a.imgurl) === null || _0x52494a === void 0 ? void 0 : _0x52494a.replace("{size}", "400"),
        "title": _0x381e3a.rankname
      });else _0x381e3a.classify === 4 ? _0x240465[2].data.push({
        "id": _0x381e3a.rankid,
        "description": _0x381e3a.intro,
        "coverImg": (_0x5f5063 = _0x381e3a.imgurl) === null || _0x5f5063 === void 0 ? void 0 : _0x5f5063.replace("{size}", "400"),
        "title": _0x381e3a.rankname
      }) : _0x5a72e8.data.push({
        "id": _0x381e3a.rankid,
        "description": _0x381e3a.intro,
        "coverImg": (_0x4497dd = _0x381e3a.imgurl) === null || _0x4497dd === void 0 ? void 0 : _0x4497dd.replace("{size}", "400"),
        "title": _0x381e3a.rankname
      });
    }
  }), _0x5a72e8.data.length !== 0 && _0x240465.push(_0x5a72e8), _0x240465;
}
async function getTopListDetail(_0x549714) {
  const _0x489767 = await axios_1.default.get("http://mobilecdnbj.kugou.com/api/v3/rank/song?version=9108&ranktype=0&plat=0&pagesize=100&area_code=1&page=1&volid=35050&rankid=" + _0x549714.id + "&with_res_tag=0", {
    "headers": headers
  });
  return Object.assign(Object.assign({}, _0x549714), {
    "musicList": _0x489767.data.data.info.map(formatMusicItem2)
  });
}
async function getLyricDownload(_0x4cfa4a) {
  const _0x140e50 = (await (0, axios_1.default)({
    "url": "http://lyrics.kugou.com/download?ver=1&client=pc&id=" + _0x4cfa4a.id + "&accesskey=" + _0x4cfa4a.accessKey + "&fmt=lrc&charset=utf8",
    "headers": {
      "KG-RC": 1,
      "KG-THash": "expand_search_manager.cpp:852736169:451",
      "User-Agent": "KuGou2012-9020-ExpandSearchManager"
    },
    "method": "get",
    "xsrfCookieName": "XSRF-TOKEN",
    "withCredentials": true
  })).data;
  return {
    "rawLrc": he.decode(CryptoJs.enc.Base64.parse(_0x140e50.content).toString(CryptoJs.enc.Utf8))
  };
}
async function getLyric(_0x2cbe57) {
  const _0x5a2f6e = (await (0, axios_1.default)({
      "url": "http://lyrics.kugou.com/search?ver=1&man=yes&client=pc&keyword=" + _0x2cbe57.title + "&hash=" + _0x2cbe57.id + "&timelength=" + _0x2cbe57.duration,
      "headers": {
        "KG-RC": 1,
        "KG-THash": "expand_search_manager.cpp:852736169:451",
        "User-Agent": "KuGou2012-9020-ExpandSearchManager"
      },
      "method": "get",
      "xsrfCookieName": "XSRF-TOKEN",
      "withCredentials": true
    })).data,
    _0x3f727e = _0x5a2f6e.candidates[0];
  return await getLyricDownload({
    "id": _0x3f727e.id,
    "accessKey": _0x3f727e.accesskey
  });
}
async function getAlbumInfo(_0x8cadef, _0x488f0b = 1) {
  const _0x5a57bc = (await axios_1.default.get("http://mobilecdn.kugou.com/api/v3/album/song", {
    "params": {
      "version": 9108,
      "albumid": _0x8cadef.id,
      "plat": 0,
      "pagesize": 100,
      "area_code": 1,
      "page": _0x488f0b,
      "with_res_tag": 0
    }
  })).data;
  return {
    "isEnd": _0x488f0b * 100 >= _0x5a57bc.data.total,
    "albumItem": {
      "worksNum": _0x5a57bc.data.total
    },
    "musicList": _0x5a57bc.data.info.map(_0x283bda => {
      var _0x3a976b;
      const [_0x48efc6, _0x4c9e02] = _0x283bda.filename.split("-");
      return {
        "id": _0x283bda.hash,
        "title": _0x4c9e02.trim(),
        "artist": _0x48efc6.trim(),
        "album": (_0x3a976b = _0x283bda.album_name) !== null && _0x3a976b !== void 0 ? _0x3a976b : _0x283bda.remark,
        "album_id": _0x283bda.album_id,
        "album_audio_id": _0x283bda.album_audio_id,
        "artwork": _0x8cadef.artwork,
        "320hash": _0x283bda.HQFileHash,
        "sqhash": _0x283bda.SQFileHash,
        "origin_hash": _0x283bda.id
      };
    })
  };
}
async function importMusicSheet(_0x216d09) {
  var _0x2ed3b1;
  let _0x17551d = (_0x2ed3b1 = _0x216d09.match(/^(?:.*?)(\d+)(?:.*?)$/)) === null || _0x2ed3b1 === void 0 ? void 0 : _0x2ed3b1[1],
    _0x5a287e = [];
  if (!_0x17551d) {
    return;
  }
  let _0x1d683c = await axios_1.default.post("http://t.kugou.com/command/", {
    "appid": 1001,
    "clientver": 9020,
    "mid": "21511157a05844bd085308bc76ef3343",
    "clienttime": 640612895,
    "key": "36164c4015e704673c588ee202b9ecb8",
    "data": _0x17551d
  });
  if (_0x1d683c.status === 200 && _0x1d683c.data.status === 1) {
    let _0x5c7dd8 = _0x1d683c.data.data,
      _0xb6a103 = await axios_1.default.post("http://www2.kugou.kugou.com/apps/kucodeAndShare/app/", {
        "appid": 1001,
        "clientver": 10112,
        "mid": "70a02aad1ce4648e7dca77f2afa7b182",
        "clienttime": 722219501,
        "key": "381d7062030e8a5a94cfbe50bfe65433",
        "data": {
          "id": _0x5c7dd8.info.id,
          "type": 3,
          "userid": _0x5c7dd8.info.userid,
          "collect_type": _0x5c7dd8.info.collect_type,
          "page": 1,
          "pagesize": _0x5c7dd8.info.count
        }
      });
    if (_0xb6a103.status === 200 && _0xb6a103.data.status === 1) {
      let _0x4abbec = [];
      _0xb6a103.data.data.forEach(_0x23a08a => {
        _0x4abbec.push({
          "album_audio_id": 0,
          "album_id": "0",
          "hash": _0x23a08a.hash,
          "id": 0,
          "name": _0x23a08a.filename.replace(".mp3", ""),
          "page_id": 0,
          "type": "audio"
        });
      });
      let _0x49343a = {
        "appid": 1001,
        "area_code": "1",
        "behavior": "play",
        "clientver": "10112",
        "dfid": "2O3jKa20Gdks0LWojP3ly7ck",
        "mid": "70a02aad1ce4648e7dca77f2afa7b182",
        "need_hash_offset": 1,
        "relate": 1,
        "resource": _0x4abbec,
        "token": "",
        "userid": "0",
        "vip": 0
      };
      var _0x507872 = await axios_1.default.post("https://gateway.kugou.com/v2/get_res_privilege/lite?appid=1001&clienttime=1668883879&clientver=10112&dfid=2O3jKa20Gdks0LWojP3ly7ck&mid=70a02aad1ce4648e7dca77f2afa7b182&userid=390523108&uuid=92691C6246F86F28B149BAA1FD370DF1", _0x49343a, {
        "headers": {
          "x-router": "media.store.kugou.com"
        }
      });
      _0xb6a103.status === 200 && _0xb6a103.data.status === 1 && (_0x5a287e = _0x507872.data.data.map(formatImportMusicItem));
    }
  }
  return _0x5a287e;
}
module.exports = {
  "platform": "元力KG",
  "version": "1.1.0",
  "author": "公众号:科技长青&元力菌",
  "srcUrl": "https://13413.kstore.vip/yuanli/kg.js",
  "cacheControl": "no-cache",
  "description": "",
  "primaryKey": ["id", "album_id", "album_audio_id"],
  "hints": {
    "importMusicSheet": ["仅支持酷狗APP通过酷狗码导入，输入纯数字酷狗码即可。", "导入时间和歌单大小有关，请耐心等待"]
  },
  "supportedSearchType": ["music", "album", "sheet"],
  async "search"(_0x37c94f, _0x4a5e06, _0x4da6c5) {
    if (_0x4da6c5 === "music") return await searchMusic(_0x37c94f, _0x4a5e06);else {
      if (_0x4da6c5 === "album") return await searchAlbum(_0x37c94f, _0x4a5e06);else {
        if (_0x4da6c5 === "sheet") return await searchMusicSheet(_0x37c94f, _0x4a5e06);
      }
    }
  },
  "getMediaSource": getMediaSource,
  "getTopLists": getTopLists,
  "getLyric": getLyric,
  "getTopListDetail": getTopListDetail,
  "getAlbumInfo": getAlbumInfo,
  "importMusicSheet": importMusicSheet
};