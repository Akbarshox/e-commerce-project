import React from "react";
import './App.css';
import Appbar from "./components/Layout/Appbar";
import DashboardProducts from "./components/Dashboard/DashboardProducts";
import {Route, Routes} from "react-router-dom";
import Product from "./components/Product/Product";

function App() {

   return (
      <div>
         <Appbar/>
         <Routes>
            <Route path={"/"} element={<DashboardProducts/>}/>
            <Route path={`/product/:id`} element={<Product/>}/>
         </Routes>
      </div>
   )
}

export default App;