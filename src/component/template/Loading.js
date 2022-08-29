import React from 'react';
import { ReactComponent as Rolling } from '../../assets/Rolling.svg';
import { Grid, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Grid container direction='column' justifyContent='center' alignItems='center' margin='5%'>
      <Grid>
        <Rolling style={{ width: '150px' }} />
      </Grid>
      <Grid>
        <Typography variant="h5">불러오는 중</Typography>
      </Grid>
    </Grid>
  );
};

export default Loading;
