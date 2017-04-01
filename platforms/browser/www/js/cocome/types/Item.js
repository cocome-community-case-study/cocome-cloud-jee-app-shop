define(["require", "exports"], function (require, exports) {
    "use strict";
    var Item = (function () {
        function Item(id, name, imageURL, description, price, amount) {
            this.id = id;
            this.name = name;
            this.imageURL = imageURL;
            this.description = description;
            this.price = price;
            this.amount = amount;
        }
        Item.prototype.getID = function () {
            return this.id;
        };
        Item.prototype.getName = function () {
            return this.name;
        };
        Item.prototype.getImageURL = function () {
            return this.imageURL;
        };
        Item.prototype.getPrice = function () {
            return this.price;
        };
        Item.prototype.getDescription = function () {
            return this.description;
        };
        Item.prototype.getAmount = function () {
            return this.amount;
        };
        Item.prototype.updateData = function (data) {
            this.id = data.id;
            this.name = data.name;
            this.imageURL = data.imageURL;
            this.description = data.description;
            this.price = data.price;
            this.amount = data.amount;
            return this;
        };
        return Item;
    }());
    exports.Item = Item;
});
//# sourceMappingURL=Item.js.map