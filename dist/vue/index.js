!function(e,o){if("function"==typeof define&&define.amd)define(["./observer.js"],o);else if("undefined"!=typeof exports)o(require("./observer.js"));else{var n={exports:{}};o(e.observer),e.index=n.exports}}(this,function(e){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var n=o(e);window.Observer=n["default"],console.log("======================================"),console.log("定义了全局的Observer，可在控制台中测试。"),console.log("======================================");var r={a:1,b:2},s=new n["default"](r);console.log(s.b),console.log(s.a),s.b=200});