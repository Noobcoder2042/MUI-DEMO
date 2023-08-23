import React from "react";

const UI = ({ selectedTabName }) => {
  console.log(selectedTabName);
  return (
    <div
      style={{
        // width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "",
        color: "white",
      }}
    >
      <div>
        <div>{selectedTabName}</div>
      </div>
    </div>
  );
};

export default UI;
