import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Faq from './Faq';
import Info from './Info';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
};

const a11yProps = index => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  };
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    paddingTop: theme.spacing(2)
  }
}));

const InfoTabs = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { questions, text, delivery } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={1}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="INFO" {...a11yProps(0)} />
          <Tab label="FAQ" {...a11yProps(1)} />
          <Tab label="DELIVERY" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Info title="Information" text={text} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Faq questions={questions} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Info title="Delivery" text={delivery} />
      </TabPanel>
    </div>
  );
};

InfoTabs.propTypes = {
  questions: PropTypes.array,
  text: PropTypes.string
};

export default InfoTabs;
