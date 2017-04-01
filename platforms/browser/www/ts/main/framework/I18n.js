/**
 * Created by Joshua on 09.02.2017.
 */
"use strict";
var I18n = (function () {
    function I18n() {
    }
    I18n.getI18n = function () {
        return {
            interestingItems: "Items that you might like:",
            selectMarket: "Please select your store:",
            selectEnterprise: "Select Enterprise",
            selectStore: "Select Store",
            youSelected: "You selected",
            selection: "Selection",
            okay: "Okay",
            noShopSelected: "Please select a Store!",
            products: "Products",
        };
    };
    ;
    return I18n;
}());
exports.I18n = I18n;
