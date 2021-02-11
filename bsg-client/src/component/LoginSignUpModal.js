import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signingUpUser } from '../store/action/users';
const axios = require('axios')


const LoginModal = ({closeModal, setEmailfromInput, setPasswordfromInput, toSignUp, signInUser, isSignUp, offSignUp, loginError ,SignInEmail, SignInPassword, SignInSetEmail, SignInSetPassword}) => {
  
  const dispatch = useDispatch()
  let pageWidth = window.innerWidth

  const [SignUpError, setSignUpError] = useState('')
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
    if(email.length === 0 || pass.length === 0 || username.length === 0){
      
      return setSignUpError('공백이 있습니다')
    } else if(pass !== comPass){
      
      return setSignUpError('비밀번호가 일치 하지 않습니다')
    } else if(!email.includes('@')){
      
      return setSignUpError('올바른 이메일 양식이 아닙니다')
    } else if(pass.length < 8){

      return setSignUpError('비밀번호는 8자리 이상이어야 합니다')
    }
    let userdata = {
      email : email,
      password : pass,
      nickname : username
    }
    axios.post('https://api.projects1faker.com/getUserRanks',{
     nickname : username
    }).then((res) =>{
      if(res.data.length === 0){
        return setSignUpError('언랭 유저는 가입불가 합니다')
      } else {
        axios.post('https://api.projects1faker.com/signUp',{
      data : userdata
    })
    .then((res) => {
      if(res.data.message === "Email already exists"){
       return setSignUpError('이미 존재하는 이메일입니다.')
      }
      else if(res.data.message === "Nickname already exists"){
       return setSignUpError('이미 가입된 닉네임입니다')
      }

     else if(res.message === 'Create account successfully'){
        SignInSetEmail('')
        SignInSetPassword('')
        setSignUpError('')
        offSignUp()
      }
    })
  }


    })
  }

  const offAllMode = () => {
    SignInSetEmail('')
    SignInSetPassword('')
    setSignUpError('')
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
            {pageWidth > 500 ? <img src="https://ifh.cc/g/gerpqs.png"></img> : <img src="https://ifh.cc/g/JDLL6X.png"></img>} 
              <input value={SignInEmail} onChange={(e) => setEmailfromInput(e)} placeholder="Email" className="typeBar" type='email'></input>
              <input value={SignInPassword} onChange={(e) => setPasswordfromInput(e)} placeholder="Password" className="typeBar" type="password"></input>
              {loginError ? <div className="errorMessageDiv">{loginError}</div> : <div className="NoErrorMessageDiv"></div>}
             <button className="btnSignIn" onClick={signInUser}>Log In</button>
              <button className="btnSignUp" onClick={() => {toSignUp()}}>회원가입</button>

            </div>
          </div>
      </div> 
      : 
      <div className="modalOuter" onClick={offAllMode}>
      <div className="insideModal" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={offAllMode} style={{color : 'white', fontSize: '40px'}}>&times;</span>
        <div className="modalContents">
        <img src="https://ifh.cc/g/gerpqs.png"></img> 
          <input value={email} onChange={(e) => emailSignUp(e)} placeholder="Email" className="typeBar" type='email'></input>
          <input style={{ border: pass.length < 8 ? '2px solid #FF3131' : '2px solid #48FF31'}} value={pass} onChange={(e) => passSignUp(e)} placeholder="Password" className="typeBar" type="password"></input>
          <input value={comPass} onChange={(e) => compassSignUp(e)} placeholder="Comfirm Password" className="typeBar" type="password"></input>
          <input value={username} onChange={(e) => usernameSignUp(e)} placeholder="Riot Username" className="typeBar" type="text"></input>
          {SignUpError ? <div className="errorMessageDiv">{SignUpError}</div> : <div className="NoErrorMessageDiv"></div>}
          <button className="btnSignIn" onClick={() => {postSignUp()}}>회원가입</button>
        </div>
      </div>
  </div> 
    }
    </>
    )
  }
  
  export default LoginModal