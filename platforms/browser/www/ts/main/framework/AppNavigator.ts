import {Page} from "./Page";
import {PageState} from "./PageState";
/**
 * Created by Joshua on 19.01.2017.
 */
interface PageDictionary {
    [index: string]: Page;
}

export class AppNavigator {

    private _pages = {} as PageDictionary;
    private history: Array<PageState> = new Array();
    private splitter: OnsSplitterContentElement;
    private currentPage: Page;

    constructor(splitter: OnsSplitterContentElement) {
        this.splitter = splitter;
    }

    public getPage(name: string): Page {
        return this._pages[name];
    }

    get pages(): PageDictionary {
        return this._pages;
    }

    public addPage = (page: Page) => {
        this._pages[page.data.name] = page;
    }

    public updatePage = (pageState: PageState): void => {
        let page = this._pages[pageState.getPageName()];
        this.history.push(pageState);
        this.loadPage(page, pageState);
        this.currentPage = page;
    }

    public back = (): void => {
        let pageState = this.history.pop();
        this.loadPage(this._pages[pageState.getPageName()], pageState);
    }

    private loadPage(page: Page, pageState: PageState): void {
        if (this.currentPage != null)
            this.currentPage.closePage();
        this.loadHTML(page.getDomNodeID().toString());
        setTimeout(function () {
            page.updatePage(pageState);
        },10);
    }

    private loadHTML(id: string): void {
        this.splitter.load(id);
    }
}
