import React, { useState } from "react";
import Navbar from "./components/UI/Navbar";
import DataDisplay from "./components/Data/DataDisplay";
import ButtonPrimary from "./components/UI/ButtonPrimary";
import { findMaxRepeatedValue, findTotal, dateFormatter } from "./dataCalculations";
import ChartDisplay from "./components/Charts/ChartDisplay";

import axios from "axios";

const App = () => {
  const [totalActiveUsers, setTotalActiveUsers] = useState(0);
  const [totalSessions, setTotalSessions] = useState(0);
  const [highestActiveCity, setHighestActiveCity] = useState(0);
  const [highestActiveDay, setHighestActiveDay] = useState(0);
  const [chartData, setChartData] = useState([]);


  const fetchButtonHandler = () => {
    axios.get('http://192.168.0.104:8083/analytics/api/v1/data')
      .then(res => {
        console.log(res.data);
        setTotalActiveUsers(findTotal(res.data, "activeUsers"));
        setTotalSessions(findTotal(res.data, "sessions"));
        setHighestActiveCity(findMaxRepeatedValue(res.data, "city"));
        setHighestActiveDay(dateFormatter(findMaxRepeatedValue(res.data, "date")));
        setChartData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <Navbar />
      <DataDisplay
        activeUsers={totalActiveUsers}
        sessions={totalSessions}
        city={highestActiveCity}
        date={highestActiveDay} />
      <ButtonPrimary onClick={fetchButtonHandler} >Fetch latest data </ButtonPrimary>
      <ChartDisplay data={chartData} />
    </>
  )
}

export default App;
