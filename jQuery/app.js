//$(document).ready(function () {
//    $('button').click(function () {
//        alert("Hello");
//        //$("#frame").attr("src", "https://www.w3schools.com/");
//    });
//});

function spoiler() {
    var link = document.getElementById("frame");
    link.setAttribute("src", "spoiler/index.html");
}
function lightbox() {
    var link = document.getElementById("frame");
    link.setAttribute("src", "lightbox/index.html");
}
function mobilemenu() {
    var link = document.getElementById("frame");
    link.setAttribute("src", "mobile_menu/index.html");
}
function signupform() {
    var link = document.getElementById("frame");
    link.setAttribute("src", "sign_up_form/index.html");
}