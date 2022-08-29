import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography, Grid } from '@mui/material';

const NotFound = () => {
  const back = useNavigate();
  setTimeout(() => back(-1), 5000);

  return (
    <Box
      display='grid'
      direction='row'
      justifyContent='space-around'
      marginTop='40%'
      mx={{marginTop: '30%'}}
      color='#7289da'
    >
      <Grid container direction='row' alignItems='center'>
        <Typography variant='h2'>404 |</Typography>
        <Typography style={{ fontWeight: 'bold' }}>
          원하시는 페이지에 이동할 수 없습니다. <br /> 잠시 후 이동합니다.
        </Typography>
      </Grid>
      <Button onClick={() => back(-1)} style={{ border: '1px solid #7289da', borderRadius: '15px', marginTop: '15px', marginBottom: '3px', color: '#7289da'}} >
        뒤로가기
      </Button>
      <Button variant='contained' width='50% auto' href='/' style={{ borderRadius: '15px', backgroundColor: '#7289da' }}>
        홈으로
      </Button>
    </Box>
  );
};

export default NotFound;
