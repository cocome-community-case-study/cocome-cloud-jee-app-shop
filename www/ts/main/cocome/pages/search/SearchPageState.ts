import {PageState} from "../../../framework/PageState";
/**
 * Created by Joshua on 19.01.2017.
 */

/// <reference path="../../../framework/PageState.ts" />

export class SearchPageState extends PageState{

    public _searchPhrase: string;
    
    constructor(searchPhrase?:string)
    {
        super();
        this._searchPhrase = searchPhrase;
    }

    public getSearchPhrase(): string {
        return this._searchPhrase;
    }

    getPageName(): string {
        return "search";
    }

}