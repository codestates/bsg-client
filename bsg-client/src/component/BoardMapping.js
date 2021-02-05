import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router'


const BoardMapping = ({children}) => {

const [posts, setPosts] = useState([]);

const history = useHistory();

const handleClick = () => history.push('/contentBoard')

const boardList = useSelector((state) => 
state.pageData.boards.fakeData.boardlist
);

    return(
    <>
     <div className = 'bigPostBox'>
      {boardList.map((board, index) => (
        <div className = 'postBox' onClick={() => handleClick()}>
        <div>{board.title}</div>
        <div>{board.body}</div>
        {children}
      </div>
      ))}
      </div>
    </>
    )
}

export default BoardMapping;