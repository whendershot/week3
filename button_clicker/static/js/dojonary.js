'use strict';

function login (element) {
    console.log("Loggin in...", element);
    element.innerText = "Logout";
    element.setAttribute("onclick", "javascript: logout(this)")
}

function logout(element) {
    console.log("Loggin out...", element);
    element.innerText = "Login"
    element.setAttribute("onclick", "javascript: login(this)")
}

function addLike(element) {
    // console.log("This was clicked...", element);
    let counter = element.querySelector(".counter");
    // console.log("Counter maybe?", counter)
    let num = counter.innerText;
    num++;
    counter.innerText = num;
    let word = element.parentNode.querySelector(".definition_word").innerText;
    alert(word + " was liked");
}

function addDefinition(element) {
    element.style.visibility = "hidden";
}