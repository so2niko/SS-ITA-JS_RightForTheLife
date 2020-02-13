import React from "react";
import { API } from "../../rootConstants";
import { ImageCarousel } from "../../components/ImageCarousel";
import { HomeArticle } from "../../components/HomeArticle";
import { ArticlesListWidget } from "../../components/ArticlesListWidget";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";

export const HomePage = () => (
  <article className="flex flex-col lg:flex-row flex-1 pb-8">
    <section className="w-full lg:w-2/3 p-5">
      <ImageCarouselWithData page={'home'}/>
      <HomeArticleWithData />
    </section>
    <section className="w-full lg:w-1/3 lg:h-auto p-5">
      <ArticlesListWidgetWithData url="news" />
    </section>
  </article>
);

const ImageCarouselWithData = withFetchDataIndicators(
  ImageCarousel,
  API.ABOUT_US,
);

const HomeArticleWithData = withFetchDataIndicators(
  HomeArticle,
  API.ABOUT_US,
);

const ArticlesListWidgetWithData = withFetchDataIndicators(
  ArticlesListWidget,
  API.NEWS,
  true,
);
