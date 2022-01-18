// ==UserScript==
// @name         Better Bomb Manual
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Improves the bomb manual for Keep Talking and Nobody Explodes by adding navigation elements for quickly jumping to specific modules.
// @author       Skyline969
// @match        http://www.bombmanual.com/manual/1/*
// @match        https://www.bombmanual.com/web/index.html
// @grant        none
// @website      https://github.com/Skyline969/Better-Bomb-Manual/
// ==/UserScript==

(function() {
    'use strict';
    var _PANEL_PADDING = 15;
    var module_index = 0;

    $("body").append("<div class='bbm_right'></div>");
    $("body").append("<div class='bbm_left'></div>");

    $(".bbm_right").css("position", "fixed");
    $(".bbm_right").css("right", "0");
    $(".bbm_right").css("top", "0");
    $(".bbm_right").css("height", "100%");
    $(".bbm_right").css("width", $(".diagram").first().width());
    $(".bbm_right").css("padding-left", _PANEL_PADDING * 2);
    $(".bbm_right").css("padding-right", _PANEL_PADDING);
    $(".bbm_right").css("padding-top", _PANEL_PADDING);
    $(".bbm_right").css("overflow-y", "auto");
    $(".bbm_right").css("background-color", "#fff");
    $(".bbm_right").css("text-align", "center");
    $(".bbm_right").css("z-index", "9999");
    $(".bbm_right").css("border-left", "1px solid #222");
    $(".bbm_right").css("box-shadow", "#222 0em 0em 0.6em");

    $(".bbm_left").css("position", "fixed");
    $(".bbm_left").css("left", "0");
    $(".bbm_left").css("top", "0");
    $(".bbm_left").css("height", "100%");
    $(".bbm_left").css("width", "auto");
    $(".bbm_left").css("max-width", $(".page").first().offset().left*0.75);
    $(".bbm_left").css("padding-left", _PANEL_PADDING * 2);
    $(".bbm_left").css("padding-right", _PANEL_PADDING);
    $(".bbm_left").css("padding-top", _PANEL_PADDING);
    $(".bbm_left").css("overflow-y", "auto");
    $(".bbm_left").css("background-color", "#fff");
    $(".bbm_left").css("text-align", "center");
    $(".bbm_left").css("z-index", "9999");
    $(".bbm_left").css("border-right", "1px solid #222");
    $(".bbm_left").css("box-shadow", "#222 0em 0em 0.6em");

    $(".page:not(.section-title)").each(function(){
        if ($(this).find(".diagram").length > 0)
        {
            $(this).find("h2").first().attr("id", "bbm_" + module_index);
            $(this).find(".diagram").first().clone().appendTo(".bbm_right").wrap("<a href='#bbm_" + module_index + "' title='" + $(this).find("h2").first().text() + "'></a>");
            $(".bbm_left").append("<a href='#bbm_" + module_index + "'>" + $(this).find("h2").first().text() + "</a><br/>");
            module_index++;
        }
    });
})();
