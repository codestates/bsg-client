import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';



const ViewMyPage = () => {


  

  return (
<div className="innerMypage">
    <h1 className="Title">마이페이지</h1>
    <img className="TearIcon" src="https://ifh.cc/g/xOwDyr.png"></img>
    <div className="userData">
      <div>닉네임 : 페이커</div>
      <div>티어 : 브론즈</div>
      <div>승률 : 10%</div>
      <div>가입일 : 2021년 1월 30일</div>
    </div>
    <button className="updateUserBtn">정보수정</button>
    <button className="deleteUserBtn">회원탈퇴</button>
</div>
  )
}



export default ViewMyPage;