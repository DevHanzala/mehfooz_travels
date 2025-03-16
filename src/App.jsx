import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollTop"; 
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import NotFound from "./Components/NotFound";
import favicon from "./assets/Icon.png";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Packages = lazy(() => import("./pages/Packages"));
const Contact = lazy(() => import("./pages/Contact"));
const Reviews = lazy(() => import("./pages/Review"));

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen text-lg">
    Loading...
  </div>
);

const App = () => {
  useEffect(() => {
    const changeFavicon = (url) => {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = url;
    };

    changeFavicon(favicon);
  }, []);

  return (
    <div className="bg-dark-green text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company-profile" element={<About />} />
            <Route path="/hajj" element={<Packages />} />
            <Route path="/umrah" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Banner />
    </div>
  );
};

export default App;
