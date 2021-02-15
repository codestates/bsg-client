import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signingOutUser } from '../store/action/users'
import { useHistory } from 'react-router'
import { checkLoginAgain } from '../store/action/users';
import axios from 'axios'


const ViewMyPage = ({doUpdate}) => {

  useEffect(() => {
    if (localStorage.getItem('Token')) {
      dispatch(checkLoginAgain());
    }
  },[])
  const userRank = JSON.parse(localStorage.getItem("RankData"))
  const history = useHistory();
  const dispatch = useDispatch();
  const tearIcon = {
    'IRON' : 'https://ifh.cc/g/9zJAdf.png',
    'BRONZE' : 'https://ifh.cc/g/OtoyU2.png',
    'SILVER' : 'https://ifh.cc/g/nIcDyS.png',
    'GOLD' : 'https://ifh.cc/g/ruWbaS.png',
    'PLATINUM' : 'https://ifh.cc/g/tOK9Km.png',
    'DIAMOND' : 'https://ifh.cc/g/8qjsyE.png',
    'MASTER' : 'https://ifh.cc/g/4bCj6b.png',
    'GRANDMASTER' : 'https://ifh.cc/g/BpbGxY.png',
    'CHALLENGER' : 'https://ifh.cc/g/RIIP0P.png'
  }
  const userNow = useSelector((state) => state.userData)

  const deleteUser = () => {
    history.push('/')
    dispatch(signingOutUser(userNow.userNow.email))
  }

  return  (
<div className="innerMypage">
    (<h1 className="Title">My Page</h1>
    { userNow.userNow !== null ? <img className="TearIcon" src={tearIcon[userRank.tier]}></img> : null}
    <div className="userData">
     { userNow.userNow && <div>{`닉네임 : ${userRank.summonerName}`}</div>}
     { userNow.userNow && <div>{`티어 : ${userRank.tier}`}</div>}
     { userNow.userNow && <div>{`승  :  ${userRank.wins}  패  : ${userRank.losses}`}</div>}
     { userNow.userNow && <div>{`승률 : ${((userRank.wins / (userRank.wins + userRank.losses)) * 100).toFixed(1)}`}</div>}
     { userNow.userNow && <div>{`가입일 : ${userNow.userNow.createdAt.slice(0,10)}`}</div>}
    </div>
    <button onClick={() => {doUpdate()}} className="updateUserBtn">라이엇 닉네임 변경</button>
    <button onClick={deleteUser} className="deleteUserBtn">회원탈퇴</button>)
</div>
  )
}



export default ViewMyPage;