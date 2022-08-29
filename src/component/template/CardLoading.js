import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';

const Cards = () => {
  return (
    <Paper style={{margin: '5px', width: '370px'}}>
      <Grid container spacing={2} style={{padding: '10px'}}>
        <Grid item>
          <Skeleton variant='rectangular' width={128} height={128} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs={8} container direction='column' spacing={2}>
            <Grid item xs marginBottom='5px'>
              <Grid>
                <Skeleton variant='caption' width={200} height={20} />
              </Grid>
              <Grid>
                <Skeleton variant='rectangular' width={180} height={80} style={{marginTop: '8px'}}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Cards;