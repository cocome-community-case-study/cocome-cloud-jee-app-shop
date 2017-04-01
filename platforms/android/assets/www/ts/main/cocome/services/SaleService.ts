import {Service} from "../../framework/Service";
import {Item} from "../types/Item";
import {Store} from "../types/Store";
import {Creditcard} from "../types/Creditcard";
import {LoginService} from "./LoginService";
import {ServiceHolder} from "../../framework/ServiceHolder";
/**
 * Created by Joshua on 10.02.2017.
 */

export class SaleService extends Service {

    initService(): void {
    }

    closeService(): void {
    }

    public doSale = (store: Store, items:Array<Item>, card:Creditcard):boolean => {
        let result:boolean = false;
        $.ajax({
            url: "http://localhost:1234/api/enterprise/",
            async: false,
            dataType: "json",
            data: {
                store: JSON.stringify(store),
                items: JSON.stringify(items),
                card: JSON.stringify(card),
                user: (<LoginService>ServiceHolder.getInstance().getService("login")).user,
            },
        }).done(function (data) {
            console.log("Test: "+data)
            result = data;
        });

        return result;
    }
}