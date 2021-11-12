"use strict";

//Profile name change
function setProfileName (element, name) {
    let profile = element.parentNode;
    profile.querySelector(".profile-name").innerText = name;
}

let edit_profile_buttons = document.getElementsByClassName("profile-edit");

for (const button of edit_profile_buttons) {
    button.addEventListener (
        "click",
        function () {
            setProfileName(this, "William Hendershot");
        }
    )
}

//Connetion requests
function removeElement (element) {
    element.remove();
}

function acceptConnection (user) {
    console.log("Accepting connection from: ", user);
    let connections = document.getElementById("connections-made").querySelector(".counter");
    let num = parseInt(connections.innerText);
    num++;
    connections.innerText = num;
}

function rejectConnection (user) {
    console.log("Rejecting connection from: ", user);
}

function updateConnectionRequests() {
    let num_connections = document.getElementById("connection-requests-counter");
    let num = parseInt(num_connections.innerText);
    num--;
    num_connections.innerText = num;
}

let connection_disposition_buttons = document.getElementsByClassName("connection-disposition");

for (const button of connection_disposition_buttons) {
    let connection = button.parentNode.parentNode
    let connection_name = connection.querySelector(".connection-name").innerText;
    if (button.classList.contains("accept-connection")) {
        button.addEventListener(
            "click",
            function () {
                acceptConnection(connection_name);
                removeElement(connection);
                updateConnectionRequests();
            }
        )
    } else if (button.classList.contains("reject-connection")) {
        button.addEventListener(
            "click",
            function () {
                rejectConnection(connection_name);
                removeElement(connection);
                updateConnectionRequests();
            }
        )
    } else {
        console.log("This button was caught while assigning connection dispositions: ", button);
    }
}

//Your connections