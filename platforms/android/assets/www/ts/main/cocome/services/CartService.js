"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Service_1 = require("../../framework/Service");
/**
 * Created by Joshua on 10.02.2017.
 */
var CartService = (function (_super) {
    __extends(CartService, _super);
    function CartService() {
        var _this = this;
        _super.apply(this, arguments);
        this.items = [];
        this.getItemsCount = function () {
            return _this.items.length;
        };
        this.addItem = function (item) {
            _this.items.push(item);
        };
        this.removeItem = function (item) {
            var index = _this.items.indexOf(item);
            if (index > -1) {
                _this.items.splice(index, 1);
            }
        };
    }
    CartService.prototype.initService = function () {
    };
    CartService.prototype.closeService = function () {
    };
    return CartService;
}(Service_1.Service));
exports.CartService = CartService;
