import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ApiTest from "./components/ApiTest";

function App() {
  return (
    <Router>
      <div className="p-4">
        <h1>Path Routing Demo</h1>
        <nav style={{ marginBottom: "10px" }}>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/api-test">API Test</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/api-test" element={<ApiTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
