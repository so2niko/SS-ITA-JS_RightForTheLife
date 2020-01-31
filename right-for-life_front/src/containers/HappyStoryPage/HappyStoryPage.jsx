import React from 'react'
import { HAPPY_STORIES } from '../../rootConstants';
import {withFetchDataIndicators} from "../../hoc/withFetchDataIndicators";
import {ErrorIndicator} from "../../components/ErrorIndicator";
import {Link, useParams} from "react-router-dom";
import {Article} from "../../components/Article";

const HappyStoryPage = ({data}) => {
  const {id} = useParams();
  const article = data.find(article => article.id === Number(id));
  if (!article)
    return <ErrorIndicator
      message="Страница не найдена :("
      renderAction={() => <Link to="/">Вернуться на главную</Link>}
    />;
  return (
    <div className="-mt-10 max-w-4xl mx-auto">
      <Article article={article} />
    </div>
  );
};

const dataApi = 'https://raw.githubusercontent.com/AlexeyKasaev3/softServe-academy/master/demo-3-data/news.json';
const wrappedComponent = withFetchDataIndicators(HappyStoryPage, HAPPY_STORIES, dataApi);

export {wrappedComponent as HappyStoryPage};