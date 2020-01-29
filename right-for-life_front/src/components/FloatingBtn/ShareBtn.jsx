import React from "react";
import { FloatingBtn } from "./FloatingBtn.jsx";
import PropTypes from "prop-types";
import CSSTransition from 'react-addons-css-transition-group';
import {
  FacebookShareButton,
  FacebookIcon,

  ViberShareButton,
  ViberIcon,

  TelegramShareButton,
  TelegramIcon,

  WhatsappShareButton,
  WhatsappIcon,

} from "react-share";

export class ShareBtn extends React.Component {
  state = {
    closed: false
  };

  buttonComponentsArr = [
    {
      key: 'facebook-btn',
      btn: FacebookShareButton,
      icon: FacebookIcon
    },
    {
      key: 'viber-btn',
      btn: ViberShareButton,
      icon: ViberIcon
    },
    {
      key: 'telegram-btn',
      btn: TelegramShareButton,
      icon: TelegramIcon
    },
    {
      key: 'whatsapp-btn',
      btn: WhatsappShareButton,
      icon: WhatsappIcon
    },
  ];

  render() {
    const {position, shareUrl = window.location.href,} = this.props;

    return (
      <div className="relative width-full">
        <FloatingBtn
          icon={this.state.closed ? 'fa-share-alt' : 'fa-times'}
          position={position}
          onClick={this.handleClick.bind(this)}/>

        {this.buttonComponentsArr.map((item, index) => (
          <div key={item.key} style={{transform: `translate(0, ${70 * (index + 1)}px)`}}>
            <CSSTransition
              transitionName="floating-button__extend"
              transitionEnter={false}
              transitionLeaveTimeout={250}>
              {this.state.closed ? null :
                <div data-floating-btn-index={index + 1}>
                  <FloatingBtn
                    position={position}
                    content={(
                      <item.btn url={shareUrl}>
                        <item.icon size={35} round={true}/>
                      </item.btn>
                    )}/>
                </div>
              }
            </CSSTransition>
          </div>
        ))}
      </div>)
  }

  handleClick() {
    this.setState({closed: !this.state.closed})
  }
}

ShareBtn.propTypes = {
  shareUrl: PropTypes.string,
  position: PropTypes.string,
};

ShareBtn.defaultProps = {
  position: 'right-0 mr-2 mt-2',
};
