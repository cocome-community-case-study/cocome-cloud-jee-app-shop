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

    public loadPage(page: EventTarget): void {
        alert("Load Page "+page);
    }

    public initialize(): void {
        alert("initialize")
    }

}