import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "48px",
        backgroundColor: "#282c34",
      }}
    >
      <h1 style={{ color: "#61dafb" }}>Hello, Docker React!</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
