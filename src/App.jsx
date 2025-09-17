import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import WorkingWith from "./pages/Workingwith";
import Dashboard from "./admin/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/working-with" element={<WorkingWith />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
