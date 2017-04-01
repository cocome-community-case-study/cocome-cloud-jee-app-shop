var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../framework/Service", "../Settings"], function (require, exports, Service_1, Settings_1) {
    "use strict";
    var LoginService = (function (_super) {
        __extends(LoginService, _super);
        function LoginService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.loginUser = function (username, password) {
                var result = false;
                $.ajax({
                    url: Settings_1.Settings.url + "/api/login/",
                    async: false,
                    dataType: "json",
                    type: "get",
                    data: {
                        user: username,
                        password: password
                    },
                }).done(function (data) {
                    result = data;
                });
                _this._isUserLogedIn = result;
                if (_this._isUserLogedIn) {
                    _this._user = username;
                    _this._password = password;
                }
                return result;
            };
            return _this;
        }
        LoginService.prototype.initService = function () {
        };
        LoginService.prototype.closeService = function () {
        };
        Object.defineProperty(LoginService.prototype, "isUserLogedIn", {
            get: function () {
                return this._isUserLogedIn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginService.prototype, "user", {
            get: function () {
                return this._user;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginService.prototype, "password", {
            get: function () {
                return this._password;
            },
            enumerable: true,
            configurable: true
        });
        return LoginService;
    }(Service_1.Service));
    exports.LoginService = LoginService;
});
//# sourceMappingURL=LoginService.js.map