import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import MainBoard from "./layout/MainBoard";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainBoard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
