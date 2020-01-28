import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageCarousel = ({ data }) => {
    const sliderSettings = {
        className: "w-full h-80",
        dots: true,
        infinite: true,
        speed: 2500,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <div className="h-80 flex items-center justify-center rounded-xl mb-4">
            <Slider {...sliderSettings}>
                {data.slice(0, 9).map((item, idx) => (
                    <div key={idx}>
                        <div
                            className="h-80 rounded-xl bg-cover bg-top"
                            style={{ backgroundImage: "url(" + item.photo + ")" }}
                        ></div>
                    </div>
                ))}
            </Slider>
        </div>
    )
};