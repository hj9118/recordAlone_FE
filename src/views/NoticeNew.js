import { Box, Button, Paper, Stack, TextField } from '@mui/material';
import Editor from '../component/board/Editor';
import { useState } from 'react';
import Choice from '../component/template/Choice';
import Layout from './Layout';

const NoticeNew = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showError, setShowError] = useState(false);

  const isEmpty = (value) => {
    return showError && (value === null || value.length <= 0);
  };

  return (
    <Layout>
      <Stack sx={{ margin: '2rem', mt: 3 }} spacing={4}>
        <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
          <TextField disableUnderline
            fullWidth
            inputProps={{ style: { fontSize: 20 } }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={isEmpty(title)}
            helperText={isEmpty(title) && '제목은 비워둘 수 없습니다.'}
            sx={{ mb: '10px' }}
            variant='standard'
            placeholder='제목'
            Color='#fff'
          />
          <Choice />
          <Editor isEditMode={true} content={content} setContent={setContent} />
          <Box>
            <Button
              variant='contained'
              color='inherit'
              sx={{ width: '100px', height: '40px', float: 'right' }}
            >
              저장
            </Button>
          </Box>
        </Paper>
      </Stack>
    </Layout>
  );
};

export default NoticeNew;
