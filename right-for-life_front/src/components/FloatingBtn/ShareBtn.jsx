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
    closed: true
  };

  render() {
    const {position, shareUrl  = window.location.href, } = this.props;
    return (
      <div className="relative width-full">
        <FloatingBtn
          icon={this.state.closed ? 'fa-share-alt' : 'fa-times'}
          position={position}
          onClick={this.handleClick.bind(this)}
        />

        <div style={{transform: 'translate(0, 70px)'}}>
          <CSSTransition
            transitionName="floating-button__extend-1"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}>
            {this.state.closed ? null :
              <FloatingBtn
                icon="fa-share-alt"
                position={position}
                onClick={() => null}
                content={(
                  <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={35} round={true}/>
                  </FacebookShareButton>
                )}
              />
            }
          </CSSTransition>
        </div>

        <div style={{transform: 'translate(0, 140px)'}}>
          <CSSTransition
            transitionName="floating-button__extend-2"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}>
            {this.state.closed ? null :
              <FloatingBtn
                icon="fa-share-alt"
                position={position}
                onClick={() => null}
                content={(
                  <ViberShareButton url={shareUrl}>
                    <ViberIcon size={35} round={true}/>
                  </ViberShareButton>
                )}

              />
            }
          </CSSTransition>
        </div>

        <div style={{transform: 'translate(0, 210px)'}}>
          <CSSTransition
            transitionName="floating-button__extend-3"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}>
            {this.state.closed ? null :
              <FloatingBtn
                icon="fa-share-alt"
                position={position}
                onClick={() => null}
                content={(
                  <TelegramShareButton url={shareUrl}>
                    <TelegramIcon size={35} round={true}/>
                  </TelegramShareButton>
                )}

              />

            }
          </CSSTransition>
        </div>

        <div style={{transform: 'translate(0, 280px)'}}>
          <CSSTransition
            transitionName="floating-button__extend-4"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}>
            {this.state.closed ? null :
              <FloatingBtn
                icon="fa-share-alt"
                position={position}
                onClick={() => null}
                content={(
                  <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon size={35} round={true}/>
                  </WhatsappShareButton>
                )}

              />

            }
          </CSSTransition>
        </div>
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
  position: 'right-0',
};
