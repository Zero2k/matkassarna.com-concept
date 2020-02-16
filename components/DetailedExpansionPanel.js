import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingBottom: theme.spacing(2)
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20
  },
  details: {
    alignItems: 'center'
  },
  helper: {
    [theme.breakpoints.up('md')]: {
      borderLeft: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2)
    }
  },
  link: {
    color: theme.palette.primary.main,
    fontSize: '17px'
  }
}));

const DetailedExpansionPanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Location</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={3} className={classes.helper}>
              <Typography variant="caption">
                Select your destination of choice
                <br />
                <a
                  href="#secondary-heading-and-columns"
                  className={classes.link}
                >
                  Learn more
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} className={classes.helper}>
              <Typography variant="caption">
                Select your destination of choice
                <br />
                <a
                  href="#secondary-heading-and-columns"
                  className={classes.link}
                >
                  Learn more
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} className={classes.helper}>
              <Typography variant="caption">
                Select your destination of choice
                <br />
                <a
                  href="#secondary-heading-and-columns"
                  className={classes.link}
                >
                  Learn more
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} className={classes.helper}>
              <Typography variant="caption">
                Price
                <br />
                <span
                  href="#secondary-heading-and-columns"
                  className={classes.link}
                >
                  $599
                </span>
              </Typography>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="medium" color="primary" startIcon={<SwapVertIcon />}>
            Compare
          </Button>
          <Button
            size="medium"
            color="secondary"
            variant="contained"
            disableElevation
          >
            View More
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
};

export default DetailedExpansionPanel;
