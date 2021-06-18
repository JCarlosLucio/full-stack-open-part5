import React, { useState } from 'react';

const Blog = ({ blog }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  const details = { display: visible ? '' : 'none' };

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
        <button onClick={toggleVisibility}>view</button>
      </div>
      <div style={details}>
        <div>{blog.url}</div>
        <div>
          likes {blog.likes}
          <button>like</button>
        </div>
        <div>{blog.user.name}</div>
      </div>
    </div>
  );
};
export default Blog;
