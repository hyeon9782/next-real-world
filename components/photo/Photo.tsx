import Image from 'next/image';
import React from 'react';
type Props = {
  photo: any;
};
const Photo = ({ photo: { src, name } }: Props) => {
  return <Image src={src} alt={name} width={100} height={100} />;
};

export default Photo;
