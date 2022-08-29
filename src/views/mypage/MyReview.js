import React from 'react'
import Layout from '../Layout';
import Option from '../../component/template/Option';
import { Grid } from '@mui/material';
import Cards from '../../component/template/CardLoading'


const MyReview = () => {
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
  )
}

export default MyReview