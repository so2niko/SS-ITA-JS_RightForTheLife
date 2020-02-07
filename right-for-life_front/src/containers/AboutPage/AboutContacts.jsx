import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

const AboutContacts = ({facebook, phone, email, instagram}) => {
  const iconsClassName = 'mx-2 text-lg';
  return (
    <div className="flex flex-wrap justify-center">
      <Contact color="blue" href={facebook} title="Facebook" newTab={true}>
        <div
          className="animal-details__share-mobile bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md text-gray-700 text-lg h-12 w-12 mx-3">

            <FacebookIcon size={35} round={true}/>

        </div>
      </Contact>

      <Contact color="green" href={'tel:' + phone}
               title={`${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6)}`}>
        <div
          className="animal-details__share-mobile bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md text-gray-700 text-lg h-12 w-12 mx-3">

          <div
            className="bg-green-500 rounded-full flex items-center justify-center text-gray-700 h-8 w-8">

            <i className={`fas fa-phone-square-alt text-white ${iconsClassName}`}/>

          </div>



        </div>


      </Contact>

      <Contact color="red" href={`mailto:${email}`} title={email}>
        <div
          className="animal-details__share-mobile bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md text-gray-700  h-12 w-12 mx-3"
          style={{minWidth: '45px'}}>

          <div
            className="bg-red-800 rounded-full flex items-center justify-center text-gray-700  h-8 w-8">

          <i className={`fas fa-envelope text-white ${iconsClassName}`}/>

        </div>
        </div>

      </Contact>

      <Contact color="purple" href={instagram} title="instagram" newTab={true}>
        <div
          className="animal-details__share-mobile bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md text-gray-700 text-lg h-12 w-12 mx-3">

          <div
            className="bg-red-500 rounded-full flex items-center justify-center text-gray-700  h-8 w-8">

            <i className={`fab fa-instagram text-white ${iconsClassName} font-thin`}/>

          </div>



        </div>

      </Contact>
    </div>
  );
};

const Contact = ({color, href, newTab, children, title}) => (
  <div
    className={`contact-btn text-gray-700 font-semibold py-2 px-4 hover:text-gray-800 rounded-lg w-full sm:w-1/2 lg:w-1/4 lg:mx-3 whitespace-no-wrap`}>
    <a className="flex flex-row items-center" href={href} target={newTab ? '_blank' : null} rel="noopener noreferrer">
      {children}
      {title}
    </a>
  </div>
);

export default AboutContacts;
