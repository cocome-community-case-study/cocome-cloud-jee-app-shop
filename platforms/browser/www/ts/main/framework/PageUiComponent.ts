import {I18n} from "./I18n";
import {UiComponent} from "./UiComponent";
/**
 * Created by Joshua on 06.02.2017.
 */

export abstract class PageUiComponent extends  UiComponent
{
    public abstract getModel():any;

    private getI18nModel():any
    {
        let model:any = this.getModel();
        model.i18n = I18n.getI18n();
        console.log(model);
        return model;
    }

    public applyBinding(node: JQuery): void {
        this.removeBinding(node);
        setTimeout(() => {
            ko.applyBindings(this.getI18nModel(),node.get(0));
        }, 30);
    }
}