var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../main", "../../framework/UiComponent", "../pages/cart/CartPageState", "../../framework/ServiceHolder"], function (require, exports, main_1, UiComponent_1, CartPageState_1, ServiceHolder_1) {
    "use strict";
    var ToolbarComponent = (function (_super) {
        __extends(ToolbarComponent, _super);
        function ToolbarComponent(title, items) {
            var _this = this;
            _super.call(this);
            this.setTitle = function (title) {
                _this.model.setTitle(title);
            };
            this.recalculate = function () {
                _this.model.recalculate();
            };
            this.model = new ToolbarComponentModel(title);
        }
        ToolbarComponent.prototype.getModel = function () {
            return this.model;
        };
        return ToolbarComponent;
    }(UiComponent_1.UiComponent));
    exports.ToolbarComponent = ToolbarComponent;
    var ToolbarComponentModel = (function () {
        function ToolbarComponentModel(title) {
            var _this = this;
            this.setTitle = function (title) {
                _this.toolbar.title = title;
            };
            this.toolbar = {};
            this.toolbar.title = title;
            this.toolbar.dummy = ko.observable();
            this.toolbar.cartItems = ko.computed(function () {
                _this.toolbar.dummy();
                var cartService = ServiceHolder_1.ServiceHolder.getInstance().getService("cart");
                return cartService.getItemsCount();
            });
            this.toolbar.recalculate = function () {
                this.dummy.notifySubscribers();
            };
            this.toolbar.openMenu = function () {
                main_1.main.app.openMenu();
            };
            this.toolbar.openCart = function () {
                main_1.main.app.openPage(new CartPageState_1.CartPageState());
            };
        }
        ToolbarComponentModel.prototype.setCartItems = function (items) {
            this.toolbar.cartItems = items;
        };
        ToolbarComponentModel.prototype.recalculate = function () {
            this.toolbar.recalculate();
        };
        return ToolbarComponentModel;
    }());
});
//# sourceMappingURL=ToolbarComponent.js.map