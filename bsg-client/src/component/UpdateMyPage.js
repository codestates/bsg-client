import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';



const UpdateMyPage = ({doUpdate, cancelUpdate}) => {


  

  return (
<div className="innerMypage">
    <h1 className="Title">마이페이지</h1>
    <img className="TearIcon" src="https://ifh.cc/g/xOwDyr.png"></img>
    <div className="userData">
    <div className="updateData">
        <div className="label1">Username:</div>
        <input value="페이커" className="input1" type="text"></input>
        <div className="label2">Password:</div>
        <input className="input2" type="password"></input>
        </div>
        </div>
    <button onClick={() => {}} className="updateUserBtn">수정</button>
    <button onClick={() => {cancelUpdate()}} className="deleteUserBtn">취소</button>
</div>
  )
}

export default UpdateMyPage;