import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../component/Nav'
import Modal from '../component/LoginModal'
import axios from 'axios';

const MainBoard = () => {

const [posts, setPosts] = useState([]);

    return(
    <>
    <container className = 'container'>
    {posts.map((post, index) => {
        <div className = 'postBox'>
        <div>{post.title}</div>
        <div>{post.body}</div>
    </div>
    })}
    </container>
    </>
    )
}

export default MainBoard;