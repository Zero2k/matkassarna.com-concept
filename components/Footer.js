import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from './Link';

import Copyright from './Copyright';

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%',
    color: '#fff'
  },
  social: {
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(4, 0, 0, 0),
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
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
      backgroundColor: 'transparent',
      color: '#fff'
    }
  }
}));

const ListItemLink = props => {
  return <ListItem component={Link} {...props} />;
};

const social = [
  { name: 'GitHub', icon: GitHubIcon, url: '#' },
  { name: 'Twitter', icon: TwitterIcon, url: '#' },
  { name: 'Facebook', icon: FacebookIcon, url: '#' }
];

const about = [
  { name: 'About Us', url: '/about' },
  { name: 'Blog', url: '#' },
  { name: 'Contact Us', url: '#' },
  { name: 'Sitemap', url: '/sitemap' },
  { name: 'FAQs', url: '#' }
];

const categories = [
  { name: 'Technology', url: '#' },
  { name: 'Mobile', url: '#' },
  { name: 'Deployment', url: '#' },
  { name: 'Development', url: '#' },
  { name: 'Utilities', url: '#' }
];

const legal = [
  { name: 'Cookies', url: '#' },
  { name: 'Privacy Policy', url: '#' },
  { name: 'Terms of Use', url: '#' }
];

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <div className={classes.social}>
        <Container maxWidth="lg">
          <Grid container direction="row" spacing={1}>
            <Grid item xs={12} sm={6} md={7}>
              <Typography variant="subtitle1">
                Get connected with us on social networks!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={5} className={classes.socialIcons}>
              {social.map((network, index) => (
                <Link href={network.url} key={index} style={{ color: '#FFF' }}>
                  <network.icon />
                </Link>
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.links}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">COMPANY</Typography>
              <hr className={classes.hr} />
              <List dense className={classes.list}>
                {about.map((link, index) => (
                  <ListItemLink
                    className={classes.listItem}
                    key={index}
                    href={link.url}
                  >
                    <ListItemText primary={link.name} />
                  </ListItemLink>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">PRODUCTS</Typography>
              <hr className={classes.hr} />
              <List dense className={classes.list}>
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
              <List dense className={classes.list}>
                {categories.map((link, index) => (
                  <ListItemLink
                    className={classes.listItem}
                    key={index}
                    href={link.url}
                  >
                    <ListItemText primary={link.name} />
                  </ListItemLink>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1">INFORMATION</Typography>
              <hr className={classes.hr} />
              <List dense className={classes.list}>
                {legal.map((link, index) => (
                  <ListItemLink
                    className={classes.listItem}
                    key={index}
                    href={link.url}
                  >
                    <ListItemText primary={link.name} />
                  </ListItemLink>
                ))}
              </List>
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
