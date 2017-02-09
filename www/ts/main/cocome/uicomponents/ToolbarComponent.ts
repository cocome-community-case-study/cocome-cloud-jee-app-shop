import {main} from "../../main";
import {Component} from "../../framework/Component";
/**
 * Created by Joshua on 06.02.2017.
 */
export class ToolbarComponent implements Component{

    private model: ToolbarComponentModel;

    constructor() {
        this.model = new ToolbarComponentModel("NaN NaN");
    }

    public applyBinding(node: JQuery): void {
        this.removeBinding(node);
        setTimeout(() => {
            console.log("ToolbarComponent: "+node.get(0));
            ko.applyBindings(this.model,node.get(0));
        }, 40);
    }

    public removeBinding(node: JQuery): void {
        setTimeout(() => {
            ko.cleanNode(node.get(0));
        }, 20);
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