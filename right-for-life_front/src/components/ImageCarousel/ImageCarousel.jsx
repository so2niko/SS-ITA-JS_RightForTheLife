import React from 'react';
// import Carousel from 'react-images';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './ImageCarousel.css';

export const ImageCarousel = ({ data, page }) => {
  const { photosHome, photos } = data;
  const getPhotos = () => {
    let photosData;
    switch (page) {
      case 'home':
        photosData = photosHome;
        break;
      case 'about':
        photosData = photos;
        break;
    }
    return photosData.map(el => {
      return { image: el };
    });
  };
  const getSliderClass = () => {
    let sliderClasses;
    switch (page) {
      case 'home':
        sliderClasses = '';
        break;
      case 'about':
        sliderClasses = '';
        break;
    }
    return sliderClasses;
  };

  return (
    <div>
      <Slider autoplay={2500} className={`slider ${page}Slider`}>
        {getPhotos().map((slide, index) => (
          <div
            key={index}
            style={{
              background: `url('${slide.image}') no-repeat center center `,
              backgroundSize: 'contain'
            }}
          >
            <h2>{slide.title}</h2>
            <div>{slide.description}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
