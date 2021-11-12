"use strict";

let posts = {
    99 : {
        "id" : "99",
        "userName" : "Neil M",
        "userId" : "1",
        "likes" : 9,
        "textHTML" : "I just set up this new discord bot, let me know what you all think. <a href=\"#\">link</a>This is some filler text, it can say anything we like!"
    },
    23 : {
        "id" : "23",
        "userName" : "Nichole K",
        "userId" : "2",
        "likes" : 12,
        "textHTML" : "Just finished my <a href=\"#\">next comic</a>, check it out."
    },
    66 : {
        "id" : "66",
        "userName" : "Jim R",
        "userId" : "3",
        "likes" : 9,
        "textHTML" : "I can\'t stop listening to the <a href=\"#\">new albumn</a>.  Who else is liking it?"
    }
};

function addLike(element) {
    console.log(element);
    let post = element.parentNode.parentNode.parentNode;
    let _likes = (posts[post.id]["likes"] += 1);
    post.querySelector(".post-likes").innerHTML = `${_likes} like(s)`;
}

let like_buttons = document.getElementsByClassName("post-like-button");

for (const button of like_buttons) {
    button.addEventListener(
        "click",
        function () {
            addLike(this);
        }
    )
}