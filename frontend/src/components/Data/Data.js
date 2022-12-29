import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    borderRadius: 0,
    height: 150,
    paddingTop: '10px'
  },
  title: {
    fontSize: 12,
    margin: 5,
    height: 40
  }
});

export default function Data(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.param}
      </Typography>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
