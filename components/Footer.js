import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
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
    backgroundColor: '#3c3c3c',
    color: '#fff'
  },
  sectionLinks: {
    display: 'flex',
    margin: theme.spacing(4, 0, 4, 0),
    padding: theme.spacing(6, 0)
  },
  copyright: {
    padding: theme.spacing(4, 0)
  },
  column: {
    flexBasis: '33.33%'
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
      <Container maxWidth="lg">
        <section className={classes.sectionLinks}>
          <div className={classes.column}>
            <Typography variant="subtitle1">COMPANY NAME</Typography>
            <hr className={classes.hr} />
          </div>
          <div className={classes.column}>
            <Typography variant="subtitle1">PRODUCTS</Typography>
            <hr className={classes.hr} />
          </div>
          <div className={classes.column}>
            <Typography variant="subtitle1">USEFUL LINKS</Typography>
            <hr className={classes.hr} />
          </div>
        </section>
      </Container>
      <Container maxWidth="lg">
        <section className={classes.copyright}>
          <Copyright />
        </section>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};
