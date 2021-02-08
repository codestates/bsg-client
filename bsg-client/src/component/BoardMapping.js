import React from 'react';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router'
import ReactHtmlParser from 'react-html-parser'

const BoardMapping = () => {


const history = useHistory();

window.scrollY = function() { 
  console.log(window.scrollY) 
}

const handleClick = (board) => {
  
  history.push('/contentBoard/' + board.id)
  window.scrollTo({top:0}) // 컨텐츠를 선택했을때 스크롤을 맨위로 올려줌
}

const boardList = useSelector((state) => state.pageData.boards.fakeData.boardlist) || []

    return(
    <>
     <div className = 'bigPostBox'>
      {boardList.map((board, index) => (
        <div key={board.id} className = 'postBox' onClick={() => handleClick(board)}>
        <div className="onePostBoxTitle">{board.title}</div>
        <div>{ReactHtmlParser(board.body)}</div>
        <div>{board.username}</div>
      </div>
      ))}
      </div>
    </>
    )
}

export default BoardMapping;