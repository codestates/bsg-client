import { nominalTypeHack } from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { posttingComment } from '../store/action/pagedata';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

const axios = require('axios');

const CommentArea = ({ board, comments }) => {
  const history = useHistory()
  const params = useParams()
  const isLogin = useSelector((state) => state.userData.isLogin) || false;
  const userNow = useSelector((state) => state.userData);
  const [postComment, setPostComment] = useState('');
  const tearIcon = {
    IRON: 'https://ifh.cc/g/9zJAdf.png',
    BRONZE: 'https://ifh.cc/g/OtoyU2.png',
    SILVER: 'https://ifh.cc/g/nIcDyS.png',
    GOLD: 'https://ifh.cc/g/ruWbaS.png',
    PLATINUM: 'https://ifh.cc/g/tOK9Km.png',
    DIAMOND: 'https://ifh.cc/g/8qjsyE.png',
    MASTER: 'https://ifh.cc/g/4bCj6b.png',
    GRANDMASTER: 'https://ifh.cc/g/BpbGxY.png',
    CHALLENGER: 'https://ifh.cc/g/RIIP0P.png',
  };
  const getOut = ['PLATINUM', 'DIAMOND', 'MASTER', 'GRANDMASTER', 'CHALLENGER'];

  const filterUser = (tier) => {
    if(isLogin === false){
      return (
        <input
          placeholder="댓글을 입력하려면 로그인이 필요합니다"
          className="InputPostComment"
          disabled
        ></input>
      )
    }else if(getOut.includes(localStorage.getItem('UserData')) === false){
      return (
      <input
        placeholder="댓글을 입력해주세요"
        className="InputPostComment"
        onChange={setPostCommnetNow}
      ></input>
      )
    }
    return (
      <input
        placeholder="해당 티어는 댓글 작성이 불가합니다"
        className="InputPostComment"
        disabled
      ></input>
    )
  }
  const setPostCommnetNow = (e) => {
    setPostComment(e.target.value);
  };

  const postCommentNow = () => {
    if(postComment.length === 0) {
      return
    }

    axios.post('https://api.projects1faker.com/postComment', {
      contentid: board.id,
      tier: userNow.dataUserNow.tier,
      comment: postComment,
      userid: userNow.userNow.userid,
      nickname: userNow.userNow.nickname,
    }).then(() => {
      history.go(0);
    })
    
  };
  const deleteMyComment = (id) => {
    axios.post('https://api.projects1faker.com/deleteComment', {
      commentId: id
    }).then(() => {
      history.go(0);
    })
  };

  return (
    <div className="commentContainer">
      <div className="PostCommentArea">
        {filterUser()}
        <button onClick={postCommentNow} className="BtnPostComment">
          Send
        </button>
      </div>
      <div className="ViewCommentArea">
        {comments &&
          comments.map((comment) => (
            <div className="oneCommentBox">
              <div className="commentLeft">
                <img className="tearIcon" src={tearIcon[comment.tier]}></img>
                <div className="username">{comment.nickname}</div>
              </div>
              <div className="commentRight">
                <div className="comment">{comment.comment}</div>
                <div className="commentRightRight">
                  <div className="date">{comment.createdAt.slice(0,10)}</div>
                  {userNow.userNow && userNow.userNow.nickname === comment.nickname ? (
                    <div
                      onClick={() => {
                        deleteMyComment(comment.id);
                      }}
                      style={{ color: 'black', fontSize: '15px', backgroundColor : 'rgba(255, 255, 255, 0)', border : 'none', cursor: 'pointer'}}
                    >
                      &times;
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentArea;
