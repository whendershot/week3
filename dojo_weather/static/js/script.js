"use strict";
import CityForecast;

(function () {

//Data structures
let city_forecasts = {
    "burbank" : CityForecast("Burbank"),
    "chicago" : CityForecast("Chicago"),
    "dallas" : CityForecast("Dallas"),
    "san jose" : CityForecast("San Jose")
}


//DOM element binding
let cookie_button = document.getElementById("cookie-accept-button");
let city_navigation_list = document.getElementById("city-list");




/*
    Simply remove the cookie banner by deleting the element.
*/
function acceptCookies (element) {
    let banner_element = element.parentNode;
    banner_element.parentNode.removeChild(banner_element);
}

}) ();

//Onload execution
cookie_button.addEventListener(
    "click",
    function () {
        acceptCookies(this);
    }
)
