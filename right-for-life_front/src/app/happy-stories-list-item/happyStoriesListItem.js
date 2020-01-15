import React from 'react'

export function HappyStoriesListItem(props) {
  return <article>
    <img src={props.image} alt={props.title}/>
    <h2><a href="somewhere">{props.title}</a></h2>
  </article>
}