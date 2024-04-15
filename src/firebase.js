import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCK5biBOUcn2NG8qJ53utZeO7HUv45FP7c",
    authDomain: "mall-afe57.firebaseapp.com",
    projectId: "mall-afe57",
    storageBucket: "mall-afe57.appspot.com",
    messagingSenderId: "971773731050",
    appId: "1:971773731050:web:934d31a70e8f8f1d1c3793",
    measurementId: "G-L71PYWFS4N",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
