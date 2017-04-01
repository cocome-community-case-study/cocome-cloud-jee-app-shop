"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Service_1 = require("../../framework/Service");
var Item_1 = require("../types/Item");
/**
 * Created by Joshua on 10.02.2017.
 */
var ItemService = (function (_super) {
    __extends(ItemService, _super);
    function ItemService() {
        var _this = this;
        _super.apply(this, arguments);
        this._items = [];
        this.allItems = function (store) {
            console.log("Items " + _this._items.length);
            return _this._items;
        };
        this.querryItems = function (store, query) {
            var result = [];
            for (var _i = 0, _a = _this.allItems(store); _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.name.indexOf(query) !== -1)
                    result.push(item);
            }
            return result;
        };
    }
    ItemService.prototype.initService = function () {
        this._items.push(new Item_1.Item(1, "Item ABC", "", "", 25.23));
        this._items.push(new Item_1.Item(2, "Item CDE", "", "", 34.34));
        this._items.push(new Item_1.Item(3, "Item EFG", "", "", 22.11));
        this._items.push(new Item_1.Item(4, "Item HIJ", "", "", 11.15));
        this._items.push(new Item_1.Item(5, "Item KLM", "", "", 67.54));
        this._items.push(new Item_1.Item(6, "Item ABC", "", "", 15.13));
        this._items.push(new Item_1.Item(7, "Item ABCD", "", "", 25.23));
        this._items.push(new Item_1.Item(8, "Item ABCDE", "", "", 4.54));
        this._items.push(new Item_1.Item(9, "Item ABCDEF", "", "", 34.23));
        this._items.push(new Item_1.Item(10, "Item ABCDEFG", "", "", 25.66));
        this._items.push(new Item_1.Item(11, "Item ABC1", "", "", 25.23));
        this._items.push(new Item_1.Item(12, "Item ABC2", "", "", 25.23));
        this._items.push(new Item_1.Item(13, "Item ABC3", "", "", 25.23));
        this._items.push(new Item_1.Item(14, "Item ABC4", "", "", 25.23));
        this._items.push(new Item_1.Item(15, "Item ABC5", "", "", 25.23));
        this._items.push(new Item_1.Item(16, "Item ABCBBBBB", "", "", 25.23));
        this._items.push(new Item_1.Item(17, "Item ABCBBBBBB", "", "", 25.23));
        console.log("Items " + this._items.length);
    };
    ItemService.prototype.closeService = function () {
    };
    ItemService.prototype.getItemById = function (store, itemId) {
        for (var _i = 0, _a = this.allItems(store); _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id == itemId)
                return item;
        }
        return null;
    };
    return ItemService;
}(Service_1.Service));
exports.ItemService = ItemService;
