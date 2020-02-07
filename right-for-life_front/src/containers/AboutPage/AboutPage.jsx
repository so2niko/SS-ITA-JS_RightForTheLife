import React from "react";
import { API } from "../../rootConstants";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";
import AboutContent from "./AboutContent";
import AboutContacts from "./AboutContacts";
import { Title } from "../../components/Title"
import "./style.css"

const AboutPage = ({data: {photos, text, facebook, phone, email, instagram}}) => (
  <div className="about-page pb-8 mx-2 md:mx-20">
    <Title title="О нас"/>
    <AboutContent photos={photos} text={text}/>
    <AboutContacts
      facebook={facebook}
      phone={phone}
      email={email}
      instagram={instagram}/>
  </div>
);

const wrappedComponent = withFetchDataIndicators(AboutPage, API.ABOUT_US);

export { wrappedComponent as AboutPage };
