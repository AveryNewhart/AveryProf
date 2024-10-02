import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from './pages/Contact';
// import ResumePage from "./pages/ResumePage";

//! COLORS PALETTE FOR THE PORT!!!!!
// https://coolors.co/palette/1a1b1b-262726-33442c-bcabae-ddd5d0

export default function AppRouter() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
          </Routes>
        </BrowserRouter>
      </>
    );
}
