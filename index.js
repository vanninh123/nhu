const firebaseConfig = {
  apiKey: "AIzaSyBfEzvMvwWSuW8AG6s82dpD1JRWhplhrCU",
  authDomain: "login-project-ec541.firebaseapp.com",
  databaseURL: "https://login-project-ec541-default-rtdb.firebaseio.com",
  projectId: "login-project-ec541",
  storageBucket: "login-project-ec541.appspot.com",
  messagingSenderId: "1021869633771",
  appId: "1:1021869633771:web:97a9dcec8b956605c4ceae"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your databasex
const getElementVal = (id) => {
  return document.getElementById(id);
};

function getdata() {
  var username = getElementVal("username")?.value;
  var password = getElementVal("password")?.value;
  firebase.database().ref("Users/" + username).on('value', function(snapshot) { 
    data = snapshot.val();
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    console.log({input: hashedPassword, database: data.password});
    if(data.username == username && data.password == hashedPassword) {
      window.location.href ="sendEmail.html"
    } 
    else {
      alert("password is incorrect!")
    }
  })   
}

var signInBtn = getElementVal("signInBtn");

signInBtn.addEventListener("click", getdata);



