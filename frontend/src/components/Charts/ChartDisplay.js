import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BarChart from './BarChart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    padding: '10px',
    marginTop: '20px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 12,
  }
}));


export default function ChartDisplay(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item md={6} sm={12} xs={12}>
          <BarChart
            data={props.data}
            name="Date vs Active Users"
            x='date'
            y='activeUsers'
            label='Active Users' />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <BarChart
            data={props.data}
            name="Date vs Sessions"
            x='date'
            y='sessions'
            label='Sessions' />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <BarChart data={props.data}
            name="City vs Active Users"
            x='city'
            y='activeUsers'
            label='Active Users' />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <BarChart
            data={props.data}
            name="City vs Sessions"
            x='city'
            y='sessions'
            label='Sessions' />
        </Grid>
      </Grid>
    </div >
  );
}
