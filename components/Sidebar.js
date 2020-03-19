import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  sidebarSection: {
    marginTop: theme.spacing(0)
  }
}));

import { social } from '../config/social_media';

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={3}>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social Media
      </Typography>
      {social.map((network, index) => (
        <Link display="block" variant="body1" href="#" key={index}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default Sidebar;
