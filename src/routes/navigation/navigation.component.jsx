import {
  Fragment,
  useContext,
} from "react"; /* Fragment : è un component di react che permette di creare un tag che non rappresenta nulla 
( utile per ottenere un parental tag per renderizzare un component senza effettivamente usare un tag htlm (es. <div>)) */
import {
  Outlet,
  Link,
} from "react-router-dom"; /* Link : component di react che ha la stessa funzione di un anchor <a href =''> ma è più corretto da usare
con la react-router-dom */

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"; /* in react posso importare le immagini sottoforma
 di component e poi usarele con il medesimo tag di components */

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from "./navigation.style"; // importo i miei styled components

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {
            // se il currentUser esiste renderizzo il SIGN OUT altrimenti SIGN IN
            currentUser ? (
              // posso assegnare il component NavLink a questo span usando la property as e poi assegnare il tag di 'span'
              <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to="auth">
                SIGN IN
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinks>
        {
          /* && operator se entrambi i value prima e dopo l'&& sono true ho il return del valore dopo &&. Quindi se isCartOpen è true
          e <CartDropdown /> (che essendo un component(quindi una function) ha sempre valore true) sono true ho il return di <CartDropdown />   */
          isCartOpen && <CartDropdown /> 
        }
      </NavigationContainer>
      <Outlet />
    </Fragment>
    /*  Outlet sta a significare tutto il resto che viene renderizzato in questo caso sotto la navigation bar
      ( la posizione in cui viene nestato tra i vari tag consegue la posizione in cui viene rappresentato nell'applicazione ) */
  );
};

export default Navigation;
