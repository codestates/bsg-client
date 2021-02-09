import React,{ useState, useEffect } from 'react';
import Nav from '../component/Nav'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router'
import TextEditor from '../component/TextEditor'
import { useParams } from 'react-router-dom'
import { checkLoginAgain } from '../store/action/users'
import { getBoard } from '../store/action/pagedata'
import axios from 'axios';


const UpdateContent = () => {
  
  const params = useParams()
  const history = useHistory();
  const getAllBoardList = useSelector((state) => state.pageData.boards.data) || [];
  const Board = getAllBoardList.filter((board) => board.id === Number(params.id))
  const [title, changeTitle] = useState(localStorage.getItem("UpdateDataTitle"))
  const [body, changeBody] = useState(localStorage.getItem("UpdateDataBody"))
  const dispatch = useDispatch()

  useEffect(() => {

    if(localStorage.getItem('Token')){
      dispatch(checkLoginAgain())
    }
    gettingBoard()
  },[])



  const gettingBoard = () => {
    axios.get('https://api.projects1faker.com/getContent')
     .then((res) => {
       dispatch(getBoard(res.data))
     }).catch((err) => {
       throw(err)
     })
   }
  
  

  

const confirmUpdate = () => {
  let data = {
    id : localStorage.getItem("UpdateDataId"),
    username : localStorage.getItem("UpdateDataUsername"),
    title : title,
    body : body
  }
  // dispatch(SetBoardNow(data))
  history.push('/contentboard/' + Board[0].id)
}

const cancelUpdate = () => {
  history.push('/contentboard')
}

const changeTitleValue = (e) => {
  console.log(e)
  changeTitle(e.target.value)
}

const changeBodyValue = (data) => {
  changeBody(data)
}

  return (
    <>
    <Nav></Nav>
    <div className="Update-content-container">
  <div className="Update-input-container">
      <input className="updateTitle"  name="title" onChange={changeTitleValue} value={title} type="text"></input>
    <div className="updateBody">
    <TextEditor onChangeContent={changeBodyValue} SelectedBoard={Board}></TextEditor>
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