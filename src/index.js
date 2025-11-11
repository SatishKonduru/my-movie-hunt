import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="red" maxRating={10} onSetRating={setMovieRating} />
      <h2>This Movie was rated {movieRating} stars</h2>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating maxRating={10} />
    <StarRating size={24} />
    <StarRating size={60} color="#f00" />
    <StarRating size={60} color="snow" />
    <StarRating size={60} color="tomato" /> */}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={4}
    />
    <StarRating maxRating={10} color="tomato" size={60} /> */}
    <Test />
  </React.StrictMode>
);
