// alert("i am correct");


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


    
    document.querySelector(".hr3-0").innerText = data.forecast.forecastday[0].hour[0].time;
    document.querySelector(".hr3-img-0").src = "https:" + data.forecast.forecastday[0].hour[0].condition.icon;
    document.querySelector(".hr3-cond-0").innerText = data.forecast.forecastday[0].hour[0].condition.text;
    document.querySelector(".hr3-d-0").innerText = data.forecast.forecastday[0].hour[0].temp_c;

    document.querySelector(".hr3-03").innerText = data.forecast.forecastday[0].hour[3].time;
    document.querySelector(".hr3-img-03").src = "https:" + data.forecast.forecastday[0].hour[3].condition.icon;
    document.querySelector(".hr3-cond-03").innerText = data.forecast.forecastday[0].hour[3].condition.text;
    document.querySelector(".hr3-d-03").innerText = data.forecast.forecastday[0].hour[3].temp_c;

    document.querySelector(".hr3-06").innerText = data.forecast.forecastday[0].hour[6].time;
    document.querySelector(".hr3-img-06").src = "https:" + data.forecast.forecastday[0].hour[6].condition.icon;
    document.querySelector(".hr3-cond-06").innerText = data.forecast.forecastday[0].hour[6].condition.text;
    document.querySelector(".hr3-d-06").innerText = data.forecast.forecastday[0].hour[6].temp_c;

    document.querySelector(".hr3-09").innerText = data.forecast.forecastday[0].hour[9].time;
    document.querySelector(".hr3-img-09").src = "https:" + data.forecast.forecastday[0].hour[9].condition.icon;
    document.querySelector(".hr3-cond-09").innerText = data.forecast.forecastday[0].hour[9].condition.text;
    document.querySelector(".hr3-d-09").innerText = data.forecast.forecastday[0].hour[9].temp_c;

    document.querySelector(".hr3-12").innerText = data.forecast.forecastday[0].hour[12].time;
    document.querySelector(".hr3-img-12").src = "https:" + data.forecast.forecastday[0].hour[12].condition.icon;
    document.querySelector(".hr3-cond-12").innerText = data.forecast.forecastday[0].hour[12].condition.text;
    document.querySelector(".hr3-d-12").innerText = data.forecast.forecastday[0].hour[12].temp_c;

    document.querySelector(".hr3-15").innerText = data.forecast.forecastday[0].hour[15].time;
    document.querySelector(".hr3-img-15").src = "https:" + data.forecast.forecastday[0].hour[15].condition.icon;
    document.querySelector(".hr3-cond-15").innerText = data.forecast.forecastday[0].hour[15].condition.text;
    document.querySelector(".hr3-d-15").innerText = data.forecast.forecastday[0].hour[15].temp_c;

    document.querySelector(".hr3-18").innerText = data.forecast.forecastday[0].hour[18].time;
    document.querySelector(".hr3-img-18").src = "https:" + data.forecast.forecastday[0].hour[18].condition.icon;
    document.querySelector(".hr3-cond-18").innerText = data.forecast.forecastday[0].hour[18].condition.text;
    document.querySelector(".hr3-d-18").innerText = data.forecast.forecastday[0].hour[18].temp_c;

    document.querySelector(".hr3-21").innerText = data.forecast.forecastday[0].hour[21].time;
    document.querySelector(".hr3-img-21").src = "https:" + data.forecast.forecastday[0].hour[21].condition.icon;
    document.querySelector(".hr3-cond-21").innerText = data.forecast.forecastday[0].hour[21].condition.text;
    document.querySelector(".hr3-d-21").innerText = data.forecast.forecastday[0].hour[21].temp_c;

    document.querySelector(".hr3-24").innerText = data.forecast.forecastday[0].hour[23].time;
    document.querySelector(".hr3-img-24").src = "https:" + data.forecast.forecastday[0].hour[23].condition.icon;
    document.querySelector(".hr3-cond-24").innerText = data.forecast.forecastday[0].hour[23].condition.text;
    document.querySelector(".hr3-d-24").innerText = data.forecast.forecastday[0].hour[23].temp_c;


}

fectchResult(weatherLocation);