//Fri Nov 22 2024 05:15:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
东东农场快速浇水
环境变量：FRUIT_PLANT_LEVEL // 自动种植的作物等级（正整数），默认为2
        FRUIT_WATERING_NOTIFY // 是否推送通知（true/false），默认不推送
        FRUIT_WATERING_PIN // 指定PIN账号浇水，多个用 & 隔开

每月或每周只能领2次红包，由于常规浇水太慢，脚本优先使用快速浇水卡

cron:1 1 1 1 * jd_fruit_watering.js

*/

const $ = new Env("\u4E1C\u4E1C\u519C\u573A\u5FEB\u901F\u6D47\u6C34");
var iｉl = "jsjiami.com.v7";
const liiI1i = iii1II;
(function (ii1ill, II1iI, llI1II, lIli1l, lillIi, illIi1, ii1ili) {
  return ii1ill = ii1ill >> 5, illIi1 = "hs", ii1ili = "hs", function (liil1i, lI1lil, i1l1iI, liil1l, lI1lii) {
    const iIIiiI = iii1II;
    liil1l = "tfi", illIi1 = liil1l + illIi1, lI1lii = "up", ii1ili += lI1lii, illIi1 = i1l1iI(illIi1), ii1ili = i1l1iI(ii1ili), i1l1iI = 0;
    const Iiili1 = liil1i();
    while (true && --lIli1l + lI1lil) {
      try {
        liil1l = -parseInt(iIIiiI(433, "gUB[")) / 1 + parseInt(iIIiiI(345, "B[vv")) / 2 + -parseInt(iIIiiI(476, "bg(6")) / 3 * (parseInt(iIIiiI(244, "SFB7")) / 4) + -parseInt(iIIiiI(462, "S4Ba")) / 5 * (parseInt(iIIiiI(259, "Tc0m")) / 6) + parseInt(iIIiiI(356, "SFB7")) / 7 * (-parseInt(iIIiiI(233, "#0!g")) / 8) + -parseInt(iIIiiI(529, "He&s")) / 9 * (-parseInt(iIIiiI(648, "I%Vs")) / 10) + parseInt(iIIiiI(417, "sT][")) / 11;
      } catch (Iil1l1) {
        liil1l = i1l1iI;
      } finally {
        lI1lii = Iiili1[illIi1]();
        if (ii1ill <= lIli1l) i1l1iI ? lillIi ? liil1l = lI1lii : lillIi = lI1lii : i1l1iI = lI1lii;else {
          if (i1l1iI == lillIi["replace"](/[QDWNrgOptPuSyUdxnhFYk=]/g, "")) {
            if (liil1l === lI1lil) {
              Iiili1["un" + illIi1](lI1lii);
              break;
            }
            Iiili1[ii1ili](lI1lii);
          }
        }
      }
    }
  }(llI1II, II1iI, function (i1i11I, il1iIl, iii1ii, il1iIi, iii1il, II11li, I1l11i) {
    return il1iIl = "split", i1i11I = arguments[0], i1i11I = i1i11I[il1iIl](""), iii1ii = `\x72\x65\x76\x65\x72\x73\x65`, i1i11I = i1i11I[iii1ii]("v"), il1iIi = `\x6a\x6f\x69\x6e`, 1417119, i1i11I[il1iIi]("");
  });
}(6560, 923211, Iii11l, 207), Iii11l) && (iｉl = liiI1i(372, "fzI!"));
const jdCookie = require(liiI1i(578, "He&s")),
  notify = require(liiI1i(378, "txF@")),
  common = require(liiI1i(424, "SFB7")),
  {
    H5st
  } = require(liiI1i(423, "Ux)#")),
  FRUIT_PLANT_LEVEL = process[liiI1i(630, "k![b")]["FRUIT_PLANT_LEVEL"] || "2",
  isNotify = process["env"][liiI1i(234, "SFB7")] === liiI1i(548, "KQyc"),
  PinArr = process[liiI1i(539, "Tc0m")][liiI1i(408, "QWFe")] ? process["env"][liiI1i(485, "haP4")]["split"]("&") : "";
console[liiI1i(323, "pOgc")](""), console[liiI1i(444, "bg(6")](liiI1i(555, "S4Ba") + $[liiI1i(308, "IKY3")] + "\u53D8\u91CF\u8BF4\u660E=========="), console["log"]("FRUIT_PLANT_LEVEL // \u81EA\u52A8\u79CD\u690D\u7684\u4F5C\u7269\u7B49\u7EA7\uFF08\u6B63\u6574\u6570\uFF09"), console[liiI1i(463, "BiiY")](liiI1i(582, "haP4")), console["log"](liiI1i(377, "FAmv")), console[liiI1i(629, "cvWH")](liiI1i(402, "goqf") + $[liiI1i(350, "zLIJ")] + liiI1i(391, "aX3C")), console["log"]("");
let cookie = "";
const cookiesArr = Object["keys"](jdCookie)[liiI1i(430, "haP4")](ll1 => jdCookie[ll1])["filter"](iI1llI => iI1llI);
!cookiesArr[0] && ($[liiI1i(608, "T!#)")]($["name"], liiI1i(554, "@o2C")), process[liiI1i(252, "C@S!")](1));
let rs_wait = 1,
  waitTimes = parseInt(rs_wait) * 1000,
  uuid = randomString(40),
  addressid = randomString(10, "123456789"),
  sid = randomString(32, liiI1i(381, "2O[G")),
  area = randomString(1, "1234567890") + "-" + randomString(5, "1234567890") + "-" + randomString(5, "1234567890") + "-" + randomString(1, liiI1i(235, "9HJc")),
  lng = liiI1i(633, "SFB7") + Math[liiI1i(297, "A4yY")](Math["random"]() * 899 + 100),
  lat = liiI1i(255, "!SmT") + Math[liiI1i(487, "txF@")](Math["random"]() * 899 + 100);
function iii1II(_0x3b9331, _0x449ffe) {
  const _0x4405e3 = Iii11l();
  return iii1II = function (_0x3c0639, _0x5d0709) {
    _0x3c0639 = _0x3c0639 - 219;
    let _0x5ad134 = _0x4405e3[_0x3c0639];
    if (iii1II["EbEPQX"] === undefined) {
      var _0x4f29db = function (_0x44788d) {
        const _0x5ac7af = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x38a755 = "",
          _0x582bdf = "";
        for (let _0x1bb45f = 0, _0x195bee, _0x4a0735, _0x242875 = 0; _0x4a0735 = _0x44788d["charAt"](_0x242875++); ~_0x4a0735 && (_0x195bee = _0x1bb45f % 4 ? _0x195bee * 64 + _0x4a0735 : _0x4a0735, _0x1bb45f++ % 4) ? _0x38a755 += String["fromCharCode"](255 & _0x195bee >> (-2 * _0x1bb45f & 6)) : 0) {
          _0x4a0735 = _0x5ac7af["indexOf"](_0x4a0735);
        }
        for (let _0xfc13f5 = 0, _0x317f2a = _0x38a755["length"]; _0xfc13f5 < _0x317f2a; _0xfc13f5++) {
          _0x582bdf += "%" + ("00" + _0x38a755["charCodeAt"](_0xfc13f5)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x582bdf);
      };
      const _0x2ed08c = function (_0x2ebeb6, _0x4e6225) {
        let _0x4907bb = [],
          _0x5deabc = 0,
          _0x4acb55,
          _0x43f5d2 = "";
        _0x2ebeb6 = _0x4f29db(_0x2ebeb6);
        let _0xca0d3e;
        for (_0xca0d3e = 0; _0xca0d3e < 256; _0xca0d3e++) {
          _0x4907bb[_0xca0d3e] = _0xca0d3e;
        }
        for (_0xca0d3e = 0; _0xca0d3e < 256; _0xca0d3e++) {
          _0x5deabc = (_0x5deabc + _0x4907bb[_0xca0d3e] + _0x4e6225["charCodeAt"](_0xca0d3e % _0x4e6225["length"])) % 256, _0x4acb55 = _0x4907bb[_0xca0d3e], _0x4907bb[_0xca0d3e] = _0x4907bb[_0x5deabc], _0x4907bb[_0x5deabc] = _0x4acb55;
        }
        _0xca0d3e = 0, _0x5deabc = 0;
        for (let _0xca4979 = 0; _0xca4979 < _0x2ebeb6["length"]; _0xca4979++) {
          _0xca0d3e = (_0xca0d3e + 1) % 256, _0x5deabc = (_0x5deabc + _0x4907bb[_0xca0d3e]) % 256, _0x4acb55 = _0x4907bb[_0xca0d3e], _0x4907bb[_0xca0d3e] = _0x4907bb[_0x5deabc], _0x4907bb[_0x5deabc] = _0x4acb55, _0x43f5d2 += String["fromCharCode"](_0x2ebeb6["charCodeAt"](_0xca4979) ^ _0x4907bb[(_0x4907bb[_0xca0d3e] + _0x4907bb[_0x5deabc]) % 256]);
        }
        return _0x43f5d2;
      };
      iii1II["gJPDFQ"] = _0x2ed08c, _0x3b9331 = arguments, iii1II["EbEPQX"] = true;
    }
    const _0x6aec46 = _0x4405e3[0],
      _0x4dcbfd = _0x3c0639 + _0x6aec46,
      _0x24a4e0 = _0x3b9331[_0x4dcbfd];
    return !_0x24a4e0 ? (iii1II["QmKCYG"] === undefined && (iii1II["QmKCYG"] = true), _0x5ad134 = iii1II["gJPDFQ"](_0x5ad134, _0x5d0709), _0x3b9331[_0x4dcbfd] = _0x5ad134) : _0x5ad134 = _0x24a4e0, _0x5ad134;
  }, iii1II(_0x3b9331, _0x449ffe);
}
!(async () => {
  const ililIi = liiI1i,
    llliii = {
      "zeABp": function (IllI11, l1llIi) {
        return IllI11(l1llIi);
      },
      "GTIwW": ililIi(607, "9GV*"),
      "zxhFo": function (II1llI, i11I11) {
        return II1llI + i11I11;
      },
      "EEMZa": function (l1llIl) {
        return l1llIl();
      },
      "OUJtA": function (ii1I1l, ii1I1i, llI) {
        return ii1I1l(ii1I1i, llI);
      },
      "NvCKV": function (llliI, iI1li1) {
        return llliI + iI1li1;
      },
      "BRYQe": function (lllii1, liIli) {
        return lllii1 * liIli;
      },
      "OXDiT": ililIi(429, "@o2C"),
      "cGMnW": ililIi(355, "cJte"),
      "vevLG": function (liIll, IilIi1) {
        return liIll * IilIi1;
      }
    };
  notify["config"]({
    "title": $[ililIi(451, "P(hT")]
  }), console[ililIi(280, "!Gq0")](ililIi(464, "BiiY"));
  for (let iI1liI = 0; iI1liI < cookiesArr[ililIi(413, "sT][")]; iI1liI++) {
    if (cookiesArr[iI1liI]) {
      cookie = cookiesArr[iI1liI], $[ililIi(495, "txF@")] = llliii["zeABp"](decodeURIComponent, common[ililIi(503, "txF@")](cookie, llliii["GTIwW"])), $["index"] = llliii[ililIi(573, "#0!g")](iI1liI, 1), $[ililIi(230, "IKY3")] = "", $["message"] = notify["create"]($["index"], $[ililIi(479, "C@S!")]), $["UA"] = common[ililIi(455, "He&s")]($[ililIi(267, "sQ^m")]);
      if (PinArr) {
        if (PinArr["includes"](encodeURIComponent($[ililIi(317, "a@Fw")]))) console["log"](ililIi(416, "jPP9") + $["index"] + "\u3011" + ($[ililIi(389, "QWFe")] || $[ililIi(320, "AG^&")]) + ililIi(443, "AG^&")), await llliii[ililIi(428, "cJte")](Main), await $["wait"](llliii[ililIi(232, "He&s")](parseInt, llliii["NvCKV"](llliii[ililIi(521, "k![b")](waitTimes, 2), 1000), 10));else {
          if (llliii[ililIi(534, "haP4")] === llliii["OXDiT"]) continue;else li1I1[ililIi(490, "a@Fw")](ililIi(276, "a@Fw")), i1ilil[ililIi(368, "AG^&")](lilIii);
        }
      } else ililIi(344, "jPP9") !== llliii["cGMnW"] ? (console[ililIi(239, "Tc0m")]("\n******\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + $[ililIi(432, "I%Vs")] + "\u3011" + ($[ililIi(440, "aX3C")] || $["UserName"]) + "******\n"), await llliii[ililIi(638, "D@e7")](Main), await $[ililIi(513, "9HJc")](llliii[ililIi(552, "bg(6")](parseInt, llliii[ililIi(311, "He&s")](llliii[ililIi(543, "2O[G")](waitTimes, 2), 1000), 10))) : (l1i111[ililIi(629, "cvWH")](iliII1), II11I1 && (lI1Ill["outFlag"] = true, lI1Ili[ililIi(540, "sT][")] && iIIl11[ililIi(489, "haP4")]["fix"](l1l1I1)));
    }
  }
  isNotify && notify[ililIi(583, "txF@")]() && (notify[ililIi(395, "SFB7")](notify["content"]), await notify[ililIi(290, "A4yY")]());
})()[liiI1i(343, "SFB7")](IilIiI => $[liiI1i(226, "cJte")](IilIiI))[liiI1i(227, "gUB[")](() => $[liiI1i(615, "I%Vs")]());
async function Main() {
  const lilIIl = liiI1i,
    i1i1I1 = {
      "pjWbs": lilIIl(520, "&v(!"),
      "dRASw": function (IiI11, lli) {
        return IiI11(lli);
      },
      "ChkbB": function (liIlI, lll) {
        return liIlI * lll;
      },
      "dxGhl": function (llli1, iIli1i) {
        return llli1 / iIli1i;
      },
      "VaCsG": function (iI1lii, IilIii) {
        return iI1lii - IilIii;
      },
      "cuWbn": function (iI1lil, l1lIi1) {
        return iI1lil === l1lIi1;
      },
      "bhChc": lilIIl(518, "]ovQ"),
      "SmPsl": function (iIli1l) {
        return iIli1l();
      },
      "ndmZb": function (i1i1II, liiIIl) {
        return i1i1II * liiIIl;
      },
      "gUQsq": function (iil1iI, IlIllI) {
        return iil1iI === IlIllI;
      },
      "tBaaM": function (il1i1I) {
        return il1i1I();
      },
      "pKTzN": function (lI1li1, iI11II) {
        return lI1li1 === iI11II;
      },
      "dvFEw": lilIIl(224, "QWFe"),
      "tTOkP": function (iIII1I, ilil1i) {
        return iIII1I + ilil1i;
      },
      "zJuOO": function (IlIIi, IiI1l) {
        return IlIIi >= IiI1l;
      },
      "atNtD": lilIIl(295, "&wJj"),
      "vziOi": function (illlII, iIII11) {
        return illlII > iIII11;
      },
      "rbSrV": function (IiI1i, llll1) {
        return IiI1i(llll1);
      },
      "mrLKf": function (lil11l, i1i1Il) {
        return lil11l(i1i1Il);
      },
      "AeKfX": function (I1lIl1, lil11i) {
        return I1lIl1 / lil11i;
      },
      "zjAlY": function (IlIIl, lI1liI) {
        return IlIIl < lI1liI;
      },
      "cKDPl": lilIIl(501, "zLIJ"),
      "SxKvC": lilIIl(300, "!Gq0"),
      "iVSlk": function (i1i1Ii, lllii) {
        return i1i1Ii(lllii);
      },
      "gxfgo": lilIIl(396, "gUB["),
      "buxup": function (iI11Ii, iIII1l) {
        return iI11Ii !== iIII1l;
      },
      "zaPSx": lilIIl(390, "sT]["),
      "VFXlO": lilIIl(550, "2O[G"),
      "mVhRv": function (lllil) {
        return lllil();
      },
      "GTsru": function (iI11Il, iIII1i) {
        return iI11Il >= iIII1i;
      },
      "EhniH": "toGoG",
      "NSpQO": lilIIl(316, "BiiY"),
      "cwstL": lilIIl(382, "!Gq0"),
      "AlaHO": function (iil1i1) {
        return iil1i1();
      },
      "zqAJh": lilIIl(328, "Tc0m"),
      "yfShw": lilIIl(270, "9HJc"),
      "WbWnH": function (il1i11, IlIll1) {
        return il1i11 === IlIll1;
      },
      "KOEJS": function (IlIII, ilil1l) {
        return IlIII === ilil1l;
      },
      "GOnwm": lilIIl(394, "[7KZ"),
      "ElCRS": function (illlIi, I1lIii) {
        return illlIi === I1lIii;
      },
      "iezVJ": function (IiI1I, illlIl) {
        return IiI1I >= illlIl;
      },
      "QJPyg": function (i11ill) {
        return i11ill();
      }
    };
  let IlII1 = false;
  try {
    const IIIIIi = await common[lilIIl(570, "gUB[")](cookie);
    if (!IIIIIi && i1i1I1[lilIIl(301, "!SmT")](typeof IIIIIi, i1i1I1["bhChc"])) {
      console["log"](lilIIl(392, "[7KZ"));
      return;
    }
    await i1i1I1[lilIIl(613, "haP4")](initForFarm);
    if ($[lilIIl(469, "S4Ba")]?.[lilIIl(437, "AG^&")]) {
      if ($["farmInfo"]?.[lilIIl(453, "cJte")] === 2 || i1i1I1[lilIIl(599, "pOgc")]($[lilIIl(312, "9HJc")]?.[lilIIl(612, "gUB[")], 3)) {
        await i1i1I1[lilIIl(601, "@o2C")](autoCrop);
        return;
      } else {
        if ($[lilIIl(284, "[7KZ")]?.[lilIIl(337, "#0!g")] === 1) console[lilIIl(222, "0&gr")](lilIIl(625, "pOgc") + $[lilIIl(532, "gUB[")]?.[lilIIl(564, "&v(!")]?.["name"] + "\uFF08\u7B49\u7EA7" + $[lilIIl(277, "zLIJ")]?.["farmUserPro"]?.["prizeLevel"] + lilIIl(450, "Vwy@") + i1i1I1[lilIIl(512, "QWFe")](i1i1I1[lilIIl(359, "a@Fw")]($[lilIIl(617, "jPP9")]?.[lilIIl(330, "9GV*")]?.[lilIIl(504, "9HJc")], $["farmInfo"]?.[lilIIl(253, "sQ^m")]?.[lilIIl(618, "cJte")]), 100)[lilIIl(493, "QWFe")](2) + "%\uFF0C\u5DF2\u6D47\u6C34" + $["farmInfo"]?.["farmUserPro"]?.[lilIIl(340, "C@S!")] / 10 + lilIIl(325, "FAmv") + i1i1I1["dxGhl"](i1i1I1[lilIIl(427, "FAmv")]($[lilIIl(532, "gUB[")]?.["farmUserPro"]?.[lilIIl(631, "He&s")], $["farmInfo"]?.[lilIIl(636, "QWFe")]?.["treeEnergy"]), 10) + "\u6B21\uFF09");else i1i1I1[lilIIl(499, "BiiY")]($[lilIIl(249, "BiiY")]?.["treeState"], 0) && (await i1i1I1[lilIIl(352, "]ovQ")](autoPlant));
      }
    } else {
      console[lilIIl(565, "zLIJ")](lilIIl(241, "cJte") + JSON[lilIIl(261, "haP4")]($[lilIIl(310, "pOgc")]));
      return;
    }
    let IIIIIl = $["farmInfo"]?.[lilIIl(609, "aX3C")]?.[lilIIl(452, "uK%F")] || 0;
    console[lilIIl(634, "P(hT")]("\u76EE\u524D\u5171\u6709\u6C34\u6EF4 " + IIIIIl + "g\uD83D\uDCA7"), await myCardInfoForFarm();
    const {
      fastCard: I1lIil,
      doubleCard: IIIl1i,
      beanCard: liiII1,
      signCard: IIIl1l
    } = $[lilIIl(401, "]ovQ")];
    console["log"]("\u5FEB\u901F\u6D47\u6C34\u5361 " + (i1i1I1[lilIIl(258, "A4yY")](I1lIil, -1) ? i1i1I1[lilIIl(221, "!SmT")] : i1i1I1[lilIIl(324, "fzI!")](I1lIil, lilIIl(470, "A4yY"))) + "\n");
    if (IIIIIl < 10) {
      console[lilIIl(280, "!Gq0")](lilIIl(236, "txF@"));
      return;
    }
    if (i1i1I1[lilIIl(588, "He&s")](IIIIIl, 100) && $[lilIIl(351, "FAmv")]?.[lilIIl(611, "IKY3")] > 0) {
      if (i1i1I1[lilIIl(400, "2O[G")](i1i1I1[lilIIl(386, "@o2C")], lilIIl(357, "a@Fw"))) {
        let lllll = i1i1I1["vziOi"](i1i1I1[lilIIl(641, "a@Fw")](parseInt, i1i1I1[lilIIl(304, "T!#)")](IIIIIl, 100)), $[lilIIl(604, "QWFe")]?.[lilIIl(619, "BiiY")]) ? $[lilIIl(544, "cJte")]?.[lilIIl(508, "uK%F")] : i1i1I1[lilIIl(393, "A4yY")](parseInt, i1i1I1[lilIIl(497, "uK%F")](IIIIIl, 100));
        for (let i11ili = 0; i1i1I1["zjAlY"](i11ili, lllll); i11ili++) {
          if (i1i1I1["cKDPl"] === i1i1I1[lilIIl(279, "zLIJ")]) iliIIl[lilIIl(498, "I%Vs")]("\u5F53\u524D\u6CA1\u6709\u79CD\u690D\u65B0\u7684\u6C34\u679C\uFF0C\u6307\u5B9A\u7684\u7B49\u7EA7" + Ii1iIl + lilIIl(225, "&v(!"));else {
            await i1i1I1[lilIIl(646, "cvWH")](userMyCardForFarm, i1i1I1["gxfgo"]);
            if (i1i1I1[lilIIl(568, "A4yY")]($[lilIIl(288, "&v(!")]?.["code"], "0")) {
              IIIIIl -= 100;
              if ($[lilIIl(360, "t(FI")]?.["treeFinished"]) {
                IlII1 = true, console[lilIIl(506, "haP4")](lilIIl(644, "Tc0m") + IIIIIl + lilIIl(628, "Ux)#"));
                break;
              } else i1i1I1[lilIIl(223, "AG^&")](lilIIl(397, "Tc0m"), i1i1I1["zaPSx"]) ? IlI1i1[lilIIl(610, "2O[G")][lilIIl(605, "&wJj")](l1lIl1) : console[lilIIl(323, "pOgc")]("\u5DF2\u4F7F\u7528\u5FEB\u901F\u6D47\u6C34\u5361\uFF0C\u5269\u4F59" + IIIIIl + lilIIl(306, "AG^&"));
              await $["wait"](500);
            } else {
              console[lilIIl(421, "D@e7")]("" + JSON[lilIIl(269, "SFB7")]($["userMyCardRes"])), console[lilIIl(643, "S4Ba")](i1i1I1[lilIIl(562, "uK%F")]);
              break;
            }
          }
        }
        if (IlII1) {
          await initForFarm(), await i1i1I1["mVhRv"](autoCrop);
          return;
        }
      } else i1iliI["log"](lilIIl(545, "!SmT") + I1iIii + lilIIl(296, "cJte"));
    }
    if (i1i1I1[lilIIl(517, "#0!g")](IIIIIl, 10)) {
      if (i1i1I1[lilIIl(480, "]ovQ")] === i1i1I1["NSpQO"]) i1lI[lilIIl(603, "jPP9")](lilIIl(467, "]ovQ") + IlI1l[lilIIl(488, "FAmv")]?.[lilIIl(367, "sQ^m")] + "g\uD83D\uDCA7\n");else {
        do {
          if (lilIIl(278, "sT][") !== i1i1I1["cwstL"]) {
            await i1i1I1[lilIIl(358, "C@S!")](waterGoodForFarm);
            $[lilIIl(515, "jPP9")]?.[lilIIl(242, "@o2C")] && (IIIIIl = $[lilIIl(446, "a@Fw")]?.[lilIIl(426, "&v(!")] || 0);
            if (i1i1I1[lilIIl(645, "KQyc")]($[lilIIl(268, "QWFe")]?.["code"], "0")) {
              if (lilIIl(546, "9GV*") !== i1i1I1[lilIIl(298, "P(hT")]) {
                if ($[lilIIl(597, "cvWH")]?.["finished"]) {
                  IlII1 = true, console[lilIIl(353, "FAmv")]("\u5DF2\u6D47\u6C3410g\uFF0C\u5269\u4F59" + $["waterResult"]?.["totalEnergy"] + "g\uD83D\uDCA7\uFF08\u4F5C\u7269\u5DF2\u6210\u719F\uFF09");
                  break;
                } else {
                  if (i1i1I1[lilIIl(460, "jPP9")] === i1i1I1[lilIIl(254, "AG^&")]) {
                    if (i1i1I1[lilIIl(635, "2O[G")]($[lilIIl(409, "T!#)")]?.[lilIIl(370, "B[vv")], 0) && i1i1I1[lilIIl(478, "AG^&")]($[lilIIl(299, "sT][")]?.[lilIIl(533, "txF@")], 10)) await gotStageAwardForFarm("1"), $[lilIIl(477, "gUB[")]?.[lilIIl(315, "D@e7")] === "0" && console[lilIIl(541, "IKY3")](lilIIl(434, "cJte") + $[lilIIl(331, "uK%F")]?.[lilIIl(587, "txF@")] + lilIIl(584, "D@e7"));else {
                      if (i1i1I1[lilIIl(418, "He&s")]($[lilIIl(445, "[7KZ")]?.["waterStatus"], 1)) {
                        await gotStageAwardForFarm("2");
                        if (i1i1I1["WbWnH"]($[lilIIl(627, "9HJc")]?.[lilIIl(364, "He&s")], "0")) {
                          if (i1i1I1["KOEJS"](i1i1I1[lilIIl(286, "T!#)")], i1i1I1["GOnwm"])) console[lilIIl(643, "S4Ba")](lilIIl(348, "uK%F") + $[lilIIl(477, "gUB[")]?.["addEnergy"] + lilIIl(474, "haP4"));else {
                            IliI11["log"]("\u6C34\u6EF4\u4E0D\u8DB3");
                            return;
                          }
                        }
                      } else $[lilIIl(446, "a@Fw")]?.[lilIIl(303, "gUB[")] === 2 && (await i1i1I1[lilIIl(472, "bg(6")](gotStageAwardForFarm, "3"), $[lilIIl(590, "Tc0m")]?.["code"] === "0" && (i1i1I1[lilIIl(547, "2O[G")]("CPbPz", lilIIl(385, "IKY3")) ? (Ii1iII = i1i1I1[lilIIl(321, "B[vv")], l1i11I = "https://api.m.jd.com/client.action?functionId=" + II11II + lilIIl(458, "k![b") + i1i1I1["dRASw"](Ii1iI1, lilIli["stringify"](Iliili)) + "&appid=wh5") : console[lilIIl(542, "2O[G")](lilIIl(240, "T!#)") + $[lilIIl(577, "SFB7")]?.[lilIIl(237, "#0!g")] + "g\uD83D\uDCA7")));
                    }
                    console[lilIIl(585, "sT][")]("\u5DF2\u6D47\u6C3410g\uFF0C\u5269\u4F59" + $[lilIIl(624, "Vwy@")]?.["totalEnergy"] + "g\uD83D\uDCA7");
                  } else II1Il[lilIIl(323, "pOgc")](lilIIl(339, "Vwy@") + lilIlI["farmInfo"]?.[lilIIl(596, "C@S!")]?.["name"] + lilIIl(594, "qsKS") + iIIIIi[lilIIl(277, "zLIJ")]?.[lilIIl(398, "2O[G")]?.["prizeLevel"] + lilIIl(294, "cJte") + i1i1I1[lilIIl(334, "C@S!")](i1i1I1[lilIIl(304, "T!#)")](iii1I1[lilIIl(623, "k![b")]?.[lilIIl(609, "aX3C")]?.["treeEnergy"], II1Ii[lilIIl(319, "bg(6")]?.[lilIIl(592, "cJte")]?.["treeTotalEnergy"]), 100)[lilIIl(305, "t(FI")](2) + lilIIl(333, "0&gr") + i1ii[lilIIl(589, "B[vv")]?.["farmUserPro"]?.["treeEnergy"] / 10 + lilIIl(264, "k![b") + i1i1I1["VaCsG"](I1iIl1[lilIIl(327, "KQyc")]?.[lilIIl(229, "#0!g")]?.[lilIIl(448, "KQyc")], i1il[lilIIl(220, "T!#)")]?.[lilIIl(566, "IKY3")]?.[lilIIl(598, "T!#)")]) / 10 + "\u6B21\uFF09");
                }
                await $["wait"](500);
              } else ll1iI += iI1lll[l1lIll["floor"](i1i1I1["ChkbB"](I1l1II[lilIIl(639, "@o2C")](), IIli1I[lilIIl(414, "P(hT")]))];
            } else {
              console["log"]("" + JSON["stringify"]($[lilIIl(558, "I%Vs")])), console[lilIIl(222, "0&gr")](i1i1I1[lilIIl(537, "a@Fw")]);
              break;
            }
          } else Iliil1[lilIIl(353, "FAmv")](lilIIl(420, "]ovQ"));
        } while (i1i1I1[lilIIl(492, "t(FI")](IIIIIl, 10));
        if (IlII1) {
          await i1i1I1[lilIIl(361, "9HJc")](initForFarm), await i1i1I1[lilIIl(486, "SFB7")](autoCrop);
          return;
        }
      }
    }
  } catch (Ill11) {
    console[lilIIl(563, "txF@")](lilIIl(273, "He&s")), $[lilIIl(266, "Tc0m")](Ill11);
  }
}
async function autoPlant() {
  const ililIl = liiI1i,
    liiIII = {
      "Wqiai": function (iI11I1, il1i1l) {
        return iI11I1 === il1i1l;
      },
      "woQlS": "YcIUT",
      "eOdoA": function (IlIlll, IIIl1I) {
        return IlIlll(IIIl1I);
      },
      "pSgEm": function (iil1ii, IlIlli) {
        return iil1ii === IlIlli;
      },
      "nneGL": "HQIKF"
    },
    li1i11 = $[ililIl(527, "uK%F")]?.[ililIl(318, "QWFe")];
  if (li1i11) {
    const il1i1i = $[ililIl(569, "C@S!")]?.[ililIl(553, "#0!g")][FRUIT_PLANT_LEVEL];
    if (il1i1i && il1i1i[ililIl(413, "sT][")]) {
      if (liiIII[ililIl(251, "@o2C")](liiIII["woQlS"], "epGYL")) iliIII[ililIl(293, "uK%F")](ililIl(524, "IKY3") + iIIl1i + "\u7684" + I1lllI[ililIl(406, "BiiY")]?.["farmUserPro"][ililIl(308, "IKY3")] + "\n");else {
        const i11ilI = il1i1i[Math["floor"](Math["random"]() * il1i1i["length"])];
        await liiIII[ililIl(419, "IKY3")](choiceGoodsForFarm, i11ilI["type"]), liiIII["Wqiai"]($[ililIl(576, "I%Vs")]["code"] * 1, 0) ? console["log"]("\u5F53\u524D\u6CA1\u6709\u79CD\u690D\u65B0\u7684\u6C34\u679C\uFF0C\u5DF2\u81EA\u52A8\u79CD\u690D\u7B49\u7EA7" + FRUIT_PLANT_LEVEL + "\u7684" + $[ililIl(449, "SFB7")]?.["farmUserPro"]["name"] + "\n") : console[ililIl(572, "&wJj")](ililIl(415, "A4yY"));
      }
    } else console[ililIl(572, "&wJj")](ililIl(407, "t(FI") + FRUIT_PLANT_LEVEL + "\u6682\u65E0\u6C34\u679C\u53EF\u4F9B\u9009\u62E9\uFF0C\u8BF7\u6253\u5F00\u4EAC\u4E1CAPP\u68C0\u67E5");
  } else {
    if (liiIII[ililIl(399, "&v(!")](liiIII["nneGL"], liiIII[ililIl(519, "!Gq0")])) console[ililIl(260, "@o2C")](ililIl(281, "IKY3"));else {
      IiilI1[ililIl(551, "]ovQ")](ililIl(371, "2O[G"));
      return;
    }
  }
}
async function autoCrop() {
  const liiI1l = liiI1i,
    llllI = {
      "MDrOi": "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6Cookie",
      "QqJfx": "ZBPUg",
      "TkMna": function (i11il1) {
        return i11il1();
      },
      "hxgpG": function (ii1iiI) {
        return ii1iiI();
      }
    },
    lllil1 = $[liiI1l(623, "k![b")]?.[liiI1l(636, "QWFe")]?.[liiI1l(349, "D@e7")];
  console[liiI1l(463, "BiiY")](liiI1l(326, "T!#)") + lllil1 + liiI1l(375, "gUB[")), await gotCouponForFarm();
  const iil1il = $[liiI1l(431, "IKY3")]?.[liiI1l(287, "cJte")],
    ilil1I = iil1il?.[liiI1l(379, "k![b")];
  if (iil1il && ilil1I) {
    if (llllI[liiI1l(600, "pOgc")] !== llllI[liiI1l(441, "#0!g")]) lilIl1["msg"](i1l1ii[liiI1l(514, "I%Vs")], llllI[liiI1l(366, "pOgc")]), i1l1["exit"](1);else switch (ilil1I) {
      case 200:
        const ilil11 = iil1il?.[liiI1l(376, "He&s")]?.[liiI1l(335, "cvWH")],
          illlI1 = iil1il?.["hongBao"]?.["endTime"];
        console[liiI1l(586, "qsKS")]("\uD83C\uDF89 \u6536\u83B7\u6210\u529F\uFF0C\u83B7\u5F97" + ilil11 + liiI1l(505, "txF@") + $[liiI1l(338, "k![b")](liiI1l(373, "A4yY"), illlI1) + liiI1l(510, "fzI!")), $[liiI1l(614, "@o2C")][liiI1l(271, "cvWH")]("\u6536\u83B7\u6210\u529F\uFF0C\u83B7\u5F97" + ilil11 + liiI1l(346, "FAmv")), await llllI[liiI1l(247, "qsKS")](initForFarm), await llllI[liiI1l(571, "P(hT")](autoPlant);
        break;
      case 409:
        console[liiI1l(444, "bg(6")](liiI1l(410, "T!#)")), $[liiI1l(640, "I%Vs")][liiI1l(388, "fzI!")]("\u5DF2\u8FBE\u5230\u9886\u53D6\u4E0A\u9650\uFF0C\u8BF7\u8FC7\u4E00\u6BB5\u65F6\u95F4\u518D\u9886\u53D6");
        break;
      default:
        console[liiI1l(342, "A4yY")](liiI1l(626, "k![b") + JSON[liiI1l(438, "2O[G")]($[liiI1l(245, "BiiY")]?.[liiI1l(362, "haP4")]));
        break;
    }
  } else console[liiI1l(425, "Ux)#")]("\u6536\u83B7\u5931\u8D25 " + JSON[liiI1l(380, "jPP9")]($[liiI1l(436, "cJte")]));
}
async function myCardInfoForFarm() {
  const i1l1II = liiI1i;
  $[i1l1II(575, "uK%F")] = await request(i1l1II(387, "IKY3"), {
    "version": 5,
    "channel": 1
  });
}
async function userMyCardForFarm(IIIl11) {
  const i1ill = liiI1i,
    I1lIi1 = {
      "wRqBf": "userMyCardForFarm"
    };
  $["userMyCardRes"] = await request(I1lIi1[i1ill(403, "&v(!")], {
    "cardType": IIIl11
  });
}
async function waterGoodForFarm() {
  const I1l11l = liiI1i,
    liiIIi = {
      "mMASJ": function (lil11I, Iliii1) {
        return lil11I(Iliii1);
      },
      "MlAYM": I1l11l(581, "Tc0m")
    };
  $["waterResult"] = {}, $["waterResult"] = await liiIIi["mMASJ"](request, liiIIi[I1l11l(526, "haP4")]);
}
async function gotStageAwardForFarm(iIiIi) {
  const lilIIi = liiI1i,
    iil1ll = {
      "wHpAw": function (iiilil, iil1li, lillIl) {
        return iiilil(iil1li, lillIl);
      },
      "vnGvr": lilIIi(461, "S4Ba")
    };
  $["gotStageAwardForFarmRes"] = await iil1ll["wHpAw"](request, iil1ll[lilIIi(248, "BiiY")], {
    "type": iIiIi
  });
}
async function initForFarm() {
  const i1l1Il = liiI1i,
    iIiIl = {
      "KUZnR": function (iiilii, li1i1i, IlIli1) {
        return iiilii(li1i1i, IlIli1);
      },
      "csBLP": i1l1Il(332, "cvWH")
    };
  $[i1l1Il(220, "T!#)")] = await iIiIl[i1l1Il(591, "zLIJ")](request, i1l1Il(531, "A4yY"), {
    "babelChannel": iIiIl["csBLP"],
    "sid": "",
    "area": area,
    "version": 26,
    "channel": 1,
    "lat": lat,
    "lng": lng
  });
}
async function gotCouponForFarm() {
  const illIiI = {
      "NLQcw": function (Ill1l, llI1Il, ii1iii) {
        return Ill1l(llI1Il, ii1iii);
      }
    },
    lI1lli = {
      "version": 11,
      "channel": 3,
      "babelChannel": 0
    };
  $["gotCouponForFarmRes"] = await illIiI["NLQcw"](request, "gotCouponForFarm", lI1lli);
}
function Iii11l() {
  const II11l1 = function () {
    return [...[iｉl, "OnpjstPjWUiQaNUmFik.duhcgyohSmrDY.xPdvD7==", "xGldThW", "WPddSCoIW5XhWO7dHCkKih4F", "W5ffWRFdSSk8", "WQ5uBSkZbLG", "yCkxavxcVa", "W63cTSoGBI0", "l1XJctm", "mmkwbvFcVhDYEMhcMSkrW4m", "W50VWR8", "m8o7WPGSW4pdRmk0W6On", "W7eim8o1vWZdTq", "WP9mq2BcKW", "5Q2P6l6u6z6h", "W6jpkW", "B8ojuYhdUZu", "WQpdO8o1W4nCWPZdJCkZ", "WPPTkx7cLmoXEclcU8kdgG", "W7b0yCk4W5yGWRxdNCkp", "W4VdV8kbWPtcNW", "pr/cQt9Sfq", "cwrVsuO", "5lIJ5yQ45OIJ6kgR5B+c5BU9776P6kYZ5QcQ5PYl5OUl6kkh5PwT5B6d", "WP0qWOlcQSoY", "WPyvWOy", "5lUQ5yMd5OQB6kcY5B685BMM77YD6k+P5Qo/5P+45OMq6kk35PAS5BYH", "WRhcTSotESo6qqtdUW", "dahcKSozW5e", "WOtcR8oQyCoW", "W7hcSNG", "5B+V5yM35Rcn5PYk5y2356EL5Qw555I65RkV5PYi776M5y6F6icP5P2N5P6J5Bwt6Agl5yYc5lQq5Q6B57MO5y+e6lYl5yMk5lMA5lUM6zIX772A", "WP/dVw/cNCkPW7q3WRSEtK1XAq", "WPpcTLRdNwy", "W4bpbZ7dR8k1B3q", "W7dcMdRdQgi", "WPeUD8kbWQm", "mq3dK3fMW7uBWQFdOSkvFZje", "uXJcTSoWdSorySkoex/cQI02", "rSoZW54YW4XAW6m8W4b0bLK", "l2jegW", "hCkYWQzIWRm", "W6eRDXldTa", "Bmk2W68", "772v6l655BIB", "cunbpSkp", "pVcNSjO", "oxTyha8", "WR/cJ0/dGwS", "gsJcI8oDW4NcHSoExKTyta", "W7dcH3H5WQm", "W78yf8oKwa", "v0Ho", "WPFcVuddMurrW6uIW5hcKKy", "WRizxSkEWQi", "FNddTCoCWRFcQGC", "W4/WL6gd", "WQRdHsddUMW", "W5jBW4fM", "FX5KBri", "Fv8mW6aRW7pdNqW", "WQjHlghcRW", "W6xdPSk+WRpcM1VdVeC", "W6zYyCk+W4O", "WRFcIvZdNui", "W4/cPtRdIW", "iCkIfJNdUa", "rmkrWPKmW7a/FhS", "WOTTl3BcQSogAZtcOSk4b8oTh8kIW4arWRW", "ddO1lSk0bxJcGa", "W71qWOhdQmkftSo3W5K", "WQ9Cr8kPWOi", "W7tdKxJdNgW", "D1ez", "rqzcqY8", "5Q+c6l+P6zYJ", "8yQTKJNLVQxLIOpNPktMPidNMlPW4OgA", "W77dHMFdTetcPSkZWO4", "AmoUrGBdJq", "W43dGmkNWQtcOW", "wgzVW4mKstCoj8ozWPe", "z8k2W7XcW5zzW6JdRgnzWOiHW47dGSkdWRFdUb8ucGRcOfC", "yupdQa", "uo+/J+w0NEA1HUAZJq", "EbldTMOS", "mbJcQtLXfbpcOG", "mmoUWPGKW4ddUa", "wCoTW5ddVCoaimo1qCoP", "pcxdQJK", "5B6q5yQX56E+5Qs2772t", "tWJdUg0RmaRcQCoUhW", "BwxdMSofW6pcQWzlWOFcG8k6WQpdSComoW", "m3Hq", "W6bHz8kYW5a", "WPTOW5zceW", "W60fimo6W4GIzSoJqMGrW51T", "57Mb5yY08jEuMG", "jSk7W6D1W5Sf", "5P6C5Qoi5B6i6iQG5lIK77Y05AEz5yI4", "W4lcQZpdIW", "WRNcTSomCG", "WO5iymkCzmkIWO1nWQxdGbHLDa", "WOreW7xdOGa", "WO9Era", "mCkvbfxcShm3wMpcOmkHW7RdKa", "lctdR15T", "WReZkSoJWO4sWQJdJ8kKzYS", "zCkHWPGkW4W", "EHBdVeaH", "DCkAWRSwW5i", "F2ZdLSohWOlcTIbmWPNcHSkCWQpcRG", "W5ldJCkCWQFcTq", "mSoMWPKUW7NdOSkTW78", "WRZcQLxdV8oA", "WRT2iei", "WRWPFehcPG", "vNOmW4il", "WPFdTmo0W7r8WPJdKSkXcq", "W4rmWOpdN8k5xq", "W6ZcT8k7zs/dNZqsAJ8f", "WQHxzmkUWOnfimolqvyb", "6lE45y2Z5PwI5PsF", "wYfNqr7dSLKVsCoydmkZWR9Y", "jM5ocLdcIcWye8kPW5hcMSkxbhW8W7xcT8oj", "WP5mWOvNFG", "4Oo8W7ZLT4BMIQZNHQK", "WRb2kKdcGSkKW4O", "WQvJDSk0qSkzWPnIWPFdQHHjsxNcJCo+WOf+z3pcSCk/5O665AYPWP3cUSk16lwr5y+o5RAb5Roz776l5AAy5lMg55E7jmkoDUMBJow/QG", "n8kFW5O7W5tdSMeVpmoBWQj7WQ/cT1GOWRddNCkOW43dVwpcPHPRECog", "oINdTcNdVSkLidrLnW", "WOLDW49OkeFdSL/dIa", "W6/cTSkXyYZcVhDEavSmW5JcQSkjuCkEWQ9GW6vGW6OedfyFWQlcKrPtW6/dJZvCWQiHhG", "W7lcI3boWO8", "W5ugemkCjG", "gh1ucWa", "W7T0W79TW50", "W5a0WPy/W68", "W5fdW69IW6PmpCoqW73dU8oOh8kMdCokW5pcOa", "wdX+tq3dQW", "WOnLpNdcQmocCdq", "da/cHSo+W7i", "5O2t56Eg57Uq5PYHvc1Dp8kxkSk7W49DFq", "6lAa5y+z5PAv5PsB", "mMv7obS", "W5fVbIRdGq"], ...function () {
      return [...["W7zWD8kWW4WIWP/dLmkyrZBdVCk9", "WOBcVuFdIhvJW6mN", "yCoGtsldGa", "WRJdPCoWoKZdUsuuAbKs", "vJJcTmohlG", "WRNdKCotjgG", "WP1/W5FdOJ/dSCkgj1ifw8k+Aq", "W6tdSvJdUSoEW7jmgCoZW4y", "utNcOSoajq", "r17cSSk7ia", "eCkIWPTG", "jmkPkqRdI8oQAmohc3JdOSkrFmktWOzaf8omW67dR8kW", "5B2z5yMs5Rcs5P6856sc5QEc5PEt55QP5RoF5P2+77+c5O+b5A2h55IQ56Ya57UQ", "WQTEcflcSSo8sHdcMSkQpmokfSkkW7aLWOBdIq", "WQeaBCktWRZcU2JdJsuRaq", "5B6f5yIS5BER6l2i5yU+6AgV5y+B5lQ06zIa772l6l6Y5lUR5Q2L5PAb6zEI5ysu6Aoo5y+j5zcdqa", "W7BcM3qzlq", "W4VXJBo5", "aIZcKCoFW4/cVa", "WQNcM2ddRhDi", "5BYm5yMA5Rkw5P2656AW5QEi5PEr55QX5Rgd5P2r77+95Bop6kYk6iEu5yQ556AC5QEc5AE16lAF772R6k+r5OIY5B2p5lUs5lUqnCotBoAkKEwkU+wYU+IVUG", "W7adWPCRBaRcSEw8UEwLUUoaRos5Pos7IUI0H+wnLG", "wNRdI8kpWOpdOCkjhM1zsmk2W5xdTa", "WR9mfvtcSq", "W5L1W4HSW5K", "5B6J5yMl5Rc15P6k56Aa5QAy5Pw/55Un5Rca5P+277Yf5Bog6k+p6iAP5yIc56w45Qsz5AAO6lsR772a6k6q5OMm5B2h5lII5lMtsXrI5OQK5yMo5BoG6kYy", "W4dcPtK", "WP/cKColxmoc", "vwSrtGVcKrpdH8k0dxO3WQRcMSkrBq", "WQ0VzSkLW5eRWQ/cLmkKvJhdTSkLWPORdgBcTmocWPRdPMJcKq", "fYSd", "uGtcP8oJl8oTt8kkexZcGq", "WRvqymkouq", "hcFdSeXL", "W70fWRapW5S", "lCoUWPO", "W5TvW5HaW7DDbmorW7xdKSobaSkskSozW4ZcN8kXW4C", "vwq/ECkv", "W5hdQqpcJauWWQqmW4dcIMefWRa", "5P+f5QgZ5y2S6iQR5lQc776y5AsI5yMe", "rCkGW58WW4K", "pG3dIvvRW6eeWPRdQCkGzsX2DHJcRu7dLeS", "W45cWPBdT8kExmo/W47dRCkiW4W", "WQ3dSmoWpNFdRsKaqq", "jHtcQY97eGK", "W63cLwavj3enzW", "FmoUW7/dVSoR", "b8kMWQPdWO8", "WOijW47cSmoHbCkq", "bJqG", "W5fpatBdLmkjBgH/FCkN", "zSkdWOGBW4WmDg1kCum", "cMfmpG", "W6ZdLxddVfNcP8kHWOakW64PswpcVIi", "W6bOFmk4W5SIWPVdLmkzvYddLCkMWPSYb3dcMSo/WPldUa", "77+p6lYN5BQv", "WQVcN2pdRG", "Dmk2W7XWW459W6hdRfbjWPO", "lrddMhnxW6avWOhdOG", "bIlcRmoAW7a", "WR98kNlcGq", "W4rzW6nkW4G", "WP3dV2NcNSkIW78YWQ0CDK5Gya", "BI7dQdJdQ8oS", "W7SinmooaXJdPa", "WOnpW65Pmq", "dxddVConmZldLHtdSgRdHmoSzx/cPmkcW6rhWOi0", "wYJcVmo/msRdUqxdUW", "k8kUiq", "5Q6i5P+j5OMq5Q6S5zoa5y2L6ios6AcUvUASVEE4S+wpKU+8N+ExKos5JUw4MEIMOEA3PUAYIowMOoAgOE+9N+IfIEADKUs+J+wgP+s+R+EuIUw9UoMdJoA1IEAZQUwmGq", "aaRcO8oYkSomhmkycY4", "lHNdTXLqtqFcVSksWQ9zWQZcTZ/cJZ8iW7Ld", "5P2S5Qcx5B6u6iIY5lUl776z5AAz5yU4", "W7FdKMhdN2hcQCkY", "dh7dU8oZdJ3dLX4", "F/cAVQJVUBW", "oYxdQdFdSq", "aW0ul8kw", "C0qyW7SW", "j/c8Oy1p", "actcRJXl", "uMX+lSkWkNtcPJu", "WOFcS0ddR0jJW7yMW6tcKfqbWPpcNmoUWQuTW75zimoMlMq", "W79bWRpdTmkd", "BGNdUhOGpWlcVG", "WRvUW7RdQGu", "uJPIqrZdUNDUrCoteSoBWQy3FCkdW4xdP2lcT2e", "W4fbaqddKSk6BN5lzSkYC8omW6BcVbZcGmkUxv4IkmoQ", "xXVdQwK", "lLbupZa", "bSoDWR8mW7NdLmkkW40GqSoypCoaWRTAW7RdNCkX", "W65wE8kdW44", "F8oCW4aGW48", "WOrEv8kUySkNWQngWOldMcTYy3JcVCoCWO5rnthdJmo6W44", "lCoQWPK2W4ZdRmk4", "FCknWPS", "WQ12smkhzW", "y3RdICoJWOu", "WPLJg3lcNSogEq", "W5SxWRKBW50", "tmodW4O9W7pdV39L", "W6LuDmkOW4m", "qCk8W4n3W7O", "ugu8", "imkufXddMq", "hcJcKCoCW5tcUq", "WQhcSSokw8o0", "W6SmkCoY", "FSovW5SmW5ldSxLPc8oOWQfYWRBcOq", "W7FdTCkPWRVcL1VdV1RdNSo0", "5ywA57Is5y6Q8kYvMU++LUwWLowCQe4", "lmoGWO0", "WQtcJMFcPw4oomkuivRdO8oa", "zSk4W7TLW6fzW73dRq", "5P+Y5Qgy57IS5PYK5lI977+y5AET5yQC", "eEI+LEACKU+8Oq", "c0VdNmogaG", "WOnOmehcHa", "W7tdPSkLWQO", "uMS2Eq", "WO1iW4LKnhldVKRdHfdcVa", "cdawuWZcMGNcJSkF", "ASolW4BdQSoM", "WPjPW7VdRYJdTmkH", "W7pcS3PmWOi", "ys7cHW", "cH7dNG3dTW", "DLSnW74dW7RdNG", "oahcQ8oUW54", "5B+V5yM35Rcn5PYk56wv5QsL5PEe55I65RkV5PYi776I5BAc6is+5yUJ56wM5QAS566e57MZ", "8lIBHMdORBhMSBtLPzROTRvc4PY9yUAvIEwqG+w7G+AxUoAmRW", "dCoJWQSCW6a", "zSk4W7P8W6TwW6NdPG", "fWZcHSolW6G", "W6SVc0NcP8keW7tcSq", "WRCZj8oMWObYW67cImkLxIpdO8kmWOm", "nNLEbZVcQHnZfSk/WPW", "WOBcVuBdKx9SW7CS", "BCocW4OQW7JdShDYcCoh", "d8oxWQ4SW7K", "jtVcSY9p", "WQ3cNNFdUJK", "r8kKWQqsW7e", "W6dcK25qa3KozCooEmoOWPvoiCo3WQqgW7lcLgNdJG", "zSoiqG"], ...function () {
        return ["aYZcJmolW5RcS8oE", "W5bvW4S", "WRldQ8oL", "WQJdOCo0g14", "nbVdVND2W7a9WPVdOCkjwdTd", "5BwU5lYs55wO5B2T6ycP5RsS5RkK5yYd776T5yIR5l+W", "vxDqW505", "WPVdQmobbuO", "W6ZdLwddVa", "W5yLWQWhW4OLyCovqKyXy8opvmknm8o8W5m7", "4P6sWQtMT4xMSApLVjVLURlVVyZLJONOG4xOPO3LJQZPOAhMJAJVV7FOR5lNQ6RLK5tLHOtORz9U", "WPXPW7m", "jq4nn8k8", "s8o+W4FdTCoFmCoIumoGqCkVWQDpW487WR0h", "44kH5O6q56EI44gA6k2C5ysz6i6Z5y2WDwGUEmoWva", "vYlcTmkJEM7cJeZcJca", "dhNcNCkiWOG", "CYpcHSo1ja", "s2SVECkFkSk8hCk7cIG", "WPVdTCoJW4jZWPRdHq", "W5r5qmk5W4O", "zCoHWRLYWPm", "vSkFW5b9W60", "DCoFW4G", "qaRcOCoVfSoBrmkDm2NcLW", "WRVcUmog", "W5PBW55UW41BeComW4VdPSob", "WQNdRmoojv8", "oejMaaW", "xrVdR2uNmaNcTa", "WOFcUuddSfLLW7GTW7BcK1qhWOlcQq", "WQ3cHMNdU0q", "ew9c", "v8oNW53dNSo8", "FvCg", "BCkGW4TWW5bCW4BdP0rbWRe2W5K", "x2i0DCkohCkEaCkHaI/dLSoUggefE1FdOZ9A", "W6rVz8kcW4WMWRVdNSk3rdldOCkTWQ8BfetcLSoFWPRdMwlcJa", "W7y2lKpcG8kQW4RcR8kdWOS", "WO/dQSolhgG", "eJ3dIHRdUa", "DmohqahdUWbQFhdcRCkTW73dNtfuWQ0", "bSoDWR8mW7NdLmkkW40GqSoypCoaWRTAW6tdU8kleZn2W5HbW4ig5PQ05zgp6ycx556Z776IWOLBWOxdNa94pKDsWPlVVANVVjpPUylORy3KU7tPGB3NNPa", "FSovW5ScW5JdRwfHcCoB", "W4VXJBo5WQq", "aIBcMa", "WOKGWOK", "EmouW4SkW5pdU2bNfW", "WQjtmwJcJW", "WRLxySkMWRH4mSof", "zmojqdFdVszIDLxcNmkJW73dVXzjWRijWPeUW7VcVLqU", "WPZcGSo7ECoH", "pWpdJ3TrW6CrWOFdL8kuzq", "WQVcU2ZdPNq", "77+T56Yg57Mj", "tMC0tmk4", "xrVdR2u7lqRcQCozfmoF", "iXdcRJ9SmXJcPCokWOTm", "WQitFmktWOVcH2JdJdC+", "EeSPW68m", "sK80W6SA", "W6iTWOG4W4C", "iCkbWPH9W58", "WPzgW5O", "WOb1hNRcLmohvd/cQmkapmoMkW", "g2LD", "W7xdI1DDkG", "tNncW54yva", "WRSsFG", "W6xcNxetpgmfCmo6zCoP", "WRpdOCoXjhJdRsu", "W5PBW593W5TjbSoA", "WPtcRLhdMwv2W7a3W4a", "e8oIWRO2W4e", "W5WLWQS4W4O2yq", "wgu1Eq", "sdDhECon", "WPXiW49Sd07dVvy", "lrddMhnqW7SaWPtdQ8kJzdTcCbm", "iCkGnrFdQ8oUxCom", "ECkwWOGoW41KpJfCFexcItddMmksdSo+q8kyWRH/vW", "ExVcSJ3dPmkOkY9l", "WOK4BINcGa", "lI3dTthdM8k/btq", "WRtcNuDEoXlcUuhdVmorWPC", "5B2i5yMZ56AZ5QAa7724", "5Pw+6i+75AA26lw5776E5P+7556g54UT5OcaCG", "W6tdQmk4WO3cPLtdVu3dUmo6W73dMSo7W4/dQNJdGwO3WP3cQ8oZfa", "hpcUK4pVVllKVl7NIPtLTPlMI7JNHBNVVAe", "ob7cVq", "lsldSq", "WQXRiulcLmkQW5hcPCkgWQVdGSkUW7OZWQS", "WOL3W6eMW6yqBSoVzW", "WRiWjCo/WOXWW6K", "WQNcKwK", "WQ7dJ8owlvC", "WOTTl3BcS8oqEcpcNSkDaq", "iCorWP0UW5S", "W6NcJXpdTmoW", "W4mHWRyVW4q8", "uw8OB8kmh8k8", "y8kaWQ8mW6G", "m8oVW4D/W4v5W57dVa", "bNddRG", "5BEX5l+z55sC5B6p6ykw5Rsa5RcX5y2Y77Yy5yQc5l6B", "W6JdRehdO0m", "psFcItz1", "nmk4WRHZWPy", "dZ1Ql8ovqCoPn8kPmWVdT8op", "WPCsDmkbWOm", "WRaaA8kBWOFcH2VdKq", "W7GBbSodqq", "gCkSWOG", "W4PwWPZdR8k7", "5P+h6kEV6zwC", "5PQK5PAl5RoN5PYE5y6S5lYZ6ycO5OIg772V6k+S5OQR5B2i5lUP5lUufSkYWOdMOklMN6q", "nq3dMLn2W6y", "WOBcTvRdNvPUW6G", "W5roW5HZW6Ssw8krW7RdPmohxSk5zCobW4xdO8k3W5VdL8oLWQldMrpcUCkcfx0TWO7dHHGhW4tcLW", "s8o+W4FdTCogj8oXr8oCzmkP", "W5jtW49OW5zjgCoB", "W6fZE8k1W5e", "WPDmdLpcGq", "hSkSWOtcQSoln8oIqCoczW", "W4vsrSkyW6WyWOVdUSkIDGhdMSkhWQ4Rke3cO8oKWRhdKG", "WRlcTCo/W6RdPWpcRrdcGmk9", "5RcT5RMe5lQI6lE8", "tmo7W5hdNCo9mCoMuSo1", "iCkIjfBdIq", "B8ojuW", "5P2k5QgW57Uk5P2Q5lMi77+L5AwB5yIp", "5yMe5AAP5y6R5yAk5zY+5PEK5OYA5B+35BQ/W4OQ6k6P55Ml5B2c5lUg5lUCxCobsoACOoEDG+weLUwEOUwkIEIbGEABSEwrOEASLow4Pb8", "W4uVWQWQW4CuASodrga4", "WRJdP8olbfe", "WRiYjSoOWO4gWOtdS8karGy", "imkUmIddH8o6x8ohcLRdVSkLvCkaWRjmn8oeW48", "WOXev8k7ESkNWQm", "WReKWQmAWOe", "mCkVarxdMG", "iCkGna7dOCoHsCoh", "iCkbWPPpW5S", "W6yXWReQW4i"];
      }()];
    }()];
  }();
  Iii11l = function () {
    return II11l1;
  };
  return Iii11l();
}
;
async function choiceGoodsForFarm(i11iil) {
  const llIli = liiI1i,
    Ill1i = {
      "imageUrl": "",
      "nickName": "",
      "shareCode": "",
      "goodsType": i11iil,
      "type": "0",
      "version": 11,
      "channel": 3,
      "babelChannel": 0
    };
  $[llIli(481, "fzI!")] = await request("choiceGoodsForFarm", Ill1i);
}
async function request(ii1iil, lllI1l = {}) {
  const i1i11l = liiI1i,
    i11iii = {
      "whLrF": i1i11l(637, "txF@"),
      "qGcLM": i1i11l(238, "BiiY"),
      "ZiVni": i1i11l(365, "He&s"),
      "XoYcS": "102f5",
      "UaHvG": i1i11l(616, "&wJj"),
      "oLyIz": i1i11l(285, "P(hT"),
      "AsmwM": i1i11l(256, "Tc0m"),
      "SJSse": "71547",
      "VHTVe": i1i11l(374, "jPP9"),
      "aTUXE": i1i11l(383, "FAmv"),
      "UHUwg": i1i11l(263, "[7KZ"),
      "NLiEm": i1i11l(307, "KQyc"),
      "xcOIP": i1i11l(556, "sT]["),
      "VFtik": i1i11l(272, "fzI!"),
      "rmoPU": "2ca57",
      "WUhat": "eaf91",
      "chZNw": i1i11l(602, "txF@"),
      "zDINa": i1i11l(363, "goqf"),
      "QnIKq": "15507",
      "siokc": "157b6",
      "eqTkG": i1i11l(622, "QWFe"),
      "bshdi": i1i11l(496, "B[vv"),
      "pKgpF": i1i11l(561, "uK%F"),
      "HFjKq": i1i11l(404, "&v(!"),
      "KgXZB": "08dc3",
      "hqIcJ": "32b94",
      "hzfvR": i1i11l(329, "9HJc"),
      "byUxf": function (illIii, ii1il1) {
        return illIii(ii1il1);
      },
      "fcISH": i1i11l(302, "9GV*"),
      "MqMdA": i1i11l(265, "T!#)"),
      "nRAVs": function (lI1llI, illIil) {
        return lI1llI + illIil;
      },
      "yEysS": function (Ill1I, i11iiI) {
        return Ill1I * i11iiI;
      },
      "qJiuQ": i1i11l(507, "P(hT"),
      "ZqMFj": i1i11l(275, "IKY3"),
      "QEBGW": i1i11l(620, "a@Fw"),
      "lvmEa": i1i11l(341, "t(FI"),
      "zvKUs": i1i11l(466, "cvWH"),
      "ugwgD": i1i11l(538, "aX3C"),
      "WyShr": function (lIli11, lllI1I) {
        return lIli11 < lllI1I;
      },
      "TUtfU": function (lillI1, IlIlii) {
        return lillI1 > IlIlii;
      },
      "hkSbK": function (i1l1i1, liil11) {
        return i1l1i1 !== liil11;
      },
      "SuQNn": i1i11l(494, "@o2C")
    };
  let llI1Ii = "",
    lllI1i = "POST";
  const li1i1l = {
      "initForFarm": i11iii[i1i11l(567, "2O[G")],
      "taskInitForFarm": i11iii[i1i11l(484, "A4yY")],
      "browseAdTaskForFarm": i1i11l(274, "AG^&"),
      "firstWaterTaskForFarm": i1i11l(250, "a@Fw"),
      "waterFriendGotAwardForFarm": i11iii["ZiVni"],
      "ddnc_getTreasureBoxAward": i1i11l(606, "Vwy@"),
      "totalWaterTaskForFarm": i11iii["XoYcS"],
      "gotThreeMealForFarm": i11iii["UaHvG"],
      "waterGoodForFarm": i1i11l(435, "0&gr"),
      "choiceGoodsForFarm": i11iii["oLyIz"],
      "gotCouponForFarm": i11iii[i1i11l(219, "T!#)")],
      "gotStageAwardForFarm": "81591",
      "followVenderForBrand": i11iii["SJSse"],
      "gotWaterGoalTaskForFarm": i1i11l(384, "Ux)#"),
      "gotNewUserTaskForFarm": i11iii[i1i11l(523, "sT][")],
      "orderTaskGotWaterForFarm": "eed5c",
      "clockInForFarm": i1i11l(257, "2O[G"),
      "clockInFollowForFarm": i1i11l(647, "uK%F"),
      "waterFriendForFarm": i11iii[i1i11l(511, "S4Ba")],
      "awardFirstFriendForFarm": i11iii[i1i11l(557, "&v(!")],
      "awardInviteFriendForFarm": i11iii[i1i11l(309, "fzI!")],
      "awardCallOrInviteFriendForFarm": i11iii[i1i11l(456, "IKY3")],
      "userMyCardForFarm": i11iii["VFtik"],
      "getCallUserCardForFarm": i11iii[i1i11l(595, "I%Vs")],
      "deleteFriendForFarm": i11iii[i1i11l(314, "gUB[")],
      "gotLowFreqWaterForFarm": i11iii["chZNw"],
      "getFullCollectionReward": "5c767",
      "getOrderPayLotteryWater": i11iii["zDINa"],
      "receiveStageEnergy": i11iii[i1i11l(579, "2O[G")],
      "exchangeGood": "52963",
      "farmAssistInit": i1i11l(292, "He&s"),
      "myCardInfoForFarm": i11iii[i1i11l(471, "k![b")],
      "gotPopFirstPurchaseTaskForFarm": i11iii["eqTkG"],
      "limitWaterInitForFarm": i11iii[i1i11l(231, "SFB7")],
      "ddnc_surpriseModal": i11iii["pKgpF"],
      "friendInitForFarm": i11iii[i1i11l(422, "zLIJ")],
      "clockInInitForFarm": i11iii[i1i11l(593, "gUB[")],
      "guideTaskAward": i1i11l(536, "KQyc"),
      "signForFarm": i11iii[i1i11l(291, "0&gr")],
      "gotNewUserTaskForFarm": i11iii[i1i11l(283, "P(hT")]
    },
    II1i1 = li1i1l[ii1iil];
  if (!II1i1) i11iii[i1i11l(473, "pOgc")] !== i1i11l(491, "FAmv") ? (iillll[i1i11l(246, "FAmv")] = true, lIIilI[i1i11l(522, "pOgc")] && IiiIl1[i1i11l(262, "!SmT")]["fix"](lIIil1)) : (lllI1i = "GET", llI1Ii = "https://api.m.jd.com/client.action?functionId=" + ii1iil + i1i11l(347, "uK%F") + i11iii["byUxf"](encodeURIComponent, JSON[i1i11l(516, "Ux)#")](lllI1l)) + i1i11l(465, "&v(!"));else {
    const l1l111 = await H5st[i1i11l(459, "!SmT")]({
      "appId": II1i1,
      "appid": "signed_wh5",
      "body": lllI1l,
      "client": i11iii[i1i11l(243, "2O[G")],
      "clientVersion": common[i1i11l(549, "@o2C")](),
      "functionId": ii1iil,
      "cookie": cookie,
      "ua": $["UA"],
      "version": i11iii["MqMdA"],
      "t": true
    });
    llI1Ii = i1i11l(228, "IKY3") + l1l111[i1i11l(336, "haP4")];
  }
  await $[i1i11l(502, "!SmT")](parseInt(i11iii["nRAVs"](i11iii[i1i11l(528, "sT][")](waitTimes, 1), 1000), 10));
  const lI1lll = {
      "url": llI1Ii,
      "method": lllI1i,
      "headers": {
        "Host": i11iii[i1i11l(535, "cvWH")],
        "Accept": i11iii[i1i11l(580, "k![b")],
        "Origin": i11iii["QEBGW"],
        "Accept-Encoding": i11iii[i1i11l(322, "KQyc")],
        "User-Agent": $["UA"],
        "Accept-Language": i11iii["zvKUs"],
        "Referer": "https://carry.m.jd.com/",
        "x-requested-with": i11iii[i1i11l(411, "aX3C")],
        "Cookie": cookie
      },
      "body": lllI1l,
      "timeout": 20000
    },
    iIiII = 1;
  let iil1lI = 0,
    iiiliI = null,
    li1i1I = false;
  while (i11iii[i1i11l(560, "SFB7")](iil1lI, iIiII)) {
    i11iii[i1i11l(475, "cvWH")](iil1lI, 0) && (await $[i1i11l(447, "&wJj")](1000));
    const l1iIII = await common[i1i11l(439, "cvWH")](lI1lll);
    if (!l1iIII["success"]) {
      if (i11iii[i1i11l(454, "sT][")]("jWaPv", i11iii["SuQNn"])) i1l1li["log"](i1i11l(509, "sT][") + i1ilii[i1i11l(482, "[7KZ")]?.["addEnergy"] + i1i11l(412, "D@e7"));else {
        iiiliI = "\uD83D\uDEAB \u8BF7\u6C42\u5931\u8D25 \u279C " + l1iIII[i1i11l(313, "SFB7")], iil1lI++;
        continue;
      }
    }
    if (!l1iIII?.[i1i11l(405, "0&gr")]) {
      iiiliI = i1i11l(525, "!SmT"), iil1lI++;
      continue;
    }
    return data = l1iIII[i1i11l(483, "C@S!")], data;
  }
  iil1lI >= iIiII && (console[i1i11l(239, "Tc0m")](iiiliI), li1i1I && ($[i1i11l(468, "KQyc")] = true, $[i1i11l(559, "sQ^m")] && $[i1i11l(559, "sQ^m")][i1i11l(574, "pOgc")](iiiliI)));
}
function randomString(IlIlil, lIli1I = "qwertyuiopasdfghjklzxcvbnm1234567890") {
  const i1i11i = liiI1i,
    II1il = {
      "Dgnna": function (I1lIll, I1lIli) {
        return I1lIll < I1lIli;
      },
      "reEBv": function (II1ii, IIIIII) {
        return II1ii * IIIIII;
      }
    };
  let lllI11 = "";
  for (let lillII = 0; II1il["Dgnna"](lillII, IlIlil); lillII++) {
    lllI11 += lIli1I[Math["floor"](II1il[i1i11i(442, "0&gr")](Math[i1i11i(500, "sT][")](), lIli1I["length"]))];
  }
  return lllI11;
}
var version_ = "jsjiami.com.v7";
// prettier-ignore
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}