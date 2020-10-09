import firebase from 'firebase';

const google = () => {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  return {
    sing: () => firebase.auth().signInWithPopup(googleAuthProvider),
    title: 'google',
  };
};

export const LOGIN_METHODS = [google()];
