import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import Paper from '@material-ui/core/Paper';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  title: {
    textTransform: 'capitalize'
  },
  text: {
    lineHeight: '1.78',
    letterSpacing: '-0.004em'
  },
  postImage: {
    height: 0,
    paddingTop: '56%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  orange: {
    backgroundColor: theme.palette.primary.main
  },
  green: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: '#2e7366'
    }
  },
  speedDial: {
    '&.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  noShadow: {
    boxShadow: 'none'
  }
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy URL' },
  { icon: <FacebookIcon />, name: 'Facebook' },
  { icon: <TwitterIcon />, name: 'Twitter' }
];

const Post = () => {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { slug } = router.query;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignContent="center"
        spacing={2}
        className={classes.mainGrid}
      >
        <Grid item md={8} xs={12}>
          <Typography variant="h1" align="left" className={classes.title}>
            Title
          </Typography>
        </Grid>
        <Grid item md={8} xs={12}>
          <Grid container wrap="nowrap" alignContent="center" spacing={2}>
            <Grid item>
              <Avatar className={clsx(classes.orange, classes.large)}>M</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap variant="body1">
                Website.com
              </Typography>
              <Typography noWrap variant="subtitle2">
                Mar 19 · 3 min read
              </Typography>
            </Grid>
            <Grid item xs>
              <SpeedDial
                ariaLabel="Share"
                classes={{
                  fab: clsx(classes.large, classes.noShadow, classes.green)
                }}
                className={classes.speedDial}
                icon={<ShareIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                hidden={false}
                direction={'left'}
              >
                {actions.map(action => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={() => console.log('Share ', action.name)}
                  />
                ))}
              </SpeedDial>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} xs={12}>
          <Typography variant="body1" className={classes.text}>
            Missed our weekly video? Don’t worry, watch this week’s #AoGProTips
          </Typography>
          <Paper
            className={classes.postImage}
            style={{
              backgroundImage: `url(https://source.unsplash.com/random)`
            }}
            elevation={2}
          >
            {
              <img
                style={{ display: 'none' }}
                src={'https://source.unsplash.com/random'}
                alt={'post.imageText'}
              />
            }
          </Paper>
          <Typography variant="body1" className={classes.text}>
            Google’s Home Graph provides contextual data about the home and its
            devices, creating a logical map of the home. This enables users to
            target devices by room or implicitly make commands when you are
            located in the same room. Most of the data is populated by your
            smart home Action, and accurate Home Graph data is critical to
            providing the best user experience through the Assistant.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Post;
