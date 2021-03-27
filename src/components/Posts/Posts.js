import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {
        posts.map(post => { // loop through posts prop
          return (
            <Post // <--- post param
              post={post}
              likePost={likePost}
              key={post.id} // <-- every react component needs a unique id when looped over
            />
          )
        })}
      {/* Check the implementation of Post to see what props it requires! */}
    
    </div>
  );
};

export default Posts;
