import React from 'react';

const AboutContent = ({ photos, text }) => (
    <div>
      <div className='text-justify mx-16 '>
        <p className="my-3 rounded-xl bg-gray-300 p-5">
          {text}
        </p>
      </div>
    </div>
);

export default AboutContent;
