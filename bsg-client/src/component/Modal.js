import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signingInUser } from '../store/action/users';
import LoginSignUpModal from '../component/LoginSignUpModal'


const Modal = ({isOpen, closeModal}) => {

  const dispatch = useDispatch();
  
  const [isSignUp, setSignUp] = useState(false);
  const [email, setEmail] = useState({ email : '' });
  const [password, setPassword] = useState({ password : '' });

  const userNow = useSelector((state) => state.userData.userNow)

  const setEmailfromInput = (e) => {
    setEmail({ email : e.target.value })
  }

  const setPasswordfromInput = (e) => {
    setPassword({ password : e.target.value })
  }

  const signInUser = () => {
    let userdata = {
      email : email,
      password : password
    }
    dispatch(signingInUser(userdata))
    console.log(userNow)
    if(userNow){
      closeModal()
    }
  }

  const toSignUp = () => {
    setEmail('')
    setPassword('')
    setSignUp(true)
  }

  const offSignUp = () => {
    setEmail('')
    setPassword('')
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
    /> : null
    }
    </>
    )
  }
  
  export default Modal