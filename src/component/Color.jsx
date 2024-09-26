import React, { useEffect, useState } from "react";

const Color = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("black");

  const randomeColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomeColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleRgbColor = () => {
    const r = randomeColorUtility(256);
    const g = randomeColorUtility(256);
    const b = randomeColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (colorType === "rgb") {
      handleRgbColor();
    } else {
      handleHexColor();
    }
  }, [colorType]);

  return (
    <div
      style={{
        width: "100vb",
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        flexDirection: "column",
      }}
    >
      <button onClick={() => setColorType("hex")}>HEX-Color</button>
      <button onClick={() => setColorType("rgb")}>RGB-Color</button>
      <button
        onClick={() =>
          colorType === "hex" ? handleHexColor() : handleRgbColor()
        }
      >
        Generate
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <h3>{colorType === "hex" ? "Hex-Color:" : "Rgb-color:"}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  );
};

export default Color;
