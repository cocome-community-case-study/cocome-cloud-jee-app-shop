define(["require", "exports"], function (require, exports) {
    "use strict";
    var AppMenu = (function () {
        function AppMenu(menuDOMElement, menuElemen, navigator, app) {
            var _this = this;
            this.open = function () {
                _this.menuElement.open();
            };
            this.close = function () {
                _this.menuElement.close();
            };
            console.log("APPMENU: initializeAppMenu");
            this.menuDOMElementEntries = menuDOMElement.find("#menuEntries");
            this.navigator = navigator;
            this.menuElement = menuElemen;
            this.app = app;
            console.log(menuElemen);
            this.generateMenu();
        }
        AppMenu.prototype.generateMenu = function () {
            var _this = this;
            var pages = this.navigator.pages;
            var _loop_1 = function(key) {
                var page = pages[key];
                var data = page.data;
                if (data.inMenuVisible) {
                    var newElement = $(document.createElement('ons-list-item'));
                    newElement.attr("tappable");
                    newElement.click(function () {
                        _this.app.openPage(page.getDefaultPageState());
                        _this.app.closeMenu();
                    });
                    newElement.text(data.menuText);
                    this_1.menuDOMElementEntries.append(newElement);
                    console.log("APPMENU: added " + data.menuText);
                }
            };
            var this_1 = this;
            for (var key in pages) {
                _loop_1(key);
            }
        };
        return AppMenu;
    }());
    exports.AppMenu = AppMenu;
});
//# sourceMappingURL=AppMenu.js.map