import React from 'react';
import { Card } from './Card';
import { BackBtn, ShareBtn } from '../../components/FloatingBtn';
import './style.css';
import { ShareMobile } from './ShareMobile';

export const AnimalDetails = ({ description, ...props }) => (
  <div className="-mt-6 sm:mt-0">
    <BackBtn />

    <div className="hidden sm:block">
      <ShareBtn />
    </div>

    <div
      className="flex-none sm:flex mx-auto px-0 sm:px-4"
      style={{ maxWidth: '800px' }}
    >
      <div className="w-full sm:w-1/2">
        <Card {...props} />
      </div>

      <ShareMobile className="mt-8 -mb-6" />

      <div className="w-full sm:w-1/2 mt-10 sm:mt-5 mb-5 mx-0 sm:ml-12 sm:mr-12 md:mr-8 lg:mr-0 font-medium text-gray-700 border-8 border-transparent">
        {description}
      </div>
    </div>
  </div>
);
