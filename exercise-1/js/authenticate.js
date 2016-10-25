// JavaScript authentication file
$(function() {

    // Initialize Firebase
      var config = {
        apiKey: "AIzaSyBKaXtGQwgiaehnMSrC4Qmd7IC4Bar59Is",
        authDomain: "authentication-test-590f2.firebaseapp.com",
        databaseURL: "https://authentication-test-590f2.firebaseio.com",
        storageBucket: "authentication-test-590f2.appspot.com",
        messagingSenderId: "950377314729"
      };
      firebase.initializeApp(config);
    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
        var email = $('#email').val();
        var password = $('#password').val();
        var displayName = $('#displayName').val();
        console.log(email, password, displayName)

        // Create user, then set the user's display name
        var auth = firebase.auth();
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){

                // Set display name
                user.updateProfile({
                    displayName: displayName
                }).then(function(){
                    window.location = 'index/html';
                })
        })
        .catch(function(error) {
            alert(error);
        })
    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password


        // Authenticate using email and password, then redirect

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission
    $('form').on('submit', function() {
        event.preventDefault();
        if(this.id == 'sign-up') {
            signUp();
        } else {
            signIn();
        }
    })


    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
