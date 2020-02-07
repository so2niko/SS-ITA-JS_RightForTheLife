import React from "react";
import Gallery from "../../components/Gallery";


const AboutContent = ({photos, text}) => (
  <div className='text-justify'>
    <Gallery photos={photos} alt="О нас"/>

    {text.map(paragraph => (
      <p className="my-3 text-lightgray-600 px-5 py-1 font-medium">
        {paragraph}
      </p>
    ))}
  </div>
);

export default AboutContent;
