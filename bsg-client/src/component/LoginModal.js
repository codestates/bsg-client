import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signingInUser } from '../store/action/users';



const Modal = ({isOpen, openModal ,closeModal}) => {

  const dispatch = useDispatch();
  
  const [signUp, setSignUp] = useState(false);
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
    // dispatch(signingInUser(userdata))
    console.log(userNow)
    if(userNow){
      closeModal()
    }
  }
  
  return ( 
    <>
    {isOpen ? 
      <div className="modalOuter">
        <div onClick={closeModal}>
          <div className="insideModal" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modalContents">
            <img src="https://ifh.cc/g/XpHtKW.png"></img>
              <input onChange={setEmailfromInput} placeholder="Email" className="typeBar" type='email'></input>
              <input onChange={setPasswordfromInput} placeholder="Password" className="typeBar" type="password"></input>
              <button className="btnModal" onClick={() => {signInUser()}}>로그인</button>
              <button className="btnModal">회원가입</button>
            </div>
          </div>
        </div>
      </div> : null
    }
    </>
    )
  }
  
  export default Modal