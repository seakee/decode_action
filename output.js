//Thu Nov 21 2024 03:22:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
活动名称：京东直播互动抽奖
活动链接：https://h5.m.jd.com/dev/3pbY8ZuCx4ML99uttZKLHC2QcAMn/live.html?id=<直播间id>
环境变量：jd_liveLottery_ids // 直播间id，多个用英文逗号，@，换行分割
        jd_liveLottery_threads // 控制并发线程数（正整数），默认1，最大10
        jd_liveLottery_interval // 自定义运行间隔时长（整数，单位毫秒），默认500
        jd_liveLottery_notify // 是否推送通知（true/false），默认不推送
        jd_liveLottery_pinFilter // 账号pin过滤，多个用@进行分割
		jd_liveLottery_rewardnum // 京豆低于值不跑，默认1

高并发脚本，谨慎使用并发
活动限制IP严重，建议使用代理
黑号会持续擦肩，同一直播间活动请勿连续抽奖，以直播间悬浮标识为准

cron:1 1 1 1 *

*/

const $ = new Env("\u4EAC\u4E1C\u76F4\u64AD\u4E92\u52A8\u62BD\u5956");
var iｉl = "jsjiami.com.v7";
const I1llIl = iii1II;
(function (i1ilIl, llI11I, Il1i11, iii1li, Iil1i1, IIii11, iliIl1) {
  return i1ilIl = i1ilIl >> 9, IIii11 = "hs", iliIl1 = "hs", function (Ii1il1, iii1ll, IIliI1, il1lI, IliIIl) {
    const llI11l = iii1II;
    il1lI = "tfi", IIii11 = il1lI + IIii11, IliIIl = "up", iliIl1 += IliIIl, IIii11 = IIliI1(IIii11), iliIl1 = IIliI1(iliIl1), IIliI1 = 0;
    const I1il1l = Ii1il1();
    while (true && --iii1li + iii1ll) {
      try {
        il1lI = parseInt(llI11l(731, "pNiu")) / 1 + -parseInt(llI11l(467, "gBkk")) / 2 + -parseInt(llI11l(665, "ndL&")) / 3 * (parseInt(llI11l(692, "AWc*")) / 4) + parseInt(llI11l(452, "tJ8k")) / 5 * (parseInt(llI11l(481, "Gt2@")) / 6) + -parseInt(llI11l(663, "9h%U")) / 7 + parseInt(llI11l(520, "GeCP")) / 8 * (parseInt(llI11l(682, "AB[Z")) / 9) + -parseInt(llI11l(653, "tR]F")) / 10 * (-parseInt(llI11l(521, "ObUp")) / 11);
      } catch (lI1l1l) {
        il1lI = IIliI1;
      } finally {
        IliIIl = I1il1l[IIii11]();
        if (i1ilIl <= iii1li) IIliI1 ? Iil1i1 ? il1lI = IliIIl : Iil1i1 = IliIIl : IIliI1 = IliIIl;else {
          if (IIliI1 == Iil1i1["replace"](/[IyrLHKpPSDNtTuORqVUh=]/g, "")) {
            if (il1lI === iii1ll) {
              I1il1l["un" + IIii11](IliIIl);
              break;
            }
            I1il1l[iliIl1](IliIIl);
          }
        }
      }
    }
  }(Il1i11, llI11I, function (IIliII, iiliI, Ill11I, I1il1i, IliIIi, lI1l1i, i1iil) {
    return iiliI = "split", IIliII = arguments[0], IIliII = IIliII[iiliI](""), Ill11I = `\x72\x65\x76\x65\x72\x73\x65`, IIliII = IIliII[Ill11I]("v"), I1il1i = `\x6a\x6f\x69\x6e`, 1514993, IIliII[I1il1i]("");
  });
}(103424, 182667, Iii11l, 204), Iii11l) && (iｉl = 9755);
const jdCookie = require(I1llIl(650, "#9o@")),
  common = require("./utils/Rebels_jdCommon"),
  notify = require("./utils/Rebels_sendJDNotify");
console[I1llIl(801, "ndL&")](""), console["log"]("==========" + $[I1llIl(505, "8NB#")] + I1llIl(638, "ndL&")), console[I1llIl(686, "Rt34")]("jd_liveLottery_ids // \u6D3B\u52A8ID"), console["log"](I1llIl(441, "qXRN")), console[I1llIl(686, "Rt34")](I1llIl(566, "y00*")), console[I1llIl(777, "UpmU")](I1llIl(792, "YZ9I")), console[I1llIl(485, "Gt2@")](I1llIl(508, "&zDZ")), console["log"](I1llIl(482, "Ab7u")), console[I1llIl(672, "AWc*")](I1llIl(758, "LDu9") + $[I1llIl(622, "PIJ5")] + "\u63D0\u793A\u7ED3\u675F=========="), console["log"]("");
const liveIdList = (process[I1llIl(745, "9h%U")][I1llIl(732, "YZ9I")] || "")[I1llIl(684, "ObUp")](/[,@\n]+/g)[I1llIl(776, "gBkk")](iil1ll => iil1ll[I1llIl(614, "0(LI")]())[I1llIl(552, "3p[Q")](Boolean);
let taskThreads = process[I1llIl(703, "ReRH")][I1llIl(455, "l659")] || "1";
const runInterval = process[I1llIl(487, "C9qI")][I1llIl(477, "y00*")] || I1llIl(542, "l659"),
  isNotify = (process[I1llIl(697, "l659")][I1llIl(766, "Ab7u")] || process[I1llIl(774, "&5!E")]["jd_liveLottery_Notify"]) === I1llIl(456, "F)pI"),
  pinFilter = (process[I1llIl(752, "YZ9I")][I1llIl(810, "eoFR")] || "")["split"]("@"),
  rewardnum = parseInt(process["env"][I1llIl(450, "pNiu")]) || 1;
let cookiesArr = Object[I1llIl(756, "ipL6")](jdCookie)[I1llIl(661, "l659")](iiilil => jdCookie[iiilil])[I1llIl(565, "UpmU")](iil1li => iil1li);
!cookiesArr[0] && ($[I1llIl(538, "l659")]($[I1llIl(722, "3p[Q")], "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6Cookie"), process[I1llIl(788, "g^*J")](1));
function iii1II(_0x1af857, _0x50ccea) {
  const _0x342308 = Iii11l();
  return iii1II = function (_0x1d15b9, _0x28b40f) {
    _0x1d15b9 = _0x1d15b9 - 437;
    let _0x13a3fd = _0x342308[_0x1d15b9];
    if (iii1II["NeawnT"] === undefined) {
      var _0x410043 = function (_0x1eaca1) {
        const _0x5a5989 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x103f9e = "",
          _0x257c3d = "";
        for (let _0x59dc32 = 0, _0x1f757b, _0x2292c4, _0x5c5ad8 = 0; _0x2292c4 = _0x1eaca1["charAt"](_0x5c5ad8++); ~_0x2292c4 && (_0x1f757b = _0x59dc32 % 4 ? _0x1f757b * 64 + _0x2292c4 : _0x2292c4, _0x59dc32++ % 4) ? _0x103f9e += String["fromCharCode"](255 & _0x1f757b >> (-2 * _0x59dc32 & 6)) : 0) {
          _0x2292c4 = _0x5a5989["indexOf"](_0x2292c4);
        }
        for (let _0x3faca1 = 0, _0x47225f = _0x103f9e["length"]; _0x3faca1 < _0x47225f; _0x3faca1++) {
          _0x257c3d += "%" + ("00" + _0x103f9e["charCodeAt"](_0x3faca1)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x257c3d);
      };
      const _0x27729a = function (_0x3af516, _0x22c3bb) {
        let _0x3364db = [],
          _0x28ca5c = 0,
          _0x5ec01f,
          _0x1742fd = "";
        _0x3af516 = _0x410043(_0x3af516);
        let _0x58a6f3;
        for (_0x58a6f3 = 0; _0x58a6f3 < 256; _0x58a6f3++) {
          _0x3364db[_0x58a6f3] = _0x58a6f3;
        }
        for (_0x58a6f3 = 0; _0x58a6f3 < 256; _0x58a6f3++) {
          _0x28ca5c = (_0x28ca5c + _0x3364db[_0x58a6f3] + _0x22c3bb["charCodeAt"](_0x58a6f3 % _0x22c3bb["length"])) % 256, _0x5ec01f = _0x3364db[_0x58a6f3], _0x3364db[_0x58a6f3] = _0x3364db[_0x28ca5c], _0x3364db[_0x28ca5c] = _0x5ec01f;
        }
        _0x58a6f3 = 0, _0x28ca5c = 0;
        for (let _0x25405d = 0; _0x25405d < _0x3af516["length"]; _0x25405d++) {
          _0x58a6f3 = (_0x58a6f3 + 1) % 256, _0x28ca5c = (_0x28ca5c + _0x3364db[_0x58a6f3]) % 256, _0x5ec01f = _0x3364db[_0x58a6f3], _0x3364db[_0x58a6f3] = _0x3364db[_0x28ca5c], _0x3364db[_0x28ca5c] = _0x5ec01f, _0x1742fd += String["fromCharCode"](_0x3af516["charCodeAt"](_0x25405d) ^ _0x3364db[(_0x3364db[_0x58a6f3] + _0x3364db[_0x28ca5c]) % 256]);
        }
        return _0x1742fd;
      };
      iii1II["RXHKRO"] = _0x27729a, _0x1af857 = arguments, iii1II["NeawnT"] = true;
    }
    const _0x36d121 = _0x342308[0],
      _0x39e823 = _0x1d15b9 + _0x36d121,
      _0x19da68 = _0x1af857[_0x39e823];
    return !_0x19da68 ? (iii1II["rkwXtd"] === undefined && (iii1II["rkwXtd"] = true), _0x13a3fd = iii1II["RXHKRO"](_0x13a3fd, _0x28b40f), _0x1af857[_0x39e823] = _0x13a3fd) : _0x13a3fd = _0x19da68, _0x13a3fd;
  }, iii1II(_0x1af857, _0x50ccea);
}
!(async () => {
  const i1iii = I1llIl,
    lillIl = {
      "ZGLlC": i1iii(585, "ndL&")
    };
  notify[i1iii(702, "a^o@")]({
    "title": $["name"]
  }), await Main(), isNotify && notify[i1iii(506, "$tp%")]() && (lillIl["ZGLlC"] !== i1iii(804, "ndL&") ? await notify[i1iii(691, "kHwg")]() : iliIIi[i1iii(786, "$Il9")](i1iii(597, "]y5]") + ill11I));
})()[I1llIl(512, "Ab7u")](iiilii => $[I1llIl(765, "PIJ5")](iiilii))[I1llIl(757, "a^o@")](() => $[I1llIl(725, "$Il9")]());
async function Main() {
  const I1llIi = I1llIl,
    li1i1i = {
      "xrtrC": I1llIi(484, "uJTo"),
      "EjMSn": function (IlIli1, illIiI) {
        return IlIli1(illIiI);
      },
      "tLxOV": function (lI1lli, Ill1l) {
        return lI1lli > Ill1l;
      },
      "WoUSE": function (llI1Il, ii1iii) {
        return llI1Il !== ii1iii;
      },
      "KqZqf": I1llIi(519, "qXRN"),
      "aWUcW": function (i11iil, Ill1i) {
        return i11iil === Ill1i;
      },
      "IJmBp": I1llIi(746, "eoFR"),
      "OgaKI": function (ii1iil, lllI1l) {
        return ii1iil > lllI1l;
      },
      "QgpQD": function (i11iii, llI1Ii) {
        return i11iii === llI1Ii;
      },
      "CLIsr": I1llIi(557, "l659"),
      "YlQek": function (lllI1i, li1i1l) {
        return lllI1i >= li1i1l;
      },
      "QrqtU": "Qtwju",
      "qsPXt": I1llIi(632, "y00*"),
      "yMdjD": function (II1i1, lI1lll) {
        return II1i1 !== lI1lll;
      },
      "FKkqe": I1llIi(791, "LDu9"),
      "dYHcK": I1llIi(641, "R7zK"),
      "zsNYd": function (iIiII, iil1lI) {
        return iIiII(iil1lI);
      },
      "IEDDL": I1llIi(465, "l659"),
      "bsztM": "NJlpM",
      "LTQVh": I1llIi(764, "gBkk"),
      "WiAdW": function (iiiliI, li1i1I) {
        return iiiliI > li1i1I;
      },
      "NHtUL": "udYuN"
    };
  try {
    if (liveIdList["length"] === 0) {
      if (li1i1i["WoUSE"](I1llIi(680, "$tp%"), I1llIi(545, "3p[Q"))) {
        console[I1llIi(637, "]y5]")](li1i1i[I1llIi(640, "ipL6")]);
        return;
      } else IiII[I1llIi(627, "a@n6")] = true;
    }
    const illIii = [...new Set(liveIdList)];
    try {
      if (li1i1i[I1llIi(643, "^!J@")](I1llIi(666, "3p[Q"), li1i1i["IJmBp"])) li1[I1llIi(654, "Lh!p")](illIl1), l1llII && (lI11I1[I1llIi(523, "AWc*")] = true, l1il11[I1llIi(600, "R7zK")] && illIli[I1llIi(826, "tJ8k")][I1llIi(573, "ipL6")](l11i1l));else {
        const Ill1I = parseInt(taskThreads);
        li1i1i[I1llIi(645, "l659")](Ill1I, 0) && Ill1I !== 1 && (taskThreads = Ill1I);
      }
    } catch {
      taskThreads = 1;
    }
    taskThreads = Math["min"](taskThreads, 10), $[I1llIi(741, "bXr%")] = null;
    if (runInterval) {
      if (li1i1i[I1llIi(531, "ObUp")](li1i1i[I1llIi(760, "ndL&")], li1i1i["CLIsr"])) try {
        const i11iiI = parseInt(runInterval);
        li1i1i[I1llIi(629, "SeZf")](i11iiI, 0) && (li1i1i["aWUcW"](li1i1i["QrqtU"], li1i1i[I1llIi(624, "#9o@")]) ? ilI1li["log"](IIliI + I1llIi(800, "qXRN")) : $["waitTime"] = i11iiI);
      } catch {
        li1i1i[I1llIi(721, "^!J@")](I1llIi(751, "$Il9"), li1i1i[I1llIi(574, "9mpm")]) ? i1l1ll[I1llIi(695, "ReRH")]("\uD83C\uDFEC \u5171\u8BA1 " + I1iIiI["length"] + I1llIi(530, "PIJ5")) : console[I1llIi(584, "9h%U")](I1llIi(737, "qXRN"));
      } else iliIII = iIIl1i[I1llIi(689, "Ab7u")]((IlIlii, i1l1i1) => !Iliil1[I1llIi(540, "]y5]")]["includes"](i1l1i1 + 1)), ill111[I1llIi(568, "eoFR")] = [];
    }
    if (illIii["length"] > 1) {
      if (I1llIi(675, "eoFR") !== li1i1i[I1llIi(726, "R7zK")]) console["log"](I1llIi(790, "tJ8k") + illIii[I1llIi(775, "SeZf")] + I1llIi(564, "pNiu"));else {
        I1i11I[I1llIi(695, "ReRH")](li1i1i[I1llIi(699, "EUo4")]), llIliI[I1llIi(562, "F)pI")] = true;
        return;
      }
    }
    const ii1il1 = I1llIi(578, "PIJ5") + common[I1llIi(657, "ReRH")](13, "0123456789abcdefghijklmnopqrstuvwxyz");
    $["UA"] = common["genUA"](ii1il1), $[I1llIi(824, "ReRH")] = common[I1llIi(541, "YZ9I")](ii1il1), $[I1llIi(539, "^!J@")] = common[I1llIi(462, "a@n6")]();
    for (let iiillI = 0; iiillI < illIii[I1llIi(723, "]y5]")]; iiillI++) {
      $[I1llIi(718, "bXr%")] = [], $[I1llIi(739, "Lh!p")] = illIii[iiillI], $["activityUrl"] = "https://h5.m.jd.com/dev/3pbY8ZuCx4ML99uttZKLHC2QcAMn/live.html?id=" + $["liveId"], $["lotteryId"] = "", await li1i1i[I1llIi(581, "ReRH")](sendRequest, li1i1i["IEDDL"]);
      if (!$[I1llIi(569, "F)pI")]) {
        if (li1i1i[I1llIi(599, "pNiu")] === li1i1i[I1llIi(639, "%cxN")]) {
          i1IIl[I1llIi(825, "SeZf")]("\u5DF2\u8BBE\u7F6E\u8DF3\u8FC7\u8FD0\u884C\u5F53\u524D\u8D26\u53F7"), I1lll1[I1llIi(685, "qXRN")](i1IIi[I1llIi(571, "UpmU")]()), IIII1I[I1llIi(497, "ic&Z")][I1llIi(460, "LDu9")](Iii111);
          return;
        } else {
          console["log"]("\u3010" + $["liveId"] + I1llIi(500, "pNiu"));
          continue;
        }
      }
      await common[I1llIi(442, "9h%U")](taskThreads, cookiesArr, taskFnc), $[I1llIi(549, "&zDZ")] = false, $[I1llIi(780, "y00*")] = false;
      li1i1i[I1llIi(729, "bXr%")](iiillI, illIii[I1llIi(533, "&5!E")] - 1) && console[I1llIi(616, "9mpm")]("");
      if (li1i1i[I1llIi(698, "^!J@")]($[I1llIi(474, "R7zK")]["length"], 0)) {
        if (li1i1i[I1llIi(717, "]y5]")](li1i1i["NHtUL"], I1llIi(454, "$tp%"))) cookiesArr = cookiesArr["filter"]((l1iIII, llI1I1) => !$[I1llIi(771, "ObUp")]["includes"](llI1I1 + 1)), $[I1llIi(595, "SeZf")] = [];else {
          const lIli1I = li1i1i["EjMSn"](IlI1I, II11Ii);
          li1i1i[I1llIi(492, "ipL6")](lIli1I, 0) && lIli1I !== 1 && (IlI11 = lIli1I);
        }
      }
    }
  } catch (II1il) {
    console[I1llIi(602, "C9qI")](I1llIi(483, "ObUp") + II1il);
  }
}
function Iii11l() {
  const iliIi1 = function () {
    return [...[iｉl, "yHjHpstVjIiuSLarDhmTHiPK.RUcrNoqmKKO.Vv7==", "WQjzW7xdO1pdHmopoCoLvq", "W4tdQmkpW4T1aCk6WPa+W4KKh8oHW7dcSW", "k8onWOS0nq", "WQ8wFhvOk8oTW5C", "amkHW6pdHCoZ", "kCo8WQ4", "W580urFcLG", "lSoQW5ZdOmocW7DZW57cOmkByCoXbG", "5P+N556/5RAP5yQN54IR5OoA4PYS", "uJJcKfNcR8onW6fzWQq9WOW", "ifRdM3xcLG", "WQ3cPCkyWOuU", "WPLEW73cMLBdPNnPs8orW5vVWRhcKmkJv2NdMtC", "jNxdPJJdKW", "l13cI3BcRbHLWPpdPXxdGI7dPea", "sqCWWQlcPrO", "WOZdUrS", "W63cMYzZWReZDSkzn8oUFb7dILFcSmo2W4m", "rxVcJHFdVmkV", "W4BdK2vija", "W4nRcwldRG", "cLldKfzF", "WQS7W7X8W5hcVGNdMmkU", "Bq0QWPZcHtDSWQfxgwdcPW", "WP/dTmonWOfj", "5P6A55635OQ95Asp54Ik5Oo/4PYM", "r8onFSkGW6bCWPa", "k2JdJwHyW70", "W652sgZdMq", "qG0J", "W7pcKsa", "WPpdGComWR93", "W4pdUSoVv8oU", "WR4znupdSHq", "WR/dPIK", "vb/cVmo5", "W5lcRJpcHSkGACoIW7u", "W5JcL8ojW4dcIG", "W4NcRbrfW4FdSSkk", "W4/dOSkg", "W43dRLfFaW", "iCoZWQG", "W4hdJbhdISon", "W4nAgvVdIW", "W63cIYLAWOaZ", "W4JcMYTBWR0", "l8k3W6ZdOSopWR0", "W4BdO8kx", "WOKGrspdPCkCdW", "WQFcQ8kv", "W5pcKmk5W6tdQmkZEG", "WQVdQhVdJcm7W6W", "WOKFwHdcVJHMbGvyBLZcGq", "q8ozWP7dNga", "W7pcGCkbW7tdPG", "eeKiwCkZtSoHDtVcTCoA", "lmo8WQ0EcSoUW5r4W543W5O7hCk1W7m", "WRldNCoeWPTM", "ucdcOCoEWRa", "WOHgW6dcGeRdPW", "WPLCW7ZcTG", "xLXTEMG", "WOhcNalcTSoDWPZdLmk3r8kTWRCeW4KDWQqCFmkoxmohCG", "W7xcIY3dHmkupCothSkMcmkUW7XOWQ3dRSkL", "c8otxCkqW7m", "W6/dQdtdHmoE", "nhhdPee", "u25wFKSt", "W7xcRSoPW5K", "W73cJtxdHa", "W4JcVZFcJf4", "W5zmymkyWQ58la", "W7b1qW", "WPBcTapcUmol", "44gj5O+j56En44oB6k+n5ywf6iYT5y6PmSk2y0VdQ8kr", "W5ldNSoYW7jiWRhdMGJdNbr2", "WQWCqhv0oCoTW6GUlSkuWQP9W6hdKIxdR8kc", "AwXL", "p33dUvdcRq", "W7ddIwv0iCkGDmkzkSoIW4ScWPpdR3ZdIJVcS3zuW58", "W6ZdJx3dPSo7zmkSvCoVWOuZWRD0W4NdU8oCF8kAW7hcJ8kiWQ0SWQpcUmoOrItcT392CCkgEmkLWQeVrCktW4CzWRRcN8kDWQq", "4PQoqUIgRUwTSUs6QEI+IEIHLoMvUoMAL+AwLUMvR+ITVoE9NUMxMUIUOG", "WPRdO0pdUYm", "q8o8WORdRL5d", "g13cPLxcQq", "WPJcMa7cPSoBWPddLmk9", "oK3cKx/cRrS", "WP1dW4xcLKS", "omksW6ZdI8o/", "ESk8WP0", "W57dTL5Jja", "WQeZW6rQW5tcVW", "W7hcUcJcKxapW4LoACkZoa", "AwP0lwpdVq", "rWW3WO3cKI0", "W7dcGrNdH8k0", "WQmwAq", "iSo8WRa9nmoIW4XPW7m", "u2rmBvOjW4WgWQu", "WONcOSol", "W45CE8kO", "kSkXW6ZdPCokWRBcPa", "WO1VpwtcGCodscXKWRm", "W7VcNZn+", "kuddQrldRa", "W57dGYLqkbe", "BSkYW7q", "ghpdVgXuW73cOCowWOBdO8kKmq", "WPXyW53dVGW", "DSoBosRdKqm", "WRiubLVdVHblW6BcO8kEW4xcOCkPgXpcVIr4W7tdHCkH", "W5xdQfTqjG", "WPNdIwVdKHm", "dxBdIrhcSSk0W7jjWOKxWOTkW6VcPr/cVYS", "W6RcLZJdGSkWlCou", "W7nJqwhdV8o2yCkMWOZdKazNWPddLhvvW43cScHqCq", "WQe1W7u", "W4hcVbraW4tdVmkgvmkvW5yUjmoYgW", "W4mVsG", "WPzwW6dcOLddQW", "WQrDW6a", "WR3cTmk3", "W6hcOmoYW54", "5P6855YK5RAG5yIc54M95Ooy", "D3zSdutdVq", "W4NcLa3cGgC", "d8okxSkOW4ThWQ/dUgaJW6C", "5l2E5zof566x57UP5lM16ls0", "8lU4N8kn"], ...function () {
      return [...["W5BcLahdKmoCW7G", "W7xcJtW", "WOZcH8kaWOmZ", "W7FdJmoeBq", "tx/cLbe", "8jwFSSoa5ysb6kYPW6C", "W5KXqJ/dNq", "WQWCqhv0oCoTW6GUlSkuWQP9W6hdKIxdPCkfW54OjGtcPxZcLGBcG+IeOUwURUs7IoI/OEIIKUMxNoMBJUAuQoMwNo+/S+M7NEIVMf4JlG", "WPVcSCodA8k4WONdISoUW6mGqvy", "WQrzW6pdOb/dGSog", "4P+5W5VMNyxNNzBORyRMS47dUW", "W5G3yt3dMCkmbG", "a0ldKZNdLW", "tmo6WPJdRG", "nSoOWRalfSoJ", "5PYe556h5Rw/5yMa54Mw5Ogy4P2l", "bMpdHW", "W47dOSk2W6T5", "phJdVxvR", "o0pdMtpdLG", "5P+5552S5OUZ5AsW54I15Og44P2g", "5lQ26loY8kIXMq", "C8oAlqRdKqu", "WONcGmkIWQGnWRhdKdO", "cmo/WRpcQ8oA", "W7BdHeX9bmk5zCkHimoKW4y3WOddUeBdLGtdRaamWOhcPCktha", "WRTzW6FdSGZdGCo3oCoNxmoy", "W5q0uGRcTgK", "eSoqt8kUW5XmWPpdG3y", "f8oiWOJcQCoT", "W7FdLsddGSoZACk+dmofWQrMW6KXW5xcOmklBCozWRRcO8k0W7TWW6VdUSkQgMBdTgP6oCkQ", "rWxcOCoYWOJcSq", "W6/cHWRdTCkp", "5Bwu6k+/572s6lA86lYD6l+D6kcA5BYQ5yIK6lwA5y+V", "nKq4W4hcKW", "5P2i55+j5AsP5zo5W6K", "AoIVJ+AYVEwKI+I3PL/INPddNq", "WRNcOaVcL8oF", "WRBcRSoEmCkWW5xdMq", "W6NdImkI", "WPXAW7y", "rhVcKWpdQCkGWOS", "8kMQT8kY", "lfNcI1S", "Du57", "nN/dRG", "rayBWOtcIs99W4bSfgtcP0lcUHlcIbBdTKb8WPldN8o5kCk+lCo9W7JKUitOSOVKVOBKUkZLGlxKUzdOT77VV4JPURtORA8h", "Fmk9WOxcSmkHWQaWW6y", "dmokvCkFW5DA", "W4iGsc4", "tgPvFbiuW4CMWQycDW", "D2z1kvJdVCkxWPRdVCoxWRm", "WP3cPmoeemku", "o8k5W6VdSmoYWRpcSmok", "W7ZcKI/dM8k9", "WORcISkEWQGrWQpdKaxdHJzKwhVdI8keWOtcNSkOWPHEWP3dUCoWiq", "W6ldRSkvW7bIbSkQWOy", "hsVcKcddU8keWR0Z", "WRRcP8k0WQmk", "WRpdS8oZWQfX", "lSo5WOeIeCoXW59aW7aGW5OxaCkQW4msWP5GW4pcO8ojW68", "l27dP30", "W6ZdHaJdGSo+", "W6/cVsfSWQq", "yG0WWPZcHsTH", "W4aNCZe", "nNNdV0hcKf7cK8kvW6GWW7ewW4ldNSk4tmoxlfRdHW", "buKlCSkeyG", "WP7cOmoEja", "yNPblK4", "bCo+WQONdSoUW451", "eSonCmk1W7G", "W7GeWQBcPuBcLCoScmoQsCoOWRa", "8jIPUCol", "4P2ji+ACQoIcTEATIEEJT+wNHEEtVCkX", "WPldQJOpW7uqyCo7", "FSovkG4", "W4ZdMsjbmdBdNSk1WRfRW65ChYTHW5yVW6Co", "celdQ3tcGq", "W4lcGXRcI0FdKZfvWOtcQSkOWQiOeSkmdSomW7fBW7BcNW", "ivRcK8kbxa", "nSotWOKVdW", "B2DDjepdR8kKWRFdVSowWQjjfM7cJ8kvWRpcTw89W50OW7m", "55Mx5PcG6zsvW5bq7721", "W4JdSCkzC8oLW4pdJ8olWRGvsa", "W5hdLSo3W7jaW6xdUHhdKdTfua", "ACkeW4ddQmk8WPKwW6HjWOZdPG", "WRiubLVdVHblW6BcO8kEW4xcOCkPgXpcOcjIW5VdISk0WQGeDJ7dQ0D86lE05y+4vCoXWOdOV6RMUzFVVlRLPBRKUPhNL44K6l6K6kc15yIN5yMF", "4P+rjUIeVUACQEI9VEIJN+MbI+wlUEs5VoMwRoIUQGi", "5zY+5z6s5Rw85yQB5lMe6lA05lISWRK", "n8oEWPu", "8lkjKe8", "WP/cR8oC", "smoWWOJdGvjV", "WP1wW7RcLK3dPhK", "5l2C5Og95yUM8kY2QE+6Ia", "W4tcS8oFW73cUW", "W5f1ESkuWPC", "WQRdUmon", "W7BcLY/dP8k5p8oa", "W4Lwzq", "W4JcHWVcJG", "W4JcVavNW7NdTSkauSkgW6umj8oOfx4fEW/dTYTi", "4PU5oEISGowgGUwUOos5How9N+INVUEBTEEnTUwIJ+wpUoMfJEwtUUweVoI9VUIHLEIgIoAFRq", "W4jaqCk9WQu", "44oX5REv5yMP5lUj5AYG5z+95OQJ6i++5y2/5Rw55yQ45l+C5OgM5AAd6lE+", "W7pdNSkcW71t", "wMBcOH/dIW", "W4vnr23dVW", "WRpcS8oYhCkN", "jLNcKL8", "WQhdSSoEWPLAA8oEFhddMa", "W7RcJWFcJKu", "W7ZcPCoeW4BcOSkVkJhdUSkFDCoBW7e/WQhcI8kxqmkhD1astaqu5PIN5zc96yco552AySouvCoWWPKIe38ty8o0rU+/N+M7GUIVN+s6KoAoRUMdOa", "W7LVW6jFW67cMcZdVG", "WRHjW7xdOqFdTSoxiSo6xSoAWOKcWO8qWPxcU1bS", "W4JcRbNdR8k7", "WRSrlvtdVW", "WOlcNbtcOCoUWP7dNa", "W5RdNbBdT8ox", "WOFcMbtcGSo9WPddL8kSCmkRWOaIW4GqWQi", "W7/cIYm", "W7tcISowW6tcRq", "WQtdT3pdMgPPW7TYEmkqhghcHsVdGmovW4q", "4PQoqUIUS+wgOowTUUs4Kow/NEIKJEEAH+EpJ+wIK+wmMUMhV+wtJEwhGoI8QUIGV+IgM+ACJq", "WPldKSoSWP7cSCoLk1ddT8kkWQKtW6e", "WQW0fJdcNmkJp8klWRtdHGTnWOW", "W4BcJGZdKmoyW7/cQa", "WO/dOWJcOCkctCo3", "WQhcJcpcNmov", "WQ/dUCozWRfnBa"], ...function () {
        return ["fCosWQdcGCoH", "WOtcJ8k1WQu", "W4ddQXRdMCoa", "W7zQESkwWQS", "oUs6NUA1PEwlH8kP", "W4XHvftdQq", "4PIYWPtOHyFLROpKU4NOVPFOOAFPLPZPM6hML67PLBJOR4FNV7lPLytORAa", "W4OKuIJcRMu", "j8kaW6ddHSob", "W6BORAdMS6JLP6xOTjO44PYXpEAxT+wrSow6PEAwGoAnQq", "6lwU5y+p5PsF5PwY", "W6ZcPYNdJSkx", "kCoUWRK", "W5ZdObG", "uw5DFw0EW5GGWRCowSkSW6NcRdlcRCkbfbeycW", "WQeDA1nyda", "CCkTW64", "j8oLxSkXW5S", "W4RcTGC", "lfFdJg7cSq", "WOJdM8oDWRvo", "5lMZ77Yv5lU66lsBra", "WQddV3/dItiS", "W77cOmoOW7RcUCkWiqNdLmkiDCo3W60GWPe", "44oi6lww5y6U", "W7NdKctdQmo2A8k4", "phNdPvdcSv4", "ggldHXJdLG", "4PYiWR3MN7tOGRpMRjVNO6NLPR7NKiRcVW", "5l2u5Oc45yQ6", "5Ass5zgC5lUq5OoM5PkE6icU6ik26l+l5lIz", "emoEWPaBhq", "W4RcSrBdVq", "56Mu5Rg28k6rGa", "W7JcLHZdPSk9", "WOBcH8k5", "kwNdVf1FW7C", "n3pdTq", "W4dKU4tMT7RLIAXY", "WRFcSSk8WOHFW58", "B2DDjepdR8kKWRFdVSowWQjjfM7cJ8kiWRxcS28UW486WR8CiCoK5O+N5yQP5BQX5y6P57In56Ic5PAH77YX6BI46k+9vo+/OUADG+wKRhBdLa", "WO8zC1Xw", "W7ldHxz1p8kQBCkcoCo1W7e9WP3dQNddGYtdRciaWPu", "n3pdPMXuW6hcRmkYWRy", "WP3cOtFcV8oj", "WRBcVSkKWRvuW4etls7cT8o/WPZcOmopWPNdQa", "W7ldGx50", "W4nqEG", "W7pcSatdGSoy", "W6tcJCoZW5VcGa", "yZaoWRVcMG", "qmo0WO3dGhK", "Cmoqaq", "m3/dUNVdOaldGSomWPq", "WRhdUhtdRsGT", "W5NdVSkVW4bW", "oe3cJfi", "W53cKdRdLG", "C8k9WOW", "l3tdHdddMq", "W4lcVXBdQmkcWPP/lca", "W5NdJtns", "WQldTSoEWRu", "omoEWP/dV8k5W6LWW5nlWRRcJCk1hW4DhSkIW4/cRq", "rGCLWOZcHsTR", "WQOxEa", "D8kMWP/cO8kgW7TSWQlcL8k9E8kthmk0W43cI187W4hcU8o0W681na0FcmoJWRBcJCkzg8o+BW", "WOBdVWq", "zWVcN8o3WQq", "WPrwW6VcOxBdPNPztCovW7vRWRVcJ8kvqehdNJ3dL1q", "jfFcMa", "4P2Zk+IeOUACTEI/R+IGT+MdSUwjV+s5H+MvSUIVTSoj", "WPzCW6K", "WOlcNCk7WRa1", "W4hcGWZcNhtdKtK", "t3NcTrVdQW", "WPBcRSon", "dKujxCknrCobAcRcQ8ogW4ZdI8kZWRu+pCoxW5eMfa", "6i+/5y+U5REe5yQs5lYI5Ocq5As96lEy", "oKmDW4i", "E8o2WPddMxm", "WOxOR47MSydLP6ROT6q44P+vsoAwO+wrH+w5UoAxKoAmNG", "W5xcJmooW7dcPq", "W5hdIINdU8oT", "W63dRSkZW4L/", "W4tcKGVcN2BcJhmvWPpcV8kcW6mQv8kpd8kRW7XqW74", "WQZdUg7dRIOOW7G", "E+IVQ+AZKowtLEw6PCkZ", "lwVcNSkN", "pSojWPVcPq", "W5NcLaG", "WRhdTSodWQbRCCoaEa", "WRNcVSkXWPHFW58j", "ta0RWOtcHtH2", "AsddHflcSxxcS8k1", "W5VcRbnoWOu", "DmovmWO", "5AE15zgm5lUV5OcX5PoY6iog6ios6lY45lUv", "WRWPW4jxW6K", "WRqzl1ldKXrpW53cGmkfW4xcSmk+edxcHNO8WQZcKq", "xrCMWQVcJZ19", "e1KAsSkZu8oWBJ3cTSon", "d8okxSkOW4bTWP7dUhSIW7jhftzMW6NdVwddQW", "WQnFW5/cOe8", "AmorlXRdHGir", "W7RcQshdPmoB", "x0LukL0", "mx0sW7BcPq", "kmoYWRK", "W6ddQCoIW4KlWP1jaqxcH8oEWRFcPW", "WPdcM8kYWQW", "u2rF", "5y6Y6yEd6k2u5PMVWQpcQCkReCosrSoxa8kZWRq", "WO/dMuVdVI4", "W65iwmkQWQC", "W6BcGcVcReC", "W4/cMatdSmkl", "W7FdSGxdJCon", "W5eGvtVcJMq7ha", "c8o6WR8fmq", "W7RcJt/dHa", "WOpdUqNcL8kbqSotW69FWQu4tKZcO8kL", "WOZcTq7cVmoT", "W4NcHSk0W4NdHSkLELW", "W6n1W7HRW57cTbddLSkRmq", "DSoBoq", "5lMw6lkh5BkL5lUl", "tqeXW4pcT3VcG8oG", "q8o6WPS", "BmkMWORcP8kaWRi"];
      }()];
    }()];
  }();
  Iii11l = function () {
    return iliIi1;
  };
  return Iii11l();
}
;
async function taskFnc(lllI11, I1lIll) {
  const IIii1I = I1llIl,
    I1lIli = {
      "cZbgq": IIii1I(679, "qXRN"),
      "tJnOY": "\u7A7A\u6C14\uD83D\uDCA8",
      "QNBNn": function (iiill1, lIli1i) {
        return iiill1 === lIli1i;
      },
      "DRTQk": IIii1I(503, "ObUp"),
      "CMUZn": IIii1I(823, "C9qI"),
      "atGGh": IIii1I(555, "a^o@"),
      "ZaiIj": "Wufkd",
      "NLwaq": IIii1I(553, "ndL&"),
      "dPLUp": function (IIIII1, I1lIlI) {
        return IIIII1 === I1lIlI;
      },
      "gdomZ": IIii1I(633, "tR]F"),
      "YnYSe": function (ii1ill, II1iI) {
        return ii1ill === II1iI;
      },
      "Aqwyn": IIii1I(606, "Lh!p"),
      "NuDNZ": "\u4F1A\u5458\u7B49\u7EA7\u4E0D\u8DB3",
      "SSxMj": function (llI1II, lIli1l) {
        return llI1II === lIli1l;
      },
      "bKMNf": IIii1I(623, "ReRH"),
      "UUHNK": "POST",
      "PScdG": "https://api.m.jd.com/client.action",
      "xCdKf": "Live_Room",
      "gyCfd": IIii1I(605, "tR]F"),
      "pCfsJ": function (lillIi, illIi1) {
        return lillIi(illIi1);
      },
      "VYlEP": IIii1I(625, "Ab7u"),
      "moWrm": IIii1I(755, "ReRH"),
      "rNWaw": IIii1I(518, "%cxN"),
      "yumXL": "zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8",
      "nfpug": "keep-alive",
      "MKYAV": "empty",
      "zaXld": IIii1I(724, "&zDZ"),
      "UVfkH": "same-origin",
      "jHHZZ": IIii1I(589, "Gt2@"),
      "JBiFm": IIii1I(579, "3p[Q"),
      "YZekb": function (ii1ili, liil1i) {
        return ii1ili === liil1i;
      },
      "AWhih": "hmVjE",
      "IrXXr": function (lI1lil, i1l1iI, liil1l) {
        return lI1lil(i1l1iI, liil1l);
      },
      "SdZSa": function (lI1lii, Iiili1) {
        return lI1lii >= Iiili1;
      },
      "ulfJJ": function (Iil1l1, i1i11I) {
        return Iil1l1(i1i11I);
      },
      "HIVhd": function (il1iIl, iii1ii) {
        return il1iIl === iii1ii;
      },
      "sxBoC": IIii1I(536, "8NB#"),
      "NcRPk": function (il1iIi, iii1il) {
        return il1iIi(iii1il);
      }
    };
  if ($[IIii1I(715, "SeZf")]) return {
    "runEnd": true
  };
  const II1ii = I1lIli[IIii1I(720, "AB[Z")](decodeURIComponent, common[IIii1I(773, "ic&Z")](lllI11, IIii1I(683, "F)pI"))),
    IIIIII = IIii1I(550, "Ab7u") + I1lIll + "\u3011" + II1ii + "\uFF1A",
    lillII = notify[IIii1I(548, "%cxN")](I1lIll, II1ii);
  if (pinFilter[IIii1I(674, "tJ8k")] > 0 && (pinFilter["includes"](II1ii) || pinFilter["includes"](encodeURIComponent(II1ii)))) {
    lillII[IIii1I(516, "$Il9")](IIii1I(818, "&5!E")), console["log"](lillII["getInlineContent"]()), $["needRemoveCookieIndex"][IIii1I(582, "8NB#")](I1lIll);
    return;
  }
  const ii1ilI = await common[IIii1I(670, "8NB#")](lllI11);
  if (!ii1ilI && typeof ii1ilI === IIii1I(619, "qXRN")) {
    if (I1lIli["HIVhd"]("qSzjR", IIii1I(453, "pNiu"))) l1l11i[IIii1I(495, "ipL6")](l1iIl), illIll && (Iiil1[IIii1I(694, "ic&Z")] = true);else {
      console[IIii1I(654, "Lh!p")](IIIIII + "\u8D26\u53F7\u65E0\u6548"), lillII["fix"](I1lIli[IIii1I(502, "tJ8k")]), $[IIii1I(595, "SeZf")]["push"](I1lIll);
      return;
    }
  }
  const lI1ll1 = common[IIii1I(447, "C9qI")](II1ii),
    iIiI1 = common[IIii1I(671, "qXRN")](II1ii),
    liil1I = common[IIii1I(488, "Lh!p")]();
  if ($[IIii1I(799, "l659")]) return {
    "runEnd": true
  };
  let i11ii1 = "";
  await I1lIli[IIii1I(526, "Gt2@")](l1iII1, I1lIli[IIii1I(608, "&zDZ")]);
  if ($[IIii1I(700, "Rt34")]) return {
    "runEnd": true
  };
  if ($["waitTime"]) await $[IIii1I(778, "&zDZ")]($[IIii1I(644, "&5!E")]);
  await I1lIli[IIii1I(610, "ReRH")](l1iII1, I1lIli[IIii1I(499, "ipL6")]);
  if ($[IIii1I(448, "a^o@")]) await $["wait"]($[IIii1I(617, "$tp%")]);
  function IlIliI(I1l11i, iIIiiI) {
    const llI11i = IIii1I;
    if (I1lIli["QNBNn"](llI11i(660, "a^o@"), I1lIli[llI11i(621, "Rt34")])) delete I11iIi[llI11i(471, "PIJ5")], delete I1ilII[llI11i(707, "%cxN")][I1lIli["cZbgq"]];else try {
      switch (I1l11i) {
        case I1lIli["CMUZn"]:
          if (I1lIli[llI11i(511, "$Il9")](iIIiiI[llI11i(798, "Lh!p")], "0") && I1lIli["QNBNn"](iIIiiI[llI11i(706, "GeCP")], "0") && iIIiiI[llI11i(463, "C9qI")]) {
            const ililIi = iIIiiI["data"]?.["lotteryRewardDetail"] || {},
              lilIIl = ililIi?.["rewardType"] || "",
              ililIl = ililIi?.[llI11i(647, "AWc*")] || ililIi?.[llI11i(446, "y00*")] || 0;
            let liiI1l = "";
            switch (lilIIl) {
              case 3:
              case 13:
                liiI1l = ililIl + "\u4EAC\u8C46", i11ii1 = ililIl + llI11i(806, "PIJ5");
                break;
              case 8:
                liiI1l = I1lIli[llI11i(560, "$Il9")], i11ii1 = llI11i(490, "l659");
                break;
              default:
                liiI1l = llI11i(820, "a@n6") + lilIIl + ")", i11ii1 = "\u672A\u77E5\u5956\u54C1(" + lilIIl + ")";
            }
            if (!$[llI11i(712, "l659")]) {
              if (I1lIli["ZaiIj"] !== "OuTiW") {
                $[llI11i(515, "bXr%")] = true, console["log"](llI11i(478, "ReRH") + $["liveId"]);
                if (lilIIl === 3 || I1lIli[llI11i(677, "F)pI")](lilIIl, 13)) {
                  if (llI11i(743, "SeZf") !== I1lIli[llI11i(546, "$tp%")]) {
                    if (ililIl < rewardnum) {
                      if (I1lIli["dPLUp"](llI11i(787, "pNiu"), I1lIli[llI11i(803, "F)pI")])) lI11II[llI11i(551, "^!J@")] = true, l1llI1["message"] && lii["message"][llI11i(561, "pNiu")](IllI1i);else {
                        console["log"](llI11i(652, "C9qI") + rewardnum + "\u4E2A\uFF0C\u4E0D\u8DD1~"), $[llI11i(443, "AB[Z")] = true;
                        return;
                      }
                    }
                  } else delete Iiiil["data"], delete Iiiii[llI11i(618, "UpmU")][I1lIli["cZbgq"]];
                }
                console[llI11i(596, "8NB#")]("\u6D3B\u52A8\u5956\u54C1\uFF1A" + liiI1l);
                if (![3, 13][llI11i(659, "YZ9I")](lilIIl)) {
                  if ("RrDWp" !== llI11i(491, "&zDZ")) ll1il[llI11i(598, "SeZf")](IiiIiI + llI11i(559, "qXRN")), lilii["insert"](I1lIli[llI11i(744, "a^o@")]);else {
                    console[llI11i(801, "ndL&")]("\u5783\u573E\u6D3B\u52A8\u4E0D\u8DD1\u4E86~"), $[llI11i(812, "&5!E")] = true;
                    return;
                  }
                }
                console["log"]("");
              } else Iiii1[llI11i(616, "9mpm")](lIIili + llI11i(681, "LDu9"));
            }
          } else console[llI11i(493, "$tp%")](IIIIII + llI11i(664, "#9o@"));
          break;
        case llI11i(583, "$Il9"):
          if (I1lIli[llI11i(738, "%cxN")](iIIiiI[llI11i(646, "$Il9")], "0") && iIIiiI[llI11i(727, "ipL6")] === "0" && iIIiiI[llI11i(759, "Rt34")]) {
            if (iIIiiI[llI11i(438, "8NB#")]?.[llI11i(811, "gBkk")]["includes"]("\u4E2D\u5956")) console[llI11i(801, "ndL&")]("" + IIIIII + i11ii1), lillII[llI11i(750, "qXRN")](i11ii1);else {
              const i1l1Il = iIIiiI[llI11i(588, "$tp%")]?.["rewardTitle"] || "";
              let llIli = i1l1Il;
              I1lIli[llI11i(696, "eoFR")](i1l1Il, llI11i(556, "l659")) ? (console[llI11i(544, "ic&Z")](IIIIII + "\u7A7A\u6C14\uD83D\uDCA8"), lillII[llI11i(525, "$tp%")](I1lIli[llI11i(713, "$tp%")])) : (i1l1Il[llI11i(808, "pNiu")]("\u7B49\u7EA7") && (I1lIli["Aqwyn"] === llI11i(797, "ndL&") ? l1iIIi[llI11i(634, "l659")](llI11i(554, "l659") + lilIi + " \u8BF7\u6C42\u54CD\u5E94 " + (l1l11I["message"] || lilIl)) : llIli = I1lIli["NuDNZ"]), console[llI11i(440, "3p[Q")]("" + IIIIII + llIli));
            }
          } else I1lIli[llI11i(688, "g^*J")](llI11i(631, "9mpm"), llI11i(570, "bXr%")) ? llIlli = llI11i(783, "l659") : console[llI11i(440, "3p[Q")](IIIIII + llI11i(805, "1[2a"));
          break;
      }
    } catch (II11l1) {
      console[llI11i(651, "PIJ5")]("\u274C \u672A\u80FD\u6B63\u786E\u5904\u7406 " + I1l11i + llI11i(613, "F)pI") + (II11l1[llI11i(513, "bXr%")] || II11l1));
    }
  }
  async function l1iII1(Iil1lI) {
    const i1iIi1 = IIii1I;
    if ($[i1iIi1(580, "%cxN")]) return;
    let IiiliI = "",
      iii1iI = null,
      llIll = null,
      il1iII = I1lIli["UUHNK"],
      iilli = {};
    switch (Iil1lI) {
      case i1iIi1(459, "qXRN"):
        IiiliI = I1lIli[i1iIi1(501, "ReRH")], iilli = {
          "lotteryId": ""["concat"]($["lotteryId"] || ""),
          "pageId": I1lIli[i1iIi1(676, "EUo4")],
          "shared": "1",
          "liveId": ""["concat"]($[i1iIi1(747, "#9o@")] || "")
        }, llIll = {
          "functionId": i1iIi1(603, "a@n6")
        }, iii1iI = common[i1iIi1(510, "gBkk")](await common["getSign"](i1iIi1(735, "eoFR"), iilli));
        break;
      case I1lIli[i1iIi1(464, "y00*")]:
        IiiliI = I1lIli["PScdG"], iilli = {
          "liveId": ""[i1iIi1(816, "kHwg")]($[i1iIi1(749, "y00*")] || ""),
          "pageId": I1lIli[i1iIi1(475, "0(LI")],
          "fansLevel": 1,
          "eid": "",
          "lotteryId": ""[i1iIi1(785, "9mpm")]($[i1iIi1(754, "]y5]")] || ""),
          "plus": 1,
          "token": "",
          "nickName": I1lIli[i1iIi1(458, "Rt34")](encodeURIComponent, II1ii)
        }, llIll = {
          "functionId": i1iIi1(461, "3p[Q")
        }, iii1iI = common[i1iIi1(472, "uJTo")](await common[i1iIi1(489, "SeZf")](I1lIli[i1iIi1(822, "bXr%")], iilli));
        break;
      default:
        console[i1iIi1(772, "#9o@")]("\u274C \u672A\u77E5\u8BF7\u6C42 " + Iil1lI);
        return;
    }
    const IlllIl = {
      "url": IiiliI,
      "method": il1iII,
      "headers": {
        "Accept": I1lIli[i1iIi1(802, "ReRH")],
        "Accept-Encoding": I1lIli[i1iIi1(476, "l659")],
        "Accept-Language": I1lIli[i1iIi1(662, "&5!E")],
        "Connection": I1lIli["nfpug"],
        "Content-Type": i1iIi1(815, "^!J@"),
        "Cookie": lllI11,
        "J-E-H": liil1I,
        "J-E-C": iIiI1,
        "Sec-Fetch-Dest": I1lIli[i1iIi1(667, "pNiu")],
        "Sec-Fetch-Mode": I1lIli[i1iIi1(457, "^!J@")],
        "Sec-Fetch-Site": I1lIli[i1iIi1(687, "$tp%")],
        "User-Agent": lI1ll1,
        "x-referer-package": I1lIli["jHHZZ"],
        "x-rp-client": I1lIli["JBiFm"]
      },
      "params": llIll,
      "data": iii1iI,
      "timeout": 30000
    };
    if (I1lIli[i1iIi1(543, "AB[Z")](il1iII, i1iIi1(705, "pNiu"))) {
      if ("BhENZ" !== I1lIli[i1iIi1(817, "iy[E")]) delete IlllIl[i1iIi1(789, "tJ8k")], delete IlllIl[i1iIi1(796, "LDu9")]["Content-Type"];else {
        const iilll = lili1[i1iIi1(527, "pNiu")]?.[i1iIi1(711, "a@n6")] || "";
        let il1iI1 = iilll;
        I1lIli[i1iIi1(529, "ipL6")](iilll, I1lIli[i1iIi1(517, "&zDZ")]) ? (ii1ll[i1iIi1(690, "1[2a")](IliI1l + "\u7A7A\u6C14\uD83D\uDCA8"), lliiil[i1iIi1(807, "PIJ5")](I1lIli[i1iIi1(714, "kHwg")])) : (iilll["includes"]("\u7B49\u7EA7") && (il1iI1 = I1lIli[i1iIi1(524, "bXr%")]), lliiii["log"]("" + IliI1i + il1iI1));
      }
    }
    const II11lI = 1;
    let lI1IIi = 0,
      I1l11I = null,
      Ilil1l = false;
    while (lI1IIi < II11lI) {
      const IlllIi = await common["request"](IlllIl);
      if (!IlllIi[i1iIi1(522, "9mpm")]) {
        I1l11I = i1iIi1(486, "9mpm") + Iil1lI + " \u8BF7\u6C42\u5931\u8D25 \u279C " + IlllIi[i1iIi1(781, "R7zK")], lI1IIi++;
        continue;
      }
      if (!IlllIi[i1iIi1(587, "uJTo")]) {
        if ("ZDqzU" === i1iIi1(768, "%cxN")) {
          I1l11I = i1iIi1(468, "9h%U") + Iil1lI + i1iIi1(535, "$tp%"), lI1IIi++;
          continue;
        } else lilIl1[i1iIi1(728, "ObUp")](i1l1ii[i1iIi1(572, "eoFR")], i1iIi1(730, "0(LI")), i1l1[i1iIi1(615, "Gt2@")](1);
      }
      I1lIli[i1iIi1(504, "C9qI")](IlIliI, Iil1lI, IlllIi[i1iIi1(558, "iy[E")]), Ilil1l = false;
      break;
    }
    I1lIli[i1iIi1(710, "GeCP")](lI1IIi, II11lI) && (console[i1iIi1(772, "#9o@")](I1l11I), Ilil1l && ($[i1iIi1(494, "$Il9")] = true));
  }
}
async function handleResponse(i1l1Ii, I1iIIi) {
  const l1l1il = I1llIl,
    I1iIIl = {
      "IalEK": function (lI1IIl, i1ilI) {
        return lI1IIl === i1ilI;
      },
      "eptzh": function (iii1lI, i1ilI1) {
        return iii1lI === i1ilI1;
      },
      "rLhqK": l1l1il(648, "bXr%"),
      "wCZch": l1l1il(673, "Rt34"),
      "VNJwZ": l1l1il(779, "&zDZ"),
      "fgUkc": l1l1il(604, "8NB#"),
      "OvgxF": l1l1il(709, "Lh!p"),
      "lrKoA": l1l1il(767, "eoFR")
    };
  try {
    switch (i1l1Ii) {
      case l1l1il(470, "1[2a"):
        if (I1iIIl[l1l1il(567, "YZ9I")](I1iIIi["code"], "0") && I1iIIl[l1l1il(449, "$Il9")](I1iIIi[l1l1il(626, "qXRN")], "0") && I1iIIi["data"]) {
          if (I1iIIl[l1l1il(575, "&zDZ")] === "cLinb") {
            const Iiilii = I1iIIi[l1l1il(496, "R7zK")]?.[l1l1il(649, "GeCP")] || [];
            for (const Iil1li of Iiilii) {
              const {
                type: Iiilil,
                data: Iil1ll,
                actionType: iillI
              } = Iil1li;
              switch (Iiilil) {
                case l1l1il(668, "SeZf"):
                case I1iIIl["wCZch"]:
                  break;
                case "new_anchor_darw_lottery":
                  switch (iillI) {
                    case 3:
                      $[l1l1il(813, "AB[Z")] = Iil1ll[l1l1il(586, "iy[E")], $[l1l1il(753, "l659")] = Iil1ll[l1l1il(678, "#9o@")];
                      break;
                    default:
                      console[l1l1il(591, "YZ9I")](I1iIIl[l1l1il(528, "^!J@")]);
                      break;
                  }
                  break;
              }
            }
          } else i1ii = 1;
        } else "RBOuk" !== l1l1il(740, "8NB#") ? console["log"](I1iIIl[l1l1il(601, "tJ8k")]) : l1iIIl[l1l1il(612, "%cxN")] = true;
        break;
    }
  } catch (IllIiI) {
    if (I1iIIl["OvgxF"] === I1iIIl[l1l1il(466, "AB[Z")]) try {
      const I1l111 = li1II(IliI11);
      I1l111 >= 0 && (i1l1lI[l1l1il(741, "bXr%")] = I1l111);
    } catch {
      I1iIii[l1l1il(563, "F)pI")](l1l1il(532, "g^*J"));
    } else console[l1l1il(584, "9h%U")](l1l1il(469, "y00*") + i1l1Ii + " \u8BF7\u6C42\u54CD\u5E94 " + (IllIiI["message"] || IllIiI));
  }
}
async function sendRequest(IIii1l) {
  const I11i1I = I1llIl,
    I1iIII = {
      "HTOWw": function (II11ll, liiI1I) {
        return II11ll < liiI1I;
      },
      "Lyzxg": I11i1I(498, "0(LI"),
      "SNAzP": I11i1I(536, "8NB#"),
      "snirF": I11i1I(451, "ReRH"),
      "GoyUw": "Live_Room",
      "efqnw": "liveActivityV946",
      "aHfll": I11i1I(762, "l659"),
      "CaPfM": I11i1I(736, "^!J@"),
      "BwKRp": I11i1I(656, "gBkk"),
      "VixaP": "application/x-www-form-urlencoded",
      "HuDtA": I11i1I(793, "C9qI"),
      "OyAEL": I11i1I(734, "3p[Q"),
      "NVRjA": I11i1I(716, "SeZf"),
      "hMQzY": I11i1I(445, "]y5]"),
      "oaqKn": function (ililII, lI1II1) {
        return ililII === lI1II1;
      },
      "RRbPU": I11i1I(701, "Rt34"),
      "oPUzM": function (i1ilII, iIIii1) {
        return i1ilII === iIIii1;
      },
      "kXbBg": I11i1I(669, "ndL&"),
      "fVnkP": function (IllIi1, lilIII, Ii1ilI) {
        return IllIi1(lilIII, Ii1ilI);
      }
    };
  if ($[I11i1I(742, "8NB#")] || $[I11i1I(694, "ic&Z")]) return;
  let liiI11 = "",
    ililI1 = null,
    IIii1i = null,
    i1ili = "POST",
    Iiill1 = {};
  switch (IIii1l) {
    case I1iIII["snirF"]:
      liiI11 = I11i1I(592, "9h%U"), Iiill1 = {
        "pageId": I1iIII[I11i1I(609, "^!J@")],
        "liveId": ""[I11i1I(761, "uJTo")]($["liveId"] || "")
      }, IIii1i = {
        "functionId": I1iIII["efqnw"]
      }, ililI1 = common[I11i1I(628, "AB[Z")](await common["getSign"](I11i1I(719, "$Il9"), Iiill1));
      break;
    default:
      console[I11i1I(733, "y00*")](I11i1I(795, "9mpm") + IIii1l);
      return;
  }
  const I1iII1 = {
    "url": liiI11,
    "method": i1ili,
    "headers": {
      "Accept": I1iIII[I11i1I(642, "iy[E")],
      "Accept-Encoding": I11i1I(769, "ndL&"),
      "Accept-Language": I1iIII[I11i1I(594, "kHwg")],
      "Connection": I1iIII[I11i1I(537, "iy[E")],
      "Content-Type": I1iIII[I11i1I(507, "R7zK")],
      "J-E-H": $["JEH"],
      "J-E-C": $[I11i1I(439, "]y5]")],
      "Host": I1iIII[I11i1I(819, "tR]F")],
      "Origin": I11i1I(611, "R7zK"),
      "Sec-Fetch-Dest": I1iIII["OyAEL"],
      "Sec-Fetch-Mode": I1iIII[I11i1I(693, "&zDZ")],
      "Sec-Fetch-Site": I1iIII["hMQzY"],
      "User-Agent": $["UA"]
    },
    "params": IIii1i,
    "data": ililI1,
    "timeout": 30000
  };
  I1iIII[I11i1I(577, "Lh!p")](i1ili, "GET") && (delete I1iII1[I11i1I(444, "&5!E")], delete I1iII1[I11i1I(590, "qXRN")][I11i1I(763, "F)pI")]);
  const lilII1 = 1;
  let iill1 = 0,
    iii1l1 = null,
    IIliIl = false;
  while (iill1 < lilII1) {
    if (I1iIII["RRbPU"] !== I1iIII[I11i1I(473, "3p[Q")]) {
      if (I1iIII["HTOWw"](llIlii, llIlil)) {
        IIlii[I11i1I(637, "]y5]")]("\u4EAC\u8C46\u5C0F\u4E8E" + IlI1il + I11i1I(547, "0(LI")), IilliI[I11i1I(700, "Rt34")] = true;
        return;
      }
    } else {
      iill1 > 0 && (await $[I11i1I(778, "&zDZ")](1000));
      const iliIil = await common[I11i1I(630, "PIJ5")](I1iII1);
      if (!iliIil[I11i1I(770, "$Il9")]) {
        iii1l1 = I11i1I(784, "g^*J") + IIii1l + I11i1I(821, "8NB#") + iliIil["error"], iill1++;
        iliIil[I11i1I(655, "9h%U")] && iliIil["status"] === 403 && ($[I11i1I(782, "AB[Z")] = true);
        continue;
      }
      if (!iliIil[I11i1I(587, "uJTo")]) {
        if (I1iIII[I11i1I(658, "l659")](I11i1I(514, "^!J@"), I1iIII[I11i1I(534, "a^o@")])) {
          iii1l1 = I11i1I(437, "F)pI") + IIii1l + I11i1I(607, "ipL6"), iill1++;
          continue;
        } else {
          IiilI1["log"](I1iIII[I11i1I(814, "Gt2@")]);
          return;
        }
      }
      await I1iIII["fVnkP"](handleResponse, IIii1l, iliIil["data"]), IIliIl = false;
      break;
    }
  }
  if (iill1 >= lilII1) {
    console["log"](iii1l1);
    if (IIliIl) {
      $["outFlag"] = true;
      if ($["message"]) {
        if (I11i1I(576, "qXRN") !== "MRJSz") {
          Ii1iI1["log"](lilIli + "\u8D26\u53F7\u65E0\u6548"), Iliili[I11i1I(516, "$Il9")](I1iIII[I11i1I(809, "Gt2@")]), Iliill["needRemoveCookieIndex"][I11i1I(636, "pNiu")](IIII11);
          return;
        } else $[I11i1I(794, "gBkk")][I11i1I(593, "AWc*")](iii1l1);
      }
    }
  }
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