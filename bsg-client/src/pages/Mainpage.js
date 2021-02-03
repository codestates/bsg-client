import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../component/Nav'
import Modal from '../component/LoginModal'


const MainPage = () => {
  
  const [modalNow, setModal] = useState(false)
  
  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }
  

  return(
    <>
    <Modal isOpen={modalNow} openModal={openModal} closeModal={closeModal}/>

    <Nav openModal={openModal}></Nav>
    <div className="container">
      <div className="search">
      <input className="searchBar" type="text"></input>
      <button className="searchBtn">검색</button>
    </div>
  <div className="searchData"></div>
  <div className="video1"></div>
  <div className="video2"></div>
  <div className="footer"></div>
  </div>
  </>
  )
}

export default MainPage;