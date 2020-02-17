import React from 'react';
import { API } from '../../rootConstants';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import AboutContent from '../../components/AboutContent';
import AboutContacts from '../../components/AboutContacts';
import { ImageCarousel } from '../../components/ImageCarousel';

const AboutPage = ({ data }) => {
  const { gallery, description, facebook, instagram, phone, email } = data;

  return (
    <div className="about-page pb-8 px-5">
      <h2 className="px-4 font-bold text-lightgray-700 text-4xl uppercase">
        О нас
      </h2>
      <ImageCarousel data={gallery} page="about" />
      <AboutContent text={description} />
      <AboutContacts
        contactsData={{ facebook, phone, email, instagram }}
      />
    </div>
  );
};

const wrappedComponent = withFetchDataIndicators(AboutPage, API.ABOUT_US);

export { wrappedComponent as AboutPage };
