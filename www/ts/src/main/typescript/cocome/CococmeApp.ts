///<reference path="../framework/App.ts"/>
/**
 * Created by Joshua on 16.01.2017.
 */

class CococmeApp extends App
{

    constructor()
    {
        super();
    }

    protected loadPage(page: EventTarget): void {
        alert("Load Page "+page);
    }

    protected initialize(): void {
        alert("initialize")
    }

    protected initializeNavigator(navigator: AppNavigator): void {
        navigator.addPage("index",new IndexPage($("#home.html")));
    }

}