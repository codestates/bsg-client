import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../component/Nav'
import Modal from '../component/Modal'
import ViewMyPage from '../component/ViewMyPage'
import UpdateMyPage from '../component/UpdateMyPage'
import { checkLoginAgain } from '../store/action/users'


const MyPage = () => {


  useEffect(() => {
    if(localStorage.getItem('Token')){
      dispatch(checkLoginAgain())
    }
  },[])

  const userdata = useSelector((state) => state.userData.userNow)
  const [isUpdate, setMode] = useState(false)
  const dispatch = useDispatch()
  const doUpdate = () => {
    setMode(true)
  }

  const cancelUpdate = () => {
    setMode(false)
  }

  

  return( 
    <>
    <Nav></Nav>
    <div className="MyPageContainer">
      <div className="MyPageCenter">{!isUpdate ? <ViewMyPage doUpdate={doUpdate}></ViewMyPage> 
      : <UpdateMyPage cancelUpdate={cancelUpdate}></UpdateMyPage>}
        
      </div>
      <div className="footer">
          <div className="copyright">
          Copyright ⓒ 2021. B.S.G-Land. All rights reserved.
          </div>
          <div className = 'nameText'>
          <div><i class="far fa-address-card"></i> Yoo Jae Woo</div>
          <div><i class="far fa-address-card"></i> Kim Yong Ho</div>
          <div><i class="fas fa-address-card"></i> Park Jun Seok</div>
          <div><i class="fas fa-address-card"></i> Lee Sang Cheol</div>
          
          </div>
         
        </div>
    </div>
    </>
  )
}

export default MyPage