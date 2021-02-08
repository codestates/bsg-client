import React, {useState, useEffet } from 'react'
import { useSelector, useDispatch } from 'react-redux';



const CommentArea = ({comments}) => {

  const isLogin = useSelector((state) => state.userData.isLogin) || false
  const tearIcon = {
    'BRONZE' : 'https://ifh.cc/g/SMwWFx.png',
    'SILVER' : 'https://ifh.cc/g/uERo3F.png',
    'GOLD' : 'https://ifh.cc/g/fgbOij.png' 
  }
  
  return (
    <div className="commentContainer">

      <div className="PostCommentArea">
        {isLogin ? <input placeholder="댓글을 입력해주세요" className="InputPostComment"></input> :
          <input placeholder="댓글을 입력하려면 로그인이 필요합니다" className="InputPostComment" disabled></input>
      }
        <button className="BtnPostComment">Send</button>
        </div>
      <div className="ViewCommentArea">
      {comments && comments.map((comment) => (
      <div className="oneCommentBox">
        <img className="tearIcon" src={tearIcon[comment.tear]}></img>
        <div className="username">{comment.username}</div>
        <div className="comment">{comment.comment}</div>
        <div className="date">{comment.createAt}</div>
        </div>
    ))}
      </div>
      

    </div>
  )
}

export default CommentArea