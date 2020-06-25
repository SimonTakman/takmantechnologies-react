import React from "react";
import logo from "./icons/takman_technologies_logo.svg";
import Footer from "./components/footer/Footer";
import "./App.css";
import IconGrid from "./components/iconGrid/IconGrid";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <IconGrid />
      <Footer />
    </div>
  );
}
export default App;
