define(["require", "exports"], function (require, exports) {
    "use strict";
    var AppNavigator = (function () {
        function AppNavigator(splitter) {
            var _this = this;
            this._pages = {};
            this.history = new Array();
            this.addPage = function (page) {
                _this._pages[page.data.name] = page;
            };
            this.updatePage = function (pageState) {
                var page = _this._pages[pageState.getPageName()];
                _this.history.push(pageState);
                _this.loadPage(page, pageState);
                _this.currentPage = page;
            };
            this.back = function () {
                var pageState = _this.history.pop();
                _this.loadPage(_this._pages[pageState.getPageName()], pageState);
            };
            this.splitter = splitter;
        }
        AppNavigator.prototype.getPage = function (name) {
            return this._pages[name];
        };
        Object.defineProperty(AppNavigator.prototype, "pages", {
            get: function () {
                return this._pages;
            },
            enumerable: true,
            configurable: true
        });
        AppNavigator.prototype.loadPage = function (page, pageState) {
            if (this.currentPage != null)
                this.currentPage.closePage();
            this.loadHTML(page.getDomNodeID().toString());
            setTimeout(function () {
                page.updatePage(pageState);
            }, 10);
        };
        AppNavigator.prototype.loadHTML = function (id) {
            this.splitter.load(id);
        };
        return AppNavigator;
    }());
    exports.AppNavigator = AppNavigator;
});
//# sourceMappingURL=AppNavigator.js.map