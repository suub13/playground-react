import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/Idsearch.css';

export default function IdSearch() {
  const [userEmail, setEmail] = useState('');
  const [userId, setUserid] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const idCheckHandler = () => {
    const password = {
      email: userEmail,
      userid: userId,
    };

    axios
      .post('/api/member/search/password', password)
      .then((response) => {
        console.log(response.data);
        const responseData = response.data;
        setSearchResult(responseData);
        alert('비밀번호를 찾았습니다.');
      })

      .then((result) => {
        console.log(result);
      })

      .catch((error) => {
        console.log(error);
        alert('입력하신 아이디와 이메일로 가입한 아이디가 없습니다.');
      });
  };

  return (
    <div className="wrap">
      <div className="box">
        <p className="play">
          PLAY <span className="ground">GROUND</span>
        </p>
        <div className="emailinput">비밀번호를 찾고자하는 아이디와 이메일을 입력해주세요.</div>

        <input
          className="idinput"
          onSubmit={idCheckHandler}
          type="text"
          id="userId"
          placeholder="아이디를 입력해주세요."
          onChange={(e) => setUserid(e.target.value)}
        />

        <input
          className="idinput1"
          onSubmit={idCheckHandler}
          type="email"
          id="userEmail"
          placeholder="이메일을 입력해주세요."
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="idsearch2" onClick={idCheckHandler}>
          임시비밀번호 받기
        </button>
        <br />
        <a className="searchresult">{searchResult.randomPassword}</a>
        <br></br>
        <a href="/Signin"> 로그인하러 가기</a>
      </div>
    </div>
  );
}
