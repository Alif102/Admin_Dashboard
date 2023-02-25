import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <div className="chartCompo">
      <ChartOne/>
      <ChartTwo/>
      </div>
      
      <Table />
    </div>
  );
};

export default MainDash;
