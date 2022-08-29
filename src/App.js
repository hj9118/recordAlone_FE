import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Index from './views/index';
import Map from './views/map/Map';


import Board from './views/board/Board';
import Dining from './views/board/Dining';
import Buying from './views/board/Buying';
import Transfer from './views/board/Transfer';
import Tips from './views/board/Tips';
import Ect from './views/board/Ect';
import Write from './views/board/Write';

import Mypage from './views/mypage/Mypage';
import RecentReview from './views/mypage/RecentReview';
import SaveHome from './views/mypage/SaveHome';
import MyReview from './views/mypage/MyReview';
import MyPost from './views/mypage/MyPost';

import Notice from './views/Notice';
import NoticeNew from './views/NoticeNew';
import NotFound from './views/NotFound';
import PostView from './component/board/PostDetail';

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/' element={<Index />} />
            <Route path='/map' element={<Map />} />
            {/* <Route path='/review' element={<Review />} /> */}

            <Route path='/board' element={<Board />} />
            <Route path='/board/dining' element={<Dining />} />
            <Route path='/board/buying' element={<Buying />} />
            <Route path='/board/transfer' element={<Transfer />} />
            <Route path='/board/tips' element={<Tips />} />
            <Route path='/board/ect' element={<Ect />} />
            <Route path='/board/write' element={<Write />} />
            <Route path='/board/:id' element={<PostView />} />

            <Route path='/mypage' element={<Mypage />} />
            <Route path='/mypage/recentReview' element={<RecentReview />} />
            <Route path='/mypage/saveHome' element={<SaveHome />} />
            <Route path='/mypage/myReview' element={<MyReview />} />
            <Route path='/mypage/myPost' element={<MyPost />} />

            <Route path='/notice' element={<Notice />} />
            <Route path='/notice/new' element={<NoticeNew />} />
            {/* <Route path='/chat' element={<Chat />} /> */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
