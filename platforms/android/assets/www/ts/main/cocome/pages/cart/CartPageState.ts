import {PageState} from "../../../framework/PageState";
/**
 * Created by Joshua on 19.01.2017.
 */

/// <reference path="../../../framework/PageState.ts" />

export class CartPageState extends PageState{

    getPageName(): string {
        return "cart";
    }

}