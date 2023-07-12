import React from 'react';
import '../../styles/Main.css';
import { Link } from 'react-router-dom';
import zIndex from '@mui/material/styles/zIndex';
// import { redirect } from 'react-router-dom';
// import axios from '../Token/Interceptor';

const action = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};
//로그아웃 기능

export default function Nav() {
  return (
    <header style={{ zIndex: 100 }}>
      <nav>
        <div className="bar">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="logo">Play</div>
          </Link>
          <div className="menu">
            <ul className="topTitle">
              <li>
                <Link to="/notice"> 공지사항 </Link>
              </li>
              <li>
                <Link to="/qna"> Q&A </Link>
              </li>
              <li>
                <Link to="/home">실시간 인기게시물</Link>
              </li>
              <li>
                <Link to="/recommend">채용 추천</Link>
              </li>
            </ul>
          </div>
        </div>

            <div className='icon'>
                <ul>
                    <li><button><i class="fa-solid fa-magnifying-glass"></i></button></li>
                    <li><button><i class="fa-regular fa-comment-dots"></i></button></li>
                    <li><button><i class="fa-regular fa-bell"></i></button></li>
                    {/* <li><button><i class="fa-solid fa-user"></i></button></li> */}
                    

                        <div class="dropdown">
                            <button data-bs-toggle="dropdown" aria-expanded="false">
                            <li><i class="fa-solid fa-user"></i></li>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">프로필</a></li>
                                <li><a class="dropdown-item" href="/" onClick={action}>로그아웃</a></li>
                                <li><a class="dropdown-item" href="#">고객센터</a></li>
                            </ul>
                        </div>

                </ul>
            </div>
            
        </nav>
        </header>
    )
}
