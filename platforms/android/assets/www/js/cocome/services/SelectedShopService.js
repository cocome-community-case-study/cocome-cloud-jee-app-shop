var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../framework/Service"], function (require, exports, Service_1) {
    "use strict";
    var SelectedShopService = (function (_super) {
        __extends(SelectedShopService, _super);
        function SelectedShopService() {
            _super.apply(this, arguments);
        }
        SelectedShopService.prototype.initService = function () {
        };
        SelectedShopService.prototype.closeService = function () {
        };
        Object.defineProperty(SelectedShopService.prototype, "selectedStore", {
            get: function () {
                return this._selectedStore;
            },
            set: function (value) {
                this._selectedStore = value;
            },
            enumerable: true,
            configurable: true
        });
        return SelectedShopService;
    }(Service_1.Service));
    exports.SelectedShopService = SelectedShopService;
});
//# sourceMappingURL=SelectedShopService.js.map