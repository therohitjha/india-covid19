import React, { useEffect, useState, lazy, Suspense } from "react";
import "./styles.css";
import loading from "./loading.gif";
const UI = lazy(() => import("./UI"));
export default function Corona() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const getData = await fetch(
          "https://api.rootnet.in/covid19-in/stats/latest"
        );

        const response = await getData.json();
        const result = await response;
        setData(
          {
            total:result.data.summary.total,
            confirmed:result.data.summary.confirmedCasesIndian,
            recovered:result.data.summary.discharged,
            deaths:result.data.summary.deaths
          }
        );
      } catch (err) {
        console.log(err);
      }
    };

    fetchdata();
  }, []);
  const getDate = () => {
    var today = new Date();
    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    return dateTime;
  };
  return (
    <Suspense
      fallback={
        <div className="flexCenter">
          <img src={loading} alt="loading" style={{ width: "320px" }} />
        </div>
      }
    >
      <UI data={data} getDate={getDate} />
    </Suspense>
  );
}
