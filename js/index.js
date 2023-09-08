

document.querySelector(".my-toggle").addEventListener("click", function() {
    togButon();
    buttonAnimate();
    rotate();
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
        if (togg.classList.contains("display")) {
            togg.classList.remove("display");
        }
    });
    
}

/*-------------------NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN-----------------------*/


const test = document.getElementById("test");
const tester = document.getElementById("tester");

document.onclick = function(e) {

    var active1 = document.querySelector(".btn1");
    var active2 = document.querySelector(".btn2");

    if (e.target.id !== "tester" && e.target.id !== "test") {
        
        tester.classList.remove("display");
        active1.classList.remove("active1");
        active2.classList.remove("active2");
    }
}


/*-------------------NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN-----------------------*/


function rotate() {
    var active1 = document.querySelector(".btn1");
    var active2 = document.querySelector(".btn2");

    active1.classList.toggle("active1");
    active2.classList.toggle("active2");
}