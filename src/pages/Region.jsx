import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Country from "../components/Country";
import Search from "../components/Search";
import Spinner from "../components/Spinner";

import { motion } from "framer-motion";

function Region() {
  const [regions, setRegion] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const fetchRegion = async (filterTerm) => {
    const fectObjects = {
      headers: {
        "Content-Types": "application/json",
      },
    };
    const response = await fetch(
      "https://restcountries.com/v3.1/region/" + filterTerm,
      { fectObjects }
    );

    const regionDatas = await response.json();
    setRegion(regionDatas);
    setLoading(false);
  };

  useEffect(() => {
    fetchRegion(params.region);
    // eslint-disable-next-line
  }, [params.region]);

  return (
    <>
      <Search />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container grid auto-grid">
          {loading ? (
            <Spinner />
          ) : (
            regions.length > 0 &&
            regions.map((country) => (
              <Country country={country} key={country.ccn3} />
            ))
          )}
        </div>
      </motion.section>
    </>
  );
}

export default Region;
