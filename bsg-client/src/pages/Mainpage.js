import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../component/Nav'
import Modal from '../component/Modal'
const axios = require('axios')


const MainPage = () => {
  
  const [modalNow, setModal] = useState(false)
  const [bestvideos, getvideos] = useState({})

  useEffect(() => {
    getYoutube()
  },[])

  const getYoutube = () => {
    const enco = encodeURI('브실골')
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCkkux5IIRetJ6rFp4edQzomSdZ-8a0e8k&q=${enco}&part=snippet&maxResults=2`)
    .then((res) => {
      let video = {
        video1 : res.data.items[0].id.videoId,
        video2 : res.data.items[1].id.videoId
      }
      getvideos(video)
    })
  }
  
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
  <div className="video1">
  <iframe className="bestVideos"
          src={`https://www.youtube.com/embed/${bestvideos.video1}`} allowFullScreen></iframe>
  </div>
  <div className="video2">
  <iframe className="bestVideos"
          src={`https://www.youtube.com/embed/${bestvideos.video2}`} allowFullScreen></iframe>
  </div>
  <div className="footer">designed by apple in california</div>
  </div>
  </>
  )
}

export default MainPage;