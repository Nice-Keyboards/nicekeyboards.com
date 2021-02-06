import { chakra } from '@chakra-ui/react';
import React from 'react';

export const Logo = () => {
  return (
    <chakra.svg
      viewBox="0 0 14 6.5"
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      fill="currentColor"
    >
      <path d="M.165 6.418V2.184H3.34v4.234H2.282V3.243H1.224v3.175zm3.705 0V2.184h1.058v4.234zm0-4.763V.597h1.058v1.058zm1.587 4.763V2.184h3.175v1.059H6.515v2.116h2.117v1.059zm5.821-2.646v-.53H10.22v.53zM9.161 6.417V2.184h3.175V4.83H10.22v.53h2.116v1.057zm3.704.001V5.359h1.058v1.059zm0-2.117V.068h1.058V4.3z" />
    </chakra.svg>
  );
}