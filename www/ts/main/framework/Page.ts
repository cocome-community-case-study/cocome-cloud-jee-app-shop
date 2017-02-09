/*
 * Created by Joshua on 19.01.2017.
 */
import {PageData} from "./PageData";
import {PageState} from "./PageState";

export abstract class Page {

    private _data: PageData;
    private domHtmlNode: JQuery;
    private contentNodeID: string;

    constructor(domHtmlNode: JQuery, contentNodeID:string, data: PageData) {
        this.domHtmlNode = domHtmlNode;
        this.contentNodeID = contentNodeID;
        this._data = data;
    }

    public getDomNode = (): JQuery => {
        return this.domHtmlNode;
    }

    public getDomNodeID = (): string => {
        return this.domHtmlNode.attr("id");
    }

    public getContentDomNode = (): JQuery => {
        console.log("#"+this.contentNodeID);
        return $("#"+this.contentNodeID);
    }

    get data(): PageData {
        return this._data;
    }

    get name(): string {
        return this._data.name;
    }

    abstract updatePage(pageState: PageState): void;

    abstract closePage(): void;

    abstract getDefaultPageState(): PageState;
}