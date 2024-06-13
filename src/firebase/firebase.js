// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
  deleteDoc,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgbtGQ6IF1ZBkm2iSOp9PemWvfPHSwdZg",
  authDomain: "ecommerce-react1.firebaseapp.com",
  projectId: "ecommerce-react1",
  storageBucket: "ecommerce-react1.appspot.com",
  messagingSenderId: "1040773738478",
  appId: "1:1040773738478:web:c0f768c6ba32ddb2cee8ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Llama a la base de datos

const db = getFirestore(app);

//Esta funcion llama a los productos

export async function getProducts(){
const response = await getDocs(collection(db,"productos"));

   //response es un QuerySnapShot - es iterable
  const listaProductos=[];
+ 
  response.forEach((doc) => listaProductos.push({id: doc.id,  ...doc.data()}));
//Este forEach trae toda la informacion haciendo un push al array de listaProductos, en firebase el id esta aparte de la coleccion, asi que traemos primero el id y luego los demas datos con un spread operator.
  return listaProductos;

}



//Funcion que itera los productos dependiendo su categoria.
export async function getCategory(category){
  const response = await getDocs(collection(db,"productos"));
  const listaProductos=[];
  response.forEach((doc) => {
      if (doc.data().category === category) {
          listaProductos.push({id: doc.id,  ...doc.data()});
      }
  });
  return listaProductos;
}

//Funcion que permite agregar datos a la base de datos de firebase.
export async function addOrder(order){
  const ordersCollections = collection(db, "orders");
  const docRef = await addDoc(ordersCollections, order);
  console.log("Doc ref generado:" +docRef);
  console.log("id generado: " +docRef.id);
  return docRef.id;
}