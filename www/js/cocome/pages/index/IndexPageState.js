var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../framework/PageState"], function (require, exports, PageState_1) {
    "use strict";
    var IndexPageState = (function (_super) {
        __extends(IndexPageState, _super);
        function IndexPageState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IndexPageState.prototype.getPageName = function () {
            return "index";
        };
        return IndexPageState;
    }(PageState_1.PageState));
    exports.IndexPageState = IndexPageState;
});
//# sourceMappingURL=IndexPageState.js.map