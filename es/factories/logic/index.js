function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Scope from '.././scope';
import { path2Pieces, pieces2Path, last, uniq } from '../../tools';

var Logic = function (_Scope) {
  _inherits(Logic, _Scope);

  function Logic(pathname) {
    _classCallCheck(this, Logic);

    var _this = _possibleConstructorReturn(this, _Scope.call(this, pathname));

    _this.factory = 'Logic';
    _this.splitAt = 'first';
    return _this;
  }

  Logic.prototype.cut = function cut(pieces) {
    return {
      scopeProp: pieces.slice(0, 1).join(this.pathname),
      relativePath: pieces.slice(1).join(this.pathname)
    };
  };

  return Logic;
}(Scope);

export default Logic;