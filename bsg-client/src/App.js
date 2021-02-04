import './style.css';
// import MainPage from '../src/pages/Mainpage'
import MainBoard from './pages/MainBoard';
import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  return <MainBoard/>;
}

export default App;
