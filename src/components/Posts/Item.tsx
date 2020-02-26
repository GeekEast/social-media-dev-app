import React, { useMemo, memo } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addLikeToPost, deleteLikeToPost } from '../../reducers/post';
import _ from 'lodash';
import { createSelector } from 'reselect';
import { postsSelector } from '../../selectors/index';

const makePostSelector = () => createSelector(
  postsSelector,
  (_, id) => id,
  (posts, id) => _.get(posts, `entities.${id}`)
)

const Item = ({ post_id }) => {
  const dispatch = useDispatch()
  const postSelector = useMemo(makePostSelector, [])
  const post = useSelector(state => postSelector(state, post_id), shallowEqual)

  return (
    <React.Fragment>
      <div className="post bg-white my-1">
        <div>
          <Link to={`/profile/${post.user}`}>
            <img src={`https:${post.avatar}`} alt="gravatar"
              className="round-img" />
            <h4>{post.name}</h4>
          </Link>
        </div>

        <div>
          <p className="my-1">
            {post.text}
          </p>
          <button className="btn" onClick={() => dispatch(addLikeToPost(post_id))}>
            <i className="fas fa-thumbs-up pxr-1"></i><span>{_.size(post.likes)} Like</span>
          </button>

          <button className="btn" onClick={() => dispatch(deleteLikeToPost(post_id))}>
            <i className="fa fa-thumbs-down pxr-1"></i><span>Unlike</span>
          </button>

          <Link to={`/post/${post_id}`} className="btn btn-primary">
            Discussion
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default memo(Item)
