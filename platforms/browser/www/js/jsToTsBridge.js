/**
 * Created by Joshua on 23.01.2017.
 */

function getSplitter()
{
    var splitter = document.querySelector('ons-splitter-content');
    return splitter;
}

function getMenu()
{
    console.log("menu",document.getElementById('menu'));
    return document.getElementById('menu');
}

function getVue()
{
    return Vue;
}