import React from 'react'

export function HappyStoriesListItem({image, title}) {
  return <article>
    <a href="somewhere" className="block">
      <div className="overflow-hidden">
        <img className="object-cover h-64 w-full" src={image} alt={title}/>
      </div> 
      <h2>{title}</h2>
    </a>
  </article>
}