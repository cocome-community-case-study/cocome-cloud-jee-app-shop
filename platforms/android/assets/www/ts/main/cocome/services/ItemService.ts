import {Service} from "../../framework/Service";
import {Item} from "../types/Item";
import {Store} from "../types/Store";
/**
 * Created by Joshua on 10.02.2017.
 */

export class ItemService extends Service {

    private _items: Array<Item> = [];

    initService(): void {
        this._items.push(new Item(1, "Item ABC", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 8));
        this._items.push(new Item(2, "Item CDE", "http://placekitten.com/g/140/140", this.getDescrption(), 34.34, 34));
        this._items.push(new Item(3, "Item EFG", "http://placekitten.com/g/140/140", this.getDescrption(), 22.11, 45));
        this._items.push(new Item(4, "Item HIJ", "http://placekitten.com/g/140/140", this.getDescrption(), 11.15, 33));
        this._items.push(new Item(5, "Item KLM", "http://placekitten.com/g/140/140", this.getDescrption(), 67.54, 34));

        this._items.push(new Item(6, "Item ABC", "http://placekitten.com/g/140/140", this.getDescrption(), 15.13, 123));
        this._items.push(new Item(7, "Item ABCD", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 13));
        this._items.push(new Item(8, "Item ABCDE", "http://placekitten.com/g/140/140", this.getDescrption(), 4.54, 12));
        this._items.push(new Item(9, "Item ABCDEF", "http://placekitten.com/g/140/140", this.getDescrption(), 34.23, 23));
        this._items.push(new Item(10, "Item ABCDEFG", "http://placekitten.com/g/140/140", this.getDescrption(), 25.66, 123));

        this._items.push(new Item(11, "Item ABC1", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 123));
        this._items.push(new Item(12, "Item ABC2", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 123));
        this._items.push(new Item(13, "Item ABC3", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 123));
        this._items.push(new Item(14, "Item ABC4", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 123));
        this._items.push(new Item(15, "Item ABC5", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 123));

        this._items.push(new Item(16, "Item ABCBBBBB", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 123));
        this._items.push(new Item(17, "Item ABCBBBBBB", "http://placekitten.com/g/140/140", this.getDescrption(), 25.23, 123));

        console.log("Items "+this._items.length);
    }

    private getDescrption():string {
        return "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
    }

    closeService(): void {
    }

    public allItems = (store: Store): Array<Item> => {
        let result:Array<Item> = new Array();

        $.ajax({
            url: "http://localhost:1234/api/items/",
            async: false,
            dataType: "json",
            type: "get", //send it through get method
            data: {
                store: JSON.stringify(store)
            },
        }).done(function (data) {
            for(let item of data)
            {
                result.push(new Item(null,null,null,null,null,null).updateData(item))
            }
        });

        return result;
    }

    public querryItems = (store: Store, query: string): Array<Item> => {
        let result:Array<Item> = new Array();

        $.ajax({
            url: "http://localhost:1234/api/items/query",
            async: false,
            dataType: "json",
            type: "get", //send it through get method
            data: {
                store: JSON.stringify(store),
                query: query
            },
        }).done(function (data) {
            for(let item of data)
            {
                result.push(new Item(null,null,null,null,null,null).updateData(item))
            }
        });


        return result;
    }

    getItemById(store:Store, itemId: number):Item {
        let item:Item = null;

        $.ajax({
            url: "http://localhost:1234/api/items/id",
            async: false,
            dataType: "json",
            type: "get", //send it through get method
            data: {
                store: JSON.stringify(store),
                id: itemId
            },
        }).done(function (data) {
            item = new Item(null,null,null,null,null,null).updateData(data);
        });

        return item;
    }
}