import React, { useState } from "react";

function TextArea(props) {
  //Hooks object
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  //This is Hook in JS
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space cleared", "success");
  };

  // const [btnText, setBtnText] = useState("Enable Dark Mode");
  // const handleColorkClick = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",

  //     });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Enable White Mode");
  //   }
  // };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <div className="container" id="buttons">
          <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleLowClick}
          >
            Convert to lowercase
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          {/* <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleColorkClick}
          >
            {btnText}
          </button> */}
          <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleExtraSpace}
          >
            Clear Extra Space
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>
        {/* <p>{0.008 * text.split(" ").length} Minutes Read</p> */}
        <h2>Preview</h2>
        <p>
          {text.length > 0? text : "Enter text in the textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
export default TextArea;
