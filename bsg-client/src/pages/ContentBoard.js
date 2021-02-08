import React,{ useState, useEffect } from 'react';
import Nav from '../component/Nav'
import Modal from '../component/Modal'
import { useHistory } from 'react-router'
import CommentArea from '../component/CommentArea'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
const html = document.querySelector('html')

const ContentBoard = () => {
  const params = useParams()

    const [modalNow, setModal] = useState(false)
    
    const getAllBoardList = useSelector((state) => state.pageData.boards.fakeData.boardlist) || [];

    const Board = getAllBoardList.filter((board) => board.id === Number(params.id))


    useEffect(() => {
      console.log(Board)
    })
    const openModal = () => {
    html.classList.add("stopScroll")
    setModal(true)
   }

    const closeModal = () => {
    html.classList.remove("stopScroll")
    setModal(false)
    }

    const history = useHistory();
    const userNow = useSelector((state) =>  state.userData.userNow) || []
    // const getBoardNow = useSelector((state) => state.pageData.boardNow) || []
    const getComment = useSelector((state) => state.pageData.comments.fakeData.commentList) || []

    const goToUpdate = () => {
      history.push('/updatecontent')
    }

    return( 
      <>
      <Modal isOpen={modalNow} closeModal={closeModal}/>
      <Nav openModal={openModal}></Nav>
      <div className="content-board-container">
      <div className="mainBox">
      <div className="title">
        {Board[0] && Board[0].title}
      </div>
      {Board[0] && userNow.username === Board[0].username ?  
      <div className="controlbtnDiv">
        <button onClick={goToUpdate} className="controlbtn">수정</button>
        <button className="controlbtn">삭제</button>
      </div> : null}
     
      <div className="contentBox">
        {Board[0] && Board[0].body}
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
