import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from './Link';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const FeaturedCompany = props => {
  const classes = useStyles();
  const { company, fullWidth } = props;
  const setWidth = fullWidth ? 4 : 6;

  return (
    <Grid item xs={12} sm={6} md={setWidth}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardActionArea
            component={Link}
            href="/[company]"
            naked
            as={company.url}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {company.name}
              </Typography>
              <Typography variant="subtitle1">{company.excerpt}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              className={classes.button}
              component={Link}
              href="/[company]"
              naked
              as={company.url}
              disableElevation
            >
              Information
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className={classes.button}
              onClick={() => console.log(company)}
              disableElevation
            >
              Order Now
            </Button>
          </CardActions>
        </div>
      </Card>
    </Grid>
  );
};

FeaturedCompany.propTypes = {
  company: PropTypes.object
};

FeaturedCompany.defaultProps = {
  company: {
    name: 'Company',
    url: '/',
    excerpt: 'text'
  },
  fullWidth: false
};

export default FeaturedCompany;
