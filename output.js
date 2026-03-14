//Sat Mar 14 2026 13:33:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var feizhu = {
  "cms": {
    "load": function () {
      feizhu.cms.copyer();
      feizhu.cms.lazy("img.bg-body-tertiary");
      if ($(".user-face").length) {
        var _0x11bf79 = $(".user-face");
        feizhu.cms.face(_0x11bf79, _0x11bf79.attr("data-url"));
      }
      $(".comment-get").length && feizhu.comment.load();
      $(".video-iframe").length && feizhu.player.load();
      if ($(".v-playurl").length) {
        var _0x11bf79 = $(".v-playurl").attr("data-play"),
          _0x30d4c4 = $(".v-play .form-select"),
          _0x1e33d5 = $(".v-play .tab-content");
        _0x1e33d5.find("ul").hide().removeClass("d-flex").addClass("d-none");
        if (_0x11bf79) {
          _0x30d4c4.val(_0x11bf79);
          _0x1e33d5.find("." + _0x11bf79).fadeIn("slow").toggleClass("d-flex d-none");
        } else _0x1e33d5.find("ul").eq(0).fadeIn("slow").toggleClass("d-flex d-none");
      }
      if ($(".video-history").length) {
        var _0x11bf79 = feizhu.cookie.get($("body").attr("data-history")),
          _0x30d4c4 = "";
        if (_0x11bf79) {
          var _0x8e0d71 = eval("(" + _0x11bf79 + ")");
          for (i = 0; i < _0x8e0d71.length; i++) {
            _0x30d4c4 += "<li class='d-flex py-3 border-bottom border-secondary border-opacity-10 overflow-hidden'>";
            _0x30d4c4 += "<div class='col-3'><a href='" + _0x8e0d71[i].vod + "' title='" + _0x8e0d71[i].name + "'><img class='img-fluid rounded' src='" + _0x8e0d71[i].pic + "' alt='" + _0x8e0d71[i].name + "'></a></div>";
            _0x30d4c4 += "<div class='col-9 ps-3'><h6><a href='" + _0x8e0d71[i].vod + "'>" + _0x8e0d71[i].name + "</a></h6>";
            _0x30d4c4 += "<p class='text-body-secondary my-1 fs-8'>观看至：" + _0x8e0d71[i].part + "</p>";
            _0x30d4c4 += "<a class='link-danger fs-8' href='" + _0x8e0d71[i].link + "'>继续观看👈</a></div></li>";
          }
          $(".video-history ul").html(_0x30d4c4);
        }
      }
      $("body").on("click", ".history-close", function () {
        confirm("您确定要清除播放记录吗？") && (feizhu.cookie.del($("body").attr("data-history")), layer.msg("操作成功"), $(".history-offcanvas ul").html("<li class=\"text-danger p-2\">暂无历史数据</li>"));
        $(".offcanvas-start").offcanvas("hide");
      });
      var _0x339875 = new Date(),
        _0x543ebf = _0x339875.getFullYear() + "" + (_0x339875.getMonth() + 1) + "" + _0x339875.getDate(),
        _0xd9c311 = feizhu.cookie.get("notice");
      _0x543ebf != _0xd9c311 && $("body").attr("data-notice") == 1 && $.get("/index.php/label/notice", function (_0x24dad2) {
        $("body").append(_0x24dad2);
        $(".navbar-notice").modal("show");
      });
      $("body").on("click", ".navbar-notice button", function () {
        feizhu.cookie.set("notice", _0x543ebf, 1);
        $(".navbar-notice").modal("hide");
      });
      var _0xee4390 = feizhu.cookie.get("user_gonggao");
      !_0xee4390 && $(".alert-gongao").removeClass("d-none");
      $("body").on("close.bs.alert", ".alert", function () {
        feizhu.cookie.set("user_gonggao", 1, 1);
      });
      $(".form-selecter").change(function () {
        var _0x582795 = $(this).find("option:selected").val();
        $(".form-collapse").find("ul").hide().removeClass("d-flex").addClass("d-none");
        $(".form-collapse").find("." + _0x582795).fadeIn("slow").toggleClass("d-flex d-none");
      });
      $("body").on("click", ".click-page button", function () {
        var _0xb479e7 = $(this),
          _0x309208 = _0xb479e7.attr("data-url"),
          _0x440b34 = parseInt(_0xb479e7.attr("data-total")),
          _0x1414c = parseInt($(".click-page input").val());
        if (_0x1414c > 0 && _0x1414c <= _0x440b34) _0x309208 = _0x309208.replace("PAGELINK", _0x1414c), location.href = _0x309208;else {
          layer.msg("请输入1-" + _0x440b34 + "之间的数字");
        }
        return false;
      });
      $("body").on("hide.bs.offcanvas", ".offcanvas", function () {
        $(".video-iframe").removeClass("l-100");
      });
      $("body").on("show.bs.offcanvas", ".offcanvas", function () {
        $(".video-iframe").addClass("l-100");
      });
      $("body").on("show.bs.modal", ".modal", function () {
        $(".video-iframe").addClass("l-100");
      });
      $("body").on("hide.bs.modal", ".modal", function () {
        $(".video-iframe").removeClass("l-100");
        $(".modal,.modal-backdrop").remove();
      });
      $("body").on("show.bs.collapse", ".navbarsb", function () {
        $(".video-iframe").removeClass("l-100");
        $(".sidebar").removeClass("show");
      });
      $("body").on("show.bs.collapse", ".sidebar", function () {
        $(".video-iframe").addClass("l-100");
        $(".navbarsb").removeClass("show");
      });
      $("body").on("hide.bs.collapse", ".collapse", function () {
        $(".video-iframe").removeClass("l-100");
      });
      $("body").on("click", ".video-comments a", function () {
        $(this).parent().remove();
        $(".video-comments li").removeClass("d-none");
      });
      $("body").on("click", ".weekday-tab a", function () {
        $day = $(this).attr("data-day");
        $html = $(".weekday-list").html();
        $.get("/index.php/label/weekday?day=" + $day, function (_0x41e03a) {
          _0x41e03a ? ($(".weekday-list").html(_0x41e03a), feizhu.cms.lazy(".weekday-list img.bg-body-tertiary")) : $(".weekday-list").html($html);
        }, "html");
      });
      $("body").on("click", ".weekday-tab a", function () {
        var _0x3feef8 = $(this).attr("data-day"),
          _0x27715d = $(".text-list").html();
        $.get("/index.php/label/weekday2?day=" + _0x3feef8, function (_0x233f97) {
          _0x233f97 ? ($(".text-list").html(_0x233f97), feizhu.cms.lazy(".text-list img.bg-body-tertiary")) : $(".text-list").html(_0x27715d);
        }, "html");
      });
      $("body").on("click", ".user-submit", function (_0x39dfb0) {
        var _0x1068a3 = $(this).parents("form"),
          _0x1ab322 = _0x1068a3.find(".form-value1"),
          _0x1d9cf4 = _0x1068a3.find(".form-value2"),
          _0x54aff5 = _0x1068a3.find(".form-value3"),
          _0x25bc55 = _0x1068a3.attr("data-action") || document.URL;
        if (_0x1ab322.length && _0x1ab322.val() == "") return layer.msg("璇 " + _0x1ab322.attr("placeholder")), _0x1ab322.focus(), false;
        if (_0x1d9cf4.length && _0x1d9cf4.val() == "") return layer.msg("璇 " + _0x1d9cf4.attr("placeholder")), _0x1d9cf4.focus(), false;
        if (_0x54aff5.length && _0x54aff5.val() == "") {
          return layer.msg("璇 " + _0x54aff5.attr("placeholder")), _0x54aff5.focus(), false;
        }
        return $.ajax({
          "url": _0x1068a3.attr("action"),
          "type": "POST",
          "dataType": "json",
          "timeout": 3000,
          "data": _0x1068a3.serialize(),
          "success": function (_0x15f2e0) {
            layer.msg(_0x15f2e0.msg);
            _0x15f2e0.code == 1 && setTimeout(function () {
              location.href = _0x25bc55;
            }, 1000);
          }
        }), false;
      });
      $("body").on("click", ".video-content a", function () {
        var _0x469231 = $(".video-content");
        _0x469231.toggleClass("d-flex");
        _0x469231.find("span").toggleClass("text-truncate");
        $(".video-content.d-flex").length ? _0x469231.find("a").html("<i class=\"bi bi-hash\"></i>详情") : _0x469231.find("a").html("<i class=\"bi bi-at\"></i>收起");
      });
      $("body").on("click", ".click-top", function () {
        $("html,body").animate({
          "scrollTop": 0
        }, 200);
      });
      $(".navbar-search").on("submit", function () {
        var _0x1746ce = $(this).find("input").val(),
          _0x958830 = $(this).attr("action");
        if (!_0x1746ce) {
          return $("input[name=wd]").focus(), layer.msg("璇 " + $(this).find("input").attr("placeholder")), false;
        }
        if (_0x958830) return location.href = _0x958830 + "?wd=" + encodeURIComponent(_0x1746ce), false;
      });
      $(".form-collapse ul").each(function (_0x3cc1ff) {
        $this = $(this);
        $config = $this.attr("data-more") * 1;
        $max = $this.find("li a").size();
        $config + 2 < $max && $config > 0 && ($max_html = $($this.find("li:last").prop("outerHTML")).find("a").attr("href", "#all").removeClass("btn-outline-secondary").addClass("btn-secondary").html("全部..."), $max_html = "<li>" + $max_html.prop("outerHTML") + "</li>", $this.find("li").each(function (_0xa040d6) {
          _0xa040d6 + 1 > $config && $(this).hide();
        }), $this.find("li").eq($config).after($max_html), $this.find("li:last").show());
      });
      $(".form-collapse ul").on("click", "a", function (_0x391a40) {
        if ($(this).attr("href") == "#all") {
          return $(this).parent().parent().find("li").show(), $(this).parent().remove(), false;
        }
      });
      $("body").on("click", ".form-vcoder", function () {
        feizhu.cms.vcode($(this));
      });
      $("body").on("click", ".user-notice", function () {
        $.get("/index.php/label/notice", function (_0x1daa23) {
          $("body").append(_0x1daa23);
          $(".navbar-notice").modal("show");
        });
      });
      $("body").on("click", ".user-error", function () {
        $(this).addClass("disabled");
        layer.msg("报错成功，我们会尽快处理，感谢您的支持");
      });
    },
    "copyer": function () {
      $.ajaxSetup({
        "cache": true
      });
      $.getScript("/template/dm/statics/js/clipboard.min.js", function (_0x118957, _0x3c837c) {
        var _0x145612 = new ClipboardJS(".click-copy", {
          "text": function (_0x10f14b) {
            return _0x10f14b.getAttribute("data-copy");
          }
        });
        _0x145612.on("success", function (_0x823808) {
          layer.msg("閾炬帴澶嶅埗鎴愬姛锛屽揩鍘荤矘璐村垎浜粰浣犵殑濂藉弸鍚э紒");
          _0x823808.clearSelection();
        });
        var _0x25bb8e = new ClipboardJS(".click-share", {
          "text": function () {
            return document.URL + "?share=" + document.title + "，太好看了，快来观赏吧！";
          }
        });
        _0x25bb8e.on("success", function (_0xd2b036) {
          layer.msg("閾炬帴澶嶅埗鎴愬姛锛屽揩鍘荤矘璐村垎浜粰浣犵殑濂藉弸鍚э紒");
          _0xd2b036.clearSelection();
        });
        var _0x4b2d48 = new ClipboardJS("#copyUrl", {
          "text": function () {
            return $("#copyUrl").data("clipboard-text");
          }
        });
        _0x4b2d48.on("success", function (_0x5634ad) {
          layer.msg("复制网址成功，去粘贴收藏本站吧！");
          _0x5634ad.clearSelection();
        });
        _0x4b2d48.on("error", function (_0x4e3e3e) {
          layer.msg("复制失败，请手动复制！");
        });
      });
    },
    "deldata": function (_0x43d385, _0x2c950d, _0x36cd90, _0x453ae4) {
      confirm("删除之后无法恢复，您确定要删除吗？") && $.post(_0x43d385, {
        "ids": _0x2c950d,
        "type": _0x36cd90,
        "all": _0x453ae4
      }, function (_0x4a6b54) {
        layer.msg(_0x4a6b54.msg);
        if (_0x4a6b54.code == 1) {
          setTimeout(function () {
            location.reload();
          }, 1000);
        }
      }, "json");
      return false;
    },
    "vcode": function (_0x17f5b2) {
      _0x17f5b2.attr("src", _0x17f5b2.attr("src"));
    },
    "lazy": function (_0x4a6672) {
      $.ajaxSetup({
        "cache": true
      });
      $.getScript("/template/dm/statics/js/jquery.lazyload.min.js", function (_0x1c8ec3, _0x2a7478) {
        $(_0x4a6672).lazyload({
          "effect": "fadeIn",
          "data_attribute": "src",
          "placeholder": "",
          "failurelimit": 15
        });
      });
    },
    "record": function (_0x5d2044, _0x46645f, _0x29f9b8, _0x55e727, _0x3383b1, _0x188f8a, _0x110b42) {
      !_0x55e727 && (_0x55e727 = document.URL);
      var _0x405f02 = feizhu.cookie.get(_0x5d2044),
        _0x36573d = 0,
        _0xf4defd = true;
      _0x405f02 && (_0x405f02 = eval("(" + _0x405f02 + ")"), _0x36573d = _0x405f02.length, $(_0x405f02).each(function () {
        if (_0x46645f == this.name) {
          _0xf4defd = false;
          var _0x14ff17 = "[";
          return $(_0x405f02).each(function (_0x1b606f) {
            var _0x5a3f34, _0x1296da, _0x334bab, _0x418ace, _0x21ee29;
            if (this.name == _0x46645f) {
              _0x5a3f34 = _0x46645f;
              _0x1296da = _0x3383b1;
              _0x334bab = _0x55e727;
              _0x418ace = _0x29f9b8;
              _0x21ee29 = _0x188f8a;
            } else {
              _0x5a3f34 = this.name;
              _0x1296da = this.pic;
              _0x334bab = this.link;
              _0x418ace = this.part;
              _0x21ee29 = this.vod;
            }
            _0x14ff17 += "{\"name\":\"" + _0x5a3f34 + "\",\"pic\":\"" + _0x1296da + "\",\"link\":\"" + _0x334bab + "\",\"part\":\"" + _0x418ace + "\",\"vod\":\"" + _0x21ee29 + "\"}";
            if (_0x1b606f != _0x36573d - 1) _0x14ff17 += ",";
          }), _0x14ff17 += "]", feizhu.cookie.set(_0x5d2044, _0x14ff17, 365), false;
        }
      }));
      if (_0xf4defd) {
        var _0x1be404 = "[";
        var _0x422a71 = "]";
        _0x422a71 = !_0x36573d ? "]" : ",";
        _0x1be404 += "{\"name\":\"" + _0x46645f + "\",\"pic\":\"" + _0x3383b1 + "\",\"link\":\"" + _0x55e727 + "\",\"part\":\"" + _0x29f9b8 + "\",\"vod\":\"" + _0x188f8a + "\"}" + _0x422a71;
        if (_0x36573d > _0x110b42 - 1) _0x36573d -= 1;
        for (i = 0; i < _0x36573d - 1; i++) {
          _0x1be404 += "{\"name\":\"" + _0x405f02[i].name + "\",\"pic\":\"" + _0x405f02[i].pic + "\",\"link\":\"" + _0x405f02[i].link + "\",\"part\":\"" + _0x405f02[i].part + "\",\"vod\":\"" + _0x405f02[i].vod + "\"},";
        }
        _0x36573d > 0 && (_0x1be404 += "{\"name\":\"" + _0x405f02[_0x36573d - 1].name + "\",\"pic\":\"" + _0x405f02[_0x36573d - 1].pic + "\",\"link\":\"" + _0x405f02[_0x36573d - 1].link + "\",\"part\":\"" + _0x405f02[_0x36573d - 1].part + "\",\"vod\":\"" + _0x405f02[_0x36573d - 1].vod + "\"}]");
        feizhu.cookie.set(_0x5d2044, _0x1be404, 365);
      }
    }
  },
  "cookie": {
    "set": function (_0x3e53c6, _0x57fad2, _0x3849e4) {
      var _0x2047ba = new Date();
      _0x2047ba.setTime(_0x2047ba.getTime() + _0x3849e4 * 24 * 60 * 60 * 1000);
      document.cookie = _0x3e53c6 + "=" + escape(_0x57fad2) + ";path=/;expires=" + _0x2047ba.toUTCString();
    },
    "get": function (_0x5a55f6) {
      var _0x565bb9 = document.cookie.match(new RegExp("(^| )" + _0x5a55f6 + "=([^;]*)(;|$)"));
      if (_0x565bb9 != null) return unescape(_0x565bb9[2]);
    },
    "del": function (_0x522dae, _0x5807a1) {
      var _0xf472ef = new Date();
      _0xf472ef.setTime(_0xf472ef.getTime() - 1);
      var _0x55c23b = this.get(_0x522dae);
      _0x55c23b != null && (document.cookie = _0x522dae + "=" + encodeURIComponent(_0x55c23b) + ";path=/;expires=" + _0xf472ef.toUTCString());
    }
  },
  "player": {
    "load": function (_0x47971d) {
      var _0x2c8dbd = $(".video-iframe"),
        _0x43db81 = _0x2c8dbd.attr("data-play"),
        _0x490e3c = _0x2c8dbd.attr("data-color"),
        _0x62003c = _0x2c8dbd.attr("data-jiexi"),
        _0x25ac2a = _0x2c8dbd.attr("data-next");
      _0x2c8dbd.html("<iframe width=\"100%\" height=\"100%\" src=\"" + _0x62003c + _0x43db81 + "&next=" + _0x25ac2a + "&color=" + _0x490e3c + "\" frameborder=\"0\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" allowfullscreen=\"allowfullscreen\" mozallowfullscreen=\"mozallowfullscreen\" msallowfullscreen=\"msallowfullscreen\" oallowfullscreen=\"oallowfullscreen\" webkitallowfullscreen=\"webkitallowfullscreen\" security=\"restricted\" sandbox=\"allow-same-origin allow-forms allow-scripts allow-popups allow-top-navigation\" style=\"display:none\"></iframe>");
      setTimeout(function () {
        _0x2c8dbd.find("iframe").show();
      }, 1000);
      feizhu.cms.record($("body").attr("data-history"), _0x2c8dbd.attr("data-name"), _0x2c8dbd.attr("data-title"), _0x2c8dbd.attr("data-link"), _0x2c8dbd.attr("data-pic"), _0x2c8dbd.attr("data-detail"), _0x2c8dbd.attr("data-limit"));
    }
  }
};
$(document).ready(function () {
  feizhu.cms.load();
});
$(document).ready(function () {
  function _0x25d710() {
    $(".hl-sort-btn").on("click", function (_0x2c4b5c) {
      var _0x19ef9b = $(this).find("i"),
        _0x5c462e = $(this).find("span");
      _0x19ef9b.hasClass("hl-icon-daoxu") ? (_0x19ef9b.removeClass("hl-icon-daoxu").addClass("hl-icon-zhengxu"), _0x5c462e.text("姝ｅ簭")) : (_0x19ef9b.removeClass("hl-icon-zhengxu").addClass("hl-icon-daoxu"), _0x5c462e.text("鍊掑簭"));
      _0x2c4b5c.preventDefault();
      $(".hl-plays-list").each(function () {
        var _0xaa1774 = $(this),
          _0x5579a0 = _0xaa1774.children("li").get();
        _0xaa1774.empty().append(_0x5579a0.reverse());
      });
    });
  }
  _0x25d710();
});
window.onkeydown = function (_0x3fcbb4) {
  (_0x3fcbb4.keyCode === 123 || _0x3fcbb4.altKey || _0x3fcbb4.shiftKey || _0x3fcbb4.ctrlKey) && _0x3fcbb4.preventDefault();
};
window.oncontextmenu = function (_0x1222b7) {
  _0x1222b7.preventDefault();
};
document.addEventListener("DOMContentLoaded", function () {
  const _0x14c1e8 = document.querySelectorAll(".weekday-bd-tab .nav-link"),
    _0x450e4e = new Date().getDay(),
    _0x4e220b = (_0x450e4e + 6) % 7,
    _0x3bac99 = document.querySelectorAll(".day-content");
  _0x3bac99.forEach((_0x2e6aa4, _0x216b2) => {
    _0x216b2 === _0x4e220b ? (_0x2e6aa4.classList.remove("d-none"), _0x14c1e8[_0x216b2].classList.add("active")) : _0x2e6aa4.classList.add("d-none");
  });
  _0x14c1e8.forEach(_0x46c41a => {
    _0x46c41a.addEventListener("click", function () {
      _0x14c1e8.forEach(_0x4a77e0 => {
        _0x4a77e0.classList.remove("active");
      });
      const _0xc13aa1 = this.dataset.day,
        _0x5a7074 = "一二三四五六日".indexOf(_0xc13aa1) + 1;
      _0x3bac99.forEach(_0x37aea5 => {
        _0x37aea5.classList.add("d-none");
      });
      const _0x47afae = "day-" + _0x5a7074,
        _0x2f6c67 = document.querySelector("." + _0x47afae);
      _0x2f6c67 && _0x2f6c67.classList.remove("d-none");
      this.classList.add("active");
    });
  });
});
var MAC = {
  "Url": document.URL,
  "Title": document.title,
  "UserAgent": function () {
    (function () {})();
    var _0x356d4e = navigator.userAgent;
    return {
      "mobile": !!_0x356d4e.match(/AppleWebKit.*Mobile.*/),
      "ios": !!_0x356d4e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      "android": _0x356d4e.indexOf("Android") > -1 || _0x356d4e.indexOf("Linux") > -1,
      "iPhone": _0x356d4e.indexOf("iPhone") > -1 || _0x356d4e.indexOf("Mac") > -1,
      "iPad": _0x356d4e.indexOf("iPad") > -1,
      "trident": _0x356d4e.indexOf("Trident") > -1,
      "presto": _0x356d4e.indexOf("Presto") > -1,
      "webKit": _0x356d4e.indexOf("AppleWebKit") > -1,
      "gecko": _0x356d4e.indexOf("Gecko") > -1 && _0x356d4e.indexOf("KHTML") == -1,
      "weixin": _0x356d4e.indexOf("MicroMessenger") > -1
    };
  }(),
  "Hits": {
    "Init": function () {
      if ($(".mac_hits").length == 0) return;
      var _0x359c6f = $(".mac_hits");
      MAC.Ajax(maccms.path + "/index.php/ajax/hits?mid=" + _0x359c6f.attr("data-mid") + "&id=" + _0x359c6f.attr("data-id") + "&type=update", "get", "json", "", function (_0xe55194) {
        _0xe55194.code == 1 && $(".mac_hits").each(function (_0x375408) {
          $type = $(".mac_hits").eq(_0x375408).attr("data-type");
          $type != "insert" && $("." + $type).html(eval("(r.data." + $type + ")"));
        });
      });
    }
  },
  "Adaptive": function () {
    if (maccms.mob_status == "1" && maccms.url != maccms.wapurl) {
      if (document.domain == maccms.url && MAC.UserAgent.mobile) location.href = location.href.replace(maccms.url, maccms.wapurl);else document.domain == maccms.wapurl && !MAC.UserAgent.mobile && (location.href = location.href.replace(maccms.wapurl, maccms.url));
    }
  },
  "Ajax": function (_0x1d9ce3, _0x404f3a, _0x36d30e, _0x4f61d7, _0x73b443, _0x1eacc4, _0x50fa68) {
    _0x404f3a = _0x404f3a || "get";
    _0x36d30e = _0x36d30e || "json";
    _0x4f61d7 = _0x4f61d7 || "";
    _0x1eacc4 = _0x1eacc4 || "";
    _0x50fa68 = _0x50fa68 || "";
    $.ajax({
      "url": _0x1d9ce3,
      "type": _0x404f3a,
      "dataType": _0x36d30e,
      "data": _0x4f61d7,
      "timeout": 5000,
      "beforeSend": function (_0x4eae27) {},
      "error": function (_0x4cd7b4, _0x2ac8ba, _0x360841) {
        if (_0x1eacc4) _0x1eacc4(_0x4cd7b4, _0x2ac8ba, _0x360841);
      },
      "success": function (_0x34b24a) {
        _0x73b443(_0x34b24a);
      },
      "complete": function (_0x569a0d, _0x3adc9b) {
        if (_0x50fa68) _0x50fa68(_0x569a0d, _0x3adc9b);
      }
    });
  }
};
$(function () {
  MAC.Hits.Init();
  MAC.Adaptive();
});
var fdlhref = location.hostname,
  allowedDomains = ["yinghua6.cc", "yinghua7.cc", "zhuzhudm.cc", "ccfuns.cc", "ffdm.cc", "fengche123.cc", "99dmw.cc", "ffdm1.cc", "ffdm2.cc", "ffdm3.cc", "77dmw.cc", "hmdm.cc", "95dm.cc", "mxdmw.cc", "omofun233.cc"],
  isAllowed = allowedDomains.some(function (_0x5be0c0) {
    return fdlhref.endsWith(_0x5be0c0);
  });
!isAllowed && (top.location.href = "https://www.ffdm.cc");