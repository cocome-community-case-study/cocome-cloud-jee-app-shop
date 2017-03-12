var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../main", "../../framework/UiComponent"], function (require, exports, main_1, UiComponent_1) {
    "use strict";
    var ToolbarComponent = (function (_super) {
        __extends(ToolbarComponent, _super);
        function ToolbarComponent(title) {
            var _this = _super.call(this) || this;
            _this.setTitle = function (title) {
                _this.model.setTitle(title);
            };
            _this.model = new ToolbarComponentModel(title);
            return _this;
        }
        ToolbarComponent.prototype.getModel = function () {
            return this.model;
        };
        return ToolbarComponent;
    }(UiComponent_1.UiComponent));
    exports.ToolbarComponent = ToolbarComponent;
    var ToolbarComponentModel = (function () {
        function ToolbarComponentModel(title) {
            this.toolbar = {
                title: title,
                openMenu: function () {
                    main_1.main.app.openMenu();
                }
            };
        }
        ToolbarComponentModel.prototype.setTitle = function (title) {
            this.toolbar.title = title;
        };
        return ToolbarComponentModel;
    }());
});
//# sourceMappingURL=ToolbarComponent.js.map