/**
 * Created by Joshua on 16.01.2017.
 */

abstract class App {

    navigator:AppNavigator;

    constructor()
    {
        this.setup();
        this.navigator = new AppNavigator();
        this.initializeNavigator(this.navigator);
    }

    protected abstract initialize(): void;

    protected abstract initializeNavigator(navigator:AppNavigator): void;

    protected abstract loadPage(page: EventTarget):void;

    private onDeviceReady = ():void =>
    {
        this.initialize();
    };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    private onInit = (event:Event):void =>
    {
        let page = event.target;
        this.loadPage(page);
    };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    private setup = ():void =>
    {
        document.addEventListener('init',this.onInit, false);
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }
}