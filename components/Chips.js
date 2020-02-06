import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

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

export default function Chips(props) {
  const classes = useStyles();
  const { categories } = props;

  return (
    <div className={classes.root}>
      <h4>Categories:</h4>
      {categories.map((category, index) => (
        <Chip
          key={index}
          label={category.name}
          component="a"
          href="#chip"
          clickable
        />
      ))}
    </div>
  );
}

Chips.propTypes = {
  categories: PropTypes.array
};
