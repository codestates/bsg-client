import React,{ useState, useEffect } from 'react';
import Nav from '../component/Nav'
import { useSelector, useDispatch } from 'react-redux';
import { SetBoardNow } from '../store/action/pagedata'
import { useHistory } from 'react-router'


const UpdateContent = () => {
  
  const history = useHistory();
  const getBoardNow = useSelector((state) => state.pageData.boardNow) || []
  const [title, changeTitle] = useState(getBoardNow.title)
  const [body, changeBody] = useState(getBoardNow.body)
  const dispatch = useDispatch()
 

const confirmUpdate = () => {
  let data = {
    id : getBoardNow.id,
    username : getBoardNow.username,
    title : title,
    body : body
  }
  dispatch(SetBoardNow(data))
  history.push('/contentboard')
}

const cancelUpdate = () => {
  history.push('/contentboard')
}

const changeTitleValue = (e) => {
  changeTitle(e.target.value)
}

const changeBodyValue = (e) => {
  changeBody(e.target.value)
}

  return (
    <>
    <Nav></Nav>
    <div className="Update-content-container">
  <div className="Update-input-container">
    <div className="updateTitle">
      <input name="title" onChange={changeTitleValue} value={title} className="inputUpdateTitle" type="text"></input>
    </div>
    <div className="updateBody">
      <textarea name="body" onChange={changeBodyValue} value={body} className="inputUpdateBody" type ="text"></textarea>
    </div>
    <div className="updateBtnArea">
      <button className="updateBtn" onClick={confirmUpdate}>수정</button>
      <button className="updateBtn" onClick={cancelUpdate}>취소</button>
    </div>
  </div>
  <div className="footer"></div>
</div>
</>
  )
}


export default UpdateContent