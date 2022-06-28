import "./index.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Region from "./pages/Region";
import SearchedCountry from "./pages/SearchedCountry";
import BorderDetail from "./pages/BorderDetail";
import NotFound from "./pages/NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <AnimatePresence>
      <BrowserRouter>
        <main className={`${theme && "active"}`}>
          <Header toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:detail" element={<Detail />} />
            <Route path="/region/:region" element={<Region />} />
            <Route path="/searched/:searched" element={<SearchedCountry />} />
            <Route path="/border/:border" element={<BorderDetail />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
