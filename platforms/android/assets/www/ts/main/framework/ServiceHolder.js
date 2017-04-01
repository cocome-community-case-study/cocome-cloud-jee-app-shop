"use strict";
var SearchHistoryService_1 = require("../cocome/services/SearchHistoryService");
var CartService_1 = require("../cocome/services/CartService");
var EnterpriseService_1 = require("../cocome/services/EnterpriseService");
var SelectedShopService_1 = require("../cocome/services/SelectedShopService");
var ItemService_1 = require("../cocome/services/ItemService");
var ServiceHolder = (function () {
    function ServiceHolder() {
        this.services = {};
        this.services["searchHistory"] = new SearchHistoryService_1.SearchHistoryService();
        this.services["cart"] = new CartService_1.CartService();
        this.services["enterprise"] = new EnterpriseService_1.EnterpriseService();
        this.services["selectedStore"] = new SelectedShopService_1.SelectedShopService();
        this.services["item"] = new ItemService_1.ItemService();
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
