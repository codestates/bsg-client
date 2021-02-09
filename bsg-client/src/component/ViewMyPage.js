import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';



const ViewMyPage = ({doUpdate}) => {
  
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


  return (
<div className="innerMypage">
    <h1 className="Title">마이페이지</h1>
    <img className="TearIcon" src={tearIcon[userNow.dataUserNow.tier]}></img>
    <div className="userData">
      <div>{`닉네임 : ${userNow.userNow.nickname}`}</div>
      <div>{`티어 : ${userNow.dataUserNow.tier}`}</div>
      <div>{`승  :  ${userNow.dataUserNow.wins}  패  : ${userNow.dataUserNow.losses}`}</div>
      <div>{`승률 ${((userNow.dataUserNow.wins / (userNow.dataUserNow.wins + userNow.dataUserNow.losses)) * 100).toFixed(1)}`}</div>
      <div>{userNow.userNow.createdAt.slice(0,10)}</div>
    </div>
    <button onClick={() => {doUpdate()}} className="updateUserBtn">라이엇 닉네임 변경</button>
    <button className="deleteUserBtn">회원탈퇴</button>
</div>
  )
}



export default ViewMyPage;