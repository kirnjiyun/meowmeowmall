import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    // Firebase 프로젝트 설정에서 복사한 구성 객체
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    // ...
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
