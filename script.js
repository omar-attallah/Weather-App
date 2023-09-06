

const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weatherDiv = document.getElementById("weather");
// weatherDiv=round(weatherDiv)

const API_KEY = "95b990bb0fe017f8d81b28a5e78b945d"; 

searchButton.addEventListener("click", () => {
  const cityName = cityInput.value;


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
     
      weatherDiv.innerHTML = `
        <h2>${data.name} (${data.weather[0].main})</h2>
        <h3>Temperature: ${(data.main.temp)-273.}°C</h3>

        <h3>Humidity: ${data.main.humidity}%</h3>
        <h3>Wind speed: ${data.wind.speed} m/s</h3>
      `;
      weatherDiv=math.floor(weatherDiv);
      
    });
});

