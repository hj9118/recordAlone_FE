import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, Typography, Box } from '@mui/material';

import RecentReview from '../../views/mypage/RecentReview';
import SaveHome from '../../views/mypage/SaveHome';
import MyReview from '../../views/mypage/MyReview';
import MyPost from '../../views/mypage/MyPost';

// 탭 클릭시 변경될 부분 
// index 값과 클릭한 value 값이 맞을경우 해당 값 표시
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab label='최근 본 후기' />
          <Tab label='저장한 후기' />
          <Tab label='내가 쓴 후기' />
          <Tab label='내가 쓴 글' />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <RecentReview />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SaveHome />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyReview />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MyPost />
      </TabPanel>
    </Box>
  );
}
