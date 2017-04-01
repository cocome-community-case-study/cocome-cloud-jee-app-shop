"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var I18n_1 = require("./I18n");
var UiComponent_1 = require("./UiComponent");
/**
 * Created by Joshua on 06.02.2017.
 */
var PageUiComponent = (function (_super) {
    __extends(PageUiComponent, _super);
    function PageUiComponent() {
        _super.apply(this, arguments);
    }
    PageUiComponent.prototype.getI18nModel = function () {
        var model = this.getModel();
        model.i18n = I18n_1.I18n.getI18n();
        console.log(model);
        return model;
    };
    PageUiComponent.prototype.applyBinding = function (node) {
        var _this = this;
        this.removeBinding(node);
        setTimeout(function () {
            ko.applyBindings(_this.getI18nModel(), node.get(0));
        }, 20);
    };
    return PageUiComponent;
}(UiComponent_1.UiComponent));
exports.PageUiComponent = PageUiComponent;
