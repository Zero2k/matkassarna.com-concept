import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { useStore } from '../stores';

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
    fontSize: theme.typography.pxToRem(18)
  },
  toggleButton: {
    height: '35px',
    width: '40px'
  },
  formControl: {
    minWidth: 120
  }
}));

const CompareExpansionPanel = props => {
  const classes = useStyles();
  const store = useStore();
  const [expanded, setExpanded] = React.useState(true);
  const [productState, setProductState] = React.useState({
    ...props.product
  });
  const { compareProduct, isCompared, stopComparing } = store.productStore;

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return useObserver(() => (
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
                  Select: {productState.options.value1}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Number: {productState.options.value2}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Price: ${productState.selectedAlternative.price}
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
                <span className={classes.info}>
                  {productState.options.value1}
                </span>
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
                Alternative
                <br />
                <span className={classes.info}>
                  {productState.selectedAlternative.name}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={6} md className={classes.helper}>
              <Typography variant="caption">
                Price
                <br />
                <span className={classes.info}>
                  ${productState.selectedAlternative.price}
                </span>
              </Typography>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          {!isCompared(productState) ? (
            <Button
              size="medium"
              color="primary"
              startIcon={<SwapVertIcon />}
              onClick={() => {
                compareProduct({
                  id: productState.id,
                  name: productState.name,
                  options: productState.options.toJSON(),
                  selectedAlternative: productState.selectedAlternative.toJSON()
                });
              }}
            >
              Compare
            </Button>
          ) : (
            <Button
              size="medium"
              color="primary"
              startIcon={<ClearIcon />}
              onClick={() => stopComparing(productState)}
            >
              Remove
            </Button>
          )}
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
  ));
};

CompareExpansionPanel.defaultProps = {
  product: {
    id: 1,
    name: 'Missing value',
    options: [
      {
        id: 1,
        value1: 0,
        value2: 'Missing value',
        alternatives: [{ id: 1, name: 'Missing value', price: 0 }]
      }
    ]
  }
};

export default CompareExpansionPanel;
