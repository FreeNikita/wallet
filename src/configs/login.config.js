import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = () => firebase.auth();

const google = () => {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  return {
    sing: () => auth().signInWithPopup(googleAuthProvider),
    title: 'google',
  };
};

export const LOGIN_METHODS = [google()];
