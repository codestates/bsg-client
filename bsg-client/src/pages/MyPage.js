import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../component/Nav'
import Modal from '../component/Modal'
import ViewMyPage from '../component/ViewMyPage'
const axios = require('axios')


const MyPage = () => {

  const userdata = useSelector((state) => state.userData.userNow)
  const [mode, setMode] = useState('read')

  const changeMode = (mode) => {
    setMode(mode)
  }

  return( 
    <>
    <Nav></Nav>
    <div className="MyPageContainer">
      <div className="MyPageCenter">
        <ViewMyPage clickBtn={changeMode}></ViewMyPage>
      </div>
      <div className="footer">designed by apple in california</div>
    </div>
    </>
  )
}

export default MyPage