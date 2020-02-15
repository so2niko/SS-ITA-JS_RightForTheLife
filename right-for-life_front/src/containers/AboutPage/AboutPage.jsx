import React from 'react';
import { API } from '../../rootConstants';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import AboutContent from '../../components/AboutContent';
import AboutContacts from '../../components/AboutContacts';
import { ImageCarousel } from '../../components/ImageCarousel';

const AboutPage = ({ data }) => {
  const { text, facebook, phone, email, instagram, additionalContacts } = data;

  return (
    <div className="about-page pb-8 px-5">
      <h2 className="px-4 font-bold text-lightgray-700 text-4xl uppercase">
        О нас
      </h2>
      <ImageCarousel data={data} page="about" />
      <AboutContent text={text} />
      <AboutContacts
        contactsData={{ facebook, phone, email, additionalContacts, instagram }}
      />
    </div>
  );
};

const wrappedComponent = withFetchDataIndicators(AboutPage, API.ABOUT_US);

export { wrappedComponent as AboutPage };
