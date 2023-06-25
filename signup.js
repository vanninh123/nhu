const firebaseConfig = {
    apiKey: "AIzaSyBfEzvMvwWSuW8AG6s82dpD1JRWhplhrCU",
    authDomain: "login-project-ec541.firebaseapp.com",
    databaseURL: "https://login-project-ec541-default-rtdb.firebaseio.com",
    projectId: "login-project-ec541",
    storageBucket: "login-project-ec541.appspot.com",
    messagingSenderId: "1021869633771",
    appId: "1:1021869633771:web:97a9dcec8b956605c4ceae"  
};
firebase.initializeApp(firebaseConfig);


  // initialize firebase
  
  // reference your database
  var contactFormDB = firebase.database().ref("Users");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    const username = getElementVal("username");
    const emailid = getElementVal("emailid");
    const password = getElementVal("password");
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);


    saveUser(username, emailid, hashedPassword);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveUser = (username, emailid, hashedPassword) => {
    // check user 
    var newContactForm = firebase.database().ref("Users/"+ username).update({
      username,
      email: emailid,
      password: hashedPassword,
    
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  