import {AppNavigator} from "./AppNavigator";
import {PageState} from "./PageState";
/**
 * Created by Joshua on 16.01.2017.
 */

export abstract class App {

    protected navigator: AppNavigator;
    private splitter: OnsSplitterContentElement;

    constructor(splitter: OnsSplitterContentElement) {
        this.splitter = splitter;
        this.navigator = new AppNavigator(this.splitter);
        this.initializeNavigator();
        this.setup();
    }

    public abstract openPage(pageState:PageState):void;

    public abstract closeMenu():void;

    public abstract openMenu():void;

    protected abstract initializeApp(): void;

    protected abstract initializeNavigator(): void;

    private onDeviceReady = (): void => {
        console.log("APP: onDeviceReady");
        this.initializeApp();
    }

    private setup = (): void => {
        console.log("APP: setup")
        document.addEventListener('deviceready', () => {
            setTimeout(() => {
                this.onDeviceReady();
            })
        }, false);
    }

}