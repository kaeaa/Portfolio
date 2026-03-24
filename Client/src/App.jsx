"use client";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import IsUnderonstruction from "./Components/Pages/IsUnderConstruction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import HomePage from "./HomePage";
import NotFound from "./Components/Pages/NotFound";
import ProjectDetail from "./Components/Pages/ProjectDetail";
import Blog from "./Components/Pages/Blog";
import TopPage from "./Routes/TopPage";
import ContactModal from "./Components/Pages/ContactModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isUnderConstruction = false;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lenis, setLenis] = useState(null);

  if (isUnderConstruction) {
    document.title = "Under Construction | Portfolio";
    return <IsUnderonstruction />;
  }

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 2.5,
      smooth: true,
    });
    setLenis(lenisInstance);
    window.lenis = lenisInstance;

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      delete window.lenis;
    };
  }, []);


  useEffect(() => {
    if (isModalOpen && lenis) {
      lenis.stop(); 
    } else if (lenis) {
      lenis.start(); 
    }
  }, [isModalOpen, lenis]);

  return (
    <div className="app">
      <>
        <Navbar setIsModalOpen={setIsModalOpen} />
        <TopPage setIsModalOpen={setIsModalOpen} />
        <Routes>
          <Route
            path="/"
            element={<HomePage setIsModalOpen={setIsModalOpen} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects2/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />

        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
        <ToastContainer
          hideProgressBar
          closeButton={false}
          position="bottom-right"
          toastStyle={{
            fontStyle: "Nunito, sans-serif",
          }}
        />
      </>
    </div>
  );
}

export default App;
