
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



async function fectchResult(target) {
    
    const url = "https://api.weatherapi.com/v1/forecast.json?key=9b99f40c7b0341bcbe0211219232509&q="+target+"&days=1&aqi=no&alerts=no";
    const res = await fetch(url);
    const data = await res.json();


    
    document.querySelector(".form-src-loc").innerHTML = data.location.name + ", " + data.location.region + ", " + data.location.country;
    document.querySelector(".time").innerText = data.location.localtime;

    document.querySelector(".deg-img").src = "https:" + data.current.condition.icon;
    document.querySelector(".deg-img2").src = "https:" + data.current.condition.icon;

    document.querySelector(".deg-cond").innerHTML = data.current.condition.text;
    document.querySelector(".deg-cond2").innerHTML = data.current.condition.text;

    document.querySelector(".w-a").innerHTML = data.current.temp_c;
    document.querySelector(".w-a2").innerHTML = data.current.temp_c;

    // document.querySelector(".cloud").innerHTML = data.current.cloud;

    document.querySelector(".a-d").innerHTML = data.current.pressure_mb;
    document.querySelector(".a-d2").innerHTML = data.current.pressure_mb;

    document.querySelector(".a-b").innerHTML = data.current.humidity;
    document.querySelector(".a-b2").innerHTML = data.current.humidity;

    document.querySelector(".a-a").innerHTML = data.current.wind_kph;
    document.querySelector(".a-a2").innerHTML = data.current.wind_kph;

    // document.querySelector(".days").innerText = getDayName(new Date().getDay());


    for (let index = 0; index < document.querySelectorAll(".an-h").length; index++) {
        document.querySelectorAll(".an-h")[index].innerText = data.forecast.forecastday[0].hour[index].time;
    }

    for (let index = 0; index < document.querySelectorAll(".an-h-img").length; index++) {
        document.querySelectorAll(".an-h-img")[index].src = "https:" + data.forecast.forecastday[0].hour[index].condition.icon;
    }

    for (let index = 0; index < document.querySelectorAll(".an-h-cond").length; index++) {
        document.querySelectorAll(".an-h-cond")[index].innerText = data.forecast.forecastday[0].hour[index].condition.text;
    }

    for (let index = 0; index < document.querySelectorAll(".an-h-d").length; index++) {
        document.querySelectorAll(".an-h-d")[index].innerText = data.forecast.forecastday[0].hour[index].temp_c;
    }

}

fectchResult(weatherLocation);
