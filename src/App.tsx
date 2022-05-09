import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./compunents/Layout";
import { Home } from "./compunents/Home";
import { About } from "./compunents/About";
import { Kontact } from "./compunents/Kontact";
import { NotFound } from "./compunents/NotFound";
import { ExMovies } from "./compunents/ExMovies";
import { Movies } from "./compunents/Movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>            {/* nested routers in Layout */}
          <Route index element={<Home />}></Route>         {/* No path for home but Index */}
          <Route path="/about" element={<About />}></Route>
          <Route path="/kontact" element={<Kontact />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/exMovies/:id" element={<ExMovies />}></Route>
          <Route path="*" element={<NotFound />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
