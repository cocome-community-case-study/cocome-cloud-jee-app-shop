var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../framework/Service"], function (require, exports, Service_1) {
    "use strict";
    var CartService = (function (_super) {
        __extends(CartService, _super);
        function CartService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.items = [];
            _this.getItemsCount = function () {
                return _this.items.length;
            };
            _this.addItem = function (item) {
                _this.items.push(item);
            };
            _this.clear = function () {
                _this.items = [];
            };
            _this.removeItem = function (item) {
                var index = _this.items.indexOf(item);
                if (index > -1) {
                    _this.items.splice(index, 1);
                }
            };
            _this.getItems = function () {
                return _this.items;
            };
            return _this;
        }
        CartService.prototype.initService = function () {
        };
        CartService.prototype.closeService = function () {
        };
        return CartService;
    }(Service_1.Service));
    exports.CartService = CartService;
});
//# sourceMappingURL=CartService.js.map