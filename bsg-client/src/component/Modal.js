import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setErrorMessage, signingInUser } from '../store/action/users';
import LoginSignUpModal from '../component/LoginSignUpModal'


const Modal = ({isOpen, closeModal}) => {

  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState('')
  const [isSignUp, setSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userNow = useSelector((state) => state.userData.userNow)

  const setEmailfromInput = (e) => {
    setEmail(e.target.value)
  }

  const setPasswordfromInput = (e) => {
    setPassword(e.target.value)
  }

  const signInUser = () => {
    if(email.length === 0 || password.length === 0){
      return setLoginError('공백이 있습니다')
    }
    let userdata = {
      email : email,
      password : password
    }
    console.log(userdata)
    dispatch(signingInUser(userdata))
    
        closeModal()
  
    
  }

  const toSignUp = () => {
    setEmail('')
    setPassword('')
    setSignUp(true)
  }

  const offSignUp = () => {
    setEmail('')
    setPassword('')
    setLoginError('')
    setSignUp(false)
  }
  
  return ( 
    <>
    {
    isOpen ? <LoginSignUpModal 
    setPasswordfromInput={setPasswordfromInput} 
    setEmailfromInput={setEmailfromInput}
    closeModal={closeModal}
    signInUser={signInUser}
    toSignUp={toSignUp}
    isSignUp={isSignUp}
    offSignUp={offSignUp}
    loginError={loginError}
    /> : null
    }
    </>
    )
  }
  
  export default Modal