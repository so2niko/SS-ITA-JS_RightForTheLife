import React, { useState, useEffect } from 'react';
import { HappyStoriesListItem } from '../../components/HappyStoriesListItem/index';

export function HappyStoriesList(props) {

  const [ happyStoriesData, setHappyStoriesData ] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/AlexeyKasaev3/softServe-academy/master/demo-3-data/news.json')
      .then(response => response.json())
      .then(stories => setHappyStoriesData(stories))
  }, []);

  return <div className="container mx-auto">
      <h1 className="uppercase mb-20 text-3xl font-bold">Истории</h1>
    {happyStoriesData && (
      <>
        {happyStoriesData.map( story =>
          <HappyStoriesListItem key={story.id} image={story.image} title={story.title} />
        )}
      </>
    )
    }
  </div>
}