import React from 'react';

const readBoard = (data) => {
    if (!data) {
        return <div>페이지가 없습니다.</div>
      }
    return( 
      <>
      <Nav></Nav>
      <div className = 'postBox'>
        <div className = 'title'>Title</div>
        <div>Body</div>
      </div>
      </>
    )
  }

export default ContentBoard;
