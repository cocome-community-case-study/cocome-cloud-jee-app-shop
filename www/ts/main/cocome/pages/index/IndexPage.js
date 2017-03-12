/**
 * Created by Joshua on 19.01.2017.
 */
/// <reference path="../../../framework/Page.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IndexPage = (function (_super) {
    __extends(IndexPage, _super);
    function IndexPage() {
        var _this = this;
        _super.apply(this, arguments);
        this.updatePage = function (pageState) {
            console.log("Update Index", _this.getDomNode());
        };
    }
    return IndexPage;
}(Page));
