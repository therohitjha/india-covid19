import React from "react";
import loading from "./loading.gif";

export default function UI({ data, getDate }) {
  return (
    <>
      <div className="container">
        {data ? (
          <div className="textCenter flexCenterColumn">
            <h2>Indian COVID-19 LIVE FEED</h2>
            <h3>Current Date & Time</h3> {getDate()}
            <div className="wrapper">
              <h6>Total Cases</h6>
              <button className="btn">{data.TotalCases}</button>
            </div>
            <div className="wrapper">
              <h6>Total Active Cases</h6>
              <button className="btn">{data.ActiveCases}</button>
            </div>
            <div className="wrapper">
              <h6>Total New Cases</h6>
              <button className="btn">{data.NewCases}</button>
            </div>
            <div className="wrapper">
              <h6>Total Recovered</h6>
              <button className="btn success">{data.TotalRecovered}</button>
            </div>
            <div className="wrapper">
              <h6>Total Death</h6>
              <button className="btn danger">{data.TotalDeaths}</button>
            </div>
            <div className="wrapper">
              <h6>Total New Death</h6>
              <button className="btn danger">{data.NewDeaths}</button>
            </div>
          </div>
        ) :
          <img src={loading} alt="loading" style={{width:'320px'}}/>
        }
      </div>
      <div className="footer">&copy; therohitjha 2020</div>
    </>
  );
}
