import React, { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FeaturedProps from "./components/FeaturedProps";
import Modal from "./components/Modal";
import SeeMore from "./components/SeeMore";
import CEOQuote from "./components/CEOQuote";
import CitiesSlider from "./components/CitiesSlider";
import Footer from "./components/Footer";

let propertyList = [
  {
    propName: "Orchid Villa",
    propDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint exercitationem optio, soluta, officia ut debitis omnis pariatur totam eligendi consectetur quidem dolore nulla quaerat voluptatibus enim voluptate. Quidem, inventore?",
    propRooms: 7,
    propBathrooms: 6,
    propPrice: "4,125,000.00",
    propImage: "../images/home1.jpg",
  },
  {
    propName: "577 Gracia",
    propDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint exercitationem optio, soluta, officia ut debitis omnis pariatur totam eligendi consectetur quidem dolore nulla quaerat voluptatibus enim voluptate. Quidem, inventore?",
    propRooms: 6,
    propBathrooms: 6,
    propPrice: "3,890,000.00",
    propImage: "../images/home2.jpg",
  },
  {
    propName: "Nexa Epitoma",
    propDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint exercitationem optio, soluta, officia ut debitis omnis pariatur totam eligendi consectetur quidem dolore nulla quaerat voluptatibus enim voluptate. Quidem, inventore?",
    propRooms: 8,
    propBathrooms: 9,
    propPrice: "6,150,000.00",
    propImage: "../images/home3.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <Nav />

      <Hero />

      <FeaturedProps PropertiesList={propertyList} />

      <h2 className="text-3xl text-gray-500 flex justify-center">
        Featured Cities
      </h2>

      <CitiesSlider />

      <SeeMore />

      <CEOQuote />

      <Footer/>
    </div>
  );
}

export default App;
