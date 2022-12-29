import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),

    },
  },
}));

const ButtonPrimary = (props) => {
  const classes = useStyles();

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center' }} className={classes.root}
    >
      <Button
        onClick={props.onClick}
        size='large'
        variant="contained"
        color="primary"
      >
        {props.children}
      </Button>
    </div>
  );
}

export default ButtonPrimary