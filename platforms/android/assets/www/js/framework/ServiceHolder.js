define(["require", "exports", "../cocome/services/SearchHistoryService", "../cocome/services/CartService", "../cocome/services/EnterpriseService", "../cocome/services/SelectedShopService", "../cocome/services/ItemService", "../cocome/services/LoginService", "../cocome/services/CreditcardService", "../cocome/services/SaleService"], function (require, exports, SearchHistoryService_1, CartService_1, EnterpriseService_1, SelectedShopService_1, ItemService_1, LoginService_1, CreditcardService_1, SaleService_1) {
    "use strict";
    var ServiceHolder = (function () {
        function ServiceHolder() {
            this.services = {};
            this.services["searchHistory"] = new SearchHistoryService_1.SearchHistoryService();
            this.services["cart"] = new CartService_1.CartService();
            this.services["enterprise"] = new EnterpriseService_1.EnterpriseService();
            this.services["selectedStore"] = new SelectedShopService_1.SelectedShopService();
            this.services["item"] = new ItemService_1.ItemService();
            this.services["login"] = new LoginService_1.LoginService();
            this.services["creditcard"] = new CreditcardService_1.CreditcardService();
            this.services["sale"] = new SaleService_1.SaleService();
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