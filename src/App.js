import  "./App.scss";

import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import CartPage from "./components/CartPage/CartPage";
import { Routes , Route, BrowserRouter } from "react-router-dom";


function App() {


  return (
   <>
   <div className="app">
    < BrowserRouter>
    <Routes>
      <Route  path = "/" element = {<Home/>} />
      <Route  path = "/cartPage" element = {<CartPage/>} />
    </Routes>
   
    <Footer/>
   
    </BrowserRouter>



   </div>
   </>
  );
}

export default App;
