'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ESComplexProject = require('./ESComplexProject.js');

var _ESComplexProject2 = _interopRequireDefault(_ESComplexProject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Exports the default instance of ESComplexProject which is associated with the main entry in `package.json`.
 * It should be noted that this default instance doesn't accept user options for ESComplexProject initialization.
 */
exports.default = new _ESComplexProject2.default();
module.exports = exports['default'];