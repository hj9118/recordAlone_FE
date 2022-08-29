import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper  } from '@mui/material';
import Pagination from '../template/Pagination';
import Loading from '../template/Loading';

const PostItem = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setPosts(null);
        setLoading(true);
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts(res.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) return <Loading />
  if (error) return <div>에러 발생</div>;
  if (!posts) return null;

  return (
    <div>
      <TableContainer
        component={Paper}
        // posts={currentPosts(posts)}
        loading={loading}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>글 번호</TableCell>
              <TableCell align='center'>카테고리</TableCell>
              <TableCell>제목</TableCell>
              <TableCell align='center'>작성자</TableCell>
              <TableCell align='center'>작성일</TableCell>
              <TableCell align='center'>조회수</TableCell>
            </TableRow>
          </TableHead>
          {posts
            ? posts.map((post) => {
              
              const detail = () => {
                navigate(`/board/${post.id}`, {
                  
                })
              }

                return (
                     
                  <TableRow onClick={detail}> 
                    <TableCell align='center'>
                     {post.id}
                    </TableCell>
                    <TableCell align='center'>{post.category}</TableCell>
                    <TableCell>{post.title}</TableCell>
                    <TableCell align='center'>{post.userId}</TableCell>
                    <TableCell align='center'>{post.date}</TableCell>
                    <TableCell align='center'>{post.read}</TableCell>
                  </TableRow>
                    
                );
              })
            : ''}
        </Table>
      </TableContainer>

      <Pagination />
    </div>
  );
};

export default PostItem;
