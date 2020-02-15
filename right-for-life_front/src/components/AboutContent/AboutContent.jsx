import React from 'react';

const AboutContent = ({ text }) => {
  if (!text) {
    return null;
  }
  return (
    <div>
      <div className="text-justify md:mx-16 mx-4">
        {text.map((par, i) => {
          return (
            <p className="my-3 rounded-xl bg-gray-300 p-5" key={i}>
              {par}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default AboutContent;
