var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./SearchPageState", "../../../framework/Page", "../../uicomponents/ToolbarComponent", "../../uicomponents/SearchComponent", "../../../framework/ServiceHolder", "../../CocomeAppSettings", "../../../framework/I18n", "../../../main", "../index/IndexPageState", "../../../framework/PageUiComponent", "../item/ItemPageState"], function (require, exports, SearchPageState_1, Page_1, ToolbarComponent_1, SearchComponent_1, ServiceHolder_1, CocomeAppSettings_1, I18n_1, main_1, IndexPageState_1, PageUiComponent_1, ItemPageState_1) {
    "use strict";
    var SearchPage = (function (_super) {
        __extends(SearchPage, _super);
        function SearchPage() {
            _super.apply(this, arguments);
        }
        SearchPage.prototype.updatePage = function (pageState) {
            console.log("SearchPage Index", this.getDomNode());
            this.pageState = pageState;
            this.selectedStoreService = ServiceHolder_1.ServiceHolder.getInstance().getService("selectedStore");
            this.cartService = ServiceHolder_1.ServiceHolder.getInstance().getService("cart");
            this.itemService = ServiceHolder_1.ServiceHolder.getInstance().getService("item");
            this.toolbar = new ToolbarComponent_1.ToolbarComponent(CocomeAppSettings_1.CocomeAppSettings.APP_NAME_SHORT, this.cartService.getItemsCount());
            this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));
            this.search = new SearchComponent_1.SearchComponent(this.pageState.getSearchPhrase());
            this.search.applyBinding(this.getContentDomNode().find("#search"));
            if (this.selectedStoreService.selectedStore == null) {
                var options = {};
                options.message = I18n_1.I18n.getI18n().noShopSelected;
                options.callback = function () {
                    main_1.main.app.openPage(new IndexPageState_1.IndexPageState());
                };
                ons.notification.alert(options);
                return;
            }
            var items;
            if (this.pageState.getSearchPhrase() != null) {
                items = this.itemService.querryItems(this.selectedStoreService.selectedStore, this.pageState.getSearchPhrase());
            }
            else {
                items = this.itemService.allItems(this.selectedStoreService.selectedStore);
            }
            this.uicomponent = new SearchPageComponent(items);
            this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
        };
        SearchPage.prototype.getDefaultPageState = function () {
            return new SearchPageState_1.SearchPageState();
        };
        SearchPage.prototype.closePage = function () {
        };
        return SearchPage;
    }(Page_1.Page));
    exports.SearchPage = SearchPage;
    var SearchPageComponent = (function (_super) {
        __extends(SearchPageComponent, _super);
        function SearchPageComponent(items) {
            _super.call(this);
            this.model = new SearchPageComponentModel(items);
        }
        SearchPageComponent.prototype.getModel = function () {
            return this.model;
        };
        return SearchPageComponent;
    }(PageUiComponent_1.PageUiComponent));
    var SearchPageComponentModel = (function () {
        function SearchPageComponentModel(items) {
            var _this = this;
            this.settings = {};
            this.settings.step = 5;
            this.allItems = items;
            this.page = ko.observable(1);
            this.items = ko.computed(function () {
                return _this.allItems.slice((_this.page() - 1) * 5, ((_this.page() - 1) * 5) + 5);
            }, this.page);
            this.changePage = function (amount) {
                var steps = Math.ceil(_this.allItems.length / _this.settings.step);
                var currentPage = _this.page() + amount;
                if (currentPage > 0 && currentPage <= steps)
                    _this.page(currentPage);
            },
                this.openItem = function (item) {
                    console.log("Test");
                    main_1.main.app.openPage(new ItemPageState_1.ItemPageState(item.getID()));
                };
        }
        return SearchPageComponentModel;
    }());
});
//# sourceMappingURL=SearchPage.js.map