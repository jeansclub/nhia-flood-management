

document.querySelector(".my-toggle").addEventListener("click", function() {
    togButon();
    buttonAnimate();
});

function togButon() {
    var menu = document.querySelector(".menu-con");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";

    }
}


function buttonAnimate() {
    var x = document.querySelectorAll(".tog-btn");
    var v = document.querySelector(".my-toggle");

    v.classList.add("my-toggle-f");

    setTimeout(() => {
        v.classList.remove("my-toggle-f");
    }, 300);
}