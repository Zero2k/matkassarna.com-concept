import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Link from './Link';

import FeaturedCompany from './FeaturedCompany';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const Main = props => {
  const classes = useStyles();
  const { data, title } = props;

  return (
    <React.Fragment>
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
        <Grid item>
          <Button
            variant="outlined"
            component={Link}
            href="/companies"
            as="/companies"
            naked
            fullWidth
          >
            View All Companies
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Main.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string
};

export default Main;
