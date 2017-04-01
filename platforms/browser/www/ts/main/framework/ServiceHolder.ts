import {Service} from "./Service";
import {SearchHistoryService} from "../cocome/services/SearchHistoryService";
import {CartService} from "../cocome/services/CartService";
import {EnterpriseService} from "../cocome/services/EnterpriseService";
import {SelectedShopService} from "../cocome/services/SelectedShopService";
import {ItemService} from "../cocome/services/ItemService";
import {LoginService} from "../cocome/services/LoginService";
import {CreditcardService} from "../cocome/services/CreditcardService";
import {SaleService} from "../cocome/services/SaleService";
/**
 * Created by Joshua on 10.02.2017.
 */
interface ServiceDictionary {
    [index: string]: Service;
}

export class ServiceHolder{

   private static instance:ServiceHolder;
   private services = {} as ServiceDictionary;

    private constructor()
    {
        this.services["searchHistory"] = new SearchHistoryService();
        this.services["cart"] = new CartService();
        this.services["enterprise"] = new EnterpriseService();
        this.services["selectedStore"] = new SelectedShopService();
        this.services["item"] = new ItemService();
        this.services["login"] = new LoginService();
        this.services["creditcard"] = new CreditcardService();
        this.services["sale"] = new SaleService();
    }

    public static getInstance():ServiceHolder
    {
        if(ServiceHolder.instance == null)
            ServiceHolder.createInstance();
        return ServiceHolder.instance;
    }

    private static createInstance() {
        ServiceHolder.instance = new ServiceHolder();
    }

    public getService(name:string):Service
    {
        return this.services[name];
    }
}