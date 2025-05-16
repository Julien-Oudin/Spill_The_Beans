var servings = document.getElementById("servings-quantity");

function updateIngredients() {
    const ingredients = document.getElementsByClassName("servings-ingredients");
    for (let i = 0; i < ingredients.length; i++) {
        ingredients[i].innerHTML = servings.value;
    }
}

function addServings() {
    servings.value = parseInt(servings.value) + 1;
    updateIngredients();
}

function removeServings() {
    if (parseInt(servings.value) > 1) {
        servings.value = parseInt(servings.value) - 1;
        updateIngredients();
    }
}

updateIngredients();
