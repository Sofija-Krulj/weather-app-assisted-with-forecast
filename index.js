function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let heading = document.querySelector("h1");
  heading.innerHTML = response.data.city;
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

let form = document.querySelector("#main-form");
form.addEventListener("submit", searchEngine);

searchCity("Paris");
