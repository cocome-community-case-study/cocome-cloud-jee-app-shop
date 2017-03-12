import {Page} from "../../../framework/Page";
import {PageState} from "../../../framework/PageState";
import {IndexPageState} from "./IndexPageState";
import {ToolbarComponent} from "../../uicomponents/ToolbarComponent";
import {SearchComponent} from "../../uicomponents/SearchComponent";
import {UiComponent} from "../../../framework/UiComponent";
import {CocomeAppSettings} from "../../CocomeAppSettings";
import {PageUiComponent} from "../../../framework/PageUiComponent";
/**
 * Created by Joshua on 19.01.2017.
 */
/// <reference path="../../../framework/Page.ts" />


export class IndexPage extends Page {

    private toolbar: UiComponent;
    private search: UiComponent;
    private uicomponent: UiComponent;

    public updatePage(pageState: PageState): void {
        console.log("Update Index", this.getDomNode());

        this.toolbar = new ToolbarComponent(CocomeAppSettings.APP_NAME_SHORT);
        this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));

        this.search = new SearchComponent("");
        this.search.applyBinding(this.getContentDomNode().find("#search"));

        this.uicomponent = new IndexPageComponent(CocomeAppSettings.APP_NAME);
        this.uicomponent.applyBinding(this.getContentDomNode().find("#page"));
    }

    public getDefaultPageState(): PageState {
        return new IndexPageState();
    }

    public closePage(): void {
        this.toolbar.removeBinding(this.getContentDomNode().find("#toolbar"));
        this.search.removeBinding(this.getContentDomNode());
    }
}

class IndexPageComponent extends PageUiComponent {
    private model: IndexPageComponentModel;

    constructor(title: string) {
        super();
        this.model = new IndexPageComponentModel(title);
    }

    getModel(): any {
        return this.model;
    }
}

class IndexPageComponentModel {
    private title: string;
    private interestingItems: [{imageUrl: string}, {imageUrl: string}, {imageUrl: string}, {imageUrl: string}];

    constructor(title: string) {
        this.title = title;
        this.interestingItems = [{imageUrl: "http://lorempixel.com/75/75/food/"}, {imageUrl: "http://lorempixel.com/75/75/food/"},
            {imageUrl: "http://lorempixel.com/75/75/food/"}, {imageUrl: "http://lorempixel.com/75/75/food/"}];

    }
}