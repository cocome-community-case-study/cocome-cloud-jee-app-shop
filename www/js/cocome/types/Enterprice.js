define(["require", "exports", "./Store"], function (require, exports, Store_1) {
    "use strict";
    var Enterprise = (function () {
        function Enterprise(name) {
            var _this = this;
            this.stores = [];
            this.addStore = function (store) {
                _this.stores.push(store);
            };
            this.name = name;
        }
        Enterprise.prototype.updateData = function (data) {
            this.name = data.name;
            for (var store in data.stores) {
                this.stores.push(new Store_1.Store(0, '', '').updateData(data.stores[store]));
            }
            return this;
        };
        Enterprise.prototype.getName = function () {
            return this.name;
        };
        Enterprise.prototype.getStores = function () {
            return this.stores;
        };
        return Enterprise;
    }());
    exports.Enterprise = Enterprise;
});
//# sourceMappingURL=Enterprice.js.map