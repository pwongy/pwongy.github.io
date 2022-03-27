import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Home from "./components/Home";
import Principles from "./components/Principles";
import Photos from "./components/Photos";
import Journey from "./components/Journey";
import Quotes from "./components/Quotes";
import PageNotFound from "./components/PageNotFound";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="welcome" element={<Home />} />
          <Route path="principles" element={<Principles />} />
          <Route path="photos" element={<Photos />} />
          <Route path="journey" element={<Journey />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
