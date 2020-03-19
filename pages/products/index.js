import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Filter from '../../components/Filter';
import DetailedCard from '../../components/DetailedCard';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const Products = () => {
  const classes = useStyles();
  const router = useRouter();
  const [selectedCategory, setCategory] = React.useState('all');
  const { category = 'all' } = router.query;

  React.useEffect(() => {
    if (router.query.category) {
      setCategory(router.query.category);
    } else {
      setCategory(category);
    }
  }, [router.query.category]);

  const handleChange = (event, newValue) => {
    setCategory(newValue);
    router.push(
      `/products?category=${newValue}`,
      `/products?category=${newValue}`,
      {
        shallow: true
      }
    );
  };

  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.mainGrid}>
        <Grid item xs={12}>
          <Filter category={selectedCategory} handleChange={handleChange} />
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

export default Products;
