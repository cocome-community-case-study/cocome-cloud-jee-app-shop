import {Page} from "../../../framework/Page";
import {PageState} from "../../../framework/PageState";
import {IndexPageState} from "./IndexPageState";
import {ToolbarComponent} from "../../uicomponents/ToolbarComponent";
import {SearchComponent} from "../../uicomponents/SearchComponent";
import {UiComponent} from "../../../framework/UiComponent";
import {CocomeAppSettings} from "../../CocomeAppSettings";
import {PageUiComponent} from "../../../framework/PageUiComponent";
import {ServiceHolder} from "../../../framework/ServiceHolder";
import {SearchHistoryService} from "../../services/SearchHistoryService";
import {CartService} from "../../services/CartService";
import {Enterprise} from "../../types/Enterprice";
import {EnterpriseService} from "../../services/EnterpriseService";
import {Store} from "../../types/Store";
import {I18n} from "../../../framework/I18n";
import {SelectedShopService} from "../../services/SelectedShopService";
import {main} from "../../../main";
import {SearchPageState} from "../search/SearchPageState";
/**
 * Created by Joshua on 19.01.2017.
 */
/// <reference path="../../../framework/Page.ts" />


export class IndexPage extends Page {

    private toolbar: UiComponent;
    private search: UiComponent;
    private uicomponent: UiComponent;
    private historyService: SearchHistoryService;
    private cartService: CartService;
    private enterpriseService: EnterpriseService;

    public updatePage(pageState: PageState) {
        console.log("Update Index", this.getDomNode());

        this.historyService = <SearchHistoryService>ServiceHolder.getInstance().getService("searchHistory");
        this.cartService = <CartService>ServiceHolder.getInstance().getService("cart");
        this.enterpriseService = <EnterpriseService>ServiceHolder.getInstance().getService("enterprise");

        this.toolbar = new ToolbarComponent(CocomeAppSettings.APP_NAME_SHORT, this.cartService.getItemsCount());
        this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));

        this.search = new SearchComponent("");
        this.search.applyBinding(this.getContentDomNode().find("#search"));

        this.uicomponent = new IndexPageComponent(CocomeAppSettings.APP_NAME, this.enterpriseService.getEnterprises());
        this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
    }

    public getDefaultPageState(): PageState {
        return new IndexPageState();
    }

    public closePage(): void {
    }
}

class IndexPageComponent extends PageUiComponent {
    private model: IndexPageComponentModel;

    constructor(title: string, enterprises: Array<Enterprise>) {
        super();
        this.model = new IndexPageComponentModel(title, enterprises);
        this.model.selectedStore.subscribe((store:Store) => {
            if(store != null) {
                let options: any = {};
                options.message = I18n.getI18n().youSelected + ": " + store.getName();
                options.title = I18n.getI18n().selection;
                options.buttonLabels = [I18n.getI18n().okay];
                options.callback = function () {
                    (<SelectedShopService> ServiceHolder.getInstance().getService("selectedStore")).selectedStore = store;
                    main.app.openPage(new SearchPageState());
                }
                ons.notification.confirm(options);
                (<CartService> ServiceHolder.getInstance().getService("cart")).clear();
            };
        });
    }

    getModel(): any {
        return this.model;
    }
}

class IndexPageComponentModel {
    private title: string;
    private enterprises: Array<Enterprise>;
    public selectedStore: KnockoutObservable<Store>;
    public selectedEnterprise: KnockoutObservable<Enterprise>;
    private storesAreVisible: KnockoutComputed<Boolean>;
    private stores: KnockoutComputed<Array<Store>>;

    constructor(title: string, enterprises: Array<Enterprise>) {
        this.title = title;
        this.enterprises = enterprises;
        this.selectedEnterprise = ko.observable(null);
        this.stores = ko.pureComputed((): Array<Store> => {
            if (this.selectedEnterprise() != null)
            {
                console.log(this.selectedEnterprise());
                return this.selectedEnterprise().getStores();
            }
            else return [];
        }, this.selectedEnterprise);
        this.selectedStore = ko.observable(null);
        this.storesAreVisible = ko.pureComputed((): Boolean => {
            return this.selectedEnterprise() != null;
        }, this.selectedStore);
    }
}