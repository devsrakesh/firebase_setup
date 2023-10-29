if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log(
        "Firebase Service Worker registered with scope:",
        registration.scope
      );
    })
    .catch((error) => {
      console.error("Error registering Firebase Service Worker:", error);
    });
}
