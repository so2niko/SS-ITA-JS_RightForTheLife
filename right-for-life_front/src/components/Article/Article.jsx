import React, { useState } from "react";
import calcAge from '../../helpers/calcAge';
import { BackBtn, ShareBtn } from '../FloatingBtn';
import YouTube from 'react-youtube';
import {ArticleImageGallery} from "../ArticleImageGallery";
import { DonateButton } from "../DonateButton";
import { useLocation } from 'react-router-dom';


import './style.css';

export const Article = ({article}) => {
  const [originalArticleData, setOriginalArticleData] = useState(article);
  const [modifiedArticleData, setModifiedArticleData] = useState(article);
  const isEditMode = true;

  const {title, date, photo, text, gallery, videos} = article;
  const { pathname: currentURL } = useLocation();

  return (
    <article>
      <BackBtn position="left-0 ml-2 mt-6"/>
      <ShareBtn position="right-0 mr-2 mt-6"/>

      <div
        className="h-78 rounded-b-xl bg-cover shadow-md bg-center flex"
        style={{backgroundImage: "url(" + (isEditMode ? modifiedArticleData.photo : originalArticleData.photo)  + ")"}}
      >
        {isEditMode ? (
          <div className="m-auto">
            <button>
              {modifiedArticleData.photo ? 'Изменить изображение' : 'Установить изображение'}
            </button>
          </div>
        ) : null
        }
      </div>
      <div className="uppercase font-extrabold text-xl z-20 relative bg-white text-lightgray-700
                 shadow-xl rounded-xl -mt-10 px-8 flex items-center mx-8 mb-10 justify-between"
          style={{minHeight: "100px"}}
      >
        {title}
        {currentURL.includes('emergency') ? <DonateButton style={{marginLeft:'10px'}}/> : null}
      </div>
      <div className="mx-10 md:mx-20">
        <aside
          className="font-medium text-lightgray-700 text-right text-xl mb-10"
        >
          {calcAge(Number(date))} назад
        </aside>
      </div>
        { gallery?.length ? (
          <div className="mb-10 md:mx-20">
            <ArticleImageGallery images={gallery} />
          </div>
        ) : null }
      <div className="mx-10 md:mx-20">
        <p className="font-medium text-lightgray-600 mb-12">
          {text}
        </p>
        { videos?.length ? videos.map(video =>
          <div className="video-iframe-container" key={video}>
            <YouTube videoId={video} />
          </div>) : null }
      </div>
    </article>
  );
};
