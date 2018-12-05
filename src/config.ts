import firebase from 'firebase';

const Config = {
  
        apiKey: "AIzaSyAv8gaPKj3gYJJR0zprXVR9Fe4HOrAffWs",
        authDomain: "trainer-32286.firebaseapp.com",
        databaseURL: "https://trainer-32286.firebaseio.com",
        projectId: "trainer-32286",
        storageBucket: "trainer-32286.appspot.com",
        messagingSenderId: "713234445249"
    }


const firebaseConfig = firebase.initializeApp(Config);
export default firebaseConfig;