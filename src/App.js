// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import Suggestions from "./components/Suggestions";
import Tracker from "./components/Tracker";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/suggestions" element={<Suggestions />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route
              path="/"
              element={<h1>Welcome to Carbon Footprint Calculator</h1>}
            />
            {/* You can add more content or components for the landing page */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
