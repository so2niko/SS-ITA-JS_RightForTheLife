import React from "react";
import Card from './Card';
import { BackBtn, ShareBtn } from '../../components/FloatingBtn'
import './style.css'

export class AnimalDetails extends React.Component {
  render() {
    const {description} = this.props;

    return (
      <div>
        <BackBtn />
        <ShareBtn />

        <div className="flex-none sm:flex mx-auto px-0 sm:px-4" style={{maxWidth: '800px'}}>
          <div className="w-full sm:w-1/2">
            <Card {...this.props} />
          </div>

          <div className="w-full sm:w-1/2 mt-10 sm:mt-5 mb-5 mx-0 sm:mx-12 font-medium text-gray-700 border-8 border-transparent">
            {description}
          </div>
        </div>
      </div>
    )
  }
}


