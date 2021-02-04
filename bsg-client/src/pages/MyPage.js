import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../component/Nav'
import Modal from '../component/Modal'
const axios = require('axios')


const MyPage = () => {

  return( 
    <>
    <Nav></Nav>
    <div className="MyPageContainer">
      <div className="MyPageCenter"></div>
      <div className="footer">designed by apple in california</div>
    </div>
    </>
  )
}

export default MyPage