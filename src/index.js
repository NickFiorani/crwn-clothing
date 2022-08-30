import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { UserProvider } from "./contexts/user.context"; // do accesso a tutti i component nestati nel mio UserProvider al context
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom"; // importo il component per le routes

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* nesto il mio entry point <App /> dentro il mio <BroswerRouter> component importato
 precedentemente in modo da collegare i miei component con le routes url */
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
