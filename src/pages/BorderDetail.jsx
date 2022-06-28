import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import CountryDetail from "../components/CourtryDetail";

function BorderDetail() {
  const [data, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const getBorderCountry = async (borderCountry) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${borderCountry}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    setDatas(data);
    setLoading(false);
  };

  useEffect(() => {
    getBorderCountry(params.border);
  }, [params.border]);

  return (
    <>
      <section>{loading ? <Spinner /> : <CountryDetail data={data} />}</section>
    </>
  );
}

export default BorderDetail;
