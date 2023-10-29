import { useEffect, useState } from "react";
import "./App.css";
import { message } from "../firebase";
import { getToken } from "firebase/messaging";

function App() {
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
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
      }
    });

    // BE3fH5Eig6gojE7TWndrW8fclozdir9lqlLSGmpyGqA7QGc0ToYYew_1NGfeir3fosqTiOjD6gj7HWdSfvFKp5M;
  }, []);
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
