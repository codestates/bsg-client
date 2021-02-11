import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { logOutUser } from '../store/action/users'


const useScroll = () => {
  const [state, setState] = useState({
    x : 0,
    y : 0
  })
  const onScroll = () =>{
    setState({ y : document.documentElement.scrollTop, x :window.scrollX})
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  },[])
  return state
}



const Nav = ({openModal}) => {
  const { y } = useScroll()
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


const toggleBtnSet = () => {
  const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');
  menu.classList.toggle('active');
  icons.classList.toggle('active');
}



return (
  <nav class="navbar">
  <div class="navbar__logo">
      <a onClick={clickLogo}>
        <img class="logoimg"src="https://ifh.cc/g/zvCv8t.png"></img>
      </a>
  </div>

  <ul class="navbar__menu">
      <li><a href="https://kr.leagueoflegends.com/ko-kr/" target = '_blank'>OFFICIAL</a></li>
      <li><a href="http://lol.inven.co.kr/" target = '_blank'>LOL INVEN</a></li>
      <li onClick={clickToBoard} class="loser">Community</li>
      {isLogin ? <li class="loser" onClick={clickToMyPage}>My Page</li> : <li class="loser"><a  href="https://op.gg" target = '_blank'>OP.GG</a></li>}
      <li class="loser">{isLogin ? <a onClick = {ClicklogOutUser}>Log Out</a> : <a  onClick = {openModal}>Log In </a>}</li>
  </ul> 

  <ul class="navbar__icons">
      <li>
        <a href="https://www.twitch.tv" target = '_blank'>
          <i class="fab fa-twitch"></i>
            </a>
        </li>
      <li><a href="https://www.youtube.com" target = '_blank'><i class="fab fa-youtube"></i></a>
        </li>
  </ul>

  <a href="#" onClick = {toggleBtnSet} class="navbar__toogleBtn">
      <i class="fas fa-bars"></i>
  </a>
</nav>
)
}

export default Nav;