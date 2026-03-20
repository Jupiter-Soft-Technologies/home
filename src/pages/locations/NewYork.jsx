import React from "react";
import LocationTemplate from "./LocationTemplate";
import newYorkData from "./data/locations/newyork";

const NewYork = () => {
  return <LocationTemplate data={newYorkData} />;
};

export default NewYork;