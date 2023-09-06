

document.querySelector(".my-toggle").addEventListener("click", function() {
    togButon();
    buttonAnimate();
});

/*-------------------NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN-----------------------*/

function togButon() {
    var menu = document.querySelector(".menu-toggle");
    menu.classList.toggle("display");
}


/*-------------------NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN-----------------------*/

function buttonAnimate() {
    var x = document.querySelectorAll(".tog-btn");
    var v = document.querySelector(".my-toggle");

    v.classList.add("my-toggle-f");

    setTimeout(() => {
        v.classList.remove("my-toggle-f");
    }, 300);
}

/*-------------------NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN-----------------------*/

var year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;


/*-------------------NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN-----------------------*/

for (let index = 0; index < document.querySelectorAll(".tap").length; index++) {
    
    document.querySelectorAll(".tap")[index].addEventListener("click", function() {

        var togg = document.querySelector(".menu-toggle");
        togg.classList.remove("display");
    });
    
}