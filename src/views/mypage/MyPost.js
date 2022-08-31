import React from 'react';
import { Grid } from '@mui/material';
import PostItem from '../../component/board/PostItem';

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
