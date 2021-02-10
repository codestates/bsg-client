import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Nav from '../component/Nav'
import Modal from '../component/Modal'
import { checkLoginAgain } from '../store/action/users'
const axios = require('axios')
const html = document.querySelector('html')



const MainPage = () => {

  const [keyword, setkeyword] = useState('')  
  const history = useHistory();
  const [modalNow, setModal] = useState(false)
  const [bestvideos, getvideos] = useState({})
  const [openSearchBox, setOnOff] = useState(false)
  const [searchData, setSearchData] = useState([])
  const dispatch = useDispatch()
  let pageWidth = window.innerWidth
  useEffect(() => {
    console.log(localStorage.getItem('Token'))
    if(localStorage.getItem('Token')){
      // localStorage.clear()
      dispatch(checkLoginAgain())
    }
    getYoutube()
  },[])

  const tearIcon = {
    'IRON' : 'https://ifh.cc/g/9zJAdf.png',
    'BRONZE' : 'https://ifh.cc/g/OtoyU2.png',
    'SILVER' : 'https://ifh.cc/g/nIcDyS.png',
    'GOLD' : 'https://ifh.cc/g/ruWbaS.png',
    'PLATINUM' : 'https://ifh.cc/g/tOK9Km.png',
    'DIAMOND' : 'https://ifh.cc/g/8qjsyE.png',
    'MASTER' : 'https://ifh.cc/g/4bCj6b.png',
    'GRANDMASTER' : 'https://ifh.cc/g/BpbGxY.png',
    'CHALLENGER' : 'https://ifh.cc/g/RIIP0P.png'
  }

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
    setOnOff(false)
    html.classList.add("stopScroll")
    setModal(true)
  }

  const closeModal = () => {
    html.classList.remove("stopScroll")
    setModal(false)
  }

  const openSearBox = () => {
    axios.post('https://api.projects1faker.com/getUserRanks',{
     nickname : keyword
    }).then((res) => {
      console.log(res.data[0])
      setSearchData(res.data)
    })
    setOnOff(true)
  }

  const getSearchData = (e) => {
    setkeyword(e.target.value)
  }

  
  return(
    <>
    <Modal isOpen={modalNow} openModal={openModal} closeModal={closeModal}/>

    <Nav openModal={openModal}></Nav>
    <div className="MainPageContainer">
      <div className="search">
      <input onChange={getSearchData} className="searchBar" type="text"></input>
      <button onClick={openSearBox} className="searchBtn"><img className = 'searchBtnImg'src = 'https://ifh.cc/g/sZGhwz.png'/> </button>
    </div>  
  {openSearchBox ? <div className="searchData">
    <div className="searchMainBox">{ searchData.length > 0 ? 
    <div className="searchAlready">
      <img className="TearIcon" src={tearIcon[searchData[0].tier]}></img>
      <div>{searchData[0].summonerName}</div>
      <div>{`승   ${searchData[0].wins}`}</div>
      <div>{`패   ${searchData[0].losses}`}</div>
      <div>{'승률   ' +((searchData[0].wins / (searchData[0].wins + searchData[0].losses)) * 100).toFixed(1) }</div>
    </div> : <div className="loading"></div>
    }
    
    </div>
  </div> : null}
  <div className="video">
  <iframe className="bestVideos"
          src={`https://www.youtube.com/embed/${bestvideos.video1}`} allowFullScreen></iframe>
  
  <iframe className="bestVideos"
          src={`https://www.youtube.com/embed/${bestvideos.video2}`} allowFullScreen></iframe>
  </div>
  <div className="footer">

  Copyright ⓒ 2021. B.S.G-Land. All rights reserved.
  <img className='footerImg' src ='https://ifh.cc/g/Kz5AUr.png'/>
  
  <a href = 'https://www.twitch.tv/directory/game/League%20of%20Legends' target = '_blank'>
  <img className='twitchImg' src ='https://ifh.cc/g/wZvQCi.png'/>
  </a>
  
  <a href = 'http://www.afreecatv.com/?hash=game' target = '_blank'>
  <img className='afreecaImg' src ='https://ifh.cc/g/sSPrnP.png'/>
  </a>

  <a href = 'https://www.youtube.com/' target = '_blank'>
  <img className='youtubeImg' src ='https://ifh.cc/g/5GjBXq.png'/>
  </a>

  </div>
  </div>
  </>
  )
}

export default MainPage;