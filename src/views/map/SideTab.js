import React, { useState, useEffect } from 'react';
import { Box, Stack, Paper, Grid, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CardLoading from '../../component/template/CardLoading';
import Paging from '../../component/template/Pagination';

const SideTab = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [save, setSave] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleSaveButton = () => {
    setSave(!save);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setError(null);
        setItems(null);
        setLoading(true);
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/comments'
        );
        setItems(res.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchItems();
  }, []);

  if (loading)
    return (
      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        alignItems='center'
      >
        <CardLoading />
      </Grid>
    );
  if (error) return <div>데이터를 불러올 수 없음</div>;
  if (!items) return null;

  const Page = styled(Paper)({
    textAlign: 'left',
    padding: '3%',
    width: '100%',
    height: '150px',
  });

  return (
    <Box
      style={{
        height: '93vh',
        width: '90%',
        margin: 'auto',
        overflowY: 'auto',
      }}
    >
      {items
        ? items.map((items) => {
            const detail = () => {
              navigate(`/map/${items.id}`, {});
            };
            return (
              <Stack spacing={2}>
                <Page onClick={detail}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Paper sx={{ width: 128, height: 128 }}>
                        <img alt='complex' src='https://picsum.photos/128' />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid
                        item
                        xs={8}
                        container
                        direction='column'
                        spacing={2}
                      >
                        <Grid item xs>
                          <Typography variant='subtitle1' component='div'>
                            {items.name}
                          </Typography>
                          <Typography variant='body2'>
                            {items.postId}
                          </Typography>
                          <Typography variant='body2' color='text.secondary'>
                            {items.email}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={4} align='right'>
                        <div onClick={handleSaveButton}>
                          {save ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Page>
              </Stack>
            );
          })
        : ''}
      <Paging />
    </Box>
  );
};

export default SideTab;
