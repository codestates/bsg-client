import React, { useState, useEffect } from 'react';
import Nav from '../component/Nav';
import Modal from '../component/Modal';
import { useHistory } from 'react-router';
import CommentArea from '../component/CommentArea';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { checkLoginAgain } from '../store/action/users';
import { getBoard, gettingComment } from '../store/action/pagedata';
import axios from 'axios';
const html = document.querySelector('html');

const ContentBoard = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [modalNow, setModal] = useState(false);

  // const getAllBoardList = useSelector((state) => state.pageData.boards.data) || [];

  const gettingBoard = () => {
    axios
      .get('https://api.projects1faker.com/getContent')
      .then((res) => {
        dispatch(getBoard(res.data));
      })
      .catch((err) => {
        throw err;
      });
  };

  const openModal = () => {
    html.classList.add('stopScroll');
    setModal(true);
  };

  const closeModal = () => {
    html.classList.remove('stopScroll');
    setModal(false);
  };

  const history = useHistory();
  const userNow = useSelector((state) => state.userData.userNow) || [];

  const goToUpdate = () => {
    localStorage.setItem('UpdateDataId', Board[0].id);
    localStorage.setItem('UpdateDataTitle', Board[0].title);
    localStorage.setItem('UpdateDataBody', Board[0].body);
    localStorage.setItem('UpdateDataUsername', Board[0].username);
    history.push('/updatecontent/' + Board[0].id);
  };

  useEffect(() => {
    console.log('보드', Board[0], '유저', userNow);
    if (localStorage.getItem('Token')) {
      dispatch(checkLoginAgain());
    }
    dispatch(gettingComment());
    gettingBoard();
  }, []);

  const deleteContent = () => {
    axios.post('https://api.projects1faker.com/deleteContent', {
      contentId: Board[0].id,
      id: userNow.id,
    }).then(() => {
      history.push('/mainboard');
    })
    
  };

  const getComment = useSelector((state) => state.pageData.comments.data) || [];
  const Comment = getComment.filter(
    (comment) => comment.contentid === Number(params.id),
  );
  const getAllBoard = useSelector((state) => state.pageData.boards.data) || [];
  const Board =
    getAllBoard.filter((board) => board.id === Number(params.id)) || [];

  return (
    <div className="content-board-container">
      <Modal isOpen={modalNow} closeModal={closeModal} />
      <Nav openModal={openModal}></Nav>
      
        <div className="mainBox">
          <div className="title">{Board[0] && Board[0].title}</div>
          <div className="contentBox">
          {Board[0] && userNow.nickname === Board[0].user.nickname ? (
            <div className="controlbtnDiv">
              <button onClick={goToUpdate} className="controlbtn">
                수정
              </button>
              <button onClick={deleteContent} className="controlbtn">
                삭제
              </button>
            </div>
          ) : null}
            {Board[0] && ReactHtmlParser(Board[0].body)}
          </div>
         
        </div>
        <div class="commentBox">
          {getComment && (
            <CommentArea board={Board[0]} comments={Comment}></CommentArea>
          )}
        </div>
        
        <div className="footer">
      Copyright ⓒ 2021. B.S.G-Land. All rights reserved.
      <div className = 'nameText'>
          <p>Yoo Jae Woo</p>
          <p>Park Jun Seok</p>
          <p>Lee Sang Cheol</p>
          <p>Kim Yong Ho</p>
          </div>
  <a href = 'https://www.twitch.tv/directory/game/League%20of%20Legends' target = '_blank'>
  <img className="TWCICON"  src ='https://ifh.cc/g/wZvQCi.png'/>
  </a>
  
  <a href = 'http://www.afreecatv.com/?hash=game' target = '_blank'>
  <img  src ='https://ifh.cc/g/sSPrnP.png'/>
  </a>

  <a href = 'https://www.youtube.com/' target = '_blank'>
  <img  src ='https://ifh.cc/g/5GjBXq.png'/>
  </a>
        </div>
      </div>
  );
};

export default ContentBoard;
