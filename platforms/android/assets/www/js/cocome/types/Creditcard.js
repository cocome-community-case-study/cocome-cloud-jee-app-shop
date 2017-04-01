define(["require", "exports"], function (require, exports) {
    "use strict";
    var Creditcard = (function () {
        function Creditcard(id, name, pin) {
            this.id = id;
            this.name = name;
            this.pin = pin;
        }
        Creditcard.prototype.updateData = function (data) {
            this.id = data.id;
            this.name = data.name;
            this.pin = data.pin;
            return this;
        };
        Creditcard.prototype.getId = function () {
            return this.id;
        };
        Creditcard.prototype.getName = function () {
            return this.name;
        };
        Creditcard.prototype.getPin = function () {
            return this.pin;
        };
        return Creditcard;
    }());
    exports.Creditcard = Creditcard;
});
//# sourceMappingURL=Creditcard.js.map