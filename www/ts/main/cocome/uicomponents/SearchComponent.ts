import {main} from "../../main";
import {Component} from "../../framework/Component";
import {PageState} from "../../framework/PageState";
import {SearchPageState} from "../pages/search/SearchPageState";
/**
 * Created by Joshua on 06.02.2017.
 */
export class SearchComponent implements Component{

    private model: SearchComponentModel;

    constructor(value: any) {
        this.model = new SearchComponentModel(value);
    }

    public applyBinding(node: JQuery): void {
        this.removeBinding(node);
        setTimeout(() => {
            console.log("SearchComponent: "+node.get(0));
            ko.applyBindings(this.model,node.get(0));
        }, 40);
    }

    public removeBinding(node: JQuery): void {
        setTimeout(() => {
            ko.cleanNode(node.get(0));
        }, 20);
    }
}

class SearchComponentModel {
    private search: {input: KnockoutObservable<string>; onEnter: ((data: any, event: KeyboardEvent) => boolean)};

    constructor(value:string) {
        this.search = {
            input: ko.observable(value),
            onEnter: function (data: any, event: KeyboardEvent) {
                if (event.keyCode == 13)
                {
                    let pageState:PageState = new SearchPageState(this.input());
                    main.app.openPage(pageState);
                }
                return true;
            }
        }
    }
}