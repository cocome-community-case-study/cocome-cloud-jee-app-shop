var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../framework/Page", "../../uicomponents/ToolbarComponent", "../../uicomponents/SearchComponent", "../../../framework/PageUiComponent", "../../../framework/ServiceHolder", "./ItemPageState", "../../../framework/I18n"], function (require, exports, Page_1, ToolbarComponent_1, SearchComponent_1, PageUiComponent_1, ServiceHolder_1, ItemPageState_1, I18n_1) {
    "use strict";
    var ItemPage = (function (_super) {
        __extends(ItemPage, _super);
        function ItemPage() {
            _super.apply(this, arguments);
        }
        ItemPage.prototype.updatePage = function (pageState) {
            console.log("Item Index", this.getDomNode());
            var state = pageState;
            this.selectedStoreService = ServiceHolder_1.ServiceHolder.getInstance().getService("selectedStore");
            this.cartService = ServiceHolder_1.ServiceHolder.getInstance().getService("cart");
            this.toolbar = new ToolbarComponent_1.ToolbarComponent("Item", this.cartService.getItemsCount());
            this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));
            this.search = new SearchComponent_1.SearchComponent("");
            this.search.applyBinding(this.getContentDomNode().find("#search"));
            this.itemService = ServiceHolder_1.ServiceHolder.getInstance().getService("item");
            this.uicomponent = new ItemPageComponent(this.itemService.getItemById(this.selectedStoreService.selectedStore, state.itemId), this.toolbar);
            this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
        };
        ItemPage.prototype.getDefaultPageState = function () {
            return new ItemPageState_1.ItemPageState(0);
        };
        ItemPage.prototype.closePage = function () {
        };
        return ItemPage;
    }(Page_1.Page));
    exports.ItemPage = ItemPage;
    var ItemPageComponent = (function (_super) {
        __extends(ItemPageComponent, _super);
        function ItemPageComponent(item, toolbar) {
            var _this = this;
            _super.call(this);
            this.model = {};
            this.model.item = item;
            this.model.toolbar = toolbar;
            this.model.addToCart = function () {
                var cartService = ServiceHolder_1.ServiceHolder.getInstance().getService("cart");
                cartService.addItem(_this.model.item);
                var options = {};
                options.title = I18n_1.I18n.getI18n().added;
                options.message = I18n_1.I18n.getI18n().itemAdded;
                options.callback = function () {
                    _this.model.toolbar.recalculate();
                };
                ons.notification.alert(options);
            };
        }
        ItemPageComponent.prototype.getModel = function () {
            return this.model;
        };
        return ItemPageComponent;
    }(PageUiComponent_1.PageUiComponent));
});
//# sourceMappingURL=ItemPage.js.map