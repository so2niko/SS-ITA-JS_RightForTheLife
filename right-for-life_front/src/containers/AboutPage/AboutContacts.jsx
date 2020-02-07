import React from 'react';

const AboutContacts = ({facebook, phone, email, instagram}) => {
  const iconsClassName = 'mx-2 text-4xl';
  return (
    <div className="flex flex-wrap justify-center">
      <Contact color="blue" href={facebook} title="Facebook" newTab={true}>
        <i className={`fab fa-facebook-square text-blue-700 ${iconsClassName}`}/>
      </Contact>

      <Contact color="green" href={'tel:' + phone} title={`${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6)}`}>
        <i className={`fas fa-phone-square-alt text-green-500 ${iconsClassName}`}/>
      </Contact>

      <Contact color="red" href={`mailto:${email}`} title={email}>
        <i className={`fas fa-envelope text-red-500 ${iconsClassName}`}/>
      </Contact>

      <Contact color="purple" href={instagram} title="instagram" newTab={true}>
        <i className={`fab fa-instagram text-purple-600 ${iconsClassName}`}/>
      </Contact>
    </div>
  );
};

const Contact = ({color, href, newTab, children, title}) => (
  <div
    className={`contact-btn text-gray-700 font-semibold py-2 px-4 border border-transparent hover:border-${color}-800 hover:text-${color}-800 hover:bg-${color}-200 rounded-xl w-full sm:w-1/2 lg:w-1/4 lg:mx-3`}>
    <a className="flex flex-row items-center" href={href} target={newTab ? '_blank' : null} rel="noopener noreferrer">
      {children}
      {title}
    </a>
  </div>
);

export default AboutContacts;
