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

  
  return (
    <div className="Navbar" style={{ backgroundColor: y > 50 ? "#000000b9" : "#00acb500"}}>
      {/* <div className="NavLeft"> */}
      <img onClick={clickLogo} className="logo" src="https://ifh.cc/g/zvCv8t.png"></img>
      {/* </div> */}
      {/* <div className="NavRight"> */}
      <div className = 'anyBtn'>
      <button onClick={() => {clickToBoard()}} className="navBtn">Community</button>
      <a href = 'https://kr.leagueoflegends.com/ko-kr/'target = '_blank'>
        <button className = 'navBtn'>Official</button>
      </a>
      <a href ='http://lol.inven.co.kr/' target = '_blank'>
      <button className = 'navBtn'>LOL Inven</button>
      </a>
      {isLogin ? <button onClick={() => {clickToMyPage()}} className="navBtn">My Page</button> : ''}
      {isLogin ? <button onClick={ClicklogOutUser} className="navBtn">Log Out</button> : <button onClick={openModal} className="loginBtn">Log In</button>}
      {/* </div> */}
      </div>
    </div>
  )
}

export default Nav;