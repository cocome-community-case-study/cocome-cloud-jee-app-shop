/**
 * Created by Joshua on 16.01.2017.
 */
var App = (function () {
    function App(contentElement) {
        var _this = this;
        this.onDeviceReady = function () {
            console.log("APP: onDeviceReady");
            _this.initializeApp();
        };
        this.setup = function () {
            console.log("APP: setup");
            var that = _this;
            document.addEventListener('deviceready', function () { that.onDeviceReady(); }, false);
        };
        this.contentElement = contentElement;
        this.navigator = new AppNavigator(this.contentElement);
        this.initializeNavigator();
        this.setup();
    }
    return App;
}());
