import React, { useState } from 'react';

const Blog = ({ blog, likeBlog, removeBlog, user }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  const showDetails = { display: visible ? '' : 'none' };

  const showWhenOwner = {
    display: user.username === blog.user.username ? '' : 'none',
  };

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        <button onClick={toggleVisibility}>{visible ? 'hide' : 'view'}</button>
      </div>
      <div style={showDetails}>
        <div>{blog.url}</div>
        <div>
          likes {blog.likes}
          <button onClick={likeBlog}>like</button>
        </div>
        <div>{blog.user.name}</div>
        <div style={showWhenOwner}>
          <button onClick={removeBlog}>remove</button>
        </div>
      </div>
    </div>
  );
};
export default Blog;
