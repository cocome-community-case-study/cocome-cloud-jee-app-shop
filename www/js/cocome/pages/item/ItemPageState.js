var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../framework/PageState"], function (require, exports, PageState_1) {
    "use strict";
    var ItemPageState = (function (_super) {
        __extends(ItemPageState, _super);
        function ItemPageState(itemId) {
            var _this = _super.call(this) || this;
            _this._id = itemId;
            return _this;
        }
        ItemPageState.prototype.getPageName = function () {
            return "item";
        };
        Object.defineProperty(ItemPageState.prototype, "itemId", {
            get: function () {
                return this._id;
            },
            enumerable: true,
            configurable: true
        });
        return ItemPageState;
    }(PageState_1.PageState));
    exports.ItemPageState = ItemPageState;
});
//# sourceMappingURL=ItemPageState.js.map