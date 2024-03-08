import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);

if (window.location.hostname === "localhost") {
  root.render(
    <>
      <App />
    </>
  );
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
