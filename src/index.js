let currentTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];
let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();
let dateTime = document.querySelector("#date-time");
dateTime.innerHTML = `${day} ${hour}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city");
  let cityHeading = document.querySelector("#city-header");
  cityHeading.innerHTML = `${city.value}`;

  function showCurrentWeather(response) {
    let temp = Math.round(response.data.temperature.current);
    let tempHeader = document.querySelector("#current-temperature-value");
    tempHeader.innerHTML = `${temp}`;
  }
  let cityValue = city.value;
  let apiKey = "ee21f04bf3f2ad6e420ef9to7c4ad1a4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityValue}&key=${apiKey}`;
  axios.get(apiUrl).then(showCurrentWeather);
}
let cityInput = document.querySelector("#search-bar");
cityInput.addEventListener("submit", searchCity);
