import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
