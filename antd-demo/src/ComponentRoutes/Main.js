import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const Main = () => {
    return(
        <>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {/* <About />
            <Contact /> */}
        </>
    )
};

export default Main;