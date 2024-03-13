function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.5,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let promptInput = document.querySelector("#user-prompt");

  let apiKey = "7f638oat3210b87014fcf77ba697ff9d";
  let prompt = `User prompt: Generate a recipe about ${promptInput.value}`;
  let context =
    "You are a chef that recipes that are quick, healthy and delicious. They range from simple to gourmet. Your mission is to generate a recipe in basic HTML. Please follow format of <h2>Recipe Title</h2> <h3>Ingrediets</h3> <ul>ingridents</ul> <h3>Method</h3> <ol> method</ol> Sign the recipe with 'SheCodes AI' inside a <strong> element. Make sure to follow to user prompt.  ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a ${promptInput.value} recipe... </div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#generator");
recipeFormElement.addEventListener("submit", generateRecipe);
