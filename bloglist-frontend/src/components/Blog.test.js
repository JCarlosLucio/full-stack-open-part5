import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Blog from './Blog';

describe('<Blog />', () => {
  test('should display title and author but not url or likes', () => {
    const blog = {
      title: 'The Title for the test',
      author: 'The Blog Author',
      url: 'http://localhost:8080',
      likes: 0,
      user: {
        username: 'yoshi',
        name: 'Yoshi',
      },
    };

    const component = render(<Blog blog={blog} />);
    expect(component.container).toHaveTextContent('The Title for the test');
    expect(component.container).toHaveTextContent('The Blog Author');

    const blogDetails = component.container.querySelector('.blogDetails');
    expect(blogDetails).toHaveStyle('display: none');
  });
});
