import React from "react";
import calcAge from '../../helpers/calcAge';
import {BackAndShareButtons} from "../BackAndShareButtons";
import YouTube from 'react-youtube';
import {ArticleImageGallery} from "../ArticleImageGallery";

import './style.css';

export const Article = ({article}) => {
  let {title, date, photo, text, gallery, videos} = article;

  return (
    <article>
      <div
        className="h-78 rounded-b-xl bg-cover shadow-md bg-center"
        style={{backgroundImage: "url(" + photo + ")"}}
      >
        <BackAndShareButtons />
      </div>
      <h2 className="uppercase font-extrabold text-xl z-20 relative bg-white text-lightgray-700
                 shadow-xl rounded-xl -mt-10 px-8 flex items-center mx-8 mb-10"
          style={{minHeight: "100px"}}
      >
        {title}
      </h2>
      <div className="mx-10 md:mx-20">
        <aside
          className="font-medium text-lightgray-700 text-right text-xl mb-10"
        >
          {calcAge(Number(date))} назад
        </aside>
        <p className="font-medium text-lightgray-600 mb-12">
          {text}
        </p>
        { gallery && gallery.length ? <div className="mb-10">
          <ArticleImageGallery images={gallery} />
        </div> : null }
        { videos && videos.length ? videos.map(video =>
          <div className="video-iframe-container" key={video}>
            <YouTube videoId={video}/>
          </div>) : null }
      </div>
    </article>
  );
};
