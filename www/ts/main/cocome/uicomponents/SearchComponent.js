"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var main_1 = require("../../main");
var UiComponent_1 = require("../../framework/UiComponent");
var SearchPageState_1 = require("../pages/search/SearchPageState");
/**
 * Created by Joshua on 06.02.2017.
 */
var SearchComponent = (function (_super) {
    __extends(SearchComponent, _super);
    function SearchComponent(value) {
        _super.call(this);
        this.model = new SearchComponentModel(value);
    }
    SearchComponent.prototype.getModel = function () {
        return this.model;
    };
    return SearchComponent;
}(UiComponent_1.UiComponent));
exports.SearchComponent = SearchComponent;
var SearchComponentModel = (function () {
    function SearchComponentModel(value) {
        this.search = {
            input: ko.observable(value),
            onEnter: function (data, event) {
                if (event.keyCode == 13) {
                    var pageState = new SearchPageState_1.SearchPageState(this.input());
                    main_1.main.app.openPage(pageState);
                }
                return true;
            }
        };
    }
    return SearchComponentModel;
}());
