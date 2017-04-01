"use strict";
/**
 * Created by Joshua on 27.02.2017.
 */
var Enterprise = (function () {
    function Enterprise(name) {
        var _this = this;
        this._stores = [];
        this.addStore = function (store) {
            _this.stores.push(store);
        };
        this._name = name;
    }
    Object.defineProperty(Enterprise.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Enterprise.prototype, "stores", {
        get: function () {
            return this._stores;
        },
        enumerable: true,
        configurable: true
    });
    return Enterprise;
}());
exports.Enterprise = Enterprise;
