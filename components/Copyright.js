import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => {
  return (
    <Typography variant="body2" align="left">
      Copyright
      {` © 2016 - ${new Date().getFullYear()} `}
      <Link color="inherit" href="https://material-ui.com/">
        Company.com.
      </Link>
      {` All right reserved.`}
    </Typography>
  );
};

export default Copyright;
