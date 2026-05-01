
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  ignoreUndefinedProperties: true,
}, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

// Test connection to Firestore
async function testConnection() {
  try {
    console.log(`Firestore: Testing connection...`);
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log(`Firestore: Connected successfully`);
  } catch (error: any) {
    console.error(`Firestore Connectivity Error:`, error);
    if (error.code === 'unavailable' || (error.message && error.message.includes('the client is offline'))) {
      console.warn("Firestore service is currently unavailable. This is often transient or requires the Firebase setup to be finalized in the Cloud console.");
    }
  }
}
testConnection();
