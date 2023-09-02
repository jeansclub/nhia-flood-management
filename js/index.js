

document.querySelector(".my-toggle").addEventListener("click", function() {
    togButon();
    buttonAnimate();
});

function togButon() {
    var menu = document.querySelector(".menu-toggle");
    menu.classList.toggle('display');
}


function buttonAnimate() {
    var x = document.querySelectorAll(".tog-btn");
    var v = document.querySelector(".my-toggle");

    v.classList.add("my-toggle-f");

    setTimeout(() => {
        v.classList.remove("my-toggle-f");
    }, 300);
}