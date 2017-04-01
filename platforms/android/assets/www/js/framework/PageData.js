define(["require", "exports"], function (require, exports) {
    "use strict";
    var PageData = (function () {
        function PageData(name, menuText, inMenuVisible) {
            this._name = name;
            this._menuText = menuText;
            this._inMenuVisible = inMenuVisible;
        }
        Object.defineProperty(PageData.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageData.prototype, "menuText", {
            get: function () {
                return this._menuText;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageData.prototype, "inMenuVisible", {
            get: function () {
                return this._inMenuVisible;
            },
            enumerable: true,
            configurable: true
        });
        return PageData;
    }());
    exports.PageData = PageData;
});
//# sourceMappingURL=PageData.js.map