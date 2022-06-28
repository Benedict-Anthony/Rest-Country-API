// import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

import { Link } from "react-router-dom";

function CountryDetail({ data }) {
  return (
    <motion.div
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
        {data.map((obj) => (
          <div className="grid manual-grid" key={obj.ccn3}>
            <div className="image">
              <img src={obj.flags.png} alt="" />
            </div>

            <div className="detail__info">
              <h1>{obj.name.common}</h1>
              <div className="flex">
                <div className="flex1">
                  <p>{/* Native Name: <span>{obj.name.nativeName}</span> */}</p>
                  <p>
                    Population:{" "}
                    <span>{obj.population.toLocaleString("en-US")}</span>
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
                        <Link to={"/border/" + bdr} className="btn" key={index}>
                          {bdr}
                        </Link>
                      ))
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default CountryDetail;
