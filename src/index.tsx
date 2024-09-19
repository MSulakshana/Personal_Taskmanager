import React from "react";
import ReactDOM from "react-dom/client";
import TaskManager from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <TaskManager />
  </React.StrictMode>
);
