import {Page} from "../../../framework/Page";
import {PageState} from "../../../framework/PageState";
import {ToolbarComponent} from "../../uicomponents/ToolbarComponent";
import {SearchComponent} from "../../uicomponents/SearchComponent";
import {UiComponent} from "../../../framework/UiComponent";
import {PageUiComponent} from "../../../framework/PageUiComponent";
import {ServiceHolder} from "../../../framework/ServiceHolder";
import {CartService} from "../../services/CartService";
import {LoginPageState} from "./LoginPageState";
import {LoginService} from "../../services/LoginService";
import {IndexPageState} from "../index/IndexPageState";
import {main} from "../../../main";
/**
 * Created by Joshua on 19.01.2017.
 */
/// <reference path="../../../framework/Page.ts" />


export class LoginPage extends Page {

    private toolbar: UiComponent;
    private search: UiComponent;
    private uicomponent: UiComponent;
    private cartService: CartService;

    public updatePage(pageState: PageState) {
        console.log("Loginpage", this.getDomNode());

        this.cartService = <CartService>ServiceHolder.getInstance().getService("cart");

        this.toolbar = new ToolbarComponent("Login", this.cartService.getItemsCount());
        this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));

        this.search = new SearchComponent("");
        this.search.applyBinding(this.getContentDomNode().find("#search"));

        console.log(this.cartService.getItems());

        this.uicomponent = new LoginPageComponent();
        this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
    }

    public getDefaultPageState(): PageState {
        return new LoginPageState();
    }

    public closePage(): void {
    }
}

class LoginPageComponent extends PageUiComponent {
    private model: LoginPageComponentModel;

    constructor() {
        super();
        this.model = new LoginPageComponentModel();
    }

    getModel(): any {
        return this.model;
    }
}

class LoginPageComponentModel {
    private login: () => void;
    private username: KnockoutObservable<string>;
    private password: KnockoutObservable<string>;

    constructor() {
        this.username = ko.observable("");
        this.password = ko.observable("");
        this.login = (): void => {
            let ok = (<LoginService>ServiceHolder.getInstance().getService("login")).loginUser(this.username(), this.password());
            if (!ok) {
                ons.notification.alert({message: "Login failed!"});
                this.password("");
            }
            else {
                ons.notification.alert({
                    message: "Login successful!", callback: () => {
                        main.app.openPage(new IndexPageState());
                    }
                });
                this.password("");

            }
        }
    }
}