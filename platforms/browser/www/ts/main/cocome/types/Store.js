/**
 * Created by Joshua on 27.02.2017.
 */
"use strict";
var Store = (function () {
    function Store(name) {
        this._name = name;
    }
    Object.defineProperty(Store.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Store;
}());
exports.Store = Store;
