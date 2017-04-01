var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../framework/Page", "../../uicomponents/ToolbarComponent", "../../uicomponents/SearchComponent", "../../../framework/PageUiComponent", "../../../framework/ServiceHolder", "./LoginPageState", "../index/IndexPageState", "../../../main"], function (require, exports, Page_1, ToolbarComponent_1, SearchComponent_1, PageUiComponent_1, ServiceHolder_1, LoginPageState_1, IndexPageState_1, main_1) {
    "use strict";
    var LoginPage = (function (_super) {
        __extends(LoginPage, _super);
        function LoginPage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LoginPage.prototype.updatePage = function (pageState) {
            console.log("Loginpage", this.getDomNode());
            this.cartService = ServiceHolder_1.ServiceHolder.getInstance().getService("cart");
            this.toolbar = new ToolbarComponent_1.ToolbarComponent("Login", this.cartService.getItemsCount());
            this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));
            this.search = new SearchComponent_1.SearchComponent("");
            this.search.applyBinding(this.getContentDomNode().find("#search"));
            console.log(this.cartService.getItems());
            this.uicomponent = new LoginPageComponent();
            this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
        };
        LoginPage.prototype.getDefaultPageState = function () {
            return new LoginPageState_1.LoginPageState();
        };
        LoginPage.prototype.closePage = function () {
        };
        return LoginPage;
    }(Page_1.Page));
    exports.LoginPage = LoginPage;
    var LoginPageComponent = (function (_super) {
        __extends(LoginPageComponent, _super);
        function LoginPageComponent() {
            var _this = _super.call(this) || this;
            _this.model = new LoginPageComponentModel();
            return _this;
        }
        LoginPageComponent.prototype.getModel = function () {
            return this.model;
        };
        return LoginPageComponent;
    }(PageUiComponent_1.PageUiComponent));
    var LoginPageComponentModel = (function () {
        function LoginPageComponentModel() {
            var _this = this;
            this.username = ko.observable("");
            this.password = ko.observable("");
            this.login = function () {
                var ok = ServiceHolder_1.ServiceHolder.getInstance().getService("login").loginUser(_this.username(), _this.password());
                if (!ok) {
                    ons.notification.alert({ message: "Login failed!" });
                    _this.password("");
                }
                else {
                    ons.notification.alert({
                        message: "Login successful!", callback: function () {
                            main_1.main.app.openPage(new IndexPageState_1.IndexPageState());
                        }
                    });
                    _this.password("");
                }
            };
        }
        return LoginPageComponentModel;
    }());
});
//# sourceMappingURL=LoginPage.js.map