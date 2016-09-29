var firebase  = require("firebase");
var googleAuth = new firebase.auth.GoogleAuthProvider();

var config = {
    apiKey: "AIzaSyAIUVzzx30NXgnzZj33rSgaZHhnhqpMKXU",
    authDomain: "crime-spotter.firebaseapp.com",
    databaseURL: "https://crime-spotter.firebaseio.com",
    storageBucket: "crime-spotter.appspot.com",
    messagingSenderId: "1067376948276"
  };
  firebase.initializeApp(config);




//create user
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
    //Handle errors
    var errorCode  = error.Code;
    var errorMessage = error.message;
});

//sign in user
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

    
    var errorCode  = error.code;
    var errorMessage = error.message;
});

//logout
firebase.auth().signOut().then(function(){
    //Sign-out successful
}, function(error) {
    //send error message here
});

//get signed in user details