
for (let index = 0; index < document.querySelectorAll(".emoji-btn").length; index++) {
    document.querySelectorAll(".emoji-btn")[index].addEventListener("click", function() {
      
        var emoCon = document.querySelectorAll(".em-pop")[index];

        if (emoCon.style.display === "flex") {
            emoCon.style.display = "none";
        } else {
            emoCon.style.display = "flex";
        }
    });
   
}



for (let index = 0; index < document.querySelectorAll(".emopop-btn").length; index++) {    
    document.querySelectorAll(".emopop-btn")[index].addEventListener("click", function() {
        
        var addHtml = this.innerHTML;
        var emoCon2 = this.parentElement;
        this.parentElement.nextElementSibling.innerHTML += addHtml;
        this.parentElement.nextElementSibling.nextElementSibling.innerHTML = this.parentElement.nextElementSibling.childElementCount;

        if (emoCon2.style.display === "flex") {
           emoCon2.style.display = "none";
        }

    }); 
}


var today = new Date();
var time = today.getHours()+ ":" + today.getMinutes();

for (let index = 0; index < document.querySelectorAll(".hour").length; index++) {
    
    document.querySelectorAll(".hour")[index].innerHTML = time;
}




document.querySelector(".dt-time").innerHTML = time;