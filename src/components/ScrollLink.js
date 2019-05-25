import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = (props) => {
  const { children } = props;
  return (
    <Link spy smooth duration={700} {...props}>
      {children}
    </Link>
  );
};

export default ScrollLink;
