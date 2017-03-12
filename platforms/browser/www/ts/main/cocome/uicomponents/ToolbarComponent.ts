import {main} from "../../main";
import {UiComponent} from "../../framework/UiComponent";
/**
 * Created by Joshua on 06.02.2017.
 */
export class ToolbarComponent extends UiComponent{

    private model: ToolbarComponentModel;

    constructor(title:string) {
        super();
        this.model = new ToolbarComponentModel(title);
    }

    public getModel(): any {
        return this.model;
    }

    public setTitle = (title: string): void => {
        this.model.setTitle(title);
    }
}

class ToolbarComponentModel {
    private toolbar: {title: string; openMenu: (() => void)};

    constructor(title: string) {
        this.toolbar = {
            title: title,
            openMenu: function () {
                main.app.openMenu();
            }
        }
    }

    setTitle(title: string) {
        this.toolbar.title = title;
    }
}