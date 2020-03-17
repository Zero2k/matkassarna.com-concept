import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FeaturedCompany from '../../components/FeaturedCompany';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

export default function Companies() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.mainGrid}>
        {[0, 1, 2, 3].map((item, index) => (
          <FeaturedCompany key={index} fullWidth />
        ))}
      </Grid>
    </React.Fragment>
  );
}
