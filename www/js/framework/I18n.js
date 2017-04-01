define(["require", "exports"], function (require, exports) {
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
                added: "Added",
                itemAdded: "Item added to Cart!"
            };
        };
        ;
        return I18n;
    }());
    exports.I18n = I18n;
});
//# sourceMappingURL=I18n.js.map