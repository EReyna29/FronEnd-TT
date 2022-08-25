// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore,collection,getDocs,doc,query,setDoc, orderBy,limit } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUXsUm53egwq_zlMGiUkUin9FKpHCFu5s",
  authDomain: "unidad-de-control.firebaseapp.com",
  projectId: "unidad-de-control",
  storageBucket: "unidad-de-control.appspot.com",
  messagingSenderId: "1026190117189",
  appId: "1:1026190117189:web:6254e2b7027d7ddc4fd62c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);

export const registroAlerta = async (alerta) =>{
    try{
        const collectionRef = collection(db,"alertas");
        const docRef = doc(collectionRef,alerta.id);
        await setDoc(docRef,alerta)
    }catch(error){

    }

}

export const getAlertas = async () =>{
    const alertas =[];
    try{
        const collectionRef = collection(db,"alertas");
        const q = query(collectionRef,orderBy("fecha","desc"),limit(8))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(doc=> {
            const alert = {...doc.data()};
            alert.docId=doc.id;
            alertas.push(alert);
        });

        return alertas;
    }catch(error){
        console.error(error);
    }

}

export const getNotificaciones = async () =>{
    const notificaciones =[];
    try{
        const collectionRef = collection(db,"notificaciones");
        const q = query(collectionRef,orderBy("fecha","desc"),limit(8))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(doc=> {
            const notificacion = {...doc.data()};
            notificacion.docId=doc.id;
            notificaciones.push(notificacion);
        });

        return notificaciones;
    }catch(error){
        console.error(error);
    }

}