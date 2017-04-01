var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../framework/Service", "../types/Creditcard", "../../framework/ServiceHolder"], function (require, exports, Service_1, Creditcard_1, ServiceHolder_1) {
    "use strict";
    var CreditcardService = (function (_super) {
        __extends(CreditcardService, _super);
        function CreditcardService() {
            var _this = this;
            _super.apply(this, arguments);
            this.cards = [];
            this.getCarts = function () {
                var result = new Array();
                $.ajax({
                    url: "http://localhost:1234/api/creditcards/",
                    async: false,
                    dataType: "json",
                    type: "get",
                    data: {
                        user: ServiceHolder_1.ServiceHolder.getInstance().getService("login").user,
                        password: ServiceHolder_1.ServiceHolder.getInstance().getService("login").password
                    },
                }).done(function (data) {
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var card = data_1[_i];
                        result.push(new Creditcard_1.Creditcard(null, null, null).updateData(card));
                    }
                });
                return result;
            };
            this.addCard = function (card) {
                var result = new Array();
                $.ajax({
                    url: "http://localhost:1234/api/creditcards/add",
                    async: false,
                    dataType: "json",
                    type: "get",
                    data: {
                        user: ServiceHolder_1.ServiceHolder.getInstance().getService("login").user,
                        password: ServiceHolder_1.ServiceHolder.getInstance().getService("login").password,
                        card: JSON.stringify(card)
                    },
                }).done(function (data) {
                    result = data;
                });
                return result;
            };
            this.checkPin = function (card, pin) {
                var result = false;
                $.ajax({
                    url: "http://localhost:1234/api/creditcards/checkpin",
                    async: false,
                    dataType: "json",
                    type: "get",
                    data: {
                        user: ServiceHolder_1.ServiceHolder.getInstance().getService("login").user,
                        card: JSON.stringify(card),
                        pin: pin
                    },
                }).done(function (data) {
                    result = data;
                });
                return result;
            };
            this.getCartById = function (id) {
                for (var _i = 0, _a = _this.getCarts(); _i < _a.length; _i++) {
                    var card = _a[_i];
                    if (card.getId() == id)
                        return card;
                }
                return null;
            };
        }
        CreditcardService.prototype.initService = function () {
        };
        CreditcardService.prototype.closeService = function () {
        };
        return CreditcardService;
    }(Service_1.Service));
    exports.CreditcardService = CreditcardService;
});
//# sourceMappingURL=CreditcardService.js.map