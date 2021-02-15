import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router'
import Nav from '../component/Nav'
import TextEditor from '../component/TextEditor'
import { posttingContent } from '../store/action/pagedata'
import { checkLoginAgain } from '../store/action/users'
import axios from 'axios';
const WritePage = () => {
    const history = useHistory();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch();

    const userNow = useSelector((state) =>  state.userData.userNow) || []
    // const boardList = useSelector((state) => state.pageData.boards.fakeData.boardlist) || []

    useEffect(() => {
        if(localStorage.getItem('Token')){
          dispatch(checkLoginAgain())
        }
      },[])

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    
    const handleContent = (e) => {
        setContent(e)
    }

    const createBoard = () => {

        let data = {
            userid : userNow.id,
            username : userNow.nickname,
            title : title,
            body : content,
            tier : 'BRONZE'
        }
        dispatch(posttingContent(data))
        setTitle('')
        setContent('')
        setTimeout(() => {
        history.push('/mainboard')
        }, 100)
        
    }
    const handleCancleBtn = () => history.push('/mainboard')
    

    return (
        <>
        <Nav></Nav>
        <div className="Write-container">
            <div className="WriteBox"></div>
            <input className = 'WriteTitle' maxlength="10" placeholder = '제목을 입력하세요 (10자 제한)' onChange={handleTitle}></input>
            <TextEditor onChangeContent={handleContent} className="WriteinputContent"></TextEditor>
                    <div className="footer"></div>
                        <div className="WriteBtnBox">
                            <button className="WriteBtn" onClick={createBoard}>완료</button>
                            <button className="WriteBtn" onClick={() => handleCancleBtn()}>취소</button>
                            </div>
                            <div className="footer">
          Copyright ⓒ 2021. B.S.G-Land. All rights reserved
        </div>
        </div>
           
        </>
    )
}

export default WritePage;