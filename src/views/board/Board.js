import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import Menu from '../../component/template/Menu';
import PostItem from '../../component/board/PostItem';
import { Typography, Grid } from '@mui/material';

const Board = (props) => {
  
  return (
    <Layout>
      <Menu />
      <Grid style={{ width: '80%', margin: 'auto'}}>
      <Typography style={{ marginTop: '25px' }}>전체 글</Typography>
      <PostItem />
      </Grid>
    </Layout>
  );
};

export default Board;
