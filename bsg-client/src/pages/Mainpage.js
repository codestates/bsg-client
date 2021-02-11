import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Nav from '../component/Nav';
import Modal from '../component/Modal';
import { checkLoginAgain } from '../store/action/users';
const axios = require('axios');
const html = document.querySelector('html');

const MainPage = () => {
  const [keyword, setkeyword] = useState('');
  const history = useHistory();
  const [modalNow, setModal] = useState(false);
  const [bestvideos, getvideos] = useState({});
  const [openSearchBox, setOnOff] = useState(false);
  const [searchData, setSearchData] = useState(null);
  const dispatch = useDispatch();
  let pageWidth = window.innerWidth;
  useEffect(() => {
    if (localStorage.getItem('Token')) {
      // localStorage.clear()
      dispatch(checkLoginAgain());
    }
    getYoutube();
  }, []);

  const tearIcon = {
    IRON: 'https://ifh.cc/g/9zJAdf.png',
    BRONZE: 'https://ifh.cc/g/OtoyU2.png',
    SILVER: 'https://ifh.cc/g/nIcDyS.png',
    GOLD: 'https://ifh.cc/g/ruWbaS.png',
    PLATINUM: 'https://ifh.cc/g/tOK9Km.png',
    DIAMOND: 'https://ifh.cc/g/8qjsyE.png',
    MASTER: 'https://ifh.cc/g/4bCj6b.png',
    GRANDMASTER: 'https://ifh.cc/g/BpbGxY.png',
    CHALLENGER: 'https://ifh.cc/g/RIIP0P.png',
  };

  const tearColor = {
    IRON: '#6A6A6A',
    BRONZE: '#B88C3F',
    SILVER: '#DFDFDF',
    GOLD: '#BEB423',
    PLATINUM: '#18B6C1',
    DIAMOND: '#3862D3',
    MASTER: '#9EB1E6',
    GRANDMASTER: '#FF3333',
    CHALLENGER: '#FAFF00',
  }

  const getYoutube = () => {
    const enco = encodeURI('브실골');
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCkkux5IIRetJ6rFp4edQzomSdZ-8a0e8k&q=${enco}&part=snippet&maxResults=2`,
      )
      .then((res) => {
        let video = {
          video1: res.data.items[0].id.videoId,
          video2: res.data.items[1].id.videoId,
        };
        getvideos(video);
      });
  };

  const openModal = () => {
    setOnOff(false);
    html.classList.add('stopScroll');
    setModal(true);
  };

  const closeModal = () => {
    html.classList.remove('stopScroll');
    setModal(false);
  };

  const openSearBox = (e) => {
    e.preventDefault();
    axios
      .post('https://api.projects1faker.com/getUserRanks', {
        nickname: keyword,
      })
      .then((res) => {
        setSearchData(res.data);
      });
    setOnOff(true);
  };

  const getSearchData = (e) => {
    setkeyword(e.target.value);
  };

  const unrankUser = () => {
    if (searchData.length === 0) {
      return (
        <div className="searchAlready">
          <div className="searchLeft">
            <img className="TearIcon" src='https://ifh.cc/g/AlRymC.png'></img>
          </div>
          <div className="unrankUser">
            <div>랭크게임을 돌리지 않은 유저입니다</div>
          </div>
        </div>
      )
        
        
      
    } else {
      return (
        <div className="searchAlready">
          <div className="searchLeft">
            <img className="TearIcon" src={tearIcon[searchData[0].tier]}></img>
          </div>
          <div className="searchRight">
            <div className="searchTitle">{searchData[0].summonerName}</div>
            <div style={{color:`${tearColor[searchData[0].tier]}`}}>{`${searchData[0].tier} ${searchData[0].rank} ${searchData[0].leaguePoints} LP `}</div>
            <div>{`${searchData[0].wins} 승    ${searchData[0].losses} 패`}</div>
            <div>
              {'승률   ' +
                (
                  (searchData[0].wins /
                    (searchData[0].wins + searchData[0].losses)) *
                  100
                ).toFixed(1) + '%'}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Modal isOpen={modalNow} openModal={openModal} closeModal={closeModal} />

      <Nav openModal={openModal}></Nav>
      <div className="MainPageContainer">
        <div className="search">
          <form className="search" onSubmit={openSearBox}>
          <input
            onChange={getSearchData}
            className="searchBar"
            type="text"
          ></input>
          <button onClick={openSearBox} className="searchBtn">
            <img className="searchBtnImg" src="https://ifh.cc/g/sZGhwz.png" />{' '}
          </button>
          </form>
        </div>
        {openSearchBox ? (
          <div className="searchData">
            <div className="searchMainBox">
              {searchData !== null ? (
                unrankUser()
              ) : (
                <div className="loading"></div>
              )}
            </div>
          </div>
        ) : null}
        <div className="video">
          <iframe
            className="bestVideos"
            src={`https://www.youtube.com/embed/${bestvideos.video1}`}
            allowFullScreen
          ></iframe>

          <iframe
            className="bestVideos"
            src={`https://www.youtube.com/embed/${bestvideos.video2}`}
            allowFullScreen
          ></iframe>
        </div>
        <div className="footer">
          <div className="copyright">
          Copyright ⓒ 2021. B.S.G-Land. All rights reserved.
          </div>
          <div className = 'nameText'>
          <div><i class="far fa-address-card"></i> Yoo Jae Woo</div>
          <div><i class="far fa-address-card"></i> Kim Yong Ho</div>
          <div><i class="fas fa-address-card"></i> Park Jun Seok</div>
          <div><i class="fas fa-address-card"></i> Lee Sang Cheol</div>
          
          </div>
         
        </div>
      </div>
    </>
  );
};

export default MainPage;
