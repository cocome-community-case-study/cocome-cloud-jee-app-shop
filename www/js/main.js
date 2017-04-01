define(["require", "exports", "./cocome/CococmeApp"], function (require, exports, CococmeApp_1) {
    "use strict";
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
});
//# sourceMappingURL=main.js.map