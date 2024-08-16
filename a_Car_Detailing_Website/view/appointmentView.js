let choosenPlace = '';
let guestHtml = '';

function guestAppointment() {
    if (model.app.loggedIn == false) {
        guestHtml = /*HTML*/`
    <div class="guestAppointment">
    <div><input type="text" placeholder="First name" onchange="appointmentChange('firstName', this.value)"></div>
    <br>
    <div><input type="text" placeholder="Family name" onchange="appointmentChange('familyName', this.value)"></div>
    <br>
    <div><input type="number" min="16" max="100" id="checkAge" placeholder="Age" onchange="appointmentChange('age', this.value)"></div>
    <br>
    <div><input type="number" placeholder="Phone number" onchange="appointmentChange('Phone Number', this.value)"></div>
    <br>
    <div><input type="email" placeholder="email" onchange="appointmentChange('email', this.value)"></div>
    </div>
    <br>
    <div class="guestRegister">Want to be remembered whenever you book an appointment and benefit from special offers? <span class="register" onclick="registerView()">register here.</span></div>
    <br>
    `;
        return guestHtml;
    } else {
        return '';
    }
}

function appointmentView() {
    app.innerHTML = /*HTML*/`
    <button onclick="homeView()">Back to home screen</button>
<br>
   <h1>Make an appointment</h1>
   ${guestAppointment()}
    <div class="appointment">
    <div>appointment date: <input type="date" id="aDate"></div>
    <br>
    <div>place: <button onclick="ourGarage()">our garage</button> <button onclick="choosePlace()">choose place</button></div>
    ${choosenPlace}
    <br>
    <div>Information about the car: <input type="text" onchange="appointmentChange('carInfo', this.value)"></div>
    <br>
    More information: 
    <div><input type="text" onchange="appointmentChange('moreInfo', this.value)"></div>
    <br>
    <button onclick="bookedAppointment()">Make appointment</button>
    </div>
    `;
}

function choosePlace() {
    choosenPlace = `
    <div>Please write down the place or adress: <input type="text"></div>
    `;
    appointmentView();
}

function ourGarage() {
    choosenPlace = '';
    appointmentView();
}