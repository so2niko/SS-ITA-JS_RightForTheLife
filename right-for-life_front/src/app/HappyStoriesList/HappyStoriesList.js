import React, { useState, useEffect } from 'react';
import { HappyStoriesListItem } from '../HappyStoriesListItem';

export function HappyStoriesList(props) {

  const [ happyStoriesData, setHappyStoriesData ] = useState(null);
  const [ isStoriesDisplayed, setIsStoriesDisplayed ] = useState(false);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/AlexeyKasaev3/softServe-academy/master/demo-3-data/news.json')
      .then(response => response.json())
      .then(stories => setHappyStoriesData(stories))
  }, []);

  return <div>
    <button
      onClick={() => setIsStoriesDisplayed(!isStoriesDisplayed)}
    >
      { isStoriesDisplayed ? 'Hide Stories' : 'Show Stories' }
    </button>
    {isStoriesDisplayed && happyStoriesData && (
      <>
        <h1>Истории</h1>
        {happyStoriesData.map( story =>
          <HappyStoriesListItem key={story.id} image={story.image} title={story.title} />
        )}
      </>
    )
    }
  </div>
}