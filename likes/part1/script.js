"use strict";

let posts = {
    1 : {
        "id" : "1",
        "userName" : "Some User",
        "userId" : "1",
        "likes" : 3,
        "text" : "This is some filler text, it can say anything we like!"
    }
};

function addLike(element) {
    console.log(element);
    let post = element.parentNode.parentNode;
    let _likes = (posts[post.id]["likes"] += 1);
    post.querySelector(".post-likes").innerText = `${_likes} like(s)`;
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