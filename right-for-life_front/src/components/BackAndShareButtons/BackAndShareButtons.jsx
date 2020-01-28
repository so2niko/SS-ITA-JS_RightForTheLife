import React from "react";
import {Link, useLocation} from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";
import './style.css';

export const BackAndShareButtons = () => {
  const {pathname: currentURL} = useLocation();
  const shareUrl = window.location.href;
  return (
    <div className="flex flex-row justify-between">
      <Link to={`${currentURL.slice(0, currentURL.lastIndexOf('/'))}`}
            className="rounded-full h-12 w-12 flex items-center justify-center
                       bg-white px-0 py-0 hover:bg-lightgray-200 mt-6 ml-6 ">
        <i className="fa fa-arrow-left" style={{'fontSize': '20px', color: 'gray'}}></i>
      </Link>
      <div className="mt-4 mr-6">
        <div className="share flex flex-col border-white rounded-full pt-2 px-1 ">
          <Link
            className="rounded-full h-12 w-12 flex items-center justify-center bg-white px-0 py-0 hover:bg-lightgray-200 shareBtn self-center mb-2"
            onClick={() => toggleSocialIcons()}
          >
            <i className="fa fa-share-alt" style={{'fontSize': '20px', color: 'gray'}}></i>
          </Link>
          <div className="shareBtns self-center outline-none">
            <div>
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={47} round={true}/>
              </FacebookShareButton>
            </div>
            <div>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={47} round={true}/>
              </WhatsappShareButton>
            </div>
            <div>
              <ViberShareButton url={shareUrl}>
                <ViberIcon size={47} round={true}/>
              </ViberShareButton>
            </div>
            <div>
              <TelegramShareButton url={shareUrl}>
                <TelegramIcon size={47} round={true}/>
              </TelegramShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>)
};

function toggleSocialIcons() {
  document.querySelector(".shareBtn").classList.toggle('active');
  document.querySelector(".share").classList.toggle('border');
}
