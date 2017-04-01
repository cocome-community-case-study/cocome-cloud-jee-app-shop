var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../framework/Service"], function (require, exports, Service_1) {
    "use strict";
    var SearchHistoryService = (function (_super) {
        __extends(SearchHistoryService, _super);
        function SearchHistoryService() {
            _super.apply(this, arguments);
        }
        SearchHistoryService.prototype.initService = function () {
            this.history = JSON.parse(localStorage.getItem(SearchHistoryService.searchHistoryKey));
            if (this.history == null)
                this.history = [];
        };
        SearchHistoryService.prototype.closeService = function () {
            localStorage.setItem(SearchHistoryService.searchHistoryKey, JSON.stringify(this.history));
        };
        SearchHistoryService.prototype.addHistory = function (searchTerm) {
            this.history.push(searchTerm);
        };
        SearchHistoryService.prototype.getHistoryCount = function () {
            return this.history.length;
        };
        SearchHistoryService.prototype.getLastHistoryEntry = function () {
            return this.history[this.history.length - 1];
        };
        SearchHistoryService.prototype.getHistoryEntry = function (index) {
            return this.history[index];
        };
        SearchHistoryService.searchHistoryKey = "SearchHistory";
        return SearchHistoryService;
    }(Service_1.Service));
    exports.SearchHistoryService = SearchHistoryService;
});
//# sourceMappingURL=SearchHistoryService.js.map