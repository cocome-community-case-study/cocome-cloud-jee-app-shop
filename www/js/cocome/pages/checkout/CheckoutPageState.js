var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../framework/PageState"], function (require, exports, PageState_1) {
    "use strict";
    var CheckoutPageState = (function (_super) {
        __extends(CheckoutPageState, _super);
        function CheckoutPageState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CheckoutPageState.prototype.getPageName = function () {
            return "checkout";
        };
        return CheckoutPageState;
    }(PageState_1.PageState));
    exports.CheckoutPageState = CheckoutPageState;
});
//# sourceMappingURL=CheckoutPageState.js.map