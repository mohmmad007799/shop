// ================= استدعاء Firebase =================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// ================= إعدادات مشروع Firebase =================
const firebaseConfig = {
  apiKey: "AIzaSyCmArZk0HDaTyIYWCvo4qUUs6wtbOug5fs",
  authDomain: "shop-65260.firebaseapp.com",
  projectId: "shop-65260",
  storageBucket: "shop-65260.appspot.com",
  messagingSenderId: "828188332596",
  appId: "1:828188332596:web:9727077b8210a7e63a3061",
  measurementId: "G-560CHRLKRQ"
};

// ================= تهيئة Firebase =================
const app = initializeApp(firebaseConfig);

// ================= تصدير العناصر للاستخدام في باقي الصفحات =================
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// ================= خيار إضافي لتسهيل الوصول عالميًا =================
window.auth = auth;
window.db = db;
window.storage = storage;

console.log("Firebase جاهز للعمل ✅");
