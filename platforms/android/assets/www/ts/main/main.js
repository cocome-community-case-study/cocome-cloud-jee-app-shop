"use strict";
var CococmeApp_1 = require("./cocome/CococmeApp");
var Main = (function () {
    function Main() {
        var _this = this;
        ons.ready(function () {
            _this._app = new CococmeApp_1.CococmeApp(getSplitter(), getMenu());
        });
    }
    Object.defineProperty(Main.prototype, "app", {
        get: function () {
            return this._app;
        },
        enumerable: true,
        configurable: true
    });
    return Main;
}());
exports.Main = Main;
exports.main = new Main();
