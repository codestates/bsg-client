import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Nav from '../component/Nav'
import Modal from '../component/Modal'
const axios = require('axios')
const html = document.querySelector('html')



const MainPage = () => {
  
  const history = useHistory();
  const [modalNow, setModal] = useState(false)
  const [bestvideos, getvideos] = useState({})
  const [openSearchBox, setOnOff] = useState(false)

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

  const clickLogo = () => {
    history.push('/')
  }
  
  const openModal = () => {
    html.classList.add("stopScroll")
    setModal(true)
  }

  const closeModal = () => {
    html.classList.remove("stopScroll")
    setModal(false)
  }

  const openSearBox = () => {
    setOnOff(true)
  }
  

  return(
    <>
    <Modal isOpen={modalNow} closeModal={closeModal}/>

    <Nav openModal={openModal}></Nav>
    <div className="MainPageContainer">
      <div className="search">
      <input className="searchBar" type="text"></input>
      <button onClick={openSearBox} className="searchBtn">검색</button>
    </div>
    <div className="mainlogo">
      <img onClick={clickLogo} src="https://ifh.cc/g/y3lzgX.png"/>
      </div>
  {openSearchBox ? <div className="searchData">
    <div className="box">
    <div className="loading"></div>
    </div>
  </div> : null}
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