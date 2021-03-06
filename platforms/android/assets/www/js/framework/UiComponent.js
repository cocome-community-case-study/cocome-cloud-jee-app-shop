define(["require", "exports"], function (require, exports) {
    "use strict";
    var UiComponent = (function () {
        function UiComponent() {
        }
        UiComponent.prototype.applyBinding = function (node) {
            var _this = this;
            this.removeBinding(node);
            setTimeout(function () {
                ko.applyBindings(_this.getModel(), node.get(0));
            }, 20);
        };
        UiComponent.prototype.removeBinding = function (node) {
            setTimeout(function () {
                ko.cleanNode(node.get(0));
            }, 0);
        };
        return UiComponent;
    }());
    exports.UiComponent = UiComponent;
});
//# sourceMappingURL=UiComponent.js.map