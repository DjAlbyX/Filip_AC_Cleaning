function appointments() {
    let appointmentHtml;
        model.data.appointments.forEach(element => {
            appointmentHtml +=/*HTML*/`
        <td class="td3">
            ${element.firstName} ${element.familyName}
        <br>
            ${element.age}
        <br>
           ${element.phoneNumber}
        <br>
           ${element.email}
        <br>
        ${element.date}
        <br>
        ${element.place}
        <br>
        ${element.carInfo}
        <br>
        ${element.moreInfo}
        </td>
    `;
            
        });
        return appointmentHtml;
}