const createAppointmentConst = model.input.createAppointment[0];

function bookedAppointment(){
    createAppointmentConst = model.data.appointments.length;
    const newAppointment = { ...createAppointmentConst };
    model.data.appointments.push(newAppointment);
    homeView()
}


function appointmentChange(field, value) {
    model.input.createAppointment[0][field] = value;
}