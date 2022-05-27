import React, { useState } from "react";
import Flagscontainer from "../components/Flagscontainer";
import Flagsheader from "../components/Flagsheader";
export default function Countryflags() {
  const [selectedCountries, setSelectedCountries] = useState([]);

  return (
    <div>
      <Flagsheader
        selectedCountries={selectedCountries}
        setSelectedCountries={setSelectedCountries}
      />
      <Flagscontainer
        selectedCountries={selectedCountries}
        setSelectedCountries={setSelectedCountries}
      />
    </div>
  );
}
