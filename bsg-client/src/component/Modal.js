import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nowLogIn, setDataUserNow, getUserData, setAccessToken } from '../store/action/users';
import LoginSignUpModal from '../component/LoginSignUpModal'
const axios = require('axios')

const Modal = ({isOpen, closeModal, openModal}) => {

  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState(null)
  const [isSignUp, setSignUp] = useState(false);
  const [SignInEmail, SignInSetEmail] = useState('');
  const [SignInPassword, SignInSetPassword] = useState('');
  const tokenNow = useSelector(state => state.userData.accessToken)

  const setEmailfromInput = (e) => {
    SignInSetEmail(e.target.value)
  }

  const setPasswordfromInput = (e) => {
    SignInSetPassword(e.target.value)
  }

  const signInUser = () => {
    if(SignInEmail.length === 0 || SignInPassword.length === 0){
      return setLoginError('공백이 있습니다')
    }
    let userdata = {
      email : SignInEmail,
      password : SignInPassword
    }
    
        axios.post('https://api.projects1faker.com/login', {
          email : userdata.email,
          password : userdata.password
        })
        .then((res) => {
          console.log(res.data.message)
          if(res.data.message === 'ok'){
            dispatch(setAccessToken(res.data.data.accessToken))
            localStorage.setItem("Token", res.data.data.accessToken)
            axios.get('https://api.projects1faker.com/getUserInfo', {
            headers: {
              'authorization': `Bearer ${res.data.data.accessToken}` 
            }
          }).then((res) => {
          dispatch(nowLogIn())
          dispatch(getUserData(res.data.data.userInfo))
          axios.post('https://api.projects1faker.com/getUserRanks',{
         nickname : res.data.data.userInfo.nickname
        }).then((res) => {
          localStorage.setItem("UserData", res.data[0].tier)
          localStorage.setItem("RankData", JSON.stringify(res.data[0]))
          dispatch(setDataUserNow(res.data[0]))
          setLoginError(null)
          closeModal()
        })
          })
          } else if(res.data.message === 'Invalid user or Wrong password'){
            setLoginError('존재하지 않거나 잘못된 정보입니다')
          }
          
        })
    
  }

  const toSignUp = () => {
    setSignUp(true)
  }

  const offSignUp = () => {
    setSignUp(false)
  }
  
  return ( 
    <>
    {
    isOpen ? <LoginSignUpModal 
    setPasswordfromInput={setPasswordfromInput} 
    setEmailfromInput={setEmailfromInput}
    openModal={openModal}
    closeModal={closeModal}
    signInUser={signInUser}
    toSignUp={toSignUp}
    isSignUp={isSignUp}
    offSignUp={offSignUp}
    loginError={loginError}
    SignInEmail={SignInEmail}
    SignInPassword={SignInPassword}
    SignInSetEmail={SignInSetEmail}
    SignInSetPassword={SignInSetPassword}
    /> : null
    }
    </>
    )
  }
  
  export default Modal