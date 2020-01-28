import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HOME } from '../../rootConstants';
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";

const sliderSettings = {
    className: "w-full h-80",
    dots: true,
    infinite: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 5000
};

const ImageCarousel = ({data}) => {
    return (
        <div className="h-80 flex items-center justify-center rounded-xl mb-4">
            <Slider {...sliderSettings}>
                {data.slice(0, 9).map(animal => (
                    <div>
                        <div
                            className="h-80 rounded-xl bg-cover bg-top"
                            style={{ backgroundImage: "url(" + animal.photo + ")" }}
                        ></div>
                    </div>
                ))}
            </Slider>
        </div>
    )
};

const dataApi = 'https://raw.githubusercontent.com/AlexeyKasaev3/softServe-academy/master/demo-3-data/news.json';
const wrappedComponent = withFetchDataIndicators(ImageCarousel, HOME, dataApi);

export { wrappedComponent as ImageCarousel };