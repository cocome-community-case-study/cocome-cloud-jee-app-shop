"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Service_1 = require("../../framework/Service");
var Enterprice_1 = require("../types/Enterprice");
var Store_1 = require("../types/Store");
/**
 * Created by Joshua on 10.02.2017.
 */
var EnterpriseService = (function (_super) {
    __extends(EnterpriseService, _super);
    function EnterpriseService() {
        var _this = this;
        _super.call(this);
        this.enterprises = [];
        this.getEnterprises = function () {
            return _this.enterprises;
        };
    }
    EnterpriseService.prototype.initService = function () {
        var e1 = new Enterprice_1.Enterprise("Enterprise 123");
        e1.addStore(new Store_1.Store("Store 1"));
        e1.addStore(new Store_1.Store("Store 2"));
        e1.addStore(new Store_1.Store("Store 3"));
        var e2 = new Enterprice_1.Enterprise("Enterprise 456");
        e2.addStore(new Store_1.Store("Store 4"));
        e2.addStore(new Store_1.Store("Store 5"));
        e2.addStore(new Store_1.Store("Store 6"));
        var e3 = new Enterprice_1.Enterprise("Enterprise 789");
        e3.addStore(new Store_1.Store("Store 7"));
        e3.addStore(new Store_1.Store("Store 8"));
        e3.addStore(new Store_1.Store("Store 9"));
        this.enterprises.push(e1);
        this.enterprises.push(e2);
        this.enterprises.push(e3);
    };
    EnterpriseService.prototype.closeService = function () {
    };
    return EnterpriseService;
}(Service_1.Service));
exports.EnterpriseService = EnterpriseService;
