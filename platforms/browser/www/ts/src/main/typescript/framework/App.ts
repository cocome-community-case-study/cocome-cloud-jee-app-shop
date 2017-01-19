/**
 * Created by Joshua on 16.01.2017.
 */

abstract class App {

    constructor()
    {
        this.setup();
    }

    abstract initialize(): void;

    abstract loadPage(page: EventTarget):void;

    private onDeviceReady = ():void =>
    {
        alert("onDeviceReady");
        this.initialize();
    }

    private onInit = (event:Event):void =>
    {
        let page = event.target;
        this.loadPage(page);
    }

    private setup = ():void =>
    {
        document.addEventListener('init',this.onInit, false);
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }
}