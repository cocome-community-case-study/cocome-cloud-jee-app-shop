import {Service} from "../../framework/Service";
import {Item} from "../types/Item";
import {Store} from "../types/Store";
/**
 * Created by Joshua on 10.02.2017.
 */

export class SelectedShopService extends Service {

    private _selectedStore: Store;

    initService(): void {
    }

    closeService(): void {
    }

    get selectedStore(): Store {
        return this._selectedStore;
    }

    set selectedStore(value: Store) {
        this._selectedStore = value;
    }
}