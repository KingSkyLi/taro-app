"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexStore = require("./index.store.js");

var _indexStore2 = _interopRequireDefault(_indexStore);

var _testStore = require("./test.store.js");

var _testStore2 = _interopRequireDefault(_testStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stores = {
  indexStore: _indexStore2.default,
  testStore: _testStore2.default
};

exports.default = stores;