import React, { useState } from 'react';
import Layout from '../Layout';
import Option from '../../component/template/Option';
import { Grid, Typography, Avatar, Button, Tooltip, Divider, Paper, IconButton } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import EditIcon from '@mui/icons-material/Edit';
import SavingsIcon from '@mui/icons-material/Savings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Mypage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [pro, setPro] = useState(false);
  const [coin, setCoin] = useState(3);
  const [name, setName] = useState('기본 닉네임');
  // const [photo, setPhoto] = useState(null);

  const changeName = (e) => {
    setName(e.target.value);
  };

  return (
    <Layout>
      <Grid container>
        <Grid margin='3rem 5rem'>
          <Grid
            container
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
          >
            <Grid item xs={3} md={2}>
              {isEdit ? (
                <IconButton
                  color='inherit'
                  component='label'
                  style={{
                    padding: '40px',
                    backgroundColor: 'lightgray',
                    width: 128,
                    height: 128,
                  }}
                >
                  <input hidden accept='image/*' type='file' />
                  <PersonAddIcon />
                </IconButton>
              ) : (
                <Avatar
                  alt='TEST'
                  src='/static/images/avatar/1.jpg'
                  sx={{ width: 128, height: 128 }}
                />
              )}
            </Grid>
            <Grid
              item
              xs={6}
              md={8}
              container
              direction='row'
              justifyContent='flex-start'
              alignItems='center'
            >
              <Typography variant='h5' fontWeight='bolder'>
                {isEdit ? (
                  <input value={name} onChange={changeName} />
                ) : (
                  <Typography variant='h5' fontWeight='bold'>
                    {name}
                  </Typography>
                )}
              </Typography>
              <IconButton onClick={() => setIsEdit(!isEdit)} fontSize='35px'>
                {isEdit ? <SaveAltIcon /> : <EditIcon />}
              </IconButton>
              <Grid
                container
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
              >
                <Typography fontWeight='bold' fontSize='20px'>
                  {pro === true ? (
                    <Typography fontWeight='bold'> Pro </Typography>
                  ) : (
                    <Typography> 일반 등급 </Typography>
                  )}
                </Typography>
                {/* pro 옵션 가입시 비활성화 버튼, 미가입시 가입버튼 활성화 */}
                {pro === true ? (
                  <Button
                    variant='contained'
                    startIcon={<LockOpenIcon />}
                    disabled
                    style={{
                      margin: '10px',
                    }}
                  >
                    가입중
                  </Button>
                ) : (
                  <Button
                    variant='contained'
                    startIcon={<LockIcon />}
                    style={{
                      margin: '10px',
                      background:
                        'linear-gradient(to right bottom, #7289da, #aabeff)',
                    }}
                  >
                    Pro 가입
                  </Button>
                )}
              </Grid>
              <SavingsIcon style={{ marginRight: '0.3rem' }} /> 코인 : {coin}
              코인
              <Tooltip
                title='코인은 리뷰 전문 확인시 사용됩니다.
              '
              >
                <HelpOutlineIcon style={{ marginLeft: '0.3rem' }} />
              </Tooltip>
            </Grid>
          </Grid>
          <Divider style={{ marginTop: '1.3rem', visibility: 'hidden' }} />
          <Grid container justifyContent='flex-start' alignItems='flex-start'>
            <Option />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Mypage;
