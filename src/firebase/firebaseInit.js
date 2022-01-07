import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseconfig";

const initialAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initialAuthentication;