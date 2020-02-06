import React from "react";
import { API } from "../../rootConstants";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";
import AboutContent from "./AboutContent";
import AboutContacts from "./AboutContacts";
import { Title } from "../../components/Title"

const AboutPage = ({data: {photos, text, facebook, phone, email, instagram}}) => {
  console.log(Title)
return (
  <div>
    <Title title="О нас"/>
    <div className="about-page pb-8 px-5">
      <AboutContent photos={photos} text={text}/>
      <AboutContacts
        facebook={facebook}
        phone={phone}
        email={email}
        instagram={instagram}/>
    </div>
  </div>
);
}


const wrappedComponent = withFetchDataIndicators(AboutPage, API.ABOUT_US);

export { wrappedComponent as AboutPage };
