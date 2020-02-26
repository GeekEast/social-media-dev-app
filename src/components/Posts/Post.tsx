import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <React.Fragment>
      <Link to="/posts" className="btn">Back to Posts</Link>
      <div className="post bg-white my-1">
        <div>
          <a href="profile.html">
            <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="gravatar"
              className="round-img" />
              <h4>John Doe</h4>
        </a>
      </div>

          <div>
            <p className="my-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit, fugit a, sit, vel maxime impedit reiciendis et delectus rem doloremque consequatur perferendis omnis laboriosam architecto illum dolore! Architecto, mollitia!
        </p>
          </div>
        </div>

        <div className="post-form">
          <div className="post-form-header bg-primary">
            <h3>Leave a comment</h3>
          </div>
          <form action="" className="form my-1">
            <textarea placeholder="Comment on the post"></textarea>
          </form>

          <input type="submit" value="Submit" className="btn btn-dark my-1" />
    
      <div className="posts">
            <div className="post bg-white my-1">
              <div>
                <a href="profile.html">
                  <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="gravatar"
                    className="round-img" />
                    <h4>John Doe</h4>
            </a>
          </div>

                <div>
                  <p className="my-1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit, fugit a, sit, vel maxime impedit reiciendis et delectus rem doloremque consequatur perferendis omnis laboriosam architecto illum dolore! Architecto, mollitia!
            </p>
                  <button className="btn">
                    <i className="fas fa-thumbs-up pxr-1"></i><span>4</span>
                  </button>
                  <button className="btn">
                    <i className="fas fa-thumbs-down pxr-1"></i><span>2</span>
                  </button>

                  <a href="post.html" className="btn btn-primary">
                    Discussion
            </a>
                </div>
              </div>
              <div className="post bg-white my-1">
                <div>
                  <a href="profile.html">
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="gravatar"
                      className="round-img" />
                      <h4>John Doe</h4>
            </a>
          </div>

                  <div>
                    <p className="my-1">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit, fugit a, sit, vel maxime impedit reiciendis et delectus rem doloremque consequatur perferendis omnis laboriosam architecto illum dolore! Architecto, mollitia!
            </p>
                    <button className="btn">
                      <i className="fas fa-thumbs-up pxr-1"></i><span>4</span>
                    </button>
                    <button className="btn">
                      <i className="fas fa-thumbs-down pxr-1"></i><span>2</span>
                    </button>

                    <a href="post.html" className="btn btn-primary">
                      Discussion
            </a>
                  </div>
                </div>
              </div>
            </div>
      
    </React.Fragment>
          )
        }
        
        export default Post
