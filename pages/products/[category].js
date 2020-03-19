import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DetailedCard from '../../components/DetailedCard';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const Category = () => {
  const classes = useStyles();
  const router = useRouter();
  const { category } = router.query;
  console.log(category);

  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.mainGrid}>
        <Grid item md={12}>
          <Typography variant="h1" component="h1" align="center" gutterBottom>
            Category
          </Typography>
          <Typography variant="h5" component="h2" align="center">
            Based on available data from their respective websites.
          </Typography>
        </Grid>
        {[1, 2, 3].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DetailedCard />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Category;
