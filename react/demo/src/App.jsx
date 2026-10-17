import React from "react";
import Home from "./layout/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./layout/pages/About";
import Contact from "./layout/pages/Contact";
import NotFound from "./layout/pages/NotFound";
// import FormData from "./Formhadling/FormData";
// import FormObje from "./Formhadling/FormObje";
// import Boot from "./bootstradata/Boot";
// import BootCompo from "./bootstradata/BootCompo";
// import Footerd from "./bootstradata/Footerd";
// import Logindata from "./bootstradata/Logindata";
// import MainProps from "./Props/MainProps";
// import MainState from "./State/MainState";
// import Effectdata from "./Useffects/Effectdata";
// import UserData from "./Useffects/UserData";
// import UserTest from "./Useffects/UserTest";
// import ProductData from "./Useffects/ProductData";
// import MainContext from "./Context/MainContext";
// import Demo from "./Css/Demo";
// import ClassCompo from "./Component/ClassCompo";
// import FunCompo from "./Component/FunCompo";
// import Hello from "./JSX/Hello";

function App(){
    return(
        <BrowserRouter>
        <div>
            {/* <h1>hello this app data</h1> */}
            {/* <ClassCompo />
            <FunCompo /> */}
            {/* <Hello /> */}
            
            {/* <Demo /> */}
            
            {/* props data */}
            {/* <MainProps/> */}
            
            {/* state data */}
            {/* <MainState /> */}

            {/* useffect  */}
            {/* <Effectdata /> */}
            {/* <UserData /> */}
            {/* <UserTest /> */}
            {/* <ProductData /> */}
            {/* <MainContext /> */}

            {/* <FormData /> */}
            {/* <FormObje /> */}

            {/* <Boot /> */}
            {/* <BootCompo />
            <Logindata />
            <Footerd /> */}

            {/* layout */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                {/* not foun universal */}
                <Route path="*" element={<NotFound />} />
            </Routes>

        </div>
        </BrowserRouter>
    )
}

export default App
