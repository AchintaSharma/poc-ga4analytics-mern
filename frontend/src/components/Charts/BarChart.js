import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';

import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, LinearScale, Chart as ChartJS, } from "chart.js/auto";

import { aggregateData } from '../../dataCalculations';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
)

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    borderRadius: 0,
    paddingTop: '10px'
  },
  title: {
    fontSize: 12,
  }
});


export default function BarChart(props) {

  const classes = useStyles();

  const modifiedData = aggregateData(props.data, props.x, props.y)
  console.log(modifiedData)

  const barChartData = {
    labels: modifiedData.map(item => item[props.x]),
    datasets: [
      {
        label: props.label,
        data: modifiedData.map(item => item[props.y]),
        backgroundColor: [
          "#f2838e",

        ],
        borderColor: "#a62e3a",
        borderWidth: 1,
      }
    ]
  }
  const options = {
    responsive: true,
  }

  return (
    <Card className={classes.root}>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.name}
      </Typography>
      <Bar data={barChartData} options={options} />
    </Card>
  );
}
