import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import React from "react";

export class HeaderMobile extends React.Component {
  state = {
    categoriesClosed: true,
  };

  componentDidMount() {
    window.addEventListener('popstate', this.hideCategories);
    window.addEventListener('resize', this.hideCategories);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.hideCategories);
    window.removeEventListener('resize', this.hideCategories);
  }

  render() {
    return (
      <nav className="block lg:hidden">
        <ul className="fixed flex justify-center items-center w-full bg-white shadow-2xl z-40 h-16 bottom-0">
          <div className="mx-2 cursor-pointer" onClick={this.toggleCategories}>
            <img width="40px" src={logo} alt="logo"/>
          </div>
        </ul>

        {this.state.categoriesClosed ? null : (
          <div>
            <div className="opacity-25 bg-black fixed w-full h-full z-30" onClick={this.hideCategories}/>
            <ul
              className="rounded-t-xl fixed flex flex-col justify-between items-center w-full bg-gray-100 shadow-2xl font-bold text-xl text-gray-600 z-30 bottom-0 mb-16 py-8">
              <HeaderLink to="/" title="Главная" onClick={this.hideCategories}/>

              <HeaderButton to="/help" title="Помощь" color="green" onClick={this.hideCategories}/>
              <HeaderLink to="/animals" title="Питомцы" onClick={this.hideCategories}/>
              <HeaderLink to="/stories" title="Счастливые истории" onClick={this.hideCategories}/>

              <HeaderButton to="/emergency" title="Срочники" color="red" onClick={this.hideCategories}/>
              <HeaderLink to="/news" title="Новости" onClick={this.hideCategories}/>
              <HeaderLink to="/about" title="О нас" onClick={this.hideCategories}/>
            </ul>
          </div>
        )}

      </nav>
    )
  }

  toggleCategories = () => {
    if(this.state.categoriesClosed) {
      this.showCategories();
    } else {
      this.hideCategories();
    }
  };

  hideCategories = () => {
    this.setState({categoriesClosed: true});
    document.body.style.overflow = null;
  };

  showCategories = () => {
    document.body.style.overflow = 'hidden';
    this.setState({categoriesClosed: false});
  };
}

const HeaderButton = ({to, title, color, onClick}) => (
  <NavLink
    className={`header-element my-2 cursor-pointer text-${color}-700 bg-${color}-200 py-1 px-3 rounded-lg hover:bg-${color}-300 hover:text-${color}-800`}
    exact
    to={to}
    activeClassName={`bg-${color}-300 text-${color}-800`}>
    <div onClick={onClick}>{title}</div>
  </NavLink>
);

const HeaderLink = ({to, title, onClick}) => (
  <NavLink
    exact
    className="header-element my-1 cursor-pointer hover:text-gray-700"
    to={to}
    activeClassName="text-gray-700">
    <div onClick={onClick}>{title}</div>
  </NavLink>
);