// CustomHead.tsx
import React from 'react';

interface CustomHeadProps {
  title: string;
  meta?: React.ReactNode;
  styles?: React.ReactNode;
  scripts?: React.ReactNode;
}

const CustomHead: React.FC<CustomHeadProps> = ({ title, meta, styles, scripts }) => {
  return (
    <head>
      <title>{title}</title>
      {meta}
      {styles}
      {scripts}
    </head>
  );
};

export default CustomHead;
