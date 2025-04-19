function searchEngine(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#form-search-input");
  let heading = document.querySelector("h1");
  heading.innerHTML = searchInput.value;
}

let form = document.querySelector("#main-form");
form.addEventListener("click", searchEngine);
