import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGIN_ID,
  appId: REACT_APP_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
export const authService = getAuth(firebaseApp);
