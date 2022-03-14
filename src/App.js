import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import MainLayout from "./components/Layout/MainLayout";
import Categories from "./components/Categories/Categories";

function App() {

   return (
      <div>
         <MainLayout />
         <Routes>
            <Route path={"/category/:name"} element={<Categories />} />
         </Routes>
      </div>
   );
}

export default App;