import styled from "styled-components"; // import da usare ogni volte che voglio accedere alla mia libreria styled-components

import { Link } from "react-router-dom";

/* creo component con il metodo style.div ` qui dentro inserisco le mie modifiche css poi vado a sostituire il mio styled component al 
posto del mio tag div nel functional component ` */
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

/* posso assegnare uno stile anche direttamente a un component di react ( Link ) in questo modo il component continuerà ad avere 
i suoi metodi funzionanti oltre ai suoi stili applicati qui */
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// OLD SCSS CODE

/* .navigation {

   height: 70px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 25px;

  
    .logo-container {
      height: 100%;
      width: 70px;
      padding: 25px;
    }
  
    .nav-links-container {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
  
      .nav-link {
        padding: 10px 15px;
        cursor: pointer;
      }
    }
  } */
