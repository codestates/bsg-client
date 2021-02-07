import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router'
import { SetBoardNow } from '../store/action/pagedata'


const BoardMapping = () => {

const dispatch = useDispatch()

const history = useHistory();

window.onhashchange = function() { 
  console.log('page Changed') 
}

const handleClick = (board) => {
  
  history.push('/contentBoard')
  dispatch(SetBoardNow(board))
}

const boardList = useSelector((state) => state.pageData.boards.fakeData.boardlist) || []

    return(
    <>
     <div className = 'bigPostBox'>
      {boardList.map((board, index) => (
        <div className = 'postBox' onClick={() => handleClick(board)}>
        <div className="onePostBoxTitle">{board.title}</div>
        <div>{board.body}</div>
        <div>{board.username}</div>
      </div>
      ))}
      </div>
    </>
    )
}

export default BoardMapping;