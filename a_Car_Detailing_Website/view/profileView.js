function profileView(id) {
    if (id != undefined) model.app.currentprofile = id
    const user = model.data.users[id == undefined ? model.app.currentprofile : id]
    if (id === undefined) id = id
    app.innerHTML = /*HTML*/`
    <button onclick="homeView()">Back to home screen</button>
        <h1>Profile</h1>
        <div class="profileInfo">
        <div>First Name: ${user.firstName}</div>
        <br>
        <div>Family Name: ${user.familyName}</div>
        <br>
        <div>Age: ${user.age}</div>
        <br>
        <div>Email: ${user.email}</div>
        <br>
        <div>Phone Number: ${user.phoneNumber}</div>
        </div>
        <br>
        ${adminProfie()}
        `;
}

function adminProfie() {
    let adminHtml = '';
    if (model.data.admin.users.includes(model.app.userID)) {
        adminHtml = /*HTML*/`
        <table class="table3">
        <tr class="tr3">
        <th class="th3">Appointments</th>
        ${appointments()}
        </tr>
        </table>
    `;
        return adminHtml;
    } else {
        adminHtml = '';
        return adminHtml;
    }
}

