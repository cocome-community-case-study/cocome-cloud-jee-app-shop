/**
 * Created by Joshua on 19.01.2017.
 */
var Page = (function () {
    function Page(name, domNode) {
        var _this = this;
        this.getDomNode = function () {
            return _this.domNode;
        };
        this.getDomNodeID = function () {
            return _this.domNode.attr("id");
        };
        this.getName = function () {
            return _this.name;
        };
        this.updatePage = function (pageState) { };
        this.domNode = domNode;
        this.name = name;
    }
    return Page;
}());
