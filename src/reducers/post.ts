import { API } from '../services/api';
import _ from 'lodash';

// types
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS';
export const POSTS_GET_SUCCESS = 'POSTS_GET_SUCCESS';
export const POST_GET_SUCCESS = 'POST_GET_SUCCESS';
export const POST_DELETE_SUCCESS = 'POST_DELETE_SUCCESS';
export const POST_ERROR = 'POST_ERROR';
export const POST_START = 'POST_START';
export const POST_LIKE_ADD_SUCCESS = 'POST_LIKE_SUCCESS';
export const POST_LIKE_DELETE_SUCCESS = 'POST_LIKE_DELETE_SUCCESS';
export const POST_COMMENT_ADD_SUCCESS = 'POST_COMMENT_ADD_SUCCESS';
export const POST_COMMENT_REMOVE_SUCCESS = 'POST_COMMENT_REMOVE_SUCCESS';

// reducers
const initialState = {
  entities: {},
  ids: [],
  isLoading: true,
  error: {}
}

export const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_LIKE_DELETE_SUCCESS:
    case POST_LIKE_ADD_SUCCESS:
      const { post_id, likes } = payload;
      return { ...state, entities: { ...state.entities, [post_id]: { ..._.get(state, `entities.${post_id}`), likes: [...likes] } } }
    case POST_COMMENT_REMOVE_SUCCESS:
    case POST_COMMENT_ADD_SUCCESS:
    case POST_GET_SUCCESS:
    case POST_CREATE_SUCCESS: return { ...state, entities: { ...state.entities, [payload._id]: payload }, ids: [...state.ids, payload._id], isLoading: false }
    case POSTS_GET_SUCCESS: return { ...state, entities: { ...state.entities, ..._.keyBy(payload, '_id') }, ids: [...state.ids, ..._.map(payload, '_id')], isLoading: false }
    case POST_DELETE_SUCCESS: return { ...state, entities: { ..._.omit(state.entities, payload._id) }, ids: [..._.remove(state.ids, payload._id)], isLoading: false }
    case POST_ERROR: return { ...state, error: payload, isLoading: false }
    case POST_START: return { ...state, isLoading: true }
    default: return state;
  }
}

// actions creators
export const createPost = (post) => dispatch => {
  dispatch({ type: POST_START })
  API.post('/posts', post)
    .then(({ data }) => dispatch({ type: POST_CREATE_SUCCESS, payload: data }))
    .catch(({ response }) => dispatch({ type: POST_ERROR, payload: { msg: response.data.msg, status: response.status }  }))
}

export const getPosts = () => dispatch => {
  dispatch({ type: POST_START });
  API.get('/posts')
    .then(({ data }) => {
      // console.log(data);
      dispatch({ type: POSTS_GET_SUCCESS, payload: data })
    })
    .catch(({ response }) => dispatch({ type: POST_ERROR, payload: { msg: response.data.msg, status: response.status }  }))
}

export const getPost = (id) => dispatch => {
  dispatch({ type: POST_START });
  API.get(`/posts/${id}`)
    .then(({ data }) => dispatch({ type: POST_GET_SUCCESS, payload: data }))
    .catch(({ response }) => dispatch({ type: POST_ERROR, payload: { msg: response.data.msg, status: response.status }  }))
}

export const deletePost = (id) => dispatch => {
  dispatch({ type: POST_START });
  API.delete(`/posts/${id}`)
    .then(({ data }) => dispatch({ type: POST_DELETE_SUCCESS, payload: data }))
    .catch(({ response }) => dispatch({ type: POST_ERROR, payload: { msg: response.data.msg, status: response.status }  }))
}

export const addLikeToPost = (id) => dispatch => {
  dispatch({ type: POST_START });
  API.put(`/posts/likes/${id}`)
    .then(({ data }) => dispatch({ type: POST_LIKE_ADD_SUCCESS, payload: { post_id: id, likes: data } }))
    .catch(({ response }) => dispatch({ type: POST_ERROR, payload: { msg: response.data.msg, status: response.status }  }))
}


export const deleteLikeToPost = (id) => dispatch => {
  dispatch({ type: POST_START })
  API.delete(`/posts/likes/${id}`)
    .then(({ data }) => {
      dispatch({ type: POST_LIKE_DELETE_SUCCESS, payload: { post_id: id, likes: data } })
    })
    .catch(({ response }) => dispatch({ type: POST_ERROR, payload: { msg: response.data.msg, status: response.status }  }))
}

export const addCommentToPost = (id) => dispatch => {
  dispatch({ type: POST_START })
  API.put(`/posts/comments/${id}`)
    .then(({ data }) => dispatch({ type: POST_COMMENT_ADD_SUCCESS, payload: data }))
    .catch(({ response }) => dispatch({ type: POST_ERROR, payload: { msg: response.data.msg, status: response.status }  }))
}

export const deleteCommentToPost = (id) => dispatch => {
  dispatch({ type: POST_START })
  API.delete(`/posts/comments/${id}`)
    .then(({ data }) => dispatch({ type: POST_COMMENT_REMOVE_SUCCESS, payload: data }))
    .catch(({ response }) => dispatch({ type: POST_ERROR, payload: { msg: response.data.msg, status: response.status } }))
}