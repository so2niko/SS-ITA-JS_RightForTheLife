import React from "react";
import Carousel from 'react-images';
import { PhotosModal } from "./PhotosModal";

export class Photos extends React.Component {
  state = {
    imageIndex: null,
  };

  closeModal = () => this.setState({imageIndex: null});

  componentDidMount() {
    window.addEventListener('popstate', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.closeModal);
  }

  render() {
    const {imagesArr} = this.props;

    return (
      <div className="animal-details-card__pet-img-container">
        {
          imagesArr.length < 2 ?
            (
              <img className="animal-details-card__pet-img cursor-pointer w-full h-full object-cover object-center"
                   onClick={() => this.onClickImg(0)} src={imagesArr[0].source} alt="Фото питомца"/>
            ) : (

              <Carousel
                views={imagesArr}
                frameProps={{
                  autoSize: 'height',
                  accessibility: false
                }}

                components={{
                  View: this.View,
                  Footer: this.Footer,
                  NavigationPrev: props => <this.Navigation {...props}/>,
                  NavigationNext: props => <this.Navigation isRight={true} {...props}/>,
                }}

                hideControlsWhenIdle={1000}
              />
            )
        }

        <PhotosModal imagesArr={imagesArr} imageIndex={this.state.imageIndex}/>
      </div>
    )
  };

  onClickImg = (index) => {
    window.history.pushState(null, null, '#');
    this.setState({imageIndex: index});
  };

  View = (props) => (
    <img
      className="animal-details-card__pet-img cursor-pointer w-full h-full object-cover object-center"
      src={props.data.source} alt="Фото питомца" onClick={() => this.onClickImg(props.currentIndex)}/>
  );

  Footer = (props) => {
    const Point = ({active}) => (
      <div
        className={`my-auto footer-point bg-white rounded-full opacity-50 mx-2 ${active ? 'h-2 w-2' : 'h-1 w-1'}`}/>
    );

    const currentIndex = props.currentIndex;
    const indexCount = props.views;


    return (
      <div className="absolute self-center flex mt-3 align-middle">
        {indexCount.map((i, index) => {
          const active = index === currentIndex;
          return <Point active={active} key={index}/>
        })}
      </div>
    );
  };

  Navigation = ({innerProps, isRight}) => (
    <div onClick={innerProps.onClick}
         className={`cursor-pointer flex align-middle justify-center text-white text-3xl h-full w-16 absolute top-0 
         ${isRight ? 'right-0' : ''}`}
         style={{background: 'rgba(255,255,255,0.15)'}}>
      <i className={`fas fa-chevron-${isRight ? 'right' : 'left'} m-auto`}/>
    </div>
  )
}