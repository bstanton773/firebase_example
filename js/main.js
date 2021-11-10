console.log('Hello we are connected')


const firebaseConfig = {
    apiKey: "AIzaSyDKhOCmDUa1llDigMm-lEL9xt_1YeD_HcI",
    authDomain: "kekambas-72-bs.firebaseapp.com",
    projectId: "kekambas-72-bs",
    storageBucket: "kekambas-72-bs.appspot.com",
    messagingSenderId: "134801156454",
    appId: "1:134801156454:web:6cb3d5efdd5cb5a17a00a7"
};

// Initialize the firebase app with the Configuration from the App
firebase.initializeApp(firebaseConfig);
console.log(firebase);

// Get a reference to our Realtime Database
const database = firebase.database();

console.log(database);


// Read values from the database
database.ref().once('value')
    .then(snapshot => snapshot.val())
    .then(rawData => {
        console.log(rawData)

        let kekambasList = document.getElementById('kekambas');

        rawData.forEach((arrayItem) => {
            let firstName = arrayItem.first_name;
            let lastName = arrayItem.last_name;
            kekambasList.innerHTML += `<li class='list-group-item'>${firstName} ${lastName}</li>`;
        })

    })


function addHardData(){
    database.ref('13').set({
        id: 4321,
        first_name: 'nairB',
        last_name: 'notnatS'
    })
}
