import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import CountryDetail from "../components/CourtryDetail";

function SearchedCountry() {
  const [data, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  async function getCountry(country) {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status !== 200) {
      navigate("/*");
    }

    const data = await response.json();
    setDatas(data);
    setLoading(false);
  }

  useEffect(() => {
    getCountry(params.searched);
    // eslint-disable-next-line
  }, [params.searched]);
  return (
    <section>
      <section className="container">
        {loading ? <Spinner /> : <CountryDetail data={data} />}
      </section>
    </section>
  );
}

export default SearchedCountry;
