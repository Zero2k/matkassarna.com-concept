import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DetailedCard from '../components/DetailedCard';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

export default function Products() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <Grid container spacing={3} className={classes.mainGrid}>
          <Grid item xs={12} md={4}>
            <DetailedCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <DetailedCard />
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  );
}
