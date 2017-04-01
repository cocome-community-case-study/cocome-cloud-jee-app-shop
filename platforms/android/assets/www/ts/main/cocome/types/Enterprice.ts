import {Store} from "./Store";
/**
 * Created by Joshua on 27.02.2017.
 */

export class Enterprise {
    private name: string;
    private stores: Array<Store> = [];

    constructor(name: string) {
        this.name = name;
    }

    public updateData(data:any):Enterprise {
        this.name = data.name;
        for(let store in data.stores)
        {
            this.stores.push(new Store(0,'','').updateData(data.stores[store]));
        }
        return this;
    }

    public addStore = (store: Store) => {
        this.stores.push(store);
    }

    public getName(): string {
        return this.name;
    }

    public getStores(): Array<Store> {
        return this.stores;
    }
}