import {SearchPageState} from "./SearchPageState";
import {PageState} from "../../../framework/PageState";
import {Page} from "../../../framework/Page";
import {ToolbarComponent} from "../../uicomponents/ToolbarComponent";
import {SearchComponent} from "../../uicomponents/SearchComponent";
/**
 * Created by Joshua on 19.01.2017.
 */
/// <reference path="../../../framework/Page.ts" />

export class SearchPage extends Page {
    private toolbar: ToolbarComponent;
    private search: SearchComponent;

    public updatePage(pageState: PageState): void {
        console.log("SearchPage Index", this.getDomNode());

        let curentPageState:SearchPageState = <SearchPageState> pageState;

        this.toolbar = new ToolbarComponent("Search");
        this.toolbar.applyBinding(this.getContentDomNode().find("#toolbar"));

        let searchPhrase = curentPageState.getSearchPhrase();

        console.log("searchPhrase: "+searchPhrase);

        this.search = new SearchComponent(searchPhrase);
        this.search.applyBinding(this.getContentDomNode().find("#search"));
    }

    getDefaultPageState(): PageState {
        return new SearchPageState();
    }

    closePage(): void {
        this.toolbar.removeBinding(this.getContentDomNode().find("#toolbar"));
        this.search.removeBinding(this.getContentDomNode());
    }
}