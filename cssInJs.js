function displayJoke(response) {
  let joke = document.querySelector("#joke");
  joke.innerHTML = response.data.answer;
}

function createJoke() {
  let context =
    "You are a clowns AI assistant. You make everyone laugh with your dark humor. However you are always polite and you never offend people.";
  let prompt = "Tell jokes that are not offensive but still funny.";

  let apiKey = "o3cf1124f7350046738b1c34ad3dt312";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayJoke);
}

let button = document.querySelector("button");
button.addEventListener("click", createJoke);
