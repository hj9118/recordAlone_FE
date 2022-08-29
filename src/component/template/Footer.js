import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary'>
      {'Copyright © '}
      <Link color='inherit' href='https://github.com/recordAlone/'>
        RecordAlone
      </Link>{' '}
      All Rights Reserved.
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        display='grid'
        direction='row'
        justifyContent='space-evenly'
        alignitems='center'
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#eaefff',
        }}
      >
        <Grid sx={{ display: 'flex' }}>
          <Box mx={3} sx={{ display: 'grid' }}>
          <Typography variant='body1' fontWeight='bold' marginBottom={1}>이용 안내</Typography>
            <Link href='#' underline='hover' color='inherit' fontSize='15px'>
              이용약관
            </Link>
            <Link href='#' underline='hover' color='inherit' fontSize='15px'>
              개인정보 처리방침
            </Link>
            <Link href='#' underline='hover' color='inherit' fontSize='15px'>
              위치 기반 서비스 이용약관
            </Link>
          </Box>
          <Box mx={3} sx={{ display: 'grid' }}>
          <Typography variant='body1' fontWeight='bold' marginBottom={1}>고객지원</Typography>
            <Link href='/notice' underline='hover' color='inherit' fontSize='15px'>
              자주묻는 질문
            </Link>
            <Link href='/notice' underline='hover' color='inherit' fontSize='15px'>
              공지사항
            </Link>
          </Box>
          <Box mx={3} sx={{ display: 'grid' }}>
            <Typography variant='body1' fontWeight='bold' marginBottom={1}>GitHub Page</Typography>
            <Link href='https://github.com/recordAlone/RA_FrontEnd' underline='hover' color='inherit' fontSize='15px'>
              FrontEnd Github
            </Link>
            <Link href='https://github.com/recordAlone/IntelliJGitHub' underline='hover' color='inherit' fontSize='15px'>
              BackEnd Github
            </Link>
            <Link href='https://www.notion.so/b70d8e968bf248f4916a26a74adba145' underline='hover' color='inherit' fontSize='15px'>
            Notion
            </Link>
          </Box>
        </Grid>
        <Grid container justifyContent='center' marginTop={1}>
          <Copyright/>
        </Grid>
      </Box>
    </Box>
  );
}
