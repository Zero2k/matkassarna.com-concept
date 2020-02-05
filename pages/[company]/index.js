import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Sidebar from '../../components/Sidebar';
import DetailedExpansionPanel from '../../components/DetailedExpansionPanel';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const Company = () => {
  const router = useRouter();
  const classes = useStyles();
  const { company } = router.query;

  return (
    <React.Fragment>
      <main>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={12}>
            <h1>Company: {company}</h1>
            <DetailedExpansionPanel />
            <DetailedExpansionPanel />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6" gutterBottom>
              More Companies:
            </Typography>
          </Grid>
          <Sidebar />
        </Grid>
      </main>
    </React.Fragment>
  );
};

export default Company;
