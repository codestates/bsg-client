import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router'
import Nav from '../component/Nav'
import Modal from '../component/Modal'
import axios from 'axios';
import BoardMapping from '../component/BoardMapping'
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
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("")
  //     .then(({ data }) => setPosts(data));
  // }, []);

  const boardList = useSelector((state) => 
    state.pageData.boards.fakeData.boardlist
  );

  const handleClick = () => history.push('/contentBoard')

  
  
    return(
      <>
    <Modal isOpen={modalNow} closeModal={closeModal}/>

    <Nav openModal={openModal}></Nav>
      
  <div className = 'Mainboard-container'>
        <BoardMapping></BoardMapping>
  </div>
      </>
    )
}

export default MainBoard;