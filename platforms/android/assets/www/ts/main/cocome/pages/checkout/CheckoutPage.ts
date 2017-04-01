import {Page} from "../../../framework/Page";
import {PageState} from "../../../framework/PageState";
import {ToolbarComponent} from "../../uicomponents/ToolbarComponent";
import {SearchComponent} from "../../uicomponents/SearchComponent";
import {UiComponent} from "../../../framework/UiComponent";
import {PageUiComponent} from "../../../framework/PageUiComponent";
import {ServiceHolder} from "../../../framework/ServiceHolder";
import {CartService} from "../../services/CartService";
import {CheckoutPageState} from "./CheckoutPageState";
import {Item} from "../../types/Item";
import {Creditcard} from "../../types/Creditcard";
import {CreditcardService} from "../../services/CreditcardService";
import {SaleService} from "../../services/SaleService";
import {SelectedShopService} from "../../services/SelectedShopService";
import {Store} from "../../types/Store";
import {IndexPageState} from "../index/IndexPageState";
import {main} from "../../../main";
/**
 * Created by Joshua on 19.01.2017.
 */
/// <reference path="../../../framework/Page.ts" />


export class CheckoutPage extends Page {

    private toolbar: UiComponent;
    private search: UiComponent;
    private uicomponent: UiComponent;
    private cartService: CartService;

    public updatePage(pageState: PageState) {
        console.log("CheckoutPage", this.getDomNode());

        this.cartService = <CartService>ServiceHolder.getInstance().getService("cart");

        this.toolbar = new ToolbarComponent("Checkout", this.cartService.getItemsCount());
        this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));

        this.search = new SearchComponent("");
        this.search.applyBinding(this.getContentDomNode().find("#search"));

        console.log(this.cartService.getItems());

        this.uicomponent = new CheckoutPageComponent(<ToolbarComponent>this.toolbar);
        this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
    }

    public getDefaultPageState(): PageState {
        return new CheckoutPageState();
    }

    public closePage(): void {
    }
}

class CheckoutPageComponent extends PageUiComponent {
    private model: CheckoutPageComponentModel;

    constructor(toolbar: ToolbarComponent) {
        super();
        this.model = new CheckoutPageComponentModel(toolbar);
    }

    getModel(): any {
        return this.model;
    }
}

class CheckoutPageComponentModel {

    private sum: KnockoutComputed<number>;
    private items: KnockoutComputed<Array<Item>>;
    private cards: KnockoutComputed<Array<Creditcard>>;
    private addCreditcard: () => void;
    private buy: () => void;
    private card: KnockoutObservableArray<number>;

    constructor(toolbar: ToolbarComponent) {
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
        this.cards = ko.computed(() => {
            return (<CreditcardService>ServiceHolder.getInstance().getService("creditcard")).getCarts();
        }, this);
        this.addCreditcard = (): void => {
            ons.notification.prompt({
                message: "Please enter the Creditcard", title: "Creditcard", callback: (name: string): void => {
                    ons.notification.prompt({
                        message: "Please enter the Creditcard Pin", title: "Pin", callback: (pin: number): void => {
                            (<CreditcardService>ServiceHolder.getInstance().getService("creditcard")).addCard(new Creditcard(Math.round(Math.random() * 300), name, pin));
                            this.cards.notifySubscribers();
                        }
                    });
                }
            });
        };
        this.buy = (): void => {
            let cid = this.fixKnockoutBug(this.card());
            console.log(cid);
            let card:Creditcard = (<CreditcardService>ServiceHolder.getInstance().getService("creditcard")).getCartById(this.fixKnockoutBug(cid));
            console.log(card);
            let options = {
                message: "Please enter the PIN for "+card.getName(), inputType:"password", title: "Creditcard", callback: (pin: number): void => {
                    if(!(<CreditcardService>ServiceHolder.getInstance().getService("creditcard")).checkPin(card, pin))
                    {
                        ons.notification.alert({message:"Pin is wrong!"});
                    }
                    else
                    {
                        let store:Store = (<SelectedShopService>ServiceHolder.getInstance().getService("selectedStore")).selectedStore;

                        if((<SaleService>ServiceHolder.getInstance().getService("sale")).doSale(store, this.items(), card)) {
                            ons.notification.alert({message:"Sale successful!", callback: ():void => {
                                (<CartService>ServiceHolder.getInstance().getService("cart")).clear();
                                main.app.openPage(new IndexPageState);
                            }});
                        }
                        else
                        {
                            ons.notification.alert({message:"Sale failed!"});
                        }
                    }
                }
            };
            ons.notification.prompt(options);
        };
        this.card = ko.observableArray<number>([]);
    }

    private fixKnockoutBug(numbers: any):number {
        return numbers;
    }
}