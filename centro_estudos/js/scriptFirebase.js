//-------------------------------------------------------------------------------------------
//                Importando as funções necessárias do Firebase (Firebase 9+)
//-------------------------------------------------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

//-------------------------------------------------------------------------------------------
//                                Configuração do Firebase
//-------------------------------------------------------------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyBCVCOnsjyH0JdL9AKBoGHQa4KAWWkzO1c",
    authDomain: "prontuario-4ce95.firebaseapp.com",
    projectId: "prontuario-4ce95",
    storageBucket: "prontuario-4ce95.appspot.com",
    messagingSenderId: "276317492035",
    appId: "1:276317492035:web:c350879118105a204ad5f6",
    measurementId: "G-6TNEBPZ8YD"
};


//-------------------------------------------------------------------------------------------
//                                Inicializando o Firebase
//-------------------------------------------------------------------------------------------

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//-------------------------------------------------------------------------------------------
//                      Exportando Firestore e funções necessárias
//-------------------------------------------------------------------------------------------

export { db, collection, getDocs };