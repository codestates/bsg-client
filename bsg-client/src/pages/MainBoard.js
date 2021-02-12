import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Nav from "../component/Nav";
import Modal from "../component/Modal";
import axios from "axios";
import BoardMapping from "../component/BoardMapping";
import { NavLink } from "react-router-dom";
import { getBoard, gettingComment } from "../store/action/pagedata";
import { checkLoginAgain } from "../store/action/users";
const html = document.querySelector("html");

const MainBoard = () => {
  const [modalNow, setModal] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.userData.isLogin) || false;
  const userNow = useSelector((state) => state.userData);
  const getOut = ['PLATINUM', 'DIAMOND', 'MASTER', 'GRANDMASTER', 'CHALLENGER'];

  const gettingBoard = () => {
    axios
      .get("https://api.projects1faker.com/getContent")
      .then(res => {
        dispatch(getBoard(res.data));
      })
      .catch(err => {
        throw err;
      });
  };

  const openModal = () => {
    html.classList.add("stopScroll");
    setModal(true);
  };

  const closeModal = () => {
    html.classList.remove("stopScroll");
    setModal(false);
  };

  const handleWriteBtn = () => history.push("/writeboard");
  const boardList = useSelector(state => state.pageData.boards) || [];

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      dispatch(checkLoginAgain());
    }
    gettingBoard();
    dispatch(gettingComment())
  }, []);

  const filterUser = () => {
    if(isLogin === false) {
      return (
        <button className="MainBoardWriteBtn">
          작성시 로그인이 필요합니다
        </button>
      )
    } else if(getOut.includes(localStorage.getItem('UserData')) === false){
      return (
        <button className="MainBoardWriteBtn" onClick={() => handleWriteBtn()}>
          B.S.G Talk
        </button>
      )
    } else {
      return (
        <button  className="MainBoardWriteBtn">
          해당 티어는 작성이 불가합니다
        </button>
      )
    }
  }

  return (
    <>
      <Modal isOpen={modalNow} closeModal={closeModal} />

      <Nav openModal={openModal}></Nav>

      <div className="Mainboard-container">
        {boardList.data &&
          boardList.data.map(board => (
            <BoardMapping board={board} key={board.id}>
              <NavLink to={"/contentboard/" + board.id}></NavLink>
            </BoardMapping>
          ))}
          {userNow && filterUser()}
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

export default MainBoard;
