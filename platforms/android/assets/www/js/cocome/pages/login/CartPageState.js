var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../framework/PageState"], function (require, exports, PageState_1) {
    "use strict";
    var CartPageState = (function (_super) {
        __extends(CartPageState, _super);
        function CartPageState() {
            _super.apply(this, arguments);
        }
        CartPageState.prototype.getPageName = function () {
            return "cart";
        };
        return CartPageState;
    }(PageState_1.PageState));
    exports.CartPageState = CartPageState;
});
//# sourceMappingURL=CartPageState.js.map