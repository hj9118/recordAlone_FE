import React, { useState } from 'react';
import Header from '../../component/template/Header';
import { IconButton, Grid } from '@mui/material';
import { Map, ZoomControl } from 'react-kakao-maps-sdk';
import SideTab from './SideTab';
import MarkerUni from '../../component/map/MarkerUni';
import Marker from '../../component/map/Marker';
import MarkerPolice from '../../component/map/MarkerPolice';

const MainMap = () => {
  const [state, setState] = useState({
    center: {
      lat: 37.5935251,
      lng: 127.0461109,
    },
    errMsg: null,
    isLoading: true,
  });

  const { kakao } = window;

  return (
    <>
      <Header />
      <Grid container justifyContent='flex-start'>
        <Grid item xs={9}>
          <Map
            center={state.center}
            style={{ width: '100%', height: '100%' }}
            level={6}
          >
            <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
            <Marker />
            <MarkerUni />
            <MarkerPolice />
          </Map>
        </Grid>
        <Grid item xs={3}>
          <SideTab />
        </Grid>
      </Grid>
    </>
  );
};

export default MainMap;
