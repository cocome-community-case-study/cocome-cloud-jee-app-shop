var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../framework/Service", "../types/Item"], function (require, exports, Service_1, Item_1) {
    "use strict";
    var ItemService = (function (_super) {
        __extends(ItemService, _super);
        function ItemService() {
            _super.apply(this, arguments);
            this._items = [];
            this.allItems = function (store) {
                var result = new Array();
                $.ajax({
                    url: "http://localhost:1234/api/items/",
                    async: false,
                    dataType: "json",
                    type: "get",
                    data: {
                        store: JSON.stringify(store)
                    },
                }).done(function (data) {
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var item = data_1[_i];
                        result.push(new Item_1.Item(null, null, null, null, null, null).updateData(item));
                    }
                });
                return result;
            };
            this.querryItems = function (store, query) {
                var result = new Array();
                $.ajax({
                    url: "http://localhost:1234/api/items/query",
                    async: false,
                    dataType: "json",
                    type: "get",
                    data: {
                        store: JSON.stringify(store),
                        query: query
                    },
                }).done(function (data) {
                    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                        var item = data_2[_i];
                        result.push(new Item_1.Item(null, null, null, null, null, null).updateData(item));
                    }
                });
                return result;
            };
        }
        ItemService.prototype.initService = function () {
            this._items.push(new Item_1.Item(1, "Item ABC", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 8));
            this._items.push(new Item_1.Item(2, "Item CDE", "http://placekitten.com/g/140/140", this.getDescrption(), 34.34, 34));
            this._items.push(new Item_1.Item(3, "Item EFG", "http://placekitten.com/g/140/140", this.getDescrption(), 22.11, 45));
            this._items.push(new Item_1.Item(4, "Item HIJ", "http://placekitten.com/g/140/140", this.getDescrption(), 11.15, 33));
            this._items.push(new Item_1.Item(5, "Item KLM", "http://placekitten.com/g/140/140", this.getDescrption(), 67.54, 34));
            this._items.push(new Item_1.Item(6, "Item ABC", "http://placekitten.com/g/140/140", this.getDescrption(), 15.13, 123));
            this._items.push(new Item_1.Item(7, "Item ABCD", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 13));
            this._items.push(new Item_1.Item(8, "Item ABCDE", "http://placekitten.com/g/140/140", this.getDescrption(), 4.54, 12));
            this._items.push(new Item_1.Item(9, "Item ABCDEF", "http://placekitten.com/g/140/140", this.getDescrption(), 34.23, 23));
            this._items.push(new Item_1.Item(10, "Item ABCDEFG", "http://placekitten.com/g/140/140", this.getDescrption(), 25.66, 123));
            this._items.push(new Item_1.Item(11, "Item ABC1", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 123));
            this._items.push(new Item_1.Item(12, "Item ABC2", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 123));
            this._items.push(new Item_1.Item(13, "Item ABC3", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 123));
            this._items.push(new Item_1.Item(14, "Item ABC4", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 123));
            this._items.push(new Item_1.Item(15, "Item ABC5", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 123));
            this._items.push(new Item_1.Item(16, "Item ABCBBBBB", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 123));
            this._items.push(new Item_1.Item(17, "Item ABCBBBBBB", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 123));
            console.log("Items " + this._items.length);
        };
        ItemService.prototype.getDescrption = function () {
            return "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
        };
        ItemService.prototype.closeService = function () {
        };
        ItemService.prototype.getItemById = function (store, itemId) {
            var item = null;
            $.ajax({
                url: "http://localhost:1234/api/items/id",
                async: false,
                dataType: "json",
                type: "get",
                data: {
                    store: JSON.stringify(store),
                    id: itemId
                },
            }).done(function (data) {
                item = new Item_1.Item(null, null, null, null, null, null).updateData(data);
            });
            return item;
        };
        return ItemService;
    }(Service_1.Service));
    exports.ItemService = ItemService;
});
//# sourceMappingURL=ItemService.js.map