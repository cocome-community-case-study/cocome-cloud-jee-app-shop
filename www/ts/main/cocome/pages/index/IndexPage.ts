import {Page} from "../../../framework/Page";
import {PageState} from "../../../framework/PageState";
import {IndexPageState} from "./IndexPageState";
import {ToolbarComponent} from "../../uicomponents/ToolbarComponent";
import {SearchComponent} from "../../uicomponents/SearchComponent";
/**
 * Created by Joshua on 19.01.2017.
 */
/// <reference path="../../../framework/Page.ts" />


export class IndexPage extends Page {

    private toolbar: ToolbarComponent;
    private search: SearchComponent;

    public updatePage(pageState: PageState): void {
        this.toolbar = new ToolbarComponent();
        this.toolbar.setTitle("Cocome App");
        this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));

        this.search = new SearchComponent("");
        this.search.applyBinding(this.getContentDomNode().find("#search"));
        console.log("Update Index", this.getDomNode());
    }

    public getDefaultPageState(): PageState {
        return new IndexPageState();
    }

    public closePage(): void {
        this.toolbar.removeBinding(this.getContentDomNode().find("#toolbar"));
        this.search.removeBinding(this.getContentDomNode());
    }

}