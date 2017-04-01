import {Page} from "../../../framework/Page";
import {PageState} from "../../../framework/PageState";
import {ToolbarComponent} from "../../uicomponents/ToolbarComponent";
import {SearchComponent} from "../../uicomponents/SearchComponent";
import {UiComponent} from "../../../framework/UiComponent";
import {CocomeAppSettings} from "../../CocomeAppSettings";
import {PageUiComponent} from "../../../framework/PageUiComponent";
import {ServiceHolder} from "../../../framework/ServiceHolder";
import {Item} from "../../types/Item";
import {CartService} from "../../services/CartService";
import {ItemService} from "../../services/ItemService";
import {ItemPageState} from "./ItemPageState";
import {SelectedShopService} from "../../services/SelectedShopService";
import {I18n} from "../../../framework/I18n";
/**
 * Created by Joshua on 19.01.2017.
 */
/// <reference path="../../../framework/Page.ts" />


export class ItemPage extends Page {

    private toolbar: UiComponent;
    private search: UiComponent;
    private uicomponent: UiComponent;
    private cartService: CartService;
    private itemService: ItemService;
    private selectedStoreService: SelectedShopService;

    public updatePage(pageState: PageState) {
        console.log("Item Index", this.getDomNode());

        let state = <ItemPageState> pageState;

        this.selectedStoreService = <SelectedShopService>ServiceHolder.getInstance().getService("selectedStore");
        this.cartService = <CartService>ServiceHolder.getInstance().getService("cart");

        this.toolbar = new ToolbarComponent("Item", this.cartService.getItemsCount());
        this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));

        this.search = new SearchComponent("");
        this.search.applyBinding(this.getContentDomNode().find("#search"));

        this.itemService = <ItemService>ServiceHolder.getInstance().getService("item");

        this.uicomponent = new ItemPageComponent(this.itemService.getItemById(this.selectedStoreService.selectedStore , state.itemId), <ToolbarComponent> this.toolbar);
        this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
    }

    public getDefaultPageState(): PageState {
        return new ItemPageState(0);
    }

    public closePage(): void {
    }
}

class ItemPageComponent extends PageUiComponent {
    private model: any = {};

    constructor(item:Item, toolbar:ToolbarComponent) {
        super();
        this.model.item = item;
        this.model.toolbar = toolbar;
        this.model.addToCart = ():void =>
        {
            let cartService = <CartService>ServiceHolder.getInstance().getService("cart");
            cartService.addItem(this.model.item);

            let options:any = {};
            options.title = I18n.getI18n().added;
            options.message = I18n.getI18n().itemAdded;
            options.callback = () => {
                this.model.toolbar.recalculate();
            }
            ons.notification.alert(options);
        }
    }

    getModel(): any {
        return this.model;
    }
}