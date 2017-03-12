var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./SearchPageState", "../../../framework/Page", "../../uicomponents/ToolbarComponent", "../../uicomponents/SearchComponent"], function (require, exports, SearchPageState_1, Page_1, ToolbarComponent_1, SearchComponent_1) {
    "use strict";
    var SearchPage = (function (_super) {
        __extends(SearchPage, _super);
        function SearchPage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SearchPage.prototype.updatePage = function (pageState) {
            console.log("SearchPage Index", this.getDomNode());
            var curentPageState = pageState;
            this.toolbar = new ToolbarComponent_1.ToolbarComponent("Search");
            this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));
            var searchPhrase = curentPageState.getSearchPhrase();
            console.log("searchPhrase: " + searchPhrase);
            this.search = new SearchComponent_1.SearchComponent(searchPhrase);
            this.search.applyBinding(this.getContentDomNode().find("#search"));
        };
        SearchPage.prototype.getDefaultPageState = function () {
            return new SearchPageState_1.SearchPageState();
        };
        SearchPage.prototype.closePage = function () {
            this.toolbar.removeBinding(this.getContentDomNode().find("#toolbar"));
            this.search.removeBinding(this.getContentDomNode());
        };
        return SearchPage;
    }(Page_1.Page));
    exports.SearchPage = SearchPage;
});
//# sourceMappingURL=SearchPage.js.map