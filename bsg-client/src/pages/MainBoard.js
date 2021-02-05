import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router'
import Nav from '../component/Nav'
import Modal from '../component/Modal'
import axios from 'axios';
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

  const handleClick = () => history.push('/contentBoard')

  
  
    return(
      <>
    <Modal isOpen={modalNow} closeModal={closeModal}/>

    <Nav openModal={openModal}></Nav>
      
      <container className = 'container'>
      {posts.map((post, index) => {
        <div className = 'postBox'>
        <div onClick={() => handleClick('/contentBoard')}>{post.title}</div>
        <div onClick={() => handleClick('/contentBoard')}>{post.body}</div>
      </div>
      })}
      <div className = 'postBox'>
        <div className = 'title'>Title</div>
        <div>Body</div>
      </div>
      <div className = 'postBox'>
        <div className = 'title'>Title</div>
        <div>Body</div>
      </div>
      <div className = 'postBox'>
        <div className = 'title'>Title</div>
        <div>Body</div>
      </div>
    
  </container>
      </>
    )
}

export default MainBoard;
