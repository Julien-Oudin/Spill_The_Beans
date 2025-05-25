const form = document.getElementById('form');
const name = localStorage.getItem('userName');

var name_displayed = document.getElementsByClassName("login-button");



form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('firstname-input');
    name_user = nameInput.value;
    localStorage.setItem('userName', name_user);
    window.location.href = "../html/home.html";
});