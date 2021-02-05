import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../component/Nav'
import Modal from '../component/Modal'
import axios from 'axios';

const MainBoard = () => {
  const [modalNow, setModal] = useState(false)
  
  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("")
      .then(({ data }) => setPosts(data));
  }, []);
  
    return(
      <>
      <Modal isOpen={modalNow} openModal={openModal} closeModal={closeModal}/>
      <Nav openModal={openModal}></Nav>
      
      <container className = 'container'>
      {posts.map((post, index) => {
        <div className = 'postBox'>
        {/* <div onClick={() => handleClick('데이터')}>{post.title}</div>
        <div onClick={() => handleClick('데이터')}>{post.body}</div> */}
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
