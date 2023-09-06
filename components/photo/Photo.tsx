import React from 'react';
type Props = {
  photo: any;
};
const Photo = ({ photo: { src, name } }: Props) => {
  return <ime src={src} alt={name} />;
};

export default Photo;
