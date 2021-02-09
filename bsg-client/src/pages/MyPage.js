import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../component/Nav'
import Modal from '../component/Modal'
import ViewMyPage from '../component/ViewMyPage'
import UpdateMyPage from '../component/UpdateMyPage'
import { checkLoginAgain } from '../store/action/users'
const axios = require('axios')


const MyPage = () => {

  const userdata = useSelector((state) => state.userData.userNow)
  const [isUpdate, setMode] = useState(false)
  const dispatch = useDispatch()
  const doUpdate = () => {
    setMode(true)
  }

  const cancelUpdate = () => {
    setMode(false)
  }

  useEffect(() => {
    if(localStorage.getItem('Token')){
      dispatch(checkLoginAgain())
    }
  },[])

  return( 
    <>
    <Nav></Nav>
    <div className="MyPageContainer">
      <div className="MyPageCenter">{!isUpdate ? <ViewMyPage doUpdate={doUpdate}></ViewMyPage> 
      : <UpdateMyPage cancelUpdate={cancelUpdate}></UpdateMyPage>}
        
      </div>
      <div className="footer">designed by apple in california</div>
    </div>
    </>
  )
}

export default MyPage