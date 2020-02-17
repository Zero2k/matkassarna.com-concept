import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
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
  column: {
    flexBasis: '33.33%'
  },
  helper: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    padding: '10px !important'
  },
  info: {
    color: theme.palette.primary.main,
    fontSize: '18px'
  },
  toggleButton: {
    height: '35px',
    width: '40px'
  },
  formControl: {
    minWidth: 120
  }
}));

const DetailedExpansionPanel = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);
  const { index } = props;

  const [people, setPeople] = React.useState('2');

  const setNumber = (event, newPeople) => {
    setPeople(newPeople);
  };

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded} onChange={handleChange(index)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Location</Typography>
          </div>
          {!expanded && (
            <>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Select: 4
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Number: 3
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Price: $599
                </Typography>
              </div>
            </>
          )}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md>
              <img width="160px" src="/no-image.jpg"></img>
            </Grid>
            <Grid item xs={6} md className={classes.helper}>
              <Typography variant="caption">
                Select
                <br />
                <ToggleButtonGroup
                  size="small"
                  value={people}
                  exclusive
                  onChange={setNumber}
                >
                  <ToggleButton
                    key={1}
                    value="2"
                    className={classes.toggleButton}
                  >
                    2
                  </ToggleButton>
                  <ToggleButton
                    key={2}
                    value="4"
                    className={classes.toggleButton}
                  >
                    4
                  </ToggleButton>
                  <ToggleButton
                    key={3}
                    value="6"
                    className={classes.toggleButton}
                  >
                    6
                  </ToggleButton>
                </ToggleButtonGroup>
              </Typography>
            </Grid>
            <Grid item xs={6} md className={classes.helper}>
              <Typography variant="caption">
                Number
                <br />
                <span className={classes.info}>3</span>
              </Typography>
            </Grid>
            <Grid item xs={6} md className={classes.helper}>
              <Typography variant="caption">
                <FormControl className={classes.formControl}>
                  <Typography variant="caption">Alternative</Typography>
                  <NativeSelect defaultValue={0}>
                    <option value={0}>No</option>
                    <option value={10}>Ten</option>
                  </NativeSelect>
                </FormControl>
              </Typography>
            </Grid>
            <Grid item xs={6} md className={classes.helper}>
              <Typography variant="caption">
                Price
                <br />
                <span className={classes.info}>$599</span>
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
