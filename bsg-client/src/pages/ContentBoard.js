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
      <div className="Main-container">
      <div className="mainBox">
      <div className="title"></div>
      <div className="contentBox">
      </div>
      <div className="buttonBox">
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
