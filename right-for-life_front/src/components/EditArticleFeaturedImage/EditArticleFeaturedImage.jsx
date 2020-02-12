import React, { useState, useRef } from 'react';
import PropTypes from "prop-types";

export const EditArticleFeaturedImage = ({image, imageChangeHandler}) => {

  const [currentImage, setCurrentImage] = useState(image);
  const inputRef = useRef();

  return (
    <div
      className="h-78 rounded-b-xl bg-cover shadow-md bg-center flex"
      style={{backgroundImage: "url(" + currentImage  + ")"}}
    >
      <div className="m-auto">
        <input
          className="hidden"
          type="file"
          ref={inputRef}
          accept="image/*"
          id="imageInput"
          onChange={() => {
            const inputData = new FormData();
            inputData.set('image', inputRef.current.files[0]);
            fetch("https://api.imgbb.com/1/upload?key=9bb650fa23db8e445857ad9b20e41c2b", {
              method: "POST",
              body: inputData,
            })
              .then(res => res.json())
              .then(json => {
                imageChangeHandler(json.data.url);
                setCurrentImage(json.data.url);
              })
              .catch(err => console.log(err));
          }}
        />
        <label
          htmlFor="imageInput"
          className="p-4 rounded-xl bg-gray-300 hover:bg-gray-400 cursor-pointer shadow-2xl"
        >
          {currentImage ? 'Изменить изображение' : 'Установить изображение'}
        </label>
      </div>
    </div>
  )
}

EditArticleFeaturedImage.propTypes = {
  image: PropTypes.string,
  imageChangeHandler: PropTypes.func.isRequired
}
