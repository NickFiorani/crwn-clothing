import {
  createContext,// per far funzionare il context devo andare nell' Index.js e importare il Provider e wrapparo attorno all' App component
  useState,
  useEffect,
} from "react"; /*  metodo per creare i component context ( components che raccolgono 
    data per essere usati in altri contesti/components) */

import { onAuthStateChangedListerner ,createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };



  useEffect(() => {
    const unsubscribe = onAuthStateChangedListerner((user) => {
      if(user)
      {
        createUserDocumentFromAuth(user);
      }
        setCurrentUser(user);// se l'user signs out settiamo il valore null , se l'user signs in settiamo il valore object user
    }); 

    return unsubscribe; // ogni volta che il parametro user o "auth" cambia la funzione viene chiamata come callback
    // quando il component unmount avviene il return di unsucribe
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>; //wrappo il mio UserContext attorno al component children
};
