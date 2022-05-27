import React from "react";
import { countries } from "./data";
import "./index.css";

export default function Flagsheader({
  selectedCountries,
  setSelectedCountries,
}) {
  const saveCountry = (e) => {
    let obj = JSON.parse(e.target.value);
    const countryAlreadyExist =
      selectedCountries.filter((i) => i.Name === obj.Name)?.length !== 0;

    if (countryAlreadyExist) {
      alert("Country already Added");
      return;
    }
    setSelectedCountries([
      ...selectedCountries,
      { ...obj, flag: `https://countryflagsapi.com/png/${obj.Code}` },
    ]);
  };

  return (
    <header>
      <div className="headerTitle">
        <h1>Countries of the world</h1>
      </div>
      <div className="selectCountries">
        <select onChange={(e) => saveCountry(e, "country")}>
          <option value="select">Add Countries</option>

          {countries.map((item, index) => {
            return (
              <option key={index} value={JSON.stringify(item)}>
                {item.Name}
              </option>
            );
          })}
        </select>
      </div>
    </header>
  );
}
