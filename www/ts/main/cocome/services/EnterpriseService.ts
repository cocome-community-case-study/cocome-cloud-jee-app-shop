import {Service} from "../../framework/Service";
import {Item} from "../types/Item";
import {Enterprise} from "../types/Enterprice";
import {Store} from "../types/Store";
import {Settings} from "../Settings";
/**
 * Created by Joshua on 10.02.2017.
 */

export class EnterpriseService extends Service {
    private enterprises: Array<Enterprise> = [];

    constructor() {
        super();
    }

    initService(): void {
    }

    closeService(): void {
    }

    public getEnterprises = (): Array<Enterprise> => {
        let result:Array<Enterprise> = new Array();

        $.ajax({
            url: Settings.url+"/api/enterprise/",
            async: false,
            dataType: "json"
        }).done(function (data:Array<Enterprise>) {
            for(let enterprise of data)
            {
                result.push(new Enterprise("").updateData(enterprise))
            }
        });

        return result;
    }


}