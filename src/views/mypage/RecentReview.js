import React from 'react';
import { Grid } from '@mui/material';
import Cards from '../../component/template/CardLoading';

const recentReview = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='flex-start'
      alignItems='flex-start'
    >
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </Grid>
  );
};

export default recentReview;
