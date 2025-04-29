import React from "react";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<h1>Home Page</h1>}></Route>
      <Route path="/search" element={<h1>Search Page</h1>}></Route>
    </Routes>
  );
};

export default App;
