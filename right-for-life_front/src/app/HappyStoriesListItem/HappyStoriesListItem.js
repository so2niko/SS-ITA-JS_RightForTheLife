import React from 'react'

export function HappyStoriesListItem({image, title}) {
  return <article>
    <img src={image} alt={title}/>
    <h2><a href="somewhere">{title}</a></h2>
  </article>
}