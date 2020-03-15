import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NoResult from '../components/NoResult';
import { useStore } from '../stores';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const CompareProducts = () => {
  const classes = useStyles();

  const store = useStore();
  const { compare } = store.productStore;

  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.mainGrid}>
        <Grid item md={12}>
          <Typography variant="h1" component="h1" align="center" gutterBottom>
            Compare Products
          </Typography>
          <Typography variant="h5" component="h2" align="center">
            Based on available data from their respective websites.
          </Typography>
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={12}>
            {compare.length > 0 ? null : <NoResult />}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CompareProducts;
