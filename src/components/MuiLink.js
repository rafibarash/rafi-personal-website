import React from 'react';
import { Link } from '@material-ui/core';

const MuiLink = (props) => {
  const { children } = props;
  return (
    <Link target="_blank" rel="noopener" {...props}>
      {children}
    </Link>
  );
};

export default MuiLink;
