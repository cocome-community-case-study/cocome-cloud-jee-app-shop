/**
 * Created by Joshua on 06.02.2017.
 */

export abstract class UiComponent
{
    public abstract getModel():any;

    public applyBinding(node: JQuery): void {
        this.removeBinding(node);
        setTimeout(() => {
            ko.applyBindings(this.getModel(),node.get(0));
        }, 20);
    }

    public removeBinding(node: JQuery): void {
        setTimeout(() => {
            ko.cleanNode(node.get(0));
        }, 0);
    }
}