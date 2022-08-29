import React from 'react';
import { Box, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const Menu = () => {
  const MenuLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
  }));

  return (
    <Box
      sx={{
        position: 'sticky',
        top: '0',
        width: '100%',
        paddingY: '10px',
        boxShadow: '0px 0px 10px 0.1px #ebecf0',
      }}
      style={{
        backgroundColor: 'white',
      }}
    >
      <Grid
        container
        direction='coloumn'
        justifyContent='space-evenly'
        alignItems='center'
      >
        <MenuLink href='/board/dining'>맛집 공유</MenuLink>
        <MenuLink href='/board/buying'>공동구매</MenuLink>
        <MenuLink href='/board/transfer'>집 양도</MenuLink>
        <MenuLink href='/board/tips'>팁 공유</MenuLink>
        <MenuLink href='/board/ect'>기타</MenuLink>
        <Link
          href='/board/write'
          underline='none'
          backgroundColor='#7289da'
          color='white'
          padding='5px 10px'
          borderRadius='5px'
          fontWeight='bolder'
        >
          글쓰기
        </Link>
      </Grid>
    </Box>
  );
};

export default Menu;
