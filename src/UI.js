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
              <button className="btn">{data.total}</button>
            </div>
            <div className="wrapper">
              <h6>Total Active Cases</h6>
              <button className="btn">{data.confirmed}</button>
            </div>
            <div className="wrapper">
              <h6>Total Recovered</h6>
              <button className="btn success">{data.recovered}</button>
            </div>
            <div className="wrapper">
              <h6>Total Death</h6>
              <button className="btn danger">{data.deaths}</button>
            </div>
            <h4>Source : <a href=''>Ministry Of Health & Family Welfare</a> </h4>
          </div>
        ) :
          <img src={loading} alt="loading" style={{width:'320px'}}/>
        }
      </div>
      <div className="footer">&copy; therohitjha 2020</div>
    </>
  );
}
