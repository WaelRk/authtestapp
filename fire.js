import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAeoBQH0H0brv8j5EcCxhe3VRM26R7vrSg",
    authDomain: "authtestapp-20d4f.firebaseapp.com",
    projectId: "authtestapp-20d4f",
    storageBucket: "authtestapp-20d4f.appspot.com",
    messagingSenderId: "804074816270",
    appId: "1:804074816270:web:6e2771559bd47aac31cd5f"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
