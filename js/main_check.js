const name_user = localStorage.getItem('userName');
if (name_user) {
    document.querySelectorAll('.login-button').forEach(btn => {
        btn.textContent = name_user;
    });
}

function toggleFavorite(button) {
        button.classList.toggle('active');
      }

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
