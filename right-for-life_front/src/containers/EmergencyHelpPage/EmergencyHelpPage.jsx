import React from 'react';
import { API } from '../../rootConstants';
import { ArticlesList } from '../../components/ArticlesList';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';

const EmergencyHelpPage = props => (
  <ArticlesList articles={props.data.docs} listTitle="Cрочники" />
);

const wrappedComponent = withFetchDataIndicators(
  EmergencyHelpPage,
  API.EMERGENCY_HELP,
  true,
);

export { wrappedComponent as EmergencyHelpPage };
