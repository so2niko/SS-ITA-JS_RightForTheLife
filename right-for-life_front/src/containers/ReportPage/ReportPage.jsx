import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { API } from '../../rootConstants';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import { ErrorIndicator } from '../../components/ErrorIndicator';
import { ArticleImageGallery } from '../../components/ArticleImageGallery';
import { BackBtn } from '../../components/FloatingBtn';

const ReportPage = ({ data }) => {
  const { id } = useParams();
  const article = data.find(item => item._id === id);

  if (!article)
    return (
      <ErrorIndicator
        message="Страница не найдена :("
        renderAction={() => (
          <Link to="/reports">Вернуться к списку отчетов</Link>
        )}
      />
    );

  return (
    <div>
      <div className="max-w-4xl mx-auto mb-20">
        <h1 className="my-6 font-bold text-lightgray-700 text-4xl uppercase">
          {article.title}
        </h1>
        <BackBtn />
        <ArticleImageGallery images={article.gallery} />
      </div>
    </div>
  );
};

const wrappedComponent = withFetchDataIndicators(ReportPage, API.REPORTS);

export { wrappedComponent as ReportPage };
