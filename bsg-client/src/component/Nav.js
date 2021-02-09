import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'





const Nav = ({openModal}) => {


  const history = useHistory();
  const isLogin = useSelector((state) => state.userData.isLogin)

  const clickLogo = () => {
    history.push('/')
  }

  const clickToBoard = () => {
    history.push('/mainboard')
  }

  const clickToMyPage = () => {
    history.push('/mypage')
  }
  
  return (
    <div className="Navbar">
      <div className="NavLeft">
      <img onClick={clickLogo} className="logo" src="https://ifh.cc/g/zvCv8t.png"></img>
      <a href = 'https://kr.leagueoflegends.com/ko-kr/'target = '_blank'>
        <button className = 'riotBtn'>공식사이트</button>
      </a>
      </div>
      <div className="NavRight">
      <button onClick={() => {clickToBoard()}} className="navBtn">커뮤니티</button>
      <a href ='http://lol.inven.co.kr/' target = '_blank'>
      <button className = 'lolBtn'>LOL Inven</button>
      </a>
      {isLogin ? <button onClick={() => {clickToMyPage()}} className="loginBtn">마이페이지</button> : ''}
      {isLogin ? <button className="loginBtn">로그아웃</button> : <button onClick={openModal} className="loginBtn">로그인</button>}
      </div>
    </div>
  )
}

export default Nav;