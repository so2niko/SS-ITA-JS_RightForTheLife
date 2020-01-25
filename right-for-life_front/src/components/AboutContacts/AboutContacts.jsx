import React from 'react';

const AboutContacts = ({ contactsData }) => {
  const { facebook, phone, email, additionalContacts } = contactsData;
  if (!facebook) {
    return null;
  }
  const iconsClassName = 'mx-2 text-5xl';
  const centerItemClass = 'flex flex-row items-center';
  const additionalInfo = additionalContacts ? (
    <div className={`${centerItemClass} font-semibold text-gray-700`}>
      <i className={`fas fa-info-circle text-pink-500 ${iconsClassName}`}></i>
      <span>{additionalContacts.replace(/'/g, '')}</span>
    </div>
  ) : null;

  return (
    <div className='about-contacts-links flex flex-row justify-around'>
      <button
        className={`bg-transparent text-gray-700 font-semibold py-2 px-4 border border-transparent hover:border-blue-800 hover:text-blue-800 hover:bg-blue-200  rounded-xl`}
      >
        <a
          className={centerItemClass}
          href={`${facebook}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i
            className={`fab fa-facebook-square text-blue-700 ${iconsClassName}`}
          ></i>
          <span>Facebook</span>
        </a>
      </button>
      <button
        className={` bg-transparent text-gray-700 font-semibold py-2 px-4 border border-transparent hover:border-green-800 hover:bg-green-200  rounded-xl`}
      >
        <a href={`tel:${phone}`} className={`${centerItemClass}`}>
          <i
            className={`fas fa-phone-square-alt text-green-500 ${iconsClassName}`}
          ></i>
          <span>{phone.replace(/'/g, '')}</span>
        </a>
      </button>
      <button
        className={` bg-transparent text-gray-700 font-semibold py-2 px-4 border border-transparent hover:border-red-800 hover:bg-red-200  rounded-xl`}
      >
        <a href={`mailto:${email}`} className={`${centerItemClass}`}>
          <i className={`fas fa-envelope text-red-500 ${iconsClassName}`}></i>
          <span>{email}</span>
        </a>
      </button>
      {additionalInfo}
    </div>
  );
};

export default AboutContacts;
