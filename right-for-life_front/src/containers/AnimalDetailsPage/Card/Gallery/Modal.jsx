import React from "react";
import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import "./style.css"

export class Modal extends React.Component {
  maxSize = 2000;

  componentDidMount() {
    this.pswpElement = document.querySelector('.pswp');

    this.items = this.props.photos.map(src => ({src, ...this.getSizes()}));
  }

  init = ({index, getThumbBoundsFn, sizes}) => {
    this.items = sizes && this.prevSizes !== sizes ?
      sizes.map((imgSize, index) => ({src: this.items[index].src, ...imgSize})) : this.items;
    this.prevSizes = sizes;

    const options = {
      index,
      getThumbBoundsFn,
      showHideOpacity: true,
      bgOpacity: 0.7,
      closeOnScroll: false,
      loop: false,
      fullscreenEl: false,
      zoomEl: false,
      shareEl: false,
      preloaderEl: false,
    };

    this.gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, this.items, options);
    this.gallery.init();
  };

  // if sizes not loaded yet
  getSizes = () => {
    const documentWidth = document.body.clientWidth;
    const documentHeight = document.body.clientHeight;

    return {
      w: documentWidth < this.maxSize ? documentWidth : this.maxSize,
      h: documentHeight < this.maxSize ? documentHeight : this.maxSize
    }
  };

  render() {
    return <div/>
  };
}
