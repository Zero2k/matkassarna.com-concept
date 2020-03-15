import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import CompareChart from '../../components/ComparisonTable';
import formatString from '../../utils/formatString';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    padding: theme.spacing(3, 0, 3, 0)
  }
}));

var data = [
  {
    id: '1',
    name: 'Name 1',
    image: 'https://okrsoftware.com/img/logos/weekdone.png',
    feature1: 'feature 1 of product 1',
    feature2: 'feature 2 of product 1',
    feature3: 'feature 3 of product 1'
  },
  {
    id: '2',
    name: 'Name 2',
    image: 'https://okrsoftware.com/img/logos/perdoo.png',
    feature2: 'feature 2 of product 2',
    feature3: 'feature 3 of product 2'
  },
  {
    id: '3',
    name: 'Name 3',
    image: 'https://okrsoftware.com/img/logos/weekdone.png',
    feature2: 'feature 2 of product 2',
    feature3: 'feature 3 of product 2'
  }
];

const CompareCompany = () => {
  const router = useRouter();
  const classes = useStyles();
  const {
    query: { company, compare }
  } = router;

  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.mainGrid}>
        <Grid item md={12}>
          <Typography variant="h1" component="h1" align="center" gutterBottom>
            Compare {formatString(company, compare)}
          </Typography>
          <Typography variant="h5" component="h2" align="center">
            Based on available data from their respective websites.
          </Typography>
        </Grid>
      </Grid>
      <Paper elevation={0}>
        <CompareChart
          data={data}
          features={[
            { key: 'feature1', text: 'Pricing' },
            { key: 'feature2', text: 'Website' },
            { key: 'feature3', text: 'Support' }
          ]}
        />
      </Paper>
    </React.Fragment>
  );
};

export default CompareCompany;
