import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DetailedExpansionPanel from '../../components/DetailedExpansionPanel';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

export default function Companies() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={12}>
            <h1>Companies</h1>
            <DetailedExpansionPanel />
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  );
}
