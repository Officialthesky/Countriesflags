import React from "react";
import { Card, Button } from "react-bootstrap";

import "./index.css";
export default function Flagscontainer({
  selectedCountries,
  setSelectedCountries,
}) {
  const removeFlags = (item) => {
    const result = selectedCountries.filter(function (task) {
      return task !== item;
    });
    setSelectedCountries(result);
    localStorage.setItem("remainingFlags", JSON.stringify(result));
  };

  return (
    <div className="flagsCardContainer">
      {selectedCountries.map((item, index) => (
        <Card style={{ minWidth: "18rem", margin: 10 }} key={index}>
          <Card.Img variant="top" src={item.flag} />
          <Card.Body>
            <Card.Title>Country Name : {item.Name}</Card.Title>
            <Card.Text>Country Code : {item.Code}</Card.Text>
            <Button variant="warning" onClick={() => removeFlags(item, index)}>
              Remove
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
