"use strict";
var AppNavigator_1 = require("./AppNavigator");
/**
 * Created by Joshua on 16.01.2017.
 */
var App = (function () {
    function App(splitter) {
        var _this = this;
        this.onDeviceReady = function () {
            console.log("APP: onDeviceReady");
            _this.initializeApp();
        };
        this.setup = function () {
            console.log("APP: setup");
            document.addEventListener('deviceready', function () {
                setTimeout(function () {
                    _this.onDeviceReady();
                });
            }, false);
        };
        this.splitter = splitter;
        this.navigator = new AppNavigator_1.AppNavigator(this.splitter);
        this.initializeNavigator();
        this.setup();
    }
    return App;
}());
exports.App = App;
