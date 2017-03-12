var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../framework/Page", "./IndexPageState", "../../uicomponents/ToolbarComponent", "../../uicomponents/SearchComponent", "../../CocomeAppSettings", "../../../framework/PageUiComponent"], function (require, exports, Page_1, IndexPageState_1, ToolbarComponent_1, SearchComponent_1, CocomeAppSettings_1, PageUiComponent_1) {
    "use strict";
    var IndexPage = (function (_super) {
        __extends(IndexPage, _super);
        function IndexPage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IndexPage.prototype.updatePage = function (pageState) {
            console.log("Update Index", this.getDomNode());
            this.toolbar = new ToolbarComponent_1.ToolbarComponent(CocomeAppSettings_1.CocomeAppSettings.APP_NAME_SHORT);
            this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));
            this.search = new SearchComponent_1.SearchComponent("");
            this.search.applyBinding(this.getContentDomNode().find("#search"));
            this.uicomponent = new IndexPageComponent(CocomeAppSettings_1.CocomeAppSettings.APP_NAME);
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
        function IndexPageComponent(title) {
            var _this = _super.call(this) || this;
            _this.model = new IndexPageComponentModel(title);
            return _this;
        }
        IndexPageComponent.prototype.getModel = function () {
            return this.model;
        };
        return IndexPageComponent;
    }(PageUiComponent_1.PageUiComponent));
    var IndexPageComponentModel = (function () {
        function IndexPageComponentModel(title) {
            this.title = title;
            this.interestingItems = [{ imageUrl: "http://lorempixel.com/75/75/food/" }, { imageUrl: "http://lorempixel.com/75/75/food/" },
                { imageUrl: "http://lorempixel.com/75/75/food/" }, { imageUrl: "http://lorempixel.com/75/75/food/" }];
        }
        return IndexPageComponentModel;
    }());
});
//# sourceMappingURL=IndexPage.js.map