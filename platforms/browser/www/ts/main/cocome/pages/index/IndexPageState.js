"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PageState_1 = require("../../../framework/PageState");
/**
 * Created by Joshua on 19.01.2017.
 */
/// <reference path="../../../framework/PageState.ts" />
var IndexPageState = (function (_super) {
    __extends(IndexPageState, _super);
    function IndexPageState() {
        _super.apply(this, arguments);
    }
    IndexPageState.prototype.getPageName = function () {
        return "index";
    };
    return IndexPageState;
}(PageState_1.PageState));
exports.IndexPageState = IndexPageState;
