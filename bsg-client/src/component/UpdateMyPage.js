import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../store/action/users'
import { useHistory } from 'react-router'
import axios from 'axios'


const UpdateMyPage = ({doUpdate, cancelUpdate}) => { 

  const dispatch = useDispatch()
  const history = useHistory();
  const tearIcon = {
    'IRON' : 'https://ifh.cc/g/9zJAdf.png',
    'BRONZE' : 'https://ifh.cc/g/OtoyU2.png',
    'SILVER' : 'https://ifh.cc/g/nIcDyS.png',
    'GOLD' : 'https://ifh.cc/g/ruWbaS.png',
    'PLATINUM' : 'https://ifh.cc/g/tOK9Km.png',
    'DIAMOND' : 'https://ifh.cc/g/8qjsyE.png',
    'MASTER' : 'https://ifh.cc/g/4bCj6b.png',
    'GRANDMASTER' : 'https://ifh.cc/g/BpbGxY.png',
    'CHALLENGER' : 'https://ifh.cc/g/RIIP0P.png'
  }
  const userNow = useSelector((state) => state.userData)
  const [beforeName, afterName] = useState(userNow.userNow.nickname)
  const [beforePass, afterPass] = useState('')
  const [error, setError] = useState('')
  const updateUserName = (e) => {
    afterName(e.target.value)
  }
  const updateUserPass = (e) => {
    afterPass(e.target.value)
  }

  const clickUpdateBtn = () => {
    if(beforeName.length === 0 || beforePass.length === 0){
      return setError('공백으로는 변경이 불가합니다')
    } else if(beforePass.length < 8){
      return setError('비밀번호는 8자리 이상이여야 합니다')
    }

    axios.post('https://api.projects1faker.com/updateUserInfo',{
      id : userNow.userNow.id,
      nickname : beforeName,
      password : beforePass
    }).then((res) => {
      history.push('/mainpage')
    }).then(() => {
      dispatch(logOutUser())
    }).catch((err) => {
      return setError('해당 닉네임은 이미 다른 유저가 사용 중 입니다.')
    })
  }

  return (
<div className="innerMypage">
    <h1 className="Title">마이페이지</h1>
    <img className="TearIcon" src={tearIcon[userNow.dataUserNow.tier]}></img>
    <div className="userData">
    <div className="updateData">
        <div className="label1">Username:</div>
        <input onChange={updateUserName} value={beforeName} className="input1" type="text"></input>
        <div className="label2">Password:</div>
        <input onChange={updateUserPass} className="input2" type="password"></input>
        </div>
        {error ? <div className="errorMessageDiv">{error}</div> : null}
        </div>
    <button onClick={clickUpdateBtn} className="updateUserBtn">수정</button>
    <button onClick={() => {cancelUpdate()}} className="deleteUserBtn">취소</button>
</div>
  )
}

export default UpdateMyPage;