import React from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const Overlay = () => {
  const positions = [
    {
      title: '돈암지구대',
      latlng: { lat: 37.5972875, lng: 127.012384 },
    },
    {
      title: '안암지구대',
      latlng: { lat: 37.5866997, lng: 127.0166041 },
    },
    {
      title: '길음지구대',
      latlng: { lat: 37.6104468, lng: 127.0194087 },
    },
    {
      title: "성북파출소",
      latlng: { lat: 37.5932791, lng: 126.9985215},
    },
    {
      title: "답십리지구대",
      latlng: { lat: 37.5712351, lng: 127.0511312},
    },
    {
      title: "용신지구대",
      latlng: { lat: 37.5727666, lng: 127.0371836},
    },
    {
      title: "청량리파출소",
      latlng: { lat: 37.5775799, lng: 127.0536125},
    },
    {
      title: "제기파출소",
      latlng: { lat: 37.5855191, lng: 127.0420164},
    },
    {
      title: "전농1파출소",
      latlng: { lat: 37.5760729, lng: 127.0479507},
    },
    {
      title: "전농2파출소",
      latlng: { lat: 37.5862838, lng: 127.0542115},
    },
    {
      title: "장안1파출소",
      latlng: { lat: 37.569594, lng: 127.0650359},
    },
    {
      title: "장안2파출소",
      latlng: { lat: 37.5759638, lng: 127.0753716},
    },
    {
      title: "이문지구대",
      latlng: { lat: 37.5965048, lng: 127.068166},
    },
    {
      title: "휘경파출소",
      latlng: { lat: 37.5898113, lng: 127.0626828},
    },
    {
      title: "회기파출소",
      latlng: { lat: 37.5910488, lng: 127.0518318},
    },
    {
      title: "석관파출소",
      latlng: { lat: 37.6089194, lng: 127.0552543},
    },
    {
      title: "장위지구대",
      latlng: { lat: 37.6193708, lng: 127.053603},
    },
    {
      title: "월곡지구대",
      latlng: { lat: 37.60440212, lng: 127.0324014},
    },
    {
      title: "종암파출소",
      latlng: { lat: 37.6000317, lng: 127.0312134},
    },
  ];

  // const Police = styled(IconButton)(({ theme }) => ({
  //   backgroundColor: 'rgba(217, 107, 119, 0.8)',
  //   width: '30px',
  //   height: '30px',
  //   color: 'white',
  //   borderRadius: '50%',
  //   '&:hover': {
  //     backgroundColor: 'rgba(217, 107, 119, 0.9)',
  //   },
  // }));

  return (
    <>
      {positions.map((position, index) => (
        <MapMarker
          key={`${position.title} - ${position.latlng}`}
          position={position.latlng}
          image={{
            src: 'https://url.kr/mog81h',
            size: {
              width: 35,
              height: 35
            },
          }}
          title={position.title}
        />
      ))}
    </>
  );
};

export default Overlay;
