import ImageGallery from "react-image-gallery";
import React from "react";
import PropTypes from "prop-types";
import "./style.css"

export class Gallery extends React.Component {
  currentSlide = 0;

  render() {
    const {photos, slideInterval, additionalClass,} = this.props;

    return (
      <div className="image-gallery-edited">
        <this.HeaderMask/>
        <ImageGallery
          ref={i => this.imageGallery = i}
          items={this.createItemsArr(photos)}
          showPlayButton={false}
          autoPlay={true}
          disableKeyDown={true}
          slideInterval={slideInterval}
          showFullscreenButton={false}
          showThumbnails={false}
          additionalClass={additionalClass}
          onTouchStart={() => this.imageGallery.pause()}
          onTouchEnd={() => this.imageGallery.play()}
          renderLeftNav={this.renderNav.bind(this, false)}
          renderRightNav={this.renderNav.bind(this, true)}
          onSlide={i => this.currentSlide = i}
          showBullets={true}
        />
      </div>
    )
  }

  createItemsArr = (photos) => {
    const {imgClass, alt} = this.props;

    return (
      photos.map(src => ({
        original: src,
        bulletOnClick: () => false,
        renderItem: (props) => (
          <img className={`outline-none cursor-default ${imgClass}`}
               src={props.original}
               key={props.original}
               style={{height: '400px'}}
               onDragStart={e => e.preventDefault()}
               alt={alt}/>
        )
      }))
    );
  };

  renderNav = (isRight, onClick, disabled) => (
    <div
      className={`nav z-10 align-middle justify-center text-white h-full absolute top-0 
         ${isRight ? 'right-0' : ''}
         ${disabled ? 'hidden' : 'hidden sm:flex'}`}>
      <div
        className={`h-12 w-12 cursor-pointer m-auto flex align-middle justify-center rounded-full shadow-md 
        ${isRight ? 'mr-3' : 'ml-3'}`}
        style={{background: 'rgba(0, 8, 44, 10%)'}}
        onClick={() => {
          this.imageGallery.pause();
          this.imageGallery.play();
          onClick()
        }}>
        <i className={`fas fa-chevron-${isRight ? 'right' : 'left'} m-auto text-xl`}/>
      </div>
    </div>
  );

  // prevent clicking
  HeaderMask = () => (
    <div className="relative h-0">
      <div className="z-20 absolute top-0 h-8 w-full"/>
    </div>
  );

}

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  slideInterval: PropTypes.number,
  additionalClass: PropTypes.string,
  imgClass: PropTypes.string,
  alt: PropTypes.string,
};

Gallery.defaultProps = {
  slideInterval: 6000,
  additionalClass: 'rounded-xl overflow-hidden',
  //imgClass: 'object-top object-cover w-full',
  imgClass: 'object-contain w-full',
  alt: 'Фонд "Мы за право на жизнь"',
};

export default Gallery;