import React, { useEffect, useState } from "react";
import CountryDetail from "../components/CourtryDetail";

import { useParams } from "react-router-dom";

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
    <>
      <section>{loading ? <Spinner /> : <CountryDetail data={data} />}</section>
    </>
  );
}

export default Detail;
