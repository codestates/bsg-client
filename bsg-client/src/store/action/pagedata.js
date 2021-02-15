const axios = require('axios')


export const SEARCH_DATA = 'SEARCH_DATA';

export const GET_VIDEOS = 'GET_VIDEO';

export const GET_BOARD = 'GET_BOARD';
export const GET_BOARD_NOW = 'GET_BOARD_NOW'
export const GET_COMMENT = 'GET_COMMENT';

export const POST_BOARD = 'POST_BOARD';
export const POST_COMMENT = 'POST_COMMENT'

export const searchData = (data) => {
  return {
    type : SEARCH_DATA,
    data
  }
}

export const getVideos = (data) => {
  return {
    type : GET_VIDEOS,
    data
  }
}

export const getBoard = (data) => {
  return {
    type : GET_BOARD,
    data
  }
}

export const SetBoardNow = (data) => {
  return {
    type : GET_BOARD_NOW,
    data
  }
}

export const getComment = (data) => {
  return {
    type : GET_COMMENT,
    data
  }
}

export const postBoard = (data) => {
  return {
    type : POST_BOARD,
    data
  }
}

export const postComment = (data) => {
  return {
    type : POST_COMMENT,
    data
  }
}

export const searchingData = (username) => {
  return (dispatch) => {
    return axios.get('https://api.projects1faker.com/getUserRanks', {
      nickname : username
    })
    .then((res) => {
      dispatch(searchData(res.data))
    }).catch((err) => {
      throw(err)
    })
  }
}

export const gettingVideos = () => {
  return (dispatch) => {
    return axios.get('서버 URL')
    .then((res) => {
      dispatch(getVideos(res.data))
    }).catch((err) => {
      throw(err)
    })
  }
}

export const gettingBoard = () => {
  
    return (dispatch) =>{axios.get('https://api.projects1faker.com/getContent')
    .then((res) => {
      dispatch(getBoard(res.data))
    }).catch((err) => {
      throw(err)
    })
    }
}

export const gettingComment = () => {
  return (dispatch) => {
    return axios.get('https://api.projects1faker.com/getComment')
    .then((res) => {
      dispatch(getComment(res.data))
    }).catch((err) => {
      throw(err)
    })
  }
}

export const posttingComment = (data) => {
  return (dispatch) => {
    return axios.post('https://api.projects1faker.com/postComment',{
      contentid : data.id,
      tier : data.tier,
      comment : data.comment,
      userid : data.userid,
      nickname : data.nickname
    })
  }
}

export const posttingContent = (data) => {
  return (dispatch) => {
    return axios.post('https://api.projects1faker.com/postContent', {
      userid : data.userid,
      tier : data.tier,
      title : data.title,
      body : data.body,
      nickname : data.nickname
    })
  }
}