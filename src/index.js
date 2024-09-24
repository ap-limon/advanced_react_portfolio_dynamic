import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import Navbar from "./components/Navbar";

const App = () => {
    return (
      <>
        <Navbar />
      </>
    );
};


ReactDOM.createRoot(document.getElementById("root")).render(<App />);