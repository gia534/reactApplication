import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import BlogOne from "./BlogOne";
import BlogTwo from "./BlogTwo";
import Navbar from "./Navbar";
import BlogThree from "./BlogThree";
import './Main.css'
import Home from "./Home";


function Main(){
    return(
   <div className={"main"}>
       <style>
           @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Nunito:wght@200&family=Patrick+Hand&display=swap');
       </style>

       <BrowserRouter>

           <div className={"template"}>
               <div>
                   <Header/>
                   <div className={"routes"}>
                       <Routes>
                           <Route path="/blogone" element={<BlogOne/>}/>
                           <Route path="/blogtwo" element={<BlogTwo/>}/>
                           <Route path="/blogthree" element={<BlogThree/>}/>
                           <Route path="/" element={<Home/>}/>
                       </Routes>
                   </div>
               </div>
               <div>
                   <Navbar/>
               </div>
           </div>
           <Footer/>
       </BrowserRouter>
   </div>
    )
}

export default Main;

// src={"https://images.squarespace-cdn.com/content/v1/58a7541bd482e9746468c47c/1560374855368-" +
//             "JAS3TBEI6Y3S3YJIUVU3/%E2%80%9CYou+have+been+criticizing+yourself+for+years+and+it+hasn%E2%80%99t+" +
//         "worked.+Try+approving+of+yourself+and+see+what+happens.%E2%80%9D+%E2%80%94+Louise+Hay"}
// alt={"Loving your body quote by Louise Hay"