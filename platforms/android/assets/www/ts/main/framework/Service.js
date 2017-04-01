/**
 * Created by Joshua on 10.02.2017.
 */
"use strict";
var Service = (function () {
    function Service() {
        var _this = this;
        setTimeout(function () {
            _this.initService();
        });
    }
    return Service;
}());
exports.Service = Service;
