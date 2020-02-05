import React from "react";
import Carousel, { ModalGateway, Modal } from 'react-images';

export const PhotosModal = ({imagesArr, imageIndex}) => (
  <ModalGateway>

    {imageIndex !== null ? (
      <Modal
        onClose={() => window.history.back()}
        allowFullscreen={false}>
        <Carousel
          views={imagesArr}
          currentIndex={imageIndex}
          components={{
            View: props => <img className="m-auto max-h-screen max-w-screen" src={props.data.source} alt="Фото питомца"/>,
            FooterCount: props => props.views.length < 2 ? <div/> :
              <div>{props.currentIndex + 1}/{props.views.length}</div>,
          }}
        />
      </Modal>
    ) : null}
  </ModalGateway>

);