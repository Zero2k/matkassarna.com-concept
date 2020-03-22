import React from 'react';
import { useObserver } from 'mobx-react-lite';
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
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { useStore } from '../stores';

import { productReducer } from '../hooks/productReducer';
import { useReducer } from '../hooks/useReducer';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '&:not(:last-child)': {
      paddingBottom: theme.spacing(2)
    }
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

const DetailedExpansionPanel = props => {
  const classes = useStyles();
  const store = useStore();
  const [expanded, setExpanded] = React.useState(true);
  const [product, dispatch] = useReducer(productReducer, []);
  const { compareProduct, isCompared, stopComparing } = store.productStore;

  React.useEffect(() => {
    dispatch({ type: 'setProduct', product: props.product.toJSON() });
  }, []);

  const setNumber = (event, value) => {
    if (value !== null) {
      dispatch({ type: 'setNumber', value });
    }
  };

  const setAlternative = event => {
    const { value } = event.target;

    dispatch({ type: 'setAlternative', value });
  };

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return useObserver(() => {
    if (!product[0]) {
      return <div>Loading...</div>;
    }

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
                {product[0].name}
              </Typography>
            </div>
            {!expanded && (
              <>
                <div className={classes.column}>
                  <Typography className={classes.secondaryHeading}>
                    Select: {product[0].selectedOption.value1}
                  </Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.secondaryHeading}>
                    Number: {product[0].selectedOption.value2}
                  </Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.secondaryHeading}>
                    Price: ${product[0].selectedAlternative.price}
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
                    value={product[0].selectedOption.value1}
                    exclusive
                    onChange={setNumber}
                  >
                    {product[0].options.map(item => (
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
                    {product[0].selectedOption.value2}
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={6} md className={classes.helper}>
                <Typography variant="caption">
                  <FormControl className={classes.formControl}>
                    <Typography variant="caption">Alternative</Typography>
                    <NativeSelect
                      name="alternative"
                      value={product[0].selectedAlternative.id}
                      onChange={setAlternative}
                    >
                      {product[0].selectedOption.alternatives.map(item =>
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
                    ${product[0].selectedAlternative.price}
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            {!isCompared(product[0]) ? (
              <Button
                size="medium"
                color="primary"
                startIcon={<SwapVertIcon />}
                onClick={() => {
                  compareProduct({
                    id: product[0].id,
                    name: product[0].name,
                    options: product[0].options,
                    selectedOption: product[0].selectedOption,
                    selectedAlternative: product[0].selectedAlternative
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
                onClick={() => stopComparing(product[0])}
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
              Read More
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    );
  });
};

DetailedExpansionPanel.defaultProps = {
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

export default DetailedExpansionPanel;
