const form = document.getElementById('form');

// get users from the localStorage  (web cache)
const usersJSON = localStorage.getItem('users');

// if null, create an empty array else take the list of users
let users;
if (usersJSON === null) {
    users = [];
} else {
    users = JSON.parse(usersJSON);
}

//save users on localStorage
function saveUsers() {
    const usersString = JSON.stringify(users);
    localStorage.setItem('users', usersString);
}

// check which page we are on
const isSignUpPage = document.body.classList.contains('signup');
const isSignInPage = document.body.classList.contains('signin');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('firstname-input').value;
    const password = document.getElementById('password-input').value;

    // look if user already exists in the users array
    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            foundUser = users[i];
            break;
        }
    }

    if (isSignUpPage) {
        const email = document.getElementById('email-input').value;

        if (foundUser !== null) {
            alert("User already exists");
        } else {
            //add new user
            users.push({ username: username, email: email, password: password });
            saveUsers();
            alert("Sign up successful !");
            localStorage.setItem('userName', username);
            window.location.href = "../html/home.html";
        }

    } else if (isSignInPage) {
        if (foundUser === null) {
            alert("User not found");
        } else if (foundUser.password !== password) {
            alert("Incorrect password");
        } else {
            alert("Login successful!");
            localStorage.setItem('userName', username);
            window.location.href = "../html/home.html";
        }
    }
});

