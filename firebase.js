import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  collectionGroup,
  getDocs,
  query,
  where,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBCG0Hc-aRcHaXW6cHYxR5pWYb7P5Ymtw4",
  authDomain: "jab-alghanaim-c68e4.firebaseapp.com",
  projectId: "jab-alghanaim-c68e4",
  storageBucket: "jab-alghanaim-c68e4.firebasestorage.app",
  messagingSenderId: "204161664032",
  appId: "1:204161664032:web:90d34c676c4767b421e845"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export async function getApprovedOffers() {
  const offerRef = doc(
    db,
    "merchants",
    "OqtjkdVgwuaAIXbCGXeY",
    "offers",
    "fOiofGocdoHRzoERSxlS"
  );

  const result = await getDoc(offerRef);

  console.log("هل وُجد العرض؟", result.exists());
  console.log("بيانات العرض:", result.data());

  return result.exists()
    ? [{ id: result.id, ...result.data() }]
    : [];
}
