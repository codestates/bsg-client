import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Nav from '../component/Nav'
import Modal from '../component/Modal'
const axios = require('axios')
const html = document.querySelector('html')



const MainPage = () => {

  const [keyword, setkeyword] = useState('')  
  const history = useHistory();
  const [modalNow, setModal] = useState(false)
  const [bestvideos, getvideos] = useState({})
  const [openSearchBox, setOnOff] = useState(false)

  let pageWidth = window.innerWidth
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
    setOnOff(false)
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

  const getSearchData = (e) => {
    setkeyword(e.target.value)
  }

  

  return(
    <>
    <Modal isOpen={modalNow} closeModal={closeModal}/>

    <Nav openModal={openModal}></Nav>
    <div className="MainPageContainer">
      <div className="search">
      <input onChange={getSearchData} className="searchBar" type="text"></input>
      <button onClick={openSearBox} className="searchBtn"><img className = 'searchBtnImg'src = 'https://ifh.cc/g/sZGhwz.png'/> </button>
    </div>  
  {openSearchBox ? <div className="searchData">
    <div className="box">
    <div className="loading"></div>
    </div>
  </div> : null}
  <div className = 'recommendText'>브실골의 위한 추천영상!!</div>
  <div className="video">
  <iframe className="bestVideos"
          src={`https://www.youtube.com/embed/${bestvideos.video1}`} allowFullScreen></iframe>
  
  <iframe className="bestVideos"
          src={`https://www.youtube.com/embed/${bestvideos.video2}`} allowFullScreen></iframe>
  </div>
  <div className="footer">Copyright ⓒ 2021. B.S.G-Land. All rights reserved.<img className='footerImg' src ='https://ifh.cc/g/pBQRcX.png'/></div>
  </div>
  </>
  )
}

export default MainPage;