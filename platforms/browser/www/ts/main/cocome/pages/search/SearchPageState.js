"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PageState_1 = require("../../../framework/PageState");
/**
 * Created by Joshua on 19.01.2017.
 */
/// <reference path="../../../framework/PageState.ts" />
var SearchPageState = (function (_super) {
    __extends(SearchPageState, _super);
    function SearchPageState(searchPhrase) {
        _super.call(this);
        this._searchPhrase = "";
        this._searchPhrase = searchPhrase;
    }
    SearchPageState.prototype.getSearchPhrase = function () {
        return this._searchPhrase;
    };
    SearchPageState.prototype.getPageName = function () {
        return "search";
    };
    return SearchPageState;
}(PageState_1.PageState));
exports.SearchPageState = SearchPageState;
