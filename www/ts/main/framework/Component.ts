/**
 * Created by Joshua on 06.02.2017.
 */

export interface Component
{
    applyBinding(node:JQuery):void;
    removeBinding(node:JQuery):void;
}