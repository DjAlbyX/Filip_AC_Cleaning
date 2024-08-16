function registerUser() {
    const createAccount = model.input.createAccount[0];

    const passwordOne = document.getElementById('passwordOne').value;
    const confirmPassword = document.getElementById('passwordTwo').value;

    if (passwordOne !== confirmPassword) {
        alert("The passwords don't match!");
        return;
    }

    createAccount.id = model.data.users.length;
    const newUser = { ...createAccount };
    model.data.users.push(newUser);
    homeView();
}

function inputChange(field, value) {
    model.input.createAccount[0][field] = value;
}