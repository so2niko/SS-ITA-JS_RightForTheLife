import React from 'react';

export const HomeArticle = ({
  title,
  description,
  setTitle,
  setDescription,
  isEdit,
}) => {
  return (
    <article className="py-5">
      <h1
        className={`mb-3 px-5 text-3xl font-bold text-lightgray-700 rounded-lg ${
          isEdit ? 'py-1 bg-orange-200' : ''
        }`}
        contentEditable={isEdit}
        suppressContentEditableWarning
        onBlur={event => setTitle(event.target.textContent)}
      >
        {title}
      </h1>
      <p
        className={`mt-2 px-5 text-justify text-lightgray-800 rounded-lg whitespace-pre-wrap ${
          isEdit ? 'py-3 bg-orange-200' : ''
        }`}
        contentEditable={isEdit}
        suppressContentEditableWarning
        onBlur={event => setDescription(event.target.textContent)}
      >
        {description}
      </p>
    </article>
  );
};
