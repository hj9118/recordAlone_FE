import React from 'react';
import { Link } from 'react-router-dom';
import {
  Paper,
  Typography,
  Button,
  Grid,
  Chip,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gif from '../assets/indexGIF.gif';
import index_img from '../assets/index_img.png';

const index = () => {
  const alert = () => {
    window.alert('미담당 파트로 메인페이지로 이동합니다.');
  };

  return (
    <>
      <Paper
        elevation={0}
        style={{ width: '100%', backgroundColor: '#f5f5f5' }}
      >
        <Grid container justifyContent='center' alignItems='center'>
          <Grid item xs={10} md={8}>
            <img src={gif} />
          </Grid>
          <Grid item xs={4}>
            <Typography style={{ fontSize: '38px' }}>
              자취고민 덜어주는
            </Typography>
            <Typography
              style={{
                fontSize: '38px',
                color: '#7289da',
                fontWeight: 'bold',
                marginBottom: '10px',
              }}
            >
              자취를 남기다
            </Typography>
            <Link
              to='/map'
              onClick={alert}
              style={{
                border: '1px solid #7289da',
                padding: '10px 20px',
                borderRadius: '5px',
                marginRight: '10px',
                textDecoration: 'none',
                color: '#7289da',
              }}
            >
              로그인
            </Link>
            <Link
              to='/map'
              onClick={alert}
              style={{
                border: '1px solid #7289da',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none',
                color: '#7289da',
              }}
            >
              회원가입
            </Link>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={0} style={{ width: '100%' }}>
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          marginY='2rem'
        >
          <Grid>
            <img src={index_img} width='400px' />
          </Grid>
          <Grid>
            <Typography fontSize='38px' paddingTop='30px' fontWeight='bold'>
              대학가 자취생들 고민해결
            </Typography>
            <Grid container justifyContent='center' alignItems='center'>
              <Typography textAlign='center' fontSize='14px'>
                학교 인증을 받아야 가입 가능한 광고없는 후기! <br />
                안전지도로 내 주변 CCTV와 경찰서 위치 확인으로 안전도 확인하고
                <br />
                익명으로 주변 사람들과 커뮤니티로 공감대도 형성 가능합니다.{' '}
                <br />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={0} style={{ width: '100%' }}>
        <Paper
          elevation={0}
          direction='column'
          justifyContent='center'
          alignItems='center'
          style={{
            width: '90%',
            margin: 'auto',
            paddingBottom: '5%',
            paddingTop: '2%',
          }}
        >
          <Typography variant='h5' fontWeight='bold' marginBottom={2}>
            자주묻는 질문
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Chip label='가입' size='small' style={{ marginRight: '5px' }} />
              <Typography>가입 절차가 어떻게 되나요?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                서울지역 내 대학생을 위한 서비스로, 가입시 학생 인증이
                필수적으로 존재합니다. <br />
                원활한 서비스 제공을 위해 가급적 본인 명의로 가입을
                부탁드립니다.
              </Typography>
              <Typography variant='body2'>
                * 타인의 개인정보로 가입시 가입이 취소될 수 있습니다.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Chip
                label='서비스'
                size='small'
                style={{ marginRight: '5px' }}
              />
              <Typography>자취방 리뷰는 무엇인가요?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                리뷰는 자신이 지내는 자취방에 대한 후기, 타인의 거주 후기등을
                작성 및 확인이 가능한 곳입니다. <br />내 주변 자취방들의 실제
                거주 후기를 통해 거짓후기, 광고 없는 솔직한 후기를 만나보세요
              </Typography>
              <Typography variant='body2'>
                * 자취방 리뷰 확인시에는 1코인이 소모되며 코인은 후기 작성 및
                추가 구매로 충전이 가능합니다.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Chip label='공지' size='small' style={{ marginRight: '5px' }} />
              <Typography>개인정보 처리방침</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                실제 서비스 되지 않는 프로젝트 사이트이며, 형식상 맞춰놓은 글
                입니다. <br />
                실제 서비스 될 경우 개인정보 보호법에 의하여 작성되어야 하는
                형식입니다.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Paper>
    </>
  );
};

export default index;
