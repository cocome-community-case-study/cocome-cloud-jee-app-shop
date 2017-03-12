define(["require", "exports", "../services/SearchHistoryService"], function (require, exports, SearchHistoryService_1) {
    "use strict";
    var ServiceHolder = (function () {
        function ServiceHolder() {
            this.services = {};
            this.services["searchHistory"] = new SearchHistoryService_1.SearchHistoryService();
        }
        ServiceHolder.getInstance = function () {
            if (ServiceHolder.instance == null)
                ServiceHolder.createInstance();
            return ServiceHolder.instance;
        };
        ServiceHolder.createInstance = function () {
            ServiceHolder.instance = new ServiceHolder();
        };
        ServiceHolder.prototype.getService = function (name) {
            return this.services[name];
        };
        return ServiceHolder;
    }());
    exports.ServiceHolder = ServiceHolder;
});
//# sourceMappingURL=ServiceHolder.js.map