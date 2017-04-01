var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../framework/Service", "../types/Enterprice"], function (require, exports, Service_1, Enterprice_1) {
    "use strict";
    var EnterpriseService = (function (_super) {
        __extends(EnterpriseService, _super);
        function EnterpriseService() {
            _super.call(this);
            this.enterprises = [];
            this.getEnterprises = function () {
                var result = new Array();
                $.ajax({
                    url: "http://localhost:1234/api/enterprise/",
                    async: false,
                    dataType: "json"
                }).done(function (data) {
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var enterprise = data_1[_i];
                        result.push(new Enterprice_1.Enterprise("").updateData(enterprise));
                    }
                });
                return result;
            };
        }
        EnterpriseService.prototype.initService = function () {
        };
        EnterpriseService.prototype.closeService = function () {
        };
        return EnterpriseService;
    }(Service_1.Service));
    exports.EnterpriseService = EnterpriseService;
});
//# sourceMappingURL=EnterpriseService.js.map