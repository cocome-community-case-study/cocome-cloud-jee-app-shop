"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var main_1 = require("../../main");
var UiComponent_1 = require("../../framework/UiComponent");
var CartPageState_1 = require("../pages/cart/CartPageState");
/**
 * Created by Joshua on 06.02.2017.
 */
var ToolbarComponent = (function (_super) {
    __extends(ToolbarComponent, _super);
    function ToolbarComponent(title, items) {
        var _this = this;
        _super.call(this);
        this.setTitle = function (title) {
            _this.model.setTitle(title);
        };
        this.setCartItems = function (items) {
            _this.model.setCartItems(items);
        };
        this.model = new ToolbarComponentModel(title);
        this.model.setCartItems(items);
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
            cartItems: 0,
            openMenu: function () {
                main_1.main.app.openMenu();
            },
            openCart: function () {
                main_1.main.app.openPage(new CartPageState_1.CartPageState());
            }
        };
    }
    ToolbarComponentModel.prototype.setTitle = function (title) {
        this.toolbar.title = title;
    };
    ToolbarComponentModel.prototype.setCartItems = function (items) {
        this.toolbar.cartItems = items;
    };
    return ToolbarComponentModel;
}());
