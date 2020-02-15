import React from 'react';
import { PopUpContacts } from '../../../components/PopUpContacts';
import calcAge from '../../../helpers/calcAge';
import { Gallery } from './Gallery';
import './style.css';

export class Card extends React.Component {
  state = {
    modalIsOpen: false,
  };

  closeModal = () => this.setState({ modalIsOpen: false });

  showModal = () => {
    window.history.pushState(null, null, '#');
    this.setState({ modalIsOpen: true });
  };

  componentDidMount() {
    window.addEventListener('popstate', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.closeModal);
  }

  render() {
    const { name, age, photos, gender } = this.props;

    return (
      <>
        {this.state.modalIsOpen && (
          <PopUpContacts handleShowingModal={() => window.history.back()} />
        )}
        <li className="animal-details-card w-full flex flex-col">
          <div className="pointer">
            <div className="rounded-b-xl sm:rounded-xl overflow-hidden shadow-lg z-0 relative -mx-3 sm:mx-0">
              <Gallery photos={photos} />
            </div>
          </div>
          <div className="w-11/12 p-4 bg-white text-gray-700 uppercase shadow-xl rounded-b-xl self-center">
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg">{name}</p>
                <p className="text-2xl">
                  {gender === 'М' ? (
                    <i className="fas fa-mars" />
                  ) : (
                    <i className="fas fa-venus" />
                  )}
                </p>
              </div>

              <p className="text-sm font-medium">{calcAge(age)}</p>

              <button
                onClick={this.showModal}
                className="animal-details__btn w-full font-bold py-2 px-2 rounded-xl mt-2 focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700"
              >
                Приютить
              </button>
            </div>
          </div>
        </li>
      </>
    );
  }
}
