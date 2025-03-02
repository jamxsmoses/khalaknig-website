import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import WhatWeDo from "./pages/WhatWeDo";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeService, setActiveService] = useState(2);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`app ${
          isOpen ? "overflow-hidden" : "overflow-visible"
        } w-[100%] h-[100vh]`}
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="main w-[100%]">
          <Routes>
            <Route
              path="/"
              element={<Home setActiveService={setActiveService} />}
            />
            <Route
              path="/about-us"
              element={<AboutUs setActiveService={setActiveService} />}
            />
            <Route
              path="/what-we-do"
              element={
                <WhatWeDo
                  activeService={activeService}
                  setActiveService={setActiveService}
                />
              }
            />
            <Route path="/what-we-do/:id" element={<WhatWeDo />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {location.pathname === "/portfolio" ? "" : <Footer />}
      </div>
    </>
  );
}
