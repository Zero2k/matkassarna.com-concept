import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { makeStyles } from '@material-ui/core/styles';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { useStore } from '../stores';

import { productReducer } from '../hooks/productReducer';
import { useReducer } from '../hooks/useReducer';

const useStyles = makeStyles(theme => ({
  root: {},
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
  },
  media: {
    height: 0,
    paddingTop: '60%',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(67, 165, 147, 0.6)',
    top: '12%',
    width: '100%',
    textAlign: 'center',
    padding: '10px 5px 10px 5px',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none'
  },
  title: {
    color: '#fff',
    fontSize: theme.typography.pxToRem(24),
    fontWeight: 500,
    letterSpacing: '1.5px'
  },
  subTitle: {
    color: '#fff',
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 400,
    letterSpacing: '1px'
  }
}));

const DetailedCard = props => {
  const classes = useStyles();
  const store = useStore();
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
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image="/no-image.jpg">
            <div className={classes.overlay}>
              <Typography variant="h3" className={classes.title} gutterBottom>
                {product[0].name}
              </Typography>
              <Typography variant="h4" className={classes.subTitle}>
                Subtitle
              </Typography>
            </div>
          </CardMedia>
        </CardActionArea>
        <CardContent>
          <Grid container spacing={2} direction="row" alignItems="center">
            <Grid item xs={6} md={6} className={classes.helper}>
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
            <Grid item xs={6} md={6} className={classes.helper}>
              <Typography variant="caption">
                Number
                <br />
                <span className={classes.info}>
                  {product[0].selectedOption.value2}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} className={classes.helper}>
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
            <Grid item xs={6} md={6} className={classes.helper}>
              <Typography variant="caption">
                Price
                <br />
                <span className={classes.info}>
                  ${product[0].selectedAlternative.price}
                </span>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions style={{ justifyContent: 'space-between' }}>
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
        </CardActions>
      </Card>
    );
  });
};

export default DetailedCard;
