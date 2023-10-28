const apiKey = "ee323acdce622706c557bdf4f39071a8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=ottawa";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

}



window.onload=function(){
    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value); // passing the city that was searched when search button clicked
    })
  }
