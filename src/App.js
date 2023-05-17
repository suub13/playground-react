import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';

import Home from './pages/Home';
import Main from './pages/Main';
import Notice from './pages/Notice';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import NoticeView from './components/Notice/NoticeView'
import NoticeWrite from './components/Notice/NoticeWrite';
import NoticeModify from './components/Notice/NoticeModify';
import Mypage from './components/Mypage/MyPage';
import MypageModify from './components/Mypage/MyPageModify';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/notice' element={<Notice />} />
          <Route path='/notice/write' element={<NoticeWrite />} />
          <Route path='/notice/view' element={<NoticeView />} />
          <Route path='/notice/modify' element={<NoticeModify />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/mypage/modify' element={<MypageModify />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
