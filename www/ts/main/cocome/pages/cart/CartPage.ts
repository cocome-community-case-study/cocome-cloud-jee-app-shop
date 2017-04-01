import {Page} from "../../../framework/Page";
import {PageState} from "../../../framework/PageState";
import {ToolbarComponent} from "../../uicomponents/ToolbarComponent";
import {SearchComponent} from "../../uicomponents/SearchComponent";
import {UiComponent} from "../../../framework/UiComponent";
import {CocomeAppSettings} from "../../CocomeAppSettings";
import {PageUiComponent} from "../../../framework/PageUiComponent";
import {ServiceHolder} from "../../../framework/ServiceHolder";
import {SearchHistoryService} from "../../services/SearchHistoryService";
import {Item} from "../../types/Item";
import {IndexPageState} from "../index/IndexPageState";
import {CartService} from "../../services/CartService";
import {CartPageState} from "./CartPageState";
import {LoginService} from "../../services/LoginService";
import {main} from "../../../main";
import {CheckoutPageState} from "../checkout/CheckoutPageState";
import {Creditcard} from "../../types/Creditcard";
import {CreditcardService} from "../../services/CreditcardService";
/**
 * Created by Joshua on 19.01.2017.
 */
/// <reference path="../../../framework/Page.ts" />


export class CartPage extends Page {

    private toolbar: UiComponent;
    private search: UiComponent;
    private uicomponent: UiComponent;
    private cartService: CartService;

    public updatePage(pageState: PageState) {
        console.log("Cartpage", this.getDomNode());

        this.cartService = <CartService>ServiceHolder.getInstance().getService("cart");

        this.toolbar = new ToolbarComponent("Cart", this.cartService.getItemsCount());
        this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));

        this.search = new SearchComponent("");
        this.search.applyBinding(this.getContentDomNode().find("#search"));

        console.log(this.cartService.getItems());

        this.uicomponent = new CartPageComponent(<ToolbarComponent>this.toolbar);
        this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
    }

    public getDefaultPageState(): PageState {
        return new CartPageState();
    }

    public closePage(): void {
    }
}

class CartPageComponent extends PageUiComponent {
    private model: CartPageComponentModel;

    constructor(toolbar: ToolbarComponent) {
        super();
        this.model = new CartPageComponentModel(toolbar);
    }

    getModel(): any {
        return this.model;
    }
}

class CartPageComponentModel {
    private sum: KnockoutComputed<number>;
    private remove: (item: Item) => void;
    private items: KnockoutComputed<Array<Item>>;
    private toolbar: ToolbarComponent;
    private buy: () => void;

    constructor(toolbar: ToolbarComponent) {
        this.toolbar = toolbar;
        this.items = ko.computed(() => {
            return (<CartService>ServiceHolder.getInstance().getService("cart")).getItems();
        }, this.sum);
        this.sum = ko.computed((): number => {
            let sum = 0;
            for (let item of this.items()) {
                sum = sum + item.getPrice()
            }
            return sum;
        }, this.items);
        this.remove = (item: Item): void => {
            (<CartService>ServiceHolder.getInstance().getService("cart")).removeItem(item);
            this.sum.notifySubscribers();
            this.items.notifySubscribers();
            this.toolbar.recalculate();
        };
        this.buy = (): void => {
            if((<LoginService>ServiceHolder.getInstance().getService("login")).isUserLogedIn)
            {
                main.app.openPage(new CheckoutPageState());
            }
            else {
                ons.notification.alert({message: "Please login first!"})
            }
        }
    }
}