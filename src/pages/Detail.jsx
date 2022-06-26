import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Spinner from "../components/Spinner";
function Detail() {
  const [data, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const fetchCountry = async (searchTerm) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${searchTerm}?full-text=true`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setLoading(false);
    const data = await response.json();
    setDatas(data);
  };

  useEffect(() => {
    fetchCountry(params.detail);
    // eslint-disable-next-line
  }, [params.detail]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="detail"
    >
      <div className="container">
        <Link to={"/"} className="btn">
          {" "}
          <FaArrowLeft /> <span>Back Home</span>
        </Link>

        {loading ? (
          <Spinner />
        ) : (
          data.map((obj) => (
            <div className="grid manual-grid" key={obj.ccn3}>
              <div className="image">
                <img src={obj.flags.png} alt="" />
              </div>

              <div className="detail__info">
                <h1>{obj.name.common}</h1>
                <div className="flex">
                  <div className="flex1">
                    <p>
                      {/* Native Name: <span>{obj.name.nativeName}</span> */}
                    </p>
                    <p>
                      Population: <span>{obj.population}</span>
                    </p>
                    <p>
                      Region: <span>{obj.region}</span>
                    </p>
                    <p>
                      Sub Region: <span>{obj.subregion}</span>
                    </p>
                  </div>
                  <div className="flex2">
                    <p>
                      Top Level Domain: <span> {obj.tld} </span>
                    </p>
                    <p>
                      Currencies: <span>{obj.currencies.name}</span>
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <h4>Border Countries:</h4>

                  <div className="grid three">
                    {obj.borders === null ||
                      (obj.borders === undefined ? (
                        <p className="btn">Not Found</p>
                      ) : (
                        obj.borders.map((bdr, index) => (
                          <div className="btn" key={index}>
                            {bdr}
                          </div>
                        ))
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.section>
  );
}

export default Detail;