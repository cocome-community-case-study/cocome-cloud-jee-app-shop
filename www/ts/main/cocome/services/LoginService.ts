import {Service} from "../../framework/Service";
import {Item} from "../types/Item";
import {Settings} from "../Settings";
/**
 * Created by Joshua on 10.02.2017.
 */

export class LoginService extends Service {

    private _isUserLogedIn:boolean;
    private _user: string;
    private _password: string;

    initService(): void {
    }

    closeService(): void {
    }

    public loginUser = (username:string, password:string):boolean => {
        let result:boolean = false;

        $.ajax({
            url: Settings.url+"/api/login/",
            async: false,
            dataType: "json",
            type: "get", //send it through get method
            data: {
                user: username,
                password: password
            },
        }).done(function (data) {
            result = data;
        });

        this._isUserLogedIn = result;

        if(this._isUserLogedIn) {
            this._user = username;
            this._password = password;
        }

        return result;
    }

    get isUserLogedIn(): boolean {
        return this._isUserLogedIn;
    }

    get user(): string {
        return this._user;
    }

    get password():string {
        return this._password;
    }
}