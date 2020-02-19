import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import Link from './Link';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 0, 2, 0),
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}));

const Compare = props => {
  const { url } = props;
  const classes = useStyles();

  console.log(url);

  return (
    <Link href={url}>
      <div className={classes.root}>
        <img src="https://okrsoftware.com/img/logos/weekdone.png" width="40%" />
        <CompareArrowsIcon />
        <img src="https://okrsoftware.com/img/logos/perdoo.png" width="40%" />
      </div>
    </Link>
  );
};

Compare.propTypes = {
  url: PropTypes.string
};

export default Compare;
