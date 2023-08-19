import "./App.scss";

import Footer from "./components/Footer";
import Home from "./components/Home";
import CartPage from "./components/CartPage/CartPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DelAddress from "./components/DelAddress";
import Payment from "./components/Payment";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cartPage" element={<CartPage />} />
            <Route path="/delAddress" element={<DelAddress />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
