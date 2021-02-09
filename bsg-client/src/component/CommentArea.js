import React, {useState, useEffet } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { posttingComment } from '../store/action/pagedata'
const axios = require('axios')

const CommentArea = ({board , comments}) => {

  const isLogin = useSelector((state) => state.userData.isLogin) || false
  const userNow = useSelector((state) => state.userData)
  const [postComment, setPostComment] = useState('')
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
  const setPostCommnetNow = (e) => {
    setPostComment(e.target.value)
  }

  const postCommentNow = () => {
    axios.post('https://api.projects1faker.com/postComment',{
      contentid : board.id,
      tier : userNow.dataUserNow.tier,
      comment : postComment,
      userid : userNow.userNow.userid,
      nickname : userNow.userNow.nickname
    })
  }
  
  return (
    <div className="commentContainer">

      <div className="PostCommentArea">
        {isLogin ? <input placeholder="댓글을 입력해주세요" className="InputPostComment" onChange={setPostCommnetNow}></input> :
          <input placeholder="댓글을 입력하려면 로그인이 필요합니다" className="InputPostComment" disabled></input>
      }
        <button onClick={postCommentNow} className="BtnPostComment">Send</button>
        </div>
      <div className="ViewCommentArea">
      {comments && comments.map((comment) => (
      <div className="oneCommentBox">
        <div className="commentLeft">
        <img className="tearIcon" src={tearIcon[comment.tear]}></img>
        <div className="username">{comment.username}</div>
        </div>
       <div className="commentRight">
        <div className="comment">{comment.comment}</div>
        <div className="commentRightRight">
        <div className="date">{comment.createAt}</div>
        {userNow.username === comment.username ? <button style={{color : 'black', fontSize: '25px'}}>&times;</button> : null}
        </div>
        </div>
        </div>
        
    ))}
      </div>
      

    </div>
  )
}

export default CommentArea