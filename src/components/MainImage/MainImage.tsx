import React, { FC } from 'react';
import { IPropsMainImage } from 'core/interfaces/props';
import { ContainerImage, Image } from 'components/MainImage/style';

const MainImage: FC<IPropsMainImage> = ({ width, height, src }) => {
  return (
    <ContainerImage width={width} height={height}>
      <Image src={src}></Image>
    </ContainerImage>
  );
};

export default MainImage;
