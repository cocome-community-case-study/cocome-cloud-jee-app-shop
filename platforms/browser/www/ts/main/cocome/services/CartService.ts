import {Service} from "../../framework/Service";
import {Item} from "../types/Item";
/**
 * Created by Joshua on 10.02.2017.
 */

export class CartService extends Service {
    
    private items: Array<Item> = [];

    initService(): void {
    }

    closeService(): void {
    }

    public getItemsCount = (): number => {
        return this.items.length;
    }

    public addItem = (item: Item): void => {
        this.items.push(item);
    }

    public clear = ():void => {
        this.items = [];
    }

    public removeItem = (item: Item): void => {
        let index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    public getItems = (): Array<Item> => {
        return this.items;
    }
}