import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router'
import Nav from '../component/Nav'
import Modal from '../component/Modal'
import axios from 'axios';
import BoardMapping from '../component/BoardMapping'
import { BrowserRouter, Route, Switch, NavLink, useParams } from 'react-router-dom'

const html = document.querySelector('html')


const MainBoard = () => {
  const [modalNow, setModal] = useState(false)
  const history = useHistory();

  const openModal = () => {
    html.classList.add("stopScroll")
    setModal(true)
  }

  const closeModal = () => {
    html.classList.remove("stopScroll")
    setModal(false)
  }


  const handleWriteBtn = () => history.push('/writeboard')
  const boardList = useSelector((state) => state.pageData.boards.fakeData.boardlist) || []

  
    return(
      <>
    <Modal isOpen={modalNow} closeModal={closeModal}/>

    <Nav openModal={openModal}></Nav>
      
  <div className = 'Mainboard-container'>
        
        {boardList.map(board => <BoardMapping board={board} key = {board.id}><NavLink to={'/contentboard/' + board.id}></NavLink></BoardMapping> )}
        
        <button className = 'MainBoardWriteBtn' onClick={() => handleWriteBtn()}>한마디 하기</button>
        <div className="footer"></div>
  </div>
      </>
    )
}

export default MainBoard;
