alert("Welcome back!");
    
document.querySelector(".t-one").addEventListener("click", collapseDisplay1);

document.querySelector(".t-two").addEventListener("click", collapseDisplay2);

document.querySelector(".t-three").addEventListener("click", collapseDisplay3);

document.querySelector(".t-four").addEventListener("click", collapseDisplay4);

document.querySelector(".t-five").addEventListener("click", collapseDisplay5);

    
function collapseDisplay1() {
    var coldis = document.querySelector(".f-one");
    if (coldis.style.display === "block") {
        coldis.style.display = "none";
    } else {
        coldis.style.display = "block";
    }

    var but1 = document.querySelector(".t-one");
    if (but1.innerText === "+") {
        but1.innerText = "-";
    } else {
        but1.innerText = "+";
    }
}


function collapseDisplay2() {
    var coldis = document.querySelector(".f-two");
    if (coldis.style.display === "block") {
        coldis.style.display = "none";
    } else {
        coldis.style.display = "block";
    }

    var but1 = document.querySelector(".t-two");
    if (but1.innerText === "+") {
        but1.innerText = "-";
    } else {
        but1.innerText = "+";
    }
}


function collapseDisplay3() {
    var coldis = document.querySelector(".f-three");
    if (coldis.style.display === "block") {
        coldis.style.display = "none";
    } else {
        coldis.style.display = "block";
    }

    var but1 = document.querySelector(".t-three");
    if (but1.innerText === "+") {
        but1.innerText = "-";
    } else {
        but1.innerText = "+";
    }
}


function collapseDisplay4() {
    var coldis = document.querySelector(".f-four");
    if (coldis.style.display === "block") {
        coldis.style.display = "none";
    } else {
        coldis.style.display = "block";
    }

    var but1 = document.querySelector(".t-four");
    if (but1.innerText === "+") {
        but1.innerText = "-";
    } else {
        but1.innerText = "+";
    }
}


function collapseDisplay5() {
    var coldis = document.querySelector(".f-five");
    if (coldis.style.display === "block") {
        coldis.style.display = "none";
    } else {
        coldis.style.display = "block";
    }

    var but1 = document.querySelector(".t-five");
    if (but1.innerText === "+") {
        but1.innerText = "-";
    } else {
        but1.innerText = "+";
    }
}