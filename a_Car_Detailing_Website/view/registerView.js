function registerView() {
    app.innerHTML = /*HTML*/`
    <button onclick="homeView()">Back to home screen</button>
    <h1>Register here:<h1>
    <br>
    <div class="registerView">
    <div><input type="text" placeholder="first name" onchange="inputChange('firstName', this.value)" required></div>
    <div><input type="text" placeholder="Family name" onchange="inputChange('familyName', this.value)" required></div>
    <div><input type="number" min="16" max="100" id="checkAge" placeholder="age" onchange="inputChange('age', this.value)" required></div>
    <div><input type="number" placeholder="Phone number" onchange="inputChange('phoneNumber', this.value)" required></div>
    <div><input type="email" placeholder="Email" onchange="inputChange('email', this.value)" required></div>
    <div><input type="password" id="passwordOne" placeholder="Password" onchange="inputChange('passwordOne', this.value)" required></div>
    <div><input type="password" id="passwordTwo" placeholder="Repeat password" onchange="inputChange('passwordTwo', this.value)" required></div>
    <button onclick="registerUser()">Register</button>
    </div>
    `;
}