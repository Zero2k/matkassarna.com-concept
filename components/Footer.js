import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%',
    color: '#fff'
  },
  links: {
    backgroundColor: '#292929',
    margin: theme.spacing(4, 0, 0, 0),
    padding: theme.spacing(6, 0)
  },
  copyright: {
    backgroundColor: '#212121',
    padding: theme.spacing(2, 0)
  },
  hr: {
    width: '60px',
    backgroundColor: '#7c4dff !important',
    display: 'inline-block'
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">COMPANY NAME</Typography>
              <hr className={classes.hr} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">PRODUCTS</Typography>
              <hr className={classes.hr} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">USEFUL LINKS</Typography>
              <hr className={classes.hr} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">CONTACT</Typography>
              <hr className={classes.hr} />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.copyright}>
        <Container maxWidth="lg">
          <Copyright />
        </Container>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};
