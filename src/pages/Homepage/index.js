import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Home() {
  const navigate = useNavigate();

  const openCountryFlagsPage = () => {
    navigate(`/country-flags`);
  };

  // const openReverseStringPage = () => {
  //   navigate(`/reverse-string`);
  // };

  return (
    <div className="homePage">
      <h1>Show Countries Flags</h1>
      <Button variant="secondary" onClick={openCountryFlagsPage}>
        Countries flags
      </Button>
      {/* <Button variant="secondary" onClick={openReverseStringPage}>
        Reverse string
      </Button> */}
    </div>
  );
}
