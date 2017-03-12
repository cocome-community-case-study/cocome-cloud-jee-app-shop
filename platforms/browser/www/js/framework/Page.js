define(["require", "exports"], function (require, exports) {
    "use strict";
    var Page = (function () {
        function Page(domHtmlNode, contentNodeID, data) {
            var _this = this;
            this.getDomNode = function () {
                return _this.domHtmlNode;
            };
            this.getDomNodeID = function () {
                return _this.domHtmlNode.attr("id");
            };
            this.getContentDomNode = function () {
                console.log("#" + _this.contentNodeID);
                return $("#" + _this.contentNodeID);
            };
            this.domHtmlNode = domHtmlNode;
            this.contentNodeID = contentNodeID;
            this._data = data;
        }
        Object.defineProperty(Page.prototype, "data", {
            get: function () {
                return this._data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Page.prototype, "name", {
            get: function () {
                return this._data.name;
            },
            enumerable: true,
            configurable: true
        });
        return Page;
    }());
    exports.Page = Page;
});
//# sourceMappingURL=Page.js.map