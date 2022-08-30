import { Routes, Route } from "react-router-dom"; // importo i due componenti per le routes 
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";



const App = () => {
  return (
    /* Routes : component da utilizzare quando sto per andare a usare dei Route component */
    /* Route : component da utilizzare dentro i component Routes, prende come valori un path o un index che matcha una stringa 
    e collega quel relativo path al render di un determinato element (es. <Home />) */
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop /> /* dopo shop/la * significa che matcha qualsiasi altro path 
      susseguente a shop e quindi renderizza la shop route con le sue relative routes nestate, quindi
     dentro il Shop component devo poi andare a creare le altre routes nestate */ } />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
    /*  attributo index mostra a prescindere(non necessita di un path) l'elemento designato 
    ogni volta che il parental component viene renderizzato */
  );
};

export default App;
