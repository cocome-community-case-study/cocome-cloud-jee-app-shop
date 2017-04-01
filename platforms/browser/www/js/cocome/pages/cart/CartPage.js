var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../framework/Page", "../../uicomponents/ToolbarComponent", "../../uicomponents/SearchComponent", "../../../framework/PageUiComponent", "../../../framework/ServiceHolder", "./CartPageState", "../../../main", "../checkout/CheckoutPageState"], function (require, exports, Page_1, ToolbarComponent_1, SearchComponent_1, PageUiComponent_1, ServiceHolder_1, CartPageState_1, main_1, CheckoutPageState_1) {
    "use strict";
    var CartPage = (function (_super) {
        __extends(CartPage, _super);
        function CartPage() {
            _super.apply(this, arguments);
        }
        CartPage.prototype.updatePage = function (pageState) {
            console.log("Cartpage", this.getDomNode());
            this.cartService = ServiceHolder_1.ServiceHolder.getInstance().getService("cart");
            this.toolbar = new ToolbarComponent_1.ToolbarComponent("Cart", this.cartService.getItemsCount());
            this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));
            this.search = new SearchComponent_1.SearchComponent("");
            this.search.applyBinding(this.getContentDomNode().find("#search"));
            console.log(this.cartService.getItems());
            this.uicomponent = new CartPageComponent(this.toolbar);
            this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
        };
        CartPage.prototype.getDefaultPageState = function () {
            return new CartPageState_1.CartPageState();
        };
        CartPage.prototype.closePage = function () {
        };
        return CartPage;
    }(Page_1.Page));
    exports.CartPage = CartPage;
    var CartPageComponent = (function (_super) {
        __extends(CartPageComponent, _super);
        function CartPageComponent(toolbar) {
            _super.call(this);
            this.model = new CartPageComponentModel(toolbar);
        }
        CartPageComponent.prototype.getModel = function () {
            return this.model;
        };
        return CartPageComponent;
    }(PageUiComponent_1.PageUiComponent));
    var CartPageComponentModel = (function () {
        function CartPageComponentModel(toolbar) {
            var _this = this;
            this.toolbar = toolbar;
            this.items = ko.computed(function () {
                return ServiceHolder_1.ServiceHolder.getInstance().getService("cart").getItems();
            }, this.sum);
            this.sum = ko.computed(function () {
                var sum = 0;
                for (var _i = 0, _a = _this.items(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    sum = sum + item.getPrice();
                }
                return sum;
            }, this.items);
            this.remove = function (item) {
                ServiceHolder_1.ServiceHolder.getInstance().getService("cart").removeItem(item);
                _this.sum.notifySubscribers();
                _this.items.notifySubscribers();
                _this.toolbar.recalculate();
            };
            this.buy = function () {
                if (ServiceHolder_1.ServiceHolder.getInstance().getService("login").isUserLogedIn) {
                    main_1.main.app.openPage(new CheckoutPageState_1.CheckoutPageState());
                }
                else {
                    ons.notification.alert({ message: "Please login first!" });
                }
            };
        }
        return CartPageComponentModel;
    }());
});
//# sourceMappingURL=CartPage.js.map