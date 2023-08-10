  

for (let index = 0; index < document.querySelectorAll(".t-btn").length; index++) {
    
    document.querySelectorAll(".t-btn")[index].addEventListener("click", function() {
        
        var change = document.querySelectorAll(".t-sign")[index];

        if (change.innerText === "-") {
            change.innerText = "+";
        } else {
            change.innerText = "-";
        }


        var fansa = this.nextElementSibling;

        if (fansa.style.display === "block") {
            fansa.style.display = "none";
        } else {
            fansa.style.display = "block";
        }

    });
    
}