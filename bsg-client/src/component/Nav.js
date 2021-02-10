import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { logOutUser } from '../store/action/users'






const Nav = ({openModal}) => {

  const dispatch = useDispatch()
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
  const ClicklogOutUser = () => {
    dispatch(logOutUser())
  }
  
  return (
    <div className="Navbar">
      <div className="NavLeft">
      <img onClick={clickLogo} className="logo" src="https://ifh.cc/g/zvCv8t.png"></img>
      <a href = 'https://kr.leagueoflegends.com/ko-kr/'target = '_blank'>
        <button className = 'riotBtn'>Official</button>
      </a>
      </div>
      <div className="NavRight">
      <button onClick={() => {clickToBoard()}} className="navBtn">Community</button>
      <a href ='http://lol.inven.co.kr/' target = '_blank'>
      <button className = 'lolBtn'>LOL Inven</button>
      </a>
      {isLogin ? <button onClick={() => {clickToMyPage()}} className="loginBtn">My Page</button> : ''}
      {isLogin ? <button onClick={ClicklogOutUser} className="loginBtn">Log Out</button> : <button onClick={openModal} className="loginBtn">Log In</button>}
      </div>
    </div>
  )
}

export default Nav;