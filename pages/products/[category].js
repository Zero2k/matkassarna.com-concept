import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DetailedCard from '../../components/DetailedCard';

import { useStore } from '../../stores';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  title: {
    textTransform: 'capitalize'
  }
}));

const Category = () => {
  const classes = useStyles();
  const router = useRouter();
  const { category } = router.query;

  const store = useStore();
  const { data } = store.productStore;

  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.mainGrid}>
        <Grid item md={12}>
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            className={classes.title}
          >
            {category}
          </Typography>
          <Typography variant="h5" component="h2" align="center">
            Based on available data from their respective websites.
          </Typography>
        </Grid>
        {data.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DetailedCard key={index} product={product} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Category;
