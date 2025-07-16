import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner /> {/* Assuming Banner is a component that displays the main banner or hero section */}
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;