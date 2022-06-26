import Search from "../components/Search";
import Country from "../components/Country";
import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

import { motion } from "framer-motion";

function Home() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`, {
      headers: {
        "Content-Types": "application/json",
      },
    });

    const data = await response.json();
    setDatas(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Search />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid auto-grid container">
          {loading ? (
            <Spinner />
          ) : (
            datas.map((country) => (
              <Country country={country} key={country.cca2} />
            ))
          )}
        </div>
      </motion.section>
    </>
  );
}

export default Home;
