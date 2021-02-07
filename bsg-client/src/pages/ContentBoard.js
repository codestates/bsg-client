import React,{ useState, useEffect } from 'react';
import Nav from '../component/Nav'
import { useHistory } from 'react-router'
import CommentArea from '../component/CommentArea'
import { useSelector, useDispatch } from 'react-redux';

const ContentBoard = () => {

    const history = useHistory();
    const userNow = useSelector((state) =>  state.userData.userNow) || []
    const getBoardNow = useSelector((state) => state.pageData.boardNow) || []
    const getComment = useSelector((state) => state.pageData.comments.fakeData.commentList) || []

    const goToUpdate = () => {
      history.push('/updatecontent')
    }

    return( 
      <>
      <Nav></Nav>
      <div className="content-board-container">
      <div className="mainBox">
      <div className="title">
        {getBoardNow && getBoardNow.title}
      </div>
      {getBoardNow && userNow.username === getBoardNow.username ?  
      <div className="controlbtnDiv">
        <button onClick={goToUpdate} className="controlbtn">수정</button>
        <button className="controlbtn">삭제</button>
      </div> : null}
     
      <div className="contentBox">
        {getBoardNow && getBoardNow.body}
      </div>
      <div className="buttonBox">
    </div>
  </div>
  <div class="commentBox">
    {getComment && <CommentArea comments={getComment}></CommentArea>}
  </div>
  <div class="footer"></div>
</div>
      </>
    )
  }

export default ContentBoard;
