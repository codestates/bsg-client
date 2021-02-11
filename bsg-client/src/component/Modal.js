import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setErrorMessage, signingInUser } from '../store/action/users';
import LoginSignUpModal from '../component/LoginSignUpModal'


const Modal = ({isOpen, closeModal, openModal}) => {

  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState(null)
  const [isSignUp, setSignUp] = useState(false);
  const [SignInEmail, SignInSetEmail] = useState('');
  const [SignInPassword, SignInSetPassword] = useState('');
  const getErrorFromStore = useSelector((state) => state.userData.errorMessage)

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
    dispatch(signingInUser(userdata)).then(() => {
      if(getErrorFromStore !== null){
       return setLoginError(getErrorFromStore)
      } else if(getErrorFromStore === null) {
        dispatch(setErrorMessage(null))
        setLoginError(null)
        closeModal()
        return 
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