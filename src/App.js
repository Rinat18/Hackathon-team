import React from "react";
import Navbar from "./components/home/Navbar";
import MainRoutes from "./router/MainRoutes";
import Footer from "./components/home/Footer";
import HomePage from "./components/pages/HomePage";
import SideBar from "./components/product/SideBar";

export default function App() {
  return (
    <div>
      <SideBar />

      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}
