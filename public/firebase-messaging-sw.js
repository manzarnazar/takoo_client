importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
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

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
