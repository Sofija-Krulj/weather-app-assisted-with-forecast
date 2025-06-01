function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let heading = document.querySelector("h1");
  heading.innerHTML = response.data.city;
  let weatherConditionElement = document.querySelector("#weather-condition");
  weatherConditionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  let date = new Date(response.data.time * 1000);
  let time = document.querySelector("#time");
  time.innerHTML = formatDate(date);
  let icon = document.querySelector("#temperature-icon");
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="temperature-icon"/>`;
  getForecast(response.data.city);
}

function formatDate(date) {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let day = days[date.getDay()];
  let minutes = date.getMinutes();
  let hours = date.getHours();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day}, ${hours}:${minutes}`;
}

function searchCity(city) {
  apiKey = "o3cf1124f7350046738b1c34ad3dt312";
  apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}

function searchEngine(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}
function getForecastDate(timestamp) {
  let date = new Date(timestamp * 1000);

  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return date[days(getDay)];
}

function getForecast(city) {
  let apiKey = `o3cf1124f7350046738b1c34ad3dt312`;

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(forecast);
}

function forecast(response) {
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
    <div class="weather-forecast-day">
      <div class="weather-forecast-date">Tue</div>
      <img src="${day.condition.icon_url}"  class="weather-forecast-icon"/>
      <div class="weather-forecast-temperatures">
        <div class="weather-forecast-temperature">
          <strong>${Math.round(day.temperature.maximum)}º</strong>
        </div>
        <div class="weather-forecast-temperature">${Math.round(
          day.temperature.minimum
        )}º</div>
      </div>
    </div>
    `;
    }
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let form = document.querySelector("#main-form");
form.addEventListener("submit", searchEngine);

searchCity("Paris");
forecast();
