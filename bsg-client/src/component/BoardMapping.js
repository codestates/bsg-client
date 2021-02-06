import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router'
import { getBoardNow } from '../store/action/pagedata'


const BoardMapping = () => {

const dispatch = useDispatch()
const [posts, setPosts] = useState([]);

const history = useHistory();

const handleClick = (board) => {
  
  history.push('/contentBoard')
  dispatch(getBoardNow(board))
}

const boardList = useSelector((state) => 
state.pageData.boards.fakeData.boardlist
);

    return(
    <>
     <div className = 'bigPostBox'>
      {boardList.map((board, index) => (
        <div className = 'postBox' onClick={() => handleClick(board)}>
        <div>{board.title}</div>
        <div>{board.body}</div>
        <div>{board.username}</div>
      </div>
      ))}
      </div>
    </>
    )
}

export default BoardMapping;