import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Copyright from './Copyright';

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%',
    color: '#fff'
  },
  social: {
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(4, 0, 0, 0),
    padding: theme.spacing(2, 0)
  },
  links: {
    backgroundColor: '#292929',
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
  },
  list: {
    padding: theme.spacing(0)
  },
  listItem: {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    color: '#7c7c7d',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}));

const ListItemLink = props => {
  return <ListItem button component="a" disableRipple {...props} />;
};

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <div className={classes.social}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} sm={6} md={6}>
              <Typography variant="subtitle1">SOCIAL MEDIA</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography variant="subtitle1">SOCIAL MEDIA</Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.links}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">ABOUT</Typography>
              <hr className={classes.hr} />
              <List className={classes.list}>
                <ListItemLink className={classes.listItem} href="/">
                  <ListItemText primary="Single-line item" />
                </ListItemLink>
                <ListItemLink className={classes.listItem} href="/">
                  <ListItemText primary="Single-line item" />
                </ListItemLink>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">PRODUCTS</Typography>
              <hr className={classes.hr} />
              <List className={classes.list}>
                <ListItemLink className={classes.listItem} href="/">
                  <ListItemText primary="Single-line item" />
                </ListItemLink>
                <ListItemLink className={classes.listItem} href="/">
                  <ListItemText primary="Single-line item" />
                </ListItemLink>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">CATEGORIES</Typography>
              <hr className={classes.hr} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">USEFUL LINKS</Typography>
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
