import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router'
import Nav from '../component/Nav'

const WritePage = () => {
    const history = useHistory();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch();

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    
    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const handleCancleBtn = () => history.push('/mainboard')
    

    return (
        <>
        <Nav></Nav>
            <div className="Main-container">
            <div className="mainBox">
            <div className="title">
            <input className = 'inputTitle' placeholder = '제목을 입력하세요' onChange={handleTitle} value={title}></input>
            </div>
                <div className="contentBox">
                <input className = 'inputContent' placeholder = '내용을 입력하세요' onChange={handleContent} value={content}></input> 
                </div>
                    <div className="buttonBox">
                    <button className = 'submitBtn'>완료</button>
                    <button className = 'cancleBtn' onClick={() => handleCancleBtn()}>취소</button>
                    </div>
            </div>
                    <div class="commentBox">
                    </div>
                    <div class="footer"></div>
            </div>
        </>
    )
}

export default WritePage;