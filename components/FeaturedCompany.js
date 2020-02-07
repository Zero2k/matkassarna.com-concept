import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import SwapVertIcon from '@material-ui/icons/SwapVert';
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

export default function FeaturedCompany(props) {
  const classes = useStyles();
  const { company } = props;

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardActionArea component="a" href={company.url}>
            <CardContent>
              <Typography component="h2" variant="h5" gutterBottom>
                {company.name}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                Text: 4 | Text: 5
              </Typography>
              <Typography variant="subtitle1">{company.excerpt}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SwapVertIcon />}
              onClick={() => console.log(company)}
            >
              Compare
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className={classes.button}
              component={Link}
              naked
              href={company.url}
            >
              Information
            </Button>
          </CardActions>
        </div>
      </Card>
    </Grid>
  );
}

FeaturedCompany.propTypes = {
  company: PropTypes.object
};
