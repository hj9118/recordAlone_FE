import React from 'react';
import { Grid, Typography } from '@mui/material';
import PostItem from '../../component/board/PostItem';
import Loading from '../../component/template/Loading'

const MyPost = () => {
  return (
          <Grid
            container
            direction='row'
            justifyContent='flex-start'
            alignItems='flex-start'
          >
            <PostItem />
          </Grid>
  );
};

export default MyPost;
