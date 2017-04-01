var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../framework/Service", "../../framework/ServiceHolder", "../Settings"], function (require, exports, Service_1, ServiceHolder_1, Settings_1) {
    "use strict";
    var SaleService = (function (_super) {
        __extends(SaleService, _super);
        function SaleService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.doSale = function (store, items, card) {
                var result = false;
                $.ajax({
                    url: Settings_1.Settings.url + "/api/enterprise/",
                    async: false,
                    dataType: "json",
                    data: {
                        store: JSON.stringify(store),
                        items: JSON.stringify(items),
                        card: JSON.stringify(card),
                        user: ServiceHolder_1.ServiceHolder.getInstance().getService("login").user,
                    },
                }).done(function (data) {
                    console.log("Test: " + data);
                    result = data;
                });
                return result;
            };
            return _this;
        }
        SaleService.prototype.initService = function () {
        };
        SaleService.prototype.closeService = function () {
        };
        return SaleService;
    }(Service_1.Service));
    exports.SaleService = SaleService;
});
//# sourceMappingURL=SaleService.js.map