import React from 'react';
import Slider from 'react-slick';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import { API } from '../../rootConstants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutCarousel.css';

const AboutCarousel = ({ data }) => {
  const sliderSettings = {
    className: 'about__slider bg-gray-300 rounded-xl',
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <div className='mt-4 mb-10 about__slider-wrapper'>
      <Slider {...sliderSettings}>
        {data.photos.map((photoUrl, idx) => (
          <div key={idx} className='about__slider-item'>
            <img
              className='about__slider-img rounded-lg'
              src={photoUrl}
              alt='фото приюта'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default withFetchDataIndicators(AboutCarousel, API.ABOUT_US);
