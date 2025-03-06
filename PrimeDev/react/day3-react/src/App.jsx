import React from "react";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import {BrowserRouter, Routes, Route} from 'react-router'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// const App = () => {
//   const { location } = window;
//   const { pathname } = location;

//   if (pathname == "/") {
//     return (
//       <>
//         <HomePage />
//       </>
//     );
//   } else if (pathname == "/search") {
//     return (
//       <div>
//         <SearchPage />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1>Oops.. Page not found</h1>
//         <a href="/">Home</a>
//       </div>
//     );
//   }
// };
