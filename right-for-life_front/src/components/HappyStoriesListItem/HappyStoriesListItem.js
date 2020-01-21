import React from 'react'

export const  HappyStoriesListItem = ({image, title}) =>
  <article>
    <a href="somewhere" className="block mb-20">
      <div className="overflow-hidden rounded-lg">
        <img className="object-cover h-64 w-full" src={image} alt={title} />
      </div> 
      <h2 className="
        uppercase
        text-2xl
        font-bold
        p-6
        rounded-lg
        bg-white
        -mt-10
        mx-10
        relative
        shadow-2xl-light"
      >{title}</h2>
    </a>
  </article>
