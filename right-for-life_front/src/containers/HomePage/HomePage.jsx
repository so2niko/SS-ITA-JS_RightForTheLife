import React from 'react';
import { API } from '../../rootConstants';
import { ImageCarousel } from '../../components/ImageCarousel';
import { HomeArticle } from '../../components/HomeArticle';
import { ArticlesListWidget } from '../../components/ArticlesListWidget';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';

const HomePage = ({ data }) => (
  <article className="flex flex-col lg:flex-row flex-1 pb-8">
    <section className="w-full lg:w-2/3 p-5">
      <ImageCarousel data={data.gallery} page="home" />
      <HomeArticle {...data} />
    </section>
    <section className="w-full lg:w-1/3 lg:h-auto p-5">
      <ArticlesListWidget url="news" />
    </section>
  </article>
);

const wrappedComponent = withFetchDataIndicators(HomePage, API.HOME);

export { wrappedComponent as HomePage };
