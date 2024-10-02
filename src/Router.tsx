import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from './pages/ContactPage';
import ResumePage from "./pages/ResumePage";

//! COLORS PALETTE FOR THE PORT!!!!!
// https://coolors.co/palette/1a1b1b-262726-33442c-bcabae-ddd5d0

export default function AppRouter() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </Router>
      </>
    );
}
