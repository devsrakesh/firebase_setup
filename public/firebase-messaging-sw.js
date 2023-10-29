importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCIshYXUNtTk5Va8EMHZlfr27h86FwYU84",
  authDomain: "engage-598a6.firebaseapp.com",
  projectId: "engage-598a6",
  storageBucket: "engage-598a6.appspot.com",
  messagingSenderId: "177065416317",
  appId: "1:177065416317:web:134599fbd7cdffdbda8314",
  measurementId: "G-PR9PLLYQPS",
};
const firebase = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
