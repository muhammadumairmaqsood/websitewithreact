import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Experts from "./components/Experts";
import Newsletter from "./components/Newsletter";
import Plans from "./components/Plans";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Experts />
      <Newsletter />
      <Plans />
      <Footer />
    </>
  );
}

export default App;
