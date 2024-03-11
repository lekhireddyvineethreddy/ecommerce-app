// App.js
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Headersection/Header";
import HomePage from "./Components/Pages/HomePage";
import StorePage from "./Components/Pages/StorePage";
import Aboutpage from "./Components/Pages/Aboutpage";
import Contactus from "./Components/Pages/Contactus";
import SingleProduct from "./Components/Products/SingleProduct";




function App() {
 

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Store" element={<StorePage /> }  />
          <Route path="/About" element={<Aboutpage /> } />
          <Route path="/Contact" element={ <Contactus /> } />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
