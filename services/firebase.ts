
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const config = {
  projectId: "skill-pilot-488610",
  appId: "1:975144513259:web:bf944074fbb1b9194a58ae",
  apiKey: "AIzaSyD-QcATfgloJcTwiycrLEALUT0Bo3-Cl4s",
  authDomain: "skill-pilot-488610.firebaseapp.com",
  storageBucket: "skill-pilot-488610.firebasestorage.app",
  messagingSenderId: "975144513259",
};

const app = initializeApp(config);
export const db = getFirestore(app, "ai-studio-16f4af98-1a85-4f45-a51e-e30c89cef6bd");
export const auth = getAuth(app);

// Test connection to Firestore
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error(`Please check your Firebase configuration. The client is offline: ${error.message}`);
    }
  }
}
testConnection();
