var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../framework/Service", "../../framework/ServiceHolder", "../types/Item"], function (require, exports, Service_1, ServiceHolder_1, Item_1) {
    "use strict";
    var SearchItemService = (function (_super) {
        __extends(SearchItemService, _super);
        function SearchItemService() {
            _super.apply(this, arguments);
        }
        SearchItemService.prototype.initService = function () {
        };
        SearchItemService.prototype.closeService = function () {
        };
        SearchItemService.prototype.findItems = function (searchterm) {
            var historyService = ServiceHolder_1.ServiceHolder.getInstance().getService("searchHistory");
            var items = [];
            historyService.addHistory(searchterm);
            for (var i = 0; i < 5; i++) {
                items.push(new Item_1.Item(i.toString(), "Super cool Item " + i, "http://lorempixel.com/100/100/food/" + i, "Bla Bla Bla", 14.54));
            }
            return items;
        };
        return SearchItemService;
    }(Service_1.Service));
    exports.SearchItemService = SearchItemService;
});
//# sourceMappingURL=SearchItemService.js.map