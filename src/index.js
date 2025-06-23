import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CatsGallery from "./CatsGallery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CatsGallery />
  </React.StrictMode>
);
