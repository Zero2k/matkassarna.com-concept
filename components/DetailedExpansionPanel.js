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
    fontSize: theme.typography.pxToRem(17)
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
    alignItems: 'center',
    padding: '8px 24px 8px'
  },
  column: {
    flexBasis: '33.33%'
  },
  helper: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    padding: '10px !important',
    height: '76px'
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
  const [value, setValue] = React.useState(props.product.options[0].value1);
  const [productState, setProductState] = React.useState({
    ...props.product,
    options: props.product.options[0],
    selectedAltenative: props.product.options[0].alternatives[0]
  });

  const setNumber = (event, value) => {
    if (value !== null) {
      setValue(value);

      const selectedOption = props.product.options.filter(
        item => item.value1 == value
      )[0];

      setProductState({
        ...productState,
        options: selectedOption,
        selectedAltenative: selectedOption.alternatives[0]
      });
    }
  };

  const setAlternative = event => {
    const { value } = event.target;

    const selectedAlternative = productState.options.alternatives.filter(
      item => item.id == value
    )[0];

    setProductState({
      ...productState,
      selectedAltenative: selectedAlternative
    });
  };

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded} onChange={handleChange(true)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography variant="h3" className={classes.heading}>
              {productState.name}
            </Typography>
          </div>
          {!expanded && (
            <>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Select: {value}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Number: {productState.options.value2}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Price: ${productState.selectedAltenative.price}
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
              <img width="100%" src="/no-image.jpg"></img>
            </Grid>
            <Grid item xs={6} md className={classes.helper}>
              <Typography variant="caption">
                Select
                <br />
                <ToggleButtonGroup
                  size="small"
                  value={value}
                  exclusive
                  onChange={setNumber}
                >
                  {props.product.options.map(item => (
                    <ToggleButton
                      key={item.id}
                      value={item.value1}
                      className={classes.toggleButton}
                    >
                      {item.value1}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Typography>
            </Grid>
            <Grid item xs={6} md className={classes.helper}>
              <Typography variant="caption">
                Number
                <br />
                <span className={classes.info}>
                  {productState.options.value2}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={6} md className={classes.helper}>
              <Typography variant="caption">
                <FormControl className={classes.formControl}>
                  <Typography variant="caption">Alternative</Typography>
                  <NativeSelect
                    name="alternative"
                    value={productState.selectedAltenative.id}
                    onChange={setAlternative}
                  >
                    {productState.options.alternatives.map(item =>
                      item.name === '' ? (
                        ''
                      ) : (
                        <option value={item.id} key={item.id}>
                          {item.name}
                        </option>
                      )
                    )}
                  </NativeSelect>
                </FormControl>
              </Typography>
            </Grid>
            <Grid item xs={6} md className={classes.helper}>
              <Typography variant="caption">
                Price
                <br />
                <span className={classes.info}>
                  ${productState.selectedAltenative.price}
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
