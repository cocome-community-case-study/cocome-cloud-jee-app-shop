var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../framework/Page", "./IndexPageState", "../../uicomponents/ToolbarComponent", "../../uicomponents/SearchComponent", "../../CocomeAppSettings", "../../../framework/PageUiComponent", "../../../framework/ServiceHolder", "../../../framework/I18n", "../../../main", "../search/SearchPageState"], function (require, exports, Page_1, IndexPageState_1, ToolbarComponent_1, SearchComponent_1, CocomeAppSettings_1, PageUiComponent_1, ServiceHolder_1, I18n_1, main_1, SearchPageState_1) {
    "use strict";
    var IndexPage = (function (_super) {
        __extends(IndexPage, _super);
        function IndexPage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IndexPage.prototype.updatePage = function (pageState) {
            console.log("Update Index", this.getDomNode());
            this.historyService = ServiceHolder_1.ServiceHolder.getInstance().getService("searchHistory");
            this.cartService = ServiceHolder_1.ServiceHolder.getInstance().getService("cart");
            this.enterpriseService = ServiceHolder_1.ServiceHolder.getInstance().getService("enterprise");
            this.toolbar = new ToolbarComponent_1.ToolbarComponent(CocomeAppSettings_1.CocomeAppSettings.APP_NAME_SHORT, this.cartService.getItemsCount());
            this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));
            this.search = new SearchComponent_1.SearchComponent("");
            this.search.applyBinding(this.getContentDomNode().find("#search"));
            this.uicomponent = new IndexPageComponent(CocomeAppSettings_1.CocomeAppSettings.APP_NAME, this.enterpriseService.getEnterprises());
            this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
        };
        IndexPage.prototype.getDefaultPageState = function () {
            return new IndexPageState_1.IndexPageState();
        };
        IndexPage.prototype.closePage = function () {
        };
        return IndexPage;
    }(Page_1.Page));
    exports.IndexPage = IndexPage;
    var IndexPageComponent = (function (_super) {
        __extends(IndexPageComponent, _super);
        function IndexPageComponent(title, enterprises) {
            var _this = _super.call(this) || this;
            _this.model = new IndexPageComponentModel(title, enterprises);
            _this.model.selectedStore.subscribe(function (store) {
                if (store != null) {
                    var options = {};
                    options.message = I18n_1.I18n.getI18n().youSelected + ": " + store.getName();
                    options.title = I18n_1.I18n.getI18n().selection;
                    options.buttonLabels = [I18n_1.I18n.getI18n().okay];
                    options.callback = function () {
                        ServiceHolder_1.ServiceHolder.getInstance().getService("selectedStore").selectedStore = store;
                        main_1.main.app.openPage(new SearchPageState_1.SearchPageState());
                    };
                    ons.notification.confirm(options);
                    ServiceHolder_1.ServiceHolder.getInstance().getService("cart").clear();
                }
                ;
            });
            return _this;
        }
        IndexPageComponent.prototype.getModel = function () {
            return this.model;
        };
        return IndexPageComponent;
    }(PageUiComponent_1.PageUiComponent));
    var IndexPageComponentModel = (function () {
        function IndexPageComponentModel(title, enterprises) {
            var _this = this;
            this.title = title;
            this.enterprises = enterprises;
            this.selectedEnterprise = ko.observable(null);
            this.stores = ko.pureComputed(function () {
                if (_this.selectedEnterprise() != null) {
                    console.log(_this.selectedEnterprise());
                    return _this.selectedEnterprise().getStores();
                }
                else
                    return [];
            }, this.selectedEnterprise);
            this.selectedStore = ko.observable(null);
            this.storesAreVisible = ko.pureComputed(function () {
                return _this.selectedEnterprise() != null;
            }, this.selectedStore);
        }
        return IndexPageComponentModel;
    }());
});
//# sourceMappingURL=IndexPage.js.map