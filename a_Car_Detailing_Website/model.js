//https://angrytools.com/css-flex/
//https://cssgrid-generator.netlify.app/
const app = document.getElementById('app');

const model = {
    app: {
        userID: null,
        loggedIn: false,
        currentProfile: false,
    },

    input: {
        login: {
            id: null,
            password: null,
        },

        createAccount: [
            {
                id: null,
                firstName: "",
                familyName: "",
                age: null,
                phoneNumber: null,
                email: "",
                passwordOne: "",
                passwordTwo: "",
            }
        ],
        createAppointment: [
            {
                firstName: "",
                familyName: "",
                age: null,
                phoneNumber: null,
                email: "",
                date: "",
                place: "",
                carInfo: "",
                moreInfo: "",
            },
        ],
    },

    data: {
        admin: {
            users: [0],
        },
        users: [
            {
                id: 0,
                firstName: "Albert",
                familyName: "Filip",
                passwordOne: 123,
                phoneNumber: 12345678,
                age: 20,
                email: "albert.filip30@yahoo.com",
            },
            {
                id: 1,
                firstName: "Mario",
                familyName: "Dumitru",
                passwordOne: 1234,
                phoneNumber: 12345678,
                age: 20,
                email: "mario",

            },
        ],

        appointments: [
            {
                firstName: "Abdullah",
                familyName: "m",
                age: 30,
                phoneNumber: 12345678,
                email: "aaa",
                date: '27/06/2024',
                place: 'Our Garage',
                carInfo: 'bruh',
                moreInfo: 'bruh',
            },
        ],

        clientPublicInfo: [
            {
                date: "04/03/2024",
                name: "Abdullah",
                review: "Veldig fornøyd, bra resultat for prisen!",
                scale: 10,
            },
            {
                date: "20/04/2024",
                name: "Lukas",
                review: "veldig bra",
                scale: 10,
            },
            {
                date: "21/08/2024",
                name: "Mario",
                review: "Top!",
                scale: 10,
            },
        ],

        videos: [
            {
                videoDescription: "Mold removed from trunk",
                url: 'FxH_AvN7H9I',
            },
            {
                videoDescription: "Car Upholstery cleaning",
                url: 'MvZeXpdkkwc',
            },
            {
                videoDescription: "Exterior cleaning",
                url: 'UO0w4iG21Tc',
            },
        ],
    },
}

