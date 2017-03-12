var AppNavigator = (function () {
    function AppNavigator(contentElement) {
        var _this = this;
        this.pages = {};
        this.history = new Array();
        this.addPage = function (name, page) {
            _this.pages[name] = page;
        };
        this.updatePage = function (name, pageState) {
            var page = _this.pages[name];
            _this.history.push(pageState);
            _this.loadPage(page, pageState);
        };
        this.back = function () {
            var pageState = _this.history.pop();
            _this.loadPage(_this.pages[pageState.getPageName()], pageState);
        };
        this.contentElement = contentElement;
    }
    AppNavigator.prototype.loadPage = function (page, pageState) {
        this.loadHTML(page.getDomNodeID().toString());
        page.updatePage(pageState);
    };
    AppNavigator.prototype.loadHTML = function (id) {
        cocomeSplitter.setMainPage(id);
    };
    return AppNavigator;
}());
