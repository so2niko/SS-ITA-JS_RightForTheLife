import React from 'react';
import AboutContacts from '../../components/AboutContacts';
import AboutContent from '../../components/AboutContent';
import { BE_URL } from '../../helpers/configs.js';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import { ABOUT_US } from '../../rootConstants';

const AboutPage = ({ data }) => {
  console.log(data);
  const { image, text, facebook, phone, email, additionalContacts } = data;

  return (
    <div className='about-page pb-8 px-5'>
      <AboutContent contentData={{ image, text }} />
      <AboutContacts contactsData={{ facebook, phone, email, additionalContacts }} />
    </div>
  );
};

const dataApi = `${BE_URL}/about`;
const wrappedComponent = withFetchDataIndicators(AboutPage, ABOUT_US, dataApi);

export { wrappedComponent as AboutPage };
