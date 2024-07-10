import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAXOgW-g9t4PVzBZDUvVcCL2h5Pf0J2Lc",
  authDomain: "portfoliofootprint.firebaseapp.com",
  projectId: "portfoliofootprint",
  storageBucket: "portfoliofootprint.appspot.com",
  messagingSenderId: "1036083277608",
  appId: "1:1036083277608:web:c095563516615670eb6a1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

signInAnonymously(auth).catch((error) => {
  console.log(error);
});

export { db, auth };