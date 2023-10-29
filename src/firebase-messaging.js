// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const analytics = getAnalytics(app);
// Initialize Firebase

const requestPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      const message = getMessaging(app);
      getToken(message, {
        vapidKey:
          "BE3fH5Eig6gojE7TWndrW8fclozdir9lqlLSGmpyGqA7QGc0ToYYew_1NGfeir3fosqTiOjD6gj7HWdSfvFKp5M",
      })
        .then(() => {
          console.log("Notification permission granted.");
          return message.getToken();
        })
        .then((token) => {
          console.log("FCM Token:", token);
        })
        .catch((error) => {
          console.error("Error requesting permission:", error);
        });
    } else {
      console.log("permission not granted");
    }
  });
};
requestPermission();
