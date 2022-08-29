import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paging = ({ total, page, setPage }) => {
  const Pagination = ({ perPage, total, paginate }) => {
    const pageNum = [];
    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
      pageNum.push(i);
    }
  };

  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      marginY='10px'
    >
      <Pagination count={10} variant='outlined' color='primary' />
    </Stack>
  );
};

export default Paging;
