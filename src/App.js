import React from "react";
import Navbar from "./components/home/Navbar";
import MainRoutes from "./router/MainRoutes";
import Footer from "./components/home/Footer";
import HomePage from "./components/pages/HomePage";

export default function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}
