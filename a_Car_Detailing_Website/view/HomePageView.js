//link about & licenses text to about.html
//add prices photo and license photo
homeView();

function homeView() {
    app.innerHTML = /*html*/`
    ${guestAndUserHome()}
    <h1>Welcome to Filip Auto&Carpet Cleaning</h1>

    <div class="userList">
    <table class="table1">
    <tr class="tr1">
    <th class="th1">Customer Reviews</th>
    ${customerReviews()}
    </tr>
    </table>
    </div>

    <div class="welcome">
    Car interior/exterior washing and 
    <br>
    detailing wherever in Bergen you are,
    <br> 
    or feel free to visit my garage!
    <hr class="hr1">
    <button class="bookBtn" onclick="appointmentView()">Book an appointment</button>
    <br>
    <img src="image/Screenshot (9).png" alt="package prices" width="200px" height="350px" class="prices">
    </div>

    <div class="bottomInfo">
    mail: <a href="mailto:albert.filip30@yahoo.com">albert.filip30@yahoo.com</a> 
    Phone number:<a href="tel:+4740577670">40577670</a> 
    <div onclick="aboutView()" class="about">about & licenses</div>
    garage adress: Harald Skjolds veg 12C 
    </div>
    

    <div class="userList2">
    <table class="table2">
    <tr class="tr2">
    <th class="th2">Videos</th>
    ${videoInfo()}
    </tr>
    </table>
    </div>
    `;
}

function videoInfo() {
    let ytVideos = '';
    for (let info in model.data.videos) {
        const id = model.data.videos[info].url;
        ytVideos +=/*HTML*/`
    <td class="td2">
    ${model.data.videos[info].videoDescription}:
    <br>
    <iframe 
    width="auto" 
    height="auto" 
    src="https://www.youtube.com/embed/${id}" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
    </iframe>
    </td>
    `;
    }
    return ytVideos;
}

function customerReviews() {

    let customerDetails = '';
    for (let i in model.data.clientPublicInfo) {
        customerDetails += /*HTML*/`
    <td class="td2">
    ${model.data.clientPublicInfo[i].name} ${model.data.clientPublicInfo[i].date}
    <br>
    ${model.data.clientPublicInfo[i].review}
    <br>
    ${model.data.clientPublicInfo[i].scale}/10
    </td>
    `;
    }
    return customerDetails;
}

function guestAndUserHome() {
    let profileButton = `<button class="logIn" onclick="logInView()">Log In</button>`;
    if (model.app.loggedIn == true) {
        profileButton = `<button class="logIn" onclick="profileView(${model.app.userID})">Profile</button>`;
    }
    return profileButton;
}