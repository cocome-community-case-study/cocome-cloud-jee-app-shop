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
var ItemPageState = (function (_super) {
    __extends(ItemPageState, _super);
    function ItemPageState(itemId) {
        _super.call(this);
        this._id = itemId;
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
