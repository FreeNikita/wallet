import firebase from 'firebase';

const login = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => console.log('res', res))
      .catch(function(error) {
        console.log('err', error);
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ...
      });
};

const registration = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log('err', error);
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ...
      });


// firebase.auth().signOut().then(function() {
//     // Sign-out successful.
// }).catch(function(error) {
//     // An error happened.
// });

const provider = new firebase.auth.GoogleAuthProvider();

const signGoogle = () =>
  firebase.auth().signInWithPopup(provider)
      .then((res) => ({
        accessToken: res.credential.accessToken,
        user: {
          email: res.user.email,
          fullName: res.user.displayName,
          uid: res.user.uid,
          emailVerified: res.user.emailVerified,
          phoneNumber: res.user.phoneNumber,
        },
      }))
      .catch(function(error) {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
      // ...
      });

export {
  login,
  registration,
  signGoogle,
};
