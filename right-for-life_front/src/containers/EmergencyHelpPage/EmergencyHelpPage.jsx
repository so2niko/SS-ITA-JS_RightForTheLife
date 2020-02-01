import React from "react";
import { API } from "../../rootConstants";
import { ArticlesList } from "../../components/ArticlesList";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";
import { withPagination } from "../../hoc/withPagination";

const EmergencyHelpPage = ({ data }) => {
  return (
    <ArticlesList articles={data} listTitle="Cрочники"/>
  );
};

const wrappedComponent = withFetchDataIndicators(
  withPagination(EmergencyHelpPage, 10),
  API.EMERGENCY_HELP,
);

export { wrappedComponent as EmergencyHelpPage };
