"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Page_1 = require("../../../framework/Page");
var ToolbarComponent_1 = require("../../uicomponents/ToolbarComponent");
var SearchComponent_1 = require("../../uicomponents/SearchComponent");
var CocomeAppSettings_1 = require("../../CocomeAppSettings");
var PageUiComponent_1 = require("../../../framework/PageUiComponent");
var ServiceHolder_1 = require("../../../framework/ServiceHolder");
var ItemPageState_1 = require("./ItemPageState");
/**
 * Created by Joshua on 19.01.2017.
 */
/// <reference path="../../../framework/Page.ts" />
var ItemPage = (function (_super) {
    __extends(ItemPage, _super);
    function ItemPage() {
        _super.apply(this, arguments);
    }
    ItemPage.prototype.updatePage = function (pageState) {
        console.log("Item Index", this.getDomNode());
        var state = pageState;
        this.selectedStoreService = ServiceHolder_1.ServiceHolder.getInstance().getService("selectedStore");
        this.cartService = ServiceHolder_1.ServiceHolder.getInstance().getService("cart");
        this.toolbar = new ToolbarComponent_1.ToolbarComponent("Item", this.cartService.getItemsCount());
        this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));
        this.search = new SearchComponent_1.SearchComponent("");
        this.search.applyBinding(this.getContentDomNode().find("#search"));
        this.itemService = ServiceHolder_1.ServiceHolder.getInstance().getService("item");
        this.uicomponent = new ItemPageComponent(CocomeAppSettings_1.CocomeAppSettings.APP_NAME, this.itemService.getItemById(this.selectedStoreService.selectedStore, state.itemId));
        this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
    };
    ItemPage.prototype.getDefaultPageState = function () {
        return new ItemPageState_1.ItemPageState(0);
    };
    ItemPage.prototype.closePage = function () {
    };
    return ItemPage;
}(Page_1.Page));
exports.ItemPage = ItemPage;
var ItemPageComponent = (function (_super) {
    __extends(ItemPageComponent, _super);
    function ItemPageComponent(title, item) {
        _super.call(this);
        this.model = new ItemPageComponentModel(title, item);
    }
    ItemPageComponent.prototype.getModel = function () {
        return this.model;
    };
    return ItemPageComponent;
}(PageUiComponent_1.PageUiComponent));
var ItemPageComponentModel = (function () {
    function ItemPageComponentModel(title, item) {
        this.title = title;
        this.item = item;
    }
    return ItemPageComponentModel;
}());
