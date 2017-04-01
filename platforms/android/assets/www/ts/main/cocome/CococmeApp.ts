///<reference path="../framework/App.ts"/>
import {AppMenu} from "../framework/AppMenu";
import {App} from "../framework/App";
import {PageState} from "../framework/PageState";
import {IndexPageState} from "./pages/index/IndexPageState";
import {IndexPage} from "./pages/index/IndexPage";
import {PageData} from "../framework/PageData";
import {SearchPage} from "./pages/search/SearchPage";
import {ItemPage} from "./pages/item/ItemPage";
import {CartPage} from "./pages/cart/CartPage";
import {LoginPage} from "./pages/login/LoginPage";
import {CheckoutPage} from "./pages/checkout/CheckoutPage";
/**
 * Created by Joshua on 16.01.2017.
 */

export class CococmeApp extends App {

    protected _menu: AppMenu;
    protected _menuElement: OnsSplitterSideElement;

    constructor(splitter:OnsSplitterContentElement, menuElement:OnsSplitterSideElement){
        super(splitter);
        this._menuElement = menuElement;
        console.log("COCOME APP: constructor");
    }

    get menu(): AppMenu {
        return this._menu;
    }

    public openPage(pageState:PageState):void{
        this.navigator.updatePage(pageState);
    }

    protected initializeApp(): void {
        console.log("COCOME APP: initializeApp");
        this.createMenu($("#menu"));
        this.navigator.updatePage(new IndexPageState());
    }

    protected initializeNavigator(): void {
        console.log("COCOME APP: initializeNavigator");
        this.navigator.addPage(new IndexPage($("#home\\.html"), "indexpage", new PageData("index","Home", true)));
        this.navigator.addPage(new SearchPage($("#search\\.html"), "searchpage", new PageData("search","Search", true)));
        this.navigator.addPage(new ItemPage($("#item\\.html"), "itempage", new PageData("item","Item", false)));
        this.navigator.addPage(new CartPage($("#cart\\.html"), "cartpage", new PageData("cart","Cart", true)));
        this.navigator.addPage(new LoginPage($("#login\\.html"), "loginpage", new PageData("login","Login", true)));
        this.navigator.addPage(new CheckoutPage($("#checkout\\.html"), "checkout", new PageData("checkout","Checkout", false)));
    }

    private createMenu(menuDOM:JQuery):void{
        this._menu = new AppMenu(menuDOM,this._menuElement,this.navigator, this);
    }

    public closeMenu(): void {
        this.menu.close();
    }

    public openMenu(): void {
        this.menu.open();
    }

}