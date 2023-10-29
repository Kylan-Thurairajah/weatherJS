document.addEventListener("DOMContentLoaded", function () {
    // DOMContentLoaded neccesary to ensure that JS only runs after
    // html finished loading on page (issue was occuring with)
    // addEventListener function
    const apiKey = "ee323acdce622706c557bdf4f39071a8";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.getElementById("searchBox");
    const searchBtn = document.getElementById("searchBtn");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if(response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else {
            var data = await response.json();

            // Update the DOM with weather data
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }
            
            


    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
