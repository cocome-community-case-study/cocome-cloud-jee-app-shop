///<reference path="../../../libs/onsenui/js/onsenui.d.ts"/>
import {AppNavigator} from "./AppNavigator";
import {App} from "./App";
/**
 * Created by Joshua on 23.01.2017.
 */

export class AppMenu {
    private menuDOMElementEntries: JQuery;
    private navigator: AppNavigator;
    private menuElement: OnsSplitterSideElement;
    private app: App;

    constructor(menuDOMElement:JQuery, menuElemen:OnsSplitterSideElement, navigator:AppNavigator, app:App) {
        console.log("APPMENU: initializeAppMenu");
        this.menuDOMElementEntries = menuDOMElement.find("#menuEntries");
        this.navigator = navigator;
        this.menuElement = menuElemen;
        this.app = app;
        console.log(menuElemen);
        this.generateMenu();
    }

    public open = ():void =>
    {
        this.menuElement.open();
    }

    private generateMenu() {
        let pages = this.navigator.pages;
        
        for (let key in pages) {
            let page = pages[key];
            let data = page.data;
            if(data.inMenuVisible) {
                let newElement: JQuery = $(document.createElement('ons-list-item'));
                newElement.attr("tappable");
                newElement.click(() => {
                    this.app.openPage(page.getDefaultPageState());
                    this.app.closeMenu();
                });
                newElement.text(data.menuText);
                this.menuDOMElementEntries.append(newElement);
                console.log("APPMENU: added "+data.menuText);
            }
        }
    }

    public close = ():void =>
    {
        this.menuElement.close();
    }
}