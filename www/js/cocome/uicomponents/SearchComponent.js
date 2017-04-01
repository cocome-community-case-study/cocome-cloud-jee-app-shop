var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../main", "../../framework/UiComponent", "../pages/search/SearchPageState"], function (require, exports, main_1, UiComponent_1, SearchPageState_1) {
    "use strict";
    var SearchComponent = (function (_super) {
        __extends(SearchComponent, _super);
        function SearchComponent(value) {
            var _this = _super.call(this) || this;
            _this.model = new SearchComponentModel(value);
            return _this;
        }
        SearchComponent.prototype.getModel = function () {
            return this.model;
        };
        return SearchComponent;
    }(UiComponent_1.UiComponent));
    exports.SearchComponent = SearchComponent;
    var SearchComponentModel = (function () {
        function SearchComponentModel(value) {
            this.search = {
                input: ko.observable(value),
                onEnter: function (data, event) {
                    if (event.keyCode == 13) {
                        var pageState = new SearchPageState_1.SearchPageState(this.input());
                        main_1.main.app.openPage(pageState);
                    }
                    return true;
                }
            };
        }
        return SearchComponentModel;
    }());
});
//# sourceMappingURL=SearchComponent.js.map