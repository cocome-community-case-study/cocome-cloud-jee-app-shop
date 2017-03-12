import {main} from "../../main";
import {UiComponent} from "../../framework/UiComponent";
import {PageState} from "../../framework/PageState";
import {SearchPageState} from "../pages/search/SearchPageState";
/**
 * Created by Joshua on 06.02.2017.
 */
export class SearchComponent extends UiComponent{

    private model: SearchComponentModel;

    constructor(value: any) {
        super();
        this.model = new SearchComponentModel(value);
    }

    public getModel(): any {
        return this.model;
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