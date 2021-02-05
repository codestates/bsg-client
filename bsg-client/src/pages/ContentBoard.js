import React,{ useState, useEffect } from 'react';
import Nav from '../component/Nav'
import Modal from '../component/Modal'
import { useHistory } from 'react-router'
const html = document.querySelector('html')


const ContentBoard = () => {

    return( 
      <>
      <Nav></Nav>
      <div className="Main-container">
      <div className="mainBox">
      <div className="title"></div>
      <div className="contentBox">
      </div>
      <div className="buttonBox">
      <button type="button">글쓰기</button>
    </div>
  </div>
  <div class="commentBox"></div>
  <div class="footer"></div>
</div>
      </>
    )
  }

export default ContentBoard;
