let savedCities = []

let apiKey = "c32994fa4154612f41f38bdd2aa60666";

savedCities.forEach(function (city, index, arr) {
    if (index === arr.length - 1) {
        fetchForecast(city)
    }
})

function fetchForecast(city) {
    let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
        .then(function (response) {
            let temperature = response.main.temp;
            let windSpeed = response.wind.speed;
            let humidity = response.main.humidity

            let cityDiv = $("<div class='city'>");
            let title = $("<h3>").text(city);
            let tem = $("<p>").text("Temperature: " + temperature + "F");
            let win = $("<p>").text("Wind Speed: " + windSpeed + "mph");
            let hum = $("<p>").text("Humidity: " + humidity + "%");

            cityDiv.append(title, tem, win, hum);

            $("#todayWeather").empty();
            $("todayWeather").prepend(cityDiv);
        })
}

$("#searchBtn").on("click", function(event){
    event.preventDefault();

    let weather = $("#cityInput").val();

    localStorage.setItem("weather", JSON.stringify(savedCities))
    savedCities.push(weather);

})