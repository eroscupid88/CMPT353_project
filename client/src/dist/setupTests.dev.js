"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("@wojtekmaj/enzyme-adapter-react-17"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact["default"]()
});

if (global.document) {
  document.createRange = function () {
    return {
      setStart: function setStart() {},
      setEnd: function setEnd() {},
      commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document
      }
    };
  };
}