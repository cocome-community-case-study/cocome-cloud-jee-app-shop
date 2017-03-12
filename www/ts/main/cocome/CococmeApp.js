///<reference path="../framework/App.ts"/>
/**
 * Created by Joshua on 16.01.2017.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CococmeApp = (function (_super) {
    __extends(CococmeApp, _super);
    function CococmeApp(contentElement) {
        _super.call(this, contentElement);
        console.log("COCOME APP: constructor");
    }
    CococmeApp.prototype.initializeApp = function () {
        console.log("COCOME APP: initializeApp");
        this.navigator.updatePage("index", new IndexPageState());
    };
    CococmeApp.prototype.initializeNavigator = function () {
        console.log("COCOME APP: initializeNavigator");
        this.navigator.addPage("index", new IndexPage("index", $("#home\\.html")));
    };
    return CococmeApp;
}(App));
