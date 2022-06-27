import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import UTRGVwinds from "./pages/UTRGVwinds";
import SocialMedia from "./pages/SocialMedia";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/winds" element={<UTRGVwinds />} />
        <Route path="/social" element={<SocialMedia />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
