/**
 * Created by Joshua on 15.01.2017.
 */
/// <reference path="libs/onsenui/index.d.ts" />
/// <reference path="../lib/onsenui/js/onsenui.d.ts" />
var cocomeSplitter;
var app;
ons.ready(function () {
    console.log("cocomeSplitter", cocomeSplitter);
    app = new CococmeApp(document.getElementById('content'));
});
