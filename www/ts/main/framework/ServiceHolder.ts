import {Service} from "./Service";
import {SearchHistoryService} from "../services/SearchHistoryService";
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