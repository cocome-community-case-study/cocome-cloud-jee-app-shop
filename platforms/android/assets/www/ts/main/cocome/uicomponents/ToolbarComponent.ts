import {main} from "../../main";
import {UiComponent} from "../../framework/UiComponent";
import {CartPageState} from "../pages/cart/CartPageState";
import {CartService} from "../services/CartService";
import {ServiceHolder} from "../../framework/ServiceHolder";
/**
 * Created by Joshua on 06.02.2017.
 */
export class ToolbarComponent extends UiComponent {

    private model: ToolbarComponentModel;

    constructor(title: string, items: number) {
        super();
        this.model = new ToolbarComponentModel(title);
    }

    public getModel(): any {
        return this.model;
    }

    public setTitle = (title: string): void => {
        this.model.setTitle(title);
    }

    public recalculate = (): void => {
        this.model.recalculate();
    }

}

class ToolbarComponentModel {
    private toolbar: any;

    constructor(title: string) {
        this.toolbar = {};
        this.toolbar.title = title;
        this.toolbar.dummy = ko.observable();
        this.toolbar.cartItems = ko.computed((): number => {
            this.toolbar.dummy();
            let cartService = <CartService>ServiceHolder.getInstance().getService("cart");
            return cartService.getItemsCount();
        });
        this.toolbar.recalculate = function () {
            this.dummy.notifySubscribers();
        };
        this.toolbar.openMenu = function () {
            main.app.openMenu();
        };
        this.toolbar.openCart = function () {
            main.app.openPage(new CartPageState());
        }
    }

    public setTitle = (title: string) => {
        this.toolbar.title = title;
    }

    public setCartItems(items: number) {
        this.toolbar.cartItems = items;
    }

    public recalculate() {
        this.toolbar.recalculate();
    }
}