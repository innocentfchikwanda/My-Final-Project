import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
