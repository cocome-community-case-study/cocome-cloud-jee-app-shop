var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../framework/AppMenu", "../framework/App", "./pages/index/IndexPageState", "./pages/index/IndexPage", "../framework/PageData", "./pages/search/SearchPage"], function (require, exports, AppMenu_1, App_1, IndexPageState_1, IndexPage_1, PageData_1, SearchPage_1) {
    "use strict";
    var CococmeApp = (function (_super) {
        __extends(CococmeApp, _super);
        function CococmeApp(splitter, menuElement) {
            var _this = _super.call(this, splitter) || this;
            _this._menuElement = menuElement;
            console.log("COCOME APP: constructor");
            return _this;
        }
        Object.defineProperty(CococmeApp.prototype, "menu", {
            get: function () {
                return this._menu;
            },
            enumerable: true,
            configurable: true
        });
        CococmeApp.prototype.openPage = function (pageState) {
            this.navigator.updatePage(pageState);
        };
        CococmeApp.prototype.initializeApp = function () {
            console.log("COCOME APP: initializeApp");
            this.createMenu($("#menu"));
            this.navigator.updatePage(new IndexPageState_1.IndexPageState());
        };
        CococmeApp.prototype.initializeNavigator = function () {
            console.log("COCOME APP: initializeNavigator");
            this.navigator.addPage(new IndexPage_1.IndexPage($("#home\\.html"), "indexpage", new PageData_1.PageData("index", "Home", true)));
            this.navigator.addPage(new SearchPage_1.SearchPage($("#search\\.html"), "searchpage", new PageData_1.PageData("search", "Search", true)));
        };
        CococmeApp.prototype.createMenu = function (menuDOM) {
            this._menu = new AppMenu_1.AppMenu(menuDOM, this._menuElement, this.navigator, this);
        };
        CococmeApp.prototype.closeMenu = function () {
            this.menu.close();
        };
        CococmeApp.prototype.openMenu = function () {
            this.menu.open();
        };
        return CococmeApp;
    }(App_1.App));
    exports.CococmeApp = CococmeApp;
});
//# sourceMappingURL=CococmeApp.js.map