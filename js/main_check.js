const name_user = localStorage.getItem('userName');

if (name_user) {
    document.querySelectorAll('.login-button').forEach(btn => {
        btn.textContent = name_user;
    });
    }
    else{
    document.querySelectorAll('.login-button').forEach(btn => {
        btn.textContent = none;
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

if (name_user) {
    document.querySelectorAll('.login-button').forEach(btn => {
        btn.textContent = name_user;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-button");
  const userName = localStorage.getItem("userName");

  if (userName && userName !== "none") {
    loginButton.innerHTML = `<img src="../img/svg/log.svg" alt="Login Icon" class="login-icon">${userName}`;

    loginButton.addEventListener("mouseover", function () {
      loginButton.innerHTML = `<img src="../img/svg/log.svg" alt="Login Icon" class="login-icon">Log Out`;
    });

    loginButton.addEventListener("mouseout", function () {
      loginButton.innerHTML = `<img src="../img/svg/log.svg" alt="Login Icon" class="login-icon">${userName}`;
    });

  }
});
