import React from 'react';
import ImageGallery from 'react-image-gallery';


class AboutContent extends React.Component {
  imageGallery = React.createRef();

  render() {
    const {photos, text} = this.props;

    return (
      <div>
        <div className='text-justify'>
          <ImageGallery
            ref={i => this.imageGallery = i}
            items={this.createItemsArr(photos)}
            showPlayButton={false}
            autoPlay={true}
            disableKeyDown={true}
            slideInterval={6000}
            showFullscreenButton={false}
            showThumbnails={false}
            additionalClass="rounded-xl overflow-hidden"
            onTouchStart={() => this.imageGallery.pause()}
            onTouchEnd={() => this.imageGallery.play()}
            renderLeftNav={this.renderNav.bind(this, false)}
            renderRightNav={this.renderNav.bind(this, true)}
            showBullets={true}
          />

          <p className="my-3 rounded-xl bg-gray-300 text-gray-700 p-5 font-medium">
            {text}
          </p>
        </div>
      </div>
    );
  }

  createItemsArr(photos) {
    return photos.map(src => ({
      original: src,
      renderItem: (props) => (
        <img className="object-contain w-full outline-none cursor-default"
             src={props.original}
             key={props.original}
             style={{height: '400px'}}
             onDragStart={e => e.preventDefault()}
             alt="Фото о нас"/>
      )
    }))
  }

  renderNav = (isRight, onClick, disabled) => (
    <div onClick={() => {
      this.imageGallery.pause();
      this.imageGallery.play();
      onClick()
    }}
         className={`nav z-10 cursor-pointer align-middle justify-center text-white text-3xl h-full w-16 absolute top-0 
         ${isRight ? 'right-0' : ''}
         ${disabled ? 'hidden' : 'hidden sm:flex'}
         `}
         style={{background: 'rgba(0,0,0,0.1)'}}>
      <i className={`fas fa-chevron-${isRight ? 'right' : 'left'} m-auto`}/>
    </div>
  );
}

export default AboutContent;
