import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signingUpUser } from '../store/action/users';



const LoginModal = ({closeModal, setEmailfromInput, setPasswordfromInput, toSignUp, signInUser, isSignUp, offSignUp}) => {
  
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [comPass, setComPass] = useState('')
  const [username, setUsername] = useState('')

  const clearInput = () => {
    setEmail('')
    setPass('')
    setComPass('')
    setUsername('')
  }

  const emailSignUp = (e) => {
    setEmail(e.target.value)
  }

  const passSignUp = (e) => {
    setPass(e.target.value)
  }

  const compassSignUp = (e) => {
    setComPass(e.target.value)
  }

  const usernameSignUp = (e) => {
    setUsername(e.target.value)
  }

  const postSignUp = () => {
    let userdata = {
      email : email,
      password : pass,
      username : username
    }
    dispatch(signingUpUser(userdata))
    clearInput()
    offSignUp()
  }

  const offAllMode = () => {
    clearInput()
    offSignUp()
    closeModal()
  }

  return ( 
    <>{!isSignUp ? 
      <div className="modalOuter" onClick={offAllMode}>
          <div className="insideModal" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={offAllMode} style={{color : 'white', fontSize: '40px'}}>&times;</span>
            <div className="modalContents">
            <img src="https://ifh.cc/g/XpHtKW.png"></img> 
              <input onChange={(e) => setEmailfromInput(e)} placeholder="Email" className="typeBar" type='email'></input>
              <input onChange={(e) => setPasswordfromInput(e)} placeholder="Password" className="typeBar" type="password"></input>
              <button className="btnSignIn" onClick={() => {signInUser()}}>로그인</button>
              <button className="btnSignUp" onClick={() => {toSignUp()}}>회원가입</button>
            </div>
          </div>
      </div> 
      : 
      <div className="modalOuter" onClick={offAllMode}>
      <div className="insideModal" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={offAllMode} style={{color : 'white', fontSize: '40px'}}>&times;</span>
        <div className="modalContents">
        <img src="https://ifh.cc/g/XpHtKW.png"></img> 
          <input onChange={(e) => emailSignUp(e)} placeholder="Email" className="typeBar" type='email'></input>
          <input onChange={(e) => passSignUp(e)} placeholder="Password" className="typeBar" type="password"></input>
          <input onChange={(e) => compassSignUp(e)} placeholder="Comfirm Password" className="typeBar" type="password"></input>
          <input onChange={(e) => usernameSignUp(e)} placeholder="Riot Username" className="typeBar" type="text"></input>
          <button className="btnSignIn" onClick={() => {postSignUp()}}>회원가입</button>
        </div>
      </div>
  </div> 
    }
    </>
    )
  }
  
  export default LoginModal