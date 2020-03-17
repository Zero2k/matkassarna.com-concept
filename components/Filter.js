import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Filter = props => {
  const classes = useStyles();
  const { category, handleChange } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={1}>
        <Tabs
          value={category}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="All Products" value="All" {...a11yProps(0)} />
          <Tab label="Technology" value="Technology" {...a11yProps(1)} />
          <Tab label="Mobile" value="Mobile" {...a11yProps(2)} />
          <Tab label="Deployment" value="Deployment" {...a11yProps(3)} />
          <Tab label="Development" value="Development" {...a11yProps(4)} />
          <Tab label="Utilities" value="Utilities" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Filter;
