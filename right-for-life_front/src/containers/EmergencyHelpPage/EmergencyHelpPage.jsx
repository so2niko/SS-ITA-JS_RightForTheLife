import React from "react";
import { ArticlesList } from "../../components/ArticlesList";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";

const EmergencyHelpPage = ({ data }) => {
  return (
    <div className="bg-lightgray-100 min-h-screen pt-16 pb-2">
      <ArticlesList articles={data} listTitle="Cрочная помощь"/>
    </div>
  );
};

const dataApi = "https://alex-boklag.github.io/SSA-Demo-AnimalShelter/db/emergency.json";
const wrappedComponent = withFetchDataIndicators(EmergencyHelpPage, dataApi);

export { wrappedComponent as EmergencyHelpPage }
