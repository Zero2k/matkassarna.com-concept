import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  text: {
    [theme.breakpoints.up('md')]: {
      columnCount: 2,
      columnGap: '45px',
      breakInside: 'avoid-column',
      breakAfter: 'auto'
    }
  },
  markdown: {
    '& > p': {
      marginBlockStart: '0 !important'
    },
    '& > p > img': {
      width: '100%'
    }
  }
}));

const Info = props => {
  const classes = useStyles();
  const { title, text } = props;

  return (
    <React.Fragment>
      <h3>{title}:</h3>
      <div className={classes.text}>
        <Markdown className={classes.markdown} source={text} />
      </div>
    </React.Fragment>
  );
};

Info.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default Info;
