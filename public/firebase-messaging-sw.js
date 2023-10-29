import { initializeApp } from "firebase/app";
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
const messaging = getMessaging(app);

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification;
  const notificationOptions = {
    body,
    icon: "", // Replace with the path to your notification icon
  };

  self.registration.showNotification(title, notificationOptions);

  // You can also trigger in-app notifications here
  // For example, you can use the Broadcast Channel API to communicate with your app
  const channel = new BroadcastChannel("notification-channel");
  channel.postMessage(payload);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  // event.waitUntil(clients.openWindow("YOUR_REDIRECT_URL"));
  // Replace YOUR_REDIRECT_URL with the URL you want to open when the notification is clicked.
});
