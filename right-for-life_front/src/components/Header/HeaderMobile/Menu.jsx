import React from 'react';
import { HeaderItem } from './HeaderItem';

export const Menu = () => (
  <ul
    className="rounded-t-xl flex flex-col justify-between items-center w-full bg-gray-100 font-bold text-xl text-gray-600 py-8 mx-auto mt-20"
    style={{ maxWidth: '700px' }}
  >
    <HeaderItem to="/" title="Главная" />

    <HeaderItem to="/help" title="Помощь" color="green" />
    <HeaderItem to="/animals" title="Питомцы" />
    <HeaderItem to="/stories" title="Счастливые истории" />

    <HeaderItem to="/emergency" title="Срочники" color="red" />
    <HeaderItem to="/news" title="Новости" />
    <HeaderItem to="/about" title="О нас" />
  </ul>
);
