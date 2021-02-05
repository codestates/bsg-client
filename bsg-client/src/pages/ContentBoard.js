import React,{ useState, useEffect } from 'react';
import Nav from '../component/Nav'
import { useHistory } from 'react-router'
import CommentArea from '../component/CommentArea'
import { useSelector, useDispatch } from 'react-redux';

const ContentBoard = () => {

    const getComment = useSelector((state) => state.pageData.comments.fakeData.commentList)
    return( 
      <>
      <Nav></Nav>
      <div class="grid-container">
  <div class="mainBox">
    <div class="title"></div>
    <div class="contentBox"></div>
    <div class="buttonBox">
      <button type="button">글쓰기</button>
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
