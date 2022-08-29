import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select, Typography } from '@mui/material';

const Choice = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <FormControl variant='standard' sx={{ mt: 1.5, width: 200 }}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem disabled value="">
            <Typography>카테고리</Typography>
          </MenuItem>
          <MenuItem value={'Dining'}>맛집공유</MenuItem>
          <MenuItem value={'Buying'}>공동구매</MenuItem>
          <MenuItem value={'Transfer'}>집 양도</MenuItem>
          <MenuItem value={'Tips'}>팁 공유</MenuItem>
          <MenuItem value={'Ect'}>기타</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default Choice;