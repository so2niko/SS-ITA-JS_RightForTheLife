import React from "react";
import { API } from "../../rootConstants";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";
import AboutContent from "../../components/AboutContent";
import AboutContacts from "../../components/AboutContacts";

const AboutPage = ({ data }) => {
  console.log(data);
  const { image, text, facebook, phone, email, additionalContacts } = data;

  return (
    <div className="about-page pb-8 px-5">
      <AboutContent contentData={{ image, text }} />
      <AboutContacts
        contactsData={{ facebook, phone, email, additionalContacts }}
      />
    </div>
  );
};

const wrappedComponent = withFetchDataIndicators(AboutPage, API.ABOUT_US);

export { wrappedComponent as AboutPage };
