"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.grabRelevantAssets = void 0;

var _grabRelevantAssets = _interopRequireDefault(require("./methods/grabRelevantAssets"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Methods
// takes in config
const config = {
  targetFolder: "",
  outputThemeFolder: ""
};

const run = () => {}; // Named exports


const grabRelevantAssets = _grabRelevantAssets.default; // Default Export

exports.grabRelevantAssets = grabRelevantAssets;
var _default = run;
exports.default = _default;
