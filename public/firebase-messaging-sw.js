// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCIshYXUNtTk5Va8EMHZlfr27h86FwYU84",
  authDomain: "engage-598a6.firebaseapp.com",
  projectId: "engage-598a6",
  storageBucket: "engage-598a6.appspot.com",
  messagingSenderId: "177065416317",
  appId: "1:177065416317:web:134599fbd7cdffdbda8314",
  measurementId: "G-PR9PLLYQPS",
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/vite.svg",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
