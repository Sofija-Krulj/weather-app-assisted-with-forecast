function searchEngine(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");
  let heading = document.querySelector("h1");
  heading.innerHTML = searchInput.value;
}

let form = document.querySelector("#main-form");
form.addEventListener("submit", searchEngine);
