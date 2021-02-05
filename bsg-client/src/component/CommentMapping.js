import React, {useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';



const CommentMapping = ({comments}) => {

  const tearIcon = {
    'BRONZE' : 'https://ifh.cc/g/J7NWWv.png',
    'SILVER' : 'https://ifh.cc/g/fXVsXv.png',
    'GOLD' : 'https://ifh.cc/g/cpYqCM.png' 
  }
  
  useEffect(() => {
    console.log(comments)
  },[])

  return (
    <>
    {comments && comments.map((comment) => (
      <div className="oneCommentBox">
        <img src={tearIcon[comment.tear]}></img>
        <div>{comment.useranme}</div>
        <div>{comment.comment}</div>
        <div>{comment.createAt}</div>
        </div>
    ))}
    </>
  )
}


export default CommentMapping;