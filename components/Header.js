import React from 'react';
import { useObserver } from 'mobx-react-lite';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Typography from '@material-ui/core/Typography';
import Link from './Link';
import Badge from '@material-ui/core/Badge';
import { useStore } from '../stores';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    borderTop: `3px solid ${theme.palette.primary.main}`,
    backgroundColor: '#fff'
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  toolbarTitle: {
    paddingRight: '20px'
  },
  toolbarNavigation: {
    flex: 1
  },
  toolbarCompare: {},
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    marginBottom: '5px'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))(Badge);

const Header = props => {
  const classes = useStyles();
  const store = useStore();
  const { sections, title } = props;
  const { compare } = store.productStore;

  return useObserver(() => (
    <div className={classes.root}>
      <Container>
        <Toolbar disableGutters className={classes.toolbar}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            {title}
          </Typography>
          <div className={classes.toolbarNavigation}>
            <Button
              component={Link}
              href="/"
              as="/"
              startIcon={<HomeIcon />}
              className={classes.menuButton}
              naked
            >
              Home
            </Button>
            <Button
              component={Link}
              href="/products"
              as="/products"
              startIcon={<ShoppingBasketIcon />}
              naked
            >
              Products
            </Button>
          </div>
          <div className={classes.toolbarCompare}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              href="/compare"
              as="/compare"
              naked
            >
              <StyledBadge badgeContent={compare.length} color="primary">
                <SwapVertIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          disableGutters
          className={classes.toolbarSecondary}
        >
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href="/[company]"
              as={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          ))}
          <Link
            color="inherit"
            noWrap
            variant="body2"
            href="/companies"
            as="/companies"
            className={classes.toolbarLink}
          >
            View All
          </Link>
        </Toolbar>
      </Container>
    </div>
  ));
};

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};

export default Header;
