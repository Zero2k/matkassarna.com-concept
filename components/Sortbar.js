import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Sort from '@material-ui/icons/Sort';
import ReorderIcon from '@material-ui/icons/Reorder';
import GridOnSharpIcon from '@material-ui/icons/GridOnSharp';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    marginTop: theme.spacing(3)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'block',
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 500
  },
  sectionDesktop: {
    display: 'flex'
  },
  btnGutters: {
    paddingLeft: '5px',
    paddingRight: '20px'
  }
}));

const Sortbar = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { setGrid } = props;

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar variant="dense">
          <Typography className={classes.title} variant="h2" noWrap>
            Products
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="sort"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              style={{ backgroundColor: 'transparent' }}
            >
              <Sort />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                dense
                classes={{ gutters: classes.btnGutters }}
                onClick={() => {
                  setGrid(false), handleClose();
                }}
              >
                <IconButton
                  aria-label="show as list"
                  color="inherit"
                  size="small"
                  style={{ backgroundColor: 'transparent' }}
                >
                  <ReorderIcon />
                </IconButton>
                <span style={{ paddingLeft: '5px' }}>Show as list</span>
              </MenuItem>
              <MenuItem
                dense
                classes={{ gutters: classes.btnGutters }}
                onClick={() => {
                  setGrid(true), handleClose();
                }}
              >
                <IconButton
                  aria-label="show as list"
                  color="inherit"
                  size="small"
                  style={{ backgroundColor: 'transparent' }}
                >
                  <GridOnSharpIcon />
                </IconButton>
                <span style={{ paddingLeft: '5px' }}>Show as grid</span>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Sortbar;
