import React, {useState, useEffet } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CommentMapping from './CommentMapping'



const CommentArea = ({comments}) => {

  const tearIcon = {
    'BRONZE' : 'https://ifh.cc/g/SMwWFx.png',
    'SILVER' : 'https://ifh.cc/g/uERo3F.png',
    'GOLD' : 'https://ifh.cc/g/fgbOij.png' 
  }
  
  return (
    <div className="commentContainer">

      <div className="PostCommentArea">
        <input className="InputPostComment"></input>
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