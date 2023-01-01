import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement(
  "h1",
  {},
  "This is Heading 1 from the react CreateElement Tag"
);
const heading2 = React.createElement(
  "h1",
  {},
  "This is Heading 2 from the react CreateElement Tag"
);

const container = React.createElement("div", {}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
