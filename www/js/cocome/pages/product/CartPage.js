var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../framework/Page", "../../uicomponents/ToolbarComponent", "../../uicomponents/SearchComponent", "../../CocomeAppSettings", "../../../framework/PageUiComponent", "../../../framework/ServiceHolder", "../index/IndexPageState"], function (require, exports, Page_1, ToolbarComponent_1, SearchComponent_1, CocomeAppSettings_1, PageUiComponent_1, ServiceHolder_1, IndexPageState_1) {
    "use strict";
    var IndexPage = (function (_super) {
        __extends(IndexPage, _super);
        function IndexPage() {
            _super.apply(this, arguments);
        }
        IndexPage.prototype.updatePage = function (pageState) {
            console.log("Update Index", this.getDomNode());
            this.searchService = ServiceHolder_1.ServiceHolder.getInstance().getService("searchItem");
            this.historyService = ServiceHolder_1.ServiceHolder.getInstance().getService("searchHistory");
            this.cartService = ServiceHolder_1.ServiceHolder.getInstance().getService("cart");
            this.toolbar = new ToolbarComponent_1.ToolbarComponent("Cart", this.cartService.getItemsCount());
            this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));
            this.search = new SearchComponent_1.SearchComponent("");
            this.search.applyBinding(this.getContentDomNode().find("#search"));
            var items = this.searchService.findItems(this.historyService.getLastHistoryEntry());
            this.uicomponent = new IndexPageComponent(CocomeAppSettings_1.CocomeAppSettings.APP_NAME, items);
            this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
        };
        IndexPage.prototype.getDefaultPageState = function () {
            return new IndexPageState_1.IndexPageState();
        };
        IndexPage.prototype.closePage = function () {
            this.toolbar.removeBinding(this.getContentDomNode().find("#toolbar"));
            this.search.removeBinding(this.getContentDomNode());
        };
        return IndexPage;
    }(Page_1.Page));
    exports.IndexPage = IndexPage;
    var IndexPageComponent = (function (_super) {
        __extends(IndexPageComponent, _super);
        function IndexPageComponent(title, items) {
            _super.call(this);
            this.model = new IndexPageComponentModel(title, items);
        }
        IndexPageComponent.prototype.getModel = function () {
            return this.model;
        };
        return IndexPageComponent;
    }(PageUiComponent_1.PageUiComponent));
    var IndexPageComponentModel = (function () {
        function IndexPageComponentModel(title, items) {
            this.title = title;
            this.interestingItems = items;
        }
        return IndexPageComponentModel;
    }());
});
//# sourceMappingURL=CartPage.js.map