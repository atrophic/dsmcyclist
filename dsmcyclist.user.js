// Adds the Oxford comma to the DSM Cyclist's blog
// Version 0.1 - Apr 25, 2012
//
// ==UserScript==
// @name          Oxfordize the DSM Cyclist
// @namespace     http://userscripts.org/
// @description   Adds Oxford commas to the DSM Cyclist's blog, the DSM Cyclist's blog, and the DSM Cyclist's blog.
// @match         http://dsmcyclist.wordpress.com/
// @match         http://dsmcyclist.wordpress.com/*


// ==/UserScript==

// helpers to include jQuery
var load = function(url, onLoad, onError) {
    var elem = document.createElement("script");
    elem.setAttribute("src", url);
    if (onLoad != null)
        elem.addEventListener("load", onLoad);
    if (onError != null)
        elem.addEventListener("error", onError);
    document.body.appendChild(elem);
    return elem;
};

var execute = function(functionOrCode) {
    var code = functionOrCode;
    if (typeof functionOrCode == "function")
        code = "(" + functionOrCode + ")();";
        
    var elem = document.createElement("script");
    elem.textContent = code;
    document.body.appendChild(elem);
    return elem;
};

var loadAndExecute = function(url, functionOrCode) {
    return load(url,function() {
        return execute(functionOrCode);
    });
};

var jQueryUrl = "//ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js";

loadAndExecute(jQueryUrl, function() {
    
    var regex = /((?:[\w'-]+,\s+)+(?:[\w'-]+\s){0,2}[\w'-]+)(\s+and\s+[\w'-]+)/g;
    
    $('p').each(function() {
        var p = $(this);
        p.html(p.html().replace(regex, "$1,$2"));
    });
    
    $('div.credit').append("<br /><a href='https://github.com/atrophic/dsmcyclist'>Oxford Commas</a>: <a href='mailto:caleb.harrelson@gmail.com'>Caleb Harrelson</a>")
});



