import React from 'react';
import calcAge from '../../helpers/calcAge';

class Card extends React.Component {


  render() {
    const {name, age, photos, gender} = this.props;

    return (
      <li className="animal-details-card w-full flex flex-col">
        <div className="pointer">
          <div className="rounded-xl overflow-hidden">
            <img className="animal-details-card__pet-img cursor-pointer w-full h-full object-cover object-center"
                 onClick={this.handleImgClick} src={photos[0]} alt="Фото питомца"/>

          </div>
        </div>
        <div className="w-11/12 p-4 bg-white text-gray-700 uppercase shadow-xl rounded-b-xl self-center">

          <div>
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg">{name}</p>
              <p className="text-2xl">
                {gender === 'М' ? <i className="fas fa-mars"/> : <i className="fas fa-venus"/>}
              </p>
            </div>

            <p className="text-sm font-medium">{calcAge(age)}</p>

            <button onClick={this.handlePickUpPetClick}
                    className={`animal-details__btn w-full font-bold py-2 px-2 rounded-xl mt-2 focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700`}>
              Приютить
            </button>
          </div>

        </div>
      </li>
    );
  }


  handleImgClick = () => {

  };

  handlePickUpPetClick = () => {

  };
}

export default Card;