import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const Sitemap = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={5} className={classes.mainGrid}>
        <Grid item xs={12} md={12}>
          <h1>Sitemap</h1>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Sitemap;
