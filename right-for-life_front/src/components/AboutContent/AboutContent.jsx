import React from 'react';

const AboutContent = ({ contentData }) => {
  const { image, text } = contentData;
  if (!image || !text) {
    return null;
  }
  return (
    <div>
      <img
        className='w-full object-cover rounded-xl'
        src={`${image}`}
        alt='shelters pets'
      />
      <div className='text-justify mx-16 '>
        {text.map((par, i) => {
          return (
            <p className='my-3 rounded-xl bg-gray-300 p-5' key={i}>
              {par}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default AboutContent;
