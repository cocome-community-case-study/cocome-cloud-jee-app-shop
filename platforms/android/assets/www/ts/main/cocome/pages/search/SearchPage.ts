import {SearchPageState} from "./SearchPageState";
import {PageState} from "../../../framework/PageState";
import {Page} from "../../../framework/Page";
import {ToolbarComponent} from "../../uicomponents/ToolbarComponent";
import {SearchComponent} from "../../uicomponents/SearchComponent";
import {ServiceHolder} from "../../../framework/ServiceHolder";
import {CartService} from "../../services/CartService";
import {CocomeAppSettings} from "../../CocomeAppSettings";
import {SelectedShopService} from "../../services/SelectedShopService";
import {I18n} from "../../../framework/I18n";
import {main} from "../../../main";
import {IndexPageState} from "../index/IndexPageState";
import {PageUiComponent} from "../../../framework/PageUiComponent";
import {Item} from "../../types/Item";
import {ItemService} from "../../services/ItemService";
import {ItemPageState} from "../item/ItemPageState";
/**
 * Created by Joshua on 19.01.2017.
 */
/// <reference path="../../../framework/Page.ts" />

export class SearchPage extends Page {
    private toolbar: ToolbarComponent;
    private search: SearchComponent;
    private cartService: CartService;
    private selectedStoreService: SelectedShopService;
    private pageState: SearchPageState;
    private itemService: ItemService;
    private uicomponent: SearchPageComponent;

    public updatePage(pageState: PageState): void {
        console.log("SearchPage Index", this.getDomNode());

        this.pageState = <SearchPageState> pageState;

        this.selectedStoreService = <SelectedShopService>ServiceHolder.getInstance().getService("selectedStore");

        this.cartService = <CartService>ServiceHolder.getInstance().getService("cart");
        this.itemService = <ItemService>ServiceHolder.getInstance().getService("item");

        this.toolbar = new ToolbarComponent(CocomeAppSettings.APP_NAME_SHORT, this.cartService.getItemsCount());
        this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));

        this.search = new SearchComponent(this.pageState.getSearchPhrase());
        this.search.applyBinding(this.getContentDomNode().find("#search"));

        if (this.selectedStoreService.selectedStore == null) {
            let options: any = {};
            options.message = I18n.getI18n().noShopSelected;
            options.callback = function () {
                main.app.openPage(new IndexPageState());
            }
            ons.notification.alert(options);

            return;
        }

        let items: Array<Item>;

        if (this.pageState.getSearchPhrase() != null) {
            items = this.itemService.querryItems(this.selectedStoreService.selectedStore, this.pageState.getSearchPhrase());
        }
        else {
            items = this.itemService.allItems(this.selectedStoreService.selectedStore);
        }

        this.uicomponent = new SearchPageComponent(items);
        this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
    }

    getDefaultPageState(): PageState {
        return new SearchPageState();
    }

    closePage(): void {
    }
}

class SearchPageComponent extends PageUiComponent {
    private model: SearchPageComponentModel;

    constructor(items: Array<Item>) {
        super();
        this.model = new SearchPageComponentModel(items);
    }

    getModel(): any {
        return this.model;
    }
}

class SearchPageComponentModel {

    private page: KnockoutObservable<number>;
    private changePage: (amount: number) => void;
    private settings: any = {};
    private allItems: Array<Item>;
    private items: KnockoutComputed<Array<Item>>;
    private openItem: (item:Item) => void;

    constructor(items: Array<Item>) {
        this.settings.step = 5;
        this.allItems = items;
        this.page = ko.observable(1);
        this.items = ko.computed((): Array<Item> => {
            return this.allItems.slice((this.page() - 1) * 5, ((this.page() - 1) * 5) + 5)
        }, this.page);
        this.changePage = (amount: number): void => {

            let steps = Math.ceil(this.allItems.length / this.settings.step);
            let currentPage = this.page() + amount;

            if (currentPage > 0 && currentPage <= steps)
                this.page(currentPage);
        },
        this.openItem = (item:Item):void => {
            console.log("Test");
            main.app.openPage(new ItemPageState(item.getID()));
        }
    }
}