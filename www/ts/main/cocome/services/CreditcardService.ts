import {Service} from "../../framework/Service";
import {Item} from "../types/Item";
import {Creditcard} from "../types/Creditcard";
import {LoginService} from "./LoginService";
import {ServiceHolder} from "../../framework/ServiceHolder";
import {Settings} from "../Settings";
/**
 * Created by Joshua on 10.02.2017.
 */

export class CreditcardService extends Service {
    
    private cards: Array<Creditcard> = [];

    initService(): void {
    }

    closeService(): void {
    }

    public getCarts = ():Array<Creditcard> => {
        let result:Array<Creditcard> = new Array();

        $.ajax({
            url: Settings.url+"/api/creditcards/",
            async: false,
            dataType: "json",
            type: "get", //send it through get method
            data: {
                user: (<LoginService>ServiceHolder.getInstance().getService("login")).user,
                password: (<LoginService>ServiceHolder.getInstance().getService("login")).password
            },
        }).done(function (data) {
            for(let card of data)
            {
                result.push(new Creditcard(null,null,null).updateData(card))
            }
        });

        return result;
    }

    public addCard = (card:Creditcard):Array<Creditcard> => {
        let result:Array<Creditcard> = new Array();

        $.ajax({
            url: Settings.url+"/api/creditcards/add",
            async: false,
            dataType: "json",
            type: "get", //send it through get method
            data: {
                user: (<LoginService>ServiceHolder.getInstance().getService("login")).user,
                password: (<LoginService>ServiceHolder.getInstance().getService("login")).password,
                card: JSON.stringify(card)
            },
        }).done(function (data) {
            result = data;
        });

        return result;
    }
    public checkPin = (card:Creditcard, pin:number) => {
        let result:boolean = false;

        $.ajax({
            url: Settings.url+"/api/creditcards/checkpin",
            async: false,
            dataType: "json",
            type: "get", //send it through get method
            data: {
                user: (<LoginService>ServiceHolder.getInstance().getService("login")).user,
                card: JSON.stringify(card),
                pin: pin
            },
        }).done(function (data) {
            result = data;
        });

        return result;
    }

    public getCartById = (id:number):Creditcard => {
        for(let card of this.getCarts())
        {
            if(card.getId() == id)
                return card;
        }
        return null;
    }
}