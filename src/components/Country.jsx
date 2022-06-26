import React from "react";
import { Link } from "react-router-dom";
function Country({ country: { flags, name, population, region, capital } }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={flags.png} alt="" />
      </div>
      <div className="card__text">
        <Link to={"/detail/" + name.common} className="link">
          <h1>{name.common}</h1>
        </Link>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>Region: {region}</p>
        <p>Capita: {capital}</p>
      </div>
    </div>
  );
}

export default Country;
