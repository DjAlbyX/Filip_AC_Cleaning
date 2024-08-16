function logInView() {
    app.innerHTML = /*HTML*/`
    <button onclick="homeView()">Back to home screen</button>
    <br>
    <h1>Log In</h1>
    <br>
    <div class="logInView">
    <div><input type="email" id="emailInput" placeholder="Email" required></div> 
    <div><input type="password" id="passwordInput" placeholder="Password" required></div>
    <button onclick="logIn()">Log In</button>
    <div>Don't have an account yet? register here. <button onclick="registerView()">register</button></div>
    </div>
    `;
}