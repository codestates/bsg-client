import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router'
import Nav from '../component/Nav'
import TextEditor from '../component/TextEditor'
import { postBoard } from '../store/action/pagedata'

const WritePage = () => {
    const history = useHistory();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch();

    const userNow = useSelector((state) =>  state.userData.userNow) || []
    const boardList = useSelector((state) => state.pageData.boards.fakeData.boardlist) || []
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    
    const handleContent = (e) => {
        setContent(e)
    }

    const createBoard = () => {
        console.log(boardList, userNow)
        let data = {
            id : boardList.length + 1,
            username : userNow.username,
            title : title,
            body : content,
        }
        dispatch(postBoard(data))
        setTitle('')
        setContent('')
        history.push('/mainboard')
    }
    const handleCancleBtn = () => history.push('/mainboard')
    

    return (
        <>
        <Nav></Nav>
        <div className="Write-container">
            <div className="WriteBox"></div>
            <input className = 'WriteTitle' placeholder = '제목을 입력하세요' onChange={handleTitle}></input>
            <TextEditor onChangeContent={handleContent} className="WriteinputContent"></TextEditor>
                    <div className="footer"></div>
                        <div className="WriteBtnBox">
                            <button className="WriteBtn" onClick={createBoard}>완료</button>
                            <button className="WriteBtn" onClick={() => handleCancleBtn()}>취소</button>
                            </div>
                         </div>
           
        </>
    )
}

export default WritePage;