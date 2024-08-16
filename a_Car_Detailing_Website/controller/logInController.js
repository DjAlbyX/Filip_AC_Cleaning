function logIn() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    const user = findUser(email, password);
    if (user === null) {
        alert("User not found or password is wrong, try again.")
    } else {
        model.app.loggedIn = true;
        model.app.userID = user.id;
        homeView();
        model.data.admin.users.includes(model.app.userID) ? console.log('Welcome back, admin:)') : console.log(`Welcome back ${user.firstName}!`);
    }
}

function findUser(email, password) {

    for (let user of model.data.users) {
        // console.log(`Checking user: ${user.firstName}, Password: ${user.passwordOne}`);
        if (user.email === email && user.passwordOne == password) {
            console.log(`Loging user: ${user.firstName} ${user.familyName}`);
            return user;
        }
    }
    console.log('User not found');
    return null;
}