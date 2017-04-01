var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../framework/PageState"], function (require, exports, PageState_1) {
    "use strict";
    var LoginPageState = (function (_super) {
        __extends(LoginPageState, _super);
        function LoginPageState() {
            _super.apply(this, arguments);
        }
        LoginPageState.prototype.getPageName = function () {
            return "login";
        };
        return LoginPageState;
    }(PageState_1.PageState));
    exports.LoginPageState = LoginPageState;
});
//# sourceMappingURL=LoginPageState.js.map