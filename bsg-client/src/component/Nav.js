import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';





const Nav = ({openModal}) => {

  

  const isLogin = useSelector((state) => state.userData.isLogin)
  
  return (
    <div className="Navbar">
      <div className="NavLeft">
      <img className="logo" src="https://ifh.cc/g/XpHtKW.png"></img>
      </div>
      <div className="NavRight">
      <button className="navBtn">커뮤니티</button>
      {isLogin ? <button className="loginBtn">마이페이지</button> : ''}
      {isLogin ? <button className="loginBtn">로그아웃</button> : <button onClick={openModal} className="loginBtn">로그인</button>}
      </div>
    </div>
  )
}

export default Nav;