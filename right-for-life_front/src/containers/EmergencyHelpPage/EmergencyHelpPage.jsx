import React from "react";
import { ArticlesList } from "../../components/ArticlesList";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";
import {withPagination} from "../../hoc/withPagination";

const EmergencyHelpPage = ({ data }) => {
  return (
      <ArticlesList articles={data} listTitle="Cрочная помощь"/>
  );
};

const dataApi = "https://alex-boklag.github.io/SSA-Demo-AnimalShelter/db/emergency.json";
const wrappedComponent = withFetchDataIndicators(withPagination(EmergencyHelpPage), dataApi);

export { wrappedComponent as EmergencyHelpPage }
