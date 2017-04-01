"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../framework/App.ts"/>
var AppMenu_1 = require("../framework/AppMenu");
var App_1 = require("../framework/App");
var IndexPageState_1 = require("./pages/index/IndexPageState");
var IndexPage_1 = require("./pages/index/IndexPage");
var PageData_1 = require("../framework/PageData");
var SearchPage_1 = require("./pages/search/SearchPage");
var ItemPage_1 = require("./pages/item/ItemPage");
/**
 * Created by Joshua on 16.01.2017.
 */
var CococmeApp = (function (_super) {
    __extends(CococmeApp, _super);
    function CococmeApp(splitter, menuElement) {
        _super.call(this, splitter);
        this._menuElement = menuElement;
        console.log("COCOME APP: constructor");
    }
    Object.defineProperty(CococmeApp.prototype, "menu", {
        get: function () {
            return this._menu;
        },
        enumerable: true,
        configurable: true
    });
    CococmeApp.prototype.openPage = function (pageState) {
        this.navigator.updatePage(pageState);
    };
    CococmeApp.prototype.initializeApp = function () {
        console.log("COCOME APP: initializeApp");
        this.createMenu($("#menu"));
        this.navigator.updatePage(new IndexPageState_1.IndexPageState());
    };
    CococmeApp.prototype.initializeNavigator = function () {
        console.log("COCOME APP: initializeNavigator");
        this.navigator.addPage(new IndexPage_1.IndexPage($("#home\\.html"), "indexpage", new PageData_1.PageData("index", "Home", true)));
        this.navigator.addPage(new SearchPage_1.SearchPage($("#search\\.html"), "searchpage", new PageData_1.PageData("search", "Search", true)));
        this.navigator.addPage(new ItemPage_1.ItemPage($("#item\\.html"), "itempage", new PageData_1.PageData("item", "Item", true)));
    };
    CococmeApp.prototype.createMenu = function (menuDOM) {
        this._menu = new AppMenu_1.AppMenu(menuDOM, this._menuElement, this.navigator, this);
    };
    CococmeApp.prototype.closeMenu = function () {
        this.menu.close();
    };
    CococmeApp.prototype.openMenu = function () {
        this.menu.open();
    };
    return CococmeApp;
}(App_1.App));
exports.CococmeApp = CococmeApp;
