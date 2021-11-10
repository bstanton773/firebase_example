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

        rawData.forEach((arrayItem, index) => {
            let firstName = arrayItem.first_name;
            let lastName = arrayItem.last_name;
            kekambasList.innerHTML += `<li class='list-group-item'>${firstName} ${lastName}</li>`;
        })

    })


function addData(e){
    // Stop the event from refreshing the page
    e.preventDefault();
    // Get a count of total number of people in the list
    let personCount = document.getElementsByTagName('li').length
    
    // Get the input data from the form
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    
    // Add new user as the next number in the list with the form data
    database.ref('users/' + personCount.toString()).set({
        id: personCount + 1,
        first_name: firstName,
        last_name: lastName
    })
    location.reload();
}


const form = document.getElementById('kekambasForm');
form.addEventListener('submit', addData)