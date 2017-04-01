import {PageState} from "../../../framework/PageState";
/**
 * Created by Joshua on 19.01.2017.
 */

/// <reference path="../../../framework/PageState.ts" />

export class ItemPageState extends PageState{

    private _id: number;

    constructor(itemId:number)
    {
        super();
        this._id = itemId;
    }

    getPageName(): string {
        return "item";
    }

    get itemId(): number {
        return this._id;
    }
}