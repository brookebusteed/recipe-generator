function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Fish Recipe",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#generator");
recipeFormElement.addEventListener("submit", generateRecipe);
