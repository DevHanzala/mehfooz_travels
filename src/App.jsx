import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";

// Lazy loading pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Packages = lazy(() => import("./pages/Packages"));
const Contact = lazy(() => import("./pages/Contact"));
const Reviews = lazy(() => import("./pages/Review"));

const App = () => {
  return (
    <div className="bg-dark-green text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hajj" element={<Packages />} />
            <Route path="/umrah" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Banner/>
    </div>
  );
};

export default App;
