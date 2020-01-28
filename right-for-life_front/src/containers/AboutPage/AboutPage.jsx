import React from 'react';
import { ABOUT_US } from '../../rootConstants';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import AboutContent from '../../components/AboutContent';
import AboutContacts from '../../components/AboutContacts';

const AboutPage = ({ data }) => {
  const { image, text, facebook, phone, email, additionalContacts } = data;

  return (
    <div className='about-page pb-8 px-5'>
      <AboutContent contentData={{ image, text }} />
      <AboutContacts contactsData={{ facebook, phone, email, additionalContacts }} />
    </div>
  );
};

const dataApi = 'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo3/about_us_info.json';
const wrappedComponent = withFetchDataIndicators(AboutPage, ABOUT_US, dataApi);

export { wrappedComponent as AboutPage };
