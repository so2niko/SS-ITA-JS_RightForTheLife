import logo from "../../../assets/logo.jpg";
import React from "react";
import { CSSTransition } from 'react-transition-group';
import { Menu } from "./Menu"
import './style.css'

export class HeaderMobile extends React.Component {
  menuContainer = React.createRef();
  state = {
    pagesListVisible: false,
  };
  useOrNotBack = false;

  componentDidMount() {
    window.addEventListener('popstate', this.removePagesListElem);
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024)
        this.hidePagesList()
    });
  }

  render() {
    return (
      <nav className="block lg:hidden">
        <ul
          className="header-element fixed flex justify-center items-center w-full bg-white shadow-2xl z-40 h-16 bottom-0 cursor-pointer"
          onClick={this.togglePagesList}>
          <div className="mx-2">
            <img width="40px" src={logo} alt="logo"/>
          </div>
        </ul>

        <div>
          <CSSTransition
            in={this.state.pagesListVisible}
            unmountOnExit={true}
            timeout={300}
            classNames="header__mobile-menu-bg">
            <div className="opacity-25 bg-black fixed w-full h-full z-30 bottom-0"
                 onClick={this.hidePagesList}/>
          </CSSTransition>

          <div
            className="header__mobile-menu-container fixed justify-center items-center w-full z-30 bottom-0 mb-16 overflow-auto"
            style={{maxHeight: 'calc(100vh - 4rem)'}}
            ref={this.menuContainer}>

            <CSSTransition
              in={this.state.pagesListVisible}
              unmountOnExit={true}
              timeout={300}
              classNames="header__mobile-menu"
              onEntering={() => this.menuContainer.current.style.overflow = 'hidden'}
              onExiting={() => this.menuContainer.current.style.overflow = 'hidden'}
              onEntered={() => this.menuContainer.current.style.overflow = null}
              onExited={() => this.menuContainer.current.style.overflow = null}
            >

              {/* fixme: If you open a category, then go back, and want to go back,
               *** you need to double-click back to return from this page
              possible solution: you need to call history.back() before redirecting to the category
              */}
              <Menu hidePagesList={() => {
                this.removePagesListElem();
              }}/>

            </CSSTransition>

          </div>
        </div>


      </nav>
    )
  }

  togglePagesList = () => {
    if (this.state.pagesListVisible) {
      this.hidePagesList();
    } else {
      this.showPagesList();
    }
  };

  hidePagesList = () => {
    // on too much clicks pushState didn't called
    if (this.useOrNotBack) {
      window.history.back();
      this.useOrNotBack = false;
    }
  };

  removePagesListElem = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    this.setState({pagesListVisible: false});
  };

  showPagesList = () => {
    this.useOrNotBack = true;
    window.history.pushState(null, null, window.location.href);

    this.setState({pagesListVisible: true});

    const scrollTop = window.pageYOffset;

    document.body.style.position = 'fixed';
    document.body.style.maxWidth = '100vw';
    document.body.style.top = `-${scrollTop}px`;
  };
}
