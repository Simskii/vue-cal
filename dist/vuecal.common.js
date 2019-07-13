module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "70af");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00aa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0122":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("fada");
__webpack_require__("1773");
__webpack_require__("d446");
__webpack_require__("61d0");
module.exports = __webpack_require__("fb9d").Symbol;


/***/ }),

/***/ "014d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("d69e");
var $export = __webpack_require__("8f1b");
var toObject = __webpack_require__("437b");
var call = __webpack_require__("9ba2");
var isArrayIter = __webpack_require__("3887");
var toLength = __webpack_require__("702f");
var createProperty = __webpack_require__("a288");
var getIterFn = __webpack_require__("1186");

$export($export.S + $export.F * !__webpack_require__("dbb8")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "026e":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("9c7c");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("d889") });


/***/ }),

/***/ "02fe":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "0340":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("0a60");
var defined = __webpack_require__("ffa2");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "04b9":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("1efe") && /./g.flags != 'g') __webpack_require__("197a").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("931e")
});


/***/ }),

/***/ "0644":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("e077");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "0699":
/***/ (function(module) {

module.exports = {"weekDays":["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],"months":["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],"years":"Années","year":"Année","month":"Mois","week":"Semaine","day":"Jour","today":"Aujourd'hui","noEvent":"Aucun événement","allDay":"Jour entier","deleteEvent":"Supprimer","createEvent":"Créer un événement","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "07c5":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("3a3a");
var toIObject = __webpack_require__("0340");
var arrayIndexOf = __webpack_require__("ad43")(false);
var IE_PROTO = __webpack_require__("5b3b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "0a60":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("7e37");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "0c42":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "0c8c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("16e1");
var redefine = __webpack_require__("7d1a");
var hide = __webpack_require__("86cb");
var fails = __webpack_require__("77f6");
var defined = __webpack_require__("ffa2");
var wks = __webpack_require__("ad91");
var regexpExec = __webpack_require__("325d");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "1075":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("67be")('keys');
var uid = __webpack_require__("cf29");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "1186":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("da79");
var ITERATOR = __webpack_require__("aadb")('iterator');
var Iterators = __webpack_require__("9121");
module.exports = __webpack_require__("fb9d").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "11ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("e843");
var toObject = __webpack_require__("6a8c");
var toLength = __webpack_require__("9486");
var toInteger = __webpack_require__("9fba");
var advanceStringIndex = __webpack_require__("83e9");
var regExpExec = __webpack_require__("0644");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("0c8c")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "1384":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("b68f");
var step = __webpack_require__("48fc");
var Iterators = __webpack_require__("02fe");
var toIObject = __webpack_require__("0340");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("d1c3")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "1548":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "16e1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("325d");
__webpack_require__("9c7c")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "175b":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "1773":
/***/ (function(module, exports) {



/***/ }),

/***/ "197a":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e843");
var IE8_DOM_DEFINE = __webpack_require__("2529");
var toPrimitive = __webpack_require__("72b9");
var dP = Object.defineProperty;

exports.f = __webpack_require__("1efe") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "1b25":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("308d").f;
var has = __webpack_require__("c2b1");
var TAG = __webpack_require__("aadb")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "1ca3":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("df29");
var defined = __webpack_require__("ffa2");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "1d5b":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("c2b1");
var toIObject = __webpack_require__("843e");
var arrayIndexOf = __webpack_require__("3c85")(false);
var IE_PROTO = __webpack_require__("1075")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "1d9c":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("197a");
var anObject = __webpack_require__("e843");
var getKeys = __webpack_require__("e0d1");

module.exports = __webpack_require__("1efe") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1e5b":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("9c7c");

$export($export.P, 'Array', { fill: __webpack_require__("5528") });

__webpack_require__("b68f")('fill');


/***/ }),

/***/ "1efe":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("77f6")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "1f85":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("26a0");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "2029":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f12a");
/* harmony import */ var _config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "214f":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "23fd":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("6ae8");
var gOPS = __webpack_require__("bf67");
var anObject = __webpack_require__("e843");
var Reflect = __webpack_require__("0c42").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "2529":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("1efe") && !__webpack_require__("77f6")(function () {
  return Object.defineProperty(__webpack_require__("c006")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "26a0":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "27a2":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "2a6b":
/***/ (function(module) {

module.exports = {"weekDays":["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"],"months":["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],"years":"År","year":"År","month":"Månad","week":"Vecka","day":"Dag","today":"Idag","noEvent":"Ingen händelse","allDay":"Heldag","deleteEvent":"Ta bort","createEvent":"Skapa händelse","dateFormat":"DDDD den d mmmm yyyy"};

/***/ }),

/***/ "2d15":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("bcc7");
__webpack_require__("4683");
module.exports = __webpack_require__("f8d9");


/***/ }),

/***/ "2ddd":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("9c7c");
var core = __webpack_require__("8ba7");
var fails = __webpack_require__("77f6");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "2eba":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "2f69":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "3002":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("9fba");
var defined = __webpack_require__("ffa2");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "308d":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("1f85");
var IE8_DOM_DEFINE = __webpack_require__("83b4");
var toPrimitive = __webpack_require__("3ee1");
var dP = Object.defineProperty;

exports.f = __webpack_require__("6706") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "30b7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("9c7c");
var $find = __webpack_require__("d585")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("b68f")(KEY);


/***/ }),

/***/ "310f":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "3176":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2eba");
var $export = __webpack_require__("8f1b");
var redefine = __webpack_require__("682c");
var hide = __webpack_require__("dd9d");
var Iterators = __webpack_require__("9121");
var $iterCreate = __webpack_require__("ea0f");
var setToStringTag = __webpack_require__("1b25");
var getPrototypeOf = __webpack_require__("685e");
var ITERATOR = __webpack_require__("aadb")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "325d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("931e");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "36ee":
/***/ (function(module) {

module.exports = {"weekDays":["Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte","Diumenge"],"weekDaysShort":["Dl","Dt","Dc","Dj","Dv","Ds","Dg"],"months":["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],"years":"Anys","year":"Any","month":"Mes","week":"Setmana","day":"Dia","today":"Avui","noEvent":"No hi ha esdeveniments","allDay":"Tot el dia","deleteEvent":"Eliminar","createEvent":"Crear un esdeveniment","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "385f":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "3887":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("9121");
var ITERATOR = __webpack_require__("aadb")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "39a1":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("0c42").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "3a39":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("1f85");
var dPs = __webpack_require__("b810");
var enumBugKeys = __webpack_require__("d67a");
var IE_PROTO = __webpack_require__("1075")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("d332")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("a6ff").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "3a3a":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "3b96":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "3c85":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("843e");
var toLength = __webpack_require__("702f");
var toAbsoluteIndex = __webpack_require__("5d70");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "3d65":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6bc1");
var setPrototypeOf = __webpack_require__("bb96").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "3e48":
/***/ (function(module) {

module.exports = {"weekDays":["Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота","Неделя"],"months":["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],"years":"Години","year":"Година","month":"Месец","week":"Седмица","day":"Ден","today":"Днес","noEvent":"Няма събития","allDay":"Цял ден","deleteEvent":"Изтрий","createEvent":"Създай събитие","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "3ee1":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("26a0");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "437b":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("27a2");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4683":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("8c56")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("3176")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "48fc":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "4960":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("a18f");
var core = __webpack_require__("fb9d");
var LIBRARY = __webpack_require__("2eba");
var wksExt = __webpack_require__("6e44");
var defineProperty = __webpack_require__("308d").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "4a90":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("5277");
var step = __webpack_require__("5434");
var Iterators = __webpack_require__("9121");
var toIObject = __webpack_require__("843e");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("3176")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "4c93":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("843e");
var gOPN = __webpack_require__("a5cf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "4da1":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar.json": "bd5b",
	"./bg.json": "3e48",
	"./bs.json": "53fe",
	"./ca.json": "36ee",
	"./cs.json": "e3ad",
	"./da.json": "e5bc",
	"./de.json": "8d7d",
	"./en.json": "7213",
	"./es.json": "e240",
	"./fa.json": "d53b",
	"./fr.json": "0699",
	"./he.json": "616e",
	"./hr.json": "7cd4",
	"./hu.json": "e131",
	"./it.json": "eed7",
	"./ka.json": "acbd",
	"./nl.json": "b258",
	"./no.json": "f1ef",
	"./pl.json": "6079",
	"./pt-br.json": "89f4",
	"./ro.json": "abf5",
	"./ru.json": "a65a",
	"./sk.json": "a39e",
	"./sl.json": "c9a5",
	"./sr.json": "7981",
	"./sv.json": "2a6b",
	"./uk.json": "7405",
	"./vi.json": "c5f8",
	"./zh-cn.json": "88b4",
	"./zh-hk.json": "cb46"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "4da1";

/***/ }),

/***/ "50f7":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("3a3a");
var toObject = __webpack_require__("6a8c");
var IE_PROTO = __webpack_require__("5b3b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "5277":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "53fe":
/***/ (function(module) {

module.exports = {"weekDays":["Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota","Nedjelja"],"months":["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],"years":"Godine","year":"Godina","month":"Mjesec","week":"Sedmica","day":"Dan","today":"Danas","noEvent":"Nema događaja","allDay":"Cijeli dan","deleteEvent":"Obriši","createEvent":"Kreiraj događaj","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "5434":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5528":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("6a8c");
var toAbsoluteIndex = __webpack_require__("7999");
var toLength = __webpack_require__("9486");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "57c3":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "593f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("4683");
__webpack_require__("014d");
module.exports = __webpack_require__("fb9d").Array.from;


/***/ }),

/***/ "5957":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("1384");
var getKeys = __webpack_require__("e0d1");
var redefine = __webpack_require__("7d1a");
var global = __webpack_require__("0c42");
var hide = __webpack_require__("86cb");
var Iterators = __webpack_require__("02fe");
var wks = __webpack_require__("ad91");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "5aa3":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("9c7c");
var fails = __webpack_require__("77f6");
var defined = __webpack_require__("ffa2");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "5b3b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("fcd2")('keys');
var uid = __webpack_require__("1548");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9638");

/***/ }),

/***/ "5d70":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c37b");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "5d73":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2d15");

/***/ }),

/***/ "6079":
/***/ (function(module) {

module.exports = {"weekDays":["Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota","Niedziela"],"months":["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],"years":"Lata","year":"Rok","month":"Miesiąc","week":"Tydzień","day":"Dzień","today":"Dzisiaj","noEvent":"Brak wydarzeń","allDay":"Cały dzień","deleteEvent":"Usuń","createEvent":"Utwórz wydarzenie","dateFormat":"DDDD, d mmmm yyyy"};

/***/ }),

/***/ "616e":
/***/ (function(module) {

module.exports = {"weekDays":["שני","שלישי","רביעי","חמישי","שישי","שבת","ראשון"],"months":["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],"years":"שנים","year":"שנה","month":"חודש","week":"שבוע","day":"יום","today":"היום","noEvent":"אין אירועים","allDay":"כל היום","deleteEvent":"מחיקה","createEvent":"צור אירוע","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "61d0":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("4960")('observable');


/***/ }),

/***/ "62fd":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("bcc7");
__webpack_require__("4683");
module.exports = __webpack_require__("c786");


/***/ }),

/***/ "653d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a87d");
var descriptor = __webpack_require__("310f");
var setToStringTag = __webpack_require__("7764");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("86cb")(IteratorPrototype, __webpack_require__("ad91")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "6706":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("175b")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0122");

/***/ }),

/***/ "67be":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("fb9d");
var global = __webpack_require__("a18f");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2eba") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "682c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dd9d");


/***/ }),

/***/ "685e":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("c2b1");
var toObject = __webpack_require__("437b");
var IE_PROTO = __webpack_require__("1075")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "6a8c":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("ffa2");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "6ae8":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("07c5");
var hiddenKeys = __webpack_require__("90a7").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6bc1":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "6e44":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("aadb");


/***/ }),

/***/ "702f":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("c37b");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "70af":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/simon/.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("9589")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"34e2ea1b-vue-loader-template"}!/Users/simon/.config/yarn/global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/index.vue?vue&type=template&id=2b923fde&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vuecal",staticClass:"vuecal__flex vuecal",class:_vm.cssClasses,attrs:{"column":"","lang":_vm.locale}},[_c('vuecal-header',{attrs:{"options":_vm.$props,"view-props":{ views: _vm.views, view: _vm.view, weekDaysInHeader: _vm.weekDaysInHeader },"months":_vm.months,"week-days":_vm.weekDays,"week-days-short":_vm.weekDaysShort,"switch-to-narrower-view":_vm.switchToNarrowerView}},[_vm._t("arrow-prev",[_c('i',{staticClass:"angle"})],{"slot":"arrow-prev"}),_vm._t("arrow-next",[_c('i',{staticClass:"angle"})],{"slot":"arrow-next"}),_vm._t("today-button",[_c('span',{staticClass:"default"},[_vm._v(_vm._s(_vm.texts.today))])],{"slot":"today-btn"}),_vm._t("title",[_vm._v(_vm._s(_vm.viewTitle))],{"slot":"title","title":_vm.viewTitle,"view":_vm.view})],2),(!_vm.hideBody)?_c('div',{staticClass:"vuecal__flex vuecal__body",attrs:{"grow":""}},[_c('transition',{attrs:{"name":("slide-fade--" + _vm.transitionDirection),"appear":_vm.transitions}},[_c('div',{key:_vm.transitions ? _vm.view.id : false,staticClass:"vuecal__flex",staticStyle:{"min-width":"100%"},attrs:{"column":""}},[(_vm.showAllDayEvents && _vm.hasTimeColumn)?_c('div',{staticClass:"vuecal__flex vuecal__all-day"},[_c('span',{staticStyle:{"width":"3em"}},[_c('span',[_vm._v(_vm._s(_vm.texts.allDay))])]),_c('div',{staticClass:"vuecal__flex vuecal__cells",class:((_vm.view.id) + "-view"),attrs:{"grow":"","wrap":!_vm.minCellWidth || _vm.view.id !== 'week',"column":!!_vm.minCellWidth}},_vm._l((_vm.viewCells),function(cell,i){return _c('vuecal-cell',{key:i,attrs:{"options":_vm.$props,"data":cell,"all-day":true,"min-timestamp":_vm.minTimestamp,"max-timestamp":_vm.maxTimestamp,"splits":_vm.hasSplits && _vm.splitDays || []},scopedSlots:_vm._u([{key:"event-renderer",fn:function(ref){
var event = ref.event;
var view = ref.view;
return _c('div',{attrs:{"view":view,"event":event}},[_vm._t("event-renderer",[(_vm.editableEvents && event.title)?_c('div',{staticClass:"vuecal__event-title vuecal__event-title--edit",attrs:{"contenteditable":""},domProps:{"innerHTML":_vm._s(event.title)},on:{"blur":function($event){return _vm.onEventTitleBlur($event, event)}}}):(event.title)?_c('div',{staticClass:"vuecal__event-title",domProps:{"innerHTML":_vm._s(event.title)}}):_vm._e(),(event.content && _vm.showAllDayEvents !== 'short' && !_vm.isShortMonthView)?_c('div',{staticClass:"vuecal__event-content",domProps:{"innerHTML":_vm._s(event.content)}}):_vm._e()],{"view":view,"event":event})],2)}}],null,true)},[_vm._t("no-event",null,{"slot":"no-event"})],2)}),1)]):_vm._e(),_c('div',{staticClass:"vuecal__bg",class:{ vuecal__flex: !_vm.hasTimeColumn },attrs:{"column":""}},[_c('div',{staticClass:"vuecal__flex",attrs:{"row":"","grow":""}},[(_vm.hasTimeColumn)?_c('div',{staticClass:"vuecal__time-column"},_vm._l((_vm.timeCells),function(cell,i){return _c('div',{key:i,staticClass:"vuecal__time-cell",style:(("height: " + _vm.timeCellHeight + "px"))},[_vm._t("time-cell",[_c('span',{staticClass:"line"},[_vm._v(_vm._s(cell.label))])],{"hours":cell.hours,"minutes":cell.minutes})],2)}),0):_vm._e(),_c('div',{staticClass:"vuecal__flex vuecal__cells",class:((_vm.view.id) + "-view"),attrs:{"grow":"","wrap":!_vm.minCellWidth || _vm.view.id !== 'week',"column":!!_vm.minCellWidth}},[(_vm.minCellWidth && _vm.view.id === 'week')?_c('weekdays-headings',{attrs:{"vuecal":this,"transition-direction":_vm.transitionDirection,"view":_vm.view,"min-cell-width":_vm.minCellWidth,"week-days":_vm.weekDays,"week-days-short":_vm.weekDaysShort,"switch-to-narrower-view":_vm.switchToNarrowerView}}):_vm._e(),_c('div',{staticClass:"vuecal__flex",attrs:{"grow":"","wrap":!_vm.minCellWidth || _vm.view.id !== 'week'}},_vm._l((_vm.viewCells),function(cell,i){return _c('vuecal-cell',{key:i,attrs:{"options":_vm.$props,"data":cell,"min-timestamp":_vm.minTimestamp,"max-timestamp":_vm.maxTimestamp,"splits":_vm.hasSplits && _vm.splitDays || []},scopedSlots:_vm._u([{key:"cell-content",fn:function(ref){
var events = ref.events;
var split = ref.split;
var selectCell = ref.selectCell;
return _c('div',{},[_vm._t("cell-content",[(split)?_c('div',{staticClass:"split-label",domProps:{"innerHTML":_vm._s(split.label)}}):_vm._e(),(cell.content)?_c('div',{staticClass:"vuecal__cell-date",domProps:{"innerHTML":_vm._s(cell.content)}}):_vm._e(),(((_vm.view.id === 'month' && !_vm.eventsOnMonthView) || (['years', 'year'].includes(_vm.view.id) && _vm.eventsCountOnYearView)) && events.length)?_c('div',{staticClass:"vuecal__cell-events-count"},[_vm._t("events-count",[_vm._v(_vm._s(events.length))],{"view":_vm.view,"events":events})],2):_vm._e(),(!events.length && ['week', 'day'].includes(_vm.view.id))?_c('div',{staticClass:"vuecal__no-event"},[_vm._t("no-event",[_vm._v(_vm._s(_vm.texts.noEvent))])],2):_vm._e()],{"cell":cell,"view":_vm.view,"goNarrower":selectCell,"events":events})],2)}},{key:"event-renderer",fn:function(ref){
var event = ref.event;
var view = ref.view;
return _c('div',{attrs:{"view":view,"event":event}},[_vm._t("event-renderer",[(_vm.editableEvents && event.title)?_c('div',{staticClass:"vuecal__event-title vuecal__event-title--edit",attrs:{"contenteditable":""},domProps:{"innerHTML":_vm._s(event.title)},on:{"blur":function($event){return _vm.onEventTitleBlur($event, event)}}}):(event.title)?_c('div',{staticClass:"vuecal__event-title",domProps:{"innerHTML":_vm._s(event.title)}}):_vm._e(),((event.startTimeMinutes || event.endTimeMinutes) && !(view === 'month' && event.allDay && _vm.showAllDayEvents === 'short') && !_vm.isShortMonthView)?_c('div',{staticClass:"vuecal__event-time"},[_vm._v(_vm._s(_vm._f("formatTime")(event.startTimeMinutes,_vm.timeFormat || (_vm.$props['12Hour'] ? 'h:mm{am}' : 'HH:mm')))),(event.endTimeMinutes)?_c('span',[_vm._v(" - "+_vm._s(_vm._f("formatTime")(event.endTimeMinutes,_vm.timeFormat || (_vm.$props['12Hour'] ? 'h:mm{am}' : 'HH:mm'))))]):_vm._e(),(event.multipleDays.daysCount)?_c('small',{staticClass:"days-to-end"},[_vm._v(" +"+_vm._s(event.multipleDays.daysCount - 1)+_vm._s((_vm.texts.day[0] || '').toLowerCase()))]):_vm._e()]):_vm._e(),(event.content && !(view === 'month' && event.allDay && _vm.showAllDayEvents === 'short') && !_vm.isShortMonthView)?_c('div',{staticClass:"vuecal__event-content",domProps:{"innerHTML":_vm._s(event.content)}}):_vm._e()],{"view":view,"event":event})],2)}}],null,true)},[_vm._t("no-event",[_vm._v(_vm._s(_vm.texts.noEvent))],{"slot":"no-event"})],2)}),1)],1)])])])])],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/index.vue?vue&type=template&id=2b923fde&lang=pug&

// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("c6e0");

// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/es6.string.small.js
var es6_string_small = __webpack_require__("ecd3");

// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("962b");

// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("8a3e");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("5d58");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("67bb");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("026e");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("a745");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("5d73");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("d01f");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("774e");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("c8bb");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("30b7");

// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("5957");

// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("1384");

// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("f718");

// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("1e5b");

// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("b43e");

// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("d3ec");

// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("b3ad");

// EXTERNAL MODULE: /Users/simon/.config/yarn/global/node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("11ad");

// CONCATENATED MODULE: ./src/components/vue-cal/date-utils.js







var now = new Date(); // Cache today's date for better isDateToday() performances. Formatted without leading 0.

var todayFormatted = "".concat(now.getFullYear(), "-").concat(now.getMonth(), "-").concat(now.getDate()); // eslint-disable-next-line

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}; // eslint-disable-next-line


Date.prototype.subtractDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() - days);
  return date;
}; // eslint-disable-next-line


Date.prototype.getWeek = function () {
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
};

var isDateToday = function isDateToday(date) {
  return "".concat(date.getFullYear(), "-").concat(date.getMonth(), "-").concat(date.getDate()) === todayFormatted;
}; // Returns today if it's FirstDayOfWeek (Monday or Sunday) or previous FirstDayOfWeek otherwise.

var getPreviousFirstDayOfWeek = function getPreviousFirstDayOfWeek() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var weekStartsOnSunday = arguments.length > 1 ? arguments[1] : undefined;
  var prevFirstDayOfWeek = date && new Date(date.valueOf()) || new Date();
  var dayModifier = weekStartsOnSunday ? 7 : 6;
  prevFirstDayOfWeek.setDate(prevFirstDayOfWeek.getDate() - (prevFirstDayOfWeek.getDay() + dayModifier) % 7);
  return prevFirstDayOfWeek;
};

var nth = function nth(d) {
  if (d > 3 && d < 21) return 'th';

  switch (d % 10) {
    case 1:
      return 'st';

    case 2:
      return 'nd';

    case 3:
      return 'rd';

    default:
      return 'th';
  }
};

var date_utils_formatTime = function formatTime(time) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HH:mm';
  var H = Math.floor(time / 60);
  var h = H % 12 ? H % 12 : 12;
  var am = H < 12 ? 'am' : 'pm';
  var m = Math.floor(time % 60);
  var timeObj = {
    H: H,
    h: h,
    HH: (H < 10 ? '0' : '') + H,
    hh: (h < 10 ? '0' : '') + h,
    am: am,
    AM: am.toUpperCase(),
    m: m,
    mm: (m < 10 ? '0' : '') + m
  };
  return format.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, function (m, contents) {
    return timeObj[contents.replace(/\{|\}/g, '')];
  });
};
var formatDate = function formatDate(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  var localizedTexts = arguments.length > 2 ? arguments[2] : undefined;
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var dateObj = {
    D: date.getDay(),
    // 0 to 6.
    DD: localizedTexts.weekDays[(date.getDay() - 1 + 7) % 7][0],
    // M to S.
    DDD: localizedTexts.weekDays[(date.getDay() - 1 + 7) % 7].substr(0, 3),
    // Mon to Sun.
    DDDD: localizedTexts.weekDays[(date.getDay() - 1 + 7) % 7],
    // Monday to Sunday.
    d: d,
    // 1 to 31.
    dd: (d < 10 ? '0' : '') + d,
    // 01 to 31.
    S: nth(d),
    // st, nd, rd, th.
    m: m,
    // 1 to 12.
    mm: (m < 10 ? '0' : '') + m,
    // 01 to 12.
    mmm: localizedTexts.months[m - 1].substr(0, 3),
    // Jan to Dec.
    mmmm: localizedTexts.months[m - 1],
    // January to December.
    yyyy: date.getFullYear(),
    // 2018.
    yy: date.getFullYear().toString().substr(2, 4) // 18.

  };
  return format.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, function (m, contents) {
    var result = dateObj[contents.replace(/\{|\}/g, '')];
    return result !== undefined ? result : contents;
  });
};
var date_utils_stringToDate = function stringToDate(string) {
  var _string$match = string.match(/(\d{4})-(\d{2})-(\d{2})(?: (\d{2}):(\d{2}))?/),
      _string$match2 = _slicedToArray(_string$match, 6),
      y = _string$match2[1],
      m = _string$match2[2],
      d = _string$match2[3],
      _string$match2$ = _string$match2[4],
      h = _string$match2$ === void 0 ? 0 : _string$match2$,
      _string$match2$2 = _string$match2[5],
      min = _string$match2$2 === void 0 ? 0 : _string$match2$2;

  return new Date(y, parseInt(m) - 1, d, h, min);
};
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/components/vue-cal/event-utils.js


















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var eventDefaults = {
  _eid: null,
  startDate: '',
  startTime: '',
  startTimeMinutes: 0,
  endDate: '',
  endTime: '',
  endTimeMinutes: 0,
  title: '',
  content: '',
  background: false,
  allDay: false,
  overlapped: {},
  overlapping: {},
  simultaneous: {},
  linked: [],
  // Linked events.
  multipleDays: {},
  height: 0,
  top: 0,
  classes: [] // Create an event on formattedDate at the given startTimeMinutes, and allow overriding
  // event attributes through the eventOptions object.

};
var event_utils_createAnEvent = function createAnEvent(formattedDate, startTimeMinutes, eventOptions, vuecal) {
  startTimeMinutes = parseInt(startTimeMinutes);
  var hours = parseInt(startTimeMinutes / 60);
  var minutes = parseInt(startTimeMinutes % 60);
  var endTimeMinutes = startTimeMinutes + 120;
  var formattedHours = (hours < 10 ? '0' : '') + hours;
  var formattedEndHours = (hours + 2 < 10 ? '0' : '') + (hours + 2);
  var formattedMinutes = (minutes < 10 ? '0' : '') + minutes;

  var event = _objectSpread({}, eventDefaults, {
    // Nested objects need to be reinitialized or they will be shared across all instances.
    overlapped: {},
    overlapping: {},
    simultaneous: {},
    multipleDays: {},
    _eid: "".concat(vuecal._uid, "_").concat(vuecal.eventIdIncrement++),
    start: formattedDate + (vuecal.time ? " ".concat(formattedHours, ":").concat(formattedMinutes) : ''),
    startDate: formattedDate,
    startTime: vuecal.time ? " ".concat(formattedHours, ":").concat(formattedMinutes) : null,
    startTimeMinutes: startTimeMinutes,
    end: formattedDate + (vuecal.time ? " ".concat(formattedEndHours, ":").concat(formattedMinutes) : ''),
    endDate: formattedDate,
    endTime: vuecal.time ? " ".concat(formattedEndHours, ":").concat(formattedMinutes) : null,
    endTimeMinutes: endTimeMinutes
  }, eventOptions);

  if (typeof vuecal.onEventCreate === 'function') {
    vuecal.onEventCreate(event, function () {
      return deleteAnEvent(event, vuecal);
    });
  } // Make array reactive for future events creations & deletions.


  if (!(event.startDate in vuecal.mutableEvents)) external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(vuecal.mutableEvents, event.startDate, []);
  vuecal.mutableEvents[event.startDate].push(event);
  vuecal.emitWithEvent('event-create', event);
  vuecal.emitWithEvent('event-change', event); // After creating a new event, check if it overlaps any other in current cell OR split.

  var cellEvents = vuecal.mutableEvents[event.startDate];

  if (vuecal.time) {
    event_utils_checkCellOverlappingEvents(eventOptions.split ? cellEvents.filter(function (e) {
      return e.split === eventOptions.split;
    }) : cellEvents);
  }

  return event;
};
var deleteAnEvent = function deleteAnEvent(event, vuecal) {
  vuecal.emitWithEvent('event-delete', event);
  var eventDate = event.multipleDays && event.multipleDays.startDate || event.startDate; // Filtering from vuecal.mutableEvents since current cell might only contain all day events or vice-versa.

  var cellEvents = vuecal.mutableEvents[eventDate]; // Delete the event.

  vuecal.mutableEvents[eventDate] = cellEvents.filter(function (e) {
    return e._eid !== event._eid;
  });
  cellEvents = vuecal.mutableEvents[eventDate]; // If deleting a multiple-day event, delete all the events pieces (days).

  if (event.multipleDays.daysCount) {
    event.linked.forEach(function (e) {
      var dayToModify = vuecal.mutableEvents[e.date];
      var eventToDelete = dayToModify.find(function (e2) {
        return e2._eid === e._eid;
      });
      vuecal.mutableEvents[e.date] = dayToModify.filter(function (e2) {
        return e2._eid !== e._eid;
      });

      if (!e.background) {
        // Remove this event from possible other overlapping events of the same cell.
        deleteLinkedEvents(eventToDelete, dayToModify);
      }
    });
  } // Remove this event from possible other overlapping events of the same cell, then
  // after mutableEvents has changed, rerender will start & checkCellOverlappingEvents()
  // will be run again.


  if (!event.background) deleteLinkedEvents(event, cellEvents);
};
var deleteLinkedEvents = function deleteLinkedEvents(event, cellEvents) {
  Object.keys(event.overlapped).forEach(function (id) {
    return delete cellEvents.find(function (item) {
      return item._eid === id;
    }).overlapping[event._eid];
  });
  Object.keys(event.overlapping).forEach(function (id) {
    return delete cellEvents.find(function (item) {
      return item._eid === id;
    }).overlapped[event._eid];
  });
  Object.keys(event.simultaneous).forEach(function (id) {
    return delete cellEvents.find(function (item) {
      return item._eid === id;
    }).simultaneous[event._eid];
  });
};
var onResizeEvent = function onResizeEvent(cellEvents, vuecal) {
  var _vuecal$domEvents$res = vuecal.domEvents.resizeAnEvent,
      _eid = _vuecal$domEvents$res._eid,
      newHeight = _vuecal$domEvents$res.newHeight;
  var event = cellEvents.find(function (e) {
    return e._eid === _eid;
  });

  if (event) {
    var minEventHeight = Math.max(newHeight, 10);
    var eventStart = !isNaN(event.multipleDays.startTimeMinutes) ? Math.max(event.multipleDays.startTimeMinutes, vuecal.timeFrom) : event.startTimeMinutes; // While dragging event, prevent event to span beyond vuecal.timeTo.

    var maxEventHeight = (vuecal.timeTo - eventStart) * vuecal.timeCellHeight / vuecal.timeStep;
    event.height = Math.min(minEventHeight, maxEventHeight); // Allow dragging until midnight but block height at vuecal.timeTo.

    maxEventHeight = (24 * 60 - eventStart) * vuecal.timeCellHeight / vuecal.timeStep;
    event.maxHeight = Math.min(minEventHeight, maxEventHeight);
    updateEndTimeOnResize(event, vuecal);
  }
};

var updateEndTimeOnResize = function updateEndTimeOnResize(event, vuecal) {
  // event.maxHeight is the maximum height the event can take, up to midnight.
  // But event.height is limited to vuecal.timeTo to prevent event overflowing the view.
  var bottom = event.top + event.maxHeight;
  var endTime = (bottom / vuecal.timeCellHeight * vuecal.timeStep + vuecal.timeFrom) / 60;
  var hours = parseInt(endTime);
  var minutes = parseInt((endTime - hours) * 60);
  event.endTimeMinutes = endTime * 60;
  event.endTime = "".concat(hours, ":").concat((minutes < 10 ? '0' : '') + minutes);
  event.end = event.end.split(' ')[0] + " ".concat(event.endTime);

  if (event.multipleDays.daysCount) {
    event.multipleDays.endTimeMinutes = event.endTimeMinutes;
    event.multipleDays.endTime = event.endTime;
    event.multipleDays.end = event.end;
    event.linked.forEach(function (e) {
      var dayToModify = vuecal.mutableEvents[e.date];
      var eventToModify = dayToModify.find(function (e2) {
        return e2._eid === e._eid;
      });
      eventToModify.endTimeMinutes = event.endTimeMinutes;
      eventToModify.endTime = event.endTime;
      eventToModify.end = event.end;
    });
  }
}; // Will recalculate all the overlaps of the current cell OR split.
// cellEvents will contain only the current split events if in a split.


var event_utils_checkCellOverlappingEvents = function checkCellOverlappingEvents(cellEvents) {
  if (cellEvents) {
    var foregroundEventsList = cellEvents.filter(function (item) {
      return !item.background && !item.allDay;
    });

    if (foregroundEventsList.length) {
      // Do the mapping outside of the next loop if not split cell.
      // If split need the whole event object to compare splits.
      var foregroundEventsIdList = foregroundEventsList.map(function (item) {
        return item._eid;
      });
      var comparisonArray = {};
      cellEvents.forEach(function (event) {
        if (!event.background && !event.allDay) {
          var comparisonArrayKeys = Object.keys(comparisonArray); // Unique comparison of events.

          comparisonArray[event._eid] = cellEvents.length ? foregroundEventsList.filter(function (item) {
            return item._eid !== event._eid && !comparisonArrayKeys.includes(item._eid);
          }).map(function (item) {
            return item._eid;
          }) : foregroundEventsIdList.filter(function (id) {
            return id !== event._eid && !comparisonArrayKeys.includes(id);
          });

          if (comparisonArray[event._eid].length) {
            event_utils_checkOverlappingEvents(event, comparisonArray[event._eid], cellEvents);
          }
        }
      });
    }
  }

  return cellEvents;
};
var event_utils_checkOverlappingEvents = function checkOverlappingEvents(event, comparisonArray, cellEvents) {
  var src = event.multipleDays.daysCount && event.multipleDays || event;
  var startTimeMinE1 = src.startTimeMinutes,
      endTimeMinE1 = src.endTimeMinutes;
  comparisonArray.forEach(function (event2id) {
    var event2 = cellEvents.find(function (item) {
      return item._eid === event2id;
    });
    var src2 = event2.multipleDays.daysCount && event2.multipleDays || event2;
    var startTimeMinE2 = src2.startTimeMinutes,
        endTimeMinE2 = src2.endTimeMinutes;
    var event1startsFirst = startTimeMinE1 < startTimeMinE2;
    var event1overlapsEvent2 = !event1startsFirst && endTimeMinE2 > startTimeMinE1;
    var event2overlapsEvent1 = event1startsFirst && endTimeMinE1 > startTimeMinE2;

    if (event1overlapsEvent2) {
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(event.overlapping, event2._eid, true);
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(event2.overlapped, event._eid, true);
    } else {
      delete event.overlapping[event2._eid];
      delete event2.overlapped[event._eid];
    }

    if (event2overlapsEvent1) {
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(event2.overlapping, event._eid, true);
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(event.overlapped, event2._eid, true);
    } else {
      delete event2.overlapping[event._eid];
      delete event.overlapped[event2._eid];
    } // If up to 3 events start at the same time.


    if (startTimeMinE1 === startTimeMinE2 || event1overlapsEvent2 || event2overlapsEvent1) {
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(event.simultaneous, event2._eid, true);
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(event2.simultaneous, event._eid, true);
    } else {
      delete event.simultaneous[event2._eid];
      delete event2.simultaneous[event._eid];
    }
  });
};
var updateEventPosition = function updateEventPosition(event, vuecal) {
  var src = event.multipleDays.daysCount && event.multipleDays || event;
  var startTimeMinutes = src.startTimeMinutes,
      endTimeMinutes = src.endTimeMinutes; // Top of event.

  var minutesFromTop = startTimeMinutes - vuecal.timeFrom;
  var top = Math.round(minutesFromTop * vuecal.timeCellHeight / vuecal.timeStep); // Bottom of event.

  minutesFromTop = Math.min(endTimeMinutes, vuecal.timeTo) - vuecal.timeFrom;
  var bottom = Math.round(minutesFromTop * vuecal.timeCellHeight / vuecal.timeStep);
  event.top = Math.max(top, 0);
  event.height = bottom - event.top;
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"34e2ea1b-vue-loader-template"}!/Users/simon/.config/yarn/global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/header.vue?vue&type=template&id=24a14810&lang=pug&
var headervue_type_template_id_24a14810_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__header"},[(!_vm.options.hideViewSelector)?_c('ul',{staticClass:"vuecal__flex vuecal__menu"},_vm._l((_vm.viewProps.views),function(v,id){return (v.enabled)?_c('li',{class:{ active: _vm.viewProps.view.id === id },on:{"click":function($event){return _vm.$parent.switchView(id, null, true)}}},[_vm._v(_vm._s(v.label))]):_vm._e()}),0):_vm._e(),(!_vm.options.hideTitleBar)?_c('div',{staticClass:"vuecal__title-bar"},[_c('div',{staticClass:"vuecal__arrow vuecal__arrow--prev",on:{"click":_vm.previous}},[_vm._t("arrow-prev")],2),_c('div',{staticClass:"vuecal__flex vuecal__title",attrs:{"grow":""}},[_c('transition',{attrs:{"name":("slide-fade--" + _vm.transitionDirection)}},[_c('span',{key:_vm.options.transitions ? ("" + (_vm.viewProps.view.id) + (_vm.viewProps.view.startDate.toString())) : false,class:{ clickable: !!_vm.broaderView },on:{"click":_vm.switchToBroaderView}},[_vm._t("title")],2)])],1),(_vm.options.todayButton)?_c('div',{staticClass:"vuecal__today-btn",on:{"click":_vm.goToToday}},[_vm._t("today-btn")],2):_vm._e(),_c('div',{staticClass:"vuecal__arrow vuecal__arrow--next",on:{"click":_vm.next}},[_vm._t("arrow-next")],2)]):_vm._e(),(_vm.viewProps.weekDaysInHeader)?_c('weekdays-headings',{attrs:{"vuecal":_vm.$parent,"view":_vm.viewProps.view,"week-days":_vm.weekDays,"week-days-short":_vm.weekDaysShort,"transition-direction":_vm.transitionDirection,"switch-to-narrower-view":_vm.switchToNarrowerView}}):_vm._e()],1)}
var headervue_type_template_id_24a14810_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/header.vue?vue&type=template&id=24a14810&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"34e2ea1b-vue-loader-template"}!/Users/simon/.config/yarn/global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/weekdays-headings.vue?vue&type=template&id=2adade09&lang=pug&
var weekdays_headingsvue_type_template_id_2adade09_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__flex vuecal__weekdays-headings"},_vm._l((_vm.headings),function(heading,i){return _c('div',{key:i,staticClass:"vuecal__flex vuecal__heading",class:{ today: heading.today, clickable: _vm.cellHeadingsClickable },style:(_vm.weekdayCellStyles),on:{"click":function($event){_vm.view.id === 'week' && _vm.selectCell(heading.date)},"dblclick":function($event){_vm.view.id === 'week' && _vm.vuecal.dblClickToNavigate && _vm.switchToNarrowerView()}}},[_c('transition',{attrs:{"name":("slide-fade--" + _vm.transitionDirection),"appear":_vm.vuecal.transitions}},[_c('span',{key:_vm.vuecal.transitions ? (i + "-" + (heading.dayOfMonth)) : false},[_c('span',{staticClass:"full"},[_vm._v(_vm._s(heading.full))]),_c('span',{staticClass:"small"},[_vm._v(_vm._s(heading.small))]),_c('span',{staticClass:"xsmall"},[_vm._v(_vm._s(heading.xsmall))]),(heading.dayOfMonth)?_c('span',[_vm._v(" "+_vm._s(heading.dayOfMonth))]):_vm._e(),(heading.dayOfMonth)?_c('span',{staticClass:"month"},[_vm._v(" "+_vm._s(heading.month))]):_vm._e()])])],1)}),0)}
var weekdays_headingsvue_type_template_id_2adade09_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/weekdays-headings.vue?vue&type=template&id=2adade09&lang=pug&

// CONCATENATED MODULE: ./src/components/vue-cal/cell-utils.js


var cell_utils_selectCell = function selectCell() {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var date = arguments.length > 1 ? arguments[1] : undefined;
  var vuecal = arguments.length > 2 ? arguments[2] : undefined;
  vuecal.$emit('cell-click', date);

  if (vuecal.view.selectedDate.toString() !== date.toString()) {
    vuecal.view.selectedDate = date;
    vuecal.$emit('cell-focus', date);
  } // Switch to narrower view.


  if (vuecal.clickToNavigate || force) vuecal.switchToNarrowerView(); // Handle double click manually for touch devices.
  else if (vuecal.dblClickToNavigate && 'ontouchstart' in window) {
      vuecal.domEvents.dblTapACell.taps++;
      setTimeout(function () {
        return vuecal.domEvents.dblTapACell.taps = 0;
      }, vuecal.domEvents.dblTapACell.timeout);

      if (vuecal.domEvents.dblTapACell.taps >= 2) {
        vuecal.domEvents.dblTapACell.taps = 0;
        vuecal.switchToNarrowerView();
      }
    }
};
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!/Users/simon/.config/yarn/global/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/weekdays-headings.vue?vue&type=script&lang=js&










function weekdays_headingsvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function weekdays_headingsvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { weekdays_headingsvue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { weekdays_headingsvue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var weekdays_headingsvue_type_script_lang_js_ = ({
  props: {
    vuecal: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    view: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    transitionDirection: {
      type: String,
      default: "right"
    },
    weekDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // Will override default truncation of weekDays if this is defined in i18n file.
    weekDaysShort: {
      type: [Array, null],
      default: function _default() {
        return [];
      }
    },
    switchToNarrowerView: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    selectCell: function selectCell(date) {
      cell_utils_selectCell(null, date, this.vuecal);
    }
  },
  computed: {
    headings: function headings() {
      var _this = this;

      var headings = [];

      switch (this.view.id) {
        case "month":
        case "week":
          var todayFound = false;
          headings = this.weekDays.map(function (cell, i) {
            var date = _this.view.startDate.addDays(i);

            return weekdays_headingsvue_type_script_lang_js_objectSpread({
              full: cell.label,
              // If defined in i18n file, weekDaysShort overrides default truncation of
              // week days when does not fit on screen or with small/xsmall options.
              small: _this.weekDaysShort ? _this.weekDaysShort[i].label : cell.label.substr(0, 3),
              xsmall: _this.weekDaysShort ? _this.weekDaysShort[i].label : cell.label.substr(0, 1),
              month: date.toLocaleDateString("sv", {
                month: "long"
              })
            }, _this.view.id === "week" ? {
              dayOfMonth: date.getDate(),
              date: date,
              today: !todayFound && isDateToday(date) && !todayFound++
            } : {});
          });
          break;
      }

      return headings;
    },
    weekdayCellStyles: function weekdayCellStyles() {
      return {
        minWidth: this.vuecal.minCellWidth && this.view.id === "week" ? "".concat(this.vuecal.minCellWidth, "px") : null
      };
    },
    cellHeadingsClickable: function cellHeadingsClickable() {
      return this.view.id === "week" && (this.vuecal.clickToNavigate || this.vuecal.dblClickToNavigate);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/weekdays-headings.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_weekdays_headingsvue_type_script_lang_js_ = (weekdays_headingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-cal/weekdays-headings.vue?vue&type=style&index=0&lang=scss&
var weekdays_headingsvue_type_style_index_0_lang_scss_ = __webpack_require__("2029");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/vue-cal/weekdays-headings.vue






/* normalize component */

var component = normalizeComponent(
  vue_cal_weekdays_headingsvue_type_script_lang_js_,
  weekdays_headingsvue_type_template_id_2adade09_lang_pug_render,
  weekdays_headingsvue_type_template_id_2adade09_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var weekdays_headings = (component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!/Users/simon/.config/yarn/global/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/header.vue?vue&type=script&lang=js&








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var headervue_type_script_lang_js_ = ({
  components: {
    WeekdaysHeadings: weekdays_headings
  },
  props: {
    // Vuecal main component options (props).
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    viewProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    weekDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    weekDaysShort: {
      type: [Array, null],
      default: function _default() {
        return [];
      }
    },
    switchToNarrowerView: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    previous: function previous() {
      this.onArrowClick(false);
    },
    next: function next() {
      this.onArrowClick();
    },
    onArrowClick: function onArrowClick() {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.transitionDirection = next ? 'right' : 'left';
      var modifier = next ? 1 : -1;
      var firstCellDate = null;
      var _this$viewProps$view = this.viewProps.view,
          startDate = _this$viewProps$view.startDate,
          viewId = _this$viewProps$view.id;

      switch (this.viewProps.view.id) {
        case 'years':
          firstCellDate = new Date(startDate.getFullYear() + 25 * modifier, 0, 1);
          break;

        case 'year':
          firstCellDate = new Date(startDate.getFullYear() + 1 * modifier, 1, 1);
          break;

        case 'month':
          firstCellDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1 * modifier, 1);
          break;

        case 'week':
          firstCellDate = getPreviousFirstDayOfWeek(startDate, this.options.startWeekOnSunday)[next ? 'addDays' : 'subtractDays'](7);
          break;

        case 'day':
          firstCellDate = startDate[next ? 'addDays' : 'subtractDays'](1);
          break;
      }

      if (firstCellDate) this.$parent.switchView(viewId, firstCellDate);
    },
    goToToday: function goToToday() {
      this.$parent.updateSelectedDate(new Date());
    },
    switchToBroaderView: function switchToBroaderView() {
      this.transitionDirection = 'left';
      if (this.broaderView) this.$parent.switchView(this.broaderView);
    }
  },
  computed: {
    transitionDirection: {
      get: function get() {
        return this.$parent.transitionDirection;
      },
      set: function set(direction) {
        this.$parent.transitionDirection = direction;
      }
    },
    broaderView: function broaderView() {
      var _this = this;

      var views = Object.keys(this.viewProps.views);
      views = views.slice(0, views.indexOf(this.viewProps.view.id));
      views.reverse();
      return views.find(function (v) {
        return _this.viewProps.views[v].enabled;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-cal/header.vue?vue&type=style&index=0&lang=scss&
var headervue_type_style_index_0_lang_scss_ = __webpack_require__("da8a");

// CONCATENATED MODULE: ./src/components/vue-cal/header.vue






/* normalize component */

var header_component = normalizeComponent(
  vue_cal_headervue_type_script_lang_js_,
  headervue_type_template_id_24a14810_lang_pug_render,
  headervue_type_template_id_24a14810_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var header = (header_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"34e2ea1b-vue-loader-template"}!/Users/simon/.config/yarn/global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/cell.vue?vue&type=template&id=1c5c9ecc&lang=pug&
var cellvue_type_template_id_1c5c9ecc_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{staticClass:"vuecal__cell",class:_vm.cssClasses,style:(_vm.cellStyles),attrs:{"name":("slide-fade--" + _vm.transitionDirection),"tag":"div","appear":_vm.options.transitions}},[_vm._l(((_vm.splits.length || 1)),function(i){return _c('div',{key:_vm.options.transitions ? (_vm.view + "-" + (_vm.data.content) + "-" + i) : i,staticClass:"vuecal__flex vuecal__cell-content",class:_vm.splits.length && ("vuecal__cell-split " + (_vm.splits[i - 1].class)),attrs:{"data-split":_vm.splits.length && i,"column":""},on:{"touchstart":function($event){!_vm.isDisabled && _vm.onCellTouchStart($event, _vm.splits.length ? i : null)},"mousedown":function($event){!_vm.isDisabled && _vm.onCellMouseDown($event, _vm.splits.length ? i : null)},"click":function($event){!_vm.isDisabled && _vm.selectCell()},"dblclick":function($event){!_vm.isDisabled && _vm.options.dblClickToNavigate && _vm.$parent.switchToNarrowerView()}}},[_vm._t("cell-content",null,{"events":_vm.events,"selectCell":function () {_vm.selectCell(true)},"split":_vm.splits[i - 1]}),(_vm.events.length && (['week', 'day'].includes(_vm.view) || (_vm.view === 'month' && _vm.options.eventsOnMonthView)))?_c('div',{staticClass:"vuecal__cell-events"},_vm._l(((_vm.splits.length ? _vm.splitEvents[i] : _vm.events)),function(event,j){return _c('event',{key:j,attrs:{"vuecal":_vm.$parent,"event":event,"all-day":_vm.allDay,"cell-events":_vm.splits.length ? _vm.splitEvents[i] : _vm.events,"split":_vm.splits.length ? i : 0},scopedSlots:_vm._u([{key:"event-renderer",fn:function(ref){
var event = ref.event;
var view = ref.view;
return _c('div',{},[_vm._t("event-renderer",null,{"view":view,"event":event})],2)}}],null,true)})}),1):_vm._e()],2)}),(_vm.timelineVisible)?_c('div',{key:_vm.options.transitions ? (_vm.view + "-now-line") : 'now-line',staticClass:"vuecal__now-line",style:(("top: " + _vm.todaysTimePosition + "px"))}):_vm._e()],2)}
var cellvue_type_template_id_1c5c9ecc_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/cell.vue?vue&type=template&id=1c5c9ecc&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"34e2ea1b-vue-loader-template"}!/Users/simon/.config/yarn/global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/event.vue?vue&type=template&id=16d5fdf2&lang=pug&
var eventvue_type_template_id_16d5fdf2_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__event",class:_vm.eventClasses(_vm.event),style:(_vm.eventStyles(_vm.event)),on:{"mouseenter":function($event){return _vm.onMouseEnter($event, _vm.event)},"mouseleave":function($event){return _vm.onMouseLeave($event, _vm.event)},"touchstart":function($event){return _vm.onTouchStart($event, _vm.event)},"mousedown":function($event){return _vm.onMouseDown($event, _vm.event)},"click":function($event){return _vm.onClick($event, _vm.event)},"dblclick":function($event){return _vm.onDblClick($event, _vm.event)}}},[(_vm.vuecal.editableEvents)?_c('div',{staticClass:"vuecal__event-delete",on:{"mousedown":function($event){$event.stopPropagation();$event.preventDefault();return _vm.deleteEvent(_vm.event)},"touchstart":function($event){$event.stopPropagation();$event.preventDefault();return _vm.touchDeleteEvent(_vm.event)}}},[_vm._v(_vm._s(_vm.vuecal.texts.deleteEvent))]):_vm._e(),_vm._t("event-renderer",null,{"event":_vm.event,"view":_vm.vuecal.view.id}),(_vm.resizable)?_c('div',{staticClass:"vuecal__event-resize-handle",on:{"mousedown":function($event){_vm.vuecal.editableEvents && _vm.vuecal.time && _vm.onDragHandleMouseDown($event, _vm.event)},"touchstart":function($event){_vm.vuecal.editableEvents && _vm.vuecal.time && _vm.onDragHandleMouseDown($event, _vm.event)}}}):_vm._e()],2)}
var eventvue_type_template_id_16d5fdf2_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-cal/event.vue?vue&type=template&id=16d5fdf2&lang=pug&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!/Users/simon/.config/yarn/global/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/event.vue?vue&type=script&lang=js&















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var eventvue_type_script_lang_js_ = ({
  props: {
    formattedDate: {
      type: String,
      default: ''
    },
    vuecal: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    event: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    cellEvents: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    split: {
      type: Number,
      default: 0
    },
    allDay: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    eventStyles: function eventStyles(event) {
      if (!this.vuecal.time || !event.startTime || this.vuecal.view.id === 'month' || this.allDay) return {};
      var resizeAnEvent = this.domEvents.resizeAnEvent;
      return {
        top: "".concat(event.top, "px"),
        height: "".concat(resizeAnEvent.newHeight && resizeAnEvent._eid === event._eid ? resizeAnEvent.newHeight : event.height, "px")
      };
    },
    eventClasses: function eventClasses(event) {
      var _this = this,
          _ref;

      var _this$domEvents = this.domEvents,
          clickHoldAnEvent = _this$domEvents.clickHoldAnEvent,
          focusAnEvent = _this$domEvents.focusAnEvent;
      var overlapping, overlapped, simultaneous;
      var forceLeft = false;
      var deletable = clickHoldAnEvent._eid && (clickHoldAnEvent._eid === event._eid || event.linked.find(function (e) {
        return e._eid === clickHoldAnEvent._eid;
      }));

      if (this.vuecal.view.id !== 'month') {
        overlapping = Object.keys(event.overlapping).length;
        overlapped = Object.keys(event.overlapped).length;
        simultaneous = Object.keys(event.simultaneous).length + 1;

        if (simultaneous >= 3) {
          var split3 = simultaneous - 1;
          Object.keys(event.simultaneous).forEach(function (_eid) {
            if (split3 && Object.keys(_this.cellEvents.find(function (e) {
              return e._eid === _eid;
            }).simultaneous).length + 1 < 3) {
              split3--;
            }
          });
          if (!split3) simultaneous = 2;
        } else if (simultaneous === 2) {
          var otherEvent = this.cellEvents.find(function (e) {
            return e._eid === Object.keys(event.simultaneous)[0];
          });

          if (otherEvent && Object.keys(otherEvent.overlapping).length && Object.keys(otherEvent.overlapped).length) {
            forceLeft = true;
          }
        }
      }

      return _ref = {}, _defineProperty(_ref, event.classes.join(' '), true), _defineProperty(_ref, 'vuecal__event--focus', focusAnEvent._eid === event._eid), _defineProperty(_ref, 'vuecal__event--background', event.background), _defineProperty(_ref, 'vuecal__event--deletable', deletable), _defineProperty(_ref, 'vuecal__event--overlapped', overlapped), _defineProperty(_ref, 'vuecal__event--overlapping', overlapping), _defineProperty(_ref, 'vuecal__event--split2', simultaneous === 2), _defineProperty(_ref, 'vuecal__event--split3', simultaneous >= 3), _defineProperty(_ref, 'vuecal__event--split-middle', overlapped && overlapping && simultaneous >= 3), _defineProperty(_ref, 'vuecal__event--split-left', forceLeft), _defineProperty(_ref, 'vuecal__event--all-day', event.allDay), _defineProperty(_ref, 'vuecal__event--multiple-days', Object.keys(event.multipleDays).length), _defineProperty(_ref, 'event-start', Object.keys(event.multipleDays).length && event.multipleDays.start), _defineProperty(_ref, 'event-middle', Object.keys(event.multipleDays).length && event.multipleDays.middle), _defineProperty(_ref, 'event-end', Object.keys(event.multipleDays).length && event.multipleDays.end), _ref;
    },
    // On an event.
    onMouseDown: function onMouseDown(e, event) {
      var touch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // Prevent a double mouse down on touch devices.
      if ('ontouchstart' in window && !touch) return false;
      var _this$domEvents2 = this.domEvents,
          clickHoldAnEvent = _this$domEvents2.clickHoldAnEvent,
          resizeAnEvent = _this$domEvents2.resizeAnEvent,
          focusAnEvent = _this$domEvents2.focusAnEvent; // If the delete button is already out and event is on focus then delete event.

      if (focusAnEvent._eid === event._eid && clickHoldAnEvent._eid === event._eid) {
        return true;
      } // Focus the clicked event.


      this.focusEvent(event);
      clickHoldAnEvent._eid = null; // Reinit click hold on each click.
      // Don't show delete button if dragging event.

      if (!resizeAnEvent.start && this.vuecal.editableEvents) {
        clickHoldAnEvent.timeoutId = setTimeout(function () {
          clickHoldAnEvent._eid = event._eid;
        }, clickHoldAnEvent.timeout);
      }
    },
    onMouseEnter: function onMouseEnter(e, event) {
      e.preventDefault();
      this.vuecal.emitWithEvent('event-mouse-enter', event);
    },
    onMouseLeave: function onMouseLeave(e, event) {
      e.preventDefault();
      this.vuecal.emitWithEvent('event-mouse-leave', event);
    },
    onTouchStart: function onTouchStart(e, event) {
      this.onMouseDown(e, event, true);
    },
    onClick: function onClick(e, event) {
      if (typeof this.vuecal.onEventClick === 'function') return this.vuecal.onEventClick(event, e);
    },
    onDblClick: function onDblClick(e, event) {
      if (typeof this.vuecal.onEventDblclick === 'function') return this.vuecal.onEventDblclick(event, e);
    },
    onDragHandleMouseDown: function onDragHandleMouseDown(e, event) {
      var start = 'ontouchstart' in window && e.touches ? e.touches[0].clientY : e.clientY;
      this.domEvents.resizeAnEvent = Object.assign(this.domEvents.resizeAnEvent, {
        start: start,
        originalHeight: event.height,
        newHeight: event.height,
        _eid: event._eid,
        split: event.split || null,
        startDate: event.multipleDays.startDate || event.startDate
      });
    },
    deleteEvent: function deleteEvent(event) {
      var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // Prevent a double mouse down on touch devices.
      if ('ontouchstart' in window && !touch) return false;
      deleteAnEvent(event, this.vuecal);
    },
    touchDeleteEvent: function touchDeleteEvent(event) {
      this.deleteEvent(event, true);
    },
    focusEvent: function focusEvent(event) {
      this.vuecal.emitWithEvent('event-focus', event);
      this.domEvents.focusAnEvent._eid = event._eid;
    }
  },
  computed: {
    resizable: function resizable() {
      return this.vuecal.editableEvents && this.vuecal.time && this.event.startTime && !this.allDay && !this.event.multipleDays.start && !this.event.multipleDays.middle && this.vuecal.view.id !== 'month';
    },
    domEvents: {
      get: function get() {
        return this.vuecal.domEvents;
      },
      set: function set(object) {
        this.vuecal.domEvents = object;
      }
    }
  },
  watch: {
    'event.background': function eventBackground(val) {
      // When the event background property changes, remove all the involved overlapping events
      // if setting to background or check cell overlapping again otherwise.
      if (val) {
        deleteLinkedEvents(this.event, this.cellEvents);
        this.event.overlapping = {};
        this.event.overlapped = {};
        this.event.simultaneous = {};
      } else if (this.vuecal.time) event_utils_checkCellOverlappingEvents(this.cellEvents, this.vuecal);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/event.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_eventvue_type_script_lang_js_ = (eventvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-cal/event.vue?vue&type=style&index=0&lang=scss&
var eventvue_type_style_index_0_lang_scss_ = __webpack_require__("9ff5");

// CONCATENATED MODULE: ./src/components/vue-cal/event.vue






/* normalize component */

var event_component = normalizeComponent(
  vue_cal_eventvue_type_script_lang_js_,
  eventvue_type_template_id_16d5fdf2_lang_pug_render,
  eventvue_type_template_id_16d5fdf2_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_cal_event = (event_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!/Users/simon/.config/yarn/global/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/cell.vue?vue&type=script&lang=js&










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var cellvue_type_script_lang_js_ = ({
  components: {
    Event: vue_cal_event
  },
  props: {
    // Vuecal main component options (props).
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    data: {
      type: Object,
      required: true
    },
    splits: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    minTimestamp: {
      type: Number,
      default: 0
    },
    maxTimestamp: {
      type: Number,
      default: 0
    },
    allDay: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkCellOverlappingEvents: function checkCellOverlappingEvents() {
      var _this = this;

      if (this.options.time) {
        if (this.splits.length) {
          this.splits.forEach(function (s, i) {
            return event_utils_checkCellOverlappingEvents(_this.splitEvents[i]);
          });
        } else event_utils_checkCellOverlappingEvents(this.events);
      }
    },
    isDOMElementAnEvent: function isDOMElementAnEvent(el) {
      return el.classList.contains('vuecal__event') || this.$parent.findAncestor(el, 'vuecal__event');
    },
    selectCell: function selectCell() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      cell_utils_selectCell(force, this.data.startDate, this.$parent);
    },
    onCellMouseDown: function onCellMouseDown(e) {
      var _this2 = this;

      var split = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var touch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // Prevent a double mouse down on touch devices.
      if ('ontouchstart' in window && !touch) return false;
      var clickHoldACell = this.domEvents.clickHoldACell; // If not mousedown on an event, click & hold to create an event.

      if (this.options.editableEvents && !this.isDOMElementAnEvent(e.target) && ['month', 'week', 'day'].includes(this.view)) {
        clickHoldACell.cellId = "".concat(this.$parent._uid, "_").concat(this.data.formattedDate);
        clickHoldACell.split = split;
        clickHoldACell.timeoutId = setTimeout(function () {
          if (clickHoldACell.cellId) {
            _this2.$parent.createEvent(_this2.data.formattedDate, e, clickHoldACell.split ? {
              split: clickHoldACell.split
            } : {});
          }
        }, clickHoldACell.timeout);
      }
    },
    onCellTouchStart: function onCellTouchStart(e) {
      var split = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // If not mousedown on an event.
      if (!this.isDOMElementAnEvent(e.target)) this.onCellMouseDown(e, split, true);
    }
  },
  computed: {
    isBeforeMinDate: function isBeforeMinDate() {
      return this.minTimestamp > this.data.endDate.getTime();
    },
    isAfterMaxDate: function isAfterMaxDate() {
      return this.maxTimestamp && this.maxTimestamp < this.data.startDate.getTime();
    },
    isDisabled: function isDisabled() {
      return this.isBeforeMinDate || this.isAfterMaxDate;
    },
    cssClasses: function cssClasses() {
      return {
        'vuecal__cell--has-splits': this.splits.length,
        'vuecal__cell--has-events': this.events.length,
        current: this.data.current,
        today: this.data.today,
        'out-of-scope': this.data.outOfScope,
        disabled: this.isDisabled,
        'before-min': this.isDisabled && this.isBeforeMinDate,
        'after-max': this.isDisabled && this.isAfterMaxDate,
        selected: this.$parent.selectedDateFormatted === this.data.formattedDate
      };
    },
    domEvents: {
      get: function get() {
        return this.$parent.domEvents;
      },
      set: function set(object) {
        this.$parent.domEvents = object;
      }
    },
    texts: function texts() {
      return this.$parent.texts;
    },
    view: function view() {
      return this.$parent.view.id;
    },
    transitionDirection: function transitionDirection() {
      return this.$parent.transitionDirection;
    },
    cellStyles: function cellStyles() {
      return {
        minWidth: this.view === 'week' && this.$parent.minCellWidth ? "".concat(this.$parent.minCellWidth, "px") : null
      };
    },
    events: {
      get: function get() {
        var _this3 = this;

        var events = []; // Events count on years/year view.

        if (['years', 'year'].includes(this.view) && (this.options.eventsCountOnYearView || 1)) {
          var cellStart = this.data.startDate.getTime();
          var cellEnd = this.data.endDate.getTime();
          events = this.$parent.events.filter(function (e) {
            var eventStart = new Date(e.start).getTime();
            var eventEnd = new Date(e.end).getTime();
            return eventStart >= cellStart && eventEnd <= cellEnd;
          });
        } // All the other views.
        else {
            events = this.$parent.mutableEvents[this.data.formattedDate] || []; // Position events with time in the timeline when there is a timeline and not in allDay slot.

            if (this.options.time && ['week', 'day'].includes(this.view) && !(this.options.showAllDayEvents && this.allDay)) {
              events.forEach(function (event) {
                // all-day events are positionned via css: top-0 & bottom-0.
                // So they behave as background events if not in allDay slot.
                // @todo: Do we want this or not?
                if (event.startTime && !event.allDay) updateEventPosition(event, _this3.$parent);
              });
            }

            this.$nextTick(this.checkCellOverlappingEvents);
            if (this.options.showAllDayEvents && this.view !== 'month') events = events.filter(function (e) {
              return !!e.allDay === _this3.allDay;
            });

            if (this.options.time && ['week', 'day'].includes(this.view) && !this.allDay) {
              events = events.filter(function (e) {
                return e.allDay || e.startTimeMinutes < _this3.options.timeTo && e.endTimeMinutes > _this3.options.timeFrom;
              });
            }
          }

        return events;
      },
      set: function set(events) {
        this.$parent.mutableEvents[this.data.formattedDate] = events;
      }
    },
    splitEvents: function splitEvents() {
      var splitsEventIndexes = {};
      this.events.forEach(function (e) {
        if (e.split) {
          if (!splitsEventIndexes[e.split]) splitsEventIndexes[e.split] = [];
          splitsEventIndexes[e.split].push(e);
        }
      });
      return splitsEventIndexes;
    },
    timelineVisible: function timelineVisible() {
      if (!this.data.today || !this.options.time || this.allDay || !['week', 'day'].includes(this.view)) return;
      var now = new Date();
      return now.getHours() * 60 + now.getMinutes() <= this.options.timeTo;
    },
    todaysTimePosition: function todaysTimePosition() {
      // Skip the Maths if not relevant.
      if (!this.data.today || !this.options.time) return;
      var now = new Date();
      var startTimeMinutes = now.getHours() * 60 + now.getMinutes();
      var minutesFromTop = startTimeMinutes - this.options.timeFrom;
      return Math.round(minutesFromTop * this.options.timeCellHeight / this.options.timeStep);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/cell.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_cellvue_type_script_lang_js_ = (cellvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-cal/cell.vue?vue&type=style&index=0&lang=scss&
var cellvue_type_style_index_0_lang_scss_ = __webpack_require__("d011");

// CONCATENATED MODULE: ./src/components/vue-cal/cell.vue






/* normalize component */

var cell_component = normalizeComponent(
  vue_cal_cellvue_type_script_lang_js_,
  cellvue_type_template_id_1c5c9ecc_lang_pug_render,
  cellvue_type_template_id_1c5c9ecc_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_cal_cell = (cell_component.exports);
// EXTERNAL MODULE: ./src/components/vue-cal/styles.scss
var styles = __webpack_require__("00aa");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!/Users/simon/.config/yarn/global/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-cal/index.vue?vue&type=script&lang=js&





























function vue_calvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function vue_calvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vue_calvue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vue_calvue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var vue_calvue_type_script_lang_js_ = ({
  name: "vue-cal",
  components: {
    "vuecal-cell": vue_cal_cell,
    "vuecal-header": header,
    WeekdaysHeadings: weekdays_headings
  },
  props: {
    locale: {
      type: String,
      default: "en"
    },
    hideViewSelector: {
      type: Boolean,
      default: false
    },
    hideTitleBar: {
      type: Boolean,
      default: false
    },
    hideBody: {
      type: Boolean,
      default: false
    },
    hideWeekends: {
      type: Boolean,
      default: false
    },
    disableViews: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultView: {
      type: String,
      default: "week"
    },
    todayButton: {
      type: Boolean,
      default: false
    },
    showAllDayEvents: {
      type: [Boolean, String],
      default: false
    },
    selectedDate: {
      type: [String, Date],
      default: ""
    },
    minDate: {
      type: [String, Date],
      default: ""
    },
    maxDate: {
      type: [String, Date],
      default: ""
    },
    startWeekOnSunday: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    xsmall: {
      type: Boolean,
      default: false
    },
    clickToNavigate: {
      type: Boolean,
      default: false
    },
    dblClickToNavigate: {
      type: Boolean,
      default: true
    },
    time: {
      type: Boolean,
      default: true
    },
    timeFrom: {
      type: Number,
      default: 0 // In minutes.

    },
    timeTo: {
      type: Number,
      default: 24 * 60 // In minutes.

    },
    timeStep: {
      type: Number,
      default: 60 // In minutes.

    },
    timeCellHeight: {
      type: Number,
      default: 40 // In pixels.

    },
    "12Hour": {
      type: Boolean,
      default: false
    },
    timeFormat: {
      type: String,
      default: ""
    },
    minCellWidth: {
      type: Number,
      default: 0
    },
    splitDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    events: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    editableEvents: {
      type: Boolean,
      default: false
    },
    noEventOverlaps: {
      type: Boolean,
      default: false
    },
    eventsOnMonthView: {
      type: [Boolean, String],
      default: false
    },
    eventsCountOnYearView: {
      type: Boolean,
      default: false
    },
    onEventClick: {
      type: Function,
      default: function _default() {}
    },
    onEventDblclick: {
      type: Function,
      default: function _default() {}
    },
    onEventCreate: {
      type: Function,
      default: function _default() {}
    },
    transitions: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      texts: this.locale === "en" ? __webpack_require__("7213") : {
        weekDays: Array(7).fill(""),
        months: Array(12).fill(""),
        years: "",
        year: "",
        month: "",
        week: "",
        day: "",
        today: "",
        noEvent: "",
        allDay: "",
        deleteEvent: "",
        createEvent: "",
        dateFormat: "DDDD mmmm d, yyyy"
      },
      ready: false,
      now: now,
      view: {
        id: "",
        title: "",
        startDate: null,
        endDate: null,
        selectedDate: null
      },
      eventIdIncrement: 1,
      domEvents: {
        resizeAnEvent: {
          _eid: null,
          // Only one at a time.
          startDate: null,
          start: null,
          originalHeight: 0,
          newHeight: 0,
          split: null
        },
        dragAnEvent: {
          _eid: null // Only one at a time.

        },
        focusAnEvent: {
          _eid: null // Only one at a time.

        },
        clickHoldAnEvent: {
          _eid: null,
          // Only one at a time.
          timeout: 1200,
          // Hold for 1.2s to delete an event.
          timeoutId: null
        },
        dblTapACell: {
          taps: 0,
          timeout: 500 // Allowed latency between first and second click.

        },
        clickHoldACell: {
          cellId: null,
          split: null,
          timeout: 1200,
          // Hold for 1.2s to create an event.
          timeoutId: null
        }
      },
      mutableEvents: {},
      // An indexed array of mutable events updated each time given events array changes.
      transitionDirection: "right"
    };
  },
  methods: {
    loadLocale: function loadLocale(locale) {
      // import(/* webpackInclude: /\.json$/, webpackChunkName: "[request]" */ `./i18n/${locale}`)
      //   .then(response => (this.texts = response.default))
      this.texts = __webpack_require__("4da1")("./".concat(locale, ".json"));
    },
    switchToNarrowerView: function switchToNarrowerView() {
      var _this = this;

      this.transitionDirection = "right";
      var views = Object.keys(this.views);
      views = views.slice(views.indexOf(this.view.id) + -1);
      var view = views.find(function (v) {
        return _this.views[v].enabled;
      });
      if (view) this.switchView(view);
    },
    switchView: function switchView(view) {
      var _this2 = this;

      var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var fromViewSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (this.transitions && fromViewSelector) {
        var views = Object.keys(this.views);
        this.transitionDirection = views.indexOf(this.view.id) > views.indexOf(view) ? "left" : "right";
      }

      this.view.events = [];
      this.view.id = view;
      this.view.firstCellDate = null; // For month view, if filling cells before 1st of month.

      this.view.lastCellDate = null; // For month view, if filling cells after current month.

      var dateTmp, endTime, formattedDate, dayEvents;

      if (!date) {
        date = this.view.selectedDate || this.view.startDate;
        if (view === "week") date = getPreviousFirstDayOfWeek(date, this.startWeekOnSunday);
      }

      switch (view) {
        case "years":
          // Always fill first cell with a multiple of 25 years, E.g. year 2000, or 2025.
          this.view.startDate = new Date(Math.floor(date.getFullYear() / 25) * 25 || 2000, 0, 1);
          this.view.endDate = new Date(this.view.startDate.getFullYear() + 25, 0, 1);
          this.view.endDate.setSeconds(-1); // End at 23:59:59.

          break;

        case "year":
          this.view.startDate = new Date(date.getFullYear(), 0, 1);
          this.view.endDate = new Date(date.getFullYear() + 1, 0, 1);
          this.view.endDate.setSeconds(-1); // End at 23:59:59.

          break;

        case "month":
          this.view.startDate = new Date(date.getFullYear(), date.getMonth(), 1);
          this.view.endDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
          this.view.endDate.setSeconds(-1); // End at 23:59:59.

          dateTmp = new Date(this.view.startDate);
          endTime = this.view.endDate.getTime(); // If the first day of the month is not a FirstDayOfWeek (Monday or Sunday), prepend missing days to the days array.

          var startDate = new Date(this.view.startDate);

          if (startDate.getDay() !== (this.startWeekOnSunday ? 0 : 1)) {
            startDate = getPreviousFirstDayOfWeek(startDate, this.startWeekOnSunday);
          } // Used in viewCells computed array & returned in emitted events.


          this.view.firstCellDate = startDate;
          this.view.lastCellDate = startDate.addDays(41); // Save out of scope events into the view object separated from the array of in-scope events.

          var currentMonth = this.view.startDate.getMonth();
          var cellDate = null;
          this.view.outOfScopeEvents = [];

          for (var i = 0; i < 42; i++) {
            // 42 cells (6 rows x 7 days).
            cellDate = startDate.addDays(i);

            if (currentMonth !== cellDate.getMonth()) {
              formattedDate = formatDate(cellDate, "yyyy-mm-dd", this.texts);
              dayEvents = this.mutableEvents[formattedDate] || [];

              if (dayEvents.length) {
                var _this$view$outOfScope;

                (_this$view$outOfScope = this.view.outOfScopeEvents).push.apply(_this$view$outOfScope, _toConsumableArray(dayEvents.map(function (e) {
                  return _this2.cleanupEvent(e);
                })));
              }
            }
          }

          while (dateTmp.getTime() <= endTime) {
            var _this$view$events;

            dateTmp = dateTmp.addDays(1);
            formattedDate = formatDate(dateTmp, "yyyy-mm-dd", this.texts); // Save the events of each day of month into view object.

            dayEvents = this.mutableEvents[formattedDate] || [];
            if (dayEvents.length) (_this$view$events = this.view.events).push.apply(_this$view$events, _toConsumableArray(dayEvents.map(function (e) {
              return _this2.cleanupEvent(e);
            })));
          }

          break;

        case "week":
          this.view.startDate = this.hideWeekends && this.startWeekOnSunday ? date.addDays(1) : date;
          this.view.endDate = date.addDays(7);
          this.view.endDate.setSeconds(-1); // End at 23:59:59.

          dateTmp = new Date(date);

          for (var _i = 0; _i < 7; _i++) {
            var _this$view$events2;

            formattedDate = formatDate(dateTmp.addDays(_i), "yyyy-mm-dd", this.texts);
            dayEvents = this.mutableEvents[formattedDate] || [];
            if (dayEvents.length) (_this$view$events2 = this.view.events).push.apply(_this$view$events2, _toConsumableArray(dayEvents.map(function (e) {
              return _this2.cleanupEvent(e);
            })));
          }

          break;

        case "day":
          this.view.startDate = date;
          this.view.endDate = new Date(date);
          this.view.endDate.setHours(23, 59, 59); // End at 23:59:59.

          dayEvents = this.mutableEvents[formatDate(date, "yyyy-mm-dd", this.texts)] || [];
          if (dayEvents.length) this.view.events = dayEvents.map(function (e) {
            return _this2.cleanupEvent(e);
          });
          break;
      }

      if (this.ready) {
        var params = vue_calvue_type_script_lang_js_objectSpread({
          view: view,
          startDate: this.view.startDate,
          endDate: this.view.endDate
        }, this.view.id === "month" ? {
          firstCellDate: this.view.firstCellDate,
          lastCellDate: this.view.lastCellDate,
          outOfScopeEvents: this.view.outOfScopeEvents
        } : {}, {
          events: this.view.events
        }, this.view.id === "week" ? {
          week: this.view.startDate.getWeek()
        } : {});

        this.$emit("view-change", params);
      }
    },
    findAncestor: function findAncestor(el, Class) {
      while ((el = el.parentElement) && !el.classList.contains(Class)) {}

      return el;
    },
    isDOMElementAnEvent: function isDOMElementAnEvent(el) {
      return el.classList.contains("vuecal__event") || this.findAncestor(el, "vuecal__event");
    },
    // Event resizing is started in cell component (onMouseDown) but place onMouseMove & onMouseUp
    // handlers in the single parent for performance.
    onMouseMove: function onMouseMove(e) {
      var resizeAnEvent = this.domEvents.resizeAnEvent;
      if (resizeAnEvent._eid === null) return;
      e.preventDefault();
      var y = "ontouchstart" in window ? e.touches[0].clientY : e.clientY;
      resizeAnEvent.newHeight = resizeAnEvent.originalHeight + (y - resizeAnEvent.start);
      var cellEvents = this.mutableEvents[resizeAnEvent.startDate];

      if (this.hasSplits && this.splitDays) {
        cellEvents = cellEvents.filter(function (e) {
          return e.split === resizeAnEvent.split;
        });
      }

      onResizeEvent(cellEvents, this);
    },
    onMouseUp: function onMouseUp(e) {
      var _this$domEvents = this.domEvents,
          focusAnEvent = _this$domEvents.focusAnEvent,
          resizeAnEvent = _this$domEvents.resizeAnEvent,
          clickHoldAnEvent = _this$domEvents.clickHoldAnEvent,
          clickHoldACell = _this$domEvents.clickHoldACell; // On event resize end, emit event if duration has changed.

      if (resizeAnEvent._eid && resizeAnEvent.newHeight !== resizeAnEvent.originalHeight) {
        var event = this.mutableEvents[resizeAnEvent.startDate].find(function (item) {
          return item._eid === resizeAnEvent._eid;
        });

        if (event) {
          this.emitWithEvent("event-change", event);
          this.emitWithEvent("event-duration-change", event);
        }
      } // If not mouse up on an event, unfocus any event except if just dragged.


      if (!this.isDOMElementAnEvent(e.target) && !resizeAnEvent._eid) {
        focusAnEvent._eid = null; // Cancel event focus.

        clickHoldAnEvent._eid = null; // Hide delete button.
      } // Prevent showing delete button if click and hold was not long enough.
      // Click & hold timeout happens in onMouseDown() in cell component.


      if (clickHoldAnEvent.timeoutId && !clickHoldAnEvent._eid) {
        clearTimeout(clickHoldAnEvent.timeoutId);
        clickHoldAnEvent.timeoutId = null;
      } // Prevent creating an event if click and hold was not long enough.


      if (clickHoldACell.timeoutId) {
        clearTimeout(clickHoldACell.timeoutId);
        clickHoldACell.timeoutId = null;
      } // Any mouse up must cancel event resizing.


      resizeAnEvent._eid = null;
      resizeAnEvent.start = null;
      resizeAnEvent.originalHeight = null;
      resizeAnEvent.newHeight = null;
    },
    onEventTitleBlur: function onEventTitleBlur(e, event) {
      var _this3 = this;

      // If no change cancel action.
      if (event.title === e.target.innerHTML) return;
      event.title = e.target.innerHTML;

      if (event.linked.daysCount) {
        event.linked.forEach(function (e) {
          var dayToModify = _this3.mutableEvents[e.date];
          dayToModify.find(function (e2) {
            return e2._eid === e._eid;
          }).title = event.title;
        });
      }

      this.emitWithEvent("event-change", event);
      this.emitWithEvent("event-title-change", event);
    },
    // Object of arrays of events indexed by dates.
    updateMutableEvents: function updateMutableEvents() {
      var _this4 = this;

      // eslint-disable-next-line
      this.mutableEvents = {}; // Group events into dates.

      this.events.map(function (event) {
        var _event$start$split = event.start.split(" "),
            _event$start$split2 = _slicedToArray(_event$start$split, 2),
            startDate = _event$start$split2[0],
            _event$start$split2$ = _event$start$split2[1],
            startTime = _event$start$split2$ === void 0 ? "" : _event$start$split2$;

        var _startTime$split = startTime.split(":"),
            _startTime$split2 = _slicedToArray(_startTime$split, 2),
            hoursStart = _startTime$split2[0],
            minutesStart = _startTime$split2[1];

        var startTimeMinutes = parseInt(hoursStart) * 60 + parseInt(minutesStart);

        var _event$end$split = event.end.split(" "),
            _event$end$split2 = _slicedToArray(_event$end$split, 2),
            endDate = _event$end$split2[0],
            _event$end$split2$ = _event$end$split2[1],
            endTime = _event$end$split2$ === void 0 ? "" : _event$end$split2$;

        var _endTime$split = endTime.split(":"),
            _endTime$split2 = _slicedToArray(_endTime$split, 2),
            hoursEnd = _endTime$split2[0],
            minutesEnd = _endTime$split2[1];

        var endTimeMinutes = parseInt(hoursEnd) * 60 + parseInt(minutesEnd);
        var multipleDays = startDate !== endDate; // Keep the event ids scoped to this calendar instance.
        // eslint-disable-next-line

        var _eid = "".concat(_this4._uid, "_").concat(_this4.eventIdIncrement++);

        event = Object.assign(vue_calvue_type_script_lang_js_objectSpread({}, eventDefaults, {
          _eid: _eid,
          overlapped: {},
          overlapping: {},
          simultaneous: {},
          multipleDays: {},
          startDate: startDate,
          startTime: startTime,
          startTimeMinutes: startTimeMinutes,
          endDate: endDate,
          endTime: endTime,
          endTimeMinutes: endTimeMinutes,
          classes: (event.class || "").split(" ")
        }), event); // Make array reactive for future events creations & deletions.

        if (!(event.startDate in _this4.mutableEvents)) _this4.$set(_this4.mutableEvents, event.startDate, []); // eslint-disable-next-line

        _this4.mutableEvents[event.startDate].push(event);

        if (multipleDays) {
          (function () {
            // Create an array of linked events to attach to each event piece (piece = 1 day),
            // So that deletion and modification reflects on all the pieces.
            var eventPieces = [];
            var oneDayInMs = 24 * 60 * 60 * 1000;

            var _startDate$split = startDate.split("-"),
                _startDate$split2 = _slicedToArray(_startDate$split, 3),
                y1 = _startDate$split2[0],
                m1 = _startDate$split2[1],
                d1 = _startDate$split2[2];

            var _endDate$split = endDate.split("-"),
                _endDate$split2 = _slicedToArray(_endDate$split, 3),
                y2 = _endDate$split2[0],
                m2 = _endDate$split2[1],
                d2 = _endDate$split2[2];

            startDate = new Date(y1, parseInt(m1) - 1, d1);
            endDate = new Date(y2, parseInt(m2) - 1, d2);
            var datesDiff = Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / oneDayInMs));
            var startDateFormatted = formatDate(startDate, "yyyy-mm-dd", _this4.texts); // Update First day event.

            event.multipleDays = {
              start: true,
              startDate: startDateFormatted,
              startTime: startTime,
              startTimeMinutes: startTimeMinutes,
              endDate: startDateFormatted,
              endTime: "24:00",
              endTimeMinutes: 24 * 60,
              daysCount: datesDiff + 1
            }; // Generate event pieces ids to link them all together
            // and update the first event linked events array with all ids of pieces.

            for (var i = 1; i <= datesDiff; i++) {
              var date = formatDate(new Date(startDate).addDays(i), "yyyy-mm-dd", _this4.texts);
              eventPieces.push({
                _eid: "".concat(_this4._uid, "_").concat(_this4.eventIdIncrement++),
                date: date
              });
            }

            event.linked = eventPieces; // Create 1 event per day and link them all.

            var _loop = function _loop(_i2) {
              var date = eventPieces[_i2 - 1].date;
              var linked = [{
                _eid: event._eid,
                date: event.startDate
              }].concat(_toConsumableArray(eventPieces.slice(0).filter(function (e) {
                return e._eid !== eventPieces[_i2 - 1]._eid;
              }))); // Make array reactive for future events creations & deletions.

              if (!(date in _this4.mutableEvents)) _this4.$set(_this4.mutableEvents, date, []);

              _this4.mutableEvents[date].push(vue_calvue_type_script_lang_js_objectSpread({}, event, {
                _eid: eventPieces[_i2 - 1]._eid,
                overlapped: {},
                overlapping: {},
                simultaneous: {},
                linked: linked,
                // All the dates in the multipleDays object property are related
                // to the current event piece (only 1 day) not the whole event.
                multipleDays: {
                  start: false,
                  middle: _i2 < datesDiff,
                  end: _i2 === datesDiff,
                  startDate: date,
                  startTime: "00:00",
                  startTimeMinutes: 0,
                  endDate: date,
                  endTime: _i2 === datesDiff ? endTime : "24:00",
                  endTimeMinutes: _i2 === datesDiff ? endTimeMinutes : 24 * 60,
                  daysCount: datesDiff + 1
                }
              }));
            };

            for (var _i2 = 1; _i2 <= datesDiff; _i2++) {
              _loop(_i2);
            }
          })();
        }

        return event;
      });
    },
    getPosition: function getPosition(e) {
      var rect = e.target.getBoundingClientRect();

      var _ref = "ontouchstart" in window && e.touches ? e.touches[0] : e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    },
    // Allow call from cell click & hold or external call via $refs.
    createEvent: function createEvent(formattedDate) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var eventOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var startTimeMinutes = 0;
      if (typeof e === "number") startTimeMinutes = e;else if (typeof_typeof(e) === "object") {
        var mouseY = this.getPosition(e).y;
        startTimeMinutes = mouseY * this.timeStep / parseInt(this.timeCellHeight) + this.timeFrom;
      }
      return event_utils_createAnEvent(formattedDate, startTimeMinutes, eventOptions, this);
    },
    // Prepare the event to return it with an emitted event.
    cleanupEvent: function cleanupEvent(event) {
      event = vue_calvue_type_script_lang_js_objectSpread({}, event); // Delete vue-cal specific props instead of returning a set of props so user
      // can place whatever they want inside an event and see it returned.

      var discardProps = ["height", "top", "overlapped", "overlapping", "simultaneous", "classes", "split"];

      for (var prop in event) {
        if (discardProps.includes(prop)) delete event[prop];
      }

      if (!event.multipleDays.daysCount) delete event.multipleDays; // Return date objects for easy manipulation.

      var _event$start$split3 = event.start.split(" "),
          _event$start$split4 = _slicedToArray(_event$start$split3, 2),
          date1 = _event$start$split4[0],
          time1 = _event$start$split4[1];

      var _ref2 = date1 && date1.split("-") || [0, 0, 0],
          _ref3 = _slicedToArray(_ref2, 3),
          y1 = _ref3[0],
          m1 = _ref3[1],
          d1 = _ref3[2];

      var _ref4 = time1 && time1.split(":") || [0, 0],
          _ref5 = _slicedToArray(_ref4, 2),
          h1 = _ref5[0],
          min1 = _ref5[1];

      event.startDate = new Date(y1, parseInt(m1) - 1, d1, h1, min1);

      var _event$end$split3 = event.end.split(" "),
          _event$end$split4 = _slicedToArray(_event$end$split3, 2),
          date2 = _event$end$split4[0],
          time2 = _event$end$split4[1];

      var _ref6 = date2 && date2.split("-") || [0, 0, 0],
          _ref7 = _slicedToArray(_ref6, 3),
          y2 = _ref7[0],
          m2 = _ref7[1],
          d2 = _ref7[2];

      var _ref8 = time2 && time2.split(":") || [0, 0],
          _ref9 = _slicedToArray(_ref8, 2),
          h2 = _ref9[0],
          min2 = _ref9[1];

      event.endDate = new Date(y2, parseInt(m2) - 1, d2, h2, min2);
      return event;
    },
    emitWithEvent: function emitWithEvent(eventName, event) {
      this.$emit(eventName, this.cleanupEvent(event));
    },
    updateSelectedDate: function updateSelectedDate(date) {
      if (date && typeof date === "string") date = date_utils_stringToDate(date);

      if (date && date instanceof Date) {
        if (this.view.selectedDate) this.transitionDirection = this.view.selectedDate.getTime() > date.getTime() ? "left" : "right"; // Select the day at midnight in order to allow fetching events on whole day.

        date.setHours(0, 0, 0);
        this.view.selectedDate = date;
        this.switchView(this.view.id);
      }
    }
  },
  created: function created() {
    if (this.locale !== "en") this.loadLocale(this.locale); // Init the array of events, then keep listening for changes in watcher.

    this.updateMutableEvents(this.events);
    this.view.id = this.defaultView;
    if (this.selectedDate) this.updateSelectedDate(this.selectedDate);else {
      this.view.selectedDate = this.now;
      this.switchView(this.defaultView);
    }
  },
  mounted: function mounted() {
    var hasTouch = "ontouchstart" in window;

    if (this.editableEvents) {
      window.addEventListener(hasTouch ? "touchmove" : "mousemove", this.onMouseMove, {
        passive: false
      });
      window.addEventListener(hasTouch ? "touchend" : "mouseup", this.onMouseUp);
    } // Disable context menu on touch devices on the whole vue-cal instance.


    if (hasTouch) {
      this.$refs.vuecal.oncontextmenu = function (e) {
        e.preventDefault();
        e.stopPropagation();
      };
    }

    var params = vue_calvue_type_script_lang_js_objectSpread({
      view: this.view.id,
      startDate: this.view.startDate,
      endDate: this.view.endDate
    }, this.view.id === "month" ? {
      firstCellDate: this.view.firstCellDate,
      lastCellDate: this.view.lastCellDate
    } : {}, {
      events: this.view.events
    }, this.view.id === "week" ? {
      week: this.view.startDate.getWeek()
    } : {});

    this.$emit("ready", params);
    this.ready = true;
  },
  beforeDestroy: function beforeDestroy() {
    var hasTouch = "ontouchstart" in window;
    window.removeEventListener(hasTouch ? "touchmove" : "mousemove", this.onMouseMove, {
      passive: false
    });
    window.removeEventListener(hasTouch ? "touchend" : "mouseup", this.onMouseUp);
  },
  computed: {
    selectedDateFormatted: function selectedDateFormatted() {
      return formatDate(this.view.selectedDate, "yyyy-mm-dd", this.texts);
    },
    views: function views() {
      return {
        day: {
          label: this.texts.day,
          enabled: !this.disableViews.includes("day")
        },
        week: {
          label: this.texts.week,
          enabled: !this.disableViews.includes("week")
        },
        month: {
          label: this.texts.month,
          enabled: !this.disableViews.includes("month")
        },
        year: {
          label: this.texts.year,
          enabled: !this.disableViews.includes("year")
        },
        years: {
          label: this.texts.years,
          enabled: !this.disableViews.includes("years")
        }
      };
    },
    hasTimeColumn: function hasTimeColumn() {
      return this.time && ["week", "day"].includes(this.view.id);
    },
    isShortMonthView: function isShortMonthView() {
      return this.view.id === "month" && this.eventsOnMonthView === "short";
    },
    // For week & day views.
    timeCells: function timeCells() {
      var timeCells = [];

      for (var i = this.timeFrom, max = this.timeTo; i < max; i += this.timeStep) {
        timeCells.push({
          hours: Math.floor(i / 60),
          minutes: i % 60,
          label: date_utils_formatTime(i, this.timeFormat || (this["12Hour"] ? "h:mm{am}" : "HH:mm")),
          value: i
        });
      }

      return timeCells;
    },
    // Whether the current view has days splits.
    hasSplits: function hasSplits() {
      return !!this.splitDays.length && ["week", "day"].includes(this.view.id);
    },
    minTimestamp: function minTimestamp() {
      var date = null;
      if (this.minDate && typeof this.minDate === "string") date = date_utils_stringToDate(this.minDate);else if (this.minDate && this.minDate instanceof Date) date = this.minDate;
      return date ? date.getTime() : 0;
    },
    maxTimestamp: function maxTimestamp() {
      var date = null;
      if (this.maxDate && typeof this.maxDate === "string") date = date_utils_stringToDate(this.maxDate);else if (this.maxDate && this.minDate instanceof Date) date = this.maxDate;
      return date ? date.getTime() : 0;
    },
    weekDays: function weekDays() {
      var weekDays = this.texts.weekDays; // Do not modify original for next instances.

      weekDays = weekDays.slice(0);
      if (this.startWeekOnSunday) weekDays.unshift(weekDays.pop());

      if (this.hideWeekends) {
        weekDays = this.startWeekOnSunday ? weekDays.slice(1, 6) : weekDays.slice(0, 5);
      }

      return weekDays.map(function (day) {
        return {
          label: day
        };
      });
    },
    weekDaysShort: function weekDaysShort() {
      var _this$texts$weekDaysS = this.texts.weekDaysShort,
          weekDaysShort = _this$texts$weekDaysS === void 0 ? null : _this$texts$weekDaysS;

      if (weekDaysShort) {
        // Do not modify original for next instances.
        weekDaysShort = weekDaysShort.slice(0);
        if (this.startWeekOnSunday) weekDaysShort.unshift(weekDaysShort.pop());

        if (this.hideWeekends) {
          weekDaysShort = this.startWeekOnSunday ? weekDaysShort.slice(1, 6) : weekDaysShort.slice(0, 5);
        }
      }

      return weekDaysShort && weekDaysShort.map(function (day) {
        return {
          label: day
        };
      });
    },
    weekDaysInHeader: function weekDaysInHeader() {
      return this.view.id === "month" || this.view.id === "week" && !this.minCellWidth;
    },
    months: function months() {
      return this.texts.months.map(function (month) {
        return {
          label: month
        };
      });
    },
    viewTitle: function viewTitle() {
      var title = "";
      var date = this.view.startDate;
      var year = date.getFullYear();
      var month = date.getMonth();

      switch (this.view.id) {
        case "years":
          title = this.texts.years;
          break;

        case "year":
          title = year;
          break;

        case "month":
          title = "".concat(this.months[month].label, " ").concat(year);
          break;

        case "week":
          var lastDayOfWeek = date.addDays(6);
          var formattedMonthYear = formatDate(date, this.xsmall ? "mmm yyyy" : "mmmm yyyy", this.texts); // If week is not ending in the same month it started in.

          if (lastDayOfWeek.getMonth() !== date.getMonth()) {
            var _formattedMonthYear$s = formattedMonthYear.split(" "),
                _formattedMonthYear$s2 = _slicedToArray(_formattedMonthYear$s, 2),
                m1 = _formattedMonthYear$s2[0],
                y1 = _formattedMonthYear$s2[1];

            var _formatDate$split = formatDate(lastDayOfWeek, this.xsmall ? "mmm yyyy" : "mmmm yyyy", this.texts).split(" "),
                _formatDate$split2 = _slicedToArray(_formatDate$split, 2),
                m2 = _formatDate$split2[0],
                y2 = _formatDate$split2[1];

            formattedMonthYear = y1 === y2 ? "".concat(m1, " - ").concat(m2, " ").concat(y1) : "".concat(m1, " ").concat(y1, " - ").concat(m2, " ").concat(y2);
          }

          title = "".concat(this.texts.week, " ").concat(date.getWeek(), " (").concat(formattedMonthYear, ")");
          break;

        case "day":
          title = formatDate(date, this.texts.dateFormat, this.texts);
          break;
      }

      return title;
    },
    viewCells: function viewCells() {
      var _this5 = this;

      var cells = [];
      var fromYear = null;
      var todayFound = false;

      switch (this.view.id) {
        case "years":
          fromYear = this.view.startDate.getFullYear();
          cells = Array.apply(null, Array(25)).map(function (cell, i) {
            var startDate = new Date(fromYear + i, 0, 1);
            var endDate = new Date(fromYear + i + 1, 0, 1);
            endDate.setSeconds(-1); // End at 23:59:59.

            return {
              startDate: startDate,
              formattedDate: formatDate(startDate, "yyyy-mm-dd", _this5.texts),
              endDate: endDate,
              content: fromYear + i,
              current: fromYear + i === _this5.now.getFullYear()
            };
          });
          break;

        case "year":
          fromYear = this.view.startDate.getFullYear();
          cells = Array.apply(null, Array(12)).map(function (cell, i) {
            var startDate = new Date(fromYear, i, 1);
            var endDate = new Date(fromYear, i + 1, 1);
            endDate.setSeconds(-1); // End at 23:59:59.

            return {
              startDate: startDate,
              formattedDate: formatDate(startDate, "yyyy-mm-dd", _this5.texts),
              endDate: endDate,
              content: _this5.xsmall ? _this5.months[i].label.substr(0, 3) : _this5.months[i].label,
              current: i === _this5.now.getMonth() && fromYear === _this5.now.getFullYear()
            };
          });
          break;

        case "month":
          var month = this.view.startDate.getMonth();
          var selectedDateAtMidnight = new Date(this.view.selectedDate.getTime());
          selectedDateAtMidnight.setHours(0, 0, 0, 0);
          todayFound = false;
          var firstCellDate = new Date(this.view.firstCellDate); // Create 42 cells (6 rows x 7 days) and populate them with days.

          cells = Array.apply(null, Array(42)).map(function (cell, i) {
            var startDate = firstCellDate.addDays(i);
            var endDate = new Date(startDate);
            endDate.setHours(23, 59, 59); // End at 23:59:59.
            // To increase performance skip checking isToday if today already found.

            var isToday = !todayFound && startDate && startDate.getDate() === _this5.now.getDate() && startDate.getMonth() === _this5.now.getMonth() && startDate.getFullYear() === _this5.now.getFullYear() && !todayFound++;
            return {
              startDate: startDate,
              formattedDate: formatDate(startDate, "yyyy-mm-dd", _this5.texts),
              endDate: endDate,
              content: startDate.getDate(),
              today: isToday,
              outOfScope: startDate.getMonth() !== month
            };
          });

          if (this.hideWeekends) {
            cells = cells.filter(function (cell) {
              return cell.startDate.getDay() > 0 && cell.startDate.getDay() < 6;
            });
          }

          break;

        case "week":
          todayFound = false;
          var firstDayOfWeek = this.view.startDate;
          cells = this.weekDays.map(function (cell, i) {
            var startDate = firstDayOfWeek.addDays(i);
            var endDate = new Date(startDate);
            endDate.setHours(23, 59, 59); // End at 23:59:59.

            return {
              startDate: startDate,
              formattedDate: formatDate(startDate, "yyyy-mm-dd", _this5.texts),
              endDate: endDate,
              today: !todayFound && isDateToday(startDate) && !todayFound++
            };
          });
          break;

        case "day":
          var startDate = this.view.startDate;
          var endDate = new Date(this.view.startDate);
          endDate.setHours(23, 59, 59); // End at 23:59:59.

          cells = [{
            startDate: startDate,
            formattedDate: formatDate(startDate, "yyyy-mm-dd", this.texts),
            endDate: endDate,
            today: isDateToday(startDate)
          }];
          break;
      }

      return cells;
    },
    cssClasses: function cssClasses() {
      var _ref10;

      return _ref10 = {}, _defineProperty(_ref10, "vuecal--".concat(this.view.id, "-view"), true), _defineProperty(_ref10, "vuecal--".concat(this.locale), this.locale), _defineProperty(_ref10, "vuecal--no-time", !this.time), _defineProperty(_ref10, "vuecal--view-with-time", this.hasTimeColumn), _defineProperty(_ref10, "vuecal--time-12-hour", this["12Hour"]), _defineProperty(_ref10, "vuecal--click-to-navigate", this.clickToNavigate), _defineProperty(_ref10, "vuecal--hide-weekends", this.hideWeekends), _defineProperty(_ref10, "vuecal--split-days", this.hasSplits), _defineProperty(_ref10, "vuecal--overflow-x", this.minCellWidth), _defineProperty(_ref10, "vuecal--small", this.small), _defineProperty(_ref10, "vuecal--xsmall", this.xsmall), _defineProperty(_ref10, "vuecal--no-event-overlaps", this.noEventOverlaps), _defineProperty(_ref10, "vuecal--dragging-event", this.domEvents.resizeAnEvent.start), _defineProperty(_ref10, "vuecal--events-on-month-view", this.eventsOnMonthView), _defineProperty(_ref10, "vuecal--short-events", this.view.id === "month" && this.eventsOnMonthView === "short"), _ref10;
    }
  },
  filters: {
    formatTime: function formatTime(value, format) {
      return date_utils_formatTime(value, format) || "";
    }
  },
  watch: {
    events: {
      handler: function handler(events, oldEvents) {
        this.updateMutableEvents(events);
      },
      deep: true
    },
    locale: function locale(_locale) {
      this.loadLocale(_locale);
    },
    selectedDate: function selectedDate(date) {
      this.updateSelectedDate(date);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-cal/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_vue_calvue_type_script_lang_js_ = (vue_calvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vue-cal/index.vue





/* normalize component */

var vue_cal_component = normalizeComponent(
  components_vue_calvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_cal = (vue_cal_component.exports);
// CONCATENATED MODULE: /Users/simon/.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vue_cal);



/***/ }),

/***/ "7213":
/***/ (function(module) {

module.exports = {"weekDays":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"years":"Years","year":"Year","month":"Month","week":"Week","day":"Day","today":"Today","noEvent":"No Event","allDay":"All day","deleteEvent":"Delete","createEvent":"Create an event","dateFormat":"DDDD mmmm d{S}, yyyy"};

/***/ }),

/***/ "72b9":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("6bc1");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7405":
/***/ (function(module) {

module.exports = {"weekDays":["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота","Неділя"],"months":["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],"years":"Роки","year":"Рік","month":"Місяць","week":"Тиждень","day":"День","today":"Сьогодні","noEvent":"Немає подій","allDay":"Весь день","deleteEvent":"Видалити","createEvent":"Створити подію","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "740c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "75e5":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("e843");
var aFunction = __webpack_require__("57c3");
var SPECIES = __webpack_require__("ad91")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "771e":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("57c3");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "774e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("593f");

/***/ }),

/***/ "7764":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("197a").f;
var has = __webpack_require__("3a3a");
var TAG = __webpack_require__("ad91")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "77f6":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7981":
/***/ (function(module) {

module.exports = {"weekDays":["Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota","Nedelja"],"months":["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],"years":"Godine","year":"Godina","month":"Mesec","week":"Sedmica","day":"Dan","today":"Danas","noEvent":"Nema događaja","allDay":"Celi dan","deleteEvent":"Obriši","createEvent":"Kreiraj događaj","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "7999":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("9fba");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "7c39":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("ad91")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "7cd4":
/***/ (function(module) {

module.exports = {"weekDays":["Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota","Nedjelja"],"months":["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],"years":"Godine","year":"Godina","month":"Mjesec","week":"Tjedan","day":"Dan","today":"Današnji dan","noEvent":"Nema događaja","allDay":"Cijeli dan","deleteEvent":"Obriši","createEvent":"Kreiraj događaj","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "7d1a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0c42");
var hide = __webpack_require__("86cb");
var has = __webpack_require__("3a3a");
var SRC = __webpack_require__("1548")('src');
var $toString = __webpack_require__("9985");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8ba7").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "7e37":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "83b4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("6706") && !__webpack_require__("175b")(function () {
  return Object.defineProperty(__webpack_require__("d332")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "83e9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("3002")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "843e":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("bb43");
var defined = __webpack_require__("27a2");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f13e");

/***/ }),

/***/ "86cb":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("197a");
var createDesc = __webpack_require__("310f");
module.exports = __webpack_require__("1efe") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "88b4":
/***/ (function(module) {

module.exports = {"weekDays":["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],"weekDaysShort":["一","二","三","四","五","六","日"],"months":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],"years":"年","year":"本年","month":"月","week":"周","day":"日","today":"今日","noEvent":"暂无活动","allDay":"整天","deleteEvent":"删除","createEvent":"新建活动","dateFormat":"yyyy mmmm d DDDD"};

/***/ }),

/***/ "89f4":
/***/ (function(module) {

module.exports = {"weekDays":["Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado","Domingo"],"months":["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],"years":"Anos","year":"Ano","month":"Mês","week":"Semana","day":"Dia","today":"Hoje","noEvent":"Sem eventos","allDay":"Dia inteiro","deleteEvent":"Remover","createEvent":"Criar um evento","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "8a3e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("9c7c");
var $includes = __webpack_require__("ad43")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("b68f")('includes');


/***/ }),

/***/ "8ad7":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("7e37");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "8ba7":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8c56":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c37b");
var defined = __webpack_require__("27a2");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "8d7d":
/***/ (function(module) {

module.exports = {"weekDays":["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"],"months":["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],"years":"Jahre","year":"Jahr","month":"Monat","week":"Woche","day":"Tag","today":"Heute","noEvent":"Keine Events","allDay":"Ganztätig","deleteEvent":"Löschen","createEvent":"Event erstellen","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "8f1b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("a18f");
var core = __webpack_require__("fb9d");
var ctx = __webpack_require__("d69e");
var hide = __webpack_require__("dd9d");
var has = __webpack_require__("c2b1");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "90a7":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "9121":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "9290":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("385f");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "931e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("e843");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "9486":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("9fba");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9589":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "962b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("9c7c");
var context = __webpack_require__("1ca3");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("7c39")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "9638":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("4683");
__webpack_require__("bcc7");
module.exports = __webpack_require__("6e44").f('iterator');


/***/ }),

/***/ "969d":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("8f1b");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("6706"), 'Object', { defineProperty: __webpack_require__("308d").f });


/***/ }),

/***/ "9985":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fcd2")('native-function-to-string', Function.toString);


/***/ }),

/***/ "9ba2":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("1f85");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "9c7c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0c42");
var core = __webpack_require__("8ba7");
var hide = __webpack_require__("86cb");
var redefine = __webpack_require__("7d1a");
var ctx = __webpack_require__("771e");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "9fba":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "9ff5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ef0a");
/* harmony import */ var _config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a18f":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "a288":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("308d");
var createDesc = __webpack_require__("2f69");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "a39e":
/***/ (function(module) {

module.exports = {"weekDays":["Pondelok","Utorok","Streda","Štvrtok","Piatok","Sobota","Nedeľa"],"months":["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"],"years":"Roky","year":"Rok","month":"Mesiac","week":"Týždeň","day":"Deň","today":"Dnes","noEvent":"Bez udalosti","allDay":"Celý deň","deleteEvent":"Odstrániť","createEvent":"Vytvoriť udalosť","dateFormat":"DDDD d. mmmm yyyy"};

/***/ }),

/***/ "a5cf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("1d5b");
var hiddenKeys = __webpack_require__("d67a").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "a65a":
/***/ (function(module) {

module.exports = {"weekDays":["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],"months":["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],"years":"Годы","year":"Год","month":"Месяц","week":"Неделя","day":"День","today":"Сегодня","noEvent":"Нет событий","allDay":"Весь день","deleteEvent":"Удалить","createEvent":"Создать событие","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "a6ff":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("a18f").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "a745":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("eebe");

/***/ }),

/***/ "a87d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e843");
var dPs = __webpack_require__("1d9c");
var enumBugKeys = __webpack_require__("90a7");
var IE_PROTO = __webpack_require__("5b3b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("c006")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("39a1").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a905":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("dff0");
var createDesc = __webpack_require__("2f69");
var toIObject = __webpack_require__("843e");
var toPrimitive = __webpack_require__("3ee1");
var has = __webpack_require__("c2b1");
var IE8_DOM_DEFINE = __webpack_require__("83b4");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("6706") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "aadb":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("67be")('wks');
var uid = __webpack_require__("cf29");
var Symbol = __webpack_require__("a18f").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "abf5":
/***/ (function(module) {

module.exports = {"weekDays":["Luni","Marți","Miercuri","Joi","Vineri","Sâmbăta","Duminică"],"months":["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],"years":"Ani","year":"An","month":"Lună","week":"Săptămână","day":"Zi","today":"Azi","noEvent":"Nici o interacțiune","allDay":"Toată ziua","deleteEvent":"Șterge","createEvent":"Adaugă un eveniment","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "acbd":
/***/ (function(module) {

module.exports = {"weekDays":["ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი","კვირა"],"months":["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],"years":"წლები","year":"წელი","month":"თვე","week":"კვირა","day":"დღე","today":"დღეს","noEvent":"ღონისძიება არ არის","allDay":"მთელი დღე","deleteEvent":"წაშლა","createEvent":"შექმენით ღონისძიება","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "ad11":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("9c7c");
var defined = __webpack_require__("ffa2");
var fails = __webpack_require__("77f6");
var spaces = __webpack_require__("c3ee");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "ad43":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("0340");
var toLength = __webpack_require__("9486");
var toAbsoluteIndex = __webpack_require__("7999");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "ad91":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("fcd2")('wks');
var uid = __webpack_require__("1548");
var Symbol = __webpack_require__("0c42").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "b258":
/***/ (function(module) {

module.exports = {"weekDays":["Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag","Zondag"],"months":["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],"years":"Jaren","year":"Jaar","month":"Maand","week":"Week","day":"Dag","today":"Vandaag","noEvent":"Geen afspraken","allDay":"Hele dag","deleteEvent":"Verwijderen","createEvent":"Nieuwe afspraak aanmaken","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "b3ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("04b9");
var anObject = __webpack_require__("e843");
var $flags = __webpack_require__("931e");
var DESCRIPTORS = __webpack_require__("1efe");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("7d1a")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("77f6")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "b43e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("0c42");
var has = __webpack_require__("3a3a");
var cof = __webpack_require__("7e37");
var inheritIfRequired = __webpack_require__("3d65");
var toPrimitive = __webpack_require__("72b9");
var fails = __webpack_require__("77f6");
var gOPN = __webpack_require__("6ae8").f;
var gOPD = __webpack_require__("cef6").f;
var dP = __webpack_require__("197a").f;
var $trim = __webpack_require__("ad11").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("a87d")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("1efe") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("7d1a")(global, NUMBER, $Number);
}


/***/ }),

/***/ "b68f":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("ad91")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("86cb")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "b810":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("308d");
var anObject = __webpack_require__("1f85");
var getKeys = __webpack_require__("ba67");

module.exports = __webpack_require__("6706") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "ba67":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("1d5b");
var enumBugKeys = __webpack_require__("d67a");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "bb43":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("385f");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "bb96":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("6bc1");
var anObject = __webpack_require__("e843");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("771e")(Function.call, __webpack_require__("cef6").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "bcc7":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("4a90");
var global = __webpack_require__("a18f");
var hide = __webpack_require__("dd9d");
var Iterators = __webpack_require__("9121");
var TO_STRING_TAG = __webpack_require__("aadb")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "bce9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("197a");
var createDesc = __webpack_require__("310f");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "bd5b":
/***/ (function(module) {

module.exports = {"weekDays":["الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت","الأحد"],"months":["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر"," ديسمبر"],"years":"سنوات","year":"سنة","month":"شهر","week":"أسبوع","day":"يوم","today":"اليوم","noEvent":"لا حدث","allDay":"طوال اليوم","deleteEvent":"حذف","createEvent":"إنشاء حدث","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "bf67":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "c006":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6bc1");
var document = __webpack_require__("0c42").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "c0f5":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("ba67");
var gOPS = __webpack_require__("214f");
var pIE = __webpack_require__("dff0");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "c2b1":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "c37b":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "c3ee":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "c5f8":
/***/ (function(module) {

module.exports = {"weekDays":["Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy","Chủ nhật"],"weekDaysShort":["T2","T3","T4","T5","T6","T7","CN"],"months":["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],"years":"Năm","year":"Năm nay","month":"Tháng","week":"Tuần","day":"Ngày","today":"Hôm nay","noEvent":"NKhông có Event","allDay":"Cả ngày","deleteEvent":"Xóa","createEvent":"Tạo event","dateFormat":"DDDD mmmm d yyyy"};

/***/ }),

/***/ "c6e0":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("9c7c");
var ownKeys = __webpack_require__("23fd");
var toIObject = __webpack_require__("0340");
var gOPD = __webpack_require__("cef6");
var createProperty = __webpack_require__("bce9");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "c786":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("da79");
var ITERATOR = __webpack_require__("aadb")('iterator');
var Iterators = __webpack_require__("9121");
module.exports = __webpack_require__("fb9d").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "c8bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("62fd");

/***/ }),

/***/ "c9a5":
/***/ (function(module) {

module.exports = {"weekDays":["Ponedeljek","Torek","Sreda","Četrtek","Petek","Sobota","Nedelja"],"months":["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],"years":"Leta","year":"Leto","month":"Mesec","week":"Teden","day":"Dan","today":"Danes","noEvent":"Ni dogodkov","allDay":"Cel dan","deleteEvent":"Odstrani","createEvent":"Ustvari dogodek","dateFormat":"DDDD mmmm d, yyyy"};

/***/ }),

/***/ "cb46":
/***/ (function(module) {

module.exports = {"weekDays":["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],"weekDaysShort":["一","二","三","四","五","六","日"],"months":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],"years":"年","year":"本年","month":"月","week":"周","day":"日","today":"今日","noEvent":"暫無活動","allDay":"整天","deleteEvent":"刪除","createEvent":"新建活動","dateFormat":"yyyy mmmm d DDDD"};

/***/ }),

/***/ "cef6":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("e4fd");
var createDesc = __webpack_require__("310f");
var toIObject = __webpack_require__("0340");
var toPrimitive = __webpack_require__("72b9");
var has = __webpack_require__("3a3a");
var IE8_DOM_DEFINE = __webpack_require__("2529");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("1efe") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "cf29":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "d011":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f744");
/* harmony import */ var _config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d01f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("df29");
var anObject = __webpack_require__("e843");
var speciesConstructor = __webpack_require__("75e5");
var advanceStringIndex = __webpack_require__("83e9");
var toLength = __webpack_require__("9486");
var callRegExpExec = __webpack_require__("0644");
var regexpExec = __webpack_require__("325d");
var fails = __webpack_require__("77f6");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("0c8c")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "d1c3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("ff15");
var $export = __webpack_require__("9c7c");
var redefine = __webpack_require__("7d1a");
var hide = __webpack_require__("86cb");
var Iterators = __webpack_require__("02fe");
var $iterCreate = __webpack_require__("653d");
var setToStringTag = __webpack_require__("7764");
var getPrototypeOf = __webpack_require__("50f7");
var ITERATOR = __webpack_require__("ad91")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "d332":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("26a0");
var document = __webpack_require__("a18f").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "d3ec":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("e843");
var toLength = __webpack_require__("9486");
var advanceStringIndex = __webpack_require__("83e9");
var regExpExec = __webpack_require__("0644");

// @@match logic
__webpack_require__("0c8c")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "d446":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("4960")('asyncIterator');


/***/ }),

/***/ "d53b":
/***/ (function(module) {

module.exports = {"weekDays":["دوشنبه","سه شنبه","چهار شنبه","پنج شنبه","جمعه","شنبه","یک شنبه"],"months":["ژانویه","فوریه","مارس","آوریل","می","ژوئن","ژوئیه","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"],"years":"سالها","year":"سال","month":"ماه","week":"هفته","day":"روز","today":"امروز","noEvent":"رویدادی نیست","allDay":"تمام روز","deleteEvent":"حذف","createEvent":"ایجاد یک رویداد","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "d585":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("771e");
var IObject = __webpack_require__("0a60");
var toObject = __webpack_require__("6a8c");
var toLength = __webpack_require__("9486");
var asc = __webpack_require__("e1be");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "d67a":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "d69e":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("3b96");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d733":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6bc1");
var isArray = __webpack_require__("8ad7");
var SPECIES = __webpack_require__("ad91")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "d889":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("1efe");
var getKeys = __webpack_require__("e0d1");
var gOPS = __webpack_require__("bf67");
var pIE = __webpack_require__("e4fd");
var toObject = __webpack_require__("6a8c");
var IObject = __webpack_require__("0a60");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("77f6")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "da79":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("385f");
var TAG = __webpack_require__("aadb")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "da8a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("740c");
/* harmony import */ var _config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dbb8":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("aadb")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "dd9d":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("308d");
var createDesc = __webpack_require__("2f69");
module.exports = __webpack_require__("6706") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "df29":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("6bc1");
var cof = __webpack_require__("7e37");
var MATCH = __webpack_require__("ad91")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "dff0":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "e077":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("7e37");
var TAG = __webpack_require__("ad91")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "e0d1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("07c5");
var enumBugKeys = __webpack_require__("90a7");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "e131":
/***/ (function(module) {

module.exports = {"weekDays":["Hétfo","Kedd","Szerda","Csütörtök","Péntek","Szombat","Vasárnap"],"months":["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],"years":"Évek","year":"Év","month":"Hónap","week":"Hét","day":"Nap","today":"Mai nap","noEvent":"Nincs esemény","allDay":"Egész nap","deleteEvent":"Esemény törlese","createEvent":"Esemény létrehozása","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "e1be":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("d733");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "e240":
/***/ (function(module) {

module.exports = {"weekDays":["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],"months":["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],"years":"Años","year":"Año","month":"Mes","week":"Semana","day":"Día","today":"Hoy","noEvent":"No hay evento","allDay":"Todo el día","deleteEvent":"Borrar","createEvent":"Crear un evento","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "e3ad":
/***/ (function(module) {

module.exports = {"weekDays":["Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota","Neděle"],"months":["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"],"years":"Roky","year":"Rok","month":"Měsíc","week":"Týden","day":"Den","today":"Dnes","noEvent":"Bez událostí","allDay":"Celý den","deleteEvent":"Odstranit","createEvent":"Vytvořit událost","dateFormat":"DDDD d. mmmm yyyy"};

/***/ }),

/***/ "e4fd":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "e5bc":
/***/ (function(module) {

module.exports = {"weekDays":["Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag","Søndag"],"months":["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],"years":"År (flertal)","year":"År","month":"Måned","week":"Uge","day":"Dag","today":"I dag","noEvent":"Ingen begivenhed","allDay":"Hele dagen","deleteEvent":"Slet","createEvent":"Opret et event","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "e843":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6bc1");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ea0f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("3a39");
var descriptor = __webpack_require__("2f69");
var setToStringTag = __webpack_require__("1b25");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("dd9d")(IteratorPrototype, __webpack_require__("aadb")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "ec5f":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("8f1b");

$export($export.S, 'Array', { isArray: __webpack_require__("9290") });


/***/ }),

/***/ "ecd3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__("5aa3")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "eebe":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("ec5f");
module.exports = __webpack_require__("fb9d").Array.isArray;


/***/ }),

/***/ "eed7":
/***/ (function(module) {

module.exports = {"weekDays":["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica"],"months":["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],"years":"Anni","year":"Anno","month":"Mese","week":"Settimana","day":"Giorno","today":"Oggi","noEvent":"No evento","allDay":"Tutto giorno","deleteEvent":"Cancellare","createEvent":"Creare un evento","dateFormat":"DDDD d mmmm yyyy"};

/***/ }),

/***/ "ef0a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f12a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f13e":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("969d");
var $Object = __webpack_require__("fb9d").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "f1ef":
/***/ (function(module) {

module.exports = {"weekDays":["Mandag","Tisdag","Onsdag","Torsdag","Fredag","Lørdag","Søndag"],"months":["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],"years":"Velg år","year":"År","month":"Måned","week":"Uke","day":"Dag","today":"Idag","noEvent":"Ingen hendelse","allDay":"Hele dagen","deleteEvent":"Ta bort","createEvent":"Ny hendelse","dateFormat":"DDDD den d mmmm yyyy"};

/***/ }),

/***/ "f2d2":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("cf29")('meta');
var isObject = __webpack_require__("26a0");
var has = __webpack_require__("c2b1");
var setDesc = __webpack_require__("308d").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("175b")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "f718":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("6a8c");
var $keys = __webpack_require__("e0d1");

__webpack_require__("2ddd")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "f744":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f8d9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("1f85");
var get = __webpack_require__("1186");
module.exports = __webpack_require__("fb9d").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "fada":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("a18f");
var has = __webpack_require__("c2b1");
var DESCRIPTORS = __webpack_require__("6706");
var $export = __webpack_require__("8f1b");
var redefine = __webpack_require__("682c");
var META = __webpack_require__("f2d2").KEY;
var $fails = __webpack_require__("175b");
var shared = __webpack_require__("67be");
var setToStringTag = __webpack_require__("1b25");
var uid = __webpack_require__("cf29");
var wks = __webpack_require__("aadb");
var wksExt = __webpack_require__("6e44");
var wksDefine = __webpack_require__("4960");
var enumKeys = __webpack_require__("c0f5");
var isArray = __webpack_require__("9290");
var anObject = __webpack_require__("1f85");
var isObject = __webpack_require__("26a0");
var toObject = __webpack_require__("437b");
var toIObject = __webpack_require__("843e");
var toPrimitive = __webpack_require__("3ee1");
var createDesc = __webpack_require__("2f69");
var _create = __webpack_require__("3a39");
var gOPNExt = __webpack_require__("4c93");
var $GOPD = __webpack_require__("a905");
var $GOPS = __webpack_require__("214f");
var $DP = __webpack_require__("308d");
var $keys = __webpack_require__("ba67");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("a5cf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("dff0").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("2eba")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("dd9d")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "fb9d":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "fcd2":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8ba7");
var global = __webpack_require__("0c42");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("ff15") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "ff15":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "ffa2":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ })

/******/ })["default"];