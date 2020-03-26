import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const getData = await fetch(
          "https://covid19apiss.herokuapp.com/reportsIndia"
        );
        const response = await getData.json();
        const result = await response;
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchdata();
  }, []);
  const getDate = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    return dateTime;
  };
  return (
    <div>
      {data && (
        <div className="container">
          {getDate()}
          <h6>Total Cases</h6>
          <button className="btn">{data.TotalCases}</button>
          <h6>Total Active Cases</h6>
          <button className="btn">{data.ActiveCases}</button>
          <h6>Total New Cases</h6>
          <button className="btn">{data.NewCases}</button>
          <h6>Total Recovered</h6>
          <button className="btn success">{data.TotalRecovered}</button>
          <h6>Total Death</h6>
          <button className="btn danger">{data.TotalDeaths}</button>
          <h6>Total New Death</h6>
          <button className="btn danger">{data.NewDeaths}</button>
        </div>
      )}
      <div className="footer">&copy; therohitjha 2020</div>
    </div>
  );
}
