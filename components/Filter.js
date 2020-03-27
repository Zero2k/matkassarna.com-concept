import React from 'react';
import PropTypes from 'prop-types';
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
  const { data, category, handleChange } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={1}>
        <Tabs
          value={category}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="All categories"
        >
          {data.map((item, index) => (
            <Tab
              label={item.name}
              value={item.value}
              key={index}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
};

Filter.propTypes = {
  data: PropTypes.array
};

export default Filter;
