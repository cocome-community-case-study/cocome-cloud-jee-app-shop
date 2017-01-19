var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
$(function () {
    app = new CococmeApp();
});
var App = (function () {
    function App() {
        var _this = this;
        this.onDeviceReady = function () {
            alert("onDeviceReady");
            _this.initialize();
        };
        this.onInit = function (event) {
            var page = event.target;
            _this.loadPage(page);
        };
        this.setup = function () {
            document.addEventListener('init', _this.onInit, false);
            document.addEventListener('deviceready', _this.onDeviceReady, false);
        };
        this.setup();
    }
    return App;
}());
var CococmeApp = (function (_super) {
    __extends(CococmeApp, _super);
    function CococmeApp() {
        _super.call(this);
    }
    CococmeApp.prototype.loadPage = function (page) {
        alert("Load Page " + page);
    };
    CococmeApp.prototype.initialize = function () {
        alert("initialize");
    };
    return CococmeApp;
}(App));
//# sourceMappingURL=cocome.js.map