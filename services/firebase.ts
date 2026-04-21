
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
}, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

// Test connection to Firestore
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log("Firestore connected successfully");
  } catch (error: any) {
    console.error("Firestore connectivity test failed:", error);
    if (error.code === 'unavailable' || (error.message && error.message.includes('the client is offline'))) {
      console.error("Please check your Firebase configuration or network. Connection is unavailable.");
    }
  }
}
testConnection();
