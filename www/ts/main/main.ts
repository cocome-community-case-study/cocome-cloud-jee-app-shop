import {CococmeApp} from "./cocome/CococmeApp";
/**
 * Created by Joshua on 15.01.2017.
 */
/// <reference path="../libs/jquery/jquery.d.ts" />
/// <reference path="../../libs/onsenui/js/onsenui.d.ts" />

declare function getSplitter(): OnsSplitterContentElement;
declare function getMenu(): OnsSplitterSideElement;


export class Main {
    private _app: CococmeApp;

    constructor() {
        ons.ready(() => {
            this._app = new CococmeApp(getSplitter(), getMenu());
        });
    }

    get app(): CococmeApp {
        return this._app;
    }
}

export let main = new Main();



