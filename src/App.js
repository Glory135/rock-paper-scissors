import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Normal } from "./pages/normal/Normal";
import { Bonus } from "./pages/bonus/Bonus";

function App() {
  return (
    <main className='App'>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/original' exact element={<Normal />} />
        <Route path='/bonus' exact element={<Bonus />} />
      </Routes>
    </main>
  );
}

export default App;
