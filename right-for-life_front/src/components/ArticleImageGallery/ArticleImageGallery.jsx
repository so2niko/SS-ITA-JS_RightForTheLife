import React, { useReducer } from "react";
import Carousel, { Modal, ModalGateway } from 'react-images';

import './style.css';

export const ArticleImageGallery = ({images}) => {

  images = images.map(image => ({src: image}));

  const galleryInitialState = {
    isModalOpen: false,
    selectedImage: 0
  };

  const galleryReducer = (state, action) => {
    switch(action.type) {
      case 'TOGGLE_LIGHTBOX':
        return {
          isModalOpen: !state.isModalOpen,
          selectedImage: action.selectedImage || 0
        };
      default :
        return state;
    }
  };

  const [galleryState, galleryDispatch] = useReducer(galleryReducer, galleryInitialState);

  return (
    <>
      <div className="flex flex-wrap -mx-2">
        {images.map((image, i) => (
          <div className="w-1/2 md:w-1/3 p-1" key={i}>
            <img
              src={image.src}
              alt=""
              className="object-cover h-40 md:h-48 w-full cursor-pointer hover:opacity-75"
              onClick={() => galleryDispatch({type: 'TOGGLE_LIGHTBOX', selectedImage: i})}
            />
          </div>
        ))}
      </div>
      <ModalGateway>
        {galleryState.isModalOpen ? (
          <Modal
            onClose={() => galleryDispatch({type: 'TOGGLE_LIGHTBOX'})}
            allowFullscreen={false}
          >
            <Carousel
              views={images}
              currentIndex={galleryState.selectedImage}
              styles={{
                view: base => ({
                  ...base,

                  '& > img': {
                    display: 'inline',
                  },
                }),
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
    )
}