import React from 'react';
import { Link, Grid, Badge, Tooltip } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { ReactComponent as Logo } from '../../assets/raLogo.svg';

const Header = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-around'
      alignItems='center'
      height='6vh'
    >
      <Grid>
        <Logo style={{ width: '40px', margin: 'auto' }} />
      </Grid>
      <Link href='/map' color='inherit' underline='none'>
        지도
      </Link>
      <Link href='/review' color='inherit' underline='none'>
        리뷰작성
      </Link>
      <Link href='/board' color='inherit' underline='none'>
        커뮤니티
      </Link>
      <Link href='/notice' color='inherit' underline='none'>
        공지
      </Link>
      <Link href='/mypage' color='inherit' underline='none'>
        마이페이지
      </Link>
      <Link href='/chat' color='inherit' underline='none'>
        <Badge badgeContent={1} color='error'>
          <Tooltip title='채팅'>
            <SendRoundedIcon />
          </Tooltip>
        </Badge>
      </Link>
      <Link href='/Login' color='inherit' underline='none'>
        <Tooltip title='로그아웃'>
          <LogoutRoundedIcon />
        </Tooltip>
      </Link>
    </Grid>
  );
};

export default Header;
