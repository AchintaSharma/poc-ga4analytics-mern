import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Data from './Data';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginTop: '100px',
    padding: '10px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function DataDisplay(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item md={3} xs={6} >
          <Data
            value={props.activeUsers}
            param="Total Active Users"
          />
        </Grid>
        <Grid item md={3} xs={6}>
          <Data
            value={props.sessions}
            param="Total Sessions"
          />
        </Grid>
        <Grid item md={3} xs={6}>
          <Data
            value={props.city}
            param="Highest active city"
          />
        </Grid>
        <Grid item md={3} xs={6}>
          <Data
            value={props.date}
            param="Highest activity on"
          />
        </Grid>
      </Grid>
    </div>
  );
}
