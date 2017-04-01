var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../framework/PageState"], function (require, exports, PageState_1) {
    "use strict";
    var SearchPageState = (function (_super) {
        __extends(SearchPageState, _super);
        function SearchPageState(searchPhrase) {
            var _this = _super.call(this) || this;
            _this._searchPhrase = "";
            _this._searchPhrase = searchPhrase;
            return _this;
        }
        SearchPageState.prototype.getSearchPhrase = function () {
            return this._searchPhrase;
        };
        SearchPageState.prototype.getPageName = function () {
            return "search";
        };
        return SearchPageState;
    }(PageState_1.PageState));
    exports.SearchPageState = SearchPageState;
});
//# sourceMappingURL=SearchPageState.js.map