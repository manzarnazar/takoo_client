import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  isSupported,
} from "firebase/messaging";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZ8zJ2qi0sSP9Hqk8g3IYsREid9DkApBA",
  authDomain: "takoo-app.firebaseapp.com",
  databaseURL: "https://takoo-app-default-rtdb.firebaseio.com",
  projectId: "takoo-app",
  storageBucket: "takoo-app.firebasestorage.app",
  messagingSenderId: "1079774287067",
  appId: "1:1079774287067:web:d8d126286c5e7512a468fe",
  measurementId: "G-XVSJ7V3PDC",
};

const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(firebaseApp);

// Correctly export a promise that resolves to messaging instance (or null)
export const getMessagingObject = async () => {
  try {
    const isSupportedBrowser = await isSupported();
    if (isSupportedBrowser) {
      return getMessaging(firebaseApp);
    }
    return null;
  } catch (err) {
    console.error("Messaging not supported:", err);
    return null;
  }
};

// fetchToken function
export const fetchToken = async (setTokenFound, setFcmToken) => {
  try {
    const messaging = await getMessagingObject();
    if (!messaging) return;

    const currentToken = await getToken(messaging, {
      vapidKey:
        "BHrv6nCLCX-Kf5UbXvZeSWt0ULGLoXw1iUazQUjMR3dECL63qKs17QknXrHnKHTVndaeJQy9aG8YxE54bO5PVmQ",
    });

    if (currentToken) {
      setTokenFound(true);
      setFcmToken(currentToken);
    } else {
      setTokenFound(false);
      setFcmToken();
    }
  } catch (err) {
    console.error("Token fetch error:", err);
  }
};

// onMessageListener function
export const onMessageListener = async () =>
  new Promise(async (resolve, reject) => {
    try {
      const messaging = await getMessagingObject();
      if (!messaging) return;

      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    } catch (err) {
      reject(err);
    }
  });
