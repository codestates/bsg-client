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
      Copyright ⓒ 2021. B.S.G-Land. All rights reserved.
      <div className = 'nameText'>
          <p>Yoo Jae Woo</p>
          <p>Park Jun Seok</p>
          <p>Lee Sang Cheol</p>
          <p>Kim Yong Ho</p>
          </div>
  
  <a href = 'https://www.twitch.tv/directory/game/League%20of%20Legends' target = '_blank'>
  <img className='twitchImg' src ='https://ifh.cc/g/wZvQCi.png'/>
  </a>
  
  <a href = 'http://www.afreecatv.com/?hash=game' target = '_blank'>
  <img className='afreecaImg' src ='https://ifh.cc/g/sSPrnP.png'/>
  </a>

  <a href = 'https://www.youtube.com/' target = '_blank'>
  <img className='youtubeImg' src ='https://ifh.cc/g/5GjBXq.png'/>
  </a>
      </div>
    </div>
    </>
  )
}

export default MyPage