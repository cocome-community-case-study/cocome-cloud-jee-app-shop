/**
 * Created by Joshua on 10.02.2017.
 */
"use strict";
var Item = (function () {
    function Item(id, name, imageURL, description, price) {
        this._id = id;
        this._name = name;
        this._imageURL = imageURL;
        this._description = description;
        this._price = price;
    }
    Object.defineProperty(Item.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "imageURL", {
        get: function () {
            return this._imageURL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    return Item;
}());
exports.Item = Item;
