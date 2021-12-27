import React from 'react';
import NextLink from '../NextLink';

export default function Link({ link, children }) {
  return (
    <li className="hover:transition-all hover:text-accent">
      <NextLink href={link}>{children}</NextLink>
    </li>
  );
}
