import {
  Chip,
  Divider,
  Paper,
  Typography,
  Button,
  Box,
  Grid,
  IconButton,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import Layout from '../../views/Layout';
import Menu from '../template/Menu';
import Comment from './Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { useNavigate } from 'react-router-dom';

const PostDetail = (posts) => {
  const [view, setView] = useState(10);

  const [likeBtn, setLikeBtn] = useState(false);
  const [TUp, setTup] = useState(0);

  const [comment, setComment] = useState(0);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const date = new Date();
  const navigate = useNavigate();

  return (
    <Layout>
      <Menu />
      <Paper
        style={{
          margin: '10%',
          width: '60%',
          minWidth: '750px',
          margin: '2rem auto',
        }}
        elevation={0}
      >
        <Typography variant='h4'>{posts.title}</Typography>
        <Typography>
          nickname , {date.getHours()}:{date.getMinutes()}
        </Typography>
        <Chip label='카테고리' />
        <Chip icon={<VisibilityIcon />} label={view} marginX='10px' />
        <Typography style={{ width: '80%', margin: '2rem auto'}}>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          massa diam. Aliquam erat volutpat. Nulla sit amet neque vestibulum,
          maximus lectus et, varius erat. Fusce ultricies quam in tortor
          pulvinar, eu commodo enim interdum. Cras et leo euismod, venenatis
          magna ut, venenatis risus. In vestibulum pharetra cursus. In elementum
          lectus quis convallis eleifend. Phasellus ullamcorper odio sit amet
          augue tincidunt consequat. Etiam quis neque odio. Ut aliquet rutrum
          vestibulum.
          <br /> <br />
          Proin sed interdum dolor, eget dictum libero. Praesent gravida tellus
          eget sem cursus volutpat. Vivamus vitae dictum risus, non congue
          risus. Donec eget varius ex, non placerat tellus. Phasellus non
          venenatis lectus. Etiam vitae elit at mi mollis fringilla sit amet ac
          libero. Morbi eros felis, molestie eget massa ac, dignissim rhoncus
          felis. Nullam quis ligula magna. Nam id nibh non neque pellentesque
          luctus vitae a ex. Vivamus non porttitor ante. In orci lacus, ornare
          at leo sed, viverra vehicula tortor. Nullam eros nunc, consectetur et
          nisl at, mollis placerat velit. Praesent sit amet malesuada ex.
          Vivamus nec dui leo.{' '}
        </Typography>
        <Box
          style={{
            width: '200px',
            margin: '0 auto',
          }}
        >
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <Grid>
              <IconButton onClick={() => setLikeBtn(!likeBtn)}>
                {likeBtn ? (
                  <ThumbUpIcon style={{ fontSize: '35px', color: '#7289da' }} />
                ) : (
                  <ThumbUpOutlinedIcon style={{ fontSize: '35px' }} />
                )}
              </IconButton>
              {likeBtn ? (
                <Typography textAlign='center'>{TUp + 1}</Typography>
              ) : (
                <Typography textAlign='center'>{TUp}</Typography>
              )}
            </Grid>
          </Grid>
        </Box>
        <Chip label='목록으로' onClick={() => navigate(-1)} />
        <Divider style={{ margin: '1rem' }} />
        <Typography variant='body1'>{comment}개의 댓글</Typography>
        <Grid>
          <Grid>
            <TextField
              fullWidth
              placeholder='댓글을 작성해보세요'
              maxRows={4}
              value={value}
              onChange={handleChange}
            />
          </Grid>
          <Grid container justifyContent='flex-end' marginY='0.3rem'>
            <Button
              variant='contained'
              style={{ backgroundColor: '#7289da', height: '30px' }}
            >
              등록
            </Button>
          </Grid>
        </Grid>
        <Comment />
      </Paper>
    </Layout>
  );
};

export default PostDetail;
