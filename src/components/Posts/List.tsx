import React, { useEffect, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, createPost } from '../../reducers/post';
import { postsSelector } from '../../selectors/index';
import _ from 'lodash';
import Item from './Item';

const List = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("")
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  const posts = useSelector(postsSelector);
  // console.log(posts.entities)

  const handlePostSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ text }))
  }


  return (
    <React.Fragment>
      <h1 className="large text-primary">
        Posts
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community
      </p>

      <div className="post-form">
        <div className="post-form-header bg-primary">
          <h3>Say something...</h3>
        </div>
        <form action="" className="form my-1" onSubmit={handlePostSubmit}>
          <textarea placeholder="Create a post" value={text} onChange={e => setText(e.target.value)} />
          <input type="submit" value="Submit" className="btn btn-dark my-1" />
        </form>

        <div className="posts">
          {_.map(posts.entities, post => <Item key={post._id} post_id={post._id}/>)}
        </div>
      </div>

    </React.Fragment>
  )
}

export default memo(List);
