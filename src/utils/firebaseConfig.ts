import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: Constants?.manifest?.extra?.firebase.apiKey,
  authDomain: Constants?.manifest?.extra?.firebase.authDomain,
  projectId: Constants?.manifest?.extra?.firebase.projectId,
  storageBucket: Constants?.manifest?.extra?.firebase.storageBucket,
  messagingSenderId: Constants?.manifest?.extra?.firebase.messagingSenderId,
  appId: Constants?.manifest?.extra?.firebase.appId,
  measurementId: Constants?.manifest?.extra?.firebase.measurementId,
};

let app: any;

if (!app) {
  app = initializeApp(firebaseConfig);
}

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
