function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let promptInput = document.querySelector("#user-prompt");

  let apiKey = "7f638oat3210b87014fcf77ba697ff9d";
  let prompt = `User prompt: Generate a recipe about ${promptInput.value}`;
  let context =
    "You are a chef that recipes that are quick, healthy and delicious. They range from simple to gourmet. Your mission is to generate a recipe in basic HTML. Please follow format of <h2>Recipe Title</h2> <br/> <h3>Ingrediets</h3> <ul>ingridents</ul> <br/> <h3>Method</h3> <ol> method</ol> . Make sure to follow to user prompt. Sign the recipe with 'SheCodes AI' inside a <strong> element. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#generator");
recipeFormElement.addEventListener("submit", generateRecipe);
