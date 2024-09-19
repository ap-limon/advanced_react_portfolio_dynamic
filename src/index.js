import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import { createRoot } from "react-dom/client";

const App = () => {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
};


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)