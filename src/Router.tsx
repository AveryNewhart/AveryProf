import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from './pages/ContactPage'
import ResumePage from "./pages/ResumePage";

export default function Router() {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
       </BrowserRouter>
      </>
    );
  }