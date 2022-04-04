import React from "react";
import Header from "./components/Layout/Header";
import Category from "./components/Content/Category";
import Footer from "./components/Layout/Footer";
import TourItem from "./components/Content/Tour/TourItem";
import TourDetail from "./components/Content/Tour/TourDetail";
import { Routes, Route } from "react-router-dom";






const App = (props) => {
  return (
     <div>
    <Header></Header>
      <Routes>
        
        <Route path="/trangchu" element={<Category/>}/>
        <Route path="/danhsach/:id" element={<TourItem/>}/>
        <Route path="/chitiet/:id" element={<TourDetail/>}/>
        
        
      </Routes>
      <Footer></Footer>
      
     </div>
  );
}

export default App;
