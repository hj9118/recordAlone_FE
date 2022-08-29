import React from 'react';
import { CustomOverlayMap } from 'react-kakao-maps-sdk';
import { Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { styled } from '@mui/material/styles';

const MarkerUni = () => {
  const Univ = styled(Button)(({ theme }) => ({
    variant: 'contined',
    backgroundColor: 'rgba(114, 137, 218, 0.9)',
    border: '1px solid #7289da',
    height: '30px',
    fontSize: '0.8em',
    color: 'white',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: 'rgba(114, 137, 218, 0.9)'
    }
  }));

  return (
    <>
      {/* 오버레이 표시 좌표 */}
      <CustomOverlayMap
        position={{
          lat: 37.596277,
          lng: 127.0526565,
        }}
      >
        {/* 오버레이 디자인 입니다. */}

        <Univ startIcon={<SchoolIcon />}>경희대학교</Univ>
      </CustomOverlayMap>
      <CustomOverlayMap
        position={{
          lat: 37.590799,
          lng: 127.0277773,
        }}
      >
        <Univ startIcon={<SchoolIcon />}>고려대학교</Univ>
      </CustomOverlayMap>
      <CustomOverlayMap
        position={{
          lat: 37.6068163,
          lng: 127.0423832,
        }}
      >
        <Univ startIcon={<SchoolIcon />}>동덕여자대학교</Univ>
      </CustomOverlayMap>
      <CustomOverlayMap
        position={{
          lat: 37.5838657,
          lng: 127.0587771,
        }}
      >
        <Univ startIcon={<SchoolIcon />}>서울시립대학교</Univ>
      </CustomOverlayMap>
      <CustomOverlayMap
        position={{
          lat: 37.597108,
          lng: 127.0588498,
        }}
      >
        <Univ startIcon={<SchoolIcon />}>한국외국어대학교</Univ>
      </CustomOverlayMap>
    </>
  );
};

export default MarkerUni;
