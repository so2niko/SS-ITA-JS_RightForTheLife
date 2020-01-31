import React from "react";
import { EMERGENCY_HELP } from '../../rootConstants';
import { ArticlesList } from "../../components/ArticlesList";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";
import {withPagination} from "../../hoc/withPagination";

const EmergencyHelpPage = ({ data }) => {
  return (
      <ArticlesList articles={data} listTitle="Cрочники"/>
  );
};

const dataApi = "https://alex-boklag.github.io/SSA-Demo-AnimalShelter/db/emergency.json";
const wrappedComponent = withFetchDataIndicators(withPagination(EmergencyHelpPage, 10), EMERGENCY_HELP, dataApi);

export { wrappedComponent as EmergencyHelpPage }
