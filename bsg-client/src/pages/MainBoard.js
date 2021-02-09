import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router'
import Nav from '../component/Nav'
import Modal from '../component/Modal'
import axios from 'axios';
import BoardMapping from '../component/BoardMapping'
import {  NavLink  } from 'react-router-dom'
import { getBoard } from '../store/action/pagedata'
import { checkLoginAgain } from '../store/action/users'
const html = document.querySelector('html')


const MainBoard = () => {
  const [modalNow, setModal] = useState(false)
  const history = useHistory();
  const dispatch = useDispatch()

  

  const gettingBoard = () => {
     axios.get('https://api.projects1faker.com/getContent')
      .then((res) => {
        dispatch(getBoard(res.data))
      }).catch((err) => {
        throw(err)
      })
    }
  

  const openModal = () => {
    html.classList.add("stopScroll")
    setModal(true)
  }

  const closeModal = () => {
    html.classList.remove("stopScroll")
    setModal(false)
  }


  const handleWriteBtn = () => history.push('/writeboard')
  const boardList = useSelector((state) => state.pageData.boards) || []

  useEffect(() => {
    if(localStorage.getItem('Token')){
      dispatch(checkLoginAgain())
    }
    gettingBoard()
    console.log(localStorage.getItem('Token'))
  },[])
  
    return(
      <>
    <Modal isOpen={modalNow} closeModal={closeModal}/>

    <Nav openModal={openModal}></Nav>
      
  <div className = 'Mainboard-container'>
        
        {boardList.data && boardList.data.map(board => <BoardMapping board={board} key = {board.id}><NavLink to={'/contentboard/' + board.id}></NavLink></BoardMapping> )}
        
        <button className = 'MainBoardWriteBtn' onClick={() => handleWriteBtn()}>한마디 하기</button>
        <div className="footer">
        </div>
  </div>
      </>
    )
}

export default MainBoard;
