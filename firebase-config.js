// Paste the Firebase Web App configuration from Firebase Console here.
// The app remains usable in demo mode until these values are replaced.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

export const firebaseReady = !firebaseConfig.apiKey.startsWith("PASTE_") &&
  !firebaseConfig.projectId.startsWith("YOUR_");

let db = null;
if(firebaseReady){
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}
export { db };
