import { Button } from "react-bootstrap";
import React, { useState } from "react";
import findingLengthOfString, { reverseString } from "../../utils/helper";
import "./index.css";
export default function Reversestringcontainer() {
  const [inputString, setInputString] = useState("");
  const [reverseInputStr, setReverseInputStr] = useState("");
  const saveString = (e) => {
    setInputString(e.target.value);
  };

  const reverseInputString = () => {
    let reversedString = reverseString(inputString);
    let lengthOfString = findingLengthOfString(inputString);
    if (lengthOfString === 0) {
      alert("String can't be empty");
      return;
    }
    setReverseInputStr(reversedString);
    setInputString("");
  };

  return (
    <div className="reverseStringContainer">
      <div className="reverseStringInputContainer">
        <input
          type="text"
          onChange={saveString}
          value={inputString}
          className="inputString"
        />

        <Button
          variant="secondary"
          onClick={reverseInputString}
          className="reverseButton"
        >
          Reverse
        </Button>
      </div>
      <div className="reverseStringOutputContainer">
        <h1>{reverseInputStr}</h1>
      </div>
    </div>
  );
}
