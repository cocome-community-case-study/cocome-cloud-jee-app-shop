/**
 * Created by Joshua on 19.01.2017.
 */

abstract class Page
{
    private domNode: JQuery;

    constructor(domNode: JQuery) {
        this.domNode = domNode;
    }

    public getDomNode = ():JQuery =>
    {
        return this.domNode;
    };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    abstract updatePage = (pageState:PageState): void => {};
}