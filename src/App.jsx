import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar, Hero } from "./components";
import Footer from "./components/Footer"; // <-- Import the Footer

// Lazy load components to split bundle
const StarsCanvas = lazy(() => import("./components/canvas/Stars.jsx"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        {/* Suspense to load components only when needed */}
        <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <Suspense fallback={null}>
              <StarsCanvas />
            </Suspense>
            <Footer />  {/* Add the Footer below StarsCanvas */}
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
