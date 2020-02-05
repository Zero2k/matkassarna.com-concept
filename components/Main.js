import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import FeaturedCompany from './FeaturedCompany';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(2)
  }
}));

export default function Main(props) {
  const classes = useStyles();
  const { data, title } = props;

  return (
    <Grid item xs={12} md={9}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Grid container spacing={3} className={classes.mainGrid}>
        {data.map((item, index) => (
          <FeaturedCompany key={index} company={item} />
        ))}
      </Grid>
    </Grid>
  );
}

Main.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string
};
