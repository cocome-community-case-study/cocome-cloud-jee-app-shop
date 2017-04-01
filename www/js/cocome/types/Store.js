define(["require", "exports"], function (require, exports) {
    "use strict";
    var Store = (function () {
        function Store(id, name, location) {
            this.id = id;
            this.name = name;
            this.location = location;
        }
        Store.prototype.getName = function () {
            return this.name;
        };
        Store.prototype.updateData = function (data) {
            this.id = data.id;
            this.name = data.name;
            this.location = data.location;
            return this;
        };
        return Store;
    }());
    exports.Store = Store;
});
//# sourceMappingURL=Store.js.map