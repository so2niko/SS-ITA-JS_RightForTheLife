import React, { useState } from 'react';
import { API } from '../../rootConstants';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import AboutContent from '../../components/AboutContent';
import AboutContacts from '../../components/AboutContacts';
import { ImageCarousel } from '../../components/ImageCarousel';
import { UpdateImageGallery } from '../../components/UpdateImageGallery';

const AboutPage = ({ data }) => {
  const [state, setState] = useState(data);
  const [isEdit, setIsEdit] = useState(true);
  const { gallery, description, facebook, instagram, phone, email } = state;
  const setNewDescription = (i, text) => {
    // console.log(i, text);
    // console.log(state.description[i]);
    const textArr = [...state.description];
    textArr[i] = text;
    setState({ ...state, description: textArr });
    // setState({ ...state, description: text });
  };

  return (
    <div className="about-page pb-8 px-5">
      <h2 className="mb-6 px-4 font-bold text-lightgray-700 text-4xl uppercase">
        О нас
      </h2>
      <ImageCarousel data={gallery} page="about" />
      <UpdateImageGallery
        images={gallery}
        updateImages={gallery => setState({ ...state, gallery })}
      />
      <AboutContent
        text={description}
        isEditable={isEdit}
        setNewText={setNewDescription}
      />
      <AboutContacts contactsData={{ facebook, phone, email, instagram }} />
    </div>
  );
};

const wrappedComponent = withFetchDataIndicators(AboutPage, API.ABOUT_US);

export { wrappedComponent as AboutPage };
