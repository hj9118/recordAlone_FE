import React, { useState } from 'react';
import { Button, Typography, Grid, Avatar, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const Comment = () => {
  const [value, setValue] = useState('');
  const [userName] = useState('User');
  const [showreply, setShowreply] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const ReplyButton = styled(Typography)(({ theme }) => ({
    margin: '10px 0px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontFamily: 'Noto Sans KR'
  }));
  return (
    <>
      <Grid container direction='row'>
        <Avatar
          alt='TEST'
          src='/static/images/avatar/1.jpg'
          sx={{ width: 32, height: 32, marginRight: 1, marginBottom: 2 }}
        />
        <Typography>익명1</Typography>
      </Grid>
      <Typography> 댓글 작성 내용 ... </Typography>

      <ReplyButton onClick={() => setShowreply(!showreply)}>
        {showreply ? <span>▽ 답글 숨기기</span> : <span>▷ 답글달기</span>}
      </ReplyButton>

      {showreply ? (
        <>
          <TextField
            fullWidth
            placeholder='댓글을 작성해보세요'
            maxRows={4}
            value={value}
            onChange={handleChange}
          />
          <Grid container justifyContent='flex-end' marginY='0.3rem'>
            <Button>취소</Button>
            <Button
              variant='contained'
              style={{ backgroundColor: '#7289da', height: '30px' }}
            >
              등록
            </Button>
          </Grid>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default Comment;
