import React from "react";
import ImageGallery from 'react-image-gallery';

import './style.css';

export const ArticleImageGallery = ({images}) => {
  images = images.map(image => ({original: image, thumbnail: image}));

  return <ImageGallery items={images} showPlayButton={false}/>
}