import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from './Link';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px'
  },
  notFound: {
    textAlign: 'center',
    paddingLeft: '15px',
    paddingRight: '15px'
  }
}));

const NoResult = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.notFound}>
        <Typography variant="h6" component="h2" gutterBottom>
          WE ARE SORRY, NO PRODUCT HAS BEEN SELECTED.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          href="/products"
          as="/products"
          naked
        >
          View Products
        </Button>
      </div>
    </div>
  );
};

export default NoResult;
