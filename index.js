function displayTemperature(response) {
  temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temmperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  apiKey = "o3cf1124f7350046738b1c34ad3dt312";
  apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}

function searchEngine(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");
  let heading = document.querySelector("h1");
  heading.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let form = document.querySelector("#main-form");
form.addEventListener("submit", searchEngine);
