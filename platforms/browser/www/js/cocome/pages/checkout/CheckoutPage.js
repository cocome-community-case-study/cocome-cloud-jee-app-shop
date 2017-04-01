var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../framework/Page", "../../uicomponents/ToolbarComponent", "../../uicomponents/SearchComponent", "../../../framework/PageUiComponent", "../../../framework/ServiceHolder", "./CheckoutPageState", "../../types/Creditcard", "../index/IndexPageState", "../../../main"], function (require, exports, Page_1, ToolbarComponent_1, SearchComponent_1, PageUiComponent_1, ServiceHolder_1, CheckoutPageState_1, Creditcard_1, IndexPageState_1, main_1) {
    "use strict";
    var CheckoutPage = (function (_super) {
        __extends(CheckoutPage, _super);
        function CheckoutPage() {
            _super.apply(this, arguments);
        }
        CheckoutPage.prototype.updatePage = function (pageState) {
            console.log("CheckoutPage", this.getDomNode());
            this.cartService = ServiceHolder_1.ServiceHolder.getInstance().getService("cart");
            this.toolbar = new ToolbarComponent_1.ToolbarComponent("Checkout", this.cartService.getItemsCount());
            this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));
            this.search = new SearchComponent_1.SearchComponent("");
            this.search.applyBinding(this.getContentDomNode().find("#search"));
            console.log(this.cartService.getItems());
            this.uicomponent = new CheckoutPageComponent(this.toolbar);
            this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
        };
        CheckoutPage.prototype.getDefaultPageState = function () {
            return new CheckoutPageState_1.CheckoutPageState();
        };
        CheckoutPage.prototype.closePage = function () {
        };
        return CheckoutPage;
    }(Page_1.Page));
    exports.CheckoutPage = CheckoutPage;
    var CheckoutPageComponent = (function (_super) {
        __extends(CheckoutPageComponent, _super);
        function CheckoutPageComponent(toolbar) {
            _super.call(this);
            this.model = new CheckoutPageComponentModel(toolbar);
        }
        CheckoutPageComponent.prototype.getModel = function () {
            return this.model;
        };
        return CheckoutPageComponent;
    }(PageUiComponent_1.PageUiComponent));
    var CheckoutPageComponentModel = (function () {
        function CheckoutPageComponentModel(toolbar) {
            var _this = this;
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
            this.cards = ko.computed(function () {
                return ServiceHolder_1.ServiceHolder.getInstance().getService("creditcard").getCarts();
            }, this);
            this.addCreditcard = function () {
                ons.notification.prompt({
                    message: "Please enter the Creditcard", title: "Creditcard", callback: function (name) {
                        ons.notification.prompt({
                            message: "Please enter the Creditcard Pin", title: "Pin", callback: function (pin) {
                                ServiceHolder_1.ServiceHolder.getInstance().getService("creditcard").addCard(new Creditcard_1.Creditcard(Math.round(Math.random() * 300), name, pin));
                                _this.cards.notifySubscribers();
                            }
                        });
                    }
                });
            };
            this.buy = function () {
                var cid = _this.fixKnockoutBug(_this.card());
                console.log(cid);
                var card = ServiceHolder_1.ServiceHolder.getInstance().getService("creditcard").getCartById(_this.fixKnockoutBug(cid));
                console.log(card);
                var options = {
                    message: "Please enter the PIN for " + card.getName(), inputType: "password", title: "Creditcard", callback: function (pin) {
                        if (!ServiceHolder_1.ServiceHolder.getInstance().getService("creditcard").checkPin(card, pin)) {
                            ons.notification.alert({ message: "Pin is wrong!" });
                        }
                        else {
                            var store = ServiceHolder_1.ServiceHolder.getInstance().getService("selectedStore").selectedStore;
                            if (ServiceHolder_1.ServiceHolder.getInstance().getService("sale").doSale(store, _this.items(), card)) {
                                ons.notification.alert({ message: "Sale successful!", callback: function () {
                                        ServiceHolder_1.ServiceHolder.getInstance().getService("cart").clear();
                                        main_1.main.app.openPage(new IndexPageState_1.IndexPageState);
                                    } });
                            }
                            else {
                                ons.notification.alert({ message: "Sale failed!" });
                            }
                        }
                    }
                };
                ons.notification.prompt(options);
            };
            this.card = ko.observableArray([]);
        }
        CheckoutPageComponentModel.prototype.fixKnockoutBug = function (numbers) {
            return numbers;
        };
        return CheckoutPageComponentModel;
    }());
});
//# sourceMappingURL=CheckoutPage.js.map