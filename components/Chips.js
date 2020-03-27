import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Link from './Link';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    }
  }
}));

const Chips = props => {
  const classes = useStyles();
  const { title, categories } = props;

  return (
    <div className={classes.root}>
      <h4>{title}:</h4>
      {categories.map((category, index) => (
        <Chip
          key={index}
          label={category.name}
          component={Link}
          naked
          href="/products/[category]"
          as={`products/${category.url}`}
          clickable
        />
      ))}
    </div>
  );
};

Chips.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array
};

export default Chips;
