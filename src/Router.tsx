// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from './pages/Contact';

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}


// export default function AppRouter() {
//     return (
//       <>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/project" element={<Project />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </BrowserRouter>
//       </>
//     );
// }
