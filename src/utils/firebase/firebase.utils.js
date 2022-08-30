import { initializeApp } from "firebase/app"; // import che serve per inizializzare firebase
import {
  getAuth,
  signInWithRedirect, // non implementato nella nostra app
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword, // metodo firebase default per creare un user su firebase
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged, // metodo firebase per controllare se l'user è signed in o no
} from "firebase/auth"; // import per l'authentication
import {
  getFirestore,
  doc, // instance of the firestore document
  getDoc, // method to get data from firestore docs
  setDoc, // method to set data inside firestore docs
  collection, // method to set a collection inside firestore db
  writeBatch, // method to write and complete multiple writing as a single transactions in the databse 
  query,
  getDocs,
} from "firebase/firestore"; // import per il database di firebase : firestore

// nel sito di firebase dentro la schermata della mia app clicco sul link web < /> e do un nome alla mia web app poi copio
// e incollo la parte sottostante
const firebaseConfig = {
  apiKey: "AIzaSyAnGN3-D7ZitzVpmE7yLey6SnSG0SzIpDE",
  authDomain: "crwn-clothing-db-4d6a5.firebaseapp.com",
  projectId: "crwn-clothing-db-4d6a5",
  storageBucket: "crwn-clothing-db-4d6a5.appspot.com",
  messagingSenderId: "295408428145",
  appId: "1:295408428145:web:ec0bf06b806246940f27d0",
};

// Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider(); //classe disponibile avendo fatto l'import di GoogleAuthProvider da "firebase/auth"
// esistono altri classi di provider per il sign in tipo facebook, github etc, nel caso
// voglia usare uno di quei provider per il sign in devo importare quei component sopra
// negli import e poi successivamente istanziare quelle classi e poi
// chiamare quel provider nelle funzioni( es const signInWithGooglePopup )
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider); // non implementato nella nostra app

export const db = getFirestore(); // ref al mio database firestore

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {// metodo che prende la collection specifica(collectionKey) e l'object che voglio aggiungerci(objectToAdd)

  const collectionRef = collection(db, collectionKey);// referenzio la collection specifica ( collectionKey) all'interno del mio db(db)
  const batch = writeBatch(db);// metodo che prende il mio db(db) usato per completare l'operazione di batch nel mio db 

  objectsToAdd.forEach((object) => {

    const docRef = doc(collectionRef, object.title.toLowerCase());// referenzio lo spot specifico all'interno della collection del database per ogni valore in questo caso 'title' all'interno del mio array di objects
    batch.set(docRef, object); // setto il valore (object) nella collection specifica(docRef)
        
  });

  await batch.commit(); // committa tutto le wrtites del batch, se anche una sola fallisce anche la commit fallisce
  console.log('done');
} 

export const getCategoriesAndDocuments = async () =>{

  const collectionRef = collection(db, 'categories');// referenzio la mia collection ' categories
  const q = query(collectionRef); // passo al metodo query la mia collectionRef

  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title , items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return; // inline return per terminare la funzione se l'userAuth non è presente
  const userDocRef = doc(
    db,
    "users",
    userAuth.uid
  ); /* doc method takes 3 arguments (database(db), name of the collection in the databse('users'),
  uid ( uniqueid : si trova nell'oggetto jason che ci torna dal metodo logGoogleUser del nostro component di SignIn)) */

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    // se la snapshot rileva che l'user non esiste creiamo un nuovo user con il metodo seDoc
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef; /* nel caso la userSnapShot sia già stata creata return i dati già esistenti dell'user (altrimenti viene creato il nuovo
  user con il blocco if soprastante) */
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return; // se manca o l'email o la password inline return per terminare la funzione

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return; // se manca o l'email o la password inline return per terminare la funzione

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListerner = (
  callback /*  quando si istanzia questa funzione bisogna per forza 
dargli una function di callback */
) =>
  /* questa funzione onAuthStateChangedListerner triggera la funzione di callback che gli passo quando la istanzio ogni volta 
che il valore auth cambia es. ogni volta che un nuovo user si autentica o esce dall'auth */
  onAuthStateChanged(auth, callback);
